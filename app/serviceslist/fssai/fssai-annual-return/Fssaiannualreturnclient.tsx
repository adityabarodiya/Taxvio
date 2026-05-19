"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, Calendar,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with FSSAI Annual Return (Form D1) filing.")}`;
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

const RETURN_TYPES = [
  {
    icon: "🏭",
    title: "Form D1 — Annual Return",
    who: "All State Licence and Central Licence holders",
    covers: "Food production quantity, value of food produced/sold, import/export details for the financial year",
    dueDate: "31 May every year (for previous FY)",
    penalty: "₹100 per day of delay",
    portal: "FoSCos (foscos.fssai.gov.in)",
    exempt: "Basic Registration holders are exempt from Form D1",
    badge: "Mandatory",
    badgeColor: "#dc2626",
    details: [
      "Quantity of each food product manufactured/processed (in MT or litres)",
      "Value of food products sold domestically (in ₹ lakhs)",
      "Quantity and value of food products exported",
      "Quantity and value of food products imported",
      "Installed capacity vs actual production (for manufacturers)",
    ],
  },
  {
    icon: "🏙️",
    title: "Form D2 — Half-Yearly Return (Milk & Milk Products)",
    who: "Dairies, milk processors, and milk product manufacturers licensed under FSSAI",
    covers: "Milk procurement quantity, milk product production, sales data — filed twice a year",
    dueDate: "31 July (Apr–Sep period) and 31 January (Oct–Mar period)",
    penalty: "₹100 per day of delay",
    portal: "FoSCos (foscos.fssai.gov.in)",
    exempt: "Applicable only to milk and milk product businesses — others exempt",
    badge: "Dairy Sector",
    badgeColor: "#0891b2",
    details: [
      "Milk procurement quantity (in litres/kg) — sourcewise",
      "Milk product-wise production quantity",
      "Domestic sales quantity and value",
      "Export quantity and value of milk products",
      "Opening and closing stock of milk products",
    ],
  },
];

const D1_FIELDS = [
  { field:"Part A — Basic Details",           desc:"FSSAI licence number, business name, address, licence validity, nature of food business, FBO category" },
  { field:"Part B — Food Products",           desc:"Category-wise list of all food products manufactured/processed/stored/sold during the financial year" },
  { field:"Part C — Production Details",      desc:"Quantity produced (MT/KL) and value (₹ lakhs) for each food product category — actuals vs installed capacity" },
  { field:"Part D — Sales & Distribution",   desc:"Domestic sales quantity and value by state/UT — important for multi-state Central Licence holders" },
  { field:"Part E — Import Details",          desc:"Food products imported — quantity, value, country of origin, port of entry (applicable for importers)" },
  { field:"Part F — Export Details",          desc:"Food products exported — quantity, value, destination country (applicable for exporters)" },
  { field:"Part G — Raw Materials",           desc:"Major raw materials consumed during the year — quantity and source (domestic/imported)" },
  { field:"Part H — Manpower",               desc:"Number of employees (regular + contractual) involved in food business operations" },
];

const CONSEQUENCES = [
  { risk:"Renewal Blocked on FoSCos",     desc:"All pending Form D1 returns must be cleared before the FoSCos portal allows a State or Central licence renewal application to proceed. Uncleared D1 = blocked renewal." },
  { risk:"₹100/Day Late Fee",             desc:"Under Regulation 2.1.12 of the FSSAI Licensing Regulations, a late fee of ₹100 per day accrues from 31 May until the Form D1 is filed. Multiple missed years compound." },
  { risk:"FSSAI Show Cause Notice",       desc:"FSSAI issues Show Cause Notices (SCNs) to licence holders who consistently fail to file annual returns — can lead to suspension or cancellation proceedings." },
  { risk:"Compliance Rating Impact",      desc:"FSSAI's hygiene rating and compliance grading system factors in return filing history. Poor compliance rating affects vendor empanelment with institutional buyers." },
  { risk:"Regulatory Scrutiny Trigger",   desc:"Non-filing of annual returns flags the food business in FSSAI's automated compliance monitoring system — triggering more frequent inspections." },
];

const STEPS = [
  { n:"01", title:"Licence Category & Return Type Confirmation",
    desc:"Taxvio confirms whether you need Form D1 (State/Central licence), Form D2 (dairy — half-yearly), or are exempt (Basic Registration). Multiple pending years are identified and a filing plan is prepared." },
  { n:"02", title:"Production & Sales Data Collection",
    desc:"Taxvio collects all required data — food product-wise production quantity, domestic sales by category, import/export details, raw material consumption, installed vs actual capacity, and employee count for the financial year." },
  { n:"03", title:"GST Return Reconciliation",
    desc:"Sales data from GSTR-1 and GSTR-3B is reconciled with production records to ensure consistency. Turnover declared in GST returns must match the sales value reported in Form D1 — mismatches can trigger FSSAI notices." },
  { n:"04", title:"Form D1 Preparation on FoSCos",
    desc:"Form D1 is prepared on the FoSCos portal — all 8 parts (A through H) populated with accurate, reconciled data. For multiple pending years, separate D1 filings are prepared for each financial year." },
  { n:"05", title:"Late Fee Calculation & Payment",
    desc:"If filing is after 31 May, late fee of ₹100/day from due date is calculated and paid on FoSCos before submission. Taxvio computes the exact late fee and advises on payment through the portal." },
  { n:"06", title:"Submission & Confirmation",
    desc:"Form D1 is submitted on FoSCos. Filing acknowledgement is generated. For renewal-blocked FBOs, Taxvio initiates the renewal application immediately after D1 submission clears the portal's compliance check." },
];

const RECONCILIATION_POINTS = [
  { point:"GSTR-1 Sales vs D1 Sales",     risk:"High",   desc:"Taxable turnover in GSTR-1 and GSTR-9 must be consistent with sales value declared in Form D1. A significant gap draws FSSAI scrutiny." },
  { point:"Production Qty vs Installed Capacity", risk:"Medium", desc:"If actual production reported in D1 exceeds installed capacity declared during licence application, FSSAI may flag undeclared capacity expansion." },
  { point:"Import/Export vs Shipping Bills",risk:"Medium", desc:"Import and export quantities in Form D1 must be reconcilable with ICEGATE shipping bills and customs data — FSSAI cross-checks with customs records." },
  { point:"Raw Material vs Production",    risk:"Low",    desc:"Raw material consumption figures must be logically consistent with finished goods production — implausible ratios (e.g., too little input for stated output) attract scrutiny." },
  { point:"D1 Product List vs Licence",   risk:"High",   desc:"Food products reported in Form D1 must match the product categories on the FSSAI licence. If unlisted products appear in D1, it indicates an unamended licence." },
];

const FAQS = [
  {
    q: "Who must file the FSSAI annual return (Form D1) and who is exempt?",
    a: "The FSSAI annual return in Form D1 must be filed by all State Licence and Central Licence holders — this includes food manufacturers, processors, distributors, restaurants with State/Central licence, importers, exporters, hotel chains, cloud kitchens with State/Central licence, and e-commerce food platforms. The annual return obligation is set out in Regulation 2.1.12 of the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011. Basic Registration holders (businesses with turnover up to ₹12 lakh holding only a Basic Registration certificate) are explicitly exempt from filing Form D1. For dairy businesses licensed under FSSAI (State or Central), Form D2 (half-yearly return) must also be filed in addition to Form D1 — covering milk procurement and milk product production data twice a year. There is no minimum turnover or activity threshold for State/Central licence holders — even a licenced business that had zero production or sales during a financial year must file a nil Form D1 for that year.",
  },
  {
    q: "What is the due date for FSSAI annual return and what is the penalty for late filing?",
    a: "Form D1 (FSSAI Annual Return) is due by 31 May every year — covering food business data for the previous financial year (April to March). For example, Form D1 for FY 2024-25 is due by 31 May 2025. If Form D1 is not filed by 31 May, a late fee of ₹100 per day accrues from the due date until the date of filing. Unlike the GST late fee (which has a maximum cap), the FSSAI annual return late fee does not have a statutory maximum — so delayed filing of multiple years can accumulate significant penalties. For businesses that have missed multiple years of Form D1 filing, the total late fee is the sum of daily penalties for each year. Taxvio calculates the exact late fee before filing, advises on the total payable amount, and handles the late fee payment and submission on FoSCos in a single workflow. There is currently no FSSAI amnesty scheme equivalent to GST's late fee waiver notification for prior years.",
  },
  {
    q: "What data is needed to file Form D1 FSSAI annual return?",
    a: "Form D1 has 8 parts (A through H) requiring the following data for the financial year: Part A — basic licence details (auto-populated from FoSCos for the most part); Part B — complete list of food products manufactured/processed/stored/sold during the year, by FSSAI food category; Part C — for each food product category, the quantity produced (in metric tonnes or kilolitres) and the value of sales (in ₹ lakhs), along with installed production capacity; Part D — domestic sales quantity and value broken down by state/UT of sale (particularly important for Central Licence holders); Part E — import details including quantity, value, country of origin, and port of entry for each imported food product; Part F — export details including quantity, value, and destination country; Part G — major raw materials consumed during the year — quantity, source (domestic or imported); Part H — total number of employees (regular and contractual) engaged in the food business. Taxvio collects this data from your production records, sales registers, GST returns, and import/export documentation — and reconciles figures before filing.",
  },
  {
    q: "Does Form D1 sales data need to match my GST return turnover?",
    a: "Yes — the sales value declared in Form D1 must be consistent with the turnover declared in your GST returns (GSTR-1, GSTR-3B, and GSTR-9 annual return). FSSAI and GST authorities share data under the national food and revenue compliance framework, and significant discrepancies between D1 sales and GST turnover are flagged for scrutiny. However, the two figures may legitimately differ for valid reasons: GST turnover includes all taxable and exempt supplies (including non-food items if the business has mixed activity), while D1 covers only food product sales; some food products are GST-exempt (fresh produce, unprocessed grains) and may not appear in GSTR-1 but are reported in D1; export sales appear in both D1 and GSTR-1 (Table 6A) but may be reported on different bases (FOB value in D1 vs invoice value in GSTR-1). Taxvio reconciles GSTR-1/GSTR-9 turnover with D1 sales figures before filing, documenting all legitimate differences to pre-empt any cross-agency scrutiny.",
  },
  {
    q: "What happens if I missed filing Form D1 for multiple years?",
    a: "If Form D1 has not been filed for one or more years, the FoSCos portal will show those years as pending compliance obligations — and will block any renewal application until all pending D1 returns are cleared. The approach for multiple missed years is: file Form D1 for each missing year separately on FoSCos, in chronological order (oldest year first); pay the applicable late fee for each year (₹100/day from 31 May of the year it was due to the date of filing); submit each year's return and receive the filing acknowledgement before proceeding to the next year. For businesses that have missed 3+ years of Form D1, the late fee can be substantial — Taxvio calculates the total liability upfront before starting the filing process so there are no surprises. After all pending D1 returns are filed and confirmed on FoSCos, the portal's compliance flag is cleared and renewal can proceed. Taxvio handles bulk D1 filing for multiple years as a single engagement.",
  },
  {
    q: "Is Form D1 filing different for food importers and exporters?",
    a: "Form D1 covers import and export details in dedicated sections (Parts E and F), making it relevant for food importers and exporters beyond domestic manufacturers. For food importers holding a Central Licence (mandatory for all food importers under FSSAI): Part E requires import quantity and value by food product, country of origin, and port of entry. These figures must be consistent with Bills of Entry (customs import documents) filed with ICEGATE — FSSAI can cross-verify against customs records. For food exporters (typically manufacturers exporting directly): Part F requires export quantity, value, and destination country for each exported food product. These must be consistent with shipping bills filed with ICEGATE and FIRC/BRC records for foreign exchange receipt. For businesses that both import and export: both Part E and Part F must be completed accurately. The import/export data in Form D1 is one of the sections most frequently cross-checked by FSSAI against other government databases — accurate reporting with source-reconciled figures is critical.",
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
  name: "FSSAI Annual Return Filing India",
  serviceType: "FSSAI Annual Return — Form D1",
  description:
    "Expert FSSAI annual return filing — Form D1 for State and Central licence holders, Form D2 for dairy businesses. FoSCos portal filing, GST reconciliation, late fee handling, multi-year pending returns. Starting ₹699/year. Pan India.",
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
    price: "699",
    priceCurrency: "INR",
    description: "FSSAI Form D1 annual return filing starting ₹699/year. Late fee handling and multi-year filings available.",
  },
};

export default function FSSAIAnnualReturnClient() {
  const [faqOpen, setFaqOpen]   = useState<number | null>(null);
  const [openType, setOpenType] = useState<number | null>(0);

  return (
    <>
      <Script id="fssai-ar-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="fssai-ar-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="FSSAI Annual Return Form D1 Filing India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">FSSAI Annual Return</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.35)" }}>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    Due 31 May Every Year — ₹100/Day Penalty + Blocks Renewal
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    FSSAI Annual Return —
                    <span className="block mt-2" style={{ color: "#86efac" }}>
                      Form D1 &amp; Form D2 Filing
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Expert FSSAI annual return filing — Form D1 for State and Central licence holders,
                    Form D2 for dairy businesses. GST reconciliation, late fee handling, and
                    multi-year pending return clearance. Starting at{" "}
                    <strong className="text-white">₹699/year</strong>.
                  </motion.p>

                  <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-4">
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all duration-200">
                      <MessageCircle size={18} /> File on WhatsApp
                    </a>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                      <Phone size={18} /> Free Consultation
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                    {["✅ Form D1 Filing", "✅ Form D2 (Dairy)", "✅ GST Reconciliation", "✅ Multi-Year Clearance"].map(tx => (
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
                      <p className="font-bold text-white text-lg flex items-center gap-2">
                        <Calendar size={18} className="text-green-400" /> FSSAI Annual Return — At a Glance
                      </p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon:"📋", label:"Form",               val:"Form D1 (annual) / Form D2 (dairy, half-yearly)" },
                        { icon:"📅", label:"Due Date",           val:"31 May (for previous FY)" },
                        { icon:"⚠️", label:"Late Penalty",       val:"₹100/day — no maximum cap" },
                        { icon:"🔒", label:"Blocks Renewal",     val:"Pending D1 blocks FoSCos renewal" },
                        { icon:"🌿", label:"Exempt",             val:"Basic Registration holders" },
                        { icon:"₹",  label:"Starting Fee",       val:"₹699/year (Taxvio professional fee)" },
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
                        File Form D1 Now — ₹699/year →
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
            <span>Renew FSSAI licence?{" "}
              <Link href="/serviceslist/fssai/fssai-renewal" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>FSSAI Renewal</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>New FSSAI licence?{" "}
              <Link href="/serviceslist/fssai/fssai-registration" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>FSSAI Registration</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Modify your licence?{" "}
              <Link href="/serviceslist/fssai/fssai-modification" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>FSSAI Modification</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is FSSAI Annual Return">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#14532d" }}>
                What is the FSSAI Annual Return (Form D1) and Who Must File It?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The <strong>FSSAI Annual Return in Form D1</strong> is a mandatory compliance filing
                  required under <strong>Regulation 2.1.12 of the Food Safety and Standards (Licensing
                  and Registration of Food Businesses) Regulations, 2011</strong>. Every food business
                  holding a State Licence or Central Licence under FSSAI must file Form D1 by
                  <strong> 31 May</strong> each year, reporting food production, sales, import, and
                  export data for the previous financial year (April–March). The annual return is
                  filed exclusively on the <strong>FoSCos (Food Safety Compliance System) portal</strong>
                  at foscos.fssai.gov.in.
                </p>
                <p>
                  Form D1 is not merely a statistical filing — it is a <strong>compliance declaration</strong>
                  that FSSAI uses for multiple regulatory purposes. The production and sales data in Form
                  D1 is cross-referenced with other government databases: GST return turnover (GSTIN
                  cross-match), customs import/export records (ICEGATE cross-match), and the food
                  products declared in the FSSAI licence. Inconsistencies trigger automated flags in
                  FSSAI&apos;s compliance monitoring system — leading to inspection notices, SCNs, or
                  referrals to state food safety authorities. The annual return data also feeds into
                  FSSAI&apos;s national food production and distribution statistics — used for policy
                  making and targeted enforcement campaigns.
                </p>
                <p>
                  The most practically significant consequence of missing Form D1 is its <strong>direct
                  link to licence renewal</strong>. The FoSCos portal enforces a hard pre-condition:
                  all pending Form D1 returns for a licence must be marked as filed before the portal
                  will accept a renewal application. This means that a food business that has missed
                  Form D1 for even one year will find its renewal application blocked on FoSCos —
                  regardless of whether the licence itself is about to expire. For businesses that have
                  missed multiple years, the D1 backlog must be cleared year by year (oldest first)
                  before renewal becomes possible. Taxvio regularly encounters clients who discover
                  this blockage only when attempting to renew with an imminent expiry — creating a
                  race-against-time scenario that is entirely avoidable with timely annual return filing.
                </p>
                <p>
                  <strong>Basic Registration holders</strong> (food businesses with annual turnover up
                  to ₹12 lakh holding only a Basic Registration certificate) are <strong>exempt from
                  Form D1</strong>. Similarly, petty food retailers, small hawkers, and seasonal food
                  vendors operating under Basic Registration have no annual return obligation. For
                  dairy businesses (milk processors, dairy manufacturers) holding a State or Central
                  licence, Form D1 is supplemented by <strong>Form D2</strong> — a half-yearly return
                  covering milk procurement and milk product production data, filed twice a year (by
                  31 July and 31 January).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ RETURN TYPES ═════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="FSSAI Return Types">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  Return Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  Form D1 &amp; Form D2 — What Each Return Covers
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Click each return type to see what data is required and when it is due.</p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {RETURN_TYPES.map((r, i) => (
                  <motion.div key={r.title} variants={fadeUp}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenType(openType === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-green-50 transition">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="text-2xl shrink-0">{r.icon}</span>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800">{r.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{r.who}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold rounded-full px-2.5 py-1 text-white hidden sm:inline"
                          style={{ background: r.badgeColor }}>{r.badge}</span>
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
                            <div className="space-y-3">
                              {[
                                { k:"What It Covers",  v:r.covers },
                                { k:"Due Date",         v:r.dueDate },
                                { k:"Penalty",          v:r.penalty },
                                { k:"Portal",           v:r.portal },
                                { k:"Exemption",        v:r.exempt },
                              ].map(({ k, v }) => (
                                <div key={k}>
                                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{k}</p>
                                  <p className="text-sm text-gray-700 mt-0.5">{v}</p>
                                </div>
                              ))}
                            </div>
                            <div>
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">Key Data Points Required</p>
                              <ul className="space-y-2">
                                {r.details.map(d => (
                                  <li key={d} className="flex items-start gap-2 text-xs text-gray-700">
                                    <CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /> {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="px-6 pb-5">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition hover:scale-105">
                              <MessageCircle size={13} /> File This Return
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

        {/* ══ FORM D1 PARTS BREAKDOWN ══════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Form D1 Structure">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  Form Structure
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  Form D1 — All 8 Parts Explained
                </h2>
                <p className="text-gray-500 mt-2 text-sm">Every part of Form D1 with what data goes where.</p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
                {D1_FIELDS.map(({ field, desc }) => (
                  <motion.div key={field} variants={scaleIn}
                    className="border border-gray-100 rounded-2xl p-5 flex items-start gap-3"
                    style={{ background: "#f9fef9" }}>
                    <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{field}</p>
                      <p className="text-gray-600 text-xs mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CONSEQUENCES ═════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="Consequences of Missing Form D1">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#14532d" }}>
                  5 Consequences of Not Filing FSSAI Annual Return
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Missing Form D1 blocks renewal, triggers penalty, and attracts regulatory scrutiny</p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {CONSEQUENCES.map(({ risk, desc }) => (
                  <motion.div key={risk} variants={scaleIn}
                    className="bg-red-50 border border-red-100 rounded-2xl p-5">
                    <AlertCircle size={18} className="text-red-500 mb-2" />
                    <p className="font-bold text-red-800 text-sm">{risk}</p>
                    <p className="text-red-700 text-xs mt-1 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}
                className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  <strong>Critical reminder:</strong> The FSSAI annual return late fee of ₹100/day has
                  no statutory maximum cap — unlike GST late fees. Multiple missed years can accumulate
                  substantial penalties. Taxvio calculates the exact liability before filing.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 — Reconciliation & Compliance ═══════════════════ */}
        <section className="py-20 bg-white" aria-label="Form D1 Reconciliation">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#14532d" }}>
                Form D1 Data Reconciliation — Why Accuracy Matters and What FSSAI Cross-Checks
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Form D1 is not filed in isolation — FSSAI cross-references its data against multiple
                  government databases, making accuracy critical. The two most important cross-checks are
                  with <strong>GST returns</strong> and <strong>ICEGATE customs data</strong>. For
                  domestic food businesses, the sales value declared in Form D1 (Part D) must be
                  broadly consistent with the aggregate turnover declared in GSTR-1, GSTR-3B, and GSTR-9.
                  For importers, import quantities and values in Part E are verified against Bills of
                  Entry in ICEGATE. For exporters, export data in Part F is cross-checked against
                  Shipping Bills in ICEGATE. FSSAI&apos;s data analytics team uses these cross-checks to
                  identify food businesses that may be operating beyond their declared scale — a trigger
                  for licence upgrade enforcement (Basic to State, or State to Central).
                </p>
                <p>
                  A particularly important reconciliation is between the <strong>food products listed
                  in Form D1</strong> and the <strong>food product categories on the FSSAI licence</strong>.
                  If Form D1 reports production or sales of a food category not on the current FSSAI
                  licence, it effectively discloses an unlicensed food activity — and FSSAI enforcement
                  officers may issue a Show Cause Notice requiring explanation. For this reason, Taxvio
                  first verifies the food product categories on the FSSAI licence before populating
                  Form D1&apos;s product section — and advises on filing a modification to add any missing
                  categories before the annual return is submitted.
                </p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {RECONCILIATION_POINTS.map(({ point, risk, desc }) => (
                  <motion.div key={point} variants={fadeUp}
                    className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-bold text-gray-800 text-sm">{point}</p>
                        <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${
                          risk === "High" ? "bg-red-100 text-red-700" :
                          risk === "Medium" ? "bg-amber-100 text-amber-700" :
                          "bg-green-100 text-green-700"
                        }`}>{risk} Risk</span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="Form D1 Filing Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d" }}>
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  FSSAI Annual Return Filing — 6 Steps to Compliance
                </h2>
                <p className="text-gray-600 mt-2 text-sm">WhatsApp us your production data — Form D1 filed before 31 May deadline.</p>
              </motion.div>
              <div className="space-y-5">
                {STEPS.map(({ n, title, desc }) => (
                  <motion.div key={n} variants={fadeUp} className="flex gap-5 items-start">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm text-white shrink-0 shadow-md"
                      style={{ background: "#15803d" }}>
                      {n}
                    </div>
                    <div className="flex-1 border border-gray-100 rounded-2xl p-5 bg-white">
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
        <section className="py-16" style={{ background: "#14532d" }} aria-label="Form D1 Filing Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                FSSAI Annual Return Filing Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Government late fee (₹100/day if applicable) is separate. Taxvio computes before filing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan:"Single Year — Form D1", price:"₹699/year", note:"State or Central licence", highlight:false,
                  items:["Form D1 filing for one FY", "Production & sales data entry", "GST return reconciliation", "Late fee calculation (if delayed)", "FoSCos submission & confirmation"],
                },
                {
                  plan:"Multi-Year Clearance", price:"₹1,499", note:"2–3 pending years — per engagement", highlight:true,
                  items:["D1 filing for all pending years", "Year-wise late fee computation", "Oldest-first filing sequence", "Renewal unblock confirmation", "Priority processing"],
                },
                {
                  plan:"Annual Compliance Bundle", price:"₹1,999/year", note:"Form D1 + Form D2 (dairy) if applicable", highlight:false,
                  items:["Form D1 + Form D2 (if dairy)", "Annual reminder before 31 May", "GST reconciliation included", "Renewal pre-check before D1 filing", "FSSAI compliance monitoring"],
                },
              ].map(({ plan, price, note, highlight, items }) => (
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
                  <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>{note}</p>
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
        <section className="py-20 bg-white" aria-label="FSSAI Annual Return FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ background: "#f0fdf4", color: "#15803d", borderColor: "#bbf7d0" }}>FAQ</span>
                <h2 className="text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  Frequently Asked Questions — FSSAI Annual Return
                </h2>
                <p className="text-gray-500 mt-2 text-sm">WhatsApp us your production data — Form D1 filed same week.</p>
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
                { title:"FSSAI Registration",    href:"/serviceslist/fssai/fssai-registration",  desc:"New Basic / State / Central licence — ₹999+" },
                { title:"FSSAI Renewal",         href:"/serviceslist/fssai/fssai-renewal",        desc:"Renew before expiry — Starting ₹699" },
                { title:"FSSAI Modification",    href:"/serviceslist/fssai/fssai-modification",   desc:"Product addition, address, ownership — ₹999+" },
                { title:"GST Return Filing",     href:"/serviceslist/gst/gst-return",             desc:"GSTR-1 & GSTR-3B monthly — ₹499/month" },
                { title:"GSTR-9 Annual Return",  href:"/serviceslist/gst/gstr-9",                desc:"GST annual reconciliation — ₹2,999" },
                { title:"GST Registration",      href:"/serviceslist/gst/gst-registration",       desc:"New GSTIN in 3–7 days — ₹1,499" },
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
              style={{ background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.3)" }}>
              <Zap size={14} className="text-yellow-400" /> Due 31 May — ₹100/day penalty + blocks renewal
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              File Your FSSAI Annual Return Before 31 May
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Form D1 filing for State and Central licence holders — GST reconciliation, production
              data, import/export details, late fee handling, multi-year clearance. Starting ₹699/year.
              Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — File Form D1 Now
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
              <span className="flex items-center gap-1.5"><Clock size={13} />Filed Before Deadline</span>
              <span className="flex items-center gap-1.5"><FileText size={13} />Multi-Year Clearance</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#0d2e10", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — File FSSAI Form D1
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