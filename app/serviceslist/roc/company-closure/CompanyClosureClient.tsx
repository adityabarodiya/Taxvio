// app/company-closure/CompanyClosureClient.tsx
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
  XCircle,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I want to close my company through STK-2 strike off. Please guide me."
)}`;

/* ─── Who should close ───────────────────────────────────────────────────────── */
const WHO_SHOULD_CLOSE = [
  {
    icon: "💤",
    title: "Dormant or Defunct Companies",
    section: "No Business Activity",
    desc: "Companies incorporated but never started operations, or companies that ceased all business activity years ago and have no transactions, clients or employees — the most common strike-off candidates.",
  },
  {
    icon: "🚫",
    title: "Failed Startups",
    section: "Idea Did Not Work Out",
    desc: "Founders who incorporated a company, tested a business idea and moved on — but are still paying annual ROC compliance fees, CA fees and incurring escalating late-filing penalties.",
  },
  {
    icon: "🔄",
    title: "Business Restructuring",
    section: "Consolidation",
    desc: "Groups restructuring operations into a single entity often need to close shell or subsidiary companies that have become redundant after mergers, business transfers or operational consolidation.",
  },
  {
    icon: "💼",
    title: "Freelancers Who Incorporated Too Early",
    section: "Back to Proprietorship",
    desc: "Solo professionals who registered a private limited company or OPC prematurely and are now carrying ROC compliance burden without corporate-level revenue to justify the cost.",
  },
  {
    icon: "📉",
    title: "Companies with Accumulated Penalties",
    section: "Compliance Reset",
    desc: "Companies with years of missed annual filings and mounting ROC penalty notices — a clean strike-off with all filings cleared can resolve accumulated compliance burden permanently.",
  },
  {
    icon: "🧹",
    title: "Promoters Exiting Business",
    section: "Clean Exit",
    desc: "Founders stepping back or retiring who want to formally dissolve the company rather than leave it as an unmanaged corporate entity with ongoing filing obligations and DIN implications.",
  },
];

/* ─── Strike off vs winding up ───────────────────────────────────────────────── */
const CLOSURE_COMPARISON = [
  {
    point: "Legal Route",
    strikeoff: "Section 248 — Administrative",
    winding: "Section 59 / NCLT — Judicial",
  },
  {
    point: "Eligibility",
    strikeoff: "Dormant / NIL asset companies",
    winding: "Companies with assets or disputes",
  },
  {
    point: "Assets & Liabilities",
    strikeoff: "Must be NIL before filing",
    winding: "Liquidator realises and settles",
  },
  {
    point: "Bank Account",
    strikeoff: "Must be closed before STK-2",
    winding: "Liquidator operates and closes",
  },
  {
    point: "MCA Form",
    strikeoff: "STK-2",
    winding: "CAA-1 / NCLT petition",
  },
  {
    point: "Timeline",
    strikeoff: "3–6 months",
    winding: "1–3 years or more",
  },
  {
    point: "Cost",
    strikeoff: "Low — starting ₹4,999",
    winding: "High — liquidator fees, NCLT",
  },
  {
    point: "Shareholder Vote",
    strikeoff: "Special resolution or 75% consent",
    winding: "Special resolution",
  },
  {
    point: "Public Notice",
    strikeoff: "Official Gazette, 30-day window",
    winding: "Extensive public notices",
  },
  {
    point: "Suitable For",
    strikeoff: "Most SMEs, startups, OPCs",
    winding: "Companies with active assets",
  },
];

/* ─── What's included ────────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  {
    icon: "🔍",
    title: "Pre-Closure Compliance Audit",
    desc: "We review all pending MCA filings, income tax returns, GST returns and TDS returns to identify what must be cleared before STK-2 can be filed without ROC objection.",
  },
  {
    icon: "📋",
    title: "Board Resolution Drafting",
    desc: "Board resolution proposing company closure, authorising special resolution process and approving the statement of accounts — professionally drafted in ROC-ready format.",
  },
  {
    icon: "📜",
    title: "Special Resolution / Member Consent",
    desc: "Special resolution or written consent of 75%+ members approving the strike-off application — drafted and prepared by Taxvio's CS team including proper meeting documentation.",
  },
  {
    icon: "🖊️",
    title: "Indemnity Bond & Affidavit",
    desc: "Indemnity bond (on stamp paper) and affidavit from directors declaring NIL liabilities, no pending proceedings and no pending tax dues — drafted by Taxvio's team.",
  },
  {
    icon: "🧾",
    title: "Statement of Accounts Preparation",
    desc: "Statement of accounts certified by a CA showing NIL assets and liabilities — not older than 30 days from date of STK-2 application. Prepared and certified by Taxvio.",
  },
  {
    icon: "🏛",
    title: "STK-2 MCA Filing",
    desc: "Complete Form STK-2 filing on the MCA portal with all attachments, DSC authentication, professional certification and ROC coordination through to the Strike Off Order.",
  },
];

/* ─── Process steps ─────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Pre-Closure Assessment",
    desc: "Share your company's CIN, incorporation date and current status. Taxvio audits pending ROC filings, ITRs, GST, TDS and bank status to create a comprehensive pre-closure clearance list — so there are no surprises after STK-2 is filed.",
  },
  {
    step: "02",
    title: "Pending Compliance Clearance",
    desc: "All pending annual filings (AOC-4, MGT-7/MGT-7A), income tax returns, GST returns and TDS returns are filed and cleared. Any outstanding ROC penalties are addressed. This step is mandatory — ROC will reject STK-2 if filings are outstanding.",
  },
  {
    step: "03",
    title: "Bank Account Closure",
    desc: "The company's current bank account must be formally closed before STK-2 is filed. Any remaining balance must be transferred to shareholders or utilised to settle liabilities. Bank closure letter is obtained and retained as evidence.",
  },
  {
    step: "04",
    title: "Board Meeting & Special Resolution",
    desc: "Board meeting convened. Board Resolution approving closure application passed. Special resolution of shareholders (or written consent of 75%+ members) obtained approving the application to strike off.",
  },
  {
    step: "05",
    title: "Indemnity Bond, Affidavit & Statement of Accounts",
    desc: "Directors execute the indemnity bond on stamp paper and affidavit before a notary or executive magistrate. CA-certified statement of accounts (not older than 30 days) is prepared. All documents compiled for filing.",
  },
  {
    step: "06",
    title: "STK-2 Filing & Gazette Notification",
    desc: "Form STK-2 filed with ROC. MCA publishes the strike-off notice in the Official Gazette with a 30-day objection window. If no objections, ROC issues the Strike Off Order removing the company from the Register of Companies.",
  },
];

/* ─── Pre-closure clearance checklist ───────────────────────────────────────── */
const PRE_CLOSURE = [
  {
    category: "MCA / ROC Filings",
    icon: "🏛",
    badgeColor: "bg-red-500",
    priority: "Mandatory",
    items: [
      "AOC-4 — all pending financial years",
      "MGT-7 / MGT-7A — all pending financial years",
      "ADT-1 — auditor appointment, if pending",
      "INC-20A — commencement declaration, if not filed",
      "Any other event-based forms pending on MCA",
    ],
  },
  {
    category: "Tax Filings",
    icon: "🧾",
    badgeColor: "bg-orange-500",
    priority: "Mandatory",
    items: [
      "ITR-6 — income tax returns for all years",
      "GST returns (GSTR-1 / GSTR-3B) — all periods",
      "GST cancellation / surrender of GSTIN",
      "TDS returns (26Q / 24Q) for all quarters",
      "Tax clearance certificate if applicable",
    ],
  },
  {
    category: "Financial Closure",
    icon: "🏦",
    badgeColor: "bg-blue-500",
    priority: "Mandatory",
    items: [
      "Company current bank account formally closed",
      "Bank closure letter obtained and preserved",
      "All outstanding liabilities settled",
      "Loans, creditors, salary dues — cleared",
      "NIL balance statement of accounts prepared by CA",
    ],
  },
  {
    category: "Other Registrations",
    icon: "📋",
    badgeColor: "bg-purple-500",
    priority: "As Applicable",
    items: [
      "GST registration cancelled before or alongside STK-2",
      "Udyam / MSME registration deactivated",
      "Trade License / professional tax — informed",
      "Import Export Code — surrender if active",
      "EPF / ESIC deregistration if applicable",
    ],
  },
];

/* ─── Documents required ─────────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "Company Documents",
    icon: "🏢",
    items: [
      "Certificate of Incorporation",
      "MOA and AOA",
      "Company PAN and TAN",
      "CIN and MCA login credentials",
      "All filed AOC-4 and MGT-7 acknowledgements",
    ],
  },
  {
    category: "Director Details",
    icon: "🪪",
    items: [
      "PAN and Aadhaar of all directors",
      "DIN of all directors",
      "DSC (Digital Signature Certificate) of majority director",
      "Notarised affidavit from directors",
      "Indemnity bond (stamp paper) — drafted by Taxvio",
    ],
  },
  {
    category: "Accounts & Bank",
    icon: "🏦",
    items: [
      "CA-certified NIL statement of accounts (not older than 30 days)",
      "Bank account closure letter / confirmation",
      "Latest bank statement showing zero balance",
      "Special resolution / member consent — drafted by Taxvio",
      "Board resolution — drafted by Taxvio",
    ],
  },
];

/* ─── Ineligibility — when STK-2 cannot be filed ──────────────────────────── */
const INELIGIBLE = [
  {
    icon: "⚖️",
    title: "Active Prosecution or Legal Proceedings",
    desc: "A company facing prosecution under any law, or with an active case in NCLT, tribunal, or court, is not eligible for voluntary strike off under Section 249 of the Companies Act.",
  },
  {
    icon: "🏦",
    title: "Active Bank Account or Pending Loans",
    desc: "Strike off cannot proceed if the company still has an open bank account with any balance, or outstanding loans, borrowings, or dues to financial institutions or creditors.",
  },
  {
    icon: "📉",
    title: "Pending ROC Show Cause Notices",
    desc: "If the ROC has issued a Section 248(1) notice to compulsorily strike off the company for non-filing, the company must respond to the notice, clear pending filings and apply for voluntary strike off.",
  },
  {
    icon: "🔄",
    title: "Company Changed Business in Last 3 Months",
    desc: "A company that changed its registered name, shifted its registered office, disposed of property or altered its share capital in the preceding three months is not eligible to apply for strike off during that period.",
  },
];

/* ─── Testimonials ───────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We had a dormant company from a failed startup and years of missed filings. Taxvio first cleared all pending ROC filings and then handled the STK-2 strike off cleanly. Total relief.",
    name: "Ankit Gupta",
    location: "Noida",
  },
  {
    stars: 5,
    text: "I was paying CA fees for a company I had not used in 4 years. Taxvio handled everything from bank closure to indemnity bond to MCA filing. Clean exit in 5 months.",
    name: "Shikha Agarwal",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "Our group needed to close two shell companies post-merger. Taxvio did both closures in parallel — all documents, statement of accounts and STK-2 filing managed end to end.",
    name: "Rahul Chaudhary",
    location: "Muzaffarnagar",
  },
];

/* ─── Why Taxvio ─────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  {
    icon: Users,
    title: "CA & CS Assisted Closure",
    desc: "Every company closure is managed by qualified Chartered Accountants and Company Secretaries — affidavits, indemnity bonds, statement of accounts and STK-2 filing are handled professionally.",
  },
  {
    icon: Search,
    title: "Pre-Closure Audit Included",
    desc: "We identify all pending filings and dues before starting — so your STK-2 is not rejected by ROC mid-process due to outstanding compliance.",
  },
  {
    icon: FileText,
    title: "Complete Document Drafting",
    desc: "Board resolution, special resolution, indemnity bond, affidavit, statement of accounts — all drafted by Taxvio. You sign and submit.",
  },
  {
    icon: Zap,
    title: "100% Online Process",
    desc: "Share documents on WhatsApp or email. No office visit required. We handle all MCA correspondence, DSC authentication and ROC follow-up.",
  },
  {
    icon: RefreshCw,
    title: "Pending Filing Clearance Support",
    desc: "We can assist with clearing pending AOC-4, MGT-7A, ITR-6, GST returns and TDS returns before STK-2 filing — a common blocker for closure applications.",
  },
  {
    icon: Shield,
    title: "Director Liability Protection",
    desc: "Properly drafted indemnity bond and affidavit protect directors from future claims. We ensure documentation is complete and legally sound before filing.",
  },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How can I close a Private Limited Company in India?",
    a: "A Private Limited Company can be closed voluntarily through the Strike Off route by filing Form STK-2 with the ROC under Section 248(2) of the Companies Act 2013. Requirements include NIL assets and liabilities, closed bank account, cleared pending filings, board resolution, special resolution or 75%+ member consent, indemnity bond, affidavit from directors, and a CA-certified statement of accounts not older than 30 days.",
  },
  {
    q: "What is Form STK-2 and who files it?",
    a: "Form STK-2 is the application filed with the Registrar of Companies to apply for voluntary strike off under Section 248(2). It is filed by the company through a majority of its directors. It must be digitally signed by a majority of directors and certified by a Company Secretary or Chartered Accountant in practice. Supporting documents include the special resolution, statement of accounts, indemnity bond and affidavit.",
  },
  {
    q: "What is the difference between strike off and winding up?",
    a: "Strike off under Section 248 is an administrative closure process — fast, low-cost, and suitable for dormant companies with NIL assets. The company must clear all assets and liabilities before filing STK-2. Winding up under Section 59 or NCLT involves a formal liquidation process where a liquidator is appointed to realise assets, settle creditors and distribute surplus. For most small companies, startups and OPCs, the strike off route is simpler and preferred.",
  },
  {
    q: "Is there a waiting period before a company can apply for strike off?",
    a: "A company is eligible for voluntary strike off if it has not commenced business within one year of incorporation, or has not been carrying on any business or operation for two immediately preceding financial years. The company must also not have made any application for dormant status. Additionally, the company must not have changed its name, registered office, disposed of property or altered share capital within the three months immediately preceding the application.",
  },
  {
    q: "Must all pending ROC filings be cleared before filing STK-2?",
    a: "Yes. All pending annual filings — AOC-4, MGT-7/MGT-7A, ADT-1, INC-20A and any event-based forms — must be filed and taken on record by ROC before STK-2 is submitted. The ROC routinely rejects strike-off applications where pending filings are outstanding. Taxvio conducts a pre-closure compliance audit before initiating the process.",
  },
  {
    q: "Does the company need to cancel GST before applying for closure?",
    a: "Yes, the GSTIN should be cancelled or surrendered before or in parallel with the company closure process. All pending GST returns must be filed before cancellation. An active GSTIN on a struck-off company creates a mismatch in government records and may attract compliance notices.",
  },
  {
    q: "What is the indemnity bond in STK-2?",
    a: "The indemnity bond is a document executed by all directors on stamp paper, declaring that the company has no pending liabilities, legal proceedings, dues to government authorities or creditors, and that the directors shall be personally liable for any liability that surfaces after the strike-off. It must be executed before a notary or magistrate and attached to the STK-2 application.",
  },
  {
    q: "How long does the company closure process take?",
    a: "After STK-2 is filed with ROC, MCA publishes a notice in the Official Gazette with a 30-day objection window. If there are no objections, the ROC issues the Strike Off Order. Total timeline including pre-closure compliance clearance, bank closure, document preparation and MCA processing is typically 3–6 months from start to final order.",
  },
  {
    q: "Can an OPC be closed through STK-2?",
    a: "Yes. An OPC can be closed through the STK-2 strike-off route. Since an OPC has only one member, the special resolution is the written consent of the sole member. The sole director executes the indemnity bond and affidavit. The process is otherwise similar to a Private Limited Company closure.",
  },
  {
    q: "What happens to directors' DIN after company is struck off?",
    a: "After the company is struck off, the DIN of directors remains active and can be used for directorships in other companies. However, if a director's DIN has an active disqualification order linked to non-filing by the struck-off company, that must be resolved through the CFSS or CODS scheme before the DIN becomes fully operational.",
  },
];

/* ─── FAQ accordion ──────────────────────────────────────────────────────────── */
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
          <p
            className="text-gray-600 text-xs leading-relaxed"
            itemProp="text"
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Client Component ───────────────────────────────────────────────────────── */
export default function CompanyClosureClient() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════ ALERT BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        ⚡ Closing a company? Clear <strong>all pending ROC filings, ITR &amp; GST returns</strong> before STK-2 |
        Incomplete compliance = ROC rejection | Taxvio handles pre-closure clearance end to end
      </div>

      {/* ══════ HERO ══════ */}
      <section
        aria-label="Company Closure Strike Off India — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#fff 1px,transparent 1px)",
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
                { href: null, label: "Company Closure" },
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

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
            style={{
              background: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.25)",
            }}
          >
            🔒 Company Closure — Section 248 Strike Off · Form STK-2
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">

            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Company Closure
                <span className="block mt-2 text-sky-300">
                  STK-2 Strike Off India
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Close your{" "}
                <strong className="text-white">
                  Private Limited Company, OPC or LLP
                </strong>{" "}
                legally with MCA. Taxvio's CA &amp; CS team handles pre-closure
                compliance audit, pending filing clearance,{" "}
                <strong className="text-white">indemnity bond &amp; affidavit</strong>,
                statement of accounts, and{" "}
                <strong className="text-white">Form STK-2 MCA filing</strong>{" "}
                — end to end. Starting{" "}
                <strong className="text-white">₹4,999</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "✅ Pre-Closure Audit",
                  "📋 Indemnity Bond Drafting",
                  "🔒 STK-2 MCA Filing",
                  "⚡ Clean Exit Process",
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

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  <MessageCircle size={16} /> Close Company — ₹4,999
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Quick trust row */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {[
                  "Section 248 Strike Off",
                  "NIL Assets Verification",
                  "Indemnity Bond & Affidavit",
                  "STK-2 + Gazette Notice",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right — Key Facts Card ── */}
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
                  Company Closure — Key Facts
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Transparent pricing · Govt. fees at actuals
                </p>
              </div>

              <div className="p-5 space-y-3.5">
                {[
                  { label: "Applicable To", val: "Pvt Ltd, OPC, LLP" },
                  { label: "Legal Section", val: "Section 248(2)" },
                  { label: "MCA Form", val: "Form STK-2" },
                  { label: "Approval Required", val: "75%+ member consent" },
                  { label: "Assets/Liabilities", val: "Must be NIL" },
                  { label: "Bank Account", val: "Must be closed first" },
                  { label: "Gazette Notice", val: "30-day objection window" },
                  { label: "Total Timeline", val: "3–6 months" },
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
                      All-Inclusive Price
                    </p>
                    <p className="text-sky-300 text-2xl font-extrabold">
                      ₹4,999
                    </p>
                    <p className="text-white/40 text-[10px] mt-0.5">
                      + Stamp duty & pending filing fees
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(165+)</span>
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
      <section className="bg-[#00416a] py-8" aria-label="Taxvio company closure statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "165+", label: "Companies Closed" },
            { val: "3–6", label: "Month Process" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹4,999", label: "All-Inclusive Price" },
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

      {/* ══════ WHO SHOULD CLOSE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Who should close a company in India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Who Should Apply
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            When Does a Company Need to Be Closed?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            An unmanaged dormant company accumulates penalties, ROC notices and
            director DIN implications every year. A clean strike-off solves all
            of this permanently.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_SHOULD_CLOSE.map(({ icon, title, section, desc }) => (
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
      <section className="py-20 bg-white" aria-label="What is included in company closure service">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹4,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Pre-closure audit to Strike Off Order — every step handled by
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
      <section className="py-20 bg-gray-50" aria-label="Strike off vs winding up comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Closure Routes
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Strike Off (STK-2) vs Winding Up — Which Route Is Right?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              For most dormant companies, startups and OPCs, strike off is the
              faster, cheaper and simpler legal route to closure.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Parameter</th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    ✅ Strike Off (STK-2)
                  </th>
                  <th className="px-4 py-3.5 text-left font-bold">
                    ⚖️ Winding Up
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {CLOSURE_COMPARISON.map(({ point, strikeoff, winding }, i) => (
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
                      {strikeoff}
                    </td>
                    <td className="px-4 py-3 text-gray-500">{winding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Quick rule:</strong> If your company has NIL assets and
              liabilities, a closed bank account, no active legal proceedings,
              and all filings cleared — STK-2 strike off is the correct and
              fastest path. Taxvio handles the entire process online.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-white" aria-label="Company closure process steps India">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step Company Closure Process
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
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Timeline note:</strong> After STK-2 is filed, MCA
              publishes a public notice in the{" "}
              <strong>Official Gazette</strong> with a 30-day objection window.
              This gazette publication timeline is outside Taxvio's control and
              is determined by MCA's processing queue. Total process:
              typically <strong>3–6 months</strong> from initial engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ PRE-CLOSURE CHECKLIST ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Pre-closure compliance checklist for company closure">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Pre-Closure Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              What Must Be Cleared Before Filing STK-2
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              This is the most critical phase. ROC will reject STK-2 if any
              pending compliance remains unresolved.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRE_CLOSURE.map(({ category, icon, badgeColor, priority, items }) => (
              <div
                key={category}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#00416a] flex items-center justify-center text-lg shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">
                      {category}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${badgeColor}`}
                  >
                    {priority}
                  </span>
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

          <div className="mt-5 flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Director Disqualification Risk:</strong> Directors of
              companies with{" "}
              <strong>3 consecutive years of non-filing</strong> may face
              disqualification under Section 164(2) and their DINs may be
              deactivated. This affects the ability to serve as director in any
              other company until the issue is resolved. Taxvio assesses this
              risk during the pre-closure audit.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ INELIGIBILITY ══════ */}
      <section className="py-20 bg-white" aria-label="When company cannot apply for strike off">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Ineligibility Conditions
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              When Can a Company NOT Apply for Strike Off?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Section 249 of the Companies Act 2013 lists specific conditions
              under which a company is ineligible to file STK-2.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {INELIGIBLE.map(({ icon, title, desc }) => (
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
            <Search size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#00416a]">Taxvio checks eligibility first.</strong>{" "}
              Before drafting a single document, we run a complete eligibility
              check — MCA filing status, litigation search, income tax and GST
              status — so you invest in the process only when the company is
              ready for clean closure.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS REQUIRED ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Documents required for company closure STK-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for Company Closure
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Share documents on WhatsApp or email. Taxvio drafts all resolutions,
              indemnity bonds and affidavits.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {DOCS.map(({ category, icon, items }) => (
              <div
                key={category}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#00416a] flex items-center justify-center text-base">
                    {icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{category}</h3>
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

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-white" aria-label="Complete guide to company closure in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Company Closure in India — The Complete Legal Guide
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Closing a company in India is a formal legal process governed
                by the <strong>Companies Act 2013</strong>. Unlike a sole
                proprietorship that can simply stop operating, a registered
                company — whether a{" "}
                <Link
                  href="/serviceslist/roc/private-limited-formation"
                  className="text-[#00416a] font-semibold underline hover:text-sky-700 transition"
                >
                  Private Limited Company
                </Link>
                ,{" "}
                <Link
                  href="/serviceslist/roc/opc-formation"
                  className="text-[#00416a] font-semibold underline hover:text-sky-700 transition"
                >
                  One Person Company
                </Link>{" "}
                or LLP — continues to exist as a legal entity until it is
                formally dissolved by MCA. An unmanaged dormant company
                continues to accumulate annual ROC filing obligations, penalty
                notices, director DIN implications and tax compliance burden
                regardless of whether any business is being done.
              </p>
              <p>
                The most practical route for most small companies is
                the <strong>voluntary strike off under Section 248(2)</strong>{" "}
                of the Companies Act 2013 — filed through Form STK-2 with the
                Registrar of Companies. This route is designed specifically for
                dormant or defunct companies that have no assets, no liabilities,
                no pending legal proceedings and have settled all statutory
                obligations. It is the fastest, most affordable and most
                commonly used legal route to permanently dissolve a company.
              </p>
              <p>
                Once the ROC issues the Strike Off Order, the company's name is
                permanently removed from the Register of Companies and the CIN
                becomes inactive. The company ceases to exist as a legal entity.
                Directors are relieved of ongoing filing obligations for the
                closed entity, and their DINs can be actively used for any other
                directorship.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Why Pending Compliance is the Biggest Blocker for Company Closure
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The single most common reason STK-2 applications are rejected or
                delayed is <strong>pending statutory filings</strong>. The ROC
                cross-checks the company's MCA filing history before processing
                the strike-off application. If AOC-4 or MGT-7/MGT-7A are
                outstanding for any financial year, the application is flagged and
                returned.
              </p>
              <p>
                Similarly, the Income Tax Department and GST portal records are
                referenced. Companies with unfiled ITR-6 or active GSTIN with
                pending returns may receive objections during the 30-day gazette
                notice window. Filing and closing the GSTIN, clearing pending GST
                returns and obtaining ITR filing acknowledgements are therefore
                mandatory preconditions — not optional steps.
              </p>
              <p>
                Taxvio conducts a comprehensive pre-closure audit across MCA,
                income tax, GST and TDS records before initiating any document
                drafting. This audit identifies the exact compliance clearance
                required and estimates the total cost and timeline accurately —
                so founders do not encounter surprise rejections midway through
                the process.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              The Indemnity Bond and Affidavit — What Directors Are Signing
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The <strong>indemnity bond</strong> and <strong>affidavit</strong>{" "}
                are legally binding declarations executed by all directors as
                part of the STK-2 package. Both must be executed on stamp paper
                of the applicable denomination and either notarised or attested
                before an executive magistrate or First Class Judicial Magistrate.
              </p>
              <p>
                The indemnity bond declares that the company has no pending
                liabilities — to creditors, employees, tax authorities, banks,
                government departments or any other party — and that the directors
                will be personally liable to indemnify any person who suffers loss
                due to misrepresentation in the application. The affidavit
                confirms that the company has not commenced business or has ceased
                all operations, and that all statements made in the application
                are true and correct.
              </p>
              <p>
                These documents cannot be treated casually. If undisclosed
                liabilities surface after the company is struck off, these
                documents expose the directors to personal liability and potential
                criminal prosecution for fraud. Taxvio drafts both documents
                carefully — ensuring accurate representation of the company's
                actual status and minimising legal exposure for directors.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              What Happens After the Company is Struck Off — Director DIN and Future Implications
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                After the company is struck off and the ROC issues the Strike Off
                Order, several important consequences follow for the directors.
                The <strong>DIN remains active</strong> — directors can continue
                to serve in other companies. The struck-off company's CIN becomes
                inactive but is permanently archived in MCA records.
              </p>
              <p>
                If the directors of the struck-off company were previously
                disqualified under Section 164(2) due to non-filing, the
                disqualification may persist even after the company is closed. In
                such cases, the CFSS (Companies Fresh Start Scheme) or CODS
                (Condonation of Delay Scheme) routes — when available — may need
                to be utilised before closure to restore director DIN
                functionality. Taxvio advises on this during the pre-closure
                audit.
              </p>
              <p>
                After closure, the company's PAN remains in Income Tax records.
                Directors should ensure that final ITR-6 is filed for the last
                active financial year and that the PAN is marked as inactive
                with the tax department to avoid future scrutiny notices for a
                company that no longer exists.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Cost of Not Closing a Dormant Company — The Compounding Penalty Trap
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Many founders assume that simply stopping business activity
                effectively closes the company. In law, it does not. A registered
                company remains active until formally struck off or wound up.
                Every year the company exists — with or without business — certain
                filings remain mandatory:
                <strong> AOC-4 and MGT-7/MGT-7A</strong> are due annually,{" "}
                <strong>ITR-6</strong> must be filed regardless of turnover,
                and GST returns must be filed if the GSTIN is active. Failure
                to file attracts <strong>₹100 per day per form</strong> under
                MCA, plus income tax late filing fees and GST penalties.
              </p>
              <p>
                Over 3–5 years of non-filing, a completely dormant company can
                accumulate lakhs of rupees in total penalties across MCA, income
                tax and GST. More critically, directors face{" "}
                <strong>Section 164(2) disqualification</strong> after three
                consecutive years of non-filing — blocking them from serving as
                directors in any company until the disqualification is resolved.
              </p>
              <p>
                The cost of closure through STK-2 — even including pending
                compliance clearance — is almost always lower than the cost of
                letting a dormant company accumulate more penalties for another
                3–5 years. Taxvio provides a total cost estimate upfront so
                founders can make an informed decision.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for company closure">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Founders Trust Taxvio for Company Closure
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Clean, legally sound company closure at transparent pricing — 100%
              online, CA &amp; CS assisted.
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
      <section className="py-20 bg-white" aria-label="Client reviews for company closure service">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Companies That Closed Cleanly with Taxvio
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
      <section className="py-20 bg-gray-50" aria-label="Company closure FAQs India">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Company Closure in India
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
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Company closure services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">
              Company Closure Services Across India
            </h2>
          </div>

          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in{" "}
            <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong> and
            provides online company closure and STK-2 strike-off services for
            Private Limited Companies, OPCs and LLPs across{" "}
            <strong>
              Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai,
              Bangalore
            </strong>{" "}
            and all of India. Our process is 100% online — no office visit
            required.
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
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Related services for company closure">
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
                title: "Annual ROC Compliance",
                desc: "Clear pending AOC-4, MGT-7A — ₹3,999",
                href: "/serviceslist/roc/annual-roc-compliance",
                icon: "📋",
              },
              {
                title: "OPC Registration",
                desc: "Register a One Person Company — ₹4,999",
                href: "/serviceslist/roc/opc-formation",
                icon: "👤",
              },
              {
                title: "Company Name Change",
                desc: "INC-24 name change filing — ₹3,999",
                href: "/company-name-change",
                icon: "✏️",
              },
              {
                title: "GST Cancellation",
                desc: "Surrender GSTIN cleanly — ₹999",
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
        aria-label="Close your company with Taxvio"
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
          {/* Reminder callout */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">
                ⚡ Dormant Company Alert
              </p>
              <p className="text-white/65 text-xs mt-0.5">
                Every year without filing adds{" "}
                <strong className="text-white">₹100/day per form</strong> in
                penalties + director disqualification risk after 3 years. Close
                it now — cleanly.
              </p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]"
            >
              <MessageCircle size={13} /> Start Closure Now
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
              165+ Companies Closed · 4.9★ Rating · Starting ₹4,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Close Your Company Legally —
              <span className="block mt-1 text-sky-300">
                STK-2 Strike Off Starting ₹4,999
              </span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Pre-closure compliance audit, pending filing clearance, board
              resolution, special resolution, indemnity bond, affidavit,
              statement of accounts and Form STK-2 MCA filing — all handled
              end-to-end by Taxvio's CA &amp; CS team. 100% online, clean and
              permanent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <MessageCircle size={16} /> Close Company — ₹4,999
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
                <Zap size={12} /> Pre-Closure Audit Included
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