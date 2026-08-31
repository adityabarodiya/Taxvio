// app/state/gujarat/gst-services/page.tsx
import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, Phone, MessageCircle, Shield, Zap,
  Users, Star, BadgeCheck, TrendingUp, FileText, IndianRupee,
  CheckCircle, Globe, ShoppingCart, Laptop, Factory, Building2,
} from "lucide-react";
import { GJ_CITIES, GJ_REGIONS, slugifyCity } from "@/data/gj-cites";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST Registration & Return Filing Services Across Gujarat | Taxvio",
  description:
    "Taxvio provides expert GST registration, GSTR-1/GSTR-3B filing, GST refund, LUT filing, e-commerce GST, diamond & textile GST, and notice reply across 300+ locations in Gujarat — Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Bhavnagar & more. CA-assisted, 100% online, starting ₹1,499.",
  keywords: [
    "GST registration Gujarat",
    "GST services Gujarat cities",
    "GST consultant Gujarat",
    "GST return filing Gujarat",
    "GSTIN registration Gujarat",
    "GST Ahmedabad Surat Vadodara Rajkot",
    "GST for diamond traders Gujarat",
    "GST for textile manufacturers Gujarat",
    "Taxvio Gujarat GST",
    "GST search verification Gujarat",
  ],
  alternates: { canonical: "https://www.taxvio.in/state/gujarat/gst-services" },
  openGraph: {
    title: "GST Services Across 300+ Gujarat Locations | Taxvio",
    description: "Expert GST registration, return filing, refund, LUT & diamond/textile GST across all Gujarat cities — CA-assisted, from ₹1,499.",
    url: "https://www.taxvio.in/state/gujarat/gst-services",
    siteName: "Taxvio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Services Across Gujarat | Taxvio",
    description: "GST registration & filing across 300+ Gujarat locations — from ₹1,499.",
  },
  robots: { index: true, follow: true },
};

/* ─── Service Quick List ─────────────────────────────────────────────────── */
const GST_SERVICES_QUICK = [
  { label: "GST Registration",      price: "₹1,499", icon: "🧾", desc: "GSTIN in 3–7 days" },
  { label: "GST Return Filing",     price: "₹999/mo", icon: "📄", desc: "GSTR-1 & GSTR-3B" },
  { label: "GST Refund",            price: "₹2,499", icon: "💰", desc: "Exporter & ITC refund" },
  { label: "GST LUT Filing",        price: "₹999",   icon: "📤", desc: "Zero-rated exports" },
  { label: "GST for Diamond Trade", price: "₹1,899", icon: "💎", desc: "Surat diamond traders" },
  { label: "GST for Textile Units", price: "₹1,999", icon: "🧵", desc: "Textile manufacturing" },
];

