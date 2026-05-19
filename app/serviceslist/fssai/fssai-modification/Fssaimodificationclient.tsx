"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle, ChevronDown, ArrowRight, Phone,
  MessageCircle, Clock, Shield, Zap, FileText, AlertCircle, Edit3,
} from "lucide-react";
import Footar from "@/components/Footar";

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I need help with FSSAI Licence Modification / Amendment.")}`;
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

const CHANGE_TYPES = [
  {
    icon: "🥘",
    title: "Addition / Deletion of Food Products",
    category: "Product Change",
    badgeColor: "#15803d",
    urgency: "File before adding new products",
    when: "When you start manufacturing, processing, or selling food products/categories not currently listed on your FSSAI licence — or when you permanently stop offering listed products.",
    risk: "Selling unlisted food products is a violation — FSSAI inspector can seize stock and impose penalty even if you have a valid licence for other products.",
    docs: ["Current FSSAI Licence Certificate", "Updated list of food products/categories", "Product specification or packaging sample (if new category)", "Updated food safety management plan (if new activity)"],
    processing: "15–30 days",
    autoApproved: false,
  },
  {
    icon: "📍",
    title: "Change of Business Address / Premises",
    category: "Premises Change",
    badgeColor: "#1d4ed8",
    urgency: "File within 30 days of shifting",
    when: "When the food business relocates to a new premises, opens an additional manufacturing unit, or closes one of the listed locations.",
    risk: "Operating from an address not on your FSSAI licence is a violation. E-commerce platforms and institutional buyers routinely verify premise addresses against FSSAI records.",
    docs: ["New premises address proof (electricity bill / lease agreement)", "Layout plan of new premises", "NOC from landlord or property owner", "Updated GST registration showing new address (if changed there too)"],
    processing: "15–45 days (inspection may be required for new premises)",
    autoApproved: false,
  },
  {
    icon: "👤",
    title: "Change of Proprietor / Partner / Director",
    category: "Ownership Change",
    badgeColor: "#7c3aed",
    urgency: "File immediately on change",
    when: "Death of proprietor (transfer to legal heir), retirement of a partner, induction of new director in a company, or change in key managerial personnel listed on the FSSAI licence.",
    risk: "An FSSAI licence with wrong authorised signatory or owner details is invalid for enforcement purposes. New owners/directors cannot sign FSSAI documents with the old authorised signatory on record.",
    docs: ["Death certificate / resignation letter (for outgoing person)", "ID and address proof of incoming person", "Board resolution / partnership deed amendment", "Aadhaar of new authorised signatory for FoSCos OTP"],
    processing: "15–30 days",
    autoApproved: false,
  },
  {
    icon: "🏷️",
    title: "Change of Business / Brand Name",
    category: "Name Change",
    badgeColor: "#b45309",
    urgency: "File before rebranding",
    when: "When the food business is rebranded with a new trade name, when a company changes its registered name, or when the proprietorship firm trades under a different name.",
    risk: "All food product labels must carry the FSSAI-registered business name. A mismatch between the label name and FSSAI records can lead to labelling violation notices from FSSAI enforcement.",
    docs: ["Name change certificate from ROC (for companies)", "Revised GST certificate showing new name", "Gazette notification (for proprietorship name change, if any)", "Updated partnership deed or MOA/AOA"],
    processing: "15–30 days",
    autoApproved: true,
  },
  {
    icon: "📈",
    title: "Upgrade from Basic to State / State to Central",
    category: "Licence Upgrade",
    badgeColor: "#dc2626",
    urgency: "File when turnover crosses threshold",
    when: "When annual turnover crosses ₹12 lakh (Basic to State) or ₹20 crore (State to Central), or when the business expands to operations in multiple states requiring Central Licence.",
    risk: "Operating under a lower-tier licence than required is the same as non-compliance. Central Licence is required for food importers — operating without it attracts customs and FSSAI dual action.",
    docs: ["Audited financials / CA certificate showing new turnover", "GST returns (GSTR-9) for the financial year", "Multi-state operation documents (if Central upgrade)", "All State Licence documents for fresh Central application"],
    processing: "30–60 days (fresh licence application required for upgrades)",
    autoApproved: false,
  },
  {
    icon: "⚙️",
    title: "Addition of New Food Business Activity",
    category: "Activity Change",
    badgeColor: "#0891b2",
    urgency: "File before starting new activity",
    when: "A retailer who starts manufacturing, a distributor who starts catering, a manufacturer who starts e-commerce sales, or any FBO adding a new activity type not currently on their licence.",
    risk: "Each food business activity (manufacturing, retail, distribution, catering, storage) requires specific registration. Adding undeclared activities can result in a Show Cause Notice and penalty from FSSAI.",
    docs: ["Description of new activity with supporting documents", "Updated premises layout (if new activity needs separate area)", "FSMS plan for the new activity", "Any new NOCs required for the new activity (municipality, pollution control, etc.)"],
    processing: "15–45 days",
    autoApproved: false,
  },
];

