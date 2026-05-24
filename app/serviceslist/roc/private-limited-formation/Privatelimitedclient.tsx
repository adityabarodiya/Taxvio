"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
  ArrowRight, CheckCircle, ChevronRight, ChevronDown, Shield,
  Users, Zap, Clock, FileText, Building2, Phone, MessageCircle,
  Star, AlertCircle, TrendingUp,
} from "lucide-react";

/* ─── Static Data ────────────────────────────────────────────────────────────── */

const WHAT_INCLUDED = [
  { icon: "🔍", title: "Name Approval (RUN / SPICe+)", desc: "We check name availability on MCA and secure approval through the Reserve Unique Name (RUN) route or SPICe+ integrated form." },
  { icon: "📝", title: "MOA & AOA Drafting", desc: "Professionally drafted Memorandum of Association and Articles of Association tailored to your business activity and objectives." },
  { icon: "🪪", title: "DIN & DSC Processing", desc: "Director Identification Number and Digital Signature Certificate for all directors — procured and verified end-to-end." },
  { icon: "🏛", title: "SPICe+ Filing", desc: "Integrated MCA filing covering incorporation, PAN, TAN, EPFO, ESIC, and GST registration (optional) in a single form." },
  { icon: "📄", title: "Certificate of Incorporation", desc: "Official Certificate of Incorporation (CoI) from MCA with CIN — your company's legal birth certificate." },
  { icon: "🧾", title: "PAN & TAN Application", desc: "Company PAN and TAN applied simultaneously with SPICe+ filing — no separate applications needed." },
];

const DOCS_REQUIRED = [
  { category: "Directors (All)", items: ["PAN Card", "Aadhaar Card", "Passport-size photograph", "Mobile number & email ID linked to Aadhaar"] },
  { category: "Registered Office", items: ["Latest utility bill (electricity/water/gas) — not older than 2 months", "NOC from owner (if rented / not owned by director)", "Rent agreement (if rented)"] },
  { category: "Company Details", items: ["Proposed company name (2–3 options)", "Main business activity / objects", "Proposed authorised & paid-up capital", "Shareholding ratio between shareholders"] },
];

const TIMELINE = [
  { day: "Day 1", title: "Document Collection", desc: "Share documents via WhatsApp. Our team reviews and flags any gaps immediately." },
  { day: "Day 2–3", title: "DSC & DIN Processing", desc: "Digital Signature Certificates obtained for all directors. DIN applied where not already held." },
  { day: "Day 3–4", title: "Name Approval", desc: "MOA/AOA drafted. Company name applied for through SPICe+ or RUN — usually approved in 1–2 days." },
  { day: "Day 4–7", title: "SPICe+ Filing", desc: "Complete SPICe+ form filed with MCA. PAN, TAN, EPFO, ESIC applications submitted simultaneously." },
  { day: "Day 7–10", title: "Certificate of Incorporation", desc: "MCA approves and issues the Certificate of Incorporation with Corporate Identity Number (CIN)." },
];

const ANNUAL_COMPLIANCE = [
  { form: "4 Board Meetings / year", detail: "Minimum 4 board meetings with not more than 120 days between two consecutive meetings." },
  { form: "1 AGM / year", detail: "Annual General Meeting within 6 months of financial year end (by 30 September)." },
  { form: "AOC-4", detail: "Financial statements filed within 30 days of AGM. Late fee: ₹100/day." },
  { form: "MGT-7 / MGT-7A", detail: "Annual return filed within 60 days of AGM. Late fee: ₹100/day." },
  { form: "ADT-1", detail: "Auditor appointment within 15 days of AGM." },
  { form: "ITR-6", detail: "Income tax return for the company — due 31 October (if audit applicable)." },
  { form: "TDS Returns", detail: "Quarterly 24Q/26Q filings if the company deducts TDS on salaries or payments." },
];

const WHY_POINTS = [
  { icon: Users, title: "CA & CS Assisted", desc: "Your incorporation is handled by qualified Chartered Accountants and Company Secretaries — not automated software alone." },
  { icon: Zap, title: "100% Online", desc: "Share documents via WhatsApp or email. No physical office visit. Track your application status in real-time." },
  { icon: Shield, title: "Government-Compliant", desc: "All filings made directly on MCA portal. We never take shortcuts — your company is incorporated correctly the first time." },
  { icon: FileText, title: "All Documents Drafted", desc: "MOA, AOA, board resolutions, affidavits — all drafted by our team. You only sign where required." },
  { icon: Clock, title: "7–10 Day Turnaround", desc: "We process faster than most — proactive follow-up with MCA and DSC providers keeps the timeline tight." },
  { icon: Building2, title: "Post-Incorporation Support", desc: "Need GST registration, MSME Udyam, or first-year compliance? We handle all of it after incorporation too." },
];

