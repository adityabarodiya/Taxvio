"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Shield, Users, Zap, Clock, FileText, AlertTriangle,
  Phone, MessageCircle, Star, AlertCircle, TrendingUp, UserPlus, UserMinus,
} from "lucide-react";

/* ─── Constants ────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I need help with Director Appointment / Resignation filing (DIR-12) for my company."
)}`;

/* ─── Service variants ─────────────────────────────────────────────────────── */
const SERVICES = [
  {
    type: "Appointment",
    icon: <UserPlus size={22} className="text-emerald-600" />,
    iconBg: "bg-emerald-50 border-emerald-100",
    badge: "Add Director",
    badgeColor: "bg-emerald-500",
    accentBar: "from-emerald-400 to-teal-500",
    title: "Director Appointment Filing",
    price: "₹2,999",
    form: "DIR-12 + DIR-2",
    deadline: "Within 30 days of board resolution",
    description: "Appoint a new director — Additional Director, Executive Director, or Independent Director — with complete board resolution drafting, DIR-2 consent letter, DIN verification, and DIR-12 MCA filing.",
    includes: [
      "DIN check & verification for incoming director",
      "DIR-2 consent letter drafting",
      "Board resolution for appointment",
      "DIR-12 filing with MCA",
      "MCA acknowledgement & SRN",
      "Register of Directors update guidance",
    ],
    docs: [
      "PAN & Aadhaar of new director",
      "Photograph of new director",
      "DSC of existing director (for filing)",
      "Board resolution (Taxvio drafts)",
    ],
  },
  {
    type: "Resignation",
    icon: <UserMinus size={22} className="text-rose-600" />,
    iconBg: "bg-rose-50 border-rose-100",
    badge: "Remove Director",
    badgeColor: "bg-rose-500",
    accentBar: "from-rose-400 to-pink-500",
    title: "Director Resignation Filing",
    price: "₹2,999",
    form: "DIR-12 + DIR-11 (optional)",
    deadline: "Within 30 days of resignation receipt",
    description: "Process a director's resignation with resignation letter drafting, board resolution, DIR-12 filing, and optional DIR-11 for the resigning director's self-protection on MCA.",
    includes: [
      "Resignation letter drafting",
      "Board resolution acknowledging resignation",
      "DIR-12 filing with MCA by the company",
      "DIR-11 filing by resigning director (optional)",
      "MCA acknowledgement & SRN",
      "Register of Directors update guidance",
    ],
    docs: [
      "DSC of existing/resigning director",
      "Written resignation letter (Taxvio drafts)",
      "Board resolution (Taxvio drafts)",
      "Date of resignation (as per letter)",
    ],
  },
];

/* ─── When you need director filing ───────────────────────────────────────── */
const SCENARIOS = [
  {
    icon: "🤝",
    title: "Adding a Co-Founder as Director",
    section: "Startup / Scale-Up",
    desc: "Bringing a new co-founder on board legally requires a formal DIR-12 appointment filing — handshake agreements and verbal commitments have no standing in company law without MCA registration.",
  },
  {
    icon: "💼",
    title: "Appointing a Professional Director",
    section: "Governance",
    desc: "Appointing an Independent Director, Professional Director, or nominee director (for investor representation) requires DIR-12 filing within 30 days of the board resolution.",
  },
  {
    icon: "🚪",
    title: "Director Exiting the Company",
    section: "Director Resignation",
    desc: "Whether voluntary resignation or planned exit, the departure must be formally recorded via DIR-12. Without filing, the exiting director remains liable for all company actions indefinitely.",
  },
  {
    icon: "📊",
    title: "Investor-Required Director Change",
    section: "Post-Investment",
    desc: "Investors commonly require a nominee director appointment as a condition of funding — typically a partner or associate from the investor's firm. DIR-12 must be filed within 30 days.",
  },
  {
    icon: "🔄",
    title: "Designation Change",
    section: "Role Change",
    desc: "Changing a director's designation — from Additional Director to Managing Director, or from Non-Executive to Executive Director — also requires DIR-12 filing to update MCA records.",
  },
  {
    icon: "⚖️",
    title: "Director Removed by Board / Shareholders",
    section: "Removal",
    desc: "Removal of a director under Section 169 (by shareholders) or automatic vacation under Section 167 requires DIR-12 filing within 30 days. Failure leaves the removed director on record.",
  },
];

