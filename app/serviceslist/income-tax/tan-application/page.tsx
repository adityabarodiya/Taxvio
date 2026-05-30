"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
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
  Building2,
  Receipt,
  Star,
  Zap,
  IndianRupee,
  CalendarCheck,
  Hash,
} from "lucide-react";
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
const WHO_NEEDS_TAN = [
  { icon: Building2, title: "Companies & LLPs", desc: "All incorporated entities deducting TDS on salary, contractor payments, rent, interest, or professional fees must obtain TAN before making the deduction." },
  { icon: Users, title: "Employers (Salaried Payroll)", desc: "Any employer paying salary above the basic exemption limit must deduct TDS under Section 192 and needs TAN for filing Form 24Q quarterly." },
  { icon: Receipt, title: "Businesses Paying Contractors", desc: "Businesses making payments to contractors or sub-contractors exceeding ₹30,000 per transaction or ₹1 lakh annually must deduct TDS u/s 194C and file 26Q." },
  { icon: FileText, title: "Property Buyers (TDS on Rent/Property)", desc: "Buyers purchasing property above ₹50 lakh must deduct 1% TDS (Section 194-IA). Tenants paying rent above ₹50,000/month must deduct TDS (Section 194-IB)." },
  { icon: Shield, title: "Banks & Financial Institutions", desc: "Banks deducting TDS on interest (Section 194A), insurance companies deducting on maturity (Section 194D), and post offices all require TAN registration." },
  { icon: Hash, title: "Government Offices & PSUs", desc: "All government departments, state and central, that make payments subject to TDS or TCS are mandatorily required to obtain TAN for compliance." },
];

const DOCUMENTS = [
  { label: "PAN Card", note: "Applicant's / company's PAN" },
  { label: "Proof of Identity", note: "Aadhaar / Passport / Voter ID" },
  { label: "Proof of Address", note: "Bank statement / utility bill" },
  { label: "Business Proof", note: "COI / Partnership deed / GST certificate" },
  { label: "Designation & Contact", note: "Applicant's designation and mobile number" },
];

const PROCESS_STEPS = [
  { step: "01", title: "Share Details", desc: "Share your PAN, business type, and contact details with us via WhatsApp or email.", icon: MessageCircle },
  { step: "02", title: "Document Collection", desc: "We send you a simple checklist. Upload identity and address proof — takes under 5 minutes.", icon: FileText },
  { step: "03", title: "Form 49B Filing", desc: "Our expert team fills and submits Form 49B on the NSDL/UTIITSL portal with 100% accuracy.", icon: BadgeCheck },
  { step: "04", title: "TAN Allotted", desc: "Your 10-digit TAN (e.g. MUMU12345B) is allotted within 7–10 working days. We share the certificate.", icon: Hash },
];

const FAQS = [
  {
    q: "What is TAN and why is it mandatory?",
    a: "TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric code issued by the Income Tax Department to entities responsible for deducting or collecting tax at source. It is mandatory under Section 203A of the Income Tax Act, 1961. Every person required to deduct TDS or collect TCS must quote TAN in all TDS/TCS returns, challans, and certificates. Failure to obtain TAN or quoting incorrect TAN attracts a penalty of ₹10,000 under Section 272BB.",
  },
  {
    q: "What is the difference between PAN and TAN?",
    a: "PAN (Permanent Account Number) is a unique 10-digit identifier for taxpayers (individuals and entities) used for income tax filing and financial transactions. TAN is specifically issued to persons who are required to deduct TDS or collect TCS under the Income Tax Act. A person can have only one PAN, but a company with multiple branch offices may apply for separate TANs for each deducting branch. Both are mandatory but serve entirely different purposes.",
  },
  {
    q: "How long does TAN registration take?",
    a: "TAN application is processed by NSDL within 7–10 working days from the date of submission of Form 49B and payment of the ₹65 government fee. Once allotted, the TAN certificate is dispatched by post to your registered address. Taxvio completes the entire online application on your behalf within 24 hours of receiving your documents.",
  },
  {
    q: "What is Form 49B for TAN application?",
    a: "Form 49B is the prescribed application form for allotment of Tax Deduction and Collection Account Number (TAN) under Section 203A of the Income Tax Act, 1961. It can be filed online at the NSDL TIN portal (tin.tin.nsdl.com) or through UTIITSL. The form requires details like applicant type (company, individual, firm), name, address, PAN, and designation of the responsible officer. Taxvio handles Form 49B preparation and submission on your behalf.",
  },
  {
    q: "Can a company have multiple TANs for different branches?",
    a: "Yes. A company with multiple branch offices across different cities or states may obtain separate TANs for each branch that independently deducts TDS. Each branch's TAN must be used when that branch files its TDS returns and issues TDS certificates. However, having more than one TAN for the same deducting entity (i.e., same branch) is not permitted and can lead to compliance issues. Taxvio helps you determine whether a single TAN or multiple branch TANs are appropriate for your business structure.",
  },
  {
    q: "What happens if TDS is deducted without TAN?",
    a: "Deducting TDS without quoting TAN (or with an invalid TAN) is a violation under Section 272BB of the Income Tax Act, attracting a penalty of ₹10,000. Additionally, the deductee cannot claim credit for TDS deducted without a valid TAN in their Form 26AS, leading to disputes during ITR processing. It is therefore essential to obtain TAN before making any TDS deduction.",
  },
  {
    q: "Is TAN required for individuals paying rent above ₹50,000/month?",
    a: "Under Section 194-IB (inserted by Finance Act 2017), individuals or HUFs who are NOT subject to tax audit (i.e., not liable to deduct TDS under Section 194-I) but pay rent exceeding ₹50,000 per month must deduct 5% TDS. The good news is that such individuals are NOT required to obtain TAN — they can use their PAN and file Form 26QC (a one-time challan cum statement) instead of a quarterly TDS return. Taxvio helps you assess which provision applies to your situation.",
  },
];

