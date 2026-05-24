"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Shield, Users, Zap, Clock, FileText, Building2,
  Phone, MessageCircle, Star, AlertCircle, TrendingUp,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I want to register an LLP. Please guide me."
)}`;

/* ─── When to choose LLP — icon grid ─────────────────────────────────────────── */
const WHEN_LLP = [
  {
    icon: "⚖️",
    title: "Professional Service Firms",
    section: "Ideal Structure",
    desc: "CA firms, law firms, consulting practices, architects, and medical professionals benefit most from LLPs — limited liability with flexible profit-sharing between professionals.",
  },
  {
    icon: "🤝",
    title: "Two or More Founders",
    section: "Partnership Alternative",
    desc: "Replacing a traditional partnership? An LLP offers the same operational flexibility but with limited liability protection — partners are not personally liable for the LLP's debts.",
  },
  {
    icon: "📉",
    title: "Lower Compliance Preference",
    section: "Compliance Light",
    desc: "No mandatory AGM. No mandatory audit below ₹40 lakh turnover. Only 2 annual MCA filings (Form 11 & Form 8). Significantly lower compliance burden than a Pvt Ltd.",
  },
  {
    icon: "🏗️",
    title: "Joint Ventures",
    section: "Corporate JVs",
    desc: "Two or more companies forming a joint venture prefer the LLP structure for shared operations — body corporates can be LLP partners (though not designated partners).",
  },
  {
    icon: "🧾",
    title: "No Equity Funding Planned",
    section: "Self-Funded Business",
    desc: "If you don't plan to raise VC, angel, or PE funding, an LLP's simpler structure is often preferable to the heavier governance requirements of a Private Limited Company.",
  },
  {
    icon: "💼",
    title: "Service / Consulting Businesses",
    section: "Low Asset Model",
    desc: "Service businesses with low capital requirements and high professional fees — freelancers scaling up, boutique agencies, staffing firms — are natural candidates for LLPs.",
  },
];

/* ─── What's included ────────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  { icon: "🔍", title: "Name Reservation (RUN-LLP)", desc: "Check name availability on MCA and reserve your preferred LLP name through the RUN-LLP (Reserve Unique Name for LLP) application." },
  { icon: "🪪", title: "DPIN Processing", desc: "Designated Partner Identification Number (DPIN) applied for all designated partners who don't already hold a DIN/DPIN." },
  { icon: "✍️", title: "LLP Agreement Drafting", desc: "Customised LLP agreement covering profit-sharing, capital contribution, roles, decision-making, and exit clauses — filed with MCA within 30 days of incorporation." },
  { icon: "🏛", title: "FiLLiP Filing on MCA", desc: "Integrated Form FiLLiP (Form for incorporation of Limited Liability Partnership) filed on MCA — covering name, DPIN, registered office, and partner details." },
  { icon: "📄", title: "Certificate of Incorporation", desc: "Official Certificate of Incorporation (CoI) from MCA with LLPIN (LLP Identification Number) — your LLP's legal existence document." },
  { icon: "🧾", title: "PAN & TAN Application", desc: "LLP PAN and TAN applied simultaneously with FiLLiP — no separate applications needed after incorporation." },
];

/* ─── LLP vs Pvt Ltd comparison ──────────────────────────────────────────────── */
const COMPARISON = [
  { point: "Governing Law", llp: "LLP Act 2008", pvt: "Companies Act 2013" },
  { point: "Minimum Partners/Directors", llp: "2 Designated Partners", pvt: "2 Directors + 2 Shareholders" },
  { point: "Equity Investment", llp: "❌ Not possible", pvt: "✅ Equity shares, ESOPs" },
  { point: "Mandatory AGM", llp: "❌ Not required", pvt: "✅ Required annually" },
  { point: "Mandatory Audit", llp: "Only if T/O > ₹40L or contribution > ₹25L", pvt: "✅ Always mandatory" },
  { point: "Annual MCA Filings", llp: "Form 11 + Form 8 (2 forms)", pvt: "AOC-4 + MGT-7 + ADT-1 (3+ forms)" },
  { point: "Board Meetings", llp: "❌ Not required", pvt: "Min. 4 per year" },
  { point: "Profit Distribution", llp: "Flexible as per agreement", pvt: "Dividends only (after tax)" },
  { point: "Foreign Investment (FDI)", llp: "Limited — FIPB approval for some sectors", pvt: "✅ Full FDI under automatic route" },
  { point: "Compliance Cost", llp: "Lower", pvt: "Higher" },
];

/* ─── Process steps ──────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Document Collection & Eligibility Check",
    desc: "Share PAN, Aadhaar, address proof and proposed LLP details via WhatsApp. Our team reviews eligibility — residency of at least one designated partner, name availability, and registered office compliance.",
  },
  {
    step: "02",
    title: "DPIN & Digital Signature Processing",
    desc: "DPIN applied for designated partners who don't already hold one. Digital Signature Certificates (DSC) procured and verified for all designated partners — required for MCA filing.",
  },
  {
    step: "03",
    title: "Name Reservation via RUN-LLP",
    desc: "LLP name applied through MCA's RUN-LLP form. We check trademark conflicts, existing LLP names, and MCA naming guidelines to maximise first-attempt approval success.",
  },
  {
    step: "04",
    title: "LLP Agreement Drafting",
    desc: "Custom LLP agreement drafted covering profit-sharing ratios, capital contributions, designated partner rights & obligations, decision-making, addition of partners, and exit provisions.",
  },
  {
    step: "05",
    title: "FiLLiP Form Filing on MCA",
    desc: "Integrated FiLLiP form filed on MCA portal — covering LLP name, registered office, designated partner details, and capital structure. PAN and TAN applied simultaneously.",
  },
  {
    step: "06",
    title: "Certificate of Incorporation & Delivery",
    desc: "MCA issues the Certificate of Incorporation with your LLPIN. Delivered directly to you via WhatsApp. We also file the LLP agreement with MCA within the mandatory 30-day window.",
  },
];

/* ─── Annual compliance ──────────────────────────────────────────────────────── */
const ANNUAL_COMPLIANCE = [
  { form: "Form 11", detail: "Annual return of an LLP. Due: 30 May every year. Penalty: ₹100/day for late filing." },
  { form: "Form 8", detail: "Statement of accounts & solvency. Due: 30 October every year. Penalty: ₹100/day." },
  { form: "Statutory Audit", detail: "Mandatory only if turnover > ₹40 lakh OR contribution > ₹25 lakh. Conducted by a CA." },
  { form: "ITR-5", detail: "Income tax return for LLPs. Due: 31 July (non-audit) or 31 October (audit cases)." },
  { form: "TDS Returns", detail: "Quarterly 24Q/26Q if the LLP deducts TDS on salaries or vendor payments." },
  { form: "LLP Agreement Amendment", detail: "Any change in partners, profit-sharing, or capital must be amended via Form 3 within 30 days." },
];

/* ─── Documents required ─────────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "Designated Partners (All)",
    icon: "👤",
    items: [
      "PAN Card",
      "Aadhaar Card",
      "Passport-size photograph",
      "Mobile number & email ID linked to Aadhaar",
      "DSC (Digital Signature Certificate) — Taxvio assists in procurement",
    ],
  },
  {
    category: "Registered Office",
    icon: "🏢",
    items: [
      "Latest utility bill (electricity/water/gas) — not older than 2 months",
      "NOC from property owner (if rented or not owned by partner)",
      "Rent agreement (if rented)",
    ],
  },
  {
    category: "LLP Details",
    icon: "📋",
    items: [
      "Proposed LLP name (2–3 options)",
      "Main business activity",
      "Capital contribution by each partner",
      "Profit-sharing ratio between designated partners",
      "Registered office address",
    ],
  },
];

/* ─── Testimonials ───────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We converted our CA firm's traditional partnership into an LLP through Taxvio. The LLP agreement was drafted exactly as we needed — covering partner exit and remuneration clauses. Professional and fast.",
    name: "Sharma & Gupta Associates",
    location: "Muzaffarnagar",
  },
  {
    stars: 5,
    text: "As an IT consulting firm with 3 founders, LLP was the right structure for us. Taxvio handled everything — DPIN, agreement, MCA filing — without us visiting any office. Incorporated in 8 days.",
    name: "TechEdge Consulting LLP",
    location: "Noida",
  },
  {
    stars: 5,
    text: "Taxvio guided us through LLP vs Pvt Ltd comparison before we made the decision. Their advice saved us unnecessary compliance costs. The registration itself was smooth and on time.",
    name: "Arora Legal Services LLP",
    location: "Meerut",
  },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How long does LLP registration take in India?",
    a: "LLP registration through Taxvio typically takes 7–10 working days with all documents in order. This covers name reservation via RUN-LLP, DPIN processing, LLP agreement drafting, FiLLiP form filing on MCA, and delivery of the Certificate of Incorporation.",
  },
  {
    q: "What is the minimum number of partners required to form an LLP?",
    a: "An LLP requires a minimum of 2 designated partners. There is no upper limit on the total number of partners. At least 2 designated partners must be individuals, and at least one must be an Indian resident (present in India for at least 182 days in the previous calendar year).",
  },
  {
    q: "What is the difference between an LLP and a Private Limited Company?",
    a: "An LLP (Limited Liability Partnership) is governed by the LLP Act 2008, offers lower compliance burden (no mandatory AGM, no mandatory audit below ₹40 lakh turnover), and cannot raise equity investment. A Private Limited Company is governed by the Companies Act 2013, has higher compliance requirements, but can raise equity funding, issue ESOPs, and offers higher credibility with large corporate clients and investors.",
  },
  {
    q: "What is a Designated Partner Identification Number (DPIN)?",
    a: "A DPIN is a unique identification number allotted to designated partners of an LLP by MCA. It is similar to a DIN for company directors. If a person already holds a DIN, the same number serves as the DPIN — no separate application is needed.",
  },
  {
    q: "What annual compliance is required for an LLP?",
    a: "An LLP must file: Form 11 (annual return) by 30 May, and Form 8 (statement of accounts & solvency) by 30 October each year. An LLP with turnover above ₹40 lakh or contribution above ₹25 lakh must also get accounts audited by a CA. ITR-5 must be filed annually for income tax compliance.",
  },
  {
    q: "Can a body corporate (company) be a partner in an LLP?",
    a: "Yes. A body corporate — including a Private Limited Company, Public Limited Company, or foreign company — can be a partner in an LLP. However, body corporates cannot be designated partners. Designated partners must be individuals.",
  },
  {
    q: "What is the LLP agreement and why is it important?",
    a: "The LLP agreement is the foundational document governing the LLP — defining partner rights, obligations, profit-sharing ratios, capital contributions, decision-making, and dispute resolution. It must be filed with MCA within 30 days of incorporation. A poorly drafted agreement creates operational conflicts and compliance issues. Taxvio drafts customised LLP agreements covering all essential clauses.",
  },
  {
    q: "What is the penalty for late filing of LLP annual returns?",
    a: "The penalty for late filing of Form 11 or Form 8 is ₹100 per day per form, with no upper limit. Persistent non-compliance can lead to the LLP being declared defunct and struck off by MCA, with partners facing legal consequences.",
  },
];

/* ─── FAQ Item (accordion) ────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md"
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-gray-800 text-sm leading-snug flex items-start gap-3" itemProp="name">
          <span className="w-5 h-5 rounded-full bg-[#00416a] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
            Q
          </span>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-[#00416a] mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          className="px-6 pb-5 pl-14"
          itemScope
          itemType="https://schema.org/Answer"
          itemProp="acceptedAnswer"
        >
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Client Component ────────────────────────────────────────────────────────── */
export default function LLPFormationClient() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════ DEADLINE BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center">
        ⚡ New LLP? File your <strong>LLP Agreement with MCA within 30 days</strong> of incorporation | Late filing penalty: <strong>₹100/day</strong> | Annual returns due: <strong>Form 11 — 30 May</strong> | Form 8 — 30 Oct
      </div>

      {/* ══════ HERO ══════ */}
      <section
        aria-label="LLP Registration Services — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/roc", label: "ROC Compliance" },
                { href: null, label: "LLP Registration" },
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
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 text-sky-300"
            style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}>
            🤝 LLP Registration — MCA / LLP Act 2008
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Left */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                LLP Registration
                <span className="block mt-2 text-sky-300">Limited Liability Partnership</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Register your <strong className="text-white">LLP online</strong> in 7–10 working days. Taxvio's CA &amp; CS team handles name reservation,
                DPIN processing, <strong className="text-white">LLP agreement drafting</strong>, FiLLiP filing on MCA, and
                Certificate of Incorporation — end to end. Starting <strong className="text-white">₹5,999</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["✅ LLP Agreement Drafted", "🔒 MCA Compliant", "⚡ 7–10 Day Process", "📋 All-Inclusive Package"].map(t => (
                  <span key={t} className="text-xs font-semibold rounded-full px-3 py-1.5"
                    style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  <MessageCircle size={16} /> Register LLP — ₹5,999
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Quick trust row */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/55">
                <span className="flex items-center gap-1.5"><CheckCircle size={11} className="text-sky-400" /> Name Reservation (RUN-LLP)</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={11} className="text-sky-400" /> DPIN & DSC Processing</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={11} className="text-sky-400" /> LLP Agreement Drafting</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={11} className="text-sky-400" /> FiLLiP MCA Filing</span>
              </div>
            </div>

            {/* Right — stat card */}
            <div className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-bold text-white text-sm">LLP Registration — Key Facts</p>
                <p className="text-xs text-white/50 mt-0.5">All-inclusive · No hidden charges</p>
              </div>
              <div className="p-5 space-y-3.5">
                {[
                  { label: "Minimum Partners", val: "2 Designated Partners" },
                  { label: "Governing Act", val: "LLP Act 2008" },
                  { label: "Mandatory AGM", val: "Not required" },
                  { label: "Mandatory Audit", val: "T/O > ₹40 lakh only" },
                  { label: "Annual MCA Forms", val: "Form 11 + Form 8" },
                  { label: "Processing Time", val: "7–10 working days" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-white/60 text-xs">{label}</span>
                    <span className="font-bold text-white text-xs">{val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-white text-xs font-bold">All-Inclusive Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold">₹5,999</p>
                    <p className="text-white/40 text-[10px] mt-0.5">+ Govt. fees as applicable</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(312+)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio LLP registration statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "400+", label: "LLPs Registered" },
            { val: "7–10", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹5,999", label: "All-Inclusive Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WHEN TO CHOOSE LLP — ICON GRID ══════ */}
      <section className="py-20 bg-gray-50" aria-label="When to choose LLP structure">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              LLP Applicability
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            Who Should Register an LLP?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            An LLP is not always the right choice — but when it is, it significantly reduces compliance costs and administrative overhead.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHEN_LLP.map(({ icon, title, section, desc }) => (
              <div key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-xl shrink-0">
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
      <section className="py-20 bg-white" aria-label="What is included in LLP registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹5,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Our all-inclusive package covers every step — from name reservation to Certificate of Incorporation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(({ icon, title, desc }) => (
              <div key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
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

      {/* ══════ LLP vs PVT LTD TABLE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="LLP vs Private Limited Company comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Which Form Applies
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              LLP vs Private Limited Company — Complete Comparison
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Choose the right structure before you incorporate. The wrong choice is costly to reverse.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-5 py-3.5 text-left font-bold">Parameter</th>
                  <th className="px-5 py-3.5 text-left font-bold">🤝 LLP</th>
                  <th className="px-5 py-3.5 text-left font-bold">🏛 Private Limited Company</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON.map(({ point, llp, pvt }, i) => (
                  <tr key={point} className={`hover:bg-blue-50/30 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-5 py-3 font-semibold text-gray-700">{point}</td>
                    <td className="px-5 py-3 text-gray-600">{llp}</td>
                    <td className="px-5 py-3 text-gray-600">{pvt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Key rule of thumb:</strong> If you plan to raise equity investment, issue ESOPs, or scale rapidly with external capital — choose a Private Limited Company. If you are a professional services firm with no fundraising plans — an LLP is ideal.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-white" aria-label="LLP registration process with Taxvio">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step LLP Registration Process — Name to Certificate
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
      <section className="py-20 bg-gray-50" aria-label="LLP annual compliance requirements">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Compliance Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Annual Compliance for an LLP — Deadlines &amp; Penalties
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Non-filing attracts ₹100/day per form with no upper cap. Plan ahead with Taxvio's compliance calendar.
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
                {ANNUAL_COMPLIANCE.map(({ form, detail }) => (
                  <tr key={form} className="hover:bg-blue-50/20 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-[#00416a]">{form}</td>
                    <td className="px-5 py-3.5 text-gray-600">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS CHECKLIST ══════ */}
      <section className="py-20 bg-white" aria-label="Documents required for LLP registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for LLP Registration
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              All documents shared via WhatsApp or email — no in-person submission needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {DOCS.map(({ category, icon, items }) => (
              <div key={category} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
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
              <strong>Important:</strong> The utility bill must not be older than 2 months. If the registered office is rented or owned by a third party, the NOC must specifically authorise use of the address as an LLP registered office.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Complete guide to LLP registration in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              What is a Limited Liability Partnership (LLP) in India?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>Limited Liability Partnership (LLP)</strong> is a hybrid business entity introduced in India by the <strong>Limited Liability Partnership Act 2008</strong>. It combines the operational flexibility and tax transparency of a traditional partnership with the <em>limited liability protection</em> of a company. Each partner's liability is limited to their agreed contribution — creditors cannot pursue partners' personal assets for debts of the LLP.
              </p>
              <p>
                An LLP is a <strong>separate legal entity</strong> — it can own property, enter contracts, open bank accounts, and sue or be sued in its own name. Unlike a traditional partnership where partners are jointly and severally liable for all business debts, LLP partners are shielded from the misconduct or negligence of fellow partners. This partner-from-partner liability protection is particularly valuable in professional service firms.
              </p>
              <p>
                The Ministry of Corporate Affairs (MCA) administers LLP registration and compliance in India. The LLP is registered on the MCA portal through the <strong>FiLLiP (Form for incorporation of Limited Liability Partnership)</strong> and receives an <strong>LLPIN (LLP Identification Number)</strong> — its unique identity number, equivalent to a company's CIN.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              LLP Agreement — The Most Critical Document in LLP Registration
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The <strong>LLP agreement</strong> is the foundational governance document that defines how the LLP operates. It covers partner rights and obligations, profit-sharing ratios, capital contribution by each partner, decision-making processes, remuneration of designated partners, addition and exit of partners, and dispute resolution mechanisms.
              </p>
              <p>
                The LLP agreement must be filed with MCA on <strong>Form 3 within 30 days of incorporation</strong>. Late filing of Form 3 attracts a penalty of ₹100 per day. If no LLP agreement is filed, the default provisions of Schedule I to the LLP Act apply — which may not reflect the actual arrangement between partners and can lead to significant operational conflicts.
              </p>
              <p>
                A well-drafted LLP agreement should address several practical scenarios: <em>What happens if one partner wants to exit?</em> <em>How are disputes between partners resolved?</em> <em>What is the process for admitting a new partner?</em> <em>Can a partner's share be transferred, and if so, to whom?</em> These provisions, if missing, create ambiguity that leads to costly disputes.
              </p>
              <p>
                Taxvio drafts customised LLP agreements — not generic templates — tailored to your specific business, partner dynamics, and long-term plans. Every agreement is reviewed by a qualified Company Secretary before filing with MCA.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              LLP Annual Compliance — Form 11, Form 8, and Audit Requirements
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                One of the primary reasons professionals choose an LLP is its <strong>lighter annual compliance burden</strong> compared to a Private Limited Company. Understanding what is and isn't required prevents both over-compliance (wasted cost) and under-compliance (penalties).
              </p>
              <p>
                <strong>Form 11</strong> (Annual Return of LLP) must be filed by <strong>30 May every year</strong>. It discloses the LLP's designated partners, total partner count, contributions made by partners, and any changes during the year. All LLPs must file Form 11 regardless of whether they conducted business. Late penalty: ₹100 per day, no upper cap.
              </p>
              <p>
                <strong>Form 8</strong> (Statement of Accounts and Solvency) must be filed by <strong>30 October every year</strong>. It contains the LLP's financial statements — balance sheet, profit & loss account — certified by the designated partners and signed by a CA (for LLPs subject to audit). Non-audit LLPs must still file Form 8 with a self-certified statement of accounts. Late penalty: ₹100 per day, no upper cap.
              </p>
              <p>
                <strong>Statutory audit</strong> is mandatory only for LLPs with annual turnover exceeding ₹40 lakh or contribution exceeding ₹25 lakh. Below these thresholds, no mandatory audit is required — a significant compliance cost saving over a Private Limited Company (which requires statutory audit regardless of turnover).
              </p>
              <p>
                <strong>Income Tax Return (ITR-5)</strong> must be filed annually. LLPs are taxed as entities — partners are not taxed on their share of LLP income in their individual ITRs (avoiding double taxation). The LLP itself pays income tax at 30% on its net profit plus applicable surcharge and cess. Interest and remuneration paid to designated partners as per the LLP agreement are deductible up to limits specified in Section 40(b) of the Income Tax Act.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Converting a Partnership Firm to an LLP — Process &amp; Benefits
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Many traditional partnership firms — especially in professional services — choose to convert to an LLP to gain limited liability protection without fundamentally changing their operational structure. The conversion is tax-neutral if certain conditions are met: no consideration other than the LLP's share is paid, partners' profit-sharing ratio remains the same, and at least 50% of the partners in the firm continue as designated partners of the LLP for 5 years.
              </p>
              <p>
                The conversion process involves filing Form 17 with MCA, along with a statement of consenting partners, a certified copy of the partnership deed, the LLP agreement, and a list of assets and liabilities. On approval, MCA issues a Certificate of Registration of Conversion — and the partnership firm stands dissolved automatically. The LLP inherits all assets, liabilities, contracts, and legal proceedings of the dissolved firm.
              </p>
              <p>
                Taxvio handles both the conversion filing and the LLP agreement amendment required to reflect the former firm's profit-sharing structure within the LLP framework.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Post-Incorporation Steps After LLP Registration
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Once the Certificate of Incorporation is issued, several important steps must be completed within specific timeframes:
              </p>
              <p>
                <strong>Within 30 days:</strong> File Form 3 (LLP agreement) with MCA. Failure to file within 30 days attracts ₹100/day penalty. Open a current bank account in the LLP's name using the Certificate of Incorporation, LLPIN, and PAN.
              </p>
              <p>
                <strong>As applicable:</strong> Apply for GST registration if turnover is expected to exceed the threshold or if the LLP is engaged in interstate supply or e-commerce. Apply for Professional Tax registration (state-specific). Register for MSME Udyam if eligible. Apply for Import Export Code (IEC) if the LLP will engage in imports or exports.
              </p>
              <p>
                <strong>Ongoing:</strong> Maintain proper books of accounts from day one. An LLP that starts maintaining books only at audit time faces significant challenges — particularly for GST reconciliation and TDS compliance verification.
              </p>
              <p>
                Taxvio's post-incorporation support covers Form 3 filing, GST registration, MSME Udyam, and first-year compliance setup — ensuring your LLP is fully operational and compliant from the day the certificate arrives.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-20 bg-white" aria-label="Client testimonials for LLP registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted for LLP Registration Across India
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
      <section className="py-20 bg-gray-50" aria-label="LLP registration frequently asked questions">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — LLP Registration in India
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="LLP registration services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">LLP Registration Services Across India</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides LLP registration services for professionals, consultants, and businesses across{" "}
            <strong>Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur</strong>, and pan-India online. Our 100% online process means location is never a barrier — we've registered LLPs for clients across 20+ states.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Khatauli", "Muzaffarnagar", "Meerut", "Noida", "Delhi NCR", "Ghaziabad", "Lucknow", "Jaipur", "Mumbai", "Bangalore", "Hyderabad", "Chennai"].map(city => (
              <span key={city}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600">
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Related ROC and compliance services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Explore More — Related Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "ITR — Firm & LLP", desc: "ITR-5 for LLPs and partnership firms", href: "/serviceslist/income-tax/itr-firm-llp", icon: "🤝" },
              { title: "Annual ROC Compliance", desc: "Form 11 & Form 8 — ₹2,499", href: "/serviceslist/roc/annual-roc-compliance", icon: "📋" },
              { title: "Pvt Ltd Registration", desc: "Full incorporation — ₹6,999", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
              { title: "GST Registration", desc: "GSTIN in 3–7 days — ₹1,499", href: "/serviceslist/gst/gst-registration", icon: "🧾" },
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
      <section
        className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
        aria-label="Register your LLP with Taxvio"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

        {/* Deadline callout box */}
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">📋 Post-Incorporation Reminder</p>
              <p className="text-white/65 text-xs mt-0.5">LLP Agreement (Form 3) must be filed with MCA within <strong className="text-white">30 days of incorporation</strong>. Penalty: ₹100/day.</p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]">
              <MessageCircle size={13} /> File Now
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <TrendingUp size={12} className="text-sky-400" />
              400+ LLPs Registered · 4.9★ Rating · Starting ₹5,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Register Your LLP Online —
              <span className="block mt-1 text-sky-300">Starting ₹5,999</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Name reservation, DPIN, LLP agreement drafting, FiLLiP filing, Certificate of Incorporation, and PAN/TAN — all
              handled end-to-end by our CA &amp; CS team. 100% online, 7–10 working days, no office visit needed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} /> Register LLP — ₹5,999
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
              <span className="flex items-center gap-1.5"><CheckCircle size={12} /> CA & CS Assisted</span>
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