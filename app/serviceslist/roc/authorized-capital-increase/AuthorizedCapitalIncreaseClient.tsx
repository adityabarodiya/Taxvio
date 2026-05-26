// app/serviceslist/roc/authorized-capital-increase/AuthorizedCapitalIncreaseClient.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Shield,
  Users,
  Zap,
  Clock,
  FileText,
  Building2,
  Phone,
  MessageCircle,
  Star,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Search,
  Layers,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I want to increase the authorised share capital of my company. Please guide me for SH-7 filing."
)}`;

/* ─── Use cases ─────────────────────────────────────────────────────────────── */
const WHEN_NEEDED = [
  {
    icon: "💸",
    title: "Fundraising or Investor Entry",
    section: "Equity Raise",
    desc: "Before issuing new shares to angel investors, strategic investors, or existing promoters, the company must ensure its authorised capital is sufficient for the proposed allotment.",
  },
  {
    icon: "📈",
    title: "Rights Issue to Existing Shareholders",
    section: "Shareholder Funding",
    desc: "If your company is raising funds from existing shareholders through a rights issue, authorised capital must be increased first if the new allotment crosses the current MOA limit.",
  },
  {
    icon: "🎁",
    title: "Bonus Share Issue",
    section: "Capitalisation",
    desc: "A bonus issue increases paid-up share capital. If the existing authorised capital is not enough to accommodate bonus shares, SH-7 filing is required before the bonus allotment.",
  },
  {
    icon: "👥",
    title: "ESOP Pool Expansion",
    section: "Employee Equity",
    desc: "Startups creating or expanding an ESOP pool often need additional authorised capital so future employee stock option exercises can be converted into equity shares.",
  },
  {
    icon: "🤝",
    title: "Merger / Acquisition Consideration",
    section: "Corporate Restructuring",
    desc: "When shares are issued as consideration under a merger, acquisition, or business transfer arrangement, authorised capital must support the post-transaction share structure.",
  },
  {
    icon: "🏦",
    title: "Loan Conversion into Equity",
    section: "Debt to Equity",
    desc: "If unsecured loans, CCDs, or other instruments are being converted into equity, the company may need to increase authorised capital before filing the allotment return.",
  },
];

/* ─── What's included ───────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  {
    icon: "🔍",
    title: "MOA & AOA Review",
    desc: "We review your Capital Clause and Articles of Association to confirm whether the company is already authorised to increase share capital or whether AOA alteration is needed first.",
  },
  {
    icon: "📋",
    title: "Board Resolution Drafting",
    desc: "Proper Board Resolution drafted for approving the proposed capital increase, calling the general meeting, approving notice and authorising a director or professional to file ROC forms.",
  },
  {
    icon: "🧾",
    title: "EGM Notice & Explanatory Statement",
    desc: "EGM notice, agenda and explanatory statement drafted with the exact proposed capital structure, revised Capital Clause and shareholder approval language.",
  },
  {
    icon: "✍️",
    title: "Ordinary / Special Resolution",
    desc: "Shareholder resolution drafted based on your case — ordinary resolution for MOA capital increase, or special resolution if Articles alteration is also required.",
  },
  {
    icon: "🏛",
    title: "Form SH-7 Filing with ROC",
    desc: "Complete SH-7 filing on MCA portal with altered MOA, certified resolutions, DSC authentication, professional certification, ROC fee and stamp duty coordination.",
  },
  {
    icon: "📦",
    title: "Post-Filing Compliance Pack",
    desc: "You receive altered MOA, challan, SRN acknowledgement, filing proof and practical guidance for next steps like share allotment, PAS-3, rights issue or private placement.",
  },
];

/* ─── Process steps ─────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Share Capital Requirement Analysis",
    desc: "Share your current authorised capital, paid-up capital and proposed issue plan. We calculate the exact revised authorised capital required so you do not overpay government fee or stamp duty unnecessarily.",
  },
  {
    step: "02",
    title: "MOA / AOA Verification",
    desc: "We verify the Capital Clause in MOA and capital alteration power in AOA. If the AOA already authorises capital increase, the process is simpler. If not, AOA amendment and MGT-14 may be required.",
  },
  {
    step: "03",
    title: "Board Meeting Documentation",
    desc: "Board Resolution, meeting notice and agenda are drafted. The Board approves the proposal, fixes date/time of EGM, approves the draft altered MOA clause and authorises filing of forms.",
  },
  {
    step: "04",
    title: "Shareholder Approval in General Meeting",
    desc: "Shareholders pass the required resolution in EGM or AGM. For a standard authorised capital increase, ordinary resolution is generally sufficient if AOA permits it.",
  },
  {
    step: "05",
    title: "SH-7 Preparation, Stamp Duty & ROC Fee",
    desc: "Form SH-7 is prepared with new capital break-up, altered MOA, certified resolution and attachments. We calculate MCA fee and state-wise stamp duty before submission.",
  },
  {
    step: "06",
    title: "ROC Filing Confirmation & Next-Step Advisory",
    desc: "After SH-7 submission, Taxvio shares SRN, challan and filing proof. We also guide you on the next allotment process — PAS-3, rights issue, private placement, ESOP or bonus issue as applicable.",
  },
];

/* ─── Key distinctions ─────────────────────────────────────────────────────── */
const CAPITAL_COMPARISON = [
  {
    point: "Meaning",
    authorised: "Maximum share capital company can issue",
    paidup: "Capital actually issued and paid by shareholders",
    issued: "Shares offered/allotted out of authorised capital",
  },
  {
    point: "Shown In",
    authorised: "MOA Capital Clause",
    paidup: "Balance sheet & MCA master data",
    issued: "Register of members & PAS-3 filings",
  },
  {
    point: "Increases By",
    authorised: "SH-7 filing after shareholder approval",
    paidup: "Actual allotment of shares",
    issued: "Board/shareholder-approved allotment",
  },
  {
    point: "Cash Inflow?",
    authorised: "No cash comes in automatically",
    paidup: "Yes, if shares are issued for cash",
    issued: "Depends on mode of allotment",
  },
  {
    point: "Common Use",
    authorised: "Preparing capacity for future share issue",
    paidup: "Reflecting actual owner contribution",
    issued: "Executing rights issue/private placement",
  },
  {
    point: "ROC Form",
    authorised: "SH-7",
    paidup: "PAS-3 after allotment",
    issued: "PAS-3 / other event-based forms",
  },
];

/* ─── Compliance points ────────────────────────────────────────────────────── */
const COMPLIANCE_POINTS = [
  {
    icon: "⏱️",
    title: "SH-7 Filing Due Date",
    tag: "30 Days",
    badgeColor: "bg-red-500",
    desc: "Form SH-7 must be filed with ROC within 30 days from the date of capital alteration. Delayed filing can attract additional fees and penalties.",
  },
  {
    icon: "📑",
    title: "Altered MOA Attachment",
    tag: "Mandatory",
    badgeColor: "bg-blue-500",
    desc: "The revised Capital Clause of the Memorandum of Association must be attached with SH-7. Incorrect clause drafting can lead to ROC resubmission.",
  },
  {
    icon: "🖊️",
    title: "DSC Requirement",
    tag: "Director DSC",
    badgeColor: "bg-violet-500",
    desc: "SH-7 must be signed using the Digital Signature Certificate of an authorised director or manager and certified by a practising professional where applicable.",
  },
  {
    icon: "💰",
    title: "Stamp Duty & ROC Fee",
    tag: "Variable",
    badgeColor: "bg-emerald-500",
    desc: "Government cost depends on the increased authorised capital and state of incorporation. Taxvio calculates the exact amount before filing.",
  },
];

/* ─── Documents required ───────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "Company Documents",
    icon: "🏢",
    items: [
      "Certificate of Incorporation",
      "Latest MOA and AOA",
      "Company PAN",
      "Current authorised and paid-up capital details",
      "MCA master data / CIN",
    ],
  },
  {
    category: "Capital Increase Details",
    icon: "📈",
    items: [
      "Proposed revised authorised capital",
      "Face value of shares",
      "Class of shares: equity / preference",
      "Reason for increase: fundraising, rights issue, ESOP, bonus etc.",
      "Proposed allotment plan, if already decided",
    ],
  },
  {
    category: "Director & Filing Details",
    icon: "🪪",
    items: [
      "Director DSC",
      "Director DIN and contact details",
      "Board Resolution — drafted by Taxvio",
      "EGM notice and shareholder resolution — drafted by Taxvio",
      "Professional certification — arranged by Taxvio",
    ],
  },
];

/* ─── Mistakes to avoid ────────────────────────────────────────────────────── */
const MISTAKES = [
  {
    icon: "🚫",
    title: "Issuing Shares Before Increasing Authorised Capital",
    desc: "A company cannot validly issue shares beyond the authorised capital stated in its MOA. Increase the limit first, then complete allotment and PAS-3 filing.",
  },
  {
    icon: "⚠️",
    title: "Ignoring AOA Restrictions",
    desc: "Some Articles contain specific clauses on capital alteration. If AOA does not permit increase or contains restrictive language, it must be amended before or along with the capital increase.",
  },
  {
    icon: "📉",
    title: "Over-Increasing Capital Without Planning Fee Impact",
    desc: "Government fees and stamp duty rise with authorised capital. Increasing far beyond actual business needs may unnecessarily lock you into higher statutory costs.",
  },
  {
    icon: "🧩",
    title: "Confusing Authorised Capital with Paid-Up Capital",
    desc: "SH-7 only increases the legal ceiling. It does not bring money into the company. Actual paid-up capital increases only after share allotment and receipt of consideration.",
  },
];

/* ─── Why Taxvio ───────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  {
    icon: Users,
    title: "CA & CS Assisted",
    desc: "Every capital increase filing is reviewed by qualified CA/CS professionals — from resolution drafting to final SH-7 upload.",
  },
  {
    icon: Search,
    title: "Capital Structure Review",
    desc: "We do not blindly file SH-7. We review your existing capital, planned allotment and fee impact to recommend a practical revised limit.",
  },
  {
    icon: Zap,
    title: "Fast 3–7 Day Turnaround",
    desc: "For standard cases with complete documents and DSC access, Taxvio completes drafting, approval support and SH-7 filing quickly.",
  },
  {
    icon: FileText,
    title: "Clean Drafting",
    desc: "Board resolution, EGM notice, explanatory statement, altered MOA clause and certified extracts are drafted in ROC-ready format.",
  },
  {
    icon: Building2,
    title: "Private Ltd, OPC & Public Ltd",
    desc: "We assist Private Limited Companies, One Person Companies and Public Limited Companies with capital alteration filings.",
  },
  {
    icon: Shield,
    title: "All Next Steps Covered",
    desc: "After capital increase, we guide you on PAS-3, rights issue, private placement, bonus issue, ESOP or other allotment compliance.",
  },
];

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We had to increase authorised capital before onboarding investors. Taxvio calculated the exact capital required and filed SH-7 without any ROC resubmission.",
    name: "Nikhil Sharma",
    location: "Noida",
  },
  {
    stars: 5,
    text: "Our startup needed capital increase before a rights issue. Taxvio drafted all resolutions and explained the difference between authorised and paid-up capital clearly.",
    name: "Megha Bansal",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "Very smooth process. We shared MOA, AOA and DSC access on WhatsApp. SH-7 was filed quickly and we received all challans and altered MOA in one folder.",
    name: "Amit Tyagi",
    location: "Muzaffarnagar",
  },
];

/* ─── FAQs ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is authorised share capital?",
    a: "Authorised share capital is the maximum share capital that a company is legally permitted to issue as per the Capital Clause of its Memorandum of Association. For example, if a company has authorised capital of ₹1,00,000 divided into 10,000 equity shares of ₹10 each, it cannot issue shares beyond that limit unless the authorised capital is increased through shareholder approval and Form SH-7 filing.",
  },
  {
    q: "When should a company increase authorised share capital?",
    a: "A company should increase authorised share capital before issuing shares beyond the existing MOA limit. Common situations include investor funding, rights issue, preferential allotment, private placement, ESOP exercise, bonus issue, merger consideration, or conversion of loans/CCDs into equity.",
  },
  {
    q: "Which MCA form is required for authorised capital increase?",
    a: "Form SH-7 is filed with the Registrar of Companies for alteration of share capital. For increase in authorised share capital, SH-7 is filed with the altered MOA, certified resolution, capital details, applicable ROC fee and stamp duty. In some cases, MGT-14 may also be required if a special resolution or AOA alteration is involved.",
  },
  {
    q: "Is ordinary resolution enough for increasing authorised share capital?",
    a: "Generally yes, if the Articles of Association already authorise the company to increase share capital. In that case, shareholders pass an ordinary resolution in general meeting. However, if the Articles need alteration or contain restrictive clauses, a special resolution under Section 14 may be required.",
  },
  {
    q: "Is MGT-14 mandatory for every authorised capital increase?",
    a: "No. MGT-14 is not mandatory merely because authorised capital is increased through an ordinary resolution. MGT-14 becomes relevant where a special resolution is passed, Articles of Association are altered, or another Section 117 filing trigger applies. Taxvio checks this before filing to avoid unnecessary forms.",
  },
  {
    q: "Does increasing authorised capital increase paid-up capital?",
    a: "No. Authorised capital is only the maximum ceiling. Paid-up capital increases only when shares are actually allotted and consideration is received. After SH-7, the company may still need to complete allotment compliance such as board approval, valuation, offer letters and PAS-3 depending on the issue route.",
  },
  {
    q: "What is the due date for SH-7 filing?",
    a: "Form SH-7 must be filed within 30 days from the date of alteration of share capital. Practically, this means within 30 days from the date of the shareholder resolution approving the authorised capital increase.",
  },
  {
    q: "How much does it cost to increase authorised share capital?",
    a: "Taxvio's professional fee starts at ₹2,999. Government fees and stamp duty are additional and depend on the amount of increase, state of incorporation and company category. We calculate the exact payable amount before filing so there are no surprises.",
  },
  {
    q: "Can an OPC increase authorised share capital?",
    a: "Yes. A One Person Company can increase its authorised share capital, subject to the Companies Act and its MOA/AOA. However, OPCs should also consider applicable paid-up capital and conversion implications when planning major capital increases.",
  },
  {
    q: "What happens after SH-7 filing?",
    a: "After SH-7 filing, the company's authorised capital limit stands increased once the form is taken on record. The company should maintain the altered MOA, filing challan and SRN proof. If the purpose was to issue shares, the company must separately complete the share allotment process and file PAS-3 where applicable.",
  },
];

/* ─── FAQ accordion ────────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="font-bold text-gray-800 text-sm leading-snug flex items-start gap-3"
          itemProp="name"
        >
          <span className="w-5 h-5 rounded-full bg-[#00416a] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
            Q
          </span>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-[#00416a] mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="px-6 pb-5 pl-14"
          itemScope
          itemType="https://schema.org/Answer"
          itemProp="acceptedAnswer"
        >
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Client Component ─────────────────────────────────────────────────────── */
export default function AuthorizedCapitalIncreaseClient() {
  return (
    <main className="bg-white text-gray-800">
      {/* ══════ DEADLINE BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        ⚡ Increasing authorised capital? File{" "}
        <strong>Form SH-7</strong> with ROC within <strong>30 days</strong> of
        capital alteration | Taxvio handles drafting, stamp duty and MCA filing
      </div>

      {/* ══════ HERO ══════ */}
      <section
        aria-label="Increase Authorised Share Capital — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/roc", label: "ROC Compliance" },
                { href: null, label: "Authorised Capital Increase" },
              ].map(({ href, label }, i, arr) => (
                <li key={label} className="flex items-center gap-1.5">
                  {href ? (
                    <Link href={href} className="hover:text-white/80 transition">
                      {label}
                    </Link>
                  ) : (
                    <span className="text-white/75 font-medium">{label}</span>
                  )}
                  {i < arr.length - 1 && (
                    <ChevronRight size={12} className="text-white/25" />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
            style={{
              background: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.25)",
            }}
          >
            📈 Authorised Capital Increase — SH-7 ROC Filing
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Increase Authorised
                <span className="block mt-2 text-sky-300">
                  Share Capital Online
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Need to issue more shares for funding, rights issue, ESOP,
                bonus issue or promoter infusion? Taxvio's CA &amp; CS team
                handles <strong className="text-white">MOA/AOA review</strong>,
                board resolution, shareholder approval,{" "}
                <strong className="text-white">Form SH-7 filing</strong>,
                stamp duty calculation and ROC coordination — end to end.
                Starting <strong className="text-white">₹2,999</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "✅ SH-7 ROC Filing",
                  "📋 Board & EGM Drafting",
                  "💰 Stamp Duty Calculation",
                  "⚡ 3–7 Day Process",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold rounded-full px-3 py-1.5"
                    style={{
                      background: "rgba(255,255,255,0.09)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  <MessageCircle size={16} /> Increase Capital — ₹2,999
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {[
                  "MOA Capital Clause Update",
                  "Ordinary / Special Resolution",
                  "SH-7 + Stamp Duty",
                  "PAS-3 Advisory",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Facts Card */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <p className="font-bold text-white text-sm">
                  Capital Increase — Key Facts
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Transparent pricing · Government fee at actuals
                </p>
              </div>

              <div className="p-5 space-y-3.5">
                {[
                  { label: "ROC Form", val: "SH-7" },
                  { label: "Legal Basis", val: "Sec. 61 & 64" },
                  { label: "Approval", val: "Shareholder Resolution" },
                  { label: "Due Date", val: "30 days" },
                  { label: "MGT-14?", val: "Case-specific" },
                  { label: "Paid-up Capital", val: "Not automatic" },
                  { label: "Timeline", val: "3–7 working days" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{label}</span>
                    <span className="font-bold text-white text-xs text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div
                  className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div>
                    <p className="text-white text-xs font-bold">
                      Professional Fee
                    </p>
                    <p className="text-sky-300 text-2xl font-extrabold">
                      ₹2,999
                    </p>
                    <p className="text-white/40 text-[10px] mt-0.5">
                      + Govt. fee & stamp duty
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(210+)</span>
                  </div>
                </div>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 text-white text-sm font-bold transition-all active:scale-[0.97] mt-3"
                >
                  <MessageCircle size={14} /> Get Started on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio capital filing statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "210+", label: "Capital Filings" },
            { val: "3–7", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹2,999", label: "Professional Fee" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">
                {val}
              </p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WHEN NEEDED ══════ */}
      <section className="py-20 bg-gray-50" aria-label="When authorised capital increase is required">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              When Required
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            When Should You Increase Authorised Share Capital?
          </h2>

          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            If your company is planning to issue shares beyond the current MOA
            limit, increase authorised capital first — then proceed with
            allotment compliance.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHEN_NEEDED.map(({ icon, title, section, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#00416a] mb-0.5">
                      {section}
                    </p>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHAT'S INCLUDED ══════ */}
      <section className="py-20 bg-white" aria-label="What is included in authorised capital increase service">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹2,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Drafting, resolutions, altered MOA and SH-7 filing — handled by
              Taxvio's CA &amp; CS team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPARISON TABLE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Authorised capital vs paid-up capital comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Capital Basics
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Authorised Capital vs Paid-Up Capital vs Issued Capital
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Understanding this difference avoids one of the most common ROC
              mistakes: assuming SH-7 itself brings money into the company.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Parameter</th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    Authorised Capital
                  </th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    Paid-Up Capital
                  </th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    Issued Capital
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {CAPITAL_COMPARISON.map(
                  ({ point, authorised, paidup, issued }, i) => (
                    <tr
                      key={point}
                      className={`hover:bg-blue-50/20 transition-colors ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                      }`}
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700">
                        {point}
                      </td>
                      <td className="px-4 py-3 text-gray-700 font-medium">
                        {authorised}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{paidup}</td>
                      <td className="px-4 py-3 text-gray-600">{issued}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Quick rule:</strong> Increase authorised capital through{" "}
              <strong>SH-7</strong> before issuing shares beyond the existing
              limit. After that, use the correct allotment route — rights issue,
              preferential allotment, private placement, ESOP exercise or bonus
              issue — and file <strong>PAS-3</strong> where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ 6 STEP PROCESS ══════ */}
      <section className="py-20 bg-white" aria-label="Authorised capital increase process with Taxvio">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step SH-7 Filing Process
          </h2>

          <div className="space-y-4">
            {STEPS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-5 items-start bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#00416a]/15 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-md">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPLIANCE POINTS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="SH-7 filing compliance points">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Compliance Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Critical Compliance Points for SH-7 Filing
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              ROC filings are sequence-sensitive. The correct resolution,
              attachments and fee calculation matter as much as the form itself.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {COMPLIANCE_POINTS.map(({ icon, title, tag, badgeColor, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-xl shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">
                      {title}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 ${badgeColor}`}
                  >
                    {tag}
                  </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-red-50 border border-red-100 rounded-2xl p-5 flex items-start gap-3">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Important:</strong> If the purpose of capital increase is
              to issue shares immediately, do not stop after SH-7. Share
              allotment has separate compliance requirements — valuation,
              offer/acceptance documents, board approval, share certificates and{" "}
              <strong>PAS-3</strong> filing depending on the route.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS ══════ */}
      <section className="py-20 bg-white" aria-label="Documents required for authorised capital increase">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for Authorised Capital Increase
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Share basic documents on WhatsApp or email. Taxvio drafts the
              resolutions and altered MOA for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {DOCS.map(({ category, icon, items }) => (
              <div
                key={category}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#00416a] flex items-center justify-center text-base">
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <CheckCircle
                        size={10}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ MISTAKES ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Common mistakes in authorised capital increase">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Avoid These Mistakes
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Common Errors That Cause ROC Resubmission
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              A clean capital increase filing saves time, professional cost and
              investor closing delays.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {MISTAKES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-red-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-4">
            <Layers size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#00416a]">Taxvio tip:</strong> Increase
              authorised capital to a realistic level based on your next 12–24
              months of fundraising, ESOP and promoter infusion plans. Too low
              means repeated SH-7 filings; too high can increase government cost
              unnecessarily.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-white" aria-label="Complete guide to authorised capital increase in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Increase Authorised Share Capital in India — Complete Guide
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                <strong>Authorised share capital</strong> is the maximum share
                capital a company can legally issue to its shareholders. It is
                mentioned in the Capital Clause of the Memorandum of Association
                and acts as the upper ceiling for share allotment. For example,
                if a company has authorised capital of ₹1 lakh divided into
                10,000 equity shares of ₹10 each, the company cannot issue
                equity shares beyond that limit until it increases authorised
                capital through the prescribed ROC process.
              </p>
              <p>
                This increase is commonly required before investor funding,
                promoter contribution, rights issue, private placement,
                preferential allotment, bonus issue, ESOP pool expansion or
                conversion of debt into equity. It is especially important for
                startups and growing private companies because funding rounds
                often require new shares to be issued quickly. If authorised
                capital is insufficient at the time of closing, the investment
                process can get delayed until the MOA capital clause is amended
                and Form SH-7 is filed.
              </p>
              <p>
                The key point founders must understand is that increasing
                authorised capital does not automatically increase paid-up
                capital and does not bring money into the company. It only
                increases the legal capacity to issue shares. Actual paid-up
                capital increases later, when the company allots shares and
                receives consideration. Therefore, authorised capital increase is
                often the first step in a larger capital transaction — followed
                by rights issue, private placement, preferential allotment, ESOP
                exercise or bonus allotment compliance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Legal Procedure for Increasing Authorised Capital
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The procedure begins with checking whether the company's{" "}
                <strong>Articles of Association</strong> authorise alteration of
                share capital. Most modern AOA formats contain this power, but
                older companies or companies with customised investor articles
                may have restrictive clauses. If the AOA already permits
                increase, the company can proceed by calling a board meeting and
                then placing the matter before shareholders.
              </p>
              <p>
                The Board of Directors first approves the proposal, the draft
                altered capital clause, and the notice for general meeting. The
                shareholders then pass the required resolution in an AGM or EGM.
                In a standard case, an <strong>ordinary resolution</strong> is
                generally sufficient for increasing authorised share capital
                under Section 61, provided the AOA authorises it. However, if
                the Articles also need amendment, a{" "}
                <strong>special resolution</strong> under Section 14 may be
                required, and MGT-14 filing may become applicable.
              </p>
              <p>
                After shareholder approval, the company files{" "}
                <strong>Form SH-7</strong> with ROC within 30 days, attaching
                the altered MOA, certified resolution and other supporting
                documents. Government fee and stamp duty are paid online through
                the MCA portal. Once filing is completed, the company should
                maintain the challan, SRN acknowledgement and altered MOA in its
                statutory records.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              SH-7 Filing vs PAS-3 Filing — Do Not Confuse the Two
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                <strong>SH-7</strong> and <strong>PAS-3</strong> are often
                confused because both relate to share capital, but they serve
                completely different purposes. SH-7 is filed for alteration of
                authorised share capital — it increases the ceiling in the MOA.
                PAS-3 is filed after actual allotment of shares — it reports the
                increase in issued and paid-up share capital.
              </p>
              <p>
                Suppose your company currently has authorised capital of ₹1 lakh
                and paid-up capital of ₹1 lakh. You want to issue shares worth
                ₹10 lakh to investors. First, you must increase authorised
                capital to at least ₹10 lakh or more through shareholder
                approval and SH-7 filing. Only after that can you complete the
                share issue route and file PAS-3 for the allotment.
              </p>
              <p>
                This sequencing matters. If shares are allotted before there is
                enough authorised capital, the allotment may become defective
                and require corrective filings, professional certification and
                potentially investor-level documentation corrections. Taxvio
                plans the filing sequence properly so your capital increase,
                allotment and ROC records remain aligned.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              How Much Authorised Capital Should You Increase?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                One of the most practical questions is: how much authorised
                capital should be increased? The answer depends on your
                immediate share issue plan and future capital needs. Increasing
                it only to the minimum required amount may save government fee
                today but can force another SH-7 filing during the next
                fundraising round. Increasing it too high may unnecessarily
                increase statutory cost.
              </p>
              <p>
                A sensible approach is to estimate the next 12–24 months of
                planned share issuances: investor allotment, promoter infusion,
                ESOP pool, bonus issue, conversion instruments and any
                restructuring transaction. The revised authorised capital should
                provide enough headroom for these events without being
                excessive. Taxvio helps calculate the practical capital limit
                before drafting documents.
              </p>
              <p>
                Companies should also consider the face value and class of
                shares. If the company has equity shares of ₹10 each and wants
                to introduce preference shares, the altered capital clause must
                reflect the correct break-up between equity and preference
                shares. Incorrect capital break-up in SH-7 can lead to
                resubmission or future allotment mismatch.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Post-Increase Checklist — What to Do After SH-7 Filing
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                After SH-7 is filed, the company should update its internal
                statutory records and maintain the altered MOA with the new
                Capital Clause. The Board should ensure that all future
                allotment documents use the revised authorised capital. If the
                company is moving ahead with fundraising, the next step is to
                execute the correct allotment route and prepare PAS-3 filing.
              </p>
              <p>
                For a rights issue, offer letters, renunciation rights,
                acceptance records and board allotment resolution may be needed.
                For private placement, valuation, offer letter, bank account
                trail and PAS-4/PAS-5 records can be relevant. For ESOPs, the
                company must ensure its ESOP scheme and option pool are approved
                and that share certificates are issued after exercise and
                allotment. For bonus shares, reserves, shareholder approval and
                bonus allotment records must be maintained.
              </p>
              <p>
                Taxvio provides next-step advisory with every authorised capital
                increase filing so founders do not stop midway. If your goal is
                investor funding, we can also assist with valuation support,
                rights issue, private placement, PAS-3 filing, share
                certificates and register updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for SH-7 filing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Companies Trust Taxvio for Capital Increase Filing
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Professional-grade ROC filing at startup-friendly pricing — 100%
              online, no office visit required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#00416a]" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-20 bg-white" aria-label="Client reviews for authorised capital increase">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Companies That Increased Capital with Taxvio
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ stars, text, name, location }) => (
              <div
                key={name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-xs leading-relaxed mb-5 italic">
                  "{text}"
                </p>
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

      {/* ══════ FAQ ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Authorised capital increase FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Authorised Capital Increase
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Authorised capital increase services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">
              Authorised Capital Increase Services Across India
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in{" "}
            <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong> and
            provides online SH-7 filing and authorised share capital increase
            services for companies across{" "}
            <strong>
              Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai,
              Bangalore
            </strong>
            , and all of India. Our process is 100% online — documents,
            approvals and updates are handled through WhatsApp and email.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Khatauli",
              "Muzaffarnagar",
              "Meerut",
              "Noida",
              "Delhi NCR",
              "Ghaziabad",
              "Lucknow",
              "Jaipur",
              "Mumbai",
              "Bangalore",
              "Hyderabad",
              "Chennai",
              "Pune",
              "Surat",
            ].map((city) => (
              <Link
                key={city}
                href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150"
              >
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Related ROC compliance services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">
              Explore More — Related Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Private Limited Registration",
                desc: "Incorporate a Pvt Ltd — ₹6,999",
                href: "/serviceslist/roc/private-limited-formation",
                icon: "🏛",
              },
              {
                title: "Annual ROC Compliance",
                desc: "AOC-4, MGT-7 filing — ₹3,999",
                href: "/serviceslist/roc/annual-roc-compliance",
                icon: "📋",
              },
              {
                title: "Company Name Change",
                desc: "INC-24 name change filing",
                href: "/company-name-change",
                icon: "✏️",
              },
              {
                title: "GST Registration",
                desc: "GSTIN in 3–7 days — ₹1,499",
                href: "/serviceslist/gst/gst-registration",
                icon: "🧾",
              },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs group-hover:text-[#00416a] transition">
                    {title}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5 leading-snug">
                    {desc}
                  </p>
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
        aria-label="Increase authorised share capital with Taxvio"
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">
                ⚡ Planning Share Allotment?
              </p>
              <p className="text-white/65 text-xs mt-0.5">
                Increase authorised capital first, then proceed with{" "}
                <strong className="text-white">PAS-3 allotment filing</strong>.
                Taxvio can handle both.
              </p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]"
            >
              <MessageCircle size={13} /> Start SH-7 Filing
            </a>
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <TrendingUp size={12} className="text-sky-400" />
              210+ Capital Filings · 4.9★ Rating · Starting ₹2,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Increase Your Authorised Capital —
              <span className="block mt-1 text-sky-300">
                SH-7 Filing Starting ₹2,999
              </span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              MOA/AOA review, board resolution, EGM notice, shareholder
              resolution, altered MOA, stamp duty calculation and SH-7 ROC
              filing — all handled end-to-end by Taxvio's CA &amp; CS team.
              100% online, fast and compliant.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <MessageCircle size={16} /> Increase Capital — ₹2,999
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                Free Consultation <ArrowRight size={15} />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <Phone size={15} /> Call Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Shield size={12} /> 100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} /> CA &amp; CS Assisted
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={12} /> Fast Processing
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> Mon–Sat · 9 AM–7 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}