const CONSEQUENCES = [
  { risk: "Product Seizure",           desc: "FSSAI officers can seize food products manufactured or sold under an unlisted category — regardless of whether the rest of your licence is valid." },
  { risk: "Penalty on Mismatch",       desc: "Operating from an unregistered address or with unregistered products carries the same penalty as no licence — up to ₹5 lakh under Section 63 FSS Act." },
  { risk: "Platform Delisting",        desc: "Swiggy, Zomato, Amazon, and BigBasket cross-check FSSAI product categories and addresses against FoSCos records during vendor audits — mismatch leads to delisting." },
  { risk: "Labelling Violation Notice",desc: "Products labelled with a business name or address different from FoSCos records attract labelling violation notices — products must be relabelled or recalled." },
  { risk: "Licence Cancellation Risk", desc: "FSSAI enforcement officers who find material differences between the licence and actual operations can initiate SCN and cancel the licence under Regulation 2.1.13." },
];

const STEPS = [
  { n:"01", title:"Change Assessment & Category Confirmation",
    desc:"Taxvio identifies the exact nature of the change — product addition, address change, ownership change, name change, activity addition, or upgrade. Some changes require a simple amendment on FoSCos; others (like licence upgrades) require a fresh application. The correct process is confirmed before proceeding." },
  { n:"02", title:"Document Collection",
    desc:"All documents supporting the change are collected — updated address proof, new product specifications, ownership change documents, board resolutions, GST amendments, layout plans, and NOCs as applicable. Taxvio provides a tailored checklist for the specific change type." },
  { n:"03", title:"FoSCos Amendment Application",
    desc:"Amendment application is filed on the FoSCos portal under the existing FSSAI licence/registration number. For Basic Registration, Form A amendment; for State/Central, Form B amendment with supporting evidence of the change and reason for modification." },
  { n:"04", title:"Scrutiny & Inspection (if applicable)",
    desc:"For changes involving new premises, new manufacturing activities, or significant product category additions, FSSAI may schedule a premises inspection before approving the amendment. Taxvio prepares you for inspection with a pre-inspection checklist." },
  { n:"05", title:"Amendment Approval & Updated Certificate",
    desc:"Upon approval, FoSCos generates an updated FSSAI certificate reflecting the amendment — same 14-digit licence number, updated details. For food product additions, the updated product list on FoSCos is the authorisation — product labelling can be updated immediately." },
  { n:"06", title:"Downstream Updates",
    desc:"After FSSAI amendment, Taxvio advises on downstream updates required — GST address amendment, updated food product labels with new FSSAI category, platform re-verification (Swiggy/Zomato/Amazon), and updated FSMS documentation for the new products or activity." },
];

