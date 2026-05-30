"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  FileText,
  Clock,
  Shield,
  BadgeCheck,
  Users,
  AlertCircle,
  Star,
  Zap,
  IndianRupee,
  CreditCard,
  RefreshCw,
  Globe,
  Hash,
  Building2,
  Receipt,
  UserCheck,
  Send,
} from "lucide-react";
import { type Variants } from "framer-motion";
import Footer from "@/components/Footar";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const PHONE = "918937980366";

// ─── Data ─────────────────────────────────────────────────────────────────────
const PAN_TYPES = [
  {
    type: "Individual",
    form: "Form 49A",
    who: "Indian citizens, salaried employees, freelancers, professionals, students",
    docs: ["Aadhaar card (OVD)", "Passport-size photograph", "Date of birth proof"],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    type: "Company / LLP / Firm",
    form: "Form 49A",
    who: "Private Limited, Public Limited, LLP, Partnership Firm, HUF, Trust, AOP",
    docs: ["Certificate of Incorporation (COI)", "MOA/AOA or Partnership Deed", "Registered office address proof"],
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    type: "Foreign Entity / NRI",
    form: "Form 49AA",
    who: "Foreign companies, NRIs, PIOs, OCIs, foreign nationals with Indian income",
    docs: ["Passport / OCI card", "Foreign address proof", "Bank account proof in India"],
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

const WHO_NEEDS_PAN = [
  { icon: Users, title: "Salaried Individuals", desc: "Every individual with taxable income above the basic exemption limit must have PAN for filing ITR and to receive salary without excess TDS deduction." },
  { icon: Building2, title: "Companies & LLPs", desc: "All incorporated entities — Private Limited, LLP, OPC, Section 8 — must obtain PAN before opening a bank account, filing ITR, or registering for GST." },
  { icon: CreditCard, title: "Bank Account Holders", desc: "PAN is mandatory for opening a savings/current account, making fixed deposits above ₹50,000, and for cash transactions above ₹2 lakh at banks." },
  { icon: Globe, title: "NRIs & Foreign Nationals", desc: "NRIs, PIOs, OCIs, and foreign nationals earning income in India (rent, dividends, capital gains, business income) must obtain PAN via Form 49AA." },
  { icon: Receipt, title: "Property Buyers & Sellers", desc: "PAN is mandatory for purchase or sale of immovable property above ₹10 lakh, and for TDS deduction under Section 194-IA on property transactions." },
  { icon: FileText, title: "GST & Business Registration", desc: "PAN is the foundational document for GST registration, company incorporation, import-export code (IEC), and virtually every business compliance." },
];

const DOCUMENTS_INDIVIDUAL = [
  { label: "Proof of Identity", examples: "Aadhaar, Passport, Voter ID, Driving Licence" },
  { label: "Proof of Address", examples: "Aadhaar, Bank statement, Electricity bill, Passport" },
  { label: "Proof of Date of Birth", examples: "Aadhaar, Birth certificate, Matriculation certificate" },
  { label: "Passport-size Photograph", examples: "Recent colour photograph (white background)" },
];

const DOCUMENTS_COMPANY = [
  { label: "Certificate of Incorporation", examples: "Issued by MCA / ROC" },
  { label: "MOA & AOA", examples: "For companies; Partnership deed for firms" },
  { label: "Registered Office Proof", examples: "Utility bill / bank statement in company's name" },
  { label: "PAN of Responsible Person", examples: "MD / Partner / Trustee PAN" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Share Your Details", desc: "Tell us the PAN type you need (new / correction / reprint / NRI) via WhatsApp or our contact form.", icon: MessageCircle },
  { step: "02", title: "Upload Documents", desc: "We send a simple checklist. Upload your identity, address, and date of birth proofs — takes under 5 minutes.", icon: FileText },
  { step: "03", title: "Form 49A / 49AA Filing", desc: "Our team accurately fills and submits your form on the NSDL / UTIITSL portal with 100% verification.", icon: BadgeCheck },
  { step: "04", title: "PAN Allotted & Delivered", desc: "Your PAN is allotted within 7–15 working days. e-PAN is emailed; physical card is dispatched by post.", icon: CreditCard },
];

const SERVICES = [
  { name: "New PAN Card", desc: "For first-time applicants — individuals, companies, NRIs", price: "₹149", icon: CreditCard },
  { name: "PAN Correction / Update", desc: "Name, DOB, address, photo, signature changes", price: "₹199", icon: RefreshCw },
  { name: "PAN Reprint / Duplicate", desc: "Lost or damaged card reprint with same PAN number", price: "₹149", icon: FileText },
  { name: "e-PAN Download", desc: "Instant digital PAN via Aadhaar-based OTP verification", price: "₹99", icon: Send },
  { name: "PAN for Company / LLP", desc: "Entity PAN for newly registered or existing companies", price: "₹299", icon: Building2 },
  { name: "PAN for NRI / Foreign National", desc: "Form 49AA for NRIs, PIOs, OCIs, foreign entities", price: "₹499", icon: Globe },
];

const FAQS = [
  {
    q: "What is PAN and why is it mandatory in India?",
    a: "PAN (Permanent Account Number) is a 10-digit alphanumeric identifier issued by the Income Tax Department of India under Section 139A of the Income Tax Act, 1961. It is a unique national tax identification number assigned to every taxpayer — individual or entity. PAN is mandatory for filing income tax returns, opening bank accounts, making financial transactions above ₹50,000, registering for GST, incorporating a company, buying or selling property above ₹10 lakh, and virtually every formal financial activity in India. Without PAN, TDS is deducted at the maximum marginal rate (20%) instead of the standard rate.",
  },
  {
    q: "What is the difference between Form 49A and Form 49AA?",
    a: "Form 49A is the application form for allotment of PAN for Indian citizens, Indian companies, firms, HUF, trusts, and other entities formed or registered in India. Form 49AA is specifically for foreign nationals, NRIs, PIOs (Persons of Indian Origin), OCIs (Overseas Citizens of India), and foreign companies or entities that have a source of income in India or are required to obtain PAN for compliance purposes. Both forms are filed online at the NSDL TIN portal or UTIITSL portal. Taxvio handles both form types.",
  },
  {
    q: "How long does it take to get a PAN card?",
    a: "e-PAN (digital PAN) is issued within 48 hours to 7 working days after successful application, directly to the registered email address in PDF format. The physical PAN card is dispatched by India Post and typically arrives within 15–20 working days from the date of application. For Aadhaar-based instant e-PAN, the card can be issued within minutes using OTP verification, without any physical documents. Taxvio submits your application within 24 hours of receiving documents.",
  },
  {
    q: "Can I apply for PAN online without visiting an office?",
    a: "Yes. PAN can be applied 100% online through the NSDL TIN portal (onlineservices.nsdl.com) or UTIITSL portal (www.utiitsl.com). For Aadhaar-linked instant e-PAN, you can apply on the Income Tax e-filing portal (incometax.gov.in) using your Aadhaar number and mobile OTP — no documents required. Taxvio manages the entire online process on your behalf, from form filling to payment to tracking.",
  },
  {
    q: "What is the fee for PAN card application?",
    a: "The government fee for PAN card application is ₹107 (inclusive of dispatch charges) for physical PAN delivered within India, and ₹1,017 for dispatch outside India (for NRIs). e-PAN download costs ₹66 on the NSDL portal. Taxvio charges a small professional fee starting from ₹99 for e-PAN and ₹149 for a new physical PAN, which covers form preparation, verification, submission, and tracking support.",
  },
  {
    q: "How do I apply for PAN correction or update?",
    a: "PAN correction (changes in name, date of birth, address, photograph, or signature) is done by filing a 'Request for New PAN Card or/and Changes or Correction in PAN Data' form — same Form 49A for Indians and Form 49AA for foreign entities. The existing PAN number remains unchanged; only the data printed on the card is corrected. Supporting documents for the correction must be submitted. Corrections processed through NSDL take 7–15 working days for the updated physical card. Taxvio handles PAN correction with 100% accuracy.",
  },
  {
    q: "Is it mandatory to link PAN with Aadhaar?",
    a: "Yes. The Income Tax Department has made it mandatory to link PAN with Aadhaar under Section 139AA of the Income Tax Act. The deadline for linking has been extended multiple times; currently, unlinked PANs are made inoperative, meaning they cannot be used for filing ITR, opening bank accounts, or making financial transactions. If your PAN becomes inoperative, a ₹1,000 fee is levied for reactivation after linking. Taxvio can assist you with PAN-Aadhaar linking along with your PAN application.",
  },
  {
    q: "Can a company or LLP apply for PAN?",
    a: "Yes. All companies, LLPs, partnership firms, HUFs, trusts, AOPs (Association of Persons), and BOIs (Body of Individuals) must obtain PAN. For a company, PAN application is filed using Form 49A with the Certificate of Incorporation (COI), MOA/AOA, and registered office address proof. The PAN is issued in the company's name and is required for all tax filings, GST registration, bank account opening, and every business compliance. Taxvio provides PAN for companies and LLPs starting from ₹299.",
  },
];

const PRICING = [
  {
    name: "New PAN Card",
    price: "₹149",
    govt: "+ ₹107 Govt Fee",
    features: [
      "Form 49A / 49AA preparation",
      "NSDL / UTIITSL portal submission",
      "Document review & verification",
      "Application tracking",
      "e-PAN on email (if opted)",
      "WhatsApp support throughout",
    ],
    highlight: false,
    cta: "Apply for New PAN",
  },
  {
    name: "PAN + Aadhaar Linking",
    price: "₹199",
    govt: "all inclusive",
    features: [
      "New PAN application included",
      "Aadhaar-PAN linking assistance",
      "Status verification on IT portal",
      "Reactivation support if inoperative",
      "Priority processing",
      "Dedicated CA assistance",
    ],
    highlight: true,
    cta: "Apply + Link Aadhaar",
  },
  {
    name: "PAN Correction / Reprint",
    price: "₹199",
    govt: "+ ₹107 Govt Fee",
    features: [
      "Correction in name / DOB / address",
      "Photo / signature update",
      "Reprint for lost/damaged card",
      "Same PAN number retained",
      "Physical card dispatched by post",
      "WhatsApp tracking updates",
    ],
    highlight: false,
    cta: "Apply for Correction",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({
  q, a, open, onToggle,
}: {
  q: string; a: string; open: boolean; onToggle: () => void;
}) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-[#00416a]/30 shadow-md" : "border-gray-200"}`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-gray-50 transition"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-800 leading-snug">{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-[#00416a] rotate-180" : "bg-gray-100"}`}>
          <ChevronDown size={15} className={open ? "text-white" : "text-gray-500"} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PanCardPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [activeDocTab, setActiveDocTab] = useState<"individual" | "company">("individual");
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const handleWhatsApp = (msg = "Hello Taxvio, I need help with PAN Card application.") => {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const handleCall = () => { window.location.href = `tel:${PHONE}`; };

  return (
    <main className="min-h-screen bg-[#f8fbfd] font-sans text-gray-800">

      {/* ════════════ HERO ════════════ */}
      <section className="relative bg-[#00416a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Breadcrumb */}
            <motion.nav variants={fadeUp} className="flex items-center gap-2 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <Link href="/serviceslist/income-tax" className="hover:text-white transition">Income Tax</Link>
              <span>/</span>
              <span className="text-white/80">PAN Card</span>
            </motion.nav>

            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <CreditCard size={12} className="text-sky-300" />
              Income Tax · Section 139A
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              PAN Card Application
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                New, Correction &amp; Reprint
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-white/75 text-base md:text-lg leading-relaxed">
              Apply for a new PAN card, correct existing PAN data, or get a duplicate reprint — all 100% online through Taxvio. Our CA team handles Form 49A / 49AA filing on NSDL and UTIITSL portals for individuals, companies, NRIs, and foreign entities across India.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleWhatsApp()}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00416a] px-7 py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] transition-all min-h-[52px]"
              >
                Apply for PAN Now <ArrowRight size={15} />
              </button>
              <button
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 bg-white/5 text-white px-7 py-4 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all min-h-[52px]"
              >
                <Phone size={15} /> Talk to Expert
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
              {[
                { icon: Clock, label: "e-PAN in 48 Hours" },
                { icon: IndianRupee, label: "Starting ₹149" },
                { icon: BadgeCheck, label: "CA-Assisted" },
                { icon: Zap, label: "100% Online" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — PAN card illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-sky-400/10 blur-2xl scale-110" />

              {/* Mock PAN Card */}
              <div className="relative bg-gradient-to-br from-[#fffbe6] to-[#fef3c7] rounded-2xl p-6 shadow-2xl border border-yellow-200/50 overflow-hidden">
                {/* Card top strip */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Income Tax Department</p>
                    <p className="text-[9px] text-gray-400">Govt. of India</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00416a] flex items-center justify-center">
                    <span className="text-white text-[9px] font-black">IT</span>
                  </div>
                </div>

                {/* Ashok Stambh placeholder */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-5">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-800" />
                </div>

                {/* PAN Number */}
                <div className="mb-4">
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-1">Permanent Account Number</p>
                  <p className="text-xl font-black text-[#00416a] tracking-[0.2em] font-mono">ABCDE1234F</p>
                </div>

                {/* Name & DOB */}
                <div className="mb-4">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">Name</p>
                  <p className="text-sm font-bold text-gray-800">RAHUL KUMAR SHARMA</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">Father's Name</p>
                    <p className="text-xs font-semibold text-gray-700">RAJESH KUMAR SHARMA</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">Date of Birth</p>
                    <p className="text-xs font-semibold text-gray-700">15/08/1990</p>
                  </div>
                </div>

                {/* Signature & Photo placeholder */}
                <div className="flex items-end justify-between mt-5">
                  <div className="border-b-2 border-gray-400 w-24">
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">Signature</p>
                  </div>
                  <div className="w-12 h-14 rounded-lg bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                    <UserCheck size={20} className="text-gray-400" />
                  </div>
                </div>

                {/* Watermark */}
                <div className="absolute bottom-2 right-3 opacity-10">
                  <p className="text-[8px] font-black text-[#00416a] uppercase tracking-widest rotate-[-45deg]">TAXVIO</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={14} className="text-green-600" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400">e-PAN Issued</p>
                  <p className="text-[11px] font-bold text-gray-800">Within 48 hrs</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-[#00416a] rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
              >
                <Star size={14} className="text-yellow-300 fill-yellow-300" />
                <p className="text-[11px] font-bold text-white">4.9★ Rated Service</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
        </svg>
      </section>

      {/* ════════════ STATS RIBBON ════════════ */}
      <section ref={statsRef} className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "8,000+", label: "PANs Processed", icon: CreditCard },
            { value: "48 hrs", label: "e-PAN Delivery", icon: Clock },
            { value: "4.9★", label: "Client Rating", icon: Star },
            { value: "100%", label: "Online Process", icon: BadgeCheck },
          ].map(({ value, label, icon: Icon }) => (
            <motion.div
              key={label}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={scaleIn}
              className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#00416a]/10 flex items-center justify-center">
                <Icon size={17} className="text-[#00416a]" />
              </div>
              <p className="text-2xl font-extrabold text-[#00416a]">{value}</p>
              <p className="text-xs text-gray-500 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════ WHAT IS PAN ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-14 items-start">
              {/* Left — explainer */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  What is PAN?
                </span>
                <h2 className="text-3xl font-extrabold text-[#00416a] mt-4 leading-tight">
                  Permanent Account Number — India's Tax Identity
                </h2>
                <div className="mt-5 space-y-4 text-gray-600 text-[15px] leading-relaxed">
                  <p>
                    <strong className="text-gray-800">PAN (Permanent Account Number)</strong> is a unique 10-digit alphanumeric identifier issued by the <strong>Income Tax Department of India</strong> under <strong>Section 139A of the Income Tax Act, 1961</strong>. It is India's primary tax identification number, assigned to every taxpayer — individual, HUF, company, firm, trust, or NRI — who is liable to pay income tax or is engaged in specified financial transactions.
                  </p>
                  <p>
                    The PAN follows the format <strong className="text-[#00416a] font-mono bg-blue-50 px-2 py-0.5 rounded-lg">AAAAA9999A</strong> — the first three characters are alphabets (series), the fourth represents the taxpayer type (P for individual, C for company, H for HUF, F for firm, A for AOP, B for BOI, G for government, J for artificial juridical person, L for local authority, T for trust), the fifth is the initial of the taxpayer's surname, the next four are numerals, and the last is a check digit alphabet.
                  </p>
                  <p>
                    PAN is used by the Income Tax Department to track all financial transactions of a taxpayer — salary, investments, property purchases, business income, TDS deductions, and ITR filings — in a centralised database. It is linked to <strong>Form 26AS</strong> (annual tax statement), <strong>AIS</strong> (Annual Information Statement), and <strong>TIS</strong> (Taxpayer Information Summary), ensuring complete tax trail for every individual and entity.
                  </p>
                  <p>
                    From April 2023, the government has made <strong>PAN-Aadhaar linking mandatory</strong>. Unlinked PANs are treated as <strong>inoperative</strong>, attracting a ₹1,000 reactivation fee and preventing ITR filing, TDS credit claims, and financial transactions.
                  </p>
                </div>

                {/* PAN structure visual */}
                <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">PAN Structure Breakdown</p>
                  <div className="flex items-stretch gap-1 font-mono text-base font-extrabold">
                    {[
                      { chars: "ABC", label: "Series (3 alpha)", color: "bg-blue-100 text-blue-700 border-blue-200" },
                      { chars: "P", label: "Type (P=Person)", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                      { chars: "S", label: "Surname Initial", color: "bg-violet-100 text-violet-700 border-violet-200" },
                      { chars: "1234", label: "Sequence No.", color: "bg-orange-100 text-orange-700 border-orange-200" },
                      { chars: "Z", label: "Check Digit", color: "bg-red-100 text-red-700 border-red-200" },
                    ].map(({ chars, label, color }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
                        <div className={`w-full flex items-center justify-center py-3 rounded-xl border-2 ${color} text-sm tracking-wider`}>
                          {chars}
                        </div>
                        <span className="text-[9px] font-semibold text-gray-400 text-center leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — taxpayer type codes + mandatory transactions */}
              <div className="space-y-5">
                {/* Taxpayer type codes */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-[#00416a] px-5 py-3">
                    <p className="text-white font-bold text-sm">4th Character — Taxpayer Type Codes</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      { code: "P", type: "Individual (Person)", example: "ABCPS1234Z" },
                      { code: "C", type: "Company", example: "AABCC1234D" },
                      { code: "H", type: "HUF (Hindu Undivided Family)", example: "AABHH1234F" },
                      { code: "F", type: "Firm / LLP", example: "AABCF1234G" },
                      { code: "T", type: "Trust / AOP / BOI", example: "AABCT1234H" },
                      { code: "G", type: "Government Department", example: "AABCG1234J" },
                      { code: "L", type: "Local Authority", example: "AABCL1234K" },
                    ].map(({ code, type, example }) => (
                      <div key={code} className="grid grid-cols-[40px_1fr_auto] items-center gap-3 px-4 py-3 hover:bg-blue-50/40 transition">
                        <span className="w-8 h-8 rounded-lg bg-[#00416a] text-white text-sm font-black flex items-center justify-center font-mono">{code}</span>
                        <span className="text-sm text-gray-700 font-medium">{type}</span>
                        <span className="text-[11px] text-gray-400 font-mono hidden sm:block">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Where PAN is mandatory */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="text-sm font-bold text-[#00416a] mb-4">Transactions Where PAN is Mandatory</p>
                  <div className="space-y-2">
                    {[
                      "Filing Income Tax Return (ITR)",
                      "Opening a bank / demat / trading account",
                      "Cash deposits above ₹50,000",
                      "FD above ₹50,000 (to avoid 20% TDS)",
                      "Property purchase / sale above ₹10 lakh",
                      "GST registration & business compliance",
                      "Foreign exchange above ₹50,000",
                      "Vehicle purchase above ₹10 lakh",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-gray-600">
                        <CheckCircle size={13} className="text-green-500 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aadhaar linking warning */}
                <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                  <AlertCircle size={17} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-amber-700">PAN-Aadhaar Linking Mandatory</p>
                    <p className="text-xs text-amber-600 mt-0.5 leading-relaxed">Unlinked PANs are inoperative. A ₹1,000 fee applies for reactivation. Taxvio assists with PAN-Aadhaar linking as part of our service.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ OUR PAN SERVICES ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                PAN Services
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">All PAN Card Services by Taxvio</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                From new PAN applications to corrections, reprints, e-PAN downloads, and NRI PAN — we handle every PAN need online.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map(({ name, desc, price, icon: Icon }) => (
                <motion.div key={name} variants={fadeUp} className="group bg-[#f8fbfd] border border-[#deeef7] rounded-2xl p-6 hover:border-[#00416a]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#00416a] flex items-center justify-center shadow-lg shadow-[#00416a]/20 group-hover:scale-105 transition-transform">
                      <Icon size={19} className="text-white" />
                    </div>
                    <span className="text-sm font-extrabold text-[#00416a] bg-blue-100 px-2.5 py-1 rounded-lg">{price}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1.5">{name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{desc}</p>
                  <button
                    onClick={() => handleWhatsApp(`Hello Taxvio, I need ${name} service.`)}
                    className="inline-flex items-center gap-1.5 text-[#00416a] text-xs font-semibold group-hover:gap-2 transition-all"
                  >
                    Apply Now <ArrowRight size={12} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ PAN TYPES ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Applicability
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">PAN for Every Taxpayer Type</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Whether you're an individual, a company, or an NRI — we handle all PAN application types.</p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {PAN_TYPES.map(({ type, form, who, docs, color, bg, border }) => (
                <motion.div key={type} variants={scaleIn} className={`bg-white rounded-2xl border-2 ${border} overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`bg-gradient-to-br ${color} px-5 py-4`}>
                    <p className="text-white font-extrabold text-base">{type}</p>
                    <p className="text-white/70 text-xs mt-0.5 font-mono">{form}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{who}</p>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Key Documents</p>
                    <ul className="space-y-1.5">
                      {docs.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle size={12} className="text-green-500 shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleWhatsApp(`Hello Taxvio, I need PAN for ${type}.`)}
                      className={`mt-5 w-full py-2.5 rounded-xl text-xs font-bold bg-gradient-to-br ${color} text-white hover:opacity-90 active:scale-[0.97] transition-all`}
                    >
                      Apply for {type} PAN
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ WHO NEEDS PAN ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Who Needs PAN
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Who Must Apply for a PAN Card?</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Section 139A makes PAN mandatory for a wide range of individuals and entities. Here's a category-wise breakdown.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHO_NEEDS_PAN.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="group bg-[#f8fbfd] border border-[#deeef7] rounded-2xl p-6 hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#00416a] flex items-center justify-center mb-4 shadow-lg shadow-[#00416a]/20 group-hover:scale-105 transition-transform">
                    <Icon size={19} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ PROCESS ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Our Process
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Get Your PAN Card in 4 Simple Steps</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Zero paperwork. Zero office visits. Share documents on WhatsApp and we handle everything.</p>
            </motion.div>

            <div className="relative grid md:grid-cols-4 gap-8">
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#00416a]/20 to-transparent" />
              {PROCESS_STEPS.map(({ step, title, desc, icon: Icon }, i) => (
                <motion.div key={step} variants={fadeUp} className="flex flex-col items-center text-center relative">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#00416a] flex items-center justify-center shadow-xl shadow-[#00416a]/25 z-10 relative">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-sky-400 text-white text-[10px] font-extrabold flex items-center justify-center shadow-md">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-[#00416a] text-sm mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ DOCUMENTS ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Documents Required
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Documents for PAN Application</h2>
              <p className="text-gray-500 mt-3 text-sm">All documents can be shared digitally — no physical submission required.</p>
            </motion.div>

            {/* Tab switcher */}
            <motion.div variants={fadeUp} className="flex gap-2 justify-center mb-8">
              {[
                { key: "individual", label: "Individual / HUF" },
                { key: "company", label: "Company / Firm / Trust" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveDocTab(key as "individual" | "company")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeDocTab === key
                      ? "bg-[#00416a] text-white shadow-lg shadow-[#00416a]/20"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#00416a] hover:text-[#00416a]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDocTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {(activeDocTab === "individual" ? DOCUMENTS_INDIVIDUAL : DOCUMENTS_COMPANY).map(({ label, examples }, i) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-[#f2f8fc] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 transition">
                    <div className="w-8 h-8 rounded-lg bg-[#00416a] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm">{label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{examples}</p>
                    </div>
                    <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.div variants={fadeUp} className="mt-5 flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <BadgeCheck size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700 leading-relaxed">
                <strong>Aadhaar-based Instant e-PAN:</strong> If you have an Aadhaar linked to your mobile number, no physical documents are needed. Apply for instant e-PAN in minutes at the Income Tax e-filing portal — Taxvio will guide you through the process.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ PRICING ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pricing
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-500 mt-3 text-sm">No hidden charges. Government fees are paid directly to NSDL/UTIITSL.</p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
              {PRICING.map(({ name, price, govt, features, highlight, cta }) => (
                <motion.div key={name} variants={scaleIn} className={`relative rounded-2xl overflow-hidden border-2 transition-all ${highlight ? "border-[#00416a] shadow-2xl shadow-[#00416a]/15 scale-[1.02]" : "border-gray-200 shadow-sm bg-white"}`}>
                  {highlight && (
                    <div className="absolute top-4 right-4 bg-[#00416a] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      Best Value
                    </div>
                  )}
                  <div className={`p-6 ${highlight ? "bg-[#00416a] text-white" : "bg-white"}`}>
                    <p className={`text-sm font-semibold ${highlight ? "text-white/70" : "text-gray-500"}`}>{name}</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className={`text-4xl font-extrabold ${highlight ? "text-white" : "text-[#00416a]"}`}>{price}</span>
                      <span className={`text-xs mb-1.5 ${highlight ? "text-white/60" : "text-gray-400"}`}>{govt}</span>
                    </div>
                  </div>
                  <div className="bg-white p-6 pt-4">
                    <ul className="space-y-2.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleWhatsApp(`Hello Taxvio, I need ${name} service.`)}
                      className={`mt-6 w-full py-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97] ${highlight ? "bg-[#00416a] text-white hover:bg-[#002b45] shadow-lg shadow-[#00416a]/20" : "border-2 border-[#00416a] text-[#00416a] hover:bg-blue-50"}`}
                    >
                      {cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ WHY TAXVIO ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Why Taxvio</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Why 8,000+ Clients Choose Taxvio for PAN</h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: BadgeCheck, text: "CA-verified form submission — zero rejection rate" },
                { icon: Zap, text: "Application filed within 24 hours of receiving documents" },
                { icon: Clock, text: "e-PAN delivered to email within 48 hours" },
                { icon: MessageCircle, text: "Real-time WhatsApp updates at every stage" },
                { icon: Shield, text: "Secure document handling — AES-256 encryption" },
                { icon: RefreshCw, text: "Post-PAN support: Aadhaar linking, correction, reprint" },
                { icon: Globe, text: "NRI PAN via Form 49AA — served clients in 20+ countries" },
                { icon: IndianRupee, text: "Affordable pricing with zero hidden charges" },
              ].map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={fadeUp} className="flex items-start gap-3.5 p-4 bg-[#f8fbfd] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 hover:shadow-sm transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                    <Icon size={16} className="text-[#00416a] group-hover:text-white transition-all" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-relaxed mt-0.5">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ════════════ SEO CONTENT BLOCK ════════════ */}
      <section className="py-20 bg-[#f8fbfd] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                PAN Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                PAN Card — Complete Compliance Guide for 2024–25
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Everything you need to know about PAN application, correction, Aadhaar linking, and consequences of inoperative PAN.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔗",
                  title: "PAN-Aadhaar Linking — Avoid Inoperative PAN",
                  content: "Under Section 139AA, every individual who is eligible to obtain Aadhaar must link it with PAN. As of July 2023, unlinked PANs have been made inoperative — meaning you cannot file ITR, banks cannot process TDS credit in Form 26AS, and financial transactions will be blocked. To reactivate an inoperative PAN, a ₹1,000 fee must be paid under Section 234H, and linking must be done via the Income Tax e-filing portal. The process takes 4–7 working days after fee payment. Taxvio assists with both the fee payment and Aadhaar-PAN linking status verification.",
                },
                {
                  icon: "📧",
                  title: "Instant e-PAN — Get PAN in Minutes",
                  content: "The Income Tax Department offers an Instant e-PAN facility for individuals with Aadhaar. If your mobile number is registered with Aadhaar, you can apply for a free e-PAN on the incometax.gov.in portal using OTP-based authentication — no physical documents required. The e-PAN is issued as a password-protected PDF and is valid as an original PAN card for all purposes including KYC and ITR filing. The service is available only for individuals who have never been allotted a PAN and whose Aadhaar is mobile-linked. Companies, firms, and NRIs cannot use this route and must apply via Form 49A/49AA.",
                },
                {
                  icon: "✏️",
                  title: "PAN Correction — What Can Be Changed?",
                  content: "The following fields can be corrected or updated on your existing PAN card without changing the PAN number: full name (including spelling corrections or name change after marriage), father's name, date of birth, gender, address (for correspondence purposes), photograph, and signature. PAN correction is done by filing a 'Changes or Correction in PAN Data' request on the NSDL or UTIITSL portal, supported by relevant documents (marriage certificate for name change, birth certificate for DOB correction). The updated card is dispatched within 7–15 working days. Your PAN number remains unchanged throughout the correction process.",
                },
              ].map(({ icon, title, content }) => (
                <motion.div key={title} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-bold text-[#00416a] text-base mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">FAQ</span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 mt-3 text-sm">Everything you need to know about PAN card application, correction, and compliance.</p>
            </motion.div>
            <motion.div variants={stagger} className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {FAQS.map((f, i) => (
                <motion.div key={i} variants={fadeUp} itemScope itemType="https://schema.org/Question">
                  <FaqItem
                    q={f.q}
                    a={f.a}
                    open={faqOpen === i}
                    onToggle={() => setFaqOpen(faqOpen === i ? null : i)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ RELATED SERVICES ════════════ */}
      <section className="py-16 bg-[#f8fbfd] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#00416a] mb-6">Related Services</motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "TAN Application", desc: "For TDS deductors — Section 203A", href: "/serviceslist/income-tax/tan-application", icon: Hash },
                { title: "ITR – Salaried", desc: "Form 16 based filing from ₹499", href: "/serviceslist/income-tax/itr-salaried", icon: FileText },
                { title: "TDS Return Filing", desc: "Quarterly 24Q / 26Q returns", href: "/serviceslist/income-tax/quarterly-tds", icon: Receipt },
                { title: "GST Registration", desc: "GSTIN in 3–7 working days", href: "/serviceslist/gst/gst-registration", icon: Building2 },
              ].map(({ title, desc, href, icon: Icon }) => (
                <motion.div key={title} variants={fadeUp}>
                  <Link href={href} className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#00416a]/30 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00416a] transition-all">
                      <Icon size={16} className="text-[#00416a] group-hover:text-white transition-all" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition truncate">{title}</p>
                      <p className="text-xs text-gray-400 truncate">{desc}</p>
                    </div>
                    <ArrowRight size={13} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Zap size={11} className="text-sky-300" />
                e-PAN in 48 Hours · Physical Card in 15 Days
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Apply for PAN Card Online — India's Fastest CA-Assisted Service
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                New PAN, correction, reprint, or NRI PAN — Taxvio's CA team handles it all. Share your documents on WhatsApp and get your PAN without stepping out of your home.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => handleWhatsApp()}
                  className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={15} /> Apply on WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 border-2 border-white/50 bg-white/5 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                >
                  <Phone size={15} /> Call Now
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/25 active:scale-[0.97] transition-all"
                >
                  Free Consultation <ArrowRight size={14} />
                </Link>
              </div>
              <p className="mt-6 text-white/40 text-xs">Starting ₹149 + ₹107 govt fee · New / Correction / Reprint / NRI PAN · 100% Online</p>
            </div>
          </motion.div>
        </div>
      </section>
<Footer />
    </main>
  );
}