const FAQS = [
  {
    q: "How long does Private Limited Company registration take in India?",
    a: "With all documents in order, Taxvio completes the incorporation process in 7–10 working days. This includes name approval via SPICe+, DIN/DSC processing, MCA verification, and issuance of the Certificate of Incorporation.",
  },
  {
    q: "What is the minimum capital required to start a Private Limited Company?",
    a: "There is no minimum paid-up capital requirement under the Companies Act 2013. You can start with as little as ₹1 as authorised capital, though most companies start with ₹1 lakh for practical banking and operational purposes.",
  },
  {
    q: "How many directors are required for a Private Limited Company?",
    a: "A minimum of 2 directors and a maximum of 15. At least one director must be an Indian resident — meaning they must have stayed in India for at least 182 days in the previous calendar year.",
  },
  {
    q: "What documents are required for Private Limited Company registration?",
    a: "PAN and Aadhaar of all directors and shareholders, passport-size photographs, proof of registered office (utility bill not older than 2 months), NOC from owner (if rented), and Digital Signature Certificates (DSC). Taxvio assists with DSC procurement as part of the package.",
  },
  {
    q: "Can a foreign national be a director in an Indian Private Limited Company?",
    a: "Yes. Foreign nationals can be directors in an Indian Pvt Ltd. They need a valid passport, DIN, and DSC. At least one director must be an Indian resident. Foreign nationals do not need a visa to become a director, but do need one for physical business operations in India.",
  },
  {
    q: "What is the difference between authorised capital and paid-up capital?",
    a: "Authorised capital is the maximum share capital a company is registered to issue. Paid-up capital is the amount actually paid by shareholders. A company with ₹10 lakh authorised capital may have only ₹1 lakh paid-up capital if 10% of shares have been issued and paid for.",
  },
  {
    q: "What annual compliance is required after incorporating?",
    a: "Annual compliance includes: 4 board meetings/year, 1 AGM (within 6 months of FY end), AOC-4 filing (within 30 days of AGM), MGT-7 filing (within 60 days of AGM), statutory audit, ITR-6, and TDS returns if applicable.",
  },
  {
    q: "Can I convert my proprietorship or partnership to a Private Limited Company?",
    a: "Yes — through a slump sale or business transfer agreement. The process involves incorporating a new Pvt Ltd company and transferring assets and liabilities. Taxvio's CA team handles both the incorporation and conversion documentation.",
  },
];

const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Taxvio, I want to register a Private Limited Company. Please guide me.")}`;

/* ─── FAQ Item ───────────────────────────────────────────────────────────────── */
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
          <p className="text-gray-600 text-xs leading-relaxed" itemProp="text">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Client Component ───────────────────────────────────────────────────────── */
