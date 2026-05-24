"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Shield, Users, Zap, Clock, FileText, Building2,
  Phone, MessageCircle, Star, AlertCircle, TrendingUp, Heart,
} from "lucide-react";

/* ─── Constants ────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I want to register a Section 8 Company (NGO / Non-Profit). Please guide me."
)}`;

/* ─── Who should register Section 8 ───────────────────────────────────────── */
const WHEN_S8 = [
  {
    icon: "🏫",
    title: "Educational Institutions",
    section: "Schools & Coaching",
    desc: "Schools, colleges, skill development centres, coaching institutes, and vocational training organisations operating on a non-profit basis benefit from Section 8 structure for institutional credibility and donation eligibility.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical Relief",
    section: "Health NGOs",
    desc: "Organisations providing free or subsidised medical care, rural health camps, mental health awareness, or medical research with charitable intent are ideal candidates for Section 8 registration.",
  },
  {
    icon: "🌱",
    title: "Environmental Organisations",
    section: "Environmental Protection",
    desc: "NGOs working on climate action, tree plantation, water conservation, clean energy, or environmental education can register as Section 8 Companies to access CSR funding and government grants.",
  },
  {
    icon: "👩‍👧",
    title: "Women & Child Welfare",
    section: "Social Welfare",
    desc: "Organisations working on women empowerment, child rights, anti-trafficking, domestic violence support, or child education are well-suited to Section 8 registration for donor credibility and FCRA eligibility.",
  },
  {
    icon: "🎨",
    title: "Art, Culture & Sports",
    section: "Promotion of Arts",
    desc: "Organisations promoting Indian classical arts, folk traditions, heritage conservation, sports development, or cultural exchange — specifically excluded from commercial motive — can be registered as Section 8 Companies.",
  },
  {
    icon: "🤲",
    title: "CSR-Funded Programmes",
    section: "Corporate CSR Partner",
    desc: "If your organisation implements CSR programmes on behalf of corporates or directly receives CSR donations, a Section 8 Company with 80G registration is the most credible and tax-efficient structure for both parties.",
  },
];

/* ─── What's included ──────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  { icon: "🔍", title: "Name Approval & Objects Review", desc: "Name checked for availability on MCA and approved through SPICe+. Critically, the objects clause is reviewed to ensure it meets MCA's charitable purpose criteria — a key reason Section 8 applications get rejected." },
  { icon: "📝", title: "MOA & AOA — Non-Profit Drafting", desc: "MOA and AOA professionally drafted with Section 8-specific non-profit language, prohibition on dividend distribution, and objects restricted to charitable activities per Section 8 requirements." },
  { icon: "🪪", title: "DIN & DSC Processing", desc: "Director Identification Numbers and Digital Signature Certificates procured for all directors — required for both the incorporation filing and MCA licence application." },
  { icon: "📋", title: "MCA Licence Application (Section 8)", desc: "The Section 8 licence application (filed with the Central Government via MCA) — the additional step that makes Section 8 registration more complex than standard company incorporation. Our team prepares and files the complete licence package." },
  { icon: "🏛", title: "Certificate of Incorporation (CoI)", desc: "Official Certificate of Incorporation with CIN issued by MCA after licence grant. Your Section 8 Company's legal existence document — required for all downstream registrations." },
  { icon: "🌱", title: "PAN/TAN & 12A/80G Guidance", desc: "Company PAN and TAN applied with SPICe+. Detailed guidance on 12A (income tax exemption for the company) and 80G (donor deduction) registration — the two most critical post-incorporation steps for any NGO." },
];

/* ─── Section 8 vs Trust vs Society ───────────────────────────────────────── */
const COMPARISON = [
  { point: "Governing Law", s8: "Companies Act 2013 (MCA)", trust: "Indian Trusts Act / State Laws", society: "Societies Reg. Act 1860 / State" },
  { point: "Regulatory Body", s8: "Ministry of Corporate Affairs", trust: "Charity Commissioner (State)", society: "Registrar of Societies (State)" },
  { point: "Registration Process", s8: "Online (MCA) + Central Licence", trust: "State-level (offline-heavy)", society: "State Registrar (varies by state)" },
  { point: "Governance Transparency", s8: "Highest — MCA oversight", trust: "Moderate", society: "Moderate" },
  { point: "FCRA Eligibility", s8: "✅ Strong (MCA credibility)", trust: "✅ Eligible", society: "✅ Eligible" },
  { point: "CSR Funding Eligibility", s8: "✅ Preferred by corporates", trust: "⚠️ Less preferred", society: "⚠️ Less preferred" },
  { point: "12A / 80G Registration", s8: "✅ Straightforward", trust: "✅ Available", society: "✅ Available" },
  { point: "Audit Requirements", s8: "Annual CA audit — mandatory", trust: "State law dependent", society: "State law dependent" },
  { point: "Annual MCA Filings", s8: "AOC-4 + MGT-7 (mandatory)", trust: "None with MCA", society: "None with MCA" },
  { point: "Profit Distribution", s8: "❌ Strictly prohibited", trust: "❌ Not applicable", society: "❌ Not applicable" },
  { point: "Foreign Donations (FCRA)", s8: "✅ Via FCRA registration", trust: "✅ Via FCRA registration", society: "✅ Via FCRA registration" },
  { point: "Closure Process", s8: "Formal (STK-2 / NCLT)", trust: "Deed-based / Court", society: "State Registrar process" },
];

