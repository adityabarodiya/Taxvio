// app/state/madhya-pradesh/fssai/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  Globe, CheckCircle, ClipboardList, AlertCircle,
} from "lucide-react";
import { MP_CITIES, MP_REGIONS, slugifyCity } from "@/data/mp-cities";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "FSSAI Registration & Food License Services Across Madhya Pradesh | Taxvio",
  description:
    "Taxvio provides expert FSSAI services across 400+ cities in Madhya Pradesh — Basic, State & Central food license registration, renewal, modification, annual return filing, notice reply, and license verification. Expert-assisted, 100% online, starting ₹999.",
  keywords: [
    "FSSAI registration Madhya Pradesh",
    "food license MP",
    "FSSAI license Bhopal",
    "FSSAI Indore",
    "food license registration MP",
    "FSSAI renewal MP",
    "FSSAI annual return MP",
    "central food license MP",
    "state food license MP",
    "Taxvio FSSAI MP",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/state/madhya-pradesh/fssai",
  },
  openGraph: {
    title: "FSSAI Food License Services Across 400+ MP Cities | Taxvio",
    description:
      "Expert FSSAI registration, renewal, modification & annual return across all MP cities — expert-assisted, from ₹999.",
    url: "https://www.taxvio.in/state/madhya-pradesh/fssai",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSSAI Services Across MP | Taxvio",
    description:
      "Food license registration, renewal, annual return across 400+ MP cities — from ₹999.",
  },
  robots: { index: true, follow: true },
};

/* ─── Services ──────────────────────────────────────────────────────────────── */
const FSSAI_SERVICES = [
  { label: "FSSAI Basic Registration", price: "₹999",  icon: "🍽️", desc: "Turnover < ₹12L" },
  { label: "State Food License",        price: "₹1,999", icon: "📋", desc: "Turnover ₹12L–20Cr" },
  { label: "Central Food License",      price: "₹3,999", icon: "🏛️", desc: "Turnover > ₹20Cr" },
  { label: "FSSAI Renewal",             price: "₹1,499", icon: "🔄", desc: "All license types" },
  { label: "License Modification",      price: "₹1,299", icon: "✏️", desc: "Address / product" },
  { label: "Annual Return Filing",      price: "₹1,499", icon: "📊", desc: "Manufacturers & importers" },
  { label: "Notice Reply",              price: "₹1,999", icon: "⚖️", desc: "FSSAI notices" },
  { label: "License Verification",      price: "₹299",   icon: "🔍", desc: "Vendor / fraud check" },
];

const SEO_SECTIONS = [
  {
    heading: "FSSAI Registration & Food License Services Across Madhya Pradesh",
    body: `Madhya Pradesh has one of India's most diverse food business ecosystems — encompassing large-scale wheat and soybean processing plants in Indore and Dewas, dairy cooperatives and milk processing units in Bhopal, Morena, and Vidisha, street food vendors and restaurants across all 55 district headquarters, tribal food producers and cottage industries in Jhabua, Alirajpur, Dindori, and Mandla, and organised food retail chains expanding into tier-2 and tier-3 cities. Every person or entity that operates a food business in Madhya Pradesh — whether a home baker in Gwalior, a cloud kitchen in Indore, a restaurant in Ujjain near the Mahakaleshwar temple, or a large spice manufacturer in Ratlam — is legally required to obtain FSSAI (Food Safety and Standards Authority of India) registration or license under the Food Safety and Standards Act, 2006.

Taxvio provides end-to-end FSSAI compliance services across all 400+ cities and towns in Madhya Pradesh — from metro centres like Bhopal, Indore, Jabalpur, Gwalior, and Ujjain to district towns like Satna, Rewa, Sagar, Khandwa, and Chhindwara, and smaller tehsil towns across every MP division. Our food compliance team handles all FSSAI service categories — Basic Registration for petty food business operators, State License for mid-sized manufacturers and traders, and Central License for large-scale processors, importers, and e-commerce food operators.`,
  },
  {
    heading: "FSSAI License Renewal, Annual Returns & Notice Compliance in MP",
    body: `An FSSAI license in Madhya Pradesh is not a one-time compliance — it must be renewed before expiry (penalties of ₹100 per day apply for operations with an expired license), and manufacturers and importers must file annual returns (Form D-1) with the FSSAI authority by May 31 each year. Food businesses that undergo changes in address, product categories, installed capacity, or ownership must file a modification application — and operating with outdated license details is treated as a violation under the FSS Act.

Taxvio's FSSAI renewal and annual return service for MP businesses covers complete eligibility review, document update coordination, online filing on the FoSCoS (Food Safety Compliance System) portal, and status tracking until renewal order or return acknowledgement is received. For MP food businesses that receive FSSAI inspection notices, show cause notices, or improvement notices — our compliance team drafts the complete reply with documentary evidence, coordinates with the designated officer or food safety commissioner, and represents businesses through the rectification process.`,
  },
  {
    heading: "Why MP Food Businesses Trust Taxvio for FSSAI Compliance",
    body: `Madhya Pradesh's food sector spans an extraordinary variety of scales and types — from the soya processing giants in Indore's industrial corridors to the traditional namkeen makers in Ratlam, from the wheat flour mills along the Narmada belt to the tribal honey and forest produce collectors in Balaghat and Mandla, from the pilgrimage economy restaurants in Ujjain and Omkareshwar to the hotel chains expanding in Bhopal's convention corridor. Each food business category has distinct FSSAI licensing requirements — and choosing the wrong license type (Basic vs State vs Central) or missing the annual return deadline creates unnecessary penalties.

Taxvio's FSSAI team advises every MP food business on the correct registration category based on their annual turnover, business type, and operation scale — preventing over-licensing (applying for an expensive Central License when a State License suffices) or under-licensing (operating on a Basic Registration when State License is mandatory). Our WhatsApp-first model ensures that every food business operator in MP — from Indore's restaurant owner to a food manufacturer in the remotest MP town — gets the same expert-quality, personalised FSSAI compliance service without needing to visit a consultant's office.`,
  },
];

