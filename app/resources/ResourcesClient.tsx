// app/resources/ResourcesClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ExternalLink,
  Search,
  MessageCircle,
} from "lucide-react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tax & Compliance Resources | Taxvio",
  description:
    "Free tax and compliance resources from Taxvio — a GST, Income Tax, ROC/MCA, and FSSAI compliance calendar, document checklists, official government portal links, and a glossary of common compliance terms.",
  url: "https://www.taxvio.in/resources",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are Taxvio's resources free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The compliance calendar, document checklists, government portal links, and glossary on this page are free reference material for anyone — you don't need to be a Taxvio client to use them.",
      },
    },
    {
      "@type": "Question",
      name: "Are the due dates on the compliance calendar always accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The dates shown reflect the standard, recurring due dates under GST, Income Tax, ROC/MCA, and FSSAI law. Government authorities occasionally extend deadlines through official notifications, so always confirm the current due date on the relevant portal or with our team before relying on it for a specific filing.",
      },
    },
  ],
};

/* ── DATA ── */
const DUE_DATE_CATEGORIES = [
  { id: "gst", label: "GST" },
  { id: "income-tax", label: "Income Tax" },
  { id: "roc", label: "ROC / MCA" },
  { id: "fssai", label: "FSSAI" },
] as const;

type CategoryId = (typeof DUE_DATE_CATEGORIES)[number]["id"];

const DUE_DATES: Record<
  CategoryId,
  { item: string; dueDate: string; note?: string }[]
> = {
  gst: [
    { item: "GSTR-1 (Monthly filers)", dueDate: "11th of the following month" },
    {
      item: "GSTR-1 (QRMP scheme, quarterly)",
      dueDate: "13th of the month after the quarter",
    },
    {
      item: "GSTR-3B (Monthly)",
      dueDate: "20th of the following month",
      note: "QRMP filers: 22nd/24th depending on state group",
    },
    { item: "CMP-08 (Composition dealers, quarterly)", dueDate: "18th of the month after the quarter" },
    { item: "GSTR-9 (Annual Return)", dueDate: "31st December, following the financial year" },
    { item: "GSTR-9C (Reconciliation Statement, if applicable)", dueDate: "31st December, following the financial year" },
  ],
  "income-tax": [
    { item: "Advance Tax — 1st Installment (15%)", dueDate: "15th June" },
    { item: "Advance Tax — 2nd Installment (45%)", dueDate: "15th September" },
    { item: "Advance Tax — 3rd Installment (75%)", dueDate: "15th December" },
    { item: "Advance Tax — 4th Installment (100%)", dueDate: "15th March" },
    { item: "ITR Filing (Individuals, non-audit cases)", dueDate: "31st July" },
    { item: "Tax Audit Report Filing", dueDate: "30th September" },
    { item: "ITR Filing (Audit cases / companies)", dueDate: "31st October" },
    { item: "TDS Payment (Monthly)", dueDate: "7th of the following month", note: "30th April for March" },
    { item: "TDS Return — Quarterly (24Q/26Q/27Q)", dueDate: "31st of the month after the quarter", note: "Q4 due by 31st May" },
  ],
  roc: [
    { item: "AGM (Annual General Meeting)", dueDate: "Within 6 months of financial year-end", note: "By 30th September for FY ending 31st March" },
    { item: "AOC-4 (Financial Statements)", dueDate: "Within 30 days of AGM" },
    { item: "MGT-7 / MGT-7A (Annual Return)", dueDate: "Within 60 days of AGM" },
    { item: "ADT-1 (Auditor Appointment)", dueDate: "Within 15 days of AGM" },
    { item: "DIR-3 KYC", dueDate: "30th September every year" },
    { item: "DPT-3 (Return of Deposits)", dueDate: "30th June every year" },
    { item: "LLP Form 8 (Statement of Account & Solvency)", dueDate: "30th October every year" },
    { item: "LLP Form 11 (Annual Return)", dueDate: "30th May every year" },
  ],
  fssai: [
    { item: "FSSAI Annual Return (Form D1)", dueDate: "31st May" },
    { item: "FSSAI License Renewal", dueDate: "At least 30 days before expiry" },
  ],
};