const PRICING = [
  {
    name: "TAN Application",
    price: "₹499",
    govt: "+ ₹65 Govt Fee",
    features: [
      "Form 49B preparation & filing",
      "NSDL / UTIITSL portal submission",
      "Document review & verification",
      "Status tracking until allotment",
      "TAN certificate sharing",
      "WhatsApp support throughout",
    ],
    highlight: true,
  },
  {
    name: "TAN + TDS Return Bundle",
    price: "₹999",
    govt: "per quarter",
    features: [
      "TAN application included",
      "Quarterly TDS return (24Q/26Q)",
      "Challan reconciliation",
      "Form 16 / 16A generation",
      "TRACES portal assistance",
      "Dedicated CA support",
    ],
    highlight: false,
  },
];

const TAN_USES = [
  { use: "File TDS Returns", forms: "Form 24Q, 26Q, 27Q, 27EQ" },
  { use: "Pay TDS Challan", forms: "ITNS 281" },
  { use: "Issue TDS Certificates", forms: "Form 16, 16A, 27D" },
  { use: "Respond to IT Notices", forms: "Section 200A, 234E" },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
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
            <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TanApplicationPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const handleWhatsApp = (msg = "Hello Taxvio, I need help with TAN Application for my business.") => {
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

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.nav variants={fadeUp} className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <Link href="/serviceslist/income-tax" className="hover:text-white transition">Income Tax</Link>
              <span>/</span>
              <span className="text-white/80">TAN Application</span>
            </motion.nav>

            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-sm uppercase tracking-wide">
              <Hash size={12} className="text-sky-300" />
              Income Tax · Section 203A
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              TAN Application Online
              <span className="block mt-1.5 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Fast, Accurate &amp; Hassle-Free
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              Apply for Tax Deduction Account Number (TAN) online through Taxvio. Our CA team files Form 49B on the NSDL portal, tracks your application, and delivers your TAN certificate — mandatory for all TDS deductors and TCS collectors under the Income Tax Act, 1961.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleWhatsApp()}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00416a] px-7 py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] transition-all min-h-[52px]"
              >
                Apply for TAN Now <ArrowRight size={15} />
              </button>
              <button
                onClick={handleCall}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 bg-white/5 text-white px-7 py-4 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all min-h-[52px]"
              >
                <Phone size={15} /> Talk to an Expert
              </button>
            </motion.div>

            {/* Quick trust chips */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: Clock, label: "7–10 Day Allotment" },
                { icon: IndianRupee, label: "Starting ₹499" },
                { icon: BadgeCheck, label: "CA-Assisted Filing" },
                { icon: Zap, label: "100% Online" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/85 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Icon size={11} className="text-sky-300" /> {label}
                </span>
              ))}
            </motion.div>
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
            { value: "5,000+", label: "TANs Applied", icon: Hash },
            { value: "7–10", label: "Days to Allotment", icon: Clock },
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

      {/* ════════════ WHAT IS TAN ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-14 items-start">
            {/* Left — explainer */}
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                What is TAN?
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4 leading-tight">
                Tax Deduction &amp; Collection Account Number — Explained
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  <strong className="text-gray-800">TAN (Tax Deduction and Collection Account Number)</strong> is a 10-character alphanumeric identifier issued by the Income Tax Department under <strong>Section 203A of the Income Tax Act, 1961</strong>. It is mandatory for every person or entity that deducts <strong>Tax Deducted at Source (TDS)</strong> or collects <strong>Tax Collected at Source (TCS)</strong>.
                </p>
                <p>
                  The 10-digit TAN follows the format: <strong className="text-[#00416a] font-mono bg-blue-50 px-2 py-0.5 rounded-lg">AAAA99999A</strong> — the first four characters are alphabets (city + entity code), the next five are numerals, and the last character is an alphabet. For example: <span className="font-mono font-semibold text-[#00416a]">DELD12345F</span> indicates a Delhi-based deductor.
                </p>
                <p>
                  TAN must be quoted in every <strong>TDS challan (ITNS 281)</strong>, all <strong>quarterly TDS returns</strong> (Form 24Q, 26Q, 27Q), every <strong>TDS certificate</strong> (Form 16, 16A), and all correspondence with the Income Tax Department related to TDS/TCS. Failure to obtain or quote TAN attracts a penalty of <strong>₹10,000</strong> under Section 272BB.
                </p>
                <p>
                  Unlike PAN (which is for income filing), TAN is exclusively a compliance identifier for the <em>deductor</em> role — not the taxpayer's income. A business can have one PAN but may require multiple TANs for different branches that independently handle payroll or contractor payments.
                </p>
              </div>

              {/* TAN structure visual */}
              <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">TAN Structure</p>
                <div className="flex items-stretch gap-1 font-mono text-lg font-extrabold">
                  {[
                    { chars: "DEL", label: "City Code", color: "bg-blue-100 text-blue-700 border-blue-200" },
                    { chars: "D", label: "Entity", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                    { chars: "12345", label: "Sequence No.", color: "bg-violet-100 text-violet-700 border-violet-200" },
                    { chars: "F", label: "Check Digit", color: "bg-orange-100 text-orange-700 border-orange-200" },
                  ].map(({ chars, label, color }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
                      <div className={`w-full flex items-center justify-center py-3 rounded-xl border-2 ${color} text-base tracking-wider`}>
                        {chars}
                      </div>
                      <span className="text-[10px] font-semibold text-gray-400 text-center leading-tight">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — TAN vs PAN + where used */}
            <motion.div variants={stagger} className="space-y-5">
              {/* TAN vs PAN comparison */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#00416a] px-5 py-3">
                  <p className="text-white font-bold text-sm">TAN vs PAN — Key Differences</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: "Full Form", tan: "Tax Deduction Account No.", pan: "Permanent Account Number" },
                    { label: "Issued To", tan: "TDS Deductors / TCS Collectors", pan: "All taxpayers (individuals, companies)" },
                    { label: "Purpose", tan: "TDS/TCS compliance only", pan: "Income tax filing & KYC" },
                    { label: "Application", tan: "Form 49B (NSDL/UTIITSL)", pan: "Form 49A / 49AA" },
                    { label: "Mandatory When", tan: "Deducting TDS / Collecting TCS", pan: "Filing ITR, opening bank accounts" },
                    { label: "Fee", tan: "₹65 (government)", pan: "₹107 (including dispatch)" },
                  ].map(({ label, tan, pan }) => (
                    <div key={label} className="grid grid-cols-3 text-xs">
                      <div className="px-4 py-3 bg-gray-50 font-semibold text-gray-500">{label}</div>
                      <div className="px-3 py-3 text-[#00416a] font-medium border-x border-gray-100">{tan}</div>
                      <div className="px-3 py-3 text-gray-600">{pan}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Where TAN is used */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-sm font-bold text-[#00416a] mb-4">Where TAN Must Be Quoted</p>
                <div className="space-y-2.5">
                  {TAN_USES.map(({ use, forms }) => (
                    <div key={use} className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f8fc] border border-[#deeef7]">
                      <CheckCircle size={15} className="text-green-500 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{use}</p>
                        <p className="text-xs text-gray-400">{forms}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Penalty warning */}
              <motion.div variants={fadeUp} className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
                <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-red-700">₹10,000 Penalty for Non-Compliance</p>
                  <p className="text-xs text-red-600 mt-0.5 leading-relaxed">Deducting TDS without TAN or quoting an incorrect TAN attracts a penalty of ₹10,000 under Section 272BB of the Income Tax Act. Apply before your first TDS deduction.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ WHO NEEDS TAN ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Applicability
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Who Needs to Apply for TAN?</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Under Section 203A, TAN is mandatory for all deductors and collectors of tax at source. Here's a category-wise breakdown.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHO_NEEDS_TAN.map(({ icon: Icon, title, desc }) => (
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
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Get Your TAN in 4 Simple Steps</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">100% online, zero office visits. Share your documents and we handle the rest.</p>
            </motion.div>

            <div className="relative grid md:grid-cols-4 gap-8">
              {/* Connector */}
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
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 items-start">
              {/* Documents required */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Documents Required
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-4 mb-6">Documents for TAN Application</h2>
                <div className="space-y-3">
                  {DOCUMENTS.map(({ label, note }, i) => (
                    <motion.div key={label} variants={fadeUp} className="flex items-center gap-4 p-4 bg-[#f2f8fc] border border-[#deeef7] rounded-xl hover:border-[#00416a]/30 transition">
                      <div className="w-8 h-8 rounded-lg bg-[#00416a] flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{label}</p>
                        <p className="text-xs text-gray-400">{note}</p>
                      </div>
                      <CheckCircle size={16} className="text-green-500 ml-auto shrink-0" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700 leading-relaxed">All documents can be shared via WhatsApp or email. Physical copies are not required for online TAN application.</p>
                </div>
              </div>

              {/* TDS sections quick reference */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  TDS Reference
                </span>
                <h2 className="text-2xl font-extrabold text-[#00416a] mt-4 mb-6">Key TDS Sections Requiring TAN</h2>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-3 bg-[#00416a] px-4 py-2.5 text-xs font-bold text-white/80 uppercase tracking-wide">
                    <span>Section</span>
                    <span>Nature of Payment</span>
                    <span>TDS Rate</span>
                  </div>
                  {[
                    { sec: "192", nature: "Salary", rate: "Slab rate" },
                    { sec: "194A", nature: "Interest (bank/FD)", rate: "10%" },
                    { sec: "194C", nature: "Contractors/Sub-contractors", rate: "1% / 2%" },
                    { sec: "194H", nature: "Commission / Brokerage", rate: "5%" },
                    { sec: "194I", nature: "Rent (land/building)", rate: "10%" },
                    { sec: "194J", nature: "Professional fees", rate: "10% / 2%" },
                    { sec: "194Q", nature: "Purchase of goods", rate: "0.1%" },
                    { sec: "206C", nature: "TCS on sale of goods", rate: "0.1%–1%" },
                  ].map(({ sec, nature, rate }, i) => (
                    <div key={sec} className={`grid grid-cols-3 px-4 py-3 text-xs border-t border-gray-100 hover:bg-blue-50/40 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <span className="font-bold text-[#00416a] font-mono">{sec}</span>
                      <span className="text-gray-700">{nature}</span>
                      <span className="font-semibold text-gray-800">{rate}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">TAN is mandatory for all the above sections. Rates may vary based on valid PAN submission, lower deduction certificates, and surcharge applicability.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ PRICING ════════════ */}
      <section className="py-20 bg-[#f8fbfd]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pricing
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-500 mt-3 text-sm">No hidden charges. Government fees are separate and paid directly.</p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
              {PRICING.map(({ name, price, govt, features, highlight }) => (
                <motion.div key={name} variants={scaleIn} className={`relative rounded-2xl overflow-hidden border-2 transition-all ${highlight ? "border-[#00416a] shadow-2xl shadow-[#00416a]/15 scale-[1.02]" : "border-gray-200 shadow-sm"}`}>
                  {highlight && (
                    <div className="absolute top-4 right-4 bg-[#00416a] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-7 ${highlight ? "bg-[#00416a] text-white" : "bg-white"}`}>
                    <p className={`text-sm font-semibold ${highlight ? "text-white/70" : "text-gray-500"}`}>{name}</p>
                    <div className="flex items-end gap-2 mt-1">
                      <span className={`text-4xl font-extrabold ${highlight ? "text-white" : "text-[#00416a]"}`}>{price}</span>
                      <span className={`text-sm mb-1 ${highlight ? "text-white/60" : "text-gray-400"}`}>{govt}</span>
                    </div>
                  </div>
                  <div className="bg-white p-7 pt-5">
                    <ul className="space-y-3">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleWhatsApp(`Hello Taxvio, I need the ${name} service.`)}
                      className={`mt-6 w-full py-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.97] ${highlight ? "bg-[#00416a] text-white hover:bg-[#002b45] shadow-lg shadow-[#00416a]/20" : "border-2 border-[#00416a] text-[#00416a] hover:bg-blue-50"}`}
                    >
                      Get Started
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
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">Why Choose Taxvio for TAN Application?</h2>
            </motion.div>
            <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
              {[
                { icon: BadgeCheck, text: "CA-verified Form 49B — zero errors, zero rejections" },
                { icon: Zap, text: "Application submitted within 24 hours of document receipt" },
                { icon: Clock, text: "Active tracking until TAN is allotted and certificate received" },
                { icon: MessageCircle, text: "Dedicated WhatsApp support — no waiting, no queues" },
                { icon: Shield, text: "Confidential document handling with 256-bit secure transfer" },
                { icon: CalendarCheck, text: "Post-TAN support: TDS returns, challan filing, Form 16" },
                { icon: Users, text: "Served 5,000+ businesses across India for TDS compliance" },
                { icon: IndianRupee, text: "Transparent, affordable pricing — no hidden charges" },
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

      {/* ════════════ SEO CONTENT — TDS COMPLIANCE GUIDE ════════════ */}
      <section className="py-20 bg-[#f8fbfd] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                TDS Compliance Guide
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-4">
                TAN, TDS &amp; Compliance — Complete Guide for Business Owners
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                Everything you need to know about TAN registration, TDS deduction obligations, quarterly filing, and TRACES portal compliance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📋",
                  title: "TDS Return Filing After TAN",
                  content: "Once TAN is allotted, every deductor must file quarterly TDS returns. Employers file Form 24Q (TDS on salary), businesses file Form 26Q (non-salary TDS), and companies making payments to non-residents file Form 27Q. Returns are filed on the TRACES/TIN-FC portal or via authorized intermediaries. Late filing attracts a fee of ₹200 per day under Section 234E, and a penalty of ₹10,000–₹1 lakh under Section 271H. Taxvio handles all quarterly TDS return filing starting from ₹999.",
                },
                {
                  icon: "🏦",
                  title: "TDS Challan Payment via TAN",
                  content: "TDS deducted must be deposited with the government using Challan ITNS 281 — quoting your TAN — by the 7th of the following month (30th April for March deductions). Government deductors must pay on the same day as deduction. Non-payment or late payment of TDS attracts interest of 1.5% per month from the date of deduction to the date of deposit under Section 201(1A). Taxvio assists with TDS challan payment, reconciliation, and matching against quarterly returns.",
                },
                {
                  icon: "📜",
                  title: "Form 16 / 16A — TDS Certificates",
                  content: "After filing TDS returns, deductors must issue TDS certificates: Form 16 (annual certificate for salary TDS, Form 24Q) and Form 16A (quarterly certificate for non-salary TDS, Form 26Q). These certificates are downloaded from the TRACES portal after quarterly returns are accepted. Deductees use these to claim TDS credit in their ITR. Non-issuance of TDS certificates attracts a penalty of ₹100 per day under Section 272A(2)(g). Taxvio manages the complete TRACES lifecycle — filing, certificate download, and delivery.",
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
              <p className="text-gray-500 mt-3 text-sm">Everything you need to know about TAN registration and TDS compliance.</p>
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
                { title: "TDS Return Filing", desc: "Quarterly 24Q/26Q/27Q filing", href: "/serviceslist/income-tax/quarterly-tds", icon: FileText },
                { title: "PAN Card", desc: "New application / correction", href: "/serviceslist/income-tax/pan-card", icon: Hash },
                { title: "ITR – Salaried", desc: "Form 16 based filing from ₹499", href: "/serviceslist/income-tax/itr-salaried", icon: Receipt },
                { title: "Tax Audit (44AB)", desc: "Form 3CA/3CB/3CD preparation", href: "/serviceslist/income-tax/income-tax-audit", icon: Shield },
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
                Apply Today — Get TAN in 7–10 Days
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Apply for TAN Now — Before Your First TDS Deduction
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Deducting TDS without TAN attracts ₹10,000 penalty. Let Taxvio's CA team handle your Form 49B filing today — complete, accurate, and delivered in 24 hours.
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
              <p className="mt-6 text-white/40 text-xs">Starting ₹499 + ₹65 government fee · 100% online · CA-assisted</p>
            </div>
          </motion.div>
        </div>
      </section>
        <Footer />
    </main>
  );
}