const TIER1_CITIES = MP_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = MP_CITIES.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MP Cities — FSSAI Services | Taxvio",
  numberOfItems: MP_CITIES.length,
  itemListElement: MP_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — FSSAI Food License Services`,
    url: `https://www.taxvio.in/state/madhya-pradesh/fssai/${slugifyCity(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorCityCard({
  name,
  district,
  region,
}: {
  name: string;
  district: string;
  region: string;
}) {
  return (
    <Link
      href={`/state/madhya-pradesh/fssai/${slugifyCity(name)}`}
      aria-label={`FSSAI services in ${name}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#14532d] to-[#16a34a] text-white border border-[#166534] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-green-300/20 blur-2xl pointer-events-none" />
      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">🍽️</span>
          <ArrowRight
            size={15}
            className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5"
          />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-green-200 transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-white/50 mt-0.5">
          {district} District · {region}
        </p>
        <div className="flex flex-wrap gap-1 mt-3">
          {["Basic", "State", "Central", "Renewal"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name, district }: { name: string; district: string }) {
  return (
    <Link
      href={`/state/madhya-pradesh/fssai/${slugifyCity(name)}`}
      aria-label={`FSSAI services in ${name}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#14532d] hover:bg-[#14532d]/5 transition-all duration-150"
    >
      <MapPin
        size={9}
        className="text-gray-300 group-hover:text-[#14532d] shrink-0 transition-colors"
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function MPFSSAIIndexPage() {
  return (
    <>
      <Script
        id="mp-fssai-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="bg-[#f3faf4] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#14532d] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#14532d] via-[#0f4023] to-[#052e16]" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(134,239,172,0.12) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(52,211,153,0.08) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">
                  FSSAI Services — Madhya Pradesh
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Madhya Pradesh · 400+ Cities · FSSAI · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  FSSAI Registration &amp; Food License
                  <span className="block mt-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                    Across Madhya Pradesh Cities
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert{" "}
                  <strong className="text-white">
                    Basic, State &amp; Central food license
                  </strong>{" "}
                  registration,{" "}
                  <strong className="text-white">renewal &amp; modification</strong>
                  , annual return filing, notice reply &amp; verification —
                  across all{" "}
                  <strong className="text-white">{MP_CITIES.length}+</strong> MP
                  cities. Expert-assisted, starting{" "}
                  <strong className="text-green-300">₹999</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    {
                      val: `${MP_CITIES.length}+`,
                      label: "MP Cities Covered",
                      icon: Globe,
                    },
                    {
                      val: "6,000+",
                      label: "Licenses Obtained",
                      icon: ClipboardList,
                    },
                    {
                      val: "₹999",
                      label: "Starting Price",
                      icon: TrendingUp,
                    },
                  ].map(({ val, label, icon: Icon }) => (
                    <div
                      key={label}
                      className="text-center rounded-2xl py-4 px-2"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon
                        size={14}
                        className="text-green-300 mx-auto mb-1.5"
                      />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20FSSAI%20services%20in%20MP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-xl active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#14532d] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right — service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">
                  FSSAI services in every MP city
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {FSSAI_SERVICES.map(({ label, price, icon, desc }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.13)",
                      }}
                    >
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/85 truncate">
                          {label}
                        </p>
                        <p className="text-[10px] text-green-300 font-semibold">
                          {price} · {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/30 text-center">
                  100% online · No office visit · Expert-assisted
                </p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "FSSAI Compliance Experts" },
                { icon: Star, label: "4.9★ Rating" },
                { icon: Zap, label: "Same-Day Response" },
                { icon: Shield, label: "FoSCoS Portal Experts" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-green-400 shrink-0" />{" "}
                  {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f3faf4"
            />
          </svg>
        </section>

        {/* ════════ MAJOR CITIES ════════ */}
        <section className="py-16 bg-[#f3faf4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#14532d] to-green-500" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#14532d]">
                  Major Cities
                </p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  FSSAI Services in Key MP Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.map((c) => (
                <MajorCityCard
                  key={c.name}
                  name={c.name}
                  district={c.district}
                  region={c.region}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 CITIES ════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-green-500 to-emerald-700" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-green-700">
                  District HQs &amp; Mid-Sized Cities
                </p>
                <h2 className="text-xl font-extrabold text-gray-800">
                  FSSAI Food License in MP District Towns
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.map((c) => (
                <Link
                  key={c.name}
                  href={`/state/madhya-pradesh/fssai/${slugifyCity(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-[#f3faf4] border border-[#d1fae5] rounded-xl hover:border-[#14532d]/30 hover:shadow-sm hover:bg-white transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#14532d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#14532d] transition-all">
                    <MapPin
                      size={13}
                      className="text-[#14532d] group-hover:text-white transition-all"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-800 group-hover:text-[#14532d] transition truncate">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {c.district}
                    </p>
                  </div>
                  <ArrowRight
                    size={11}
                    className="ml-auto shrink-0 text-gray-300 group-hover:text-[#14532d] transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ALL CITIES BY REGION ════════ */}
        <section className="py-20 bg-[#f3faf4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#14532d] bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                All MP Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#14532d] mt-4">
                FSSAI Services — All Madhya Pradesh Cities by Division
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(MP_REGIONS).map(([region]) => {
                const regionCities = MP_CITIES.filter(
                  (c) => c.region === region
                );
                if (regionCities.length === 0) return null;
                return (
                  <div
                    key={region}
                    className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gradient-to-r from-[#14532d] to-[#16a34a] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin
                          size={13}
                          className="text-green-300 shrink-0"
                        />
                        {region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} cities
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => (
                        <CityLink
                          key={c.name}
                          name={c.name}
                          district={c.district}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ FSSAI SERVICES GRID ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#14532d] bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                FSSAI Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#14532d] mt-4">
                All FSSAI Services Available Across Every MP City
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                Every service below is available across all {MP_CITIES.length}+
                MP cities — 100% online, expert-assisted.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  title: "FSSAI Basic Registration",
                  price: "₹999",
                  href: "/serviceslist/fssai/fssai-registration",
                  icon: "🍽️",
                  color: "bg-green-50 border-green-100",
                  points: [
                    "For petty food businesses (turnover < ₹12 lakh)",
                    "Home bakers, street vendors, small retailers",
                    "14-digit FSSAI registration number",
                    "Valid for 1–5 years (renewable)",
                  ],
                },
                {
                  title: "State FSSAI Food License",
                  price: "₹1,999",
                  href: "/serviceslist/fssai/fssai-registration",
                  icon: "📋",
                  color: "bg-emerald-50 border-emerald-100",
                  points: [
                    "Turnover ₹12 lakh – ₹20 crore",
                    "Restaurants, manufacturers, traders",
                    "State-level FoSCoS portal filing",
                    "Valid for 1–5 years (renewable)",
                  ],
                },
                {
                  title: "Central FSSAI Food License",
                  price: "₹3,999",
                  href: "/serviceslist/fssai/fssai-registration",
                  icon: "🏛️",
                  color: "bg-teal-50 border-teal-100",
                  points: [
                    "Turnover > ₹20 crore or multi-state operations",
                    "Importers, exporters, e-commerce food operators",
                    "Central licensing authority approval",
                    "FSSAI HQ Delhi filing process",
                  ],
                },
                {
                  title: "FSSAI License Renewal",
                  price: "₹1,499",
                  href: "/serviceslist/fssai/fssai-renewal",
                  icon: "🔄",
                  color: "bg-blue-50 border-blue-100",
                  points: [
                    "Renewal for Basic, State & Central licenses",
                    "Pre-expiry renewal to avoid ₹100/day penalty",
                    "Document update if business details changed",
                    "FoSCoS portal status tracking",
                  ],
                },
                {
                  title: "FSSAI License Modification",
                  price: "₹1,299",
                  href: "/serviceslist/fssai/fssai-modification",
                  icon: "✏️",
                  color: "bg-violet-50 border-violet-100",
                  points: [
                    "Core field modifications (address, capacity)",
                    "Non-core updates (contact, product addition)",
                    "Ownership change amendment",
                    "Approval tracking on FoSCoS",
                  ],
                },
                {
                  title: "FSSAI Annual Return Filing",
                  price: "₹1,499",
                  href: "/serviceslist/fssai/fssai-annual-return",
                  icon: "📊",
                  color: "bg-amber-50 border-amber-100",
                  points: [
                    "Form D-1 for manufacturers & importers",
                    "Due date: May 31 every year",
                    "Production & sales data compilation",
                    "Penalty guidance for late filing",
                  ],
                },
                {
                  title: "FSSAI Notice Reply & Compliance",
                  price: "₹1,999",
                  href: "/serviceslist/fssai/fssai-notice-reply",
                  icon: "⚖️",
                  color: "bg-rose-50 border-rose-100",
                  points: [
                    "Show cause notice reply drafting",
                    "Improvement notice compliance",
                    "FSSAI inspection follow-up",
                    "Department coordination & representation",
                  ],
                },
                {
                  title: "FSSAI License Search & Verification",
                  price: "₹299",
                  href: "/serviceslist/fssai/fssai-search",
                  icon: "🔍",
                  color: "bg-gray-50 border-gray-100",
                  points: [
                    "Verify vendor/supplier FSSAI license",
                    "Check license validity and status",
                    "Business name and category check",
                    "Fraud and counterfeit license detection",
                  ],
                },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link
                  key={title}
                  href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${
                    color.split(" ")[1]
                  } rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{
                      background: "linear-gradient(135deg,#14532d,#16a34a)",
                    }}
                  />
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}
                    >
                      {icon}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#14532d] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight
                        size={13}
                        className="text-gray-300 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#14532d] transition-colors mb-1">
                    {title}
                  </h3>
                  <span className="text-[11px] font-bold text-[#14532d] bg-green-50 px-2.5 py-0.5 rounded-full self-start mb-3">
                    {price}
                  </span>
                  <ul className="space-y-1.5 mt-auto">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-1.5 text-[11px] text-gray-500"
                      >
                        <CheckCircle
                          size={10}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SEO CONTENT ════════ */}
        <section className="py-20 bg-[#f3faf4] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="flex gap-5">
                <div className="w-1 rounded-full bg-gradient-to-b from-[#14532d] to-green-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#14532d] mb-4">
                    {heading}
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    {body.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ TAG CLOUD ════════ */}
        <section className="py-16 bg-[#14532d]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">
                All MP Cities — FSSAI Food License Services
              </h2>
              <p className="text-white/55 text-sm mt-2">
                Click your city for dedicated FSSAI registration, renewal &
                food compliance services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {MP_CITIES.map((c, i) => (
                <Link
                  key={`${c.name}-${i}`}
                  href={`/state/madhya-pradesh/fssai/${slugifyCity(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#14532d]"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.80)",
                  }}
                >
                  <MapPin
                    size={9}
                    className="text-green-400 group-hover:text-[#14532d] shrink-0 transition-colors"
                  />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA BANNER ════════ */}
        <section className="py-16 px-6 bg-[#f3faf4]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#14532d] rounded-3xl overflow-hidden p-10 md:p-14 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14532d] to-[#052e16]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-green-400/10 blur-[80px] pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#fff 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                    <Zap size={11} className="text-green-300" /> Ready to Apply?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    FSSAI Food License — Wherever You Are in MP
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our FSSAI team
                    serves every MP city — from Bhopal &amp; Indore to the
                    smallest tehsil town. Starting ₹999.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20FSSAI%20services%20in%20MP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#14532d] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a
                    href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
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