export default function PrivateLimitedClient() {
  return (
    <main className="bg-white text-gray-800">

      {/* ══════════════ HERO ══════════════ */}
      <section
        aria-label="Private Limited Company Registration — Taxvio"
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
        {/* Diagonal cut */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
              {[
                { href: "/", label: "Home" },
                { href: "/serviceslist", label: "Services" },
                { href: "/serviceslist/roc", label: "ROC Compliance" },
                { href: null, label: "Private Limited Company" },
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

          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                CA & CS Assisted · 100% Online · 7–10 Working Days
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Private Limited Company
                <span className="block mt-2 text-sky-300">Registration in India</span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Incorporate your <strong className="text-white">Private Limited Company</strong> online in 7–10 working days.
                Our CA & CS team handles name approval, MOA/AOA drafting, DIN/DSC, SPICe+ filing, Certificate of Incorporation,
                and PAN/TAN — end to end. No office visit required.
              </p>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["✅ CA & CS Assisted", "🔒 MCA Compliant", "⚡ 7–10 Day Process", "📋 All-Inclusive Package"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold rounded-full px-3 py-1.5"
                    style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}
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
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                >
                  Free Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right — Price card */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-bold text-white text-sm">Private Limited Company Registration</p>
                <p className="text-xs text-white/50 mt-0.5">All-inclusive · No hidden charges</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  "Name Approval (RUN / SPICe+)",
                  "MOA & AOA Drafting",
                  "DIN & DSC for all directors",
                  "SPICe+ MCA Filing",
                  "Certificate of Incorporation",
                  "PAN & TAN Application",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle size={13} className="text-sky-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5 space-y-3">
                <div
                  className="rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div>
                    <p className="text-white text-xs font-bold">All-Inclusive Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold">₹6,999</p>
                    <p className="text-white/40 text-[10px] mt-0.5">+ Govt. fees as applicable</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(486+)</span>
                  </div>
                </div>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 text-white text-sm font-bold transition-all active:scale-[0.97]"
                >
                  <MessageCircle size={14} /> Get Started on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS STRIP ══════════════ */}
      <section className="bg-[#00416a] py-8" aria-label="Taxvio incorporation statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "1,200+", label: "Companies Incorporated" },
            { val: "7–10", label: "Working Days" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹6,999", label: "All-Inclusive Price" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
              <p className="text-xs text-white/55 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ WHAT'S INCLUDED ══════════════ */}
      <section className="py-20 bg-gray-50" aria-label="What is included in Private Limited Company registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered in ₹6,999
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Our all-inclusive package covers every step of incorporation — from name to Certificate of Incorporation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_INCLUDED.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
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

      {/* ══════════════ INCORPORATION TIMELINE ══════════════ */}
      <section className="py-20 bg-white" aria-label="Private Limited Company registration process timeline">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Process Timeline
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              How Taxvio Incorporates Your Company in 7–10 Days
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-sky-300 hidden sm:block" />
            <div className="space-y-8">
              {TIMELINE.map(({ day, title, desc }) => (
                <div key={day} className="flex gap-6 items-start sm:pl-16 relative">
                  <div className="hidden sm:flex absolute left-0 w-10 h-10 rounded-xl bg-[#00416a] items-center justify-center text-white text-[10px] font-extrabold shrink-0 shadow-md">
                    {day.replace("Day ", "")}
                  </div>
                  <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-[#00416a] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full sm:hidden">
                        {day}
                      </span>
                      <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DOCUMENTS REQUIRED ══════════════ */}
      <section className="py-20 bg-gray-50" aria-label="Documents required for Private Limited Company registration">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Documents Required
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Documents You'll Need to Share
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              All documents are shared via WhatsApp or email — no in-person submission needed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {DOCS_REQUIRED.map(({ category, items }) => (
              <div key={category} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#00416a] flex items-center justify-center">
                    <FileText size={14} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
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
              <strong>Tip:</strong> Utility bills must not be older than 2 months. If the registered office is rented, ensure the NOC clearly states the owner's permission for using the address as a registered office.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ SEO PILLAR CONTENT ══════════════ */}
      <section className="py-20 bg-white" aria-label="Complete guide to Private Limited Company registration in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              What is a Private Limited Company in India?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                A <strong>Private Limited Company (Pvt Ltd)</strong> is the most widely used business structure for startups, growth-stage businesses, and professionally managed ventures in India. It is incorporated under the <strong>Companies Act 2013</strong> and regulated by the Ministry of Corporate Affairs (MCA). The defining features of a Private Limited Company are limited liability, a separate legal identity, restricted transferability of shares, and a prohibition on inviting the public to subscribe to its shares or debentures.
              </p>
              <p>
                The <em>limited liability</em> protection is the most significant advantage — shareholders' personal assets are protected from the company's debts and liabilities. If a Pvt Ltd company goes bankrupt, creditors can only claim against the company's assets, not against the personal property of its directors or shareholders. This makes it a far safer structure for business owners compared to sole proprietorships or partnerships, where personal assets are at risk.
              </p>
              <p>
                The <em>separate legal identity</em> means the company is a distinct legal person in the eyes of the law — separate from its owners. It can own property, enter contracts, open bank accounts, sue, and be sued in its own name. This continuity of existence means the company does not dissolve when a director or shareholder exits — it survives changes in ownership and leadership.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Why Choose a Private Limited Company — Key Advantages
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                <strong>Access to institutional funding</strong> is the single biggest reason startups and growth-oriented businesses choose the Pvt Ltd structure. Angel investors, venture capital firms, private equity funds, and corporate strategic investors almost exclusively invest in Private Limited Companies — because equity can be structured, shares can be issued and transferred, and shareholding can be diluted systematically through rounds. An LLP or proprietorship simply cannot raise equity capital this way.
              </p>
              <p>
                <strong>Higher business credibility</strong> is another major advantage. When dealing with large corporate clients, government tenders, banks, or international partners, a "Pvt Ltd" in your company name signals permanence, governance, and accountability. Many enterprise procurement policies mandate vendor registration as a company (not a proprietorship or partnership).
              </p>
              <p>
                <strong>Tax efficiency through salary structuring</strong> is possible for director-shareholders. A Pvt Ltd can pay salaries, HRA, and allowances to its directors — reducing the company's taxable income while the director optimises personal income tax deductions. This dual-entity structure creates tax planning opportunities that aren't available to proprietors.
              </p>
              <p>
                <strong>ESOP structuring</strong> for employees is only possible in a Private Limited Company. If you plan to attract and retain talent with equity participation, the Pvt Ltd structure is the only route. ESOPs are a critical tool for startups competing with larger organisations for skilled employees.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              SPICe+ — The Single-Window Incorporation Process
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The <strong>SPICe+</strong> (Simplified Proforma for Incorporating Company Electronically Plus) form, introduced by MCA in 2020, is the integrated portal for company registration. It replaced the earlier INC-29 and other multiple-form processes with a single streamlined form that handles all registrations simultaneously.
              </p>
              <p>
                SPICe+ covers: company name reservation, application for DIN (Director Identification Number), PAN and TAN of the company, EPFO (Employees' Provident Fund Organisation) registration, ESIC (Employees' State Insurance Corporation) registration, professional tax registration (Maharashtra), and opening of a bank account with select empanelled banks — all in a single filing. This integration dramatically reduces the time and paperwork required for new businesses to become operational.
              </p>
              <p>
                The AGILE-PRO-S form (linked to SPICe+) handles GST registration, EPFO, ESIC, and bank account simultaneously. This means that by the time your Certificate of Incorporation is issued, your GSTIN application is already in the system — saving you weeks of post-incorporation administrative work.
              </p>
              <p>
                Taxvio's team is fully versed in the SPICe+ workflow — including name availability checks, object clause drafting that passes MCA scrutiny, and the nuances of different registered office proof requirements across states. We've processed hundreds of SPICe+ applications and know exactly what MCA wants to avoid rejection or resubmission delays.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Annual Compliance — What Happens After Incorporation?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Many founders focus entirely on incorporation and overlook the ongoing compliance obligations that begin immediately after the company is incorporated. Understanding these obligations upfront — and budgeting for them — is critical to running a compliant company.
              </p>
            </div>

            {/* Compliance table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 mt-5">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-3 text-left font-bold">Compliance</th>
                    <th className="px-4 py-3 text-left font-bold">Due Date / Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {ANNUAL_COMPLIANCE.map(({ form, detail }) => (
                    <tr key={form} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-[#00416a]">{form}</td>
                      <td className="px-4 py-3 text-gray-600">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                The <strong>penalty for missing ROC filings</strong> is ₹100 per day per form, with no upper cap. A company that misses both AOC-4 and MGT-7 for a full year faces penalties of ₹73,000 (₹100 × 365 × 2). Directors of companies that miss annual filings for three consecutive years are disqualified under Section 164(2) of the Companies Act — meaning they cannot be appointed as director in any other company for 5 years.
              </p>
              <p>
                Taxvio offers <strong>annual compliance packages</strong> for Private Limited Companies that cover statutory audit coordination, board meeting minutes, AOC-4, MGT-7, ADT-1, and ITR-6 — so you never have to track deadlines yourself.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Private Limited Company vs. LLP vs. OPC — Which is Right for You?
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Choosing the right business structure is one of the most consequential decisions you'll make as a founder. Each structure has distinct advantages and trade-offs that depend on your business model, growth ambitions, number of founders, and funding plans.
              </p>
              <p>
                <strong>Choose a Private Limited Company</strong> if you plan to raise equity funding from investors, have multiple co-founders, plan to hire employees with ESOPs, deal with large corporate clients, or intend to scale aggressively. The higher compliance burden of a Pvt Ltd is more than offset by these strategic advantages.
              </p>
              <p>
                <strong>Choose an LLP</strong> if you are a professional services firm (CA/CS/legal/consulting), have a small team, do not plan to raise equity investment, and want lower compliance overhead. LLPs have no mandatory AGM, no mandatory audit below ₹40 lakh turnover, and simpler annual filings (Form 11 and Form 8 only).
              </p>
              <p>
                <strong>Choose an OPC</strong> if you are a solo founder who wants the limited liability protection of a company without a co-founder. OPCs have lighter compliance than Pvt Ltds — no AGM, simplified annual return (MGT-7A). However, OPCs must convert to a Pvt Ltd once paid-up capital exceeds ₹50 lakh or turnover exceeds ₹2 crore in three consecutive years.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Post-Incorporation Essentials — What to Do After Getting Your CoI
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Once you receive your Certificate of Incorporation (CoI), several important steps must be completed within specific timeframes:
              </p>
              <p>
                <strong>Within 30 days:</strong> Open a current bank account in the company's name. Deposit the initial paid-up capital. Appoint the first statutory auditor through a board resolution (to be ratified at the first AGM).
              </p>
              <p>
                <strong>Within 60 days:</strong> File INC-20A (Declaration of Commencement of Business) — mandatory for companies incorporated after 2 November 2018. Non-filing attracts a penalty of ₹50,000 for the company and ₹1,000 per day for each officer in default. The company cannot commence business without filing INC-20A.
              </p>
              <p>
                <strong>As applicable:</strong> Apply for GST registration (mandatory if turnover exceeds threshold, or for interstate supply / e-commerce). Obtain professional tax registration (state-specific). Apply for Import Export Code (IEC) if dealing in imports or exports. Register for MSME Udyam for benefits under the MSME Act.
              </p>
              <p>
                Taxvio's post-incorporation support covers all these steps — INC-20A filing, GST registration, MSME Udyam, IEC, and first-year compliance setup — ensuring your company is fully operational and compliant from day one.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════ WHY TAXVIO ══════════════ */}
      <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for Private Limited Company registration">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Founders Trust Taxvio for Company Registration
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Professional-grade incorporation — at a price that makes sense for early-stage businesses.
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
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="py-20 bg-white" aria-label="Private Limited Company registration FAQs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Everything you need to know about Private Limited Company registration in India.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ RELATED SERVICES ══════════════ */}
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="Related ROC and compliance services">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">Related Services You May Need</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Annual ROC Compliance", desc: "AOC-4, MGT-7 annual filing — ₹3,999", href: "/serviceslist/roc/annual-roc-compliance", icon: "📋" },
              { title: "GST Registration", desc: "GSTIN in 3–7 days — ₹1,499", href: "/serviceslist/gst/gst-registration", icon: "🧾" },
              { title: "Income Tax Filing", desc: "ITR-6 for companies — ₹2,999", href: "/serviceslist/income-tax/itr-proprietor", icon: "💼" },
              { title: "TDS Return Filing", desc: "24Q / 26Q quarterly — ₹999", href: "/serviceslist/income-tax/quarterly-tds", icon: "📊" },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs group-hover:text-[#00416a] transition">{title}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5 leading-snug">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FINAL CTA ══════════════ */}
      <section
        className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
        aria-label="Register your Private Limited Company with Taxvio"
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <TrendingUp size={12} className="text-sky-400" />
            1,200+ Companies Incorporated · 4.9★ Rating · Starting ₹6,999
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Ready to Register Your
            <span className="block mt-1 text-sky-300">Private Limited Company?</span>
          </h2>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Name approval, MOA/AOA, DIN/DSC, SPICe+ filing, Certificate of Incorporation, and PAN/TAN —
            all handled end-to-end by our CA & CS team. Starting ₹6,999. 100% online, 7–10 working days.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
            >
              <MessageCircle size={16} /> WhatsApp Us
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
            <span className="flex items-center gap-1.5"><CheckCircle size={12} /> CA & CS Assisted</span>
            <span className="flex items-center gap-1.5"><Zap size={12} /> Fast Processing</span>
            <span className="flex items-center gap-1.5"><Clock size={12} /> Mon–Sat · 9 AM–7 PM</span>
          </div>
        </div>
      </section>

      <Footar />
    </main>
  );
}