/* ─── SEO Sections ──────────────────────────────────────────────────────── */
const SEO_SECTIONS = [
  {
    heading: "GST Registration Services Across Gujarat — From Kutch to Dang",
    body: `Gujarat stands as India's most entrepreneurial state and a global manufacturing powerhouse — home to Asia's largest diamond cutting and polishing industry centered in Surat's Varachha and Mahidharpura; the world's largest denim and textile manufacturing belt spanning Ahmedabad's Naroda, Odhav, and Vatva GIDC estates; India's largest pharmaceutical and chemical manufacturing zone across Vadodara, Ankleshwar, and Vapi; the nation's primary ceramic and tile production hub in Morbi; and the fastest-growing port-led industrial economy anchored by Mundra, Kandla, and Hazira ports serving Gujarat's extensive PCPIR (Petroleum, Chemicals & Petrochemicals Investment Region) corridor.

Every business entity operating from a Gujarat registered office — whether a diamond brokerage firm in Surat's Mahidharpura, a ceramic tile manufacturer in Morbi, a textile dyeing and printing unit in Jetpur, a chemical plant in Ankleshwar GIDC, or a salt production facility in the Rann of Kutch — must obtain GST registration once annual aggregate turnover crosses ₹40 lakh for goods suppliers (₹20 lakh for service providers), or immediately upon commencement if engaged in interstate supply, e-commerce selling, reverse charge mechanism applicability, or as a casual/non-resident taxable person.

Taxvio delivers end-to-end GST registration services across all 300+ cities, towns, and industrial nodes throughout Gujarat — covering every major commercial hub from Ahmedabad's Satellite and Vastrapur business districts to Surat's textile market zones, from Vadodara's Alkapuri and Gotri commercial areas to Rajkot's 150 Feet Ring Road and Kalawad Road trading corridors, extending to established manufacturing towns like Gandhinagar, Bhavnagar, Jamnagar, Junagadh, Anand, Bharuch, and Morbi, and reaching even the most remote tehsil headquarters across North Gujarat, Saurashtra, South Gujarat, Central Gujarat, and Kutch regions. Our chartered accountant-led team manages the complete registration workflow — business activity classification, turnover threshold analysis, document collection and verification, online application filing on the GST portal, Aadhaar-based authentication, ARN tracking, officer query resolution, and final GSTIN certificate delivery — entirely through WhatsApp and email, typically completing the process within 3–7 business days regardless of which Gujarat GST division, range, or ward your business falls under.`,
  },
  {
    heading: "Specialized GST Services for Gujarat's Unique Business Ecosystems — Diamonds, Textiles, Chemicals & Ceramics",
    body: `Gujarat's economy is defined by four globally dominant industry clusters — each with distinct GST compliance requirements that demand specialized domain expertise beyond generic bookkeeping knowledge. Surat's diamond and gems sector, contributing over 90% of global polished diamond production, operates on wafer-thin margins where even 0.25% GST classification errors can wipe out entire shipment profitability; diamond traders need GST registration with correct HSN code mapping (7102, 7103, 7104, 7113), monthly GSTR-1/GSTR-3B reconciliation against rough diamond imports and polished exports, LUT filing for zero-rated exports, job work compliance for sending rough diamonds to artisan polishers, and meticulous documentation for high-value transactions subject to e-invoicing and TCS applicability.

Gujarat's textile manufacturing ecosystem — spanning synthetic fabric weaving in Surat's power loom clusters, cotton ginning and pressing in Rajkot and Surendranagar, denim production in Ahmedabad's industrial estates, dyeing and printing in Jetpur and Sachin, and readymade garment manufacturing across multiple GIDC areas — requires GST support encompassing accurate fabric HSN classification (Chapter 52–63), ITC reconciliation on yarn, dyes, and chemicals purchases, job work entries for fabric sent to dyeing units, proper stock transfer documentation for inter-state movement between factories and warehouses, and GST-compliant invoicing for B2B supply to domestic brands and e-commerce platforms.

The Ankleshwar-Vapi-Dahej chemical belt and Vadodara pharmaceutical zone handle thousands of chemical compounds, intermediates, and finished formulations daily — each requiring precise GST treatment: bulk drug manufacturers need HSN-level classification accuracy, pharmaceutical companies must manage ITC reversal on exempted formulations, agrochemical units require compliance with insecticide and pesticide-specific GST provisions, and chemical exporters shipping through Hazira and Mundra ports need monthly LUT renewals and shipping bill reconciliation for timely refund processing. Morbi's ceramic industry, producing 80% of India's tiles and sanitaryware, has unique challenges around freight reconciliation, ITC on natural gas used in kilns, and proper accounting of ceramic waste and factory seconds.

Taxvio's Gujarat GST team has worked extensively with businesses across all four ecosystems — from diamond merchants in Varachha to chemical manufacturers in Ankleshwar, from textile exporters in Sachin GIDC to ceramic tile units in Morbi — bringing industry-specific GST knowledge that generic CA firms simply cannot match.`,
  },
  {
    heading: "Why Gujarat's Top Traders, Manufacturers & Exporters Choose Taxvio for GST Compliance",
    body: `Gujarat's thirty-three districts and 300+ cities represent India's most diverse subnational economy — financial services and IT/ITeS clustering in Ahmedabad's GIFT City and SG Highway corridor; diamond cutting, polishing, and trading dominating Surat's Varachha, Katargam, and Mahidharpura; petrochemicals, refineries, and chemical manufacturing concentrated in Vadodara, Ankleshwar, Dahej, and Hazira; ceramic tile and sanitaryware production centered in Morbi and Thangadh; automobile component manufacturing across Sanand, Halol, and Rajkot; dairy processing and cooperative institutions headquartered in Anand; shipbreaking and recycling industries operating in Alang-Sosiya near Bhavnagar; salt production and marine exports from the coastal belt spanning Kandla to Umbergaon; and a thriving MSME trading ecosystem spanning every taluka town from Palanpur in the north to Valsad in the south.

This economic diversity translates into equally varied GST compliance needs — a bullion trader in Ahmedabad's Manek Chowk requires real-time GST rate updates and TCS applicability tracking, a ceramic exporter in Morbi needs monthly shipping bill reconciliation and IGST refund follow-up, a pharmaceutical manufacturer in Vadodara requires formulation-wise exemption analysis and ITC apportionment, a cooperative dairy in Anand needs member-specific supply documentation and GST treatment of milk procurement, and a shipbreaking yard in Bhavnagar must handle GST on imported ships, scrap metal sales, and environmental cess adjustments.

Taxvio has successfully filed GST registrations and returns for businesses across nearly every Gujarat district — from the Ahmedabad Central GST Commissionerate to the Surat and Rajkot zones, from Vadodara division offices to the Kutch and Saurashtra range offices — giving our team direct experience with Gujarat GST department processes, common scrutiny triggers, and the precise documentation formats that ensure fastest application approvals and refund processing. Our commitment to 100% WhatsApp-first service delivery means an artisan diamond polisher in Surat's Katargam and a tech startup founder in Ahmedabad's GIFT City receive identical same-day expert responses, transparent fixed pricing with zero hidden charges, and absolutely no requirement to visit any physical office.

Whether you operate a diamond brokerage in Surat, a chemical plant in Ankleshwar, a textile mill in Jetpur, a ceramic factory in Morbi, or a tech company in Gandhinagar — Taxvio provides the same level of expert, accessible, and affordable GST support across every Gujarat postal code.`,
  },
];

