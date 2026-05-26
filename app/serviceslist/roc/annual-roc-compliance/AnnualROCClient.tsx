"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Shield, Users, Zap, Clock, FileText, AlertTriangle,
  Phone, MessageCircle, Star, AlertCircle, TrendingUp, Calendar,
} from "lucide-react";

/* ─── Constants ────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I need help with Annual ROC Compliance filing for my company/LLP."
)}`;

/* ─── Pricing Plans ────────────────────────────────────────────────────────── */
const PLANS = [
  {
    entity: "LLP",
    icon: "🤝",
    price: "₹2,499",
    badge: null,
    badgeColor: "",
    accentColor: "border-sky-200",
    headingColor: "text-sky-700",
    forms: ["Form 11 — Annual Return", "Form 8 — Statement of Accounts", "Deadline reminder service", "MCA filing acknowledgements"],
    due: "Form 11: 30 May | Form 8: 30 Oct",
    href: "/serviceslist/roc/llp-formation",
  },
  {
    entity: "OPC / Small Company",
    icon: "👤",
    price: "₹2,999",
    badge: "Simplified Filing",
    badgeColor: "bg-violet-500",
    accentColor: "border-violet-200",
    headingColor: "text-violet-700",
    forms: ["AOC-4 — Financial Statements", "MGT-7A — Simplified Annual Return", "ADT-1 — Auditor Appointment", "Board Meeting Minutes", "Director's Report drafting"],
    due: "AOC-4: Within 180 days of FY end | MGT-7A: Within 60 days of FY end",
    href: "/serviceslist/roc/opc-formation",
  },
  {
    entity: "Private Limited Company",
    icon: "🏛",
    price: "₹3,999",
    badge: "Most Popular",
    badgeColor: "bg-emerald-500",
    accentColor: "border-emerald-200",
    headingColor: "text-[#00416a]",
    forms: ["AOC-4 — Financial Statements", "MGT-7 — Annual Return", "ADT-1 — Auditor Appointment", "Board Meeting Minutes (4/year)", "Director's Report drafting", "MCA filing & acknowledgements"],
    due: "AOC-4: 30 days of AGM | MGT-7: 60 days of AGM | AGM by 30 Sep",
    href: "/serviceslist/roc/private-limited-formation",
  },
  {
    entity: "Section 8 Company",
    icon: "🌱",
    price: "₹4,499",
    badge: "NGO / Non-Profit",
    badgeColor: "bg-teal-500",
    accentColor: "border-teal-200",
    headingColor: "text-teal-700",
    forms: ["AOC-4 — Financial Statements", "MGT-7 — Annual Return", "ADT-1 — Auditor Appointment", "Board Meeting Minutes", "Director's Report (non-profit format)", "12A/80G renewal tracking"],
    due: "AOC-4: 30 days of AGM | MGT-7: 60 days of AGM | AGM by 30 Sep",
    href: "/serviceslist/roc/section-8-company",
  },
];

