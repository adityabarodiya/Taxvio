// app/company-name-change/client.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Shield, Users, Zap, Clock, FileText, Building2,
  Phone, MessageCircle, Star, AlertCircle, TrendingUp,
  RefreshCw, Edit3, Award, Search, Layers,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I want to change my company name with MCA. Please guide me."
)}`;

/* ─── Who needs a name change ────────────────────────────────────────────────── */
const WHO_NEEDS = [
  {
    icon: "🔄",
    title: "Rebranding the Business",
    section: "Brand Evolution",
    desc: "Companies that have rebranded their product, entered new markets, or changed their identity need the legal entity name to match the public-facing brand to avoid customer confusion and contractual inconsistencies.",
  },
  {
    icon: "⚖️",
    title: "Trademark Conflict Resolution",
    section: "Legal Compliance",
    desc: "If your company has received a legal notice or ROC direction regarding a name conflict with a registered trademark or another company, a name change is the fastest path to resolution and avoiding litigation.",
  },
  {
    icon: "🤝",
    title: "Post-Merger or Acquisition",
    section: "M&A Integration",
    desc: "After a merger, acquisition, or group restructuring, the acquired or merged entity often needs its name aligned with the new group identity — requiring a formal MCA name change and updated Certificate of Incorporation.",
  },
  {
    icon: "📋",
    title: "MCA / ROC Direction",
    section: "Regulatory Requirement",
    desc: "The MCA or ROC can direct a company to change its name under Section 16 of the Companies Act 2013 — typically when the name is identical or similar to another company, or misleads the public about the company's nature.",
  },
  {
    icon: "🚀",
    title: "Pivot in Business Activity",
    section: "Scope Expansion",
    desc: "A company that started in one sector and pivoted to another — for example, from IT services to fintech or from trading to manufacturing — may want a name that reflects the new core business activity.",
  },
  {
    icon: "🌐",
    title: "Improved Marketability",
    section: "SEO & Branding",
    desc: "Founders who registered a company with a generic or hard-to-market name early on often want to change to a more memorable, domain-friendly, or internationally marketable name as the business grows.",
  },
];

/* ─── What's included ────────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  {
    icon: "🔍",
    title: "Name Availability Search (RUN / SPICe+)",
    desc: "Thorough MCA name availability check before filing. We verify the proposed name against existing companies, LLPs, and trademark databases to maximise approval probability on the first attempt.",
  },
  {
    icon: "📋",
    title: "Board Resolution Drafting",
    desc: "Resolution of the Board of Directors proposing the name change — professionally drafted with correct authorisation language as required under Section 13 of the Companies Act 2013.",
  },
  {
    icon: "📜",
    title: "Special Resolution (EGM / Postal Ballot)",
    desc: "Special Resolution of shareholders approving the name change. We draft the resolution, prepare the notice, and ensure the EGM or postal ballot process meets Companies Act requirements.",
  },
  {
    icon: "🏛",
    title: "RUN / SPICe+ Name Approval Filing",
    desc: "Name change request filed with MCA through the RUN (Reserve Unique Name) or SPICe+ route — with object clause and significance review to prevent rejection and reduce back-and-forth with ROC.",
  },
  {
    icon: "📝",
    title: "INC-24 MCA Filing",
    desc: "Application for name change on Form INC-24 filed with the Registrar of Companies — covering the approved new name, certified special resolution, and all supporting documents.",
  },
  {
    icon: "🧾",
    title: "Fresh Certificate of Incorporation",
    desc: "New Certificate of Incorporation (CoI) with the changed company name and the same CIN issued by MCA — delivered to you directly via WhatsApp along with post-change documentation checklist.",
  },
];

/* ─── Process steps ──────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Name Availability Check & Proposed Name Review",
    desc: "Share your proposed new company name(s) with Taxvio. We run an MCA name check, verify against trademark databases, and review the name for compliance with Companies (Incorporation) Rules 2014 before proceeding.",
  },
  {
    step: "02",
    title: "Board Resolution & EGM Notice Drafting",
    desc: "Board resolution proposing the name change drafted and shared for director signatures. EGM notice issued to shareholders with minimum 21 clear days' notice — or shorter notice with 95% shareholder consent.",
  },
  {
    step: "03",
    title: "Special Resolution Passed by Shareholders",
    desc: "Special Resolution passed at the Extra-ordinary General Meeting (EGM) or through postal ballot — requires 75% shareholder approval. Minutes of EGM prepared and maintained in the statutory register.",
  },
  {
    step: "04",
    title: "RUN / SPICe+ Name Approval from MCA",
    desc: "Proposed name filed with MCA through RUN or SPICe+ for central government approval. Approval typically received in 2–5 working days. MCA may suggest minor modifications — we handle all correspondence.",
  },
  {
    step: "05",
    title: "INC-24 Filing with ROC",
    desc: "Form INC-24 (Application for change of name) filed with the Registrar of Companies — attaching the certified copy of the special resolution, altered MOA clause, and MCA name approval letter.",
  },
  {
    step: "06",
    title: "Fresh Certificate of Incorporation Issued",
    desc: "ROC issues a fresh Certificate of Incorporation with the new company name and original CIN. Taxvio delivers the new CoI and a comprehensive post-name-change action checklist via WhatsApp.",
  },
];

/* ─── What to update after name change ──────────────────────────────────────── */
const POST_CHANGE = [
  {
    category: "Statutory & MCA",
    icon: "🏛",
    badgeColor: "bg-red-500",
    priority: "Mandatory",
    items: [
      "Company letterhead, rubber stamp, seal with new name",
      "MOA & AOA cover pages updated (new name)",
      "Common Seal (if used) reissued",
      "Register of Members and statutory registers updated",
      "MGT-14 filing for Special Resolution within 30 days",
    ],
  },
  {
    category: "Tax & Regulatory",
    icon: "🧾",
    badgeColor: "bg-orange-500",
    priority: "Time-Bound",
    items: [
      "Income Tax PAN — update name with NSDL/UTIITSL",
      "TAN — update name with Income Tax Department",
      "GST — update business name in GST portal (Amendment)",
      "Import Export Code (IEC) — update with DGFT",
      "Udyam Registration — name update on portal",
    ],
  },
  {
    category: "Banking & Contracts",
    icon: "🏦",
    badgeColor: "bg-blue-500",
    priority: "Operational",
    items: [
      "Bank account name change — submit new CoI to all banks",
      "Existing contracts and vendor agreements — issue addendum",
      "Customer invoices — update billing name immediately",
      "Payment gateway KYC — resubmit updated documents",
      "Domain name and email hosting — update if applicable",
    ],
  },
  {
    category: "Licenses & Registrations",
    icon: "📋",
    badgeColor: "bg-purple-500",
    priority: "As Applicable",
    items: [
      "Trade License from local municipal authority",
      "FSSAI License (food businesses)",
      "Drug License, RERA, or sector-specific permits",
      "Professional Tax Registration",
      "Shop and Establishment Act Registration",
    ],
  },
];

/* ─── Documents required ─────────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "Company Details",
    icon: "🏢",
    items: [
      "Certificate of Incorporation (current)",
      "MOA & AOA (current)",
      "Company PAN card",
      "CIN (Corporate Identification Number)",
      "List of directors and shareholders",
    ],
  },
  {
    category: "Proposed Name Details",
    icon: "✏️",
    items: [
      "2–3 proposed new company names (in preference order)",
      "Significance of the proposed name (required for RUN filing)",
      "Trademark registration certificate (if name is trademarked)",
      "NOC from trademark owner (if applicable)",
    ],
  },
  {
    category: "Board & EGM Documents",
    icon: "📋",
    items: [
      "Board resolution (Taxvio drafts this)",
      "EGM notice & minutes (Taxvio drafts this)",
      "Certified copy of special resolution (Taxvio prepares)",
      "Director DSC (Digital Signature Certificate) — for INC-24 filing",
    ],
  },
];

/* ─── Restrictions / when name change is rejected ───────────────────────────── */
const RESTRICTIONS = [
  {
    icon: "🚫",
    title: "Name Identical to Existing Company",
    desc: "MCA will reject a name that is identical or 'too similar' to an existing registered company or LLP name — even minor variations like adding 'India', 'Pvt', or changing spacing may be insufficient.",
  },
  {
    icon: "™️",
    title: "Conflicts with Registered Trademark",
    desc: "A proposed name that matches a registered trademark (especially in the same class of goods/services) will trigger a trademark objection from MCA. A NOC from the trademark holder is required.",
  },
  {
    icon: "🏛",
    title: "Names Implying Government Affiliation",
    desc: "Names containing words like 'National', 'Government', 'India', 'Bharat', or 'Reserve' that imply government ownership or affiliation require special permissions and are routinely rejected without approval.",
  },
  {
    icon: "📛",
    title: "Misleading or Offensive Names",
    desc: "Names that mislead the public about the nature of the company (e.g., using 'Bank' without RBI authorisation, or 'Insurance' without IRDAI approval) will be rejected outright by the ROC.",
  },
];

/* ─── Testimonials ───────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We rebranded our IT company after a pivot to SaaS. Taxvio handled the board resolution, special resolution, and INC-24 end to end. New certificate received in 17 working days.",
    name: "Arjun Mehta",
    location: "Noida",
  },
  {
    stars: 5,
    text: "Got a trademark conflict notice and needed to change our company name urgently. Taxvio helped with the entire legal process including the MCA filing and post-change bank KYC checklist.",
    name: "Pooja Singhal",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "After our merger, we needed to rename the subsidiary. Taxvio managed everything from the EGM documentation to the fresh Certificate of Incorporation — seamlessly and on time.",
    name: "Deepak Tyagi",
    location: "Muzaffarnagar",
  },
];

/* ─── Why Taxvio ─────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  { icon: Users, title: "CA & CS Drafted Resolutions", desc: "Board and special resolutions drafted by qualified Company Secretaries — not automated templates. Correct language = no ROC queries." },
  { icon: Search, title: "Pre-Filing Name Search", desc: "We run a comprehensive name availability and trademark conflict check before filing — minimising the chance of rejection and re-filing costs." },
  { icon: Zap, title: "100% Online, End-to-End", desc: "Submit documents via WhatsApp or email. We handle RUN/SPICe+ name approval, INC-24 filing, and delivery of the new CoI — with zero office visits." },
  { icon: FileText, title: "Post-Change Checklist Included", desc: "After the new CoI, we provide a complete action checklist: PAN update, GST amendment, bank name change, and all statutory register updates." },
  { icon: Clock, title: "15–20 Working Day Process", desc: "Proactive MCA follow-up at every stage — name approval, ROC processing, and CoI delivery. Real-time WhatsApp updates throughout." },
  { icon: Shield, title: "MGT-14 Filing Tracked", desc: "Special resolution must be filed in MGT-14 within 30 days. We track and file this automatically — so you don't miss a mandatory compliance deadline." },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the procedure to change a company name in India?",
    a: "The procedure involves: (1) Check name availability on MCA. (2) Pass a Board Resolution proposing the name change. (3) Hold an EGM or postal ballot and pass a Special Resolution with 75%+ shareholder approval. (4) File RUN or SPICe+ for central government name approval. (5) File Form INC-24 with the ROC attaching the approved name and certified special resolution. (6) ROC issues a fresh Certificate of Incorporation with the new name.",
  },
  {
    q: "How long does a company name change take in India?",
    a: "A company name change through Taxvio takes 15–20 working days from the date documents are submitted — covering name availability check, EGM notice period (21 days), MCA name approval (2–5 days), INC-24 ROC processing, and issuance of the fresh Certificate of Incorporation.",
  },
  {
    q: "What form is used to change a company name with MCA?",
    a: "Form INC-24 is the application form for company name change, filed with the Registrar of Companies. Prior to INC-24, the proposed name must be approved by the central government through the RUN (Reserve Unique Name) form or via SPICe+ integrated filing. The certified special resolution is filed separately in Form MGT-14 within 30 days.",
  },
  {
    q: "Is shareholder approval required for a company name change?",
    a: "Yes. A Special Resolution — requiring at least 75% of shareholders voting in favour — must be passed at an Extra-ordinary General Meeting (EGM) or through postal ballot before filing INC-24. The minimum notice period for an EGM is 21 clear days (or shorter with 95% shareholder consent in writing).",
  },
  {
    q: "Does the CIN change when a company changes its name?",
    a: "No. The Corporate Identification Number (CIN) remains the same even after a name change. Only the name prefix in the CIN changes — the state code, year of incorporation, and registration number remain identical. A fresh Certificate of Incorporation with the new name is issued reflecting the same CIN.",
  },
  {
    q: "What is the MCA fee for a company name change?",
    a: "MCA charges a government filing fee for the INC-24 form based on the company's authorised capital. This is separate from Taxvio's professional fee. Taxvio's all-inclusive price of ₹3,999 covers professional charges for drafting, filing, and coordination — government fees are charged at actuals.",
  },
  {
    q: "Can a company change its name to something trademarked by another party?",
    a: "No. If the proposed name is the same as or deceptively similar to a registered trademark (particularly in the same class of goods/services), MCA will require a No Objection Certificate (NOC) from the trademark owner. Without the NOC, the name approval will be rejected. Taxvio runs a trademark availability check before filing.",
  },
  {
    q: "What documents need to be updated after a company name change?",
    a: "After receiving the new Certificate of Incorporation, you must update: company letterhead and seal, PAN (via NSDL), TAN, GST registration (portal amendment), all bank accounts, existing contracts (via addendum), import-export code (DGFT), Udyam registration, trade licenses, and all statutory registers. Taxvio provides a complete post-change action checklist.",
  },
  {
    q: "Can an OPC also change its company name?",
    a: "Yes. A One Person Company (OPC) can also change its name following the same procedure — Board Resolution, approval from the sole member (acting as shareholder), RUN name approval, and INC-24 filing. As an OPC has only one member, the 'special resolution' is passed by that member and recorded in writing.",
  },
  {
    q: "Can MCA reject a company name change application?",
    a: "Yes. MCA can reject the name approval if the proposed name is identical or similar to an existing company or LLP, conflicts with a registered trademark, implies government affiliation without approval, is misleading about the company's nature, or violates the Companies (Incorporation) Rules 2014 naming guidelines. Taxvio's pre-filing review minimises the risk of rejection.",
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
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Client Component ───────────────────────────────────────────────────────── */
export default function CompanyNameChangeClient() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════ ALERT BANNER ══════ */}
      <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        ⚡ After name change — file <strong>MGT-14 (Special Resolution)</strong> within <strong>30 days</strong> with ROC | Penalty: <strong>₹500/day</strong> | Taxvio tracks and files this for you
      </div>

      {/* ══════ HERO ══════ */}
      <section
        aria-label="Company Name Change India — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }}
        />
        {/* Glows */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/roc", label: "ROC Compliance" },
                { href: null, label: "Company Name Change" },
              ].map(({ href, label }, i, arr) => (
                <li key={label} className="flex items-center gap-1.5">
                  {href ? (
                    <Link href={href} className="hover:text-white/80 transition">{label}</Link>
                  ) : (
                    <span className="text-white/75 font-medium">{label}</span>
                  )}
                  {i < arr.length - 1 && <ChevronRight size={12} className="text-white/25" />}
                </li>
              ))}
            </ol>
          </nav>

          {/* Category label */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
            style={{ background: "rgba(56,189,248,0.12)", border: "1px solid rgba(56,189,248,0.25)" }}
          >
            ✏️ Company Name Change — Companies Act 2013 · Section 13
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">

            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Company Name Change
                <span className="block mt-2 text-sky-300">MCA Filing in India</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Change your <strong className="text-white">Private Limited, OPC, or Public Limited</strong> company name legally with MCA in <strong className="text-white">15–20 working days</strong>.
                Taxvio's CA &amp; CS team handles board resolution, special resolution,{" "}
                <strong className="text-white">RUN name approval</strong>, INC-24 filing,
                MGT-14, and the fresh Certificate of Incorporation —
                end to end. Starting <strong className="text-white">₹3,999</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["✅ MCA INC-24 Filing", "🔒 MGT-14 Tracked", "⚡ 15–20 Day Process", "📋 Post-Change Checklist"].map(t => (
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
                  <MessageCircle size={16} /> Change Company Name — ₹3,999
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
                {["Board Resolution Drafting", "Special Resolution (EGM)", "INC-24 MCA Filing", "Fresh Certificate of Incorporation"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-sky-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right — Key Facts card ── */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-bold text-white text-sm">Name Change — Key Facts</p>
                <p className="text-xs text-white/50 mt-0.5">All-inclusive · No hidden charges</p>
              </div>
              <div className="p-5 space-y-3.5">
                {[
                  { label: "Applicable To", val: "Pvt Ltd, OPC, Public Ltd" },
                  { label: "Governing Section", val: "Section 13, Companies Act" },
                  { label: "Shareholder Approval", val: "Special Resolution (75%+)" },
                  { label: "MCA Form", val: "INC-24 + MGT-14" },
                  { label: "Name Approval Route", val: "RUN / SPICe+" },
                  { label: "CIN Change?", val: "No — same CIN retained" },
                  { label: "Processing Time", val: "15–20 working days" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-white/60 text-xs">{label}</span>
                    <span className="font-bold text-white text-xs text-right">{val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div
                  className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div>
                    <p className="text-white text-xs font-bold">All-Inclusive Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold">₹3,999</p>
                    <p className="text-white/40 text-[10px] mt-0.5">+ Govt. fees as applicable</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(180+)</span>
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
      <section className="bg-[#00416a] py-8" aria-label="Taxvio company name change statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "180+", label: "Name Changes Filed" },
            { val: "15–20", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹3,999", label: "All-Inclusive Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WHO NEEDS A NAME CHANGE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Who needs a company name change in India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Applicability
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            When Does a Company Need a Name Change?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            Whether driven by rebranding, legal compliance, merger, or MCA direction — we make the name change process smooth and legally compliant.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_NEEDS.map(({ icon, title, section, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
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
      <section className="py-20 bg-white" aria-label="What is included in company name change service">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹3,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              From name search to fresh Certificate of Incorporation — every step handled by our CA &amp; CS team.
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
                <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Company name change process steps India">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step Company Name Change Process
          </h2>
          <div className="space-y-4">
            {STEPS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-5 items-start bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#00416a]/15 transition-all duration-200"
              >
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
          <div className="mt-6 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Important:</strong> The EGM notice period is a minimum of <strong>21 clear days</strong>. However, if <strong>95% of shareholders consent in writing</strong>, the EGM can be called at shorter notice — significantly reducing the total timeline. Taxvio advises on the fastest legal path based on your shareholding structure.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ POST-CHANGE CHECKLIST ══════ */}
      <section className="py-20 bg-white" aria-label="What to update after company name change India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Post-Change Action Plan
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              What to Update After Your Company Name Change
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              The new Certificate of Incorporation is just the beginning. These updates ensure your new name is legally reflected everywhere.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {POST_CHANGE.map(({ category, icon, badgeColor, priority, items }) => (
              <div
                key={category}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#00416a] flex items-center justify-center text-lg shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">{category}</h3>
                  </div>
                  <span className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${badgeColor}`}>
                    {priority}
                  </span>
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
          <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Don't miss:</strong> File <strong>MGT-14</strong> (Certified copy of Special Resolution) with ROC within <strong>30 days</strong> of passing the resolution. Penalty for late filing: ₹500/day. Taxvio tracks and files MGT-14 as part of the standard name change package.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ NAME CHANGE RESTRICTIONS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="When MCA rejects company name change application">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Name Restrictions
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              When Will MCA Reject Your Company Name Change?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Avoid delays and re-filing costs by understanding these common rejection triggers before submitting your application.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {RESTRICTIONS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-red-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-3 bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-4">
            <Search size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#00416a]">Taxvio's pre-filing review</strong> includes MCA name availability check, trademark conflict search, and naming guidelines review — so we identify and fix potential issues before filing, not after rejection.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS REQUIRED ══════ */}
      <section className="py-20 bg-white" aria-label="Documents required for company name change India">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for Company Name Change
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Share documents via WhatsApp or email — no physical submission required.
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
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Complete guide to company name change in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Company Name Change in India — The Complete Legal Guide
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>company name change</strong> in India is governed by <strong>Section 13 of the Companies Act 2013</strong>, which allows a company to alter its Memorandum of Association (MOA) — including the name clause — subject to passing a Special Resolution by shareholders and obtaining approval from the central government (MCA). The process is formal, requires multiple sequential steps, and results in the Registrar of Companies (ROC) issuing a <strong>fresh Certificate of Incorporation</strong> with the new name.
              </p>
              <p>
                Critically, a company name change does <strong>not affect the company's legal continuity</strong>. The Corporate Identification Number (CIN) remains the same — meaning all existing contracts, bank accounts, licenses, and obligations remain valid. However, the name on each of these must be updated through formal notifications and amendments to reflect the new company name. Failure to update these records promptly can create legal inconsistencies and compliance gaps.
              </p>
              <p>
                The name change process can be initiated by the company voluntarily (rebranding, business pivot) or as a <strong>mandatory direction from MCA or ROC</strong> under Section 16 — typically when the ROC determines that the existing name is misleading, too similar to another company, or violates naming guidelines. In such cases, the company has a specified period to comply with the name change direction.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              The Special Resolution Requirement — What 75% Shareholder Approval Means
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>Special Resolution</strong> — requiring at least 75% of the votes cast by shareholders — is the highest threshold of shareholder approval under the Companies Act 2013. For a name change, this means that at least three-quarters of the shareholding must vote in favour of the proposed new name at an Extra-ordinary General Meeting (EGM) or through a postal ballot process.
              </p>
              <p>
                The EGM notice must be sent to all shareholders, directors, and auditors at least <strong>21 clear days before the meeting</strong>. "Clear days" means the day of dispatch and the day of the meeting are not counted — so the actual notice-to-meeting gap is typically 23+ calendar days. If 95% of shareholders consent in writing, the meeting can be called at shorter notice — a provision that substantially compresses the timeline for closely-held companies with a small number of shareholders.
              </p>
              <p>
                After the Special Resolution is passed, <strong>Form MGT-14</strong> must be filed with the ROC within 30 days with a certified copy of the resolution. This is a separate mandatory filing from INC-24 and carries its own penalty of ₹500/day for delayed filing. Taxvio tracks both filings as part of the name change package to ensure full compliance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              RUN vs SPICe+ — Which Route for Name Approval?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Once the Special Resolution is passed, the proposed new name must be approved by the central government (processed through MCA's ROC) before INC-24 can be filed. There are two routes for this name approval:
              </p>
              <p>
                <strong>RUN (Reserve Unique Name) Form:</strong> A standalone name reservation application on the MCA21 portal. RUN allows up to 2 proposed names, requires a brief explanation of the name's significance, and typically returns an approval or rejection within 2–5 working days. RUN approval is valid for 20 days, within which INC-24 must be filed.
              </p>
              <p>
                <strong>SPICe+ Route:</strong> For companies undergoing name changes alongside other changes to their Memorandum of Association, SPICe+ allows an integrated filing. However, for a standalone name change, RUN is the more commonly used and faster route. Taxvio advises on the appropriate route based on your specific situation and whether any other amendments are being made simultaneously.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Updating Your Company Name Across All Registrations — The Complete Post-Change Plan
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Many companies complete the INC-24 filing, receive the new Certificate of Incorporation, and then discover that the name change journey is only half done. Every registration, license, contract, and bank account that carries the old company name must be formally updated — and each update has its own process, timeline, and documentation requirement.
              </p>
              <p>
                The most critical immediate updates are: <strong>PAN name change</strong> (through NSDL/UTIITSL — required for all tax filings and TDS certificates to reflect the new name), <strong>GST registration amendment</strong> (through the GST portal — mandatory within a reasonable period to avoid mismatches in invoices and GSTR filings), and <strong>bank account name update</strong> (present the new CoI and board resolution to all banks where the company holds accounts).
              </p>
              <p>
                Sector-specific registrations — FSSAI, IRDAI, SEBI, RBI authorisations, drug licenses, trade licenses — each have their own amendment procedures and must be updated through the respective regulatory body. Failure to update these creates a situation where your CoI says one name but your license says another — which can cause problems during audits, due diligence, or customer verification. Taxvio provides a tailored post-change checklist based on your company's specific regulatory profile.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Company Name Change for OPC — Key Differences
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>One Person Company (OPC)</strong> can also change its name following the same general process under Section 13 — but with one important structural difference: since an OPC has only one member, the "Special Resolution" is effectively the written consent of the sole member recorded in the OPC's registers. There is no EGM to convene since there is only one shareholder.
              </p>
              <p>
                The sole member's consent must be recorded in writing and filed with MCA as part of the INC-24 application. The nominee director's role in an OPC name change is administrative — they are notified but do not vote on the resolution. As with all OPC filings, the sole director's <Link href="/serviceslist/roc/opc-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Digital Signature Certificate (DSC)</Link> is required for all MCA form submissions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-white" aria-label="Why choose Taxvio for company name change">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Companies Trust Taxvio for Their Name Change
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Professional-grade MCA filing at a fixed, transparent price — 100% online, zero office visits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
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
      <section className="py-20 bg-gray-50" aria-label="Client reviews for company name change service">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Companies That Changed Their Name with Taxvio
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ stars, text, name, location }) => (
              <div
                key={name}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
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
      <section className="py-20 bg-white" aria-label="Company name change FAQs India">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Company Name Change in India
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Company name change services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Company Name Change Services Across India</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides company name change services for Private Limited Companies, OPCs, and Public Limited Companies across{" "}
            <strong>Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai, Bangalore</strong>, and all of India. Our 100% online process means geography is never a barrier.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Khatauli", "Muzaffarnagar", "Meerut", "Noida", "Delhi NCR", "Ghaziabad", "Lucknow", "Jaipur", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Surat"].map(city => (
              <Link
                key={city}
                href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150"
              >
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Related ROC compliance services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Explore More — Related Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "OPC Registration", desc: "Register your One Person Company — ₹4,999", href: "/serviceslist/roc/opc-formation", icon: "👤" },
              { title: "Private Limited Registration", desc: "Incorporate a Pvt Ltd — ₹6,999", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
              { title: "Annual ROC Compliance", desc: "AOC-4, MGT-7 filing — ₹3,999", href: "/serviceslist/roc/annual-roc-compliance", icon: "📋" },
              { title: "GST Registration", desc: "GSTIN in 3–7 days — ₹1,499", href: "/serviceslist/gst/gst-registration", icon: "🧾" },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
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
        aria-label="Change your company name with Taxvio"
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }}
        />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Reminder callout */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">⚡ Post-Name-Change Reminder</p>
              <p className="text-white/65 text-xs mt-0.5">
                File <strong className="text-white">MGT-14</strong> (Special Resolution) within{" "}
                <strong className="text-white">30 days</strong>.
                Penalty: <strong className="text-white">₹500/day</strong>. Taxvio tracks and files this for you.
              </p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]"
            >
              <MessageCircle size={13} /> Start Name Change
            </a>
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <TrendingUp size={12} className="text-sky-400" />
              180+ Name Changes Filed · 4.9★ Rating · Starting ₹3,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Change Your Company Name Legally —
              <span className="block mt-1 text-sky-300">MCA Compliant, Starting ₹3,999</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Board resolution, special resolution, RUN name approval, INC-24 filing, MGT-14, and fresh
              Certificate of Incorporation — all handled end-to-end by our CA &amp; CS team.
              100% online, 15–20 working days, no office visit needed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <MessageCircle size={16} /> Change Company Name — ₹3,999
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