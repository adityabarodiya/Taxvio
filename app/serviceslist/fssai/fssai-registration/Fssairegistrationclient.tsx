"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with FSSAI Registration.")}`;
const DARK = { background: "linear-gradient(135deg,#1a5c1a 0%,#14431a 55%,#0d2e10 100%)" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const LICENCE_TYPES = [
  {
    icon: "🌿",
    type: "FSSAI Basic Registration",
    who: "Food businesses with annual turnover up to ₹12 lakh",
    examples: ["Small food manufacturers", "Petty retailers / hawkers", "Temporary stall holders", "Small dhaba / home kitchens", "Cottage food businesses"],
    validity: "1–5 years (renewable)",
    form: "Form A",
    fee: "₹100/year (government fee)",
    processingTime: "7–30 days",
    badge: "Small Businesses",
    badgeColor: "#15803d",
    penalty: "₹5 lakh fine + imprisonment up to 6 months for operating without registration",
  },
  {
    icon: "🏭",
    type: "FSSAI State Licence",
    who: "Food businesses with turnover ₹12 lakh – ₹20 crore",
    examples: ["Medium food manufacturers", "Restaurants & cloud kitchens", "Hotels & caterers", "Retailers & distributors", "Storage & warehouses (up to 50,000 MT)"],
    validity: "1–5 years (renewable)",
    form: "Form B",
    fee: "₹2,000–₹5,000/year (varies by state)",
    processingTime: "30–60 days",
    badge: "Mid-size Businesses",
    badgeColor: "#1d4ed8",
    penalty: "₹5–10 lakh fine + imprisonment up to 7 years for misbranding / unsafe food",
  },
  {
    icon: "🏢",
    type: "FSSAI Central Licence",
    who: "Food businesses with turnover above ₹20 crore or operating in multiple states",
    examples: ["Large food manufacturers", "Food importers", "5-star hotels / large chains", "E-commerce food platforms", "Airports / railways / ports (catering)"],
    validity: "1–5 years (renewable)",
    form: "Form B (Central)",
    fee: "₹7,500–₹75,000/year (category-based)",
    processingTime: "30–60 days",
    badge: "Large / National Businesses",
    badgeColor: "#7c3aed",
    penalty: "₹10 lakh fine + licence cancellation + recall of unsafe food products",
  },
];

const DOCS_BASIC = [
  { label:"Photo ID Proof",               sub:"Aadhaar, PAN, Voter ID, or Passport of proprietor / partner / director" },
  { label:"Food Business Address Proof",  sub:"Electricity bill, rent agreement, or property documents for business premises" },
  { label:"Passport Size Photograph",     sub:"Recent photograph of the food business operator" },
  { label:"Nature of Food Business",      sub:"Description of food products handled — type, category, activity (manufacture / retail / storage)" },
];

const DOCS_STATE_CENTRAL = [
  { label:"PAN Card of Entity",           sub:"PAN of proprietor, firm, company, or trust — mandatory for State and Central licences" },
  { label:"GST Registration Certificate", sub:"GSTIN of the food business — required for State and Central licence applications" },
  { label:"Incorporation / Registration Proof", sub:"Certificate of Incorporation (Pvt Ltd / LLP) or Partnership Deed or Trust Deed" },
  { label:"Food Safety Management Plan",  sub:"Description of hygiene and food safety practices adopted at the premises" },
  { label:"Layout Plan of Premises",      sub:"Blueprint or hand-drawn layout of the food processing / storage area with dimensions" },
  { label:"List of Food Products",        sub:"Complete list of food products to be manufactured / processed / sold" },
  { label:"Water Test Report",            sub:"Water used in food processing — potability test report from accredited lab (for manufacturers)" },
  { label:"NOC from Municipality / Panchayat", sub:"Health NOC from local body if engaged in food manufacturing — required in most states" },
];

const STEPS = [
  { n:"01", title:"Licence Type Assessment",
    desc:"Taxvio assesses your annual turnover, business location, number of states of operation, and food category to determine whether Basic Registration, State Licence, or Central Licence applies — and confirms the correct FSSAI food category for your products." },
  { n:"02", title:"Document Collection",
    desc:"All required documents are collected via WhatsApp — ID proof, address proof, PAN, GST certificate, incorporation documents, premises layout, and food product list depending on licence type. Taxvio provides a tailored checklist." },
  { n:"03", title:"Application Preparation",
    desc:"Form A (Basic) or Form B (State/Central) is prepared on the FoSCos (Food Safety Compliance System) portal — the new FSSAI online portal. Food categories, business details, premises information, and authorised signatory details are filled accurately." },
  { n:"04", title:"Government Fee Payment",
    desc:"FSSAI application fee is paid online through the FoSCos portal. Fee ranges from ₹100/year (Basic) to ₹75,000/year (Central — high-risk food category). Taxvio guides you on the correct fee amount before payment." },
  { n:"05", title:"Application Submission & ARN",
    desc:"Application is submitted on FoSCos. An Application Reference Number (ARN) is generated and shared. For Basic Registration, the licence is often auto-generated within 7 days. For State/Central, an inspection may be scheduled." },
  { n:"06", title:"Licence Certificate Delivery",
    desc:"FSSAI Licence / Registration Certificate is downloaded from the FoSCos portal and shared with you. The 14-digit FSSAI licence number must be displayed at all food business premises and printed on all food product labels and packaging." },
];

const DISPLAY_RULES = [
  "14-digit FSSAI licence/registration number must be displayed at all food business premises",
  "FSSAI number must be printed on all food product labels, packaging, and advertisements",
  "Licence certificate must be displayed at the principal place of business",
  "Every food product sold must carry FSSAI logo and number on the label",
  "Any change in food products, premises, or ownership requires amendment — cannot operate with old licence details",
];

const FAQS = [
  {
    q: "Is FSSAI registration mandatory and what happens if I operate without it?",
    a: "Yes — FSSAI registration or licence is mandatory for every food business in India under the Food Safety and Standards Act, 2006 (FSS Act). Section 31 of the FSS Act makes it illegal to commence or carry on any food business without a valid FSSAI registration or licence. Operating without FSSAI registration carries serious penalties: for basic registration violations, a fine of up to ₹5 lakh; for manufacturing or selling unsafe or adulterated food without licence, imprisonment up to 7 years and a fine up to ₹10 lakh; for food causing injury or death, imprisonment up to life and a fine up to ₹10 lakh. Beyond financial penalties, operating without FSSAI can result in: seizure and destruction of food stock, sealing of premises, cancellation of GST registration (if FGSAI non-compliance is reported), inability to list products on e-commerce platforms (Amazon, Flipkart, Swiggy, Zomato all require FSSAI), and reputational damage if a consumer complaint or food safety incident occurs.",
  },
  {
    q: "How do I know whether I need Basic Registration, State Licence, or Central Licence?",
    a: "The type of FSSAI registration/licence depends on your annual turnover and the nature/scale of your food business: Basic Registration (Form A) applies to food businesses with annual turnover up to ₹12 lakh — this includes small food manufacturers, petty retailers, small dhabas, street food vendors, home-based food businesses, and temporary/seasonal food businesses. State Licence (Form B — State) applies to food businesses with annual turnover between ₹12 lakh and ₹20 crore — this includes medium food manufacturers, restaurants, hotels, caterers, distributors, and cold storages (up to 50,000 MT capacity). Central Licence (Form B — Central) applies to food businesses with annual turnover above ₹20 crore, businesses importing food, businesses operating in more than one state (multi-state operations), 5-star hotels, food manufacturers in Special Economic Zones, and food businesses at airports, seaports, and railways. If you are unsure which category applies, Taxvio assesses your specific situation before filing — choosing the wrong category leads to application rejection.",
  },
  {
    q: "What is the validity and renewal process for FSSAI registration?",
    a: "FSSAI registration and licences can be obtained for a period of 1 to 5 years — the applicant chooses the validity period at the time of application. Choosing a longer validity period (3–5 years) is more cost-effective and reduces the renewal frequency. Renewal must be applied for at least 30 days before the expiry date of the current licence. If renewal is not filed before expiry, the FSSAI licence lapses — operating with an expired FSSAI licence carries the same penalty as operating without a licence (up to ₹5 lakh fine). Late renewal (after expiry) is permitted with a penalty of ₹100 per day of delay. The renewal process is similar to the original application — filed on the FoSCos portal with updated documents. Key events that require mid-period amendment (not renewal) include: change in food products, change in premises, change in ownership or key personnel, addition of new manufacturing activity, or change in business name. Taxvio provides renewal reminders and handles both renewal and amendment applications.",
  },
  {
    q: "Can home-based food businesses and cloud kitchens get FSSAI registration?",
    a: "Yes — home-based food businesses are fully eligible for FSSAI registration and must obtain it before selling food commercially. A home kitchen where food is prepared for sale (including through platforms like Swiggy, Zomato, Instagram, WhatsApp groups, or direct delivery) is considered a food business and requires FSSAI registration. For most home-based food businesses with annual turnover under ₹12 lakh, Basic Registration (Form A) applies — with a government fee of just ₹100 per year. Cloud kitchens (delivery-only restaurants operating from a commercial kitchen without a dine-in facility) typically require State Licence if turnover exceeds ₹12 lakh. Both Swiggy and Zomato require a valid FSSAI number before onboarding a food business — without FSSAI, you cannot list your food on these platforms. Taxvio assists home-based food businesses and cloud kitchens with the complete registration process, including correct food category selection and premises address documentation.",
  },
  {
    q: "What food categories and activities does FSSAI cover?",
    a: "FSSAI registration and licences cover all activities involving food — across the entire farm-to-fork supply chain: Manufacturing (producing, processing, packaging food products), Trading (buying and selling food products wholesale or retail), Distribution (storing, transporting, and distributing food), Import (importing food products for domestic sale), Export (exporting food products), Catering (preparing and serving food at events, offices, hospitals), Food Service (restaurants, hotels, dhabas, street food, canteens), Storage (cold storage, warehouse, godown for food products), E-commerce (online food delivery platforms, food product aggregators), and Nutraceuticals / Supplements (health food, functional food, dietary supplements). Each activity maps to specific food categories in the FSSAI classification system — there are over 30 food categories including dairy, meat, fish, fruits and vegetables, beverages, confectionery, oils and fats, cereals, bakery products, and more. The food category declared in the FSSAI application determines the applicable food standards — and only food products within the registered categories can be manufactured/sold. Taxvio ensures the correct food categories are selected during application.",
  },
  {
    q: "What is FoSCos and how has it changed FSSAI registration?",
    a: "FoSCos (Food Safety Compliance System) is the new FSSAI online portal launched by FSSAI to replace the older FLRS (Food Licensing and Registration System). All new FSSAI registrations, licence applications, renewals, amendments, and compliance filings are now done exclusively on FoSCos at foscos.fssai.gov.in. Key changes brought by FoSCos: fully online application process — no physical submission of documents to FSSAI office required; integrated payment gateway for government fees; auto-approval for Basic Registration applications in many cases (within 7 days, without inspection); digital licence certificate downloadable from the portal; annual return filing by licensed food businesses (Form D1) integrated into FoSCos; and linkage with state food safety authorities for inspection scheduling. The FoSCos portal requires Aadhaar OTP or DSC for authentication — the application is linked to the authorised signatory's Aadhaar. Taxvio is experienced with the FoSCos portal and handles the complete registration process on the taxpayer's behalf.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FSSAI Registration India",
  serviceType: "FSSAI Food Licence Registration",
  description:
    "CA-assisted FSSAI registration — Basic (Form A), State Licence, and Central Licence. FoSCos portal filing, food category selection, document preparation. Starting ₹999. Pan India.",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: "+918937980366",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  areaServed: "India",
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    description: "FSSAI Basic Registration starting ₹999. State Licence and Central Licence also available.",
  },
};

export default function FSSAIRegistrationClient() {
  const [faqOpen, setFaqOpen]   = useState<number | null>(null);
  const [openType, setOpenType] = useState<number | null>(0);

  return (
    <>
      <Script id="fssai-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="fssai-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="FSSAI Registration Services India" itemScope itemType="https://schema.org/Service">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }} />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(74,222,128,0.13) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(134,239,172,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
            <nav className="text-sm mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li><Link href="/serviceslist/fssai" className="hover:text-white transition">FSSAI Services</Link></li>
                <li style={{ color: "rgba(255,255,255,0.3)" }}>›</li>
                <li className="text-white font-medium">FSSAI Registration</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Mandatory for Every Food Business in India — FSS Act 2006
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    FSSAI Registration &amp;
                    <span className="block mt-2" style={{ color: "#86efac" }}>
                      Food Licence in India
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Expert FSSAI registration — Basic (Form A), State Licence, and Central Licence.
                    FoSCos portal filing, food category selection, document preparation, and licence
                    certificate delivery. Starting at <strong className="text-white">₹999</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> Apply on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Basic Registration", "✅ State Licence", "✅ Central Licence", "✅ FoSCos Portal Filing"].map(tx => (
                      <span key={tx} className="text-sm rounded-full px-3 py-1"
                        style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", color: "rgba(255,255,255,0.82)" }}>
                        {tx}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Quick facts card */}
                <motion.div variants={scaleIn}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="px-6 py-4"
                      style={{ background: "rgba(74,222,128,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="font-bold text-white text-lg">FSSAI Registration — At a Glance</p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon:"₹",  label:"Basic Registration Fee",  val:"₹999 (Taxvio) + ₹100/yr Govt" },
                        { icon:"🏪", label:"State Licence Fee",       val:"₹1,999 + ₹2,000–₹5,000/yr Govt" },
                        { icon:"🏢", label:"Central Licence Fee",     val:"₹3,499 + ₹7,500+ Govt" },
                        { icon:"⏱", label:"Processing Time",         val:"7–60 days (type-dependent)" },
                        { icon:"📅", label:"Validity",                val:"1–5 years (renewable)" },
                        { icon:"⚠️", label:"No FSSAI Penalty",       val:"Up to ₹5–10 lakh fine" },
                      ].map(({ icon, label, val }) => (
                        <div key={label} className="flex justify-between items-center text-sm">
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>{icon} {label}</span>
                          <span className="font-bold text-white text-right max-w-[55%] text-xs">{val}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 pb-6">
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition hover:scale-105">
                        Apply for FSSAI — Starting ₹999 →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ INTERNAL LINKS ═══════════════════════════════════════════════ */}
        <div className="border-y py-4" style={{ background: "#f0fdf4", borderColor: "#bbf7d0" }}>
          <p className="text-center text-sm text-gray-700 max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>Need GST Registration?{" "}
              <Link href="/serviceslist/gst/gst-registration" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>Register here</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Renew FSSAI?{" "}
              <Link href="/serviceslist/fssai/fssai-renewal" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>FSSAI Renewal</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>FSSAI modification?{" "}
              <Link href="/serviceslist/fssai/fssai-modification" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>Modify FSSAI Licence</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is FSSAI Registration">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#14532d" }}>
                What is FSSAI Registration and Why is it Mandatory for Every Food Business?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>FSSAI registration</strong> (or food licence) is a legal authorisation issued
                  by the <strong>Food Safety and Standards Authority of India (FSSAI)</strong> — the apex
                  body established under the <strong>Food Safety and Standards Act, 2006 (FSS Act)</strong>
                  — to every individual or entity engaged in the manufacture, processing, storage,
                  distribution, sale, import, or export of food products in India. Section 31 of the FSS
                  Act makes it mandatory for every food business operator (FBO) to obtain FSSAI
                  registration or licence before commencing food business activities — there are no
                  exemptions based on business size, legal structure, or business model.
                </p>
                <p>
                  The FSSAI registration system has three tiers based on the scale and nature of the food
                  business: <strong>Basic Registration</strong> for small food businesses with turnover up
                  to ₹12 lakh, <strong>State Licence</strong> for medium businesses with turnover ₹12
                  lakh–₹20 crore, and <strong>Central Licence</strong> for large businesses with turnover
                  above ₹20 crore or multi-state / import-export operations. Each tier involves a
                  different form, fee, processing authority, and compliance obligation. Since 2021, all
                  FSSAI applications are processed through the <strong>FoSCos (Food Safety Compliance
                  System)</strong> portal at foscos.fssai.gov.in — replacing the older FLRS system.
                </p>
                <p>
                  The 14-digit FSSAI licence number issued upon registration is not merely a compliance
                  certificate — it is an integral part of doing food business in India. Every food product
                  label must carry the FSSAI number and logo. E-commerce food platforms (Swiggy, Zomato,
                  Amazon Fresh, Blinkit, BigBasket) require FSSAI registration before onboarding a vendor.
                  Corporate and institutional buyers require FSSAI compliance as part of vendor empanelment.
                  Export certifications from APEDA and other bodies require a valid FSSAI licence.
                  Restaurant aggregators, hotel booking platforms, and event caterers are subject to
                  periodic FSSAI inspections — and a valid licence is the first document checked.
                </p>
                <p>
                  The consequences of operating without FSSAI registration are severe: a fine up to
                  ₹5 lakh for operating without registration (Section 63 FSS Act), up to ₹10 lakh and
                  7 years imprisonment for selling unsafe or adulterated food without licence (Section
                  59), and even <strong>life imprisonment</strong> in cases where adulterated food causes
                  death (Section 59(iv)). Beyond penalties, FSSAI enforcement officers can seize entire
                  food stock, seal the premises, and issue stop-business orders — all without prior notice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ LICENCE TYPES ACCORDION ══════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="Types of FSSAI Registration">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  Licence Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  3 Types of FSSAI Registration — Which One Do You Need?
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Click any type to see eligibility, fee, and documents required.</p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {LICENCE_TYPES.map((l, i) => (
                  <motion.div key={l.type} variants={fadeUp}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenType(openType === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-green-50 transition">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="text-2xl shrink-0">{l.icon}</span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800">{l.type}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{l.who}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold rounded-full px-2.5 py-1 text-white hidden sm:inline"
                          style={{ background: l.badgeColor }}>{l.badge}</span>
                        <ChevronDown size={16} style={{ color: "#15803d" }}
                          className={`transition-transform duration-300 ${openType === i ? "rotate-180" : ""}`} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {openType === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-100">
                          <div className="px-6 py-5 grid sm:grid-cols-2 gap-5">
                            <div>
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">Who This Covers</p>
                              <ul className="space-y-1.5">
                                {l.examples.map(e => (
                                  <li key={e} className="flex items-center gap-2 text-sm text-gray-700">
                                    <CheckCircle size={13} className="text-green-500 shrink-0" /> {e}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-3">
                              {[
                                { k:"Form", v:l.form },
                                { k:"Government Fee", v:l.fee },
                                { k:"Validity", v:l.validity },
                                { k:"Processing Time", v:l.processingTime },
                              ].map(({ k, v }) => (
                                <div key={k}>
                                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{k}</p>
                                  <p className="text-sm font-semibold text-gray-800 mt-0.5">{v}</p>
                                </div>
                              ))}
                            </div>
                            <div className="sm:col-span-2 bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-2">
                              <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                              <p className="text-xs text-red-700"><strong>Penalty without {l.type}:</strong> {l.penalty}</p>
                            </div>
                          </div>
                          <div className="px-6 pb-5">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition hover:scale-105">
                              <MessageCircle size={13} /> Apply for {l.type}
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — FoSCos & Compliance ═══════════════════════════ */}
        <section className="py-20 bg-white" aria-label="FSSAI FoSCos and Compliance">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#14532d" }}>
                FSSAI on FoSCos Portal, Annual Returns &amp; Post-Registration Compliance
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Once your FSSAI licence is issued, the compliance obligations do not end — they begin.
                  Every licenced food business (State and Central licence holders) must file an
                  <strong> Annual Return in Form D1</strong> on the FoSCos portal by <strong>31 May</strong>
                  each year, covering food production quantity, value, import, and export details for the
                  previous financial year. Failure to file the annual return attracts a penalty of ₹100
                  per day. Petty food manufacturers (Basic Registration holders) are not required to file
                  Form D1, but must comply with all labelling and hygiene standards.
                </p>
                <p>
                  The <strong>FSSAI labelling requirements</strong> under the Food Safety and Standards
                  (Labelling and Display) Regulations, 2020 are comprehensive and strictly enforced:
                  every packaged food product must display the FSSAI licence number, product name,
                  ingredients list, allergen declaration, net quantity, manufacturing date and best before
                  date, batch/lot number, manufacturer&apos;s name and address, nutritional information per
                  100g/ml, and country of origin (for imported products). Non-compliant labelling can
                  result in product seizure, recall notices, and penalty notices — even if the food itself
                  is safe. Taxvio advises clients on FSSAI labelling compliance as part of the post-registration support.
                </p>
                <p>
                  FSSAI&apos;s enforcement arm — the <strong>State Food Safety Officers (SFSO)</strong> and
                  <strong> Designated Officers (DO)</strong> — conduct periodic inspections of food
                  premises, vehicles, and storage facilities. During inspection, the officer checks:
                  validity of FSSAI licence, cleanliness and hygiene of the premises, product labelling
                  compliance, food safety management records, pest control records, temperature records
                  (for cold chain), and water quality test reports. A valid, prominently displayed FSSAI
                  licence and a clean compliance record are the two most important safeguards during
                  an FSSAI inspection.
                </p>
              </motion.div>

              {/* Display rules */}
              <motion.div variants={fadeUp} className="mt-8">
                <h3 className="font-extrabold mb-4 text-base" style={{ color: "#14532d" }}>
                  FSSAI Licence Display &amp; Labelling Rules — Post-Registration
                </h3>
                <div className="space-y-3">
                  {DISPLAY_RULES.map((rule, i) => (
                    <div key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
                      <CheckCircle size={15} className="text-green-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{rule}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ DOCUMENTS TABS ═══════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="Documents for FSSAI Registration">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  Document Checklist
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  Documents Required for FSSAI Registration
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Basic Registration */}
                <div>
                  <h3 className="font-extrabold mb-4 flex items-center gap-2 text-base" style={{ color: "#15803d" }}>
                    🌿 Basic Registration (Form A)
                  </h3>
                  <div className="space-y-3">
                    {DOCS_BASIC.map(({ label, sub }) => (
                      <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                        <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* State / Central */}
                <div>
                  <h3 className="font-extrabold mb-4 flex items-center gap-2 text-base" style={{ color: "#1d4ed8" }}>
                    🏭 State / Central Licence (Form B) — Additional Documents
                  </h3>
                  <div className="space-y-3">
                    {DOCS_STATE_CENTRAL.map(({ label, sub }) => (
                      <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                        <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="FSSAI Registration Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#f0fdf4", color: "#15803d" }}>
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  FSSAI Registration Process — 6 Steps to Licence Certificate
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  WhatsApp us your documents — licence certificate delivered in 7–60 days.
                </p>
              </motion.div>
              <div className="space-y-5">
                {STEPS.map(({ n, title, desc }) => (
                  <motion.div key={n} variants={fadeUp} className="flex gap-5 items-start">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md"
                      style={{ background: "#15803d" }}>
                      {n}
                    </div>
                    <div className="flex-1 border border-gray-100 rounded-2xl p-5" style={{ background: "#f9fef9" }}>
                      <p className="font-bold text-gray-800">{title}</p>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ PRICING ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#14532d" }} aria-label="FSSAI Registration Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                FSSAI Registration &amp; Licence Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Taxvio fee + government fee both listed below. Validity of 1 year assumed.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan:"Basic Registration", price:"₹999", govtFee:"+ ₹100/yr Govt", highlight:false,
                  items:["FSSAI Basic Registration (Form A)","Licence type assessment","FoSCos portal filing","Food category selection","Licence certificate delivery"],
                },
                {
                  plan:"State Licence", price:"₹1,999", govtFee:"+ ₹2,000–₹5,000 Govt", highlight:true,
                  items:["FSSAI State Licence (Form B)","All Basic plan inclusions","Complete document preparation","Premises layout guidance","Annual return (Form D1) advisory"],
                },
                {
                  plan:"Central Licence", price:"₹3,499", govtFee:"+ ₹7,500+ Govt", highlight:false,
                  items:["FSSAI Central Licence (Form B)","Multi-state / import-export setup","High-risk food category classification","Inspection preparation support","Full post-registration compliance guide"],
                },
              ].map(({ plan, price, govtFee, highlight, items }) => (
                <div key={plan} className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: highlight ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                    border: highlight ? "2px solid rgba(255,255,255,0.5)" : "1px solid rgba(255,255,255,0.15)",
                  }}>
                  {highlight && (
                    <span className="text-[10px] font-bold text-green-800 bg-white rounded-full px-3 py-0.5 self-start mb-3 uppercase tracking-wide">
                      Most Common
                    </span>
                  )}
                  <p className="text-white font-bold text-base mb-1">{plan}</p>
                  <p className="text-3xl font-extrabold text-white">{price}</p>
                  <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{govtFee}</p>
                  <ul className="space-y-2 flex-1">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm"
                        style={{ color: "rgba(255,255,255,0.82)" }}>
                        <CheckCircle size={14} className="text-green-400 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="mt-6 block text-center py-3 rounded-xl font-bold text-sm transition hover:scale-105"
                    style={{
                      background: highlight ? "#fff" : "rgba(255,255,255,0.15)",
                      color: highlight ? "#14532d" : "#fff",
                    }}>
                    Get Started →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="FSSAI Registration FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ background: "#f0fdf4", color: "#15803d", borderColor: "#bbf7d0" }}>FAQ</span>
                <h2 className="text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  Frequently Asked Questions — FSSAI Registration
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Have questions? WhatsApp us — we reply within 15 minutes.</p>
              </motion.div>
              <motion.div variants={stagger} className="space-y-3">
                {FAQS.map((f, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                    itemScope itemType="https://schema.org/Question">
                    <button
                      className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-green-50 transition"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      aria-expanded={faqOpen === i}>
                      <span itemProp="name">{f.q}</span>
                      <ChevronDown size={18} style={{ color: "#15803d" }}
                        className={`shrink-0 ml-4 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                          className="overflow-hidden" itemScope itemType="https://schema.org/Answer">
                          <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed" itemProp="text">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ RELATED SERVICES ═════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="Related FSSAI Services">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold" style={{ color: "#14532d" }}>Other FSSAI &amp; Compliance Services</h2>
              <p className="text-gray-500 text-sm mt-2">Complete food business compliance — registration to annual return</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"FSSAI Renewal",           href:"/serviceslist/fssai/fssai-renewal",       desc:"Renew Basic / State / Central licence — ₹999+" },
                { title:"FSSAI Modification",      href:"/serviceslist/fssai/fssai-modification",   desc:"Amend food products, address, ownership — ₹999+" },
                { title:"FSSAI Annual Return",     href:"/serviceslist/fssai/fssai-annual-return",  desc:"Form D1 filing for licensed FBOs — ₹699/year" },
                { title:"GST Registration",        href:"/serviceslist/gst/gst-registration",       desc:"GST GSTIN in 3–7 days — ₹1,499" },
                { title:"Trademark Registration",  href:"/serviceslist/trademark/trademark-registration", desc:"Protect your food brand — ₹3,999" },
                { title:"Import Export Code (IEC)", href:"/serviceslist/import-export/iec",          desc:"IEC for food import/export — ₹1,499" },
              ].map(({ title, href, desc }) => (
                <Link key={title} href={href}
                  className="group flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <ArrowRight size={16} className="shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" style={{ color: "#15803d" }} />
                  <div>
                    <p className="font-bold text-gray-800 text-sm group-hover:text-green-700 transition">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ════════════════════════════════════════════════════ */}
        <section className="py-20 relative overflow-hidden" style={DARK}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(74,222,128,0.1) 0%,transparent 70%)" }} />
          <motion.div className="relative max-w-3xl mx-auto px-6 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 text-white"
              style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
              <Zap size={14} className="text-green-400" /> Penalty up to ₹10 lakh for operating without FSSAI
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Get Your FSSAI Licence — Start Your Food Business Legally
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Basic Registration, State Licence, and Central Licence — FoSCos portal filing,
              food category selection, document support. Starting ₹999 + government fee. Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Apply for FSSAI
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                <Phone size={20} /> Free Consultation
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-5 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="flex items-center gap-1.5"><Shield size={13} />100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={13} />Expert Assistance</span>
              <span className="flex items-center gap-1.5"><Clock size={13} />Fast Processing</span>
              <span className="flex items-center gap-1.5"><FileText size={13} />All Food Categories</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#0d2e10", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Get FSSAI Licence
          </a>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-800 px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            Free Consultation
          </Link>
        </div>

        <Footar />
      </main>
    </>
  );
}