/* ─── All relevant forms ───────────────────────────────────────────────────── */
const FORMS_TABLE = [
  {
    form: "DIR-12",
    purpose: "Notify ROC of director appointment, resignation, or removal",
    filedBy: "Company",
    deadline: "Within 30 days of the change",
    penalty: "₹100/day — no cap",
  },
  {
    form: "DIR-2",
    purpose: "Consent of incoming director to act as director",
    filedBy: "Attached to DIR-12",
    deadline: "Before appointment",
    penalty: "Appointment invalid without it",
  },
  {
    form: "DIR-11",
    purpose: "Resigning director's self-filing of resignation with MCA",
    filedBy: "Resigning Director",
    deadline: "Within 30 days of resignation",
    penalty: "₹100/day — optional but recommended",
  },
  {
    form: "DIR-3 KYC",
    purpose: "Annual KYC for all DIN holders",
    filedBy: "Director individually",
    deadline: "30 September every year",
    penalty: "₹5,000 — DIN deactivated",
  },
  {
    form: "MBP-1",
    purpose: "Director's disclosure of interest in other entities",
    filedBy: "Director to company (first board meeting of FY)",
    deadline: "First board meeting of every financial year",
    penalty: "Director liable for breach of fiduciary duty",
  },
  {
    form: "DIR-8",
    purpose: "Director's declaration of non-disqualification under Section 164",
    filedBy: "Director to company (annual)",
    deadline: "Before appointment and annually thereafter",
    penalty: "Appointment may be void if not obtained",
  },
];

/* ─── Legal risks of not filing ───────────────────────────────────────────── */
const RISKS = [
  {
    icon: "⚠️",
    title: "Exiting Director Remains Liable",
    color: "border-red-100 bg-red-50",
    iconColor: "text-red-500",
    desc: "Without DIR-12 filing, a resigned or removed director continues to appear as an active director on MCA records. They remain legally liable for all company actions — tax defaults, GST penalties, ROC penalties, and even criminal liability — until DIR-12 is filed.",
  },
  {
    icon: "🚫",
    title: "New Director Has No Legal Standing",
    color: "border-orange-100 bg-orange-50",
    iconColor: "text-orange-500",
    desc: "Without DIR-12, a new director's appointment is not recorded on MCA. They cannot sign any statutory documents, MCA forms, GST returns, or bank account forms as a director — their authority has no legal standing until the filing is complete.",
  },
  {
    icon: "💰",
    title: "Unlimited Daily Penalty",
    color: "border-amber-100 bg-amber-50",
    iconColor: "text-amber-500",
    desc: "DIR-12 late filing attracts ₹100 per day with no upper cap. A company that delays DIR-12 by 6 months faces ₹18,000 in penalties. Years of non-filing can lead to ₹50,000+ accumulated penalties that must be paid before the form is accepted.",
  },
  {
    icon: "🏦",
    title: "Bank Account and KYC Issues",
    color: "border-blue-100 bg-blue-50",
    iconColor: "text-blue-500",
    desc: "Banks periodically cross-verify company directorship with MCA data. Discrepancies between actual directors and MCA records cause account freezes, rejected transactions, and failed KYC verification — disrupting business operations significantly.",
  },
];