const MODIFICATION_VS_RENEWAL = [
  { param:"Purpose",          mod:"Change/update details on existing licence",         ren:"Extend validity of existing licence" },
  { param:"Trigger",          mod:"Business change — product, address, ownership, etc.", ren:"Licence expiry approaching (30-day window)" },
  { param:"FSSAI Number",     mod:"Remains same — only details updated",               ren:"Remains same — only validity date changes" },
  { param:"Fee",              mod:"Nominal amendment fee (₹0–₹1,000 depending on type)",ren:"Full government fee for renewal period" },
  { param:"Processing Time",  mod:"15–45 days depending on change type",               ren:"7–30 days for Basic; 30–60 days State/Central" },
  { param:"When to File",     mod:"As soon as the change occurs — before operating changed activity", ren:"At least 30 days before expiry" },
  { param:"Inspection Risk",  mod:"High for address/activity changes — officer may visit", ren:"Lower — officer usually relies on documents" },
  { param:"Can Both Be Filed Together?", mod:"Yes — amendment + renewal can be filed simultaneously on FoSCos", ren:"Yes — file renewal first if expiry is near" },
];

const FAQS = [
  {
    q: "When must I apply for FSSAI modification and can I operate during the amendment process?",
    a: "You must apply for FSSAI modification as soon as any change occurs in your food business — before you begin operating the changed activity or from the changed premises. You cannot legally operate the new or changed activity under your old FSSAI details. For example, if you add a new food product category, you cannot manufacture or sell that product until the amendment is approved and the updated certificate reflects it. For address changes, you must file the amendment application within 30 days of shifting to the new premises. During the amendment processing period (15–45 days), you should continue operating the existing approved activities only — not the new ones. If the amendment involves a new premises or significant new activity, an FSSAI inspection may be required before approval. Taxvio tracks amendment status on FoSCos and provides regular updates until the amended certificate is issued.",
  },
  {
    q: "What is the difference between FSSAI modification (amendment) and FSSAI renewal?",
    a: "FSSAI modification (amendment) and renewal are two distinct processes that address different needs. Modification (amendment) updates the details on an existing FSSAI licence — adding new food products, changing the address, updating ownership, changing the business name, or adding a new activity. Renewal extends the validity of the existing licence without changing any details. The licence number remains the same in both cases. A common scenario where both are needed simultaneously: a food business whose licence is expiring also wants to add new food products. In this case, Taxvio files both the amendment and renewal simultaneously on FoSCos — updating the product list AND extending the validity in a single workflow. The government fee for an amendment is separate from (and usually much lower than) the renewal fee. Failing to file an amendment when details change is a compliance violation — even a freshly renewed licence with outdated details is non-compliant.",
  },
  {
    q: "What food products and categories can I add through FSSAI modification?",
    a: "FSSAI classifies food products into over 30 categories under the Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011 — including dairy products, meat and poultry, fish and seafood, fruits and vegetables, cereals and pulses, oils and fats, confectionery, bakery products, beverages, condiments and spices, nutraceuticals and health foods, packaged drinking water, and more. You can add any food product category to your existing licence through a modification application on FoSCos, provided the production is from the same or an approved premises. The amendment application must specify the new food product name, FSSAI category code, and nature of activity (manufacture, trade, or both). If the new product requires significantly different production conditions or equipment (e.g., adding a meat processing line to a grain mill), an inspection may be required. Taxvio helps identify the correct FSSAI category codes for new products — incorrect category selection is a frequent reason for modification rejection.",
  },
  {
    q: "How does FSSAI modification work when a proprietor dies or a business is transferred?",
    a: "When a proprietor of a food business dies, the FSSAI licence or registration does not automatically transfer to the legal heir. The legal heir or successor must file an amendment application on FoSCos within 30 days to transfer the FSSAI licence. Required documents include: death certificate of the original proprietor, legal heir certificate or succession certificate, identity and address proof of the legal heir, and a declaration of intention to continue the food business. In the case of a business transfer (sale of business as a going concern), the buyer must apply for a fresh FSSAI registration/licence in their name — the existing owner's FSSAI licence cannot be transferred to an unrelated buyer. For partnership firms where one partner retires, an amendment to remove the retiring partner and add the new structure is required. Taxvio handles the complete documentation and FoSCos filing for succession and ownership change amendments.",
  },
  {
    q: "Does adding a new food product require a separate FSSAI licence or just an amendment?",
    a: "In most cases, adding a new food product to an existing FSSAI licence requires only an amendment — not a separate licence. The existing licence number is retained; the product list on FoSCos is updated. This applies whether you are adding a new product within an existing category (e.g., adding a new biscuit variant to an existing bakery licence) or adding an entirely new food category (e.g., adding dairy products to a snack foods manufacturer's licence). The exception is when the new product requires a significantly different premises or when the activity type changes fundamentally (e.g., a retailer who starts home-based manufacturing would need to amend the activity type and may also need a premises inspection). Another exception: if the addition of new products causes the business to cross a turnover threshold (₹12 lakh or ₹20 crore), a licence upgrade is needed rather than just a product amendment. Taxvio assesses whether a simple product amendment or a licence upgrade is the right approach for each situation.",
  },
  {
    q: "What happens to my food product labels after an FSSAI modification is approved?",
    a: "After an FSSAI modification is approved and the updated certificate is issued on FoSCos, all food product labels and packaging must be updated to reflect the current FSSAI licence details. Specifically: if the business name changed — all labels must be updated to reflect the new FSSAI-registered name before the products are sold; if the address changed — labels carrying the old address must be phased out (existing stock with old labels can typically be sold through, but new production must use the updated address); if new food products were added — labels for the new products can now legally carry the FSSAI number, as the category is now approved; if the activity changed — the label declaration (e.g., 'Manufactured by' vs 'Packed by') may need updating. The FSSAI number (14 digits) itself remains unchanged throughout — only the details associated with that number on FoSCos are updated. Taxvio advises clients on the specific labelling updates required after each type of amendment.",
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
  name: "FSSAI Licence Modification India",
  serviceType: "FSSAI Amendment / Modification",
  description:
    "Expert FSSAI licence modification — food product addition, address change, ownership change, name change, activity addition, licence upgrade. FoSCos amendment filing. Starting ₹999. Pan India.",
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
    description: "FSSAI modification / amendment starting ₹999. All change types covered.",
  },
};