/* ─── All required forms reference ────────────────────────────────────────── */
const ALL_FORMS = [
  {
    form: "AOC-4",
    fullName: "Financial Statements Filing",
    entity: "Pvt Ltd, OPC, Section 8",
    dueDate: "Within 30 days of AGM (OPC: 180 days of FY end)",
    penalty: "₹100/day",
    consequence: "Directors marked as defaulters on MCA",
  },
  {
    form: "MGT-7",
    fullName: "Annual Return",
    entity: "Private Limited Company, Section 8",
    dueDate: "Within 60 days of AGM",
    penalty: "₹100/day",
    consequence: "Director disqualification after 3 years default",
  },
  {
    form: "MGT-7A",
    fullName: "Simplified Annual Return",
    entity: "OPC & Small Companies",
    dueDate: "Within 60 days of FY end",
    penalty: "₹100/day",
    consequence: "Director disqualification after 3 years default",
  },
  {
    form: "ADT-1",
    fullName: "Auditor Appointment",
    entity: "All Companies",
    dueDate: "Within 15 days of AGM",
    penalty: "₹300/day (max ₹12 lakh)",
    consequence: "Non-compliant audit status",
  },
  {
    form: "Form 11",
    fullName: "LLP Annual Return",
    entity: "All LLPs",
    dueDate: "30 May every year",
    penalty: "₹100/day",
    consequence: "LLP marked defaulting; potential strike-off",
  },
  {
    form: "Form 8",
    fullName: "Statement of Accounts & Solvency",
    entity: "All LLPs",
    dueDate: "30 October every year",
    penalty: "₹100/day",
    consequence: "LLP marked defaulting; potential strike-off",
  },
  {
    form: "INC-20A",
    fullName: "Commencement of Business",
    entity: "New Companies (post Nov 2018)",
    dueDate: "Within 180 days of incorporation",
    penalty: "₹50,000 company + ₹1,000/day per officer",
    consequence: "Company cannot legally commence business",
  },
  {
    form: "DIR-3 KYC",
    fullName: "Director KYC",
    entity: "All Directors with DIN",
    dueDate: "30 September every year",
    penalty: "₹5,000 (DIN deactivated until filed)",
    consequence: "DIN deactivation — cannot sign MCA forms",
  },
];

/* ─── What's included ──────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  { icon: "📋", title: "AOC-4 Financial Statement Filing", desc: "Financial statements (balance sheet, P&L, cash flow) prepared in XBRL/non-XBRL format and filed with MCA within the due date — coordinated with your statutory auditor." },
  { icon: "📊", title: "MGT-7 / MGT-7A Annual Return", desc: "Complete annual return filed with MCA — disclosing director details, shareholding pattern, charges, and any changes during the year. Signed using director DSC." },
  { icon: "🏦", title: "ADT-1 Auditor Appointment", desc: "Auditor appointment form filed within 15 days of AGM. We track auditor tenure limits and flag any rotation requirements under Section 139." },
  { icon: "📝", title: "Board Meeting Minutes (4/year)", desc: "All 4 mandatory board meeting minutes drafted with correct agenda items, quorum, resolutions, and notice period compliance — ready for director sign-off." },
  { icon: "📑", title: "Director's Report Drafting", desc: "Annual Director's Report drafted in Companies Act 2013-compliant format — covering financial highlights, dividend declaration, audit observations, and statutory disclosures." },
  { icon: "🔔", title: "Deadline Reminder System", desc: "Proactive WhatsApp reminders 30 days, 15 days, and 7 days before each filing deadline — so you never face a last-minute scramble or penalty day." },
];

/* ─── Penalty scenarios ────────────────────────────────────────────────────── */
const PENALTY_SCENARIOS = [
  {
    scenario: "30 Days Late",
    forms: "AOC-4 + MGT-7",
    penalty: "₹6,000",
    calc: "₹100 × 30 days × 2 forms",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    icon: "⚠️",
  },
  {
    scenario: "3 Months Late",
    forms: "AOC-4 + MGT-7",
    penalty: "₹18,000",
    calc: "₹100 × 90 days × 2 forms",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    icon: "🔴",
  },
  {
    scenario: "6 Months Late",
    forms: "AOC-4 + MGT-7",
    penalty: "₹36,000",
    calc: "₹100 × 180 days × 2 forms",
    color: "bg-red-50 border-red-200 text-red-800",
    icon: "🚨",
  },
  {
    scenario: "3 Years Non-Filing",
    forms: "AOC-4 + MGT-7",
    penalty: "Director Disqualified",
    calc: "Section 164(2) — 5 years ban",
    color: "bg-red-100 border-red-300 text-red-900",
    icon: "⛔",
  },
];