/* ─── Process steps ─────────────────────────────────────────────────────────── */
const STEPS_APPOINTMENT = [
  {
    step: "01",
    title: "DIN Check & Eligibility Verification",
    desc: "We check whether the incoming director holds a valid DIN, verify their disqualification status under Section 164, and confirm DIR-3 KYC is current — ensuring the appointment is legally valid before proceeding.",
  },
  {
    step: "02",
    title: "DIR-2 Consent Letter Drafting",
    desc: "DIR-2 (written consent to act as director) drafted and shared with the incoming director for signature. This must be obtained before the board resolution is passed — it is a prerequisite for a valid appointment.",
  },
  {
    step: "03",
    title: "Board Resolution Drafting",
    desc: "Board resolution for appointment drafted in the correct statutory format — specifying the category of directorship (Additional Director, Managing Director, Independent Director, etc.), effective date, and designation.",
  },
  {
    step: "04",
    title: "DIR-12 MCA Filing",
    desc: "DIR-12 form filed on MCA portal with DIR-2 attached, board resolution attached, and signed using an existing director's DSC. Filing completed within 30 days of the board resolution date.",
  },
  {
    step: "05",
    title: "MCA Acknowledgement & SRN Delivery",
    desc: "MCA acknowledgement downloaded and Service Request Number (SRN) noted. All documents delivered to you via WhatsApp — including the updated MCA company master data showing the new director.",
  },
];

const STEPS_RESIGNATION = [
  {
    step: "01",
    title: "Resignation Letter Drafting",
    desc: "A properly worded resignation letter drafted specifying the date of resignation, reason (optional), and addressed to the company's board. The resignation is effective from the date specified in the letter.",
  },
  {
    step: "02",
    title: "Board Resolution Acknowledging Resignation",
    desc: "Board resolution passed acknowledging the director's resignation and noting the effective date. This resolution is required as an attachment to DIR-12 and for updating the Register of Directors.",
  },
  {
    step: "03",
    title: "DIR-12 Filing by the Company",
    desc: "DIR-12 filed by the company on MCA within 30 days of receiving the resignation — with resignation letter and board resolution attached. Filed using remaining directors' DSC.",
  },
  {
    step: "04",
    title: "DIR-11 Filing by Resigning Director (Recommended)",
    desc: "DIR-11 filed by the resigning director independently on MCA to record their resignation — protecting them from future company liabilities if the company delays or refuses to file DIR-12.",
  },
  {
    step: "05",
    title: "MCA Acknowledgement & Updated Records",
    desc: "MCA acknowledgement and updated company master data delivered. The resigning director's status changes from 'Active' to 'Resigned' on MCA — providing clean evidence of their exit from the company.",
  },
];

/* ─── Director categories ───────────────────────────────────────────────────── */
const DIRECTOR_TYPES = [
  { type: "Managing Director (MD)", icon: "👑", desc: "Appointed by board — responsible for day-to-day management. Serves for max 5 years, renewable.", limit: "Max 1 per company" },
  { type: "Whole-Time / Executive Director", icon: "💼", desc: "Works full-time for the company in an executive capacity. Must be a natural person.", limit: "No fixed limit" },
  { type: "Additional Director", icon: "➕", desc: "Appointed by board between two AGMs — must be regularised at the next AGM or vacates office.", limit: "Max 15 directors total" },
  { type: "Independent Director", icon: "⚖️", desc: "No material relationship with the company. Mandatory for listed companies & certain Pvt Ltd companies. Max 2 consecutive terms of 5 years.", limit: "Min. ⅓ of board (listed)" },
  { type: "Nominee Director", icon: "🏦", desc: "Appointed by a shareholder (typically investor) or financial institution under the Articles of Association or investment agreement.", limit: "Per agreement terms" },
  { type: "Alternate Director", icon: "🔄", desc: "Substitutes for an absent director for 3+ months. Cannot be appointed if the original director is already in India.", limit: "One per absent director" },
];

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "Our investor required a nominee director appointment within 10 days of the term sheet. Taxvio completed the board resolution, DIR-2, and DIR-12 filing in 4 days. Extremely efficient.",
    name: "StartFast Technologies Pvt Ltd",
    location: "Noida",
  },
  {
    stars: 5,
    text: "I resigned as director from a company 6 months ago but the company never filed DIR-12. Taxvio guided me on DIR-11 self-filing and helped protect me from continued liability. Very knowledgeable team.",
    name: "Rajesh Sharma",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "We needed to add two directors and remove one as part of a restructuring. Taxvio handled all three DIR-12 filings simultaneously with correct board resolutions. Done in under a week.",
    name: "Verma Industries Pvt Ltd",
    location: "Muzaffarnagar",
  },
];