const CHECKLISTS = [
  {
    title: "GST Registration Checklist",
    link: "/serviceslist/gst/gst-registration",
    items: [
      "PAN card",
      "Aadhaar card",
      "Business address proof",
      "Bank account details / cancelled cheque",
      "Photograph of proprietor/partners",
      "Business registration proof (if applicable)",
    ],
  },
  {
    title: "ITR Filing Checklist (Salaried)",
    link: "/serviceslist/income-tax/itr-salaried",
    items: [
      "Form 16",
      "Salary slips",
      "Investment proofs (80C, 80D, etc.)",
      "Bank statement",
      "Aadhaar & PAN",
      "Form 26AS / AIS",
    ],
  },
  {
    title: "Private Limited Incorporation Checklist",
    link: "/serviceslist/roc/private-limited-formation",
    items: [
      "PAN & Aadhaar of all directors",
      "Passport-size photographs",
      "Registered office address proof",
      "NOC from property owner (if rented)",
      "Proposed company name options",
      "Digital Signature Certificate (DSC) for directors",
    ],
  },
  {
    title: "FSSAI Registration Checklist",
    link: "/serviceslist/fssai/fssai-registration",
    items: [
      "PAN card",
      "Aadhaar card",
      "Business address proof",
      "Food business category & details",
      "Product list",
      "Passport-size photograph",
    ],
  },
];

const GOVERNMENT_PORTALS = [
  {
    name: "GST Portal",
    url: "https://www.gst.gov.in",
    desc: "GST registration, return filing, and GSTIN search.",
  },
  {
    name: "Income Tax e-Filing Portal",
    url: "https://www.incometax.gov.in",
    desc: "ITR filing, e-verification, and Form 26AS/AIS access.",
  },
  {
    name: "MCA Portal",
    url: "https://www.mca.gov.in",
    desc: "Company & LLP incorporation and ROC filings.",
  },
  {
    name: "TRACES Portal",
    url: "https://www.tdscpc.gov.in",
    desc: "TDS reconciliation, Form 16/16A, and correction statements.",
  },
  {
    name: "FSSAI FoSCoS Portal",
    url: "https://foscos.fssai.gov.in",
    desc: "FSSAI license & registration, renewal, and returns.",
  },
  {
    name: "Udyam Registration Portal",
    url: "https://udyamregistration.gov.in",
    desc: "MSME/Udyam registration for small businesses.",
  },
  {
    name: "DGFT Portal",
    url: "https://www.dgft.gov.in",
    desc: "Import Export Code (IEC) application and trade services.",
  },
  {
    name: "EPFO Portal",
    url: "https://www.epfindia.gov.in",
    desc: "Provident Fund registration and employer/employee services.",
  },
  {
    name: "ESIC Portal",
    url: "https://www.esic.gov.in",
    desc: "Employee State Insurance registration and compliance.",
  },
];

const GLOSSARY = [
  { term: "GSTIN", def: "The 15-digit Goods and Services Tax Identification Number allotted to every GST-registered business." },
  { term: "PAN", def: "Permanent Account Number — a 10-character alphanumeric identifier issued by the Income Tax Department." },
  { term: "TAN", def: "Tax Deduction and Collection Account Number — required by anyone who deducts or collects tax at source." },
  { term: "DIN", def: "Director Identification Number — a unique number required for every director of an Indian company." },
  { term: "DSC", def: "Digital Signature Certificate — used to digitally sign forms filed with the MCA, GST, and Income Tax portals." },
  { term: "MOA", def: "Memorandum of Association — the document defining a company's name, objects, and capital structure." },
  { term: "AOA", def: "Articles of Association — the document setting out a company's internal governance rules." },
  { term: "ITR", def: "Income Tax Return — the annual statement of income filed with the Income Tax Department." },
  { term: "TDS", def: "Tax Deducted at Source — tax deducted by the payer at the time of making certain payments." },
  { term: "TCS", def: "Tax Collected at Source — tax collected by the seller at the time of certain sales." },
  { term: "ROC", def: "Registrar of Companies — the MCA authority responsible for registering and regulating companies and LLPs." },
  { term: "LLP", def: "Limited Liability Partnership — a hybrid business structure combining features of a partnership and a company." },
  { term: "OPC", def: "One Person Company — a company that can be incorporated with a single shareholder." },
  { term: "CIN", def: "Corporate Identity Number — the unique 21-digit number allotted to every registered company." },
  { term: "ARN", def: "Application Reference Number — the tracking number generated after submitting a GST application." },
  { term: "HSN/SAC", def: "Harmonized System of Nomenclature / Services Accounting Code — classification codes used to determine applicable GST rates." },
  { term: "ITC", def: "Input Tax Credit — credit for GST paid on purchases, which can be set off against GST payable on sales." },
  { term: "RCM", def: "Reverse Charge Mechanism — where the recipient, instead of the supplier, is liable to pay GST." },
  { term: "AOC-4", def: "The ROC form used to file a company's financial statements for the year." },
  { term: "MGT-7", def: "The ROC form used to file a company's annual return." },
  { term: "ADT-1", def: "The ROC form used to notify the appointment or reappointment of a statutory auditor." },
  { term: "AGM", def: "Annual General Meeting — the yearly meeting of a company's shareholders required under the Companies Act." },
];