/* ─── Process steps ────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Documents & Financial Statements",
    desc: "Share your audited financial statements, director details, and any changes during the year via WhatsApp or email. If audit is pending, we coordinate with your auditor to receive the signed accounts.",
  },
  {
    step: "02",
    title: "Director's Report & Minutes Drafting",
    desc: "We draft the annual Director's Report and board meeting minutes for the year in Companies Act 2013-compliant format. Shared with you for director review and DSC signature.",
  },
  {
    step: "03",
    title: "AOC-4 Preparation (Financial Statements)",
    desc: "Financial statements converted to MCA filing format (XBRL where applicable). AOC-4 form prepared with all financial schedule attachments and cross-verified against audit report.",
  },
  {
    step: "04",
    title: "MGT-7 / MGT-7A Annual Return",
    desc: "Annual return form prepared with director details, member register, share transfer records, and charge details. Cross-checked with MCA master data to ensure zero discrepancies.",
  },
  {
    step: "05",
    title: "Filing on MCA Portal",
    desc: "All forms filed on MCA portal using director DSC. ADT-1 filed for auditor appointment. Filing receipts downloaded and delivered to you as evidence of compliance.",
  },
  {
    step: "06",
    title: "Acknowledgement & Compliance Certificate",
    desc: "MCA filing acknowledgements, Service Request Numbers (SRNs), and a compliance summary delivered via WhatsApp. Annual compliance calendar for the next year provided.",
  },
];

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We missed ROC filings for 2 years and our directors were disqualified. Taxvio helped us clear all backlogs through CFSS and file current year returns. Highly recommend for ongoing compliance.",
    name: "Pankaj Enterprises Pvt Ltd",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "Annual compliance for our LLP is taken care of by Taxvio completely. We just share our accounts in September and they handle Form 11, Form 8, and ITR-5 — on time every year.",
    name: "Sharma & Associates LLP",
    location: "Muzaffarnagar",
  },
  {
    stars: 5,
    text: "The Director's Report and board meeting minutes drafted by Taxvio are thorough and professionally formatted. Our auditor also confirmed the AOC-4 was filed correctly without any MCA queries.",
    name: "TechSolve Solutions Pvt Ltd",
    location: "Noida",
  },
];

/* ─── Why Taxvio ───────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  { icon: Users, title: "CA & CS Assisted", desc: "Every filing prepared and reviewed by practising Chartered Accountants and Company Secretaries — not automated software without oversight." },
  { icon: Calendar, title: "Proactive Deadline Tracking", desc: "We track your AGM dates, financial year end, and all ROC deadlines — and alert you 30, 15, and 7 days in advance via WhatsApp." },
  { icon: Shield, title: "Zero Penalty Guarantee", desc: "If you give us documents on time, we guarantee on-time filing. If we miss a deadline due to our error, we bear the penalty." },
  { icon: FileText, title: "Director's Report & Minutes Included", desc: "We don't just file forms — we draft the complete annual documentation set: Director's Report, board minutes, and AGM minutes." },
  { icon: Zap, title: "100% Online", desc: "Share accounts via WhatsApp or email. We handle all MCA filings, DSC usage, and acknowledgement delivery without you visiting any office." },
  { icon: AlertTriangle, title: "Backlog Clearance Specialists", desc: "Have pending filings from previous years? We clear ROC backlogs, calculate accumulated penalties, and advise on MCA amnesty schemes." },
];

/* ─── FAQs ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the due date for AOC-4 filing?",
    a: "AOC-4 must be filed within 30 days of the AGM. Since the AGM must be held by 30 September (within 6 months of financial year end i.e. 31 March), the effective deadline is typically 29 October. For OPCs, AOC-4 must be filed within 180 days of the financial year end — by 27 September.",
  },
  {
    q: "What is the due date for MGT-7 annual return filing?",
    a: "MGT-7 (for Private Limited Companies) must be filed within 60 days of the AGM — typically by 28 November. OPCs and small companies file the simplified MGT-7A within 60 days of the financial year end.",
  },
  {
    q: "What is the penalty for late ROC filing?",
    a: "The penalty for late filing of AOC-4 and MGT-7 is ₹100 per day per form, with no upper cap. A company delaying both forms by 6 months faces ₹36,000 in penalties. Directors of companies failing to file for 3 consecutive years are disqualified under Section 164(2) for 5 years.",
  },
  {
    q: "What is Form 11 and Form 8 for LLPs?",
    a: "Form 11 is the annual return of an LLP — filed by 30 May. It discloses designated partners, total partners, and contributions. Form 8 is the Statement of Accounts and Solvency — filed by 30 October. Both are mandatory for all LLPs regardless of turnover. Penalty: ₹100/day per form.",
  },
  {
    q: "What happens if a company misses ROC filings for 3 years?",
    a: "Under Section 164(2) of the Companies Act 2013, all directors of a company that fails to file annual returns for 3 consecutive financial years are automatically disqualified. Disqualified directors cannot be on the board of any company for 5 years. The ROC may also initiate strike-off proceedings.",
  },
  {
    q: "Is annual ROC compliance mandatory even if the company had no business?",
    a: "Yes. Annual ROC compliance is mandatory for all registered companies and LLPs regardless of business activity. Even dormant companies must file AOC-4 and MGT-7 with nil financial statements. Companies can apply for 'Dormant Company' status under Section 455 for reduced compliance.",
  },
  {
    q: "What documents are needed for annual ROC compliance?",
    a: "You need: audited financial statements (balance sheet, P&L, cash flow), board meeting minutes for the year, AGM notice and minutes, directors' DSCs, list of directors and shareholders, and records of any changes in capital or directorship. Taxvio coordinates with your statutory auditor and prepares all ROC documents from the audit package.",
  },
  {
    q: "Can I file overdue ROC returns after the due date?",
    a: "Yes. Pending returns can be filed at any time with accumulated late fees of ₹100/day/form. MCA periodically announces CFSS (Companies Fresh Start Scheme) or LLP Settlement Schemes that waive or reduce penalties for past defaults. Taxvio assists in clearing all ROC backlogs and advises on available amnesty windows.",
  },
];

/* ─── FAQ Accordion ────────────────────────────────────────────────────────── */
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
        <ChevronDown size={16}
          className={`shrink-0 text-[#00416a] mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 pl-14" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main Client Component ────────────────────────────────────────────────── */
export default function AnnualROCClient() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════ DEADLINE URGENCY BANNER ══════ */}
      <div className="bg-red-600 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        🚨 <strong>AGM must be held by 30 September</strong> | AOC-4 due: <strong>29 October</strong> | MGT-7 due: <strong>28 November</strong> | LLP Form 11: <strong>30 May</strong> | Form 8: <strong>30 Oct</strong> | Penalty: <strong>₹100/day/form — No upper cap</strong>
      </div>

      {/* ══════ HERO ══════ */}
      <section aria-label="Annual ROC Compliance Filing — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
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
                { href: null, label: "Annual ROC Compliance" },
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

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
            style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}>
            📋 Annual ROC Compliance — Companies Act 2013 & LLP Act 2008
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">
            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Annual ROC Compliance
                <span className="block mt-2 text-sky-300">For Companies &amp; LLPs in India</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                File your <strong className="text-white">AOC-4, MGT-7</strong> for Private Limited Companies &amp; OPCs and{" "}
                <strong className="text-white">Form 11, Form 8</strong> for LLPs — on time, every year. Taxvio's CA &amp; CS
                team handles all annual MCA filings, Director's Report, board meeting minutes, and auditor appointment —
                100% online. Starting <strong className="text-white">₹2,499</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["✅ Zero Penalty Guarantee", "🔒 CA & CS Assisted", "⚡ Proactive Reminders", "📋 Director's Report Included"].map(t => (
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
                  <MessageCircle size={16} /> File ROC Returns Now
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Feature row */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {["AOC-4 Filing", "MGT-7 / MGT-7A", "Form 11 & Form 8", "Director's Report", "Board Minutes"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right — Quick deadline card ── */}
            <div className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-bold text-white text-sm">📅 Key Filing Deadlines</p>
                <p className="text-xs text-white/50 mt-0.5">All companies & LLPs — FY ending 31 March</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { form: "AGM", due: "By 30 September", entity: "Pvt Ltd / OPC / Sec 8", urgent: true },
                  { form: "AOC-4", due: "By 29 October", entity: "Pvt Ltd / OPC / Sec 8", urgent: true },
                  { form: "MGT-7 / 7A", due: "By 28 November", entity: "Pvt Ltd / OPC / Sec 8", urgent: false },
                  { form: "ADT-1", due: "Within 15 days of AGM", entity: "All Companies", urgent: false },
                  { form: "Form 11", due: "30 May every year", entity: "All LLPs", urgent: false },
                  { form: "Form 8", due: "30 October every year", entity: "All LLPs", urgent: false },
                  { form: "DIR-3 KYC", due: "30 September every year", entity: "All Directors", urgent: false },
                ].map(({ form, due, entity, urgent }) => (
                  <div key={form} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {urgent && <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />}
                      {!urgent && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />}
                      <div>
                        <p className="font-bold text-white text-xs">{form}</p>
                        <p className="text-white/45 text-[10px]">{entity}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${urgent ? "bg-red-500/20 text-red-300" : "bg-white/10 text-white/70"}`}>
                      {due}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-white text-xs font-bold">Starting Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold">₹2,499</p>
                    <p className="text-white/40 text-[10px] mt-0.5">LLP annual compliance</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(1,240+)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio ROC compliance statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "3,500+", label: "Returns Filed / Year" },
            { val: "0", label: "Penalties Incurred" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹2,499", label: "Starting Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ PRICING PLANS BY ENTITY ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Annual ROC compliance pricing for different entity types">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Choose Your Plan
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Annual ROC Compliance — Plans by Entity Type
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Select your entity type. All plans include deadline reminders, MCA filing, and acknowledgements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANS.map(({ entity, icon, price, badge, badgeColor, accentColor, headingColor, forms, due, href }) => (
              <div key={entity}
                className={`relative bg-white border-2 ${accentColor} rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-250 flex flex-col`}>
                {badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white px-3 py-1 rounded-full ${badgeColor} whitespace-nowrap`}>
                    {badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className={`font-extrabold text-sm mb-1 ${headingColor}`}>{entity}</h3>
                <p className="text-2xl font-extrabold text-gray-800 mb-4">{price}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {forms.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle size={10} className="text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl px-3 py-2 mb-4">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Due Dates</p>
                  <p className="text-[11px] text-gray-600 leading-snug">{due}</p>
                </div>

                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#00416a] hover:bg-[#003257] py-2.5 text-white text-xs font-bold transition-all active:scale-[0.97]">
                  <MessageCircle size={12} /> Get Started
                </a>
                <Link href={href}
                  className="flex items-center justify-center gap-1 mt-2 text-[10px] font-semibold text-[#00416a] hover:underline transition">
                  About {entity} <ArrowRight size={9} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PENALTY CALCULATOR VISUAL ══════ */}
      <section className="py-20 bg-white" aria-label="ROC filing late penalty calculator and scenarios">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Cost of Delay
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              What Does Late ROC Filing Really Cost?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              ₹100/day sounds small. It accumulates fast — and the non-financial consequences are far worse.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {PENALTY_SCENARIOS.map(({ scenario, forms, penalty, calc, color, icon }) => (
              <div key={scenario} className={`border rounded-2xl p-5 ${color}`}>
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-extrabold text-sm mb-1">{scenario}</p>
                <p className="text-xs opacity-70 mb-3">{forms}</p>
                <p className="text-xl font-extrabold">{penalty}</p>
                <p className="text-[10px] opacity-60 mt-0.5">{calc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-5">
            <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-800 text-sm mb-1">Section 164(2) Director Disqualification</p>
              <p className="text-red-700 text-xs leading-relaxed">
                If your company fails to file AOC-4 or MGT-7 for <strong>3 consecutive financial years</strong>, every
                director is automatically disqualified under Section 164(2) of the Companies Act 2013. Disqualified
                directors are <strong>banned from serving on any company's board for 5 years</strong> — and cannot sign
                MCA forms, open bank accounts on behalf of companies, or hold directorship in any entity during this
                period. The ROC also initiates strike-off proceedings against such companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ALL FORMS REFERENCE TABLE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Complete ROC forms reference table with due dates and penalties">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Forms Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Complete ROC Forms — Due Dates, Penalties &amp; Consequences
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Every MCA form your company or LLP must file — with exact deadlines and penalty details.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Form</th>
                  <th className="px-4 py-3.5 text-left font-bold">Purpose</th>
                  <th className="px-4 py-3.5 text-left font-bold">Entity</th>
                  <th className="px-4 py-3.5 text-left font-bold">Due Date</th>
                  <th className="px-4 py-3.5 text-left font-bold">Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {ALL_FORMS.map(({ form, fullName, entity, dueDate, penalty }, i) => (
                  <tr key={form} className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="px-4 py-3 font-extrabold text-[#00416a]">{form}</td>
                    <td className="px-4 py-3 text-gray-700">{fullName}</td>
                    <td className="px-4 py-3 text-gray-500">{entity}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium">{dueDate}</td>
                    <td className="px-4 py-3 font-bold text-red-600">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════ WHAT'S INCLUDED ══════ */}
      <section className="py-20 bg-white" aria-label="What is included in annual ROC compliance service">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in Taxvio's Annual ROC Compliance Service
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Not just form filing — complete annual compliance documentation handled end-to-end.
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

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Annual ROC compliance process with Taxvio">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step Annual ROC Compliance Process
          </h2>
          <div className="space-y-4">
            {STEPS.map(({ step, title, desc }) => (
              <div key={step}
                className="flex gap-5 items-start bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#00416a]/15 transition-all duration-200">
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

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-white" aria-label="Complete guide to annual ROC compliance in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              What is Annual ROC Compliance in India?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Every company incorporated under the <strong>Companies Act 2013</strong> and every LLP registered under the <strong>LLP Act 2008</strong> is legally required to file annual statutory returns with the <strong>Registrar of Companies (ROC)</strong> — an office under the Ministry of Corporate Affairs (MCA). This recurring obligation is called <em>annual ROC compliance</em>.
              </p>
              <p>
                Annual ROC compliance is not optional and cannot be skipped — even if the company or LLP had zero transactions during the year. The law treats incorporated entities as perpetual legal persons with ongoing disclosure obligations. Failure to meet these obligations triggers automatic financial penalties, potential director disqualification, and ultimately strike-off of the entity from the MCA register.
              </p>
              <p>
                For a <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Company</Link>, annual compliance consists of three core MCA filings: AOC-4 (financial statements), MGT-7 (annual return), and ADT-1 (auditor appointment) — plus the internal governance requirements of holding at least 4 board meetings and one AGM per year. For an <Link href="/serviceslist/roc/llp-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">LLP</Link>, the requirements are lighter: Form 11 (annual return) and Form 8 (statement of accounts and solvency), with no mandatory AGM or board meetings.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              AOC-4 — Filing Financial Statements with MCA
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                <strong>AOC-4</strong> is the form used to file a company's financial statements — balance sheet, profit &amp; loss account, cash flow statement (where applicable), and auditor's report — with the MCA. AOC-4 must be filed within <strong>30 days of the AGM</strong>. Since the AGM must be held within 6 months of the financial year end (i.e., by 30 September for companies with a 31 March year-end), the effective AOC-4 deadline is typically <strong>29 October</strong>.
              </p>
              <p>
                For companies required to file XBRL (eXtensible Business Reporting Language) financial statements — typically listed companies and companies with paid-up capital above ₹5 crore or turnover above ₹100 crore — AOC-4 must be filed in XBRL format. For other companies, the standard non-XBRL AOC-4 format applies. Taxvio handles both formats — XBRL tagging and mapping is done by our team from the audit-ready financial statements.
              </p>
              <p>
                For <Link href="/serviceslist/roc/opc-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">One Person Companies (OPCs)</Link>, the AOC-4 due date is different: it must be filed within <strong>180 days of the financial year end</strong> — by 27 September. This is one of the specific compliance relaxations for OPCs. OPCs are also not required to include a cash flow statement in their AOC-4 filing if their turnover is below ₹2 crore.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              MGT-7 Annual Return — What It Discloses and Why It Matters
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                <strong>MGT-7</strong> is the annual return form filed by Private Limited Companies, and <strong>MGT-7A</strong> is the simplified version for OPCs and small companies. Both forms must be filed within <strong>60 days of the AGM</strong> — typically by <strong>28 November</strong> for companies with a 31 March financial year end.
              </p>
              <p>
                The annual return discloses comprehensive information about the company: registered office address, principal business activities, details of associates and subsidiaries, share capital structure, pattern of shareholding, list of all directors (with their DIN, date of appointment, and designation), debenture trustees, details of meetings held and attended, remuneration of directors, certifications about compliance with all applicable laws, and details of penalties imposed. It is the primary disclosure document through which MCA tracks corporate governance.
              </p>
              <p>
                For companies with a paid-up capital above ₹10 crore or turnover above ₹50 crore, MGT-7 must be certified by a <strong>Company Secretary in Practice</strong> (not just filed by the company). This certification requirement is often overlooked by companies in this size bracket and leads to non-compliance penalties. Taxvio arranges CS certification as part of our annual compliance package for qualifying companies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              LLP Annual Compliance — Form 11 and Form 8 in Detail
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                <Link href="/serviceslist/roc/llp-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Limited Liability Partnerships (LLPs)</Link> have a simpler annual compliance structure compared to companies — no mandatory AGM, no mandatory board meetings, and no AOC-4/MGT-7. Instead, LLPs file two annual forms: <strong>Form 11</strong> and <strong>Form 8</strong>.
              </p>
              <p>
                <strong>Form 11</strong> (Annual Return of LLP) is due by <strong>30 May every year</strong>. It discloses the LLP's total partner count, designated partners, capital contributions by each partner, and any changes in partnership during the year. All LLPs — regardless of whether they conducted business or earned any income — must file Form 11. Late filing penalty: ₹100 per day with no upper cap.
              </p>
              <p>
                <strong>Form 8</strong> (Statement of Accounts and Solvency) is due by <strong>30 October every year</strong>. It contains the LLP's financial statements: balance sheet, income &amp; expenditure statement, and a solvency declaration by the designated partners. For LLPs with turnover above ₹40 lakh or contribution above ₹25 lakh, Form 8 must be signed by a <strong>Chartered Accountant</strong> after conducting a statutory audit. Below these thresholds, the designated partners can self-certify.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Director KYC (DIR-3 KYC) — The Often-Missed Annual Requirement
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Every individual who holds a <strong>Director Identification Number (DIN)</strong> — whether or not they are currently a director in any company — must complete annual KYC by filing <strong>DIR-3 KYC</strong> with MCA. The due date is <strong>30 September every year</strong>.
              </p>
              <p>
                If a director fails to file DIR-3 KYC, their DIN is <strong>deactivated</strong> by MCA. A deactivated DIN means the director cannot sign any MCA forms, cannot be listed as a director in any company filing, and their company's ROC filings will be rejected if they attempt to use the deactivated DIN. Reactivation requires filing DIR-3 KYC with a late fee of <strong>₹5,000</strong>.
              </p>
              <p>
                Taxvio tracks DIR-3 KYC deadlines for all directors in our client portfolio and proactively completes the filing before the 30 September deadline — ensuring DINs remain active and no MCA filing is blocked at a critical moment. This small filing is frequently overlooked because it appears unrelated to annual ROC compliance — but its consequences (DIN deactivation) are immediate and disruptive.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Clearing ROC Backlogs — Pending Filings &amp; MCA Amnesty Schemes
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Many companies and LLPs accumulate ROC filing backlogs — sometimes for years — due to business disruptions, founder transitions, or simply not knowing the deadlines. If your company has missed filings, the situation is recoverable but requires careful handling.
              </p>
              <p>
                Pending ROC returns can be filed at any time after the due date — with accumulated late fees of ₹100/day/form calculated from the original due date. For a company with 3 years of missing AOC-4 and MGT-7 filings, the accumulated penalty can reach ₹2–3 lakh. These must be paid at the time of filing and cannot be waived in normal circumstances.
              </p>
              <p>
                MCA periodically announces <strong>amnesty schemes</strong> — most recently the Companies Fresh Start Scheme (CFSS 2020) and LLP Settlement Scheme 2020 — that allow companies and LLPs to file pending returns with significantly reduced or waived late fees for a limited window. Taxvio monitors these windows and advises clients on the optimal time and strategy for clearing backlogs. We also handle the complete filing process — from calculating accumulated penalties to filing all pending forms in the correct sequence.
              </p>
              <p>
                If your company's directors have already been disqualified under Section 164(2), the path to remediation involves filing all pending returns (clearing the default), applying for restoration of DIN through appropriate legal channels, and restructuring the company's compliance going forward. Taxvio provides end-to-end support for this process — including coordination with lawyers where DIN restoration requires court intervention.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for annual ROC compliance">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why 1,200+ Companies Trust Taxvio for Annual ROC Compliance
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Annual compliance is recurring — the right partner saves you from penalties, disqualifications, and last-minute chaos every year.
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
      <section className="py-20 bg-white" aria-label="Client reviews for annual ROC compliance service">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted for Annual ROC Compliance Across India
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
      <section className="py-20 bg-gray-50" aria-label="Annual ROC compliance FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Annual ROC Compliance
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Annual ROC compliance services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Annual ROC Compliance Across India</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and handles annual ROC compliance for companies and LLPs across <strong>Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai, Bangalore</strong>, and pan-India — 100% online.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Khatauli", "Muzaffarnagar", "Meerut", "Noida", "Delhi NCR", "Ghaziabad", "Lucknow", "Jaipur", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata"].map(city => (
              <Link key={city} href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150">
                📍 {city}
              </Link>
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
              { title: "Pvt Ltd Registration", desc: "Incorporate your company — ₹6,999", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
              { title: "LLP Registration", desc: "Register your LLP — ₹5,999", href: "/serviceslist/roc/llp-formation", icon: "🤝" },
              { title: "Director Appointment / Resignation", desc: "DIR-12 ROC filing — ₹2,999", href: "/serviceslist/roc/director-appointment-resignation", icon: "👔" },
              { title: "Income Tax Filing (ITR-6)", desc: "Company ITR — ₹2,999", href: "/serviceslist/income-tax/itr-proprietor", icon: "💼" },
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
        aria-label="File your annual ROC compliance with Taxvio">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Deadline reminder box */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 grid sm:grid-cols-3 gap-4">
            {[
              { label: "AOC-4 Deadline", due: "29 October", color: "text-red-300" },
              { label: "MGT-7 Deadline", due: "28 November", color: "text-amber-300" },
              { label: "LLP Form 11", due: "30 May", color: "text-sky-300" },
            ].map(({ label, due, color }) => (
              <div key={label} className="text-center">
                <p className="text-white/60 text-xs">{label}</p>
                <p className={`font-extrabold text-lg ${color}`}>{due}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <TrendingUp size={12} className="text-sky-400" />
              3,500+ Returns Filed · Zero Penalties · Starting ₹2,499
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              File Your Annual ROC Returns —
              <span className="block mt-1 text-sky-300">On Time, Every Year</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              AOC-4, MGT-7, Form 11, Form 8, ADT-1, Director's Report, board minutes — all handled end-to-end
              by our CA &amp; CS team. 100% online, proactive reminders, zero penalties. Starting ₹2,499.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} /> File ROC Returns Now
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