const TIER1_CITIES = GJ_CITIES.filter((c) => c.tier === 1);
const TIER2_CITIES = GJ_CITIES.filter((c) => c.tier === 2);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Gujarat Cities — GST Services | Taxvio",
  numberOfItems: GJ_CITIES.length,
  itemListElement: GJ_CITIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} — GST Services`,
    url: `https://www.taxvio.in/state/gujarat/gst-services/${slugifyCity(c.name)}`,
  })),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function MajorCityCard({ name, district, region }: { name: string; district: string; region: string }) {
  return (
    <Link href={`/state/gujarat/gst-services/${slugifyCity(name)}`}
      aria-label={`GST services in ${name}, Gujarat`}
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
          {["Reg", "GSTR-1", "GSTR-3B", "LUT"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function CityLink({ name }: { name: string }) {
  return (
    <Link href={`/state/gujarat/gst-services/${slugifyCity(name)}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#003366] hover:bg-[#003366]/5 transition-all duration-150">
      <MapPin size={9} className="text-gray-300 group-hover:text-[#003366] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function GujaratGSTIndexPage() {
  return (
    <>
      <Script id="gujarat-gst-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <main className="bg-white text-gray-800 font-sans">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
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
                <li className="text-white/70 font-medium">GST Services — Gujarat</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Gujarat · 300+ Locations · GST Only · 100% Online
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                  GST Services Across
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    All Gujarat Cities
                  </span>
                </h1>

                <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">GSTR-1 &amp; GSTR-3B filing</strong>, GST refund, LUT,
                  diamond & textile GST, chemical industry GST, and GSTIN verification across{" "}
                  <strong className="text-white">{GJ_CITIES.length}+</strong> Gujarat locations —
                  Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Bhavnagar & beyond.
                  CA-assisted, starting <strong className="text-sky-300">₹1,499</strong>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${GJ_CITIES.length}+`, label: "GJ Locations Covered", icon: Globe },
                    { val: "16,200+", label: "GJ Businesses Served", icon: Users },
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
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20GST%20help%20in%20Gujarat."
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

              {/* Right service grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">GST services across Gujarat</p>
                <div className="grid grid-cols-2 gap-3">
                  {GST_SERVICES_QUICK.map(({ label, price, icon, desc }) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
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
                { icon: Star,       label: "4.9★ Rating" },
                { icon: Zap,        label: "Same-Day Response" },
                { icon: Shield,     label: "100% Secure" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-sky-300 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="white" />
          </svg>
        </section>

        {/* ════════ MAJOR CITIES ════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Major Commercial & Industrial Hubs</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">GST Services in Key Gujarat Cities</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1_CITIES.slice(0, 33).map((c) => (
                <MajorCityCard key={c.name} name={c.name} district={c.district} region={c.region} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIER-2 CITIES ════════ */}
        <section className="py-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-7 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Established Towns & Industrial Centers</p>
                <h2 className="text-xl font-extrabold text-gray-800">GST Services in Gujarat Manufacturing & Trading Hubs</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {TIER2_CITIES.slice(0, 50).map((c) => (
                <Link key={c.name} href={`/state/gujarat/gst-services/${slugifyCity(c.name)}`}
                  className="group flex items-center gap-2.5 p-3.5 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-sm hover:bg-blue-50/30 transition-all">
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

        {/* ════════ ALL CITIES BY REGION ════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Complete Gujarat Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST Services — All Gujarat Cities by Region
              </h2>
              <p className="text-gray-500 mt-2 text-sm">From North Gujarat to Saurashtra — comprehensive GST support across all {GJ_CITIES.length}+ locations</p>
            </div>
            <div className="space-y-4">
              {Object.entries(GJ_REGIONS).map(([region, districts]) => {
                const regionCities = GJ_CITIES.filter((c) => c.region === region);
                if (!regionCities.length) return null;
                return (
                  <div key={region} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-[#00416a] to-[#004080] px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin size={13} className="text-sky-300 shrink-0" />{region}
                      </h3>
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {regionCities.length} locations
                      </span>
                    </div>
                    <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                      {regionCities.map((c) => <CityLink key={c.name} name={c.name} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════ GST SERVICES GRID ════════ */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                GST Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                All GST Services Available Across Every Gujarat Location
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available across all {GJ_CITIES.length}+ Gujarat cities — 100% online, CA-assisted.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { title:"GST Registration", price:"₹1,499", href:"/serviceslist/gst/gst-registration", icon:"🧾", color:"bg-emerald-50 border-emerald-100",
                  points:["GSTIN in 3–7 working days", "Eligibility consultation included", "Aadhaar OTP-based e-KYC", "All Gujarat GST jurisdictions"] },
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
                { title:"GST for Diamond Trade", price:"₹1,899", href:"/serviceslist/gst/gst-for-diamond", icon:"💎", color:"bg-purple-50 border-purple-100",
                  points:["Surat diamond traders & exporters", "HSN 7102/7103/7104 classification", "Job work compliance for polishing", "LUT filing & export documentation"] },
                { title:"GST for Textile Units", price:"₹1,999", href:"/serviceslist/gst/gst-for-textile", icon:"🧵", color:"bg-pink-50 border-pink-100",
                  points:["Fabric weaving & dyeing units", "HSN Chapter 52–63 classification", "ITC on yarn, dyes & chemicals", "Stock transfer between factories"] },
              ].map(({ title, price, href, icon, color, points }) => (
                <Link key={title} href={href}
                  className={`group relative flex flex-col p-5 bg-white border ${color.split(" ")[1]} rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] opacity-[0.05]"
                    style={{ background: "linear-gradient(135deg,#00416a,#0059b3)" }} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${color} border flex items-center justify-center text-xl shrink-0`}>{icon}</div>
                    <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-[#00416a] flex items-center justify-center transition-all duration-200 shrink-0">
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors mb-1">{title}</h3>
                  <span className="text-[11px] font-bold text-[#00416a] bg-blue-50 px-2.5 py-0.5 rounded-full self-start mb-3">{price}</span>
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
        <section className="py-20 bg-white border-b border-gray-100">
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
              <h2 className="text-2xl font-extrabold text-white">All Gujarat Cities — GST Services</h2>
              <p className="text-white/55 text-sm mt-2">Click your city for dedicated GST registration & filing services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {GJ_CITIES.map((c, i) => (
                <Link key={`${c.name}-${i}`}
                  href={`/state/gujarat/gst-services/${slugifyCity(c.name)}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}>
                  <MapPin size={9} className="text-sky-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-16 px-6 bg-white">
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
                    GST Registration & Filing — Wherever You Are in Gujarat
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online. Same-day WhatsApp response. Our CA team serves every Gujarat city — Ahmedabad to Dang. Starting ₹1,499.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20GST%20help%20in%20Gujarat."
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