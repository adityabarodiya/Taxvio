"use client";

import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path if needed
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path if needed
import {
  MapPin, ArrowRight, Shield, Zap, Users, Star, BadgeCheck,
  TrendingUp, CheckCircle, Globe, FileText,
} from "lucide-react";
import { BIHAR_AREAS, BIHAR_REGIONS, slugifyArea } from "@/data/bihar-cities"; // ← adjust path if needed

/* ─── Live GST service list (replaces the old hardcoded 13-item array) ───── */
const gstCategory = serviceCategories.find((c) => c.slug === "gst")!;

// Icon + accent color per service slug, with sane fallbacks so new services
// added to serviceCategories.ts never break this page — they just render
// with the default icon/color instead of needing a code change here.
const SERVICE_ICONS: Record<string, string> = {
  "gst-registration": "🧾",
  "gst-return": "📄",
  "gst-refund": "💰",
  "gst-cancellation": "❌",
  "gst-amendment": "✏️",
  "gst-search": "🔍",
  "gst-lut": "📤",
  "gstr-9": "📅",
  "gst-notice-reply": "⚖️",
  "gst-audit": "🔎",
  "gst-e-invoicing": "📱",
  "gst-for-e-commerce": "🛒",
  "gst-for-freelancers": "💻",
  "gst-composition-scheme": "📉",
  "gst-itc-reconciliation": "🔄",
  "gst-revocation": "♻️",
  "gstr-10-final-return": "📑",
  "gst-tds-compliance": "🏛️",
  "gst-eway-bill": "🚚",
  "gst-appeal-filing": "👨‍⚖️",
  "gst-advance-ruling": "📜",
  "gst-job-work": "🔧",
  "gst-composition-to-regular": "🔁",
  "gst-hsn-sac-classification": "🏷️",
  "gst-for-restaurants": "🍽️",
  "gst-for-manufacturers": "🏭",
  "gst-for-real-estate": "🏗️",
  "gst-for-importers-exporters": "🚢",
};
const DEFAULT_SERVICE_ICON = "🧾";

const CARD_COLORS = [
  "bg-emerald-50 border-emerald-100",
  "bg-blue-50 border-blue-100",
  "bg-sky-50 border-sky-100",
  "bg-violet-50 border-violet-100",
  "bg-amber-50 border-amber-100",
  "bg-teal-50 border-teal-100",
  "bg-orange-50 border-orange-100",
  "bg-rose-50 border-rose-100",
  "bg-indigo-50 border-indigo-100",
  "bg-cyan-50 border-cyan-100",
  "bg-fuchsia-50 border-fuchsia-100",
  "bg-pink-50 border-pink-100",
];

