"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Shield, Users, Zap, Clock, FileText, Building2,
  Phone, MessageCircle, Star, AlertCircle, TrendingUp, RefreshCw,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I want to register a One Person Company (OPC). Please guide me."
)}`;

/* ─── Who should register OPC ────────────────────────────────────────────────── */
const WHEN_OPC = [
  {
    icon: "👤",
    title: "Solo Entrepreneurs",
    section: "Ideal Structure",
    desc: "The OPC was created specifically for solo founders who want limited liability protection without needing a co-founder, second director, or second shareholder.",
  },
  {
    icon: "🚀",
    title: "Freelancers Scaling Up",
    section: "From Sole Proprietor",
    desc: "Freelancers and solo consultants moving beyond proprietorship — OPC gives you a corporate entity, bank credibility, and liability protection without adding partners.",
  },
  {
    icon: "🛍️",
    title: "Solo E-Commerce Sellers",
    section: "D2C / Online Business",
    desc: "Solo founders running Amazon, Flipkart, or Shopify stores benefit from OPC's corporate identity for brand registration, GST compliance, and seller account credibility.",
  },
  {
    icon: "💡",
    title: "Idea-Stage Startups",
    section: "Pre-Team Stage",
    desc: "Building your product before bringing on co-founders? Start as an OPC — you can voluntarily convert to a Private Limited Company once you're ready to add more shareholders.",
  },
  {
    icon: "🏗️",
    title: "Solo Contractors & Vendors",
    section: "B2B Contracting",
    desc: "Individual contractors dealing with large corporates — a Pvt Ltd or OPC is often required for vendor empanelment. OPC is the simplest corporate structure for solo operators.",
  },
  {
    icon: "🎨",
    title: "Creative Professionals",
    section: "Design / Media / Content",
    desc: "Solo designers, photographers, filmmakers, and content creators who invoice corporates and need a professional entity with GST registration and invoice credibility.",
  },
];

/* ─── What's included ────────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  { icon: "🔍", title: "Name Approval (SPICe+)", desc: "Name availability check on MCA. Reserved through SPICe+ integrated form — with object clause review to maximise approval chance on first attempt." },
  { icon: "📝", title: "MOA & AOA Drafting", desc: "Memorandum and Articles of Association professionally drafted and customised to your specific business activity, objectives, and OPC governance requirements." },
  { icon: "🪪", title: "DIN & DSC Processing", desc: "Director Identification Number and Digital Signature Certificate for the sole member/director — procured and verified end-to-end by our team." },
  { icon: "👥", title: "Nominee Director Arrangement", desc: "Nominee consent letter drafted and filed with MCA. We guide you on choosing the right nominee and ensure proper documentation under Rule 4 of the Companies (Incorporation) Rules 2014." },
  { icon: "🏛", title: "SPICe+ MCA Filing", desc: "Integrated SPICe+ form covering incorporation, PAN, TAN, EPFO, ESIC, and optional GST registration — filed in a single form for fastest possible processing." },
  { icon: "🧾", title: "Certificate of Incorporation + PAN/TAN", desc: "Official Certificate of Incorporation (CoI) with CIN from MCA, Company PAN, and TAN — all applied simultaneously and delivered directly to you via WhatsApp." },
];

/* ─── OPC vs Sole Proprietorship vs Pvt Ltd ─────────────────────────────────── */
const COMPARISON = [
  { point: "Legal Status", opc: "Separate legal entity", prop: "No separate identity", pvt: "Separate legal entity" },
  { point: "Liability", opc: "Limited to capital", prop: "Unlimited personal liability", pvt: "Limited to capital" },
  { point: "Min. Members", opc: "1 member only", prop: "1 person", pvt: "2 members minimum" },
  { point: "Investor Funding", opc: "❌ Not possible", prop: "❌ Not possible", pvt: "✅ Equity, angel, VC" },
  { point: "Bank Loans", opc: "✅ Better access", prop: "Limited access", pvt: "✅ Best access" },
  { point: "GST / PAN", opc: "Company PAN & GST", prop: "Individual PAN & GST", pvt: "Company PAN & GST" },
  { point: "Max Capital", opc: "₹50 lakh paid-up", prop: "No limit", pvt: "No limit" },
  { point: "Mandatory AGM", opc: "❌ Not required", prop: "N/A", pvt: "✅ Required annually" },
  { point: "Annual MCA Forms", opc: "AOC-4 + MGT-7A", prop: "None (IT return only)", pvt: "AOC-4 + MGT-7 + ADT-1" },
  { point: "Conversion Required", opc: "At ₹50L capital / ₹2Cr T/O", prop: "N/A", pvt: "Not mandatory" },
  { point: "Compliance Cost", opc: "Medium-low", prop: "Very low", pvt: "Higher" },
];

/* ─── Process steps ──────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Document Collection & Nominee Identification",
    desc: "Share PAN, Aadhaar, address proof, and proposed OPC details via WhatsApp. We also guide you on selecting the right nominee — an Indian resident who will provide written consent to be filed with MCA.",
  },
  {
    step: "02",
    title: "DIN & DSC Processing",
    desc: "Director Identification Number applied for the sole director/member if not already held. Digital Signature Certificates procured for the director — required for all MCA SPICe+ filings.",
  },
  {
    step: "03",
    title: "MOA & AOA Drafting with Name Approval",
    desc: "MOA and AOA customised to your business objects. Company name applied through SPICe+ with a reviewed object clause to prevent MCA rejections. Name typically approved within 1–2 working days.",
  },
  {
    step: "04",
    title: "Nominee Consent Documentation",
    desc: "Nominee consent letter (Form INC-3) drafted and signed by the nominee. Filed with MCA as part of the SPICe+ package — legally binding record of the nominee's acceptance of their role.",
  },
  {
    step: "05",
    title: "SPICe+ Integrated MCA Filing",
    desc: "Complete SPICe+ form filed on MCA covering incorporation, DIN, PAN, TAN, EPFO, and ESIC registration simultaneously. AGILE-PRO-S handles GST and bank account opening in parallel.",
  },
  {
    step: "06",
    title: "Certificate of Incorporation Delivery",
    desc: "MCA issues the Certificate of Incorporation with your company's CIN. Company PAN and TAN received. Everything delivered to you directly via WhatsApp within 7–10 working days.",
  },
];

/* ─── Annual compliance ──────────────────────────────────────────────────────── */
const ANNUAL_COMPLIANCE = [
  { form: "AOC-4", detail: "Financial statements. Due: Within 180 days of financial year end (by 27 September). Penalty: ₹100/day." },
  { form: "MGT-7A", detail: "Annual return (simplified form for OPCs and small companies). Due: Within 60 days of financial year end. Penalty: ₹100/day." },
  { form: "Statutory Audit", detail: "Mandatory for all OPCs — every year, by a practicing Chartered Accountant, regardless of turnover." },
  { form: "ITR-6", detail: "Income tax return for the OPC company. Due: 31 October (audit cases) / 31 July (non-audit). Tax at 22% under Section 115BAA or 30% standard rate." },
  { form: "Board Meetings", detail: "Minimum 1 board meeting per half-year (at least 90 days gap). Less frequent than the Pvt Ltd minimum of 4/year." },
  { form: "TDS Returns", detail: "Quarterly 24Q / 26Q filing if the OPC deducts TDS on salary, rent, or professional fees payments." },
  { form: "INC-20A", detail: "Declaration of commencement of business. Mandatory within 180 days of CoI. Non-filing: ₹50,000 penalty. OPC cannot start operations without this." },
];

/* ─── Conversion triggers ────────────────────────────────────────────────────── */
const CONVERSION = [
  {
    icon: "📈",
    trigger: "Paid-up Capital > ₹50 Lakh",
    type: "Mandatory",
    badgeColor: "bg-red-500",
    desc: "OPC must compulsorily convert to a Private Limited Company within 6 months of paid-up capital exceeding ₹50 lakh.",
  },
  {
    icon: "💰",
    trigger: "Average Turnover > ₹2 Crore",
    type: "Mandatory",
    badgeColor: "bg-red-500",
    desc: "If average annual turnover in any three consecutive financial years exceeds ₹2 crore, mandatory conversion to Pvt Ltd within 6 months.",
  },
  {
    icon: "🔄",
    trigger: "After 2 Years of Incorporation",
    type: "Voluntary",
    badgeColor: "bg-emerald-500",
    desc: "OPC can voluntarily convert to a Private Limited Company after completing 2 years — even without crossing capital or turnover thresholds. Ideal when bringing in co-founders or investors.",
  },
  {
    icon: "🌍",
    trigger: "Seeking External Investment",
    type: "Strategic",
    badgeColor: "bg-violet-500",
    desc: "Planning to raise angel or VC funding? Convert to a Private Limited Company — investors require equity structure and cannot invest directly in an OPC.",
  },
];

/* ─── Documents required ─────────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "Sole Director/Member",
    icon: "👤",
    items: [
      "PAN Card",
      "Aadhaar Card (with mobile linked)",
      "Passport-size photograph",
      "Mobile number & email ID",
      "DSC (Digital Signature Certificate) — Taxvio assists",
    ],
  },
  {
    category: "Nominee Director",
    icon: "🤝",
    items: [
      "PAN Card of nominee",
      "Aadhaar Card of nominee",
      "Nominee's written consent (Form INC-3) — drafted by Taxvio",
      "Nominee must be Indian citizen & resident",
    ],
  },
  {
    category: "Registered Office & OPC Details",
    icon: "🏢",
    items: [
      "Utility bill (electricity/water) — not older than 2 months",
      "NOC from owner (if rented / third-party property)",
      "Proposed company name (2–3 options)",
      "Business activity / main objects",
      "Proposed authorised & paid-up capital (max ₹50 lakh)",
    ],
  },
];

/* ─── Testimonials ───────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "I was running my IT consulting business as a sole proprietor for 3 years. Taxvio helped me incorporate as an OPC in just 8 days. Corporate credibility increased immediately with clients.",
    name: "Prateek Verma",
    location: "Noida",
  },
  {
    stars: 5,
    text: "As a solo e-commerce seller, I needed a company entity for brand registry and vendor empanelment. Taxvio's OPC registration was smooth, and they also handled GST registration simultaneously.",
    name: "Swati Agarwal",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "Taxvio explained the OPC vs Pvt Ltd difference clearly and helped me choose the right structure. The nominee documentation and MOA drafting were handled professionally.",
    name: "Rohit Chaudhary",
    location: "Muzaffarnagar",
  },
];

/* ─── Why Taxvio ─────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  { icon: Users, title: "CA & CS Assisted", desc: "Every OPC incorporation is handled by qualified Chartered Accountants and Company Secretaries — not automated software." },
  { icon: Zap, title: "100% Online Process", desc: "Share documents on WhatsApp or email. We handle all MCA filings, DSC usage, and nominee documentation end-to-end." },
  { icon: Shield, title: "MCA Compliant from Day One", desc: "INC-20A, Form 3, nominee filing — all post-incorporation steps tracked and filed within mandatory timelines." },
  { icon: FileText, title: "MOA/AOA Drafted for Your Business", desc: "Not a generic template — your MOA objects are customised to your actual business to prevent MCA name rejections." },
  { icon: Clock, title: "7–10 Day Turnaround", desc: "Proactive follow-up with MCA and DSC providers. You receive real-time WhatsApp updates at every step." },
  { icon: RefreshCw, title: "Conversion Support Included", desc: "When you're ready to scale and convert to a Private Limited Company, Taxvio handles the full INC-6 conversion filing." },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is a One Person Company (OPC) in India?",
    a: "A One Person Company (OPC) is a type of private limited company that can be formed with a single member and one director. Introduced by the Companies Act 2013, it gives solo entrepreneurs limited liability and a separate legal identity without requiring a co-founder or second shareholder.",
  },
  {
    q: "How long does OPC registration take?",
    a: "OPC registration through Taxvio takes 7–10 working days from the date all documents are submitted — covering name approval via SPICe+, DIN/DSC processing, MOA/AOA drafting, MCA filing, and issuance of the Certificate of Incorporation.",
  },
  {
    q: "Who can incorporate an OPC in India?",
    a: "Only a natural person who is an Indian citizen and resident in India (stayed for at least 182 days in the preceding calendar year) can incorporate an OPC. A person can be a member in only one OPC at a time. Minors, foreign nationals, and body corporates cannot be OPC members.",
  },
  {
    q: "What is a nominee director in an OPC?",
    a: "An OPC must appoint a nominee — another Indian citizen and resident — who will take over as the sole member if the original member becomes incapacitated or dies. The nominee has no rights over the OPC while the original member is active. The nominee's written consent (Form INC-3) is filed with MCA at incorporation.",
  },
  {
    q: "When must an OPC mandatorily convert to a Private Limited Company?",
    a: "An OPC must compulsorily convert when its paid-up capital exceeds ₹50 lakh OR when its average annual turnover in any three consecutive financial years exceeds ₹2 crore. The conversion application must be filed within 6 months of exceeding either threshold.",
  },
  {
    q: "What is the minimum capital required for an OPC?",
    a: "There is no minimum paid-up capital requirement. However, the maximum paid-up capital for an OPC is ₹50 lakh — beyond which mandatory conversion to a Private Limited Company is triggered.",
  },
  {
    q: "What annual compliance is required for an OPC?",
    a: "OPC must file AOC-4 (financial statements) within 180 days of FY end, MGT-7A (annual return) within 60 days of FY end, and ITR-6 for income tax. Statutory audit is mandatory every year. Minimum 1 board meeting per half-year. INC-20A must be filed within 180 days of incorporation.",
  },
  {
    q: "Can an OPC be voluntarily converted to a Private Limited Company?",
    a: "Yes. After completing 2 years of incorporation, an OPC can voluntarily convert to a Private Limited Company by filing INC-6 with MCA — even without crossing capital or turnover thresholds. This is common when solo founders bring in co-founders or prepare for investor funding.",
  },
];

/* ─── FAQ accordion ──────────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      itemScope itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left" aria-expanded={open}>
        <span className="font-bold text-gray-800 text-sm leading-snug flex items-start gap-3" itemProp="name">
          <span className="w-5 h-5 rounded-full bg-[#00416a] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">Q</span>
          {q}
        </span>
        <ChevronDown size={16} className={`shrink-0 text-[#00416a] mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 pl-14" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Client Component ───────────────────────────────────────────────────────── */
export default function OPCFormationClient() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════ DEADLINE BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        ⚡ New OPC? File <strong>INC-20A (Commencement of Business)</strong> within 180 days of incorporation | Penalty: <strong>₹50,000</strong> | OPC cannot operate without it
      </div>

      {/* ══════ HERO ══════ */}
      <section
        aria-label="One Person Company OPC Registration — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
      >
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/roc", label: "ROC Compliance" },
                { href: null, label: "OPC Registration" },
              ].map(({ href, label }, i, arr) => (
                <li key={label} className="flex items-center gap-1.5">
                  {href
                    ? <Link href={href} className="hover:text-white/80 transition">{label}</Link>
                    : <span className="text-white/75 font-medium">{label}</span>}
                  {i < arr.length - 1 && <ChevronRight size={12} className="text-white/25" />}
                </li>
              ))}
            </ol>
          </nav>

          {/* Category label */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
            style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}>
            👤 OPC Registration — Companies Act 2013
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">

            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                One Person Company
                <span className="block mt-2 text-sky-300">OPC Registration in India</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Register your <strong className="text-white">One Person Company (OPC)</strong> online in 7–10 working days.
                Taxvio's CA &amp; CS team handles name approval, <strong className="text-white">MOA &amp; AOA drafting</strong>,
                DIN/DSC, nominee documentation, SPICe+ filing, and Certificate of Incorporation —
                end to end. Starting <strong className="text-white">₹4,999</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["✅ Nominee Documentation", "🔒 MCA Compliant", "⚡ 7–10 Day Process", "📋 All-Inclusive"].map(t => (
                  <span key={t} className="text-xs font-semibold rounded-full px-3 py-1.5"
                    style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  <MessageCircle size={16} /> Register OPC — ₹4,999
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Quick trust row */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {["Name Approval (SPICe+)", "MOA & AOA Drafting", "Nominee Documentation", "Certificate of Incorporation"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right — Key Facts card ── */}
            <div className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-bold text-white text-sm">OPC Registration — Key Facts</p>
                <p className="text-xs text-white/50 mt-0.5">All-inclusive · No hidden charges</p>
              </div>
              <div className="p-5 space-y-3.5">
                {[
                  { label: "Members Required", val: "1 (Solo Founder)" },
                  { label: "Nominee Required", val: "Yes — Indian Resident" },
                  { label: "Governing Act", val: "Companies Act 2013" },
                  { label: "Max Paid-up Capital", val: "₹50 Lakh" },
                  { label: "Mandatory AGM", val: "Not required" },
                  { label: "Conversion Trigger", val: "₹50L capital / ₹2Cr T/O" },
                  { label: "Processing Time", val: "7–10 working days" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{label}</span>
                    <span className="font-bold text-white text-xs text-right">{val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-white text-xs font-bold">All-Inclusive Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold">₹4,999</p>
                    <p className="text-white/40 text-[10px] mt-0.5">+ Govt. fees as applicable</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(278+)</span>
                  </div>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 text-white text-sm font-bold transition-all active:scale-[0.97] mt-3">
                  <MessageCircle size={14} /> Get Started on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ── No white diagonal triangle ── */}
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio OPC statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "280+", label: "OPCs Registered" },
            { val: "7–10", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹4,999", label: "All-Inclusive Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WHO SHOULD REGISTER OPC — ICON GRID ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Who should register an OPC">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              OPC Applicability
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            Who Should Register an OPC?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            An OPC is the ideal structure for solo founders who want limited liability and corporate credibility — without adding partners or co-founders.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHEN_OPC.map(({ icon, title, section, desc }) => (
              <div key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#00416a] mb-0.5">{section}</p>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">{title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHAT'S INCLUDED ══════ */}
      <section className="py-20 bg-white" aria-label="What is included in OPC registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹4,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Name to Certificate of Incorporation — every step handled by our CA &amp; CS team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(({ icon, title, desc }) => (
              <div key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ OPC vs SOLE PROP vs PVT LTD ══════ */}
      <section className="py-20 bg-gray-50" aria-label="OPC vs Sole Proprietorship vs Private Limited Company comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Structure Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              OPC vs Sole Proprietorship vs Private Limited — Which is Right for You?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Understand the trade-offs before you incorporate. The right structure saves years of unnecessary compliance or missed opportunities.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Parameter</th>
                  <th className="px-4 py-3.5 text-left font-bold">👤 OPC</th>
                  <th className="px-4 py-3.5 text-left font-bold">🏪 Sole Proprietorship</th>
                  <th className="px-4 py-3.5 text-left font-bold">🏛 Private Limited</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON.map(({ point, opc, prop, pvt }, i) => (
                  <tr key={point} className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="px-4 py-3 font-semibold text-gray-700">{point}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium">{opc}</td>
                    <td className="px-4 py-3 text-gray-500">{prop}</td>
                    <td className="px-4 py-3 text-gray-600">{pvt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Quick rule:</strong> Sole proprietorship if you need absolute minimum compliance. OPC if you want limited liability + corporate identity as a solo founder. <Link href="/serviceslist/roc/private-limited-formation" className="underline font-semibold hover:text-sky-700 transition">Private Limited Company</Link> if you plan to raise equity funding, hire with ESOPs, or scale with partners.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-white" aria-label="OPC registration process with Taxvio">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step OPC Registration Process — Docs to Certificate
          </h2>
          <div className="space-y-4">
            {STEPS.map(({ step, title, desc }) => (
              <div key={step}
                className="flex gap-5 items-start bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#00416a]/15 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-md">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ANNUAL COMPLIANCE TABLE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="OPC annual compliance requirements and deadlines">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Compliance Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Annual Compliance for an OPC — Deadlines &amp; Penalties
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              OPC compliance is lighter than a Pvt Ltd but still mandatory. Taxvio's compliance calendar keeps you on track every year.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-5 py-3.5 text-left font-bold">Compliance</th>
                  <th className="px-5 py-3.5 text-left font-bold">Due Date / Condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ANNUAL_COMPLIANCE.map(({ form, detail }, i) => (
                  <tr key={form} className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="px-5 py-3.5 font-bold text-[#00416a]">{form}</td>
                    <td className="px-5 py-3.5 text-gray-600">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Critical:</strong> INC-20A (Declaration of Commencement of Business) must be filed within <strong>180 days of incorporation</strong>. Penalty for non-filing: ₹50,000 on the company + ₹1,000/day per officer in default. Your OPC legally <strong>cannot commence business</strong> without filing INC-20A. Taxvio tracks and files this as part of post-incorporation support.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ CONVERSION TRIGGERS ══════ */}
      <section className="py-20 bg-white" aria-label="OPC conversion to Private Limited Company triggers">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              OPC Conversion
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              When Does an OPC Need to Convert to a Private Limited Company?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Know the mandatory and voluntary conversion triggers before you scale — and plan the transition early.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {CONVERSION.map(({ icon, trigger, type, badgeColor, desc }) => (
              <div key={trigger}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-xl shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">{trigger}</h3>
                  </div>
                  <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 ${badgeColor}`}>{type}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-5 flex items-start gap-3">
            <RefreshCw size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#00416a]">Planning to convert?</strong> Taxvio handles the complete <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-bold underline hover:text-sky-700 transition">OPC to Private Limited Company conversion</Link> — INC-6 filing, MOA/AOA alteration, additional director/shareholder addition, and MCA approval tracking.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS CHECKLIST ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Documents required for OPC registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for OPC Registration
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              All documents shared via WhatsApp or email — no in-person submission needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {DOCS.map(({ category, icon, items }) => (
              <div key={category} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#00416a] flex items-center justify-center text-base">
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle size={10} className="text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Nominee Note:</strong> The nominee must be an Indian citizen and resident — the same individual cannot be the sole member of another OPC simultaneously. The nominee can be changed later by filing Form INC-4 with MCA.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-white" aria-label="Complete guide to OPC registration in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              What is a One Person Company (OPC) — Complete Guide
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>One Person Company (OPC)</strong> is a unique business structure introduced under Section 2(62) of the <strong>Companies Act 2013</strong> — enabling a single individual to form and operate a company with full limited liability protection. Before OPCs existed, solo entrepreneurs had two choices: operate as a sole proprietor (with unlimited personal liability) or find a co-founder to form a <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Company</Link>. The OPC eliminated that dilemma.
              </p>
              <p>
                An OPC is treated as a <strong>private limited company</strong> in almost all respects — it is a separate legal entity, the sole member's personal assets are protected from business liabilities, it can own property and enter contracts in its own name, and it files annual returns with the Registrar of Companies (ROC). The key difference is that it has only one member, and it must appoint a nominee who will take over if the original member becomes incapacitated.
              </p>
              <p>
                The <strong>maximum paid-up capital for an OPC is ₹50 lakh</strong>. Beyond this threshold — or when average turnover exceeds ₹2 crore in three consecutive years — the OPC must mandatorily convert to a <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Company</Link>. This built-in conversion mechanism ensures that OPCs remain a startup/small-business structure and don't compete with larger corporate forms.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              OPC vs Sole Proprietorship — Why the Corporate Structure Matters
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Many solo founders default to sole proprietorship because it requires no registration, no compliance, and minimal cost. While these advantages are real, sole proprietorship comes with a fundamental flaw: <strong>unlimited personal liability</strong>. If your business faces a lawsuit, a large debt, or a disputed contract, your home, savings, and personal assets are all at risk.
              </p>
              <p>
                An OPC changes this equation entirely. As a separate legal entity, the OPC bears all business liabilities — not the founder personally. The sole member's liability is limited to the amount they've invested as paid-up capital. This protection is particularly critical for businesses in sectors with product liability risk, large contract values, or services provided to large clients who may raise disputes.
              </p>
              <p>
                Beyond liability protection, an OPC provides a <strong>company PAN</strong> (separate from the founder's personal PAN), enabling proper <Link href="/serviceslist/gst/gst-registration" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">GST registration</Link> on the company's identity, access to business bank accounts with higher credibility, and the ability to issue proper tax invoices under the company's name — which many large corporate clients and government entities require.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              The Nominee Director — OPC's Unique Governance Requirement
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The OPC nominee requirement is often misunderstood. The <strong>nominee is not a co-owner</strong> — they have no rights over the OPC, no access to its accounts, and no say in its management while the original member is active. The nominee's role is purely succession-oriented: if the sole member dies or becomes legally incapacitated (due to illness or court order), the nominee steps in as the new sole member, keeping the business operational.
              </p>
              <p>
                The nominee must be an Indian citizen and resident, must provide written consent on Form INC-3, and must not already be the sole member of another OPC. The nominee can be a family member, spouse, trusted friend, or a professional acquaintance — the key is that they are someone you'd trust to manage the business in your absence.
              </p>
              <p>
                The nominee can be changed at any time during the OPC's existence by filing Form INC-4 with MCA — a simple process that requires the outgoing nominee's consent and the incoming nominee's acceptance. Taxvio handles nominee documentation end-to-end, including drafting the INC-3 consent letter and filing INC-4 if you need to change the nominee later.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              OPC Annual Compliance — What's Lighter and What's Still Mandatory
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                One of the OPC's key attractions is its <strong>lighter annual compliance</strong> compared to a standard <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Company</Link>. Understanding which requirements are relaxed — and which remain mandatory — is critical to avoiding penalties.
              </p>
              <p>
                <strong>What is relaxed for OPCs:</strong> No mandatory Annual General Meeting (AGM). Only 1 board meeting per half-year (minimum 90 days gap) instead of 4/year. AOC-4 can be filed within 180 days of financial year end (vs 30 days of AGM for Pvt Ltd). Simplified annual return form MGT-7A instead of the longer MGT-7. No mandatory cash flow statement for OPCs with turnover below ₹2 crore.
              </p>
              <p>
                <strong>What remains mandatory:</strong> Statutory audit every year by a CA — regardless of turnover (this is stricter than an <Link href="/serviceslist/roc/llp-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">LLP</Link>, which only needs audit above ₹40 lakh). INC-20A within 180 days of incorporation. AOC-4 and MGT-7A annual filings. <Link href="/serviceslist/income-tax/itr-proprietor" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Income Tax Return (ITR-6)</Link>. <Link href="/serviceslist/gst/gst-return" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">GST returns</Link> if GST-registered. <Link href="/serviceslist/income-tax/quarterly-tds" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">TDS returns</Link> if applicable.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Post-Incorporation Checklist — What to Do After Getting Your OPC Certificate
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Receiving the Certificate of Incorporation is only the beginning. Several mandatory and practical steps must be completed within specific timeframes to make your OPC fully operational and compliant.
              </p>
              <p>
                <strong>Within 30 days:</strong> Open a current bank account in the OPC's name using the Certificate of Incorporation, company PAN, and registered office proof. Deposit the initial paid-up capital into the company's account.
              </p>
              <p>
                <strong>Within 180 days:</strong> File INC-20A (Declaration of Commencement of Business) — this is the most critical post-incorporation filing. Without it, the OPC <em>legally cannot commence business or borrow money</em>. Penalty for non-filing: ₹50,000 on the company + ₹1,000/day per officer. Taxvio tracks and files this as part of our standard post-incorporation package.
              </p>
              <p>
                <strong>As applicable:</strong> Apply for <Link href="/serviceslist/gst/gst-registration" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">GST registration</Link> if turnover is expected to exceed the threshold or if you're involved in interstate supply or e-commerce. Register under MSME Udyam for access to priority lending and government scheme benefits. Apply for Import Export Code (IEC) if you deal in imports or exports. Set up <Link href="/serviceslist/income-tax/quarterly-tds" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">TDS deduction mechanisms</Link> if you'll be making payments subject to TDS — salary, rent, professional fees above thresholds.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for OPC registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Solo Founders Trust Taxvio for OPC Registration
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Professional-grade incorporation at startup-friendly pricing — 100% online, no office visits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#00416a]" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-20 bg-white" aria-label="Client reviews for OPC registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted by Solo Founders Across India
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ stars, text, name, location }) => (
              <div key={name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#00416a] flex items-center justify-center text-white font-extrabold text-xs shrink-0">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-xs">{name}</p>
                    <p className="text-gray-400 text-[10px]">📍 {location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ACCORDION ══════ */}
      <section className="py-20 bg-gray-50" aria-label="OPC registration FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — OPC Registration in India
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="OPC registration services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">OPC Registration Services Across India</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides OPC registration services for solo founders across <strong>Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai, Bangalore</strong>, and all of India. Our 100% online process means geography is never a barrier.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Khatauli", "Muzaffarnagar", "Meerut", "Noida", "Delhi NCR", "Ghaziabad", "Lucknow", "Jaipur", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Surat"].map(city => (
              <Link key={city} href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150">
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Related services for OPC founders">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Explore More — Related Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Annual ROC Compliance", desc: "AOC-4, MGT-7A for OPCs — ₹3,999", href: "/serviceslist/roc/annual-roc-compliance", icon: "📋" },
              { title: "GST Registration", desc: "GSTIN in 3–7 days — ₹1,499", href: "/serviceslist/gst/gst-registration", icon: "🧾" },
              { title: "Pvt Ltd Registration", desc: "Convert your OPC — ₹6,999", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
              { title: "Income Tax Filing (ITR-6)", desc: "Company ITR for OPCs — ₹2,999", href: "/serviceslist/income-tax/itr-proprietor", icon: "💼" },
            ].map(({ title, desc, href, icon }) => (
              <Link key={title} href={href}
                className="group flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs group-hover:text-[#00416a] transition">{title}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5 leading-snug">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00416a] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={9} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
        aria-label="Register your OPC with Taxvio">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Reminder callout */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">⚡ Post-Incorporation Alert</p>
              <p className="text-white/65 text-xs mt-0.5">
                File <strong className="text-white">INC-20A</strong> within 180 days of incorporation.
                Penalty: <strong className="text-white">₹50,000</strong>. Your OPC cannot operate without it.
              </p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]">
              <MessageCircle size={13} /> File INC-20A Now
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <TrendingUp size={12} className="text-sky-400" />
              280+ OPCs Registered · 4.9★ Rating · Starting ₹4,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Register Your One Person Company —
              <span className="block mt-1 text-sky-300">Limited Liability, Starting ₹4,999</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Name approval, MOA &amp; AOA, DIN/DSC, nominee documentation, SPICe+ filing, Certificate of Incorporation, and PAN/TAN —
              all handled end-to-end by our CA &amp; CS team. 100% online, 7–10 working days, no office visit needed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} /> Register OPC — ₹4,999
              </a>
              <Link href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                Free Consultation <ArrowRight size={15} />
              </Link>
              <a href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <Phone size={15} /> Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
              <span className="flex items-center gap-1.5"><Shield size={12} /> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={12} /> CA &amp; CS Assisted</span>
              <span className="flex items-center gap-1.5"><Zap size={12} /> Fast Processing</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> Mon–Sat · 9 AM–7 PM</span>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}