export default function FSSAIModificationClient() {
  const [faqOpen, setFaqOpen]   = useState<number | null>(null);
  const [openType, setOpenType] = useState<number | null>(0);

  return (
    <>
      <Script id="fssai-mod-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="fssai-mod-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden text-white" style={DARK}
          aria-label="FSSAI Licence Modification Services India" itemScope itemType="https://schema.org/Service">
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
                <li className="text-white font-medium">FSSAI Modification</li>
              </ol>
            </nav>

            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
                    style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    File Before Operating Changed Activity — Penalty Up to ₹5 Lakh
                  </motion.div>

                  <motion.h1 variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white"
                    itemProp="name">
                    FSSAI Licence Modification
                    <span className="block mt-2" style={{ color: "#86efac" }}>
                      &amp; Amendment Services
                    </span>
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }} itemProp="description">
                    Expert FSSAI amendment — food product addition, address change, ownership transfer,
                    business name change, new activity addition, and licence upgrade. FoSCos portal
                    filing with full compliance advisory. Starting at{" "}
                    <strong className="text-white">₹999</strong>.
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
                    {["✅ Food Product Addition", "✅ Address Change", "✅ Ownership Transfer", "✅ Licence Upgrade"].map(tx => (
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
                        <Edit3 size={18} className="text-green-400" /> FSSAI Modification — At a Glance
                      </p>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { icon:"₹",  label:"Starting Fee",          val:"₹999 (Taxvio professional fee)" },
                        { icon:"📋", label:"Form Used",             val:"Form A / Form B (Amendment)" },
                        { icon:"⏱", label:"Processing Time",       val:"15–45 days (change-dependent)" },
                        { icon:"🔢", label:"Licence Number",        val:"Remains same after modification" },
                        { icon:"⚠️", label:"Operating Without",     val:"Up to ₹5 lakh penalty" },
                        { icon:"🗺", label:"Coverage",              val:"All states — FoSCos portal" },
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
                        Start Modification — ₹999 →
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
            <span>New FSSAI licence?{" "}
              <Link href="/serviceslist/fssai/fssai-registration" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>Apply for Registration</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>Renew expiring licence?{" "}
              <Link href="/serviceslist/fssai/fssai-renewal" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>FSSAI Renewal</Link>
            </span>
            <span className="text-gray-400">|</span>
            <span>File annual return?{" "}
              <Link href="/serviceslist/fssai/fssai-annual-return" className="font-bold underline underline-offset-2" style={{ color: "#15803d" }}>FSSAI Form D1</Link>
            </span>
          </p>
        </div>

        {/* ══ SEO BLOCK 1 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="What is FSSAI Modification">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#14532d" }}>
                What is FSSAI Modification and When is it Required?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>FSSAI modification</strong> (also called FSSAI amendment) is the process of
                  updating the details on an existing FSSAI registration or food licence to reflect a
                  change in the food business. Under <strong>Regulation 2.1.10 of the Food Safety and
                  Standards (Licensing and Registration of Food Businesses) Regulations, 2011</strong>,
                  every Food Business Operator (FBO) is legally obligated to inform FSSAI of any change
                  in the information originally submitted with the registration/licence application —
                  and to obtain an updated licence reflecting those changes before operating under the
                  new conditions.
                </p>
                <p>
                  The core principle is simple but frequently misunderstood: an FSSAI licence is not a
                  blanket food business permit — it is a <strong>specific authorisation</strong> for
                  defined food products, at a defined premises, under defined ownership, for defined
                  food business activities. When any of these parameters change, the licence must be
                  updated before the changed activity begins. Operating any food activity not covered
                  by the current licence — even if the business has a valid, unexpired FSSAI licence —
                  is a violation of the FSS Act and attracts penalties under Section 63 (up to ₹5 lakh).
                </p>
                <p>
                  The most common trigger for FSSAI modification is <strong>food product addition</strong>
                  — a business that begins manufacturing or selling a food category not listed on its
                  current FSSAI licence. This is extremely common in growing food businesses: a home
                  baker who adds ice cream to their menu, a snack manufacturer who launches a new
                  beverage line, a restaurant that starts selling packaged condiments. In each case, the
                  new product category must be added to the FSSAI licence via a modification application
                  on <strong>FoSCos</strong> before the product is sold. Labels on the new products
                  cannot legally carry the FSSAI number until the product category is on the licence.
                </p>
                <p>
                  Equally important — and often overlooked — is the <strong>address change amendment</strong>.
                  When a food business shifts to a new premises, the FSSAI licence must be updated to
                  reflect the new address. E-commerce food platforms (Swiggy, Zomato, Amazon Food,
                  BigBasket) routinely cross-verify the premises address on the FSSAI licence against
                  their own records during annual vendor audits. A mismatch — even an innocuous one like
                  a floor number change — can trigger a vendor compliance flag that may result in
                  temporary delisting until the FSSAI records are updated.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CHANGE TYPES ACCORDION ═══════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="FSSAI Modification Types">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  Change Types
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  6 Types of FSSAI Modification — When to File &amp; What You Need
                </h2>
                <p className="text-gray-600 mt-2 text-sm">Click each change type to see when it applies, the risk of not filing, and documents required.</p>
              </motion.div>

              <motion.div variants={stagger} className="space-y-3">
                {CHANGE_TYPES.map((c, i) => (
                  <motion.div key={c.title} variants={fadeUp}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenType(openType === i ? null : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-green-50 transition">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="text-2xl shrink-0">{c.icon}</span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-bold text-gray-800 text-sm">{c.title}</p>
                            {c.autoApproved && (
                              <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Often Auto-Approved</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{c.urgency}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold rounded-full px-2.5 py-1 text-white hidden sm:inline"
                          style={{ background: c.badgeColor }}>{c.category}</span>
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
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">When This Applies</p>
                              <p className="text-sm text-gray-700">{c.when}</p>
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-3 mb-1">Processing Time</p>
                              <p className="text-sm font-semibold text-gray-800">{c.processing}</p>
                            </div>
                            <div>
                              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-2">Documents Required</p>
                              <ul className="space-y-1.5">
                                {c.docs.map(d => (
                                  <li key={d} className="flex items-start gap-2 text-xs text-gray-700">
                                    <CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" /> {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="sm:col-span-2 bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-2">
                              <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                              <p className="text-xs text-red-700"><strong>Risk of not filing:</strong> {c.risk}</p>
                            </div>
                          </div>
                          <div className="px-6 pb-5">
                            <a href={WA} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition hover:scale-105">
                              <MessageCircle size={13} /> File This Modification
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

        {/* ══ CONSEQUENCES GRID ════════════════════════════════════════════ */}
        <section className="py-16 bg-white" aria-label="Consequences of Not Modifying FSSAI">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#14532d" }}>
                  What Happens If You Don&apos;t Update Your FSSAI Licence?
                </h2>
                <p className="text-gray-600 mt-2 text-sm">5 consequences of operating with outdated FSSAI details</p>
              </motion.div>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {CONSEQUENCES.map(({ risk, desc }) => (
                  <motion.div key={risk} variants={scaleIn}
                    className="bg-red-50 border border-red-100 rounded-2xl p-5 flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-800 text-sm">{risk}</p>
                      <p className="text-red-700 text-xs mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ MODIFICATION vs RENEWAL TABLE ════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="Modification vs Renewal">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d", border: "1px solid #bbf7d0" }}>
                  Comparison
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  FSSAI Modification vs FSSAI Renewal — Key Differences
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "#14532d" }}>
                      <th className="text-left px-5 py-4 text-white font-semibold">Parameter</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Modification (Amendment)</th>
                      <th className="text-left px-5 py-4 text-white font-semibold">Renewal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MODIFICATION_VS_RENEWAL.map(({ param, mod, ren }, i) => (
                      <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                        <td className="px-5 py-3.5 font-semibold text-gray-800">{param}</td>
                        <td className="px-5 py-3.5 text-gray-700">{mod}</td>
                        <td className="px-5 py-3.5 text-gray-700">{ren}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <motion.div variants={fadeUp}
                className="mt-5 flex items-start gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
                <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm">
                  <strong>Tip:</strong> If your FSSAI licence is expiring AND you need to update details,
                  file both modification and renewal simultaneously on FoSCos — Taxvio handles both in a
                  single workflow, saving time and ensuring your renewed certificate reflects all changes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ SEO BLOCK 2 ══════════════════════════════════════════════════ */}
        <section className="py-20 bg-white" aria-label="FSSAI Modification Process Detail">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: "#14532d" }}>
                FSSAI Modification on FoSCos — Inspection Risk, Labelling Updates &amp; Downstream Compliance
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The FoSCos portal processes modification applications in two ways depending on the
                  type of change: <strong>auto-approved modifications</strong> (typically name changes
                  or minor product additions within the same food category) are processed within
                  7–15 days without officer intervention; <strong>scrutiny-based modifications</strong>
                  (new premises, new manufacturing activities, significant category additions, ownership
                  changes) are reviewed by a food safety officer and may require a premises inspection
                  before approval. Understanding which pathway your modification will follow is important
                  for planning — Taxvio confirms the expected pathway before filing.
                </p>
                <p>
                  <strong>Licence upgrades</strong> — from Basic to State Licence (turnover crossing
                  ₹12 lakh) or from State to Central Licence (turnover crossing ₹20 crore or
                  multi-state expansion) — are not simple amendments. They require a fresh application
                  for the higher licence tier, while simultaneously filing surrender or cancellation of
                  the lower-tier licence. The fresh application follows the same process as an original
                  licence application for that tier, including payment of the higher government fee.
                  The lower-tier registration/licence cannot be used during the processing period for
                  the higher licence — there may be a brief gap in coverage. Taxvio coordinates the
                  transition to minimise this gap, typically by filing the upgrade application before
                  the turnover threshold is actually crossed, and tracking the GSTIN turnover in
                  GSTR-9 to identify when an upgrade is approaching.
                </p>
                <p>
                  After any FSSAI modification is approved, <strong>downstream compliance updates</strong>
                  are required. If food products were added, all new product labels must now carry the
                  FSSAI number — and existing labels must not carry the number for categories that were
                  not on the previous licence. If the address changed, labels for new batches must carry
                  the updated address. E-commerce platforms — Swiggy, Zomato, Amazon Seller, and
                  BigBasket — must be notified of the updated FSSAI details and the updated certificate
                  must be re-uploaded to the platform compliance portal. Failure to update platform
                  records after an FSSAI modification can result in the platform continuing to show
                  the old (possibly incorrect) FSSAI details, which creates a compliance mismatch during
                  the next vendor audit. Taxvio provides a post-modification compliance checklist
                  tailored to the type of change made.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ PROCESS ══════════════════════════════════════════════════════ */}
        <section className="py-16" style={{ background: "#f0fdf4" }} aria-label="FSSAI Modification Process">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#15803d" }}>
                  How It Works
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  FSSAI Modification Process — 6 Steps to Updated Certificate
                </h2>
                <p className="text-gray-600 mt-2 text-sm">WhatsApp us your change details — amended certificate delivered in 15–45 days.</p>
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
        <section className="py-16" style={{ background: "#14532d" }} aria-label="FSSAI Modification Pricing">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}>
                Transparent Pricing
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4">
                FSSAI Modification Fee
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                Per modification application. Government amendment fee (if any) additional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  plan:"Simple Modification", price:"₹999", note:"Basic Registration or minor State changes", highlight:false,
                  items:["Product addition / deletion", "Business name change", "Authorised signatory change", "FoSCos amendment filing", "Updated certificate delivery"],
                },
                {
                  plan:"Address / Ownership Change", price:"₹1,499", note:"Premises shift or ownership transfer", highlight:true,
                  items:["Address amendment on FoSCos", "Ownership / proprietor change", "Document preparation support", "Inspection preparation notes", "Post-amendment label advisory"],
                },
                {
                  plan:"Licence Upgrade", price:"₹2,999", note:"Basic → State or State → Central", highlight:false,
                  items:["Turnover threshold assessment", "Fresh higher-tier application", "Old licence surrender coordination", "Full new-tier document support", "Compliance gap minimisation"],
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
        <section className="py-20 bg-white" aria-label="FSSAI Modification FAQ"
          itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ background: "#f0fdf4", color: "#15803d", borderColor: "#bbf7d0" }}>FAQ</span>
                <h2 className="text-3xl font-extrabold mt-4" style={{ color: "#14532d" }}>
                  Frequently Asked Questions — FSSAI Modification
                </h2>
                <p className="text-gray-500 mt-2 text-sm">WhatsApp us your change — amendment filed promptly.</p>
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
              <p className="text-gray-500 text-sm mt-2">Complete food business lifecycle — registration to compliance</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title:"FSSAI Registration",    href:"/serviceslist/fssai/fssai-registration",   desc:"New Basic / State / Central licence — ₹999+" },
                { title:"FSSAI Renewal",         href:"/serviceslist/fssai/fssai-renewal",         desc:"Renew before expiry — Starting ₹699" },
                { title:"FSSAI Annual Return",   href:"/serviceslist/fssai/fssai-annual-return",   desc:"Form D1 filing for licensed FBOs — ₹699/year" },
                { title:"GST Registration",      href:"/serviceslist/gst/gst-registration",        desc:"GSTIN in 3–7 days — ₹1,499" },
                { title:"GST Amendment",         href:"/serviceslist/gst/gst-amendment",           desc:"Change GST address, business name — ₹799" },
                { title:"Trademark Registration",href:"/serviceslist/trademark/trademark-registration", desc:"Protect your food brand — ₹3,999" },
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
              <Zap size={14} className="text-green-400" /> File before operating the changed activity — ₹5 lakh penalty if caught
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Update Your FSSAI Licence — Stay Fully Compliant
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              Product addition, address change, ownership transfer, name change, new activity, licence
              upgrade — Taxvio files your FSSAI amendment on FoSCos with full downstream compliance
              advisory. Starting ₹999. Pan India.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> WhatsApp — Start Modification
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
              <span className="flex items-center gap-1.5"><FileText size={13} />All Change Types</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 flex justify-center gap-4"
          style={{ background: "#0d2e10", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:scale-105 transition">
            💬 WhatsApp — Modify FSSAI Licence
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