// A short, curated subset for the hero's quick-glance panel —
// pulled live from the same data, not hand-maintained separately.
const QUICK_PANEL_SLUGS = [
  "gst-registration", "gst-return", "gst-refund",
  "gst-lut", "gst-for-e-commerce", "gst-for-freelancers",
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "GST Registration Services Across Bihar",
    body: `Bihar is one of India's fastest-growing states with a robust agricultural economy, thriving wholesale and retail trade sectors, and expanding manufacturing and service industries — spanning the capital city of Patna with its commercial hubs in Boring Road, Fraser Road, and Exhibition Road, industrial towns like Muzaffarpur (known for litchi trade and food processing), Gaya (religious tourism and handicrafts), Bhagalpur (silk weaving and textiles), Darbhanga (agricultural produce and education services), Purnia (jute and agricultural trading), and emerging commercial centers across all 38 districts. Every business operating from a Bihar address — whether a wholesale trader in Patna's Hathwa Market, a textile manufacturer in Bhagalpur, a food processing unit in Muzaffarpur, or a consulting firm in Boring Road — must register for GST once it crosses the prescribed turnover threshold or engages in interstate/e-commerce supply.

Taxvio provides end-to-end GST registration across all 200+ areas of Bihar — from Tier-1 commercial hubs like Patna, Gaya, Bhagalpur, and Muzaffarpur, to established district headquarters like Darbhanga, Purnia, Arrah, and Chapra, down to emerging towns and taluk centers across Magadh, Tirhut, Kosi, and Saran divisions. Our CA team handles eligibility assessment, document preparation, ARN generation, Aadhaar-based authentication, and GSTIN follow-up — entirely online, typically within 3–7 working days, regardless of which Bihar district your registered office falls under.`,
  },
  {
    heading: "GST for E-Commerce Sellers and Freelancers in Bihar",
    body: `Bihar has witnessed exponential growth in e-commerce sellers and digital service providers over the past five years — particularly in Patna, Muzaffarpur, Gaya, and Bhagalpur — with thousands of entrepreneurs selling agricultural products, handicrafts, textiles, and processed foods on platforms like Amazon, Flipkart, Meesho, and IndiaMART. E-commerce sellers operating from Bihar warehouses or home offices need GST registration that accounts for marketplace-specific GSTIN requirements, monthly GSTR-1/GSTR-3B filing reconciled against platform settlement reports, TCS credit matching under Section 52 of the CGST Act, and GSTR-8 compliance for businesses also registered as e-commerce operators.

Bihar's growing freelance and consulting economy — concentrated in Patna's IT training institutes, digital marketing agencies, and independent professionals offering software development, content writing, graphic design, and virtual assistance services to domestic and international clients — has equally specific GST needs: registration with correct SAC code classification, LUT filing under Form RFD-11 for professionals billing foreign clients without IGST, ITC claims on laptops and software subscriptions, and Reverse Charge Mechanism review for foreign SaaS tools. Taxvio's Bihar team handles both segments with specialized expertise in niche compliance areas unique to online and digital businesses.`,
  },
  {
    heading: "Why Bihar Businesses Across Every District Choose Taxvio",
    body: `Bihar's 38 districts and 200+ towns each have distinct commercial characteristics — Patna dominates in retail, services, and government contracting; Muzaffarpur leads in food processing and agricultural trade; Gaya specializes in religious tourism and handicrafts; Bhagalpur is renowned for silk textiles; Darbhanga focuses on agricultural produce and education; and districts like Purnia, Arrah, Chapra, Sasaram, and Begusarai each have unique industrial and trading ecosystems. GST compliance needs differ accordingly: a food processor in Muzaffarpur needs accurate HSN classification for packaged goods and ITC reconciliation on raw material purchases, while a silk weaver in Bhagalpur requires export invoice documentation and LUT renewal tracking for overseas shipments.

Taxvio's GST team has successfully filed applications and returns for clients across nearly every Bihar district — from the Patna GST Commissionerate headquarters to circle offices in Muzaffarpur, Gaya, Bhagalpur, Darbhanga, and Purnia — giving us first-hand familiarity with Bihar GST department processing patterns, common query types, documentation requirements, and the procedural nuances that expedite approvals. Our form-first service model means a shop owner in Hathwa Market and a startup founder in Boring Road receive the exact same CA-quality, same-day response — with transparent pricing, zero hidden fees, and no office visits required.`,
  },
];

const TIER1_AREAS = BIHAR_AREAS.filter((c) => c.tier === 1);
const TIER2_AREAS = BIHAR_AREAS.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bihar Areas — GST Services | Taxvio",
  numberOfItems: BIHAR_AREAS.length,
  itemListElement: BIHAR_AREAS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — GST Services`,
    url: `https://www.taxvio.in/state/bihar/gst-services/${slugifyArea(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorAreaCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/bihar/gst-services/${slugifyArea(name)}`}
      aria-label={`GST services in ${name}, Bihar`}
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