/* ─── Why Taxvio ────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  { icon: Users, title: "CA & CS Assisted", desc: "Every director filing reviewed by qualified Company Secretaries who know the nuances of Section 152, 164, 167, and 168 — the sections governing director appointments and exits." },
  { icon: Clock, title: "Filed Within 30 Days — Guaranteed", desc: "We track the 30-day window from the board resolution or resignation date and file DIR-12 on time — every time. Deadline alerts sent at Day 1, Day 20, and Day 28." },
  { icon: FileText, title: "Board Resolutions & Letters Drafted", desc: "We don't just file the form — we draft the board resolution, DIR-2 consent letter, and resignation letter in the correct statutory format." },
  { icon: Shield, title: "DIN & Disqualification Verification", desc: "Before any appointment, we verify the incoming director's DIN status, KYC completion, and disqualification status under Section 164 — preventing invalid appointments." },
  { icon: Zap, title: "100% Online — 3–5 Days", desc: "All document collection via WhatsApp or email. DIR-12 typically filed within 3–5 working days of receiving complete documents." },
  { icon: AlertTriangle, title: "DIR-11 Protection for Resigning Directors", desc: "We advise and process DIR-11 self-filing for resigning directors who want independent MCA evidence of their exit — protecting them from post-resignation company liabilities." },
];

/* ─── FAQs ──────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is DIR-12 and when must it be filed?",
    a: "DIR-12 is the MCA form used to notify the Registrar of Companies about director changes — appointment, resignation, removal, or change in designation. DIR-12 must be filed within 30 days of the change. Late filing attracts ₹100 per day with no upper cap.",
  },
  {
    q: "What is the procedure to appoint a new director in a Private Limited Company?",
    a: "To appoint a new director: (1) Obtain DIN for the new director if not already held. (2) Obtain the director's written consent in Form DIR-2. (3) Pass a board resolution appointing the director. (4) File DIR-12 with MCA within 30 days. (5) Update the Register of Directors. If the appointment is as Additional Director, it must be regularised at the next AGM.",
  },
  {
    q: "What is the procedure for a director to resign from a company?",
    a: "A director resigns by submitting a written resignation letter to the company. The company must file DIR-12 within 30 days. The resigning director can also independently file DIR-11 to protect themselves if the company fails to file DIR-12. The resignation is effective from the date specified in the letter or the date of DIR-12 filing, whichever is later.",
  },
  {
    q: "Can a company have only one director after a resignation?",
    a: "No. A Private Limited Company must always have a minimum of 2 directors. If a resignation would reduce the count below 2, the resignation cannot take effect until a replacement director is appointed. An OPC requires only 1 director — so the sole OPC director cannot resign without first appointing a new director.",
  },
  {
    q: "What is DIR-2 and why is it required?",
    a: "DIR-2 is the written consent letter that an incoming director gives to act as director. It must be obtained before the appointment board resolution is passed and attached to DIR-12. DIR-2 confirms the director is not disqualified under Section 164 and consents to their appointment.",
  },
  {
    q: "What is DIR-11 and when should a resigning director file it?",
    a: "DIR-11 is filed by a resigning director directly with MCA — independent of the company — to record their resignation. A director should file DIR-11 when concerned that the company may not file DIR-12 timely. It protects the resigning director from being held liable for company actions after their resignation date.",
  },
  {
    q: "What is the penalty for not filing DIR-12 within 30 days?",
    a: "The penalty is ₹100 per day from the date of the director change, with no upper cap. Without DIR-12, the director change is not legally recorded — the outgoing director remains on record and the incoming director has no legal standing in company filings.",
  },
  {
    q: "Can a disqualified director be appointed in a company?",
    a: "No. A person disqualified under Section 164 cannot be appointed as a director. Disqualifications include undischarged insolvency, conviction for certain offences, and automatic disqualification under Section 164(2) for being a director in companies that defaulted on annual ROC filings for 3 consecutive years. Taxvio verifies disqualification status before processing any appointment.",
  },
];

/* ─── FAQ Accordion ─────────────────────────────────────────────────────────── */
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