/* ══════════════════════════════════════════════════════════ */
export default function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("gst");
  const [glossarySearch, setGlossarySearch] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const filteredGlossary = useMemo(() => {
    if (!glossarySearch.trim()) return GLOSSARY;
    const q = glossarySearch.toLowerCase();
    return GLOSSARY.filter(
      (g) => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)
    );
  }, [glossarySearch]);

  const faqs = [
    {
      q: "Are these resources free to use?",
      a: "Yes — the compliance calendar, document checklists, government portal links, and glossary on this page are free for anyone to use, whether or not you're a Taxvio client.",
    },
    {
      q: "How often is the compliance calendar updated?",
      a: "We review it periodically against the latest CBIC, CBDT, MCA, and FSSAI notifications. That said, deadlines are sometimes extended at short notice, so always cross-check the exact date on the official portal before a filing.",
    },
    {
      q: "Can I get personalized help instead of using these resources?",
      a: "Absolutely — these resources are a starting point. If you'd rather have our CA & CS team handle a filing directly, reach out via WhatsApp or the contact form and we'll take it from there.",
    },
    {
      q: "Where can I find calculators for GST or Income Tax?",
      a: "Head over to our Free Tools page for calculators and utilities — GST calculators, tax estimators, and more.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Resources</span>
            </nav>

            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              📚 Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
              Tax & Compliance
              <br />
              <span className="text-[#7ecbf0]">Resources</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
              A free, at-a-glance reference for staying on top of{" "}
              <strong className="text-white">
                GST, Income Tax, ROC/MCA, and FSSAI
              </strong>{" "}
              compliance — a due-date calendar, document checklists,
              official government portal links, and a plain-language
              glossary of common terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools"
                className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
              >
                Explore Free Tools →
              </Link>
              <Link
                href="/guide"
                className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
              >
                Read Our Guides
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUICK NAV ── */}
        <section className="py-10 bg-gray-50 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Compliance Calendar", href: "#due-dates", icon: "🗓️" },
              { label: "Document Checklists", href: "#checklists", icon: "✅" },
              { label: "Government Portals", href: "#portals", icon: "🔗" },
              { label: "Glossary", href: "#glossary", icon: "📖" },
            ].map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="bg-white border rounded-xl p-4 text-center hover:border-[#00416a] hover:shadow-md transition"
              >
                <div className="text-2xl mb-1">{n.icon}</div>
                <p className="text-sm font-semibold text-[#00416a]">
                  {n.label}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* DUE DATE CALENDAR */}
          <section id="due-dates" className="scroll-mt-24">
            <SectionLabel text="Compliance Calendar" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Recurring Compliance Due Dates
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The standard, recurring due dates for common GST, Income Tax,
              ROC/MCA, and FSSAI filings. These can be extended by government
              notification — confirm the current deadline before relying on
              it for a specific filing.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {DUE_DATE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#00416a] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#00416a]/5">
                    <th className="text-left p-4 font-bold text-[#00416a]">
                      Filing / Compliance
                    </th>
                    <th className="text-left p-4 font-bold text-[#00416a]">
                      Standard Due Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DUE_DATES[activeCategory].map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 font-semibold text-gray-800 align-top">
                        {row.item}
                      </td>
                      <td className="p-4 text-gray-600 align-top">
                        {row.dueDate}
                        {row.note && (
                          <span className="block text-xs text-gray-400 mt-1">
                            {row.note}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-sm text-gray-700">
              <strong className="text-blue-800">Note:</strong> Dates shown
              are standard/indicative and can shift due to weekends,
              holidays, or government extensions. For a filing you're about
              to make, we recommend confirming on the relevant portal or{" "}
              <a
                href="https://wa.me/918937980366"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00416a] font-semibold underline"
              >
                checking with our team
              </a>
              .
            </div>
          </section>

          {/* CHECKLISTS */}
          <section id="checklists" className="scroll-mt-24">
            <SectionLabel text="Document Checklists" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Document Checklists
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Quick-reference document lists for some of our most requested
              services — gather these before you start to speed up your
              filing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {CHECKLISTS.map((cl) => (
                <div
                  key={cl.title}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-bold text-[#00416a] mb-4">
                    {cl.title}
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {cl.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-green-600 font-bold mt-0.5">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={cl.link}
                    className="text-sm text-[#00416a] font-semibold hover:underline"
                  >
                    Start this service →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* GOVERNMENT PORTALS */}
          <section id="portals" className="scroll-mt-24">
            <SectionLabel text="Official Links" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Government Portal Quick Links
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Direct links to the official government portals you'll need
              for filings, verification, and status checks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GOVERNMENT_PORTALS.map((portal) => (
                <a
                  key={portal.name}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 border rounded-2xl p-5 hover:border-[#00416a]/40 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-[#00416a] text-sm">
                      {portal.name}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="text-gray-400 group-hover:text-[#00416a] transition shrink-0 mt-0.5"
                    />
                  </div>
                  <p className="text-xs text-gray-600">{portal.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* GLOSSARY */}
          <section id="glossary" className="scroll-mt-24">
            <SectionLabel text="Glossary" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Compliance Glossary
            </h2>
            <p className="text-gray-600 mb-6 max-w-3xl">
              Plain-language definitions for the acronyms and terms you'll
              run into across GST, Income Tax, and ROC/MCA compliance.
            </p>

            <div className="relative mb-8 max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Search a term (e.g. GSTIN, TDS, MOA)..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition"
              />
            </div>

            {filteredGlossary.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredGlossary.map((g) => (
                  <div
                    key={g.term}
                    className="bg-white border-2 border-gray-100 rounded-xl p-4"
                  >
                    <p className="font-bold text-[#00416a] text-sm mb-1">
                      {g.term}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {g.def}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No terms match "{glossarySearch}". Try a different keyword.
              </p>
            )}
          </section>

          {/* MORE WAYS TO LEARN */}
          <section id="more">
            <SectionLabel text="Keep Exploring" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              More Ways to Learn
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Guides",
                  icon: "📘",
                  link: "/guide",
                  desc: "Step-by-step explainers on compliance topics",
                },
                {
                  title: "Blog",
                  icon: "✍️",
                  link: "/blog",
                  desc: "Updates on rules, deadlines, and rate changes",
                },
                {
                  title: "Free Tools",
                  icon: "🧮",
                  link: "/tools",
                  desc: "Calculators and utilities for quick estimates",
                },
                {
                  title: "Client Reviews",
                  icon: "⭐",
                  link: "/reviews",
                  desc: "See what other businesses say about Taxvio",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group border rounded-2xl overflow-hidden"
                  open={faqOpen === i}
                  onToggle={(e) =>
                    setFaqOpen(
                      (e.target as HTMLDetailsElement).open ? i : null
                    )
                  }
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span>{f.q}</span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Need Personalized Help?
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Skip the Research — Talk to Our CA Team
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Resources are a great starting point, but if you'd
                    rather have your filing handled end-to-end, our team is
                    ready to help.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20have%20a%20compliance%20question"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />
      </main>
    </>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}