/* ─── Process steps ────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "Objectives Assessment & Eligibility Review",
    desc: "Our CA & CS team reviews your proposed activities to confirm they qualify as Section 8 objects (charitable purpose). We identify any activities that could trigger MCA objections and restructure the objects clause for a clean first-attempt approval.",
  },
  {
    step: "02",
    title: "DIN, DSC & Name Approval",
    desc: "Director Identification Numbers and Digital Signature Certificates processed for all directors. Company name applied through SPICe+ with a carefully worded name and objects to prevent MCA-level rejection — critical for Section 8 applications.",
  },
  {
    step: "03",
    title: "MOA & AOA Drafting — Non-Profit Language",
    desc: "MOA drafted with non-profit specific objects, explicit prohibition on dividend distribution, and charitable purpose language required by Section 8. AOA drafted with governance provisions appropriate for an NGO/non-profit entity.",
  },
  {
    step: "04",
    title: "MCA Section 8 Licence Application",
    desc: "The licence application under Section 8 of the Companies Act is filed with the Central Government via MCA. This requires a declaration by the promoters and specific undertakings about the charitable nature of the organisation. Taxvio prepares and files the complete licence package.",
  },
  {
    step: "05",
    title: "MCA Review & Licence Grant",
    desc: "MCA's Regional Director reviews the application, may raise queries, and on satisfaction grants the Section 8 licence. Taxvio handles all MCA queries end-to-end. This step typically takes 7–10 days and is the primary source of timeline variation.",
  },
  {
    step: "06",
    title: "Certificate of Incorporation + Post-Reg Guidance",
    desc: "Certificate of Incorporation issued with CIN. PAN and TAN delivered. Our team then provides a detailed roadmap for 12A registration, 80G registration, FCRA eligibility, and annual compliance — so your Section 8 Company is fully operational from day one.",
  },
];

/* ─── Post-incorporation registrations ────────────────────────────────────── */
const POST_REG = [
  {
    icon: "🔵",
    title: "12A Registration",
    urgency: "Recommended — File Immediately",
    badgeColor: "bg-blue-500",
    desc: "Exempts the Section 8 Company from income tax on income applied for charitable purposes. Without 12A, all surplus income is taxable at 30%. Apply within the first year of incorporation for maximum benefit.",
    href: "/serviceslist/income-tax/12a-application",
    linkLabel: "Apply for 12A →",
  },
  {
    icon: "🟢",
    title: "80G Registration",
    urgency: "Critical for Fundraising",
    badgeColor: "bg-emerald-500",
    desc: "Allows donors to claim 50% tax deduction on donations. Essential for receiving corporate CSR funds, individual donations, and institutional grants. 80G is your most powerful fundraising tool — most donors require it before donating.",
    href: "/serviceslist/income-tax/12a-application",
    linkLabel: "Apply for 80G →",
  },
  {
    icon: "🟠",
    title: "FCRA Registration",
    urgency: "For Foreign Donations",
    badgeColor: "bg-orange-500",
    desc: "Required to receive donations from foreign sources — individuals, NGOs, foundations, or government bodies outside India. FCRA registration is applied with the Ministry of Home Affairs after 3 years of Section 8 Company existence (Prior Permission available earlier).",
    href: null,
    linkLabel: null,
  },
  {
    icon: "🟣",
    title: "NITI Aayog Darpan",
    urgency: "For Government Grants",
    badgeColor: "bg-violet-500",
    desc: "Registration on NITI Aayog's Darpan portal is mandatory to receive grants from central government ministries and departments. Many state governments also require Darpan registration for state-level grants and scheme eligibility.",
    href: null,
    linkLabel: null,
  },
];