function AreaLink({ name }: { name: string }) {
  return (
    <Link href={`/state/bihar/gst-services/${slugifyArea(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function BiharGSTServicesClient() {
  return (
    <>
      <Script id="bihar-gst-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">GST Services — Bihar</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Bihar · 200+ Areas · GST Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Services Across
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Every Bihar Area
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B filing</strong>, GST refund, LUT,
                  e-commerce GST, freelancer GST, and GSTIN verification across{" "}
                  <strong className="text-white">{BIHAR_AREAS.length}+</strong> Bihar towns &amp; districts.
                  CA-assisted, starting <strong className="text-sky-300">₹1,499</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${BIHAR_AREAS.length}+`, label: "Bihar Areas Covered", icon: Globe },
                    { val: "3,800+", label: "Bihar Businesses Served", icon: Users },
                    { val: "₹1,499", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div key={label} className="text-center rounded-2xl py-4 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <Icon size={14} className="text-sky-300 mx-auto mb-1.5" />
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openInquiryForm("GST Registration")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right service grid — live, pulled from serviceCategories */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">GST services in every Bihar area</p>
                <div className="grid grid-cols-2 gap-3">
                  {QUICK_PANEL_SLUGS.map((slug) => {
                    const s = gstCategory.services.find((sv) => sv.slug === slug);
                    if (!s) return null;
                    return (
                      <div key={slug} className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                        <span className="text-lg shrink-0">{SERVICE_ICONS[slug] ?? DEFAULT_SERVICE_ICON}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white/85 truncate">{s.title}</p>
                          <p className="text-[10px] text-sky-300 font-semibold truncate">{s.shortDescription}</p>
                        </div>
                      </div>
                    );
                  })}
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
                { icon: FileText,   label: "Free Enquiry Form" },
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

        {/* ════════ MAJOR AREAS ════════ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Commercial Hubs</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">GST Services in Key Bihar Cities</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_AREAS.map((c) => (
                <MajorAreaCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 AREAS ════════ */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">District Headquarters</p>
                <h2 className="text-xl font-extrabold text-gray-800">GST Services in Bihar District Towns</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_AREAS.slice(0, 30).map((c) => (
                <Link key={c.name} href={`/state/bihar/gst-services/${slugifyArea(c.name)}`}
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

        {/* ════════ ALL AREAS BY REGION ════════ */}
        <section className="py-20 bg-[#f8fbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All Bihar Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST Services — All Bihar Areas by Division
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(BIHAR_REGIONS).map(([region]) => {
                const regionAreas = BIHAR_AREAS.filter((c) => c.region === region);
                if (!regionAreas.length) return null;
                return (
                  <div key={region} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />{region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionAreas.length} areas
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionAreas.map((c) => <AreaLink key={c.name} name={c.name} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ GST SERVICES GRID — live from serviceCategories ════════ */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                GST Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                All {gstCategory.services.length} GST Services Available Across Every Bihar Area
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available across all {BIHAR_AREAS.length}+ Bihar areas — 100% online, CA-assisted. Tap a card for details, or "Enquire" for a quote on that exact service.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {gstCategory.services.map((service, i) => (
                <div key={service.slug}
                  className={`group relative flex flex-col p-5 bg-white border ${CARD_COLORS[i % CARD_COLORS.length].split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{ background: "linear-gradient(135deg,#00416a,#0ea5e9)" }} />
                  <Link href={`/serviceslist/gst/${service.slug}`} className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${CARD_COLORS[i % CARD_COLORS.length]} border flex items-center justify-center text-xl shrink-0`}>
                        {SERVICE_ICONS[service.slug] ?? DEFAULT_SERVICE_ICON}
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                        <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-3">{service.title}</h3>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-[11px] text-gray-500">
                          <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />{f}
                        </li>
                      ))}
                    </ul>
                  </Link>
                  <button
                    onClick={() => openInquiryForm(service.title)}
                    className="mt-4 pt-3 border-t text-xs font-bold text-[#00416a] hover:underline text-left"
                  >
                    Enquire about this service →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SEO CONTENT ════════ */}
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

        {/* ════════ TAG CLOUD ════════ */}
        <section className="py-16 bg-[#00416a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">All Bihar Areas — GST Services</h2>
              <p className="text-white/55 text-sm mt-2">Click your area for dedicated GST registration & filing services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {BIHAR_AREAS.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/bihar/gst-services/${slugifyArea(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={9} className="text-sky-400 group-hover:text-[#00416a] shrink-0 transition-colors" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
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
                    GST Registration & Filing — Wherever You Are in Bihar
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day response. Our CA team serves every Bihar district — Patna to Purnia. Starting ₹1,499.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <button
                    onClick={() => openInquiryForm("GST Registration")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Free Consultation <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InquiryFormButton />
        <Footar />
      </main>
    </>
  );
}