/* ─── Main Client Component ─────────────────────────────────────────────────── */
export default function DirectorFilingClient() {
  const [activeStep, setActiveStep] = useState<"appointment" | "resignation">("appointment");

  return (
    <main className="bg-white text-gray-800">

      {/* ══════ DEADLINE BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        ⚡ Director change? File <strong>DIR-12 within 30 days</strong> of board resolution or resignation | Penalty: <strong>₹100/day — no upper cap</strong> | Resigning directors: file <strong>DIR-11 independently</strong> to protect yourself
      </div>

      {/* ══════ HERO ══════ */}
      <section aria-label="Director Appointment and Resignation ROC Filing — Taxvio"
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
                { href: null, label: "Director Appointment / Resignation" },
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
            👔 DIR-12 Filing — Companies Act 2013 | Section 152 / 168
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">

            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Director Appointment &amp;
                <span className="block mt-2 text-sky-300">Resignation Filing — DIR-12</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                File <strong className="text-white">DIR-12</strong> for director appointment or resignation in your
                Private Limited Company or OPC — within the mandatory <strong className="text-white">30-day window</strong>.
                Taxvio's CA &amp; CS team handles board resolution drafting, DIR-2 consent letter, DIN verification,
                MCA filing, and DIR-11 protection for resigning directors.
                Starting <strong className="text-white">₹2,999</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["✅ Board Resolution Drafted", "🔒 DIN Verified", "⚡ Filed in 3–5 Days", "📋 DIR-11 Protection"].map(t => (
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
                  <MessageCircle size={16} /> File DIR-12 Now — ₹2,999
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Feature row */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {["DIR-12 MCA Filing", "Board Resolution", "DIR-2 Consent Letter", "DIR-11 (Resignation)", "DIN Verification"].map(t => (
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
                <p className="font-bold text-white text-sm">DIR-12 — Key Facts</p>
                <p className="text-xs text-white/50 mt-0.5">Both appointment & resignation</p>
              </div>
              <div className="p-5 space-y-3.5">
                {[
                  { label: "Form Required", val: "DIR-12 (+ DIR-2 / DIR-11)" },
                  { label: "Filing Deadline", val: "Within 30 days" },
                  { label: "Late Penalty", val: "₹100/day — no cap" },
                  { label: "Processing Time", val: "3–5 working days" },
                  { label: "Min. Directors (Pvt Ltd)", val: "2 at all times" },
                  { label: "Max Directors (Any Co.)", val: "15 directors" },
                  { label: "DIN Required", val: "Yes — for all directors" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between gap-2">
                    <span className="text-white/60 text-xs">{label}</span>
                    <span className="font-bold text-white text-xs text-right">{val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-xl px-4 py-3 flex items-center justify-between mb-3"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-white text-xs font-bold">All-Inclusive Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold">₹2,999</p>
                    <p className="text-white/40 text-[10px] mt-0.5">Per director change event</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(634+)</span>
                  </div>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 text-white text-sm font-bold transition-all active:scale-[0.97]">
                  <MessageCircle size={14} /> Get Started on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS STRIP ══════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio director filing statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "634+", label: "Director Changes Filed" },
            { val: "3–5", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹2,999", label: "All-Inclusive Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ DUAL SERVICE CARDS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Director appointment and resignation filing services">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Choose Your Service
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Appointment or Resignation — Both at ₹2,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Each service includes all documentation drafting, MCA filing, and acknowledgement — no hidden extras.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(({ type, icon, iconBg, badge, badgeColor, accentBar, title, price, form, deadline, description, includes, docs }) => (
              <div key={type}
                className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-250 flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${accentBar}`} />

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${iconBg}`}>
                    {icon}
                  </div>
                  <span className={`text-[10px] font-bold text-white px-3 py-1 rounded-full ${badgeColor}`}>{badge}</span>
                </div>

                <h3 className="font-extrabold text-gray-800 text-lg mb-1">{title}</h3>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">{price}</p>
                <p className="text-[11px] text-gray-400 mb-4">Form: <strong className="text-gray-600">{form}</strong> · Deadline: <strong className="text-gray-600">{deadline}</strong></p>
                <p className="text-xs text-gray-600 leading-relaxed mb-5">{description}</p>

                <div className="mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">What's Included</p>
                  <ul className="space-y-1.5">
                    {includes.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle size={10} className="text-green-500 shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 mb-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Documents You Provide</p>
                  <ul className="space-y-1">
                    {docs.map(d => (
                      <li key={d} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="text-[#00416a] shrink-0">→</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full rounded-xl bg-[#00416a] hover:bg-[#003257] py-3 text-white text-sm font-bold transition-all active:scale-[0.97]">
                  <MessageCircle size={14} /> File {type} — {price}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHEN YOU NEED THIS SERVICE ══════ */}
      <section className="py-20 bg-white" aria-label="Scenarios requiring director filing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Common Scenarios
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            When Do You Need a Director Filing?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            Any change in directorship — planned or forced — requires DIR-12 within 30 days. These are the most common triggers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCENARIOS.map(({ icon, title, section, desc }) => (
              <div key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
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

      {/* ══════ LEGAL RISKS OF NOT FILING ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Legal risks of not filing DIR-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Filing Matters
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              What Happens If You Don't File DIR-12?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Skipping DIR-12 creates legal and financial consequences for both the company and the affected directors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {RISKS.map(({ icon, title, color, iconColor, desc }) => (
              <div key={title} className={`border rounded-2xl p-6 ${color}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`text-2xl shrink-0 ${iconColor}`}>{icon}</span>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug">{title}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STEP PROCESS — TABBED ══════ */}
      <section className="py-20 bg-white" aria-label="Director filing step by step process">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-8">
            Step-by-Step Filing Process
          </h2>

          {/* Toggle */}
          <div className="flex rounded-xl bg-gray-100 p-1 mb-8 max-w-xs mx-auto">
            {(["appointment", "resignation"] as const).map(tab => (
              <button key={tab} onClick={() => setActiveStep(tab)}
                className={`flex-1 py-2 rounded-lg text-xs font-bold capitalize transition-all duration-200
                  ${activeStep === tab ? "bg-white text-[#00416a] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {(activeStep === "appointment" ? STEPS_APPOINTMENT : STEPS_RESIGNATION).map(({ step, title, desc }) => (
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

      {/* ══════ FORMS REFERENCE TABLE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Director related MCA forms reference">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Forms Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              All Director-Related MCA Forms — Quick Reference
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Form</th>
                  <th className="px-4 py-3.5 text-left font-bold">Purpose</th>
                  <th className="px-4 py-3.5 text-left font-bold">Filed By</th>
                  <th className="px-4 py-3.5 text-left font-bold">Deadline</th>
                  <th className="px-4 py-3.5 text-left font-bold">Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {FORMS_TABLE.map(({ form, purpose, filedBy, deadline, penalty }, i) => (
                  <tr key={form} className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="px-4 py-3 font-extrabold text-[#00416a]">{form}</td>
                    <td className="px-4 py-3 text-gray-700">{purpose}</td>
                    <td className="px-4 py-3 text-gray-500">{filedBy}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium">{deadline}</td>
                    <td className="px-4 py-3 font-bold text-red-600">{penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════ DIRECTOR TYPES ══════ */}
      <section className="py-20 bg-white" aria-label="Types of directors in Indian companies">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Director Categories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Types of Directors Under Indian Company Law
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              The category of director determines the appointment procedure, term limits, and DIR-12 requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIRECTOR_TYPES.map(({ type, icon, desc, limit }) => (
              <div key={type}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">{type}</h3>
                    <span className="text-[10px] font-semibold text-[#00416a] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full mt-1 inline-block">{limit}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Complete guide to director appointment and resignation in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Director Appointment in India — Legal Framework & Process
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Under the <strong>Companies Act 2013</strong>, the appointment of directors is governed primarily by Sections 149 to 165. Every director must hold a valid <strong>Director Identification Number (DIN)</strong> issued by MCA — a unique lifetime identifier that tracks a person's directorship history across all companies. No person can act as a director without a DIN, and no company can appoint a director without verifying their DIN and disqualification status.
              </p>
              <p>
                The appointment process begins with the board passing a resolution appointing the new director — as an <em>Additional Director</em> (if between two AGMs) or as a regular director (if at an AGM). An Additional Director vacates office at the next AGM unless regularised by shareholders through a general meeting resolution. For executive roles like Managing Director or Whole-Time Director, a more detailed appointment agreement is required under Schedule V, particularly if remuneration exceeds specified limits.
              </p>
              <p>
                Once the board resolution is passed, the company must file <strong>DIR-12 with MCA within 30 days</strong>. The form requires the incoming director's DIN, their consent (DIR-2), the date of appointment, their designation, and the mode of appointment (board resolution or shareholder resolution). Failure to file within 30 days triggers ₹100/day penalties with no cap.
              </p>
              <p>
                For <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Companies</Link>, the Articles of Association often contain specific provisions about director appointment — including nominee director rights for investors, first director appointments, and rotation requirements. Taxvio reviews the AOA before processing any appointment to ensure the process is compliant with both the Companies Act and the company's own constitutional documents.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Director Resignation — What the Law Requires & How to Protect Yourself
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A director's right to resign is protected under <strong>Section 168 of the Companies Act 2013</strong>. A director can resign at any time by giving written notice to the company. The resignation takes effect from the date specified in the resignation letter — or if no date is specified, from the date the company receives the letter.
              </p>
              <p>
                The company must take note of the resignation at a board meeting and file <strong>DIR-12 with MCA within 30 days</strong> of receiving the resignation letter. Until DIR-12 is filed, the resigning director remains listed as an active director on MCA master data — and continues to bear legal liability for all company actions, including tax defaults, GST penalties, ROC late fees, and in extreme cases, criminal liability under various statutes.
              </p>
              <p>
                The <strong>DIR-11 self-filing</strong> mechanism is a critical protection for resigning directors. Under Rule 17 of the Companies (Appointment and Qualification of Directors) Rules 2014, a resigning director can file DIR-11 directly with MCA — independent of the company — within 30 days of their resignation. This creates an MCA-registered record of their resignation that cannot be disputed by the company. If the company later delays or refuses to file DIR-12, the director has evidence of their exit date on MCA's own records.
              </p>
              <p>
                Taxvio strongly recommends DIR-11 self-filing for any director resigning from a company where there is a dispute, a deadlock, or concern that remaining promoters may not cooperate with DIR-12 filing. The protection it offers — particularly against post-resignation tax and regulatory liability — is significant.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Director Disqualification Under Section 164 — What It Means & How to Avoid It
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Section 164 of the Companies Act 2013 lists the grounds on which a person is disqualified from being appointed or continuing as a director. The most widely encountered disqualification is under <strong>Section 164(2)</strong> — the automatic disqualification of directors in companies that have defaulted in filing <Link href="/serviceslist/roc/annual-roc-compliance" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">annual returns (AOC-4 or MGT-7) for three consecutive financial years</Link>.
              </p>
              <p>
                When a company defaults under Section 164(2), every director — regardless of whether they were aware of the default — is automatically disqualified. The ROC uploads disqualification notices on MCA, DINs are flagged as disqualified, and the affected individuals cannot be appointed as directors in any other company for five years. This is perhaps the most severe consequence of routine annual compliance failures — turning a ₹100/day penalty into a career-level event for directors.
              </p>
              <p>
                Other disqualifications include undischarged insolvency, conviction for offences involving moral turpitude, court or tribunal orders prohibiting directorship, and failure to pay calls on shares. Taxvio verifies disqualification status via MCA's database before processing any new director appointment — preventing the appointment of a disqualified person (which would make the appointment void and expose the company to additional penalties).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Director Changes During Investor Funding — What Founders Need to Know
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Investor funding rounds almost always involve changes to a company's board structure. Angel investors and venture capital firms typically require <strong>nominee director appointments</strong> as a condition of investment — a right enshrined in the Shareholder Agreement or Investment Agreement and reflected in an amendment to the company's Articles of Association.
              </p>
              <p>
                The nominee director appointment must be completed — including DIR-12 filing — before or shortly after the funding is disbursed. Investors' legal teams often include DIR-12 acknowledgement as a condition precedent or a closing deliverable in the transaction documentation. Delays in DIR-12 filing can hold up fund disbursement or trigger breach of conditions under the investment agreement.
              </p>
              <p>
                Beyond nominee appointments, pre-investment restructuring often involves: converting Additional Directors to regular directors, appointing an Independent Director (required for board composition under certain investment terms), and sometimes removing existing directors whose presence is a concern for investors. Taxvio handles all these changes simultaneously — coordinating multiple DIR-12 filings with the required board and shareholder resolutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-white" aria-label="Why choose Taxvio for director filing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Directors &amp; Companies Trust Taxvio for DIR-12 Filing
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Director filings are time-sensitive with significant legal consequences. Experience and speed both matter.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
      <section className="py-20 bg-gray-50" aria-label="Client reviews for director ROC filing service">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted for Director Filings Across India
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ stars, text, name, location }) => (
              <div key={name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
      <section className="py-20 bg-white" aria-label="Director appointment resignation FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Director Appointment &amp; Resignation
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Director filing services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Director Filing Services Across India</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and handles DIR-12 filings for companies and LLPs across <strong>Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai, Bangalore</strong>, and pan-India — 100% online.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Khatauli", "Muzaffarnagar", "Meerut", "Noida", "Delhi NCR", "Ghaziabad", "Lucknow", "Jaipur", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata"].map(city => (
              <Link key={city} href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150">
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Related ROC and compliance services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Explore More — Related Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Annual ROC Compliance", desc: "AOC-4, MGT-7 annual filing — ₹3,999", href: "/serviceslist/roc/annual-roc-compliance", icon: "📋" },
              { title: "Pvt Ltd Registration", desc: "Incorporate your company — ₹6,999", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
              { title: "Company Name Change", desc: "RUN + MOA alteration — ₹4,999", href: "/serviceslist/roc/company-name-change", icon: "✏️" },
              { title: "Authorized Capital Increase", desc: "SH-7 filing — ₹3,999", href: "/serviceslist/roc/authorized-capital-increase", icon: "📈" },
            ].map(({ title, desc, href, icon }) => (
              <Link key={title} href={href}
                className="group flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200">
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
        aria-label="File DIR-12 director appointment resignation with Taxvio">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* 30-day reminder */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">⚡ 30-Day Filing Window</p>
              <p className="text-white/65 text-xs mt-0.5">
                Director change happened? File <strong className="text-white">DIR-12 within 30 days</strong>.
                Every day of delay = <strong className="text-white">₹100 penalty</strong> — no upper cap.
              </p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]">
              <MessageCircle size={13} /> File DIR-12 Now
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <TrendingUp size={12} className="text-sky-400" />
              634+ Director Changes Filed · 4.9★ Rating · Starting ₹2,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              File Your Director Appointment
              <span className="block mt-1 text-sky-300">or Resignation — DIR-12 in 3–5 Days</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Board resolution drafting, DIR-2 consent letter, DIN verification, DIR-12 MCA filing, and DIR-11 protection
              for resigning directors — all handled end-to-end by our CA &amp; CS team. Starting ₹2,999. 100% online.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} /> File DIR-12 — ₹2,999
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
              <span className="flex items-center gap-1.5"><Zap size={12} /> 3–5 Day Processing</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> Mon–Sat · 9 AM–7 PM</span>
            </div>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}