/* ─── Annual compliance ────────────────────────────────────────────────────── */
const ANNUAL_COMPLIANCE = [
  { form: "AGM", detail: "Annual General Meeting within 6 months of financial year end (by 30 September). Mandatory — no relaxation for Section 8 Companies." },
  { form: "AOC-4", detail: "Financial statements filed with MCA within 30 days of AGM. Penalty: ₹100/day. Includes Balance Sheet, P&L, and Director's Report." },
  { form: "MGT-7", detail: "Annual return filed within 60 days of AGM. Penalty: ₹100/day. Discloses directors, members, and shareholding structure." },
  { form: "Statutory Audit", detail: "Mandatory annual audit by a CA — regardless of turnover. Audit report required for 12A/80G renewal and MCA compliance." },
  { form: "ITR-7", detail: "Income tax return for NGOs and trusts under Section 139(4A). Due: 31 October. 12A-registered entities claim exemption here." },
  { form: "12A / 80G Renewal", detail: "Both 12A and 80G are now provisional (5-year validity). Renewal application must be filed 6 months before expiry to avoid gap in exemption status." },
  { form: "Form CSR-1", detail: "Section 8 Companies receiving CSR funds must register on MCA's CSR portal via Form CSR-1 and file annual CSR utilisation reports." },
  { form: "FCRA Annual Return", detail: "Organisations with FCRA registration must file FC-4 (annual return) on the FCRA portal by 31 December every year, regardless of whether foreign funds were received." },
];

/* ─── Documents required ───────────────────────────────────────────────────── */
const DOCS = [
  {
    category: "All Directors",
    icon: "👤",
    items: [
      "PAN Card",
      "Aadhaar Card (mobile-linked)",
      "Passport-size photograph",
      "Email ID & mobile number",
      "DSC — Taxvio assists in procurement",
    ],
  },
  {
    category: "Registered Office",
    icon: "🏢",
    items: [
      "Latest utility bill — not older than 2 months",
      "NOC from property owner (if rented)",
      "Rent agreement (if applicable)",
    ],
  },
  {
    category: "Section 8 Specific",
    icon: "📋",
    items: [
      "Proposed company name (2–3 options)",
      "Detailed description of charitable objectives",
      "Proposed activities and geographic area of operation",
      "Declaration of non-profit intent (Taxvio drafts)",
      "Promoter undertaking for non-distribution of profits",
    ],
  },
];

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We wanted to formalise our rural education initiative. Taxvio helped us choose Section 8 over a Trust and handled the entire registration including the MCA licence. The 12A/80G guidance was extremely helpful.",
    name: "Shiksha Foundation",
    location: "Meerut",
  },
  {
    stars: 5,
    text: "Received our Section 8 Certificate of Incorporation in 18 days. Taxvio's team was proactive on MCA queries and kept us updated throughout. Now filing for 80G with their help as well.",
    name: "Aastha Welfare Society (Sec 8)",
    location: "Muzaffarnagar",
  },
  {
    stars: 5,
    text: "Our corporate CSR partner required us to be a registered Section 8 Company with 80G. Taxvio completed the registration efficiently and we received our first CSR grant within 6 months.",
    name: "GreenEarth Initiative",
    location: "Noida",
  },
];

/* ─── Why Taxvio ───────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  { icon: Users, title: "CA & CS Assisted", desc: "Every Section 8 incorporation is handled by qualified Chartered Accountants and Company Secretaries with specific NGO registration experience." },
  { icon: FileText, title: "Non-Profit MOA Expertise", desc: "Generic MOA templates fail MCA scrutiny for Section 8. We draft objects clauses with non-profit language that passes MCA's Regional Director review." },
  { icon: Shield, title: "MCA Query Handling", desc: "Section 8 applications often receive MCA queries on objects, promoter background, or financial projections. Taxvio handles all queries end-to-end." },
  { icon: Zap, title: "100% Online Process", desc: "All document sharing via WhatsApp or email. No physical office visit. Real-time status updates on MCA processing and licence grant." },
  { icon: Heart, title: "12A/80G Roadmap Included", desc: "Post-incorporation, we provide a complete 12A and 80G registration roadmap — the two most critical steps for any Section 8 Company to become fundraising-ready." },
  { icon: Building2, title: "End-to-End Compliance Support", desc: "Annual ROC filings, 12A/80G renewal, ITR-7, CSR-1 — all handled under one roof after your Section 8 Company is incorporated." },
];

/* ─── FAQs ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is a Section 8 Company in India?",
    a: "A Section 8 Company is a non-profit organisation incorporated under Section 8 of the Companies Act 2013. It is formed for promoting charitable objects such as education, art, science, sports, social welfare, religion, or environmental protection. Profits must be applied only towards stated objectives — they cannot be distributed to members as dividends.",
  },
  {
    q: "How long does Section 8 Company registration take?",
    a: "Section 8 Company registration takes 15–20 working days with all documents in order. The process involves name approval, MOA/AOA drafting, MCA licence application under Section 8, and issuance of the Certificate of Incorporation. The MCA licence step adds 5–7 days compared to standard company registration.",
  },
  {
    q: "What is the difference between a Section 8 Company, a Trust, and a Society?",
    a: "A Section 8 Company is governed by the Companies Act 2013 and regulated by MCA — the most structured and credible non-profit form. Trusts are governed by the Indian Trusts Act or state trust laws. Societies are governed by the Societies Registration Act 1860 or equivalent state laws. Section 8 Companies are preferred for FCRA registration, corporate CSR funding, and 12A/80G exemptions due to higher accountability and auditability.",
  },
  {
    q: "Can a Section 8 Company receive CSR funds from corporates?",
    a: "Yes. A Section 8 Company with 80G registration is eligible to receive CSR funds from corporates under Section 135 of the Companies Act. Companies spending on CSR can claim tax deduction only when donating to 80G-registered entities. A Section 8 Company is the most trusted and auditable vehicle for receiving corporate CSR donations.",
  },
  {
    q: "What is 12A and 80G registration for a Section 8 Company?",
    a: "12A registration under the Income Tax Act gives the Section 8 Company itself exemption from income tax on income applied towards charitable purposes. 80G registration allows donors to claim a tax deduction of 50% on their donations — a powerful fundraising tool. Both registrations are applied with the Income Tax Department after incorporation.",
  },
  {
    q: "What is the minimum number of directors for a Section 8 Company?",
    a: "A Section 8 Company requires a minimum of 2 directors (same as a Private Limited Company). There is no minimum paid-up capital requirement. However, MCA scrutinises the proposed objects and promoter credentials — the objects must genuinely be charitable in nature.",
  },
  {
    q: "Can a Section 8 Company pay salary to its directors?",
    a: "Yes. A Section 8 Company can pay reasonable salaries to its directors and employees for genuine services. What is prohibited is the distribution of profits as dividends to members. Salary paid for actual work is legitimate — excessive or disguised profit distributions are not permitted and can trigger licence revocation.",
  },
  {
    q: "What annual compliance is required for a Section 8 Company?",
    a: "A Section 8 Company must hold an AGM within 6 months of FY end, file AOC-4 within 30 days of AGM, file MGT-7 within 60 days of AGM, conduct annual statutory audit, file ITR-7 by 31 October, and renew 12A/80G before the 5-year validity expires. FCRA-registered entities must additionally file FC-4 by 31 December each year.",
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
export default function Section8Client() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════ DEADLINE BANNER ══════ */}
      <div className="bg-teal-600 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
        🌱 Section 8 Company? File <strong>12A &amp; 80G within the first year</strong> of incorporation | Without 80G, donors get <strong>no tax benefit</strong> on donations | Renew every <strong>5 years</strong>
      </div>

      {/* ══════ HERO ══════ */}
      <section aria-label="Section 8 Company Registration — NGO / Non-Profit — Taxvio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(45,212,191,0.09) 0%,transparent 65%)" }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-24">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/roc", label: "ROC Compliance" },
                { href: null, label: "Section 8 Company" },
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
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-teal-300"
            style={{ background: "rgba(20,184,166,0.14)", border: "1px solid rgba(20,184,166,0.30)" }}>
            🌱 Section 8 Company — NGO / Non-Profit | Companies Act 2013
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">

            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Section 8 Company
                <span className="block mt-2 text-teal-300">Registration in India</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Register your <strong className="text-white">Section 8 Company</strong> (NGO / Non-Profit) online in 15–20
                working days. Taxvio's CA &amp; CS team handles name approval,{" "}
                <strong className="text-white">MOA &amp; AOA drafting</strong>, MCA Section 8 licence, Certificate of
                Incorporation, PAN/TAN, and{" "}
                <strong className="text-white">12A &amp; 80G guidance</strong> — end to end. Starting{" "}
                <strong className="text-white">₹9,999</strong>.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "✅ MCA Section 8 Licence",
                  "🔒 Non-Profit MOA Drafted",
                  "💚 12A & 80G Guidance",
                  "📋 CSR Funding Ready",
                ].map(t => (
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
                  <MessageCircle size={16} /> Register Section 8 — ₹9,999
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              {/* Feature row */}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                {["MCA Licence Application", "Non-Profit MOA/AOA", "12A & 80G Roadmap", "CSR-1 Guidance"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-teal-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right — Key Facts card ── */}
            <div className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-bold text-white text-sm">Section 8 Company — Key Facts</p>
                <p className="text-xs text-white/50 mt-0.5">All-inclusive · No hidden charges</p>
              </div>
              <div className="p-5 space-y-3.5">
                {[
                  { label: "Minimum Directors", val: "2 Directors" },
                  { label: "Governing Act", val: "Companies Act 2013" },
                  { label: "Special Requirement", val: "MCA Section 8 Licence" },
                  { label: "Profit Distribution", val: "❌ Strictly prohibited" },
                  { label: "Tax Exemption", val: "Via 12A registration" },
                  { label: "Donor Tax Benefit", val: "Via 80G registration" },
                  { label: "CSR Funding", val: "✅ 80G makes eligible" },
                  { label: "Processing Time", val: "15–20 working days" },
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
                    <p className="text-teal-300 text-2xl font-extrabold">₹9,999</p>
                    <p className="text-white/40 text-[10px] mt-0.5">+ Govt. fees as applicable</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(186+)</span>
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
      <section className="bg-[#00416a] py-8" aria-label="Taxvio Section 8 registration statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "190+", label: "Section 8 Companies" },
            { val: "15–20", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹9,999", label: "All-Inclusive Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ WHO SHOULD REGISTER ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Who should register a Section 8 Company">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Section 8 Applicability
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            Who Should Register a Section 8 Company?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            A Section 8 Company is the most credible and structured non-profit form in India — ideal for organisations seeking CSR funding, FCRA, or 12A/80G benefits.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHEN_S8.map(({ icon, title, section, desc }) => (
              <div key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-2xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-0.5">{section}</p>
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
      <section className="py-20 bg-white" aria-label="What is included in Section 8 Company registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹9,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Name approval to Certificate of Incorporation — plus the Section 8-specific MCA licence and post-registration guidance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(({ icon, title, desc }) => (
              <div key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 8 vs TRUST vs SOCIETY ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Section 8 Company vs Trust vs Society comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Structure Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Section 8 Company vs Trust vs Society — Which Non-Profit Structure?
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              All three are valid non-profit structures — but they differ significantly in governance, credibility, and fundraising access.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Parameter</th>
                  <th className="px-4 py-3.5 text-left font-bold">🌱 Section 8 Company</th>
                  <th className="px-4 py-3.5 text-left font-bold">📜 Trust</th>
                  <th className="px-4 py-3.5 text-left font-bold">🏛 Society</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON.map(({ point, s8, trust, society }, i) => (
                  <tr key={point} className={`hover:bg-teal-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="px-4 py-3 font-semibold text-gray-700">{point}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium">{s8}</td>
                    <td className="px-4 py-3 text-gray-500">{trust}</td>
                    <td className="px-4 py-3 text-gray-500">{society}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 bg-teal-50 border border-teal-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-teal-700 shrink-0 mt-0.5" />
            <p className="text-xs text-teal-800 leading-relaxed">
              <strong>Key recommendation:</strong> If you intend to receive <strong>corporate CSR funds</strong>, seek <strong>FCRA registration</strong>, or need the highest level of <strong>donor credibility</strong> — a Section 8 Company is the right choice. Its MCA oversight, mandatory audit, and annual ROC filings make it the most transparent and credible non-profit form in India.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-white" aria-label="Section 8 Company registration process">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step Section 8 Registration Process — Objectives to Certificate
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

      {/* ══════ POST-INCORPORATION REGISTRATIONS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Post-incorporation registrations for Section 8 Company">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              After Incorporation
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Critical Post-Incorporation Registrations for Section 8 Companies
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Incorporation is just the beginning. These registrations transform your Section 8 Company from a legal entity into a fully fundraising-ready NGO.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {POST_REG.map(({ icon, title, urgency, badgeColor, desc, href, linkLabel }) => (
              <div key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl shrink-0">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug">{title}</h3>
                  </div>
                  <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full shrink-0 ${badgeColor}`}>{urgency.split(" — ")[0]}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{desc}</p>
                {href && linkLabel && (
                  <Link href={href}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00416a] hover:text-sky-700 transition">
                    {linkLabel} <ArrowRight size={10} />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#00416a] leading-relaxed">
              <strong>Important:</strong> 12A and 80G registrations are now <strong>provisional with 5-year validity</strong> (amended by Finance Act 2020). Renewal applications must be filed at least 6 months before expiry. Failure to renew means losing tax-exempt status and donor deduction eligibility — which can devastate your fundraising ability overnight. Taxvio tracks your renewal deadlines as part of our{" "}
              <Link href="/serviceslist/roc/annual-roc-compliance" className="font-bold underline hover:text-sky-700 transition">annual compliance package</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ ANNUAL COMPLIANCE ══════ */}
      <section className="py-20 bg-white" aria-label="Section 8 Company annual compliance requirements">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Compliance Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Annual Compliance for Section 8 Companies — Full Reference
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Section 8 Companies have the same ROC compliance burden as Private Limited Companies — plus additional non-profit-specific filings.
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
                  <tr key={form} className={`hover:bg-teal-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
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
              <strong>Penalty alert:</strong> Section 8 Companies that fail to maintain proper books of accounts, fail to conduct annual audits, or distribute profits to members face <strong>licence revocation by the Central Government</strong> — which converts the company into a regular company subject to full corporate taxation. Taxvio's{" "}
              <Link href="/serviceslist/roc/annual-roc-compliance" className="font-bold underline hover:text-red-900 transition">annual compliance service</Link> ensures all deadlines are tracked and filed on time.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ DOCUMENTS CHECKLIST ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Documents required for Section 8 Company registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Checklist
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents Required for Section 8 Company Registration
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              All documents shared via WhatsApp or email. The Section 8-specific documents are prepared by Taxvio — you provide the information.
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
              <strong>Objects clause is critical:</strong> The detailed description of your charitable objectives is the most scrutinised document in a Section 8 application. Vague, commercial-sounding, or inconsistent objectives are the primary reason for MCA rejection or query. Taxvio's team reviews and frames your objectives specifically for Section 8 MCA approval.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-white" aria-label="Complete guide to Section 8 Company registration in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              What is a Section 8 Company in India?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>Section 8 Company</strong> is a non-profit entity incorporated under Section 8 of the <strong>Companies Act 2013</strong> — formerly known as a Section 25 Company under the Companies Act 1956. It is formed for promoting objects of general public utility including commerce, art, science, sports, education, research, social welfare, religion, charity, or protection of the environment, or any other object approved by the Central Government.
              </p>
              <p>
                The defining legal requirement of a Section 8 Company is the <strong>non-distribution clause</strong> — all income and profits of the company must be applied towards its stated charitable objectives. No dividend can be declared or paid to its members. This prohibition on profit distribution is what distinguishes a Section 8 Company from a regular <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Company</Link> — and what earns it its non-profit legal status.
              </p>
              <p>
                Unlike a Trust or Society, a Section 8 Company is incorporated under a central law (the Companies Act) and regulated by the <strong>Ministry of Corporate Affairs (MCA)</strong>. This central regulation — with its mandatory annual filings, statutory audit requirements, and MCA oversight — makes Section 8 Companies the <em>most transparent and credible</em> non-profit structure in India, preferred by donors, corporates, and government agencies alike.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              The MCA Section 8 Licence — What Makes This Registration Different
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Unlike the registration of a <Link href="/serviceslist/roc/private-limited-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">Private Limited Company</Link> or <Link href="/serviceslist/roc/llp-formation" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">LLP</Link> — which proceed directly from name approval to incorporation — a Section 8 Company requires an additional and separate step: a <strong>licence from the Central Government</strong> through MCA's Regional Director.
              </p>
              <p>
                The licence application requires promoters to declare that the company will be formed for charitable purposes only, will not distribute profits, and will apply all income towards its stated objectives. The MCA's Regional Director reviews the proposed objects, the promoters' background, and the genuineness of the non-profit intent before granting the licence. This review process typically takes 7–10 additional working days and is the primary reason Section 8 registration takes 15–20 days versus 7–10 days for a standard company.
              </p>
              <p>
                <strong>Objects clause scrutiny</strong> is the most common source of MCA queries and rejections. Objects that appear commercial, vague, or outside the categories prescribed under Section 8 are flagged. Common errors include: using objects that could imply business activities (e.g., "trading in educational materials" instead of "promoting education"), objects that are too broad to be genuinely charitable, or objects that overlap with the personal business interests of the promoters. Taxvio's team reviews and restructures your objects clause specifically to pass the Regional Director's scrutiny.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              12A and 80G Registration — The Two Most Important Steps After Incorporation
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Incorporating a Section 8 Company gives you a legal entity — but it does not automatically make your organisation <em>tax-exempt</em> or <em>donation-deduction-eligible</em>. These critical benefits come from two separate registrations with the Income Tax Department: <strong>12A</strong> and <strong>80G</strong>.
              </p>
              <p>
                <strong>12A registration</strong> under Section 12A/12AA of the Income Tax Act gives the Section 8 Company itself exemption from paying income tax on income applied towards charitable purposes. Without 12A, the company is taxed like any other entity — at 30% on surplus income. A 12A-registered Section 8 Company can accumulate up to 15% of its income for future charitable use without it being treated as taxable surplus.
              </p>
              <p>
                <strong>80G registration</strong> is even more critical for fundraising. It allows donors — individuals and corporates — to claim a 50% deduction on donations made to the 80G-registered organisation. In practice, most major donors (individuals, HNIs, and especially corporates making CSR donations) will not donate to an organisation without 80G registration, because they have no tax incentive to do so. 80G registration is therefore not optional — it is a fundraising prerequisite.
              </p>
              <p>
                Since the Finance Act 2020, both 12A and 80G registrations are <strong>provisional for 3 years initially</strong>, then renewable for 5 years at a time. Organisations must proactively file renewal applications 6 months before expiry. A lapse in either registration — even for a single month — can disrupt donor confidence and CSR funding pipelines. Taxvio's <Link href="/serviceslist/income-tax/12a-application" className="text-[#00416a] font-semibold underline hover:text-sky-700 transition">12A and 80G registration service</Link> covers the initial application and all subsequent renewals.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              CSR Funding for Section 8 Companies — How to Access Corporate Donations
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Under Section 135 of the Companies Act 2013, every company with net worth above ₹500 crore, turnover above ₹1,000 crore, or net profit above ₹5 crore must spend 2% of its average net profit of the preceding three years on CSR activities. This creates a massive pool of corporate funding that NGOs can access — provided they meet the eligibility criteria.
              </p>
              <p>
                For a Section 8 Company to receive CSR funds, it must be <strong>registered on MCA's CSR portal via Form CSR-1</strong> (effective from 1 April 2021, all NGOs receiving CSR must have a unique CSR Registration Number). The Section 8 Company must also hold valid <strong>80G registration</strong> — without which the donating company cannot claim its CSR spend as a deductible contribution.
              </p>
              <p>
                Section 8 Companies are <em>strongly preferred</em> over Trusts and Societies for CSR funding because of their MCA oversight, mandatory statutory audit, and annual ROC filings — which give corporate CSR departments the audit trail and governance assurance they need to comply with their own board-level CSR reporting requirements. Many large corporates have explicit internal policies requiring CSR partners to be Section 8 Companies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Annual Compliance — What Changes and What Stays the Same Compared to a Pvt Ltd
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A Section 8 Company has the <strong>same ROC compliance obligations as a Private Limited Company</strong> — AGM, AOC-4, MGT-7, statutory audit — plus additional non-profit-specific compliance requirements. There is no compliance relaxation for Section 8 Companies in the ROC sphere.
              </p>
              <p>
                <strong>What is different for Section 8 Companies:</strong> The income tax return form is <strong>ITR-7</strong> (for entities under Section 139(4A)) — not ITR-6 used by regular companies. The 12A and 80G exemptions must be renewed every 5 years. FCRA-registered organisations must file FC-4 annually regardless of whether foreign funds were received. CSR-1 registration and annual CSR utilisation reporting are required for organisations receiving corporate CSR funds.
              </p>
              <p>
                <strong>Penalty for non-compliance:</strong> A Section 8 Company that fails to comply with its obligations — including maintaining non-profit status — faces the most serious consequence available: the <strong>Central Government can revoke the Section 8 licence</strong>, converting the company into a standard taxable entity, imposing full income tax on accumulated surpluses, and potentially winding up the company. This is far more severe than the penalties that apply to standard companies for compliance failures.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for Section 8 Company registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why NGOs &amp; Non-Profits Trust Taxvio for Section 8 Registration
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Section 8 registration is more complex than standard company formation — experience and non-profit-specific expertise matter.
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
      <section className="py-20 bg-white" aria-label="Client reviews for Section 8 Company registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted by NGOs &amp; Non-Profits Across India
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
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-extrabold text-xs shrink-0">
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
      <section className="py-20 bg-gray-50" aria-label="Section 8 Company registration FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Section 8 Company in India
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ══════ OUR REACH ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Section 8 Company registration services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Section 8 Company Registration Across India</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and provides Section 8 Company registration for NGOs, trusts, and non-profit initiatives across <strong>Noida, Delhi NCR, Meerut, Lucknow, Jaipur, Mumbai, Bangalore</strong>, and pan-India — 100% online.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Khatauli", "Muzaffarnagar", "Meerut", "Noida", "Delhi NCR", "Ghaziabad", "Lucknow", "Jaipur", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata"].map(city => (
              <Link key={city} href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50 transition-all duration-150">
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Related services for Section 8 Companies">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Explore More — Related Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "12A / 80G Registration", desc: "Income tax exemption for NGOs — ₹4,999", href: "/serviceslist/income-tax/12a-application", icon: "🌱" },
              { title: "Annual ROC Compliance", desc: "AOC-4, MGT-7 for Section 8 — ₹3,999", href: "/serviceslist/roc/annual-roc-compliance", icon: "📋" },
              { title: "Pvt Ltd Registration", desc: "For-profit company incorporation", href: "/serviceslist/roc/private-limited-formation", icon: "🏛" },
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
      <section className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
        aria-label="Register Section 8 Company with Taxvio">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* 12A/80G reminder */}
          <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-sm">💚 Post-Incorporation Priority</p>
              <p className="text-white/65 text-xs mt-0.5">
                Apply for <strong className="text-white">12A &amp; 80G</strong> within your first year.
                Without 80G, donors have <strong className="text-white">no tax incentive</strong> to donate.
              </p>
            </div>
            <Link href="/serviceslist/income-tax/12a-application"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]">
              Apply for 12A / 80G <ArrowRight size={12} />
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
              style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <TrendingUp size={12} className="text-teal-400" />
              190+ Section 8 Companies · 4.9★ Rating · Starting ₹9,999
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Register Your Section 8 Company —
              <span className="block mt-1 text-teal-300">India's Most Credible Non-Profit Structure</span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Name approval, non-profit MOA &amp; AOA, MCA Section 8 licence, Certificate of Incorporation, PAN/TAN, and 12A &amp; 80G guidance
              — all handled end-to-end by our CA &amp; CS team. 100% online, 15–20 working days, starting ₹9,999.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                <MessageCircle size={16} /> Register Section 8 — ₹9,999
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