// app/serviceslist/income-tax/quarterly-tcs/QuarterlyTCSClient.tsx
"use client";

import { useState, useEffect } from "react";
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
  Phone,
  MessageCircle,
  Star,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Search,
  Calculator,
  Calendar,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello Taxvio, I need help with quarterly TCS return filing (Form 27EQ). Please guide me."
)}`;

/* ─── Who must file TCS ──────────────────────────────────────────────────────── */
const WHO_MUST_FILE = [
  {
    icon: "🏭",
    title: "High-Turnover Goods Sellers",
    section: "Section 206C(1H)",
    desc: "Sellers with aggregate turnover exceeding ₹10 crore in the preceding FY must collect TCS at 0.1% from buyers whose purchases exceed ₹50 lakh in the current year.",
  },
  {
    icon: "🏦",
    title: "Authorised Dealers & Banks",
    section: "Section 206C(1G) — LRS",
    desc: "Banks and money changers collecting remittances under the Liberalised Remittance Scheme (LRS) above ₹7 lakh per year must collect TCS — at 20% for most remittances from October 2023.",
  },
  {
    icon: "✈️",
    title: "Tour Operators",
    section: "Section 206C(1G) — Tour",
    desc: "Travel agents and tour operators selling overseas tour packages must collect TCS from the first rupee — 5% up to ₹7 lakh and 20% above — with no minimum threshold.",
  },
  {
    icon: "🚗",
    title: "Motor Vehicle Dealers",
    section: "Section 206C(1F)",
    desc: "Dealers selling motor vehicles exceeding ₹10 lakh in value must collect TCS at 1% from the buyer at the time of receipt of sale consideration.",
  },
  {
    icon: "⚙️",
    title: "Scrap & Mineral Sellers",
    section: "Section 206C(1)",
    desc: "Sellers of scrap, coal, lignite, iron ore, tendu leaves, timber (forest lease or otherwise), and other forest produce must collect TCS under their respective subsections at prescribed rates.",
  },
  {
    icon: "🍾",
    title: "Liquor & Parking Contractors",
    section: "Section 206C(1) & (1C)",
    desc: "Sellers of alcohol for human consumption, and persons operating parking lots, toll plazas, and quarrying or mining contracts are required to collect TCS and file Form 27EQ quarterly.",
  },
];

/* ─── What's included ────────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
  {
    icon: "🔍",
    title: "TCS Applicability Assessment",
    desc: "We verify your TAN, assess which TCS sections apply (206C(1H), 206C(1G), 206C(1F), 206C(1)) and set up buyer-tracking systems to ensure correct threshold monitoring throughout the year.",
  },
  {
    icon: "📊",
    title: "Buyer-Wise Register & Threshold Tracking",
    desc: "For 206C(1H), we maintain buyer-wise purchase registers and flag the ₹50 lakh threshold crossing for each buyer — ensuring TCS is collected at the right point and not missed or over-collected.",
  },
  {
    icon: "🧾",
    title: "Challan Verification & Reconciliation",
    desc: "All TCS challans deposited during the quarter are verified — BSR code, serial number, date, and amount matched against bank records and TRACES data. Mismatches resolved before return filing.",
  },
  {
    icon: "📝",
    title: "Form 27EQ Preparation & Filing",
    desc: "TCS return prepared in FVU format with all collectee entries, section-wise challan mapping, and uploaded on TRACES before the 15th of the month following quarter-end.",
  },
  {
    icon: "🪪",
    title: "Form 27D Generation & Issuance",
    desc: "TCS certificates (Form 27D) downloaded from TRACES and issued to every buyer within 15 days of the Form 27EQ due date — ensuring buyers can claim their TCS credit in ITR on time.",
  },
  {
    icon: "⚠️",
    title: "194Q vs 206C(1H) Overlap Check",
    desc: "Critical compliance step — we identify transactions where the buyer has already deducted TDS under Section 194Q, so 206C(1H) TCS is not double-collected on the same transaction.",
  },
];

/* ─── Process steps ─────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: "01",
    title: "TAN Verification & TCS Section Mapping",
    desc: "Share your TAN, business type and transaction details. We assess applicable TCS sections (206C(1H), 206C(1G), 206C(1F), or 206C(1)) and set up buyer-wise tracking for threshold monitoring across the quarter.",
  },
  {
    step: "02",
    title: "Quarterly TCS Collection Data & Challan Details",
    desc: "Share buyer-wise transaction data, TCS amounts collected, and challan deposit details (Challan 281 — BSR code, serial number, date, amount) for the quarter. We cross-verify against TRACES challan data.",
  },
  {
    step: "03",
    title: "TCS Computation & Rate Verification",
    desc: "Each collection is mapped to the correct section, rate checked (including higher rate for buyers with missing PAN/Aadhaar under Section 206CC), and total TCS reconciled with challan deposits. 194Q overlap check performed.",
  },
  {
    step: "04",
    title: "TRACES Reconciliation & Error Resolution",
    desc: "Full reconciliation of challan data on TRACES against Form 26AS before filing. Any defaults from previous quarters (short deduction, late payment, short payment) identified and addressed before fresh return upload.",
  },
  {
    step: "05",
    title: "Form 27EQ Preparation & Filing",
    desc: "TCS return prepared in FVU (File Validation Utility) format with all collectee entries, challan mapping, and section-wise breakup. Validated and filed on TRACES before the 15th of the month after quarter-end.",
  },
  {
    step: "06",
    title: "Form 27D Generation & Buyer Delivery",
    desc: "Form 27D TCS certificates downloaded from TRACES for each buyer and delivered within 15 days of the return due date. Filing acknowledgement shared with you for your records.",
  },
];

/* ─── Due dates data ─────────────────────────────────────────────────────────── */
const DUE_DATES = [
  {
    quarter: "Q1",
    period: "April – June 2025",
    challan: "7th of each month",
    form27eq: "15th July 2025",
    form27d: "By 30th July 2025",
  },
  {
    quarter: "Q2",
    period: "July – September 2025",
    challan: "7th of each month",
    form27eq: "15th October 2025",
    form27d: "By 30th October 2025",
  },
  {
    quarter: "Q3",
    period: "October – December 2025",
    challan: "7th of each month",
    form27eq: "15th January 2026",
    form27d: "By 30th January 2026",
  },
  {
    quarter: "Q4",
    period: "January – March 2026",
    challan: "30th April 2026 (March)",
    form27eq: "15th May 2026",
    form27d: "By 30th May 2026",
  },
];

/* ─── TCS Rates ──────────────────────────────────────────────────────────────── */
const TCS_RATES = [
  { section: "206C(1)(a)", nature: "Alcoholic liquor for human consumption", threshold: "No threshold", rate: "1%", noPan: "5%" },
  { section: "206C(1)(b)", nature: "Tendu leaves", threshold: "No threshold", rate: "5%", noPan: "10%" },
  { section: "206C(1)(c)", nature: "Timber obtained under forest lease", threshold: "No threshold", rate: "2.5%", noPan: "5%" },
  { section: "206C(1)(d)", nature: "Timber obtained by any other mode", threshold: "No threshold", rate: "2.5%", noPan: "5%" },
  { section: "206C(1)(e)", nature: "Other forest produce (not timber/tendu)", threshold: "No threshold", rate: "2.5%", noPan: "5%" },
  { section: "206C(1)(f)", nature: "Scrap", threshold: "No threshold", rate: "1%", noPan: "2%" },
  { section: "206C(1)(g)", nature: "Minerals — coal, lignite, iron ore", threshold: "No threshold", rate: "1%", noPan: "2%" },
  { section: "206C(1C)", nature: "Parking lots, toll plazas, mining & quarrying", threshold: "No threshold", rate: "2%", noPan: "4%" },
  { section: "206C(1F)", nature: "Motor vehicle sale (value > ₹10 lakh)", threshold: "₹10,00,000 per vehicle", rate: "1%", noPan: "2%" },
  { section: "206C(1G) — General LRS", nature: "Foreign remittance under LRS (general)", threshold: "₹7,00,000/year", rate: "20%", noPan: "20%" },
  { section: "206C(1G) — Edu loan", nature: "LRS for education via bank loan (Sec 80E)", threshold: "₹7,00,000/year", rate: "0.5%", noPan: "1%" },
  { section: "206C(1G) — Edu/Medical", nature: "LRS for education/medical (own funds)", threshold: "₹7,00,000/year", rate: "5%", noPan: "10%" },
  { section: "206C(1G) — Tour", nature: "Overseas tour package (tour operator)", threshold: "No threshold — first rupee", rate: "5% (≤₹7L) / 20% (>₹7L)", noPan: "20%" },
  { section: "206C(1H)", nature: "Sale of goods (seller turnover > ₹10 Cr)", threshold: "Buyer purchases > ₹50,00,000", rate: "0.1%", noPan: "1%" },
];

/* ─── Penalties ──────────────────────────────────────────────────────────────── */
const PENALTIES = [
  {
    icon: "💸",
    title: "Section 234E — Late Filing Fee",
    tag: "₹200/Day",
    badgeColor: "bg-red-500",
    desc: "Mandatory ₹200 per day from the due date of Form 27EQ until filing. Maximum = TCS amount. No waiver. Automatically calculated and must be paid before the return can be submitted.",
  },
  {
    icon: "📉",
    title: "Section 206C(7) — Interest on Late Deposit",
    tag: "1%/Month",
    badgeColor: "bg-orange-500",
    desc: "Interest at 1% per month (or part thereof) from the date TCS was collectible to the date of actual deposit. Charged even if deposit is one day late.",
  },
  {
    icon: "⚖️",
    title: "Section 271H — Non-Filing Penalty",
    tag: "₹10K–₹1L",
    badgeColor: "bg-amber-500",
    desc: "If Form 27EQ is not filed within one year of the due date, the Assessing Officer can levy a penalty between ₹10,000 and ₹1,00,000 — in addition to Section 234E late filing fees.",
  },
  {
    icon: "🚔",
    title: "Section 276BB — Criminal Prosecution",
    tag: "3M–7 Years",
    badgeColor: "bg-red-700",
    desc: "Wilful failure to deposit TCS after collection can lead to imprisonment of 3 months to 7 years plus fine. Directors and persons in charge of the company are personally liable.",
  },
];

/* ─── Why Taxvio ─────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
  { icon: Users, title: "CA-Assisted Filing", desc: "Every Form 27EQ is reviewed and filed by qualified Chartered Accountants — not automated software without professional oversight." },
  { icon: Search, title: "194Q vs 206C(1H) Overlap Check", desc: "We identify transactions where buyer TDS under 194Q applies, preventing double-compliance and protecting you from over-collection disputes." },
  { icon: Calendar, title: "Proactive Deadline Tracking", desc: "TCS due dates are 15 days earlier than TDS dates — a common oversight. Taxvio's calendar ensures you never miss the 15th of the filing month." },
  { icon: FileText, title: "Form 27D Delivery Managed", desc: "TCS certificates issued to every buyer within 15 days of the return due date — protecting buyer relationships and preventing credit mismatch disputes." },
  { icon: Zap, title: "TRACES Reconciliation", desc: "Full challan reconciliation on TRACES before each filing. Previous quarter defaults identified and resolved so each new filing is clean." },
  { icon: RefreshCw, title: "Annual TCS Compliance Package", desc: "All 4 quarters managed at a discounted annual rate. Buyer register maintenance, challan tracking, Form 27EQ filing and Form 27D issuance — end to end." },
];

/* ─── Testimonials ───────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    stars: 5,
    text: "We deal in scrap and TCS on 206C(1)(f) is mandatory for us. Taxvio handles all four quarterly Form 27EQ filings seamlessly — zero notices in three years.",
    name: "Sharma Scrap Traders",
    location: "Khatauli",
  },
  {
    stars: 5,
    text: "With vehicle sales over ₹10 lakh, TCS under 206C(1F) applies to us. Taxvio manages our Form 27D issuance to buyers on time every quarter, keeping them happy.",
    name: "Gupta Auto Dealers",
    location: "Muzaffarnagar",
  },
  {
    stars: 5,
    text: "Our turnover crossed ₹10 crore, making Section 206C(1H) applicable. Taxvio set up our buyer tracking system and files Form 27EQ every quarter with zero errors.",
    name: "Verma Exports Pvt. Ltd.",
    location: "Meerut",
  },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is TCS and who is required to collect it?",
    a: "TCS (Tax Collected at Source) under Section 206C is collected by the seller from the buyer at the time of receiving sale consideration. Sellers of scrap, minerals, forest produce, tendu leaves, alcohol, vehicle dealers (vehicles > ₹10L), tour operators, authorised dealers for LRS remittances, and sellers with turnover > ₹10 crore on goods sales > ₹50 lakh (Section 206C(1H)) must collect TCS and file quarterly Form 27EQ.",
  },
  {
    q: "What are the due dates for quarterly TCS return filing in FY 2025-26?",
    a: "Form 27EQ must be filed quarterly: Q1 by 15th July 2025, Q2 by 15th October 2025, Q3 by 15th January 2026, and Q4 by 15th May 2026. These are 15 days earlier than TDS return due dates — a very common oversight that triggers ₹200/day late filing fees under Section 234E.",
  },
  {
    q: "What is Section 206C(1H) TCS on sale of goods?",
    a: "Section 206C(1H) requires sellers with aggregate turnover > ₹10 crore in the previous FY to collect TCS at 0.1% from buyers whose purchases from that seller exceed ₹50 lakh in the current FY. TCS is collected at the time of receipt of consideration. If the buyer doesn't provide PAN/Aadhaar, the rate doubles to 1%. Importantly, if the buyer deducts TDS under Section 194Q, the seller need not collect TCS on that transaction.",
  },
  {
    q: "What is the TCS rate on foreign remittance under LRS from October 2023?",
    a: "From October 2023: 20% on most LRS remittances above ₹7 lakh per year; 0.5% for education via bank loan (Section 80E); 5% for education/medical from own funds above ₹7 lakh; 5% (up to ₹7L) and 20% (above ₹7L) for overseas tour packages with no threshold. The remitter can claim TCS credit against their income tax liability.",
  },
  {
    q: "What is Form 27D and when must it be issued?",
    a: "Form 27D is the TCS certificate issued by the seller to the buyer after filing Form 27EQ. It shows TCS amount collected and deposited. Form 27D must be issued within 15 days of the Form 27EQ due date for each quarter. Buyers use it to claim TCS credit in their ITR. Failure to issue Form 27D on time can damage buyer relationships and attract complaints.",
  },
  {
    q: "Can TDS and TCS both apply on the same transaction?",
    a: "No — there is a specific non-overlap rule. Section 206C(1H) TCS does not apply where the buyer has already deducted TDS under Section 194Q on the same transaction. When a buyer's aggregate purchases from a seller exceed ₹50 lakh and the buyer is liable for 194Q TDS, the seller need not collect 206C(1H) TCS on that portion. The TDS obligation rests on the buyer in such cases.",
  },
  {
    q: "What is the penalty for not filing TCS return on time?",
    a: "Late filing of Form 27EQ attracts ₹200 per day under Section 234E (mandatory, no waiver) from the due date until filing. The Assessing Officer can also levy ₹10,000 to ₹1,00,000 penalty under Section 271H for non-filing. Interest at 1% per month under Section 206C(7) applies on late TCS deposit. Criminal prosecution under Section 276BB (3 months to 7 years imprisonment) is possible for wilful non-deposit.",
  },
  {
    q: "What is TCS on motor vehicles under Section 206C(1F)?",
    a: "Under Section 206C(1F), a dealer selling a motor vehicle exceeding ₹10 lakh in value must collect TCS at 1% from the buyer at the time of receiving sale consideration. If the buyer does not furnish PAN/Aadhaar, the rate doubles to 2%. This TCS is deposited by the dealer and the buyer can claim it as advance tax credit in their ITR.",
  },
];

/* ─── Deadline Banner (dynamic) ─────────────────────────────────────────────── */
function DeadlineBanner() {
  const [nextDeadline, setNextDeadline] = useState<{
    label: string;
    daysLeft: number;
  } | null>(null);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const deadlines = [
      { label: "Q1 TCS Return (Apr–Jun)", date: new Date(`July 15, ${year}`) },
      { label: "Q2 TCS Return (Jul–Sep)", date: new Date(`October 15, ${year}`) },
      { label: "Q3 TCS Return (Oct–Dec)", date: new Date(`January 15, ${year + 1}`) },
      { label: "Q4 TCS Return (Jan–Mar)", date: new Date(`May 15, ${year + 1}`) },
    ];
    const upcoming = deadlines.find((d) => d.date.getTime() > today.getTime());
    if (upcoming) {
      const daysLeft = Math.ceil(
        (upcoming.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      setNextDeadline({ label: upcoming.label, daysLeft });
    }
  }, []);

  return (
    <div
      className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed"
      role="alert"
      aria-live="polite"
    >
      ⏳ Next TCS Return Deadline:{" "}
      {nextDeadline ? (
        <>
          <strong>{nextDeadline.label}</strong> —{" "}
          <strong>{nextDeadline.daysLeft} days left</strong>
        </>
      ) : (
        "File on time"
      )}{" "}
      | Late filing: <strong>₹200/day under Section 234E</strong> — No waiver
      | TCS due dates are <strong>15 days earlier</strong> than TDS
    </div>
  );
}

/* ─── Fee Calculator ─────────────────────────────────────────────────────────── */
function TCSFeeCalculator() {
  const [buyers, setBuyers] = useState(0);
  const [sections, setSections] = useState<string[]>([]);
  const [fee, setFee] = useState(999);
  const [label, setLabel] = useState("");

  const sectionOptions = [
    "206C(1H) — Sale of Goods",
    "206C(1G) — LRS / Tour Packages",
    "206C(1F) — Motor Vehicles",
    "206C(1) — Scrap / Minerals / Forest",
  ];

  useEffect(() => {
    const base =
      buyers <= 10
        ? 999
        : buyers <= 50
        ? 1999
        : buyers <= 200
        ? 2999
        : 3999;
    const extra = sections.length > 1 ? (sections.length - 1) * 500 : 0;
    setFee(base + extra);
    setLabel(
      buyers <= 10
        ? "Basic — Up to 10 buyer entries per quarter"
        : buyers <= 50
        ? "Standard — Up to 50 buyer entries per quarter"
        : buyers <= 200
        ? "Business — Up to 200 buyer entries per quarter"
        : "Enterprise — 200+ buyer entries per quarter"
    );
  }, [buyers, sections]);

  const toggleSection = (s: string) =>
    setSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <section className="py-20 bg-gray-50" aria-label="TCS filing fee estimator">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Fee Estimator
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
            Estimate Your Quarterly TCS Filing Fee
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
            Fees depend on the number of buyer/collectee entries and the TCS
            sections applicable to your business.
          </p>
        </div>

        <div
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
          role="region"
          aria-label="TCS Return Filing Fee Calculator"
        >
          <div className="mb-6">
            <label
              htmlFor="buyers-input"
              className="block font-bold text-gray-700 text-sm mb-2"
            >
              Number of Buyers / Collectees Per Quarter
            </label>
            <input
              id="buyers-input"
              type="number"
              placeholder="e.g. 30"
              min={0}
              className="border border-gray-200 p-3 rounded-xl w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] transition"
              onChange={(e) => setBuyers(Number(e.target.value))}
            />
          </div>

          <div className="mb-8">
            <p className="font-bold text-gray-700 text-sm mb-3">
              TCS Sections Applicable (select all that apply)
            </p>
            <div className="flex flex-wrap gap-3">
              {sectionOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => toggleSection(opt)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition border ${
                    sections.includes(opt)
                      ? "bg-[#00416a] text-white border-[#00416a]"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#00416a]/50"
                  }`}
                  aria-pressed={sections.includes(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-5">
            <p className="text-sm text-gray-600 font-medium mb-1">{label}</p>
            <p
              className="text-[#00416a] font-extrabold"
              aria-live="polite"
            >
              <span className="text-3xl">
                ₹{fee.toLocaleString("en-IN")}
              </span>
              <span className="text-sm font-semibold text-gray-500 ml-2">
                / quarter
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Per quarter (professional fee). Annual package (all 4 quarters)
              available at a discounted rate. Form 27D generation and TRACES
              correction statements charged separately if needed. GST extra.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition active:scale-[0.97]"
            >
              <MessageCircle size={13} /> Get Started — ₹{fee.toLocaleString("en-IN")}/Quarter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
export default function QuarterlyTCSClient() {
  return (
    <main className="bg-white text-gray-800">
      <DeadlineBanner />

      {/* ══════ HERO ══════ */}
      <section
        aria-label="Quarterly TCS Return Filing India — Taxvio"
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
                { href: "/serviceslist/income-tax", label: "Income Tax" },
                { href: null, label: "Quarterly TCS Return" },
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
            🧾 Quarterly TCS Return — Form 27EQ · Section 206C · FY 2025-26
          </div>

          <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">
            {/* ── Left ── */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                Quarterly TCS Return
                <span className="block mt-2 text-sky-300">
                  Filing Services India
                </span>
              </h1>

              <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                Accurate and timely quarterly{" "}
                <strong className="text-white">Form 27EQ filing</strong> for
                businesses, traders, vehicle dealers, authorised dealers and
                tour operators. TCS on{" "}
                <strong className="text-white">
                  sale of goods (206C(1H))
                </strong>
                ,{" "}
                <strong className="text-white">
                  LRS foreign remittance (206C(1G))
                </strong>
                , scrap, minerals, Form 27D generation and TRACES
                reconciliation. Starting{" "}
                <strong className="text-white">₹999/quarter</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "✅ Form 27EQ Filing",
                  "📋 Form 27D Generation",
                  "🔒 194Q Overlap Check",
                  "⚡ TRACES Reconciliation",
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
                  <MessageCircle size={16} /> File TCS Return — ₹999/Qtr
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
                  "Section 206C(1H) Goods",
                  "Section 206C(1G) LRS",
                  "Section 206C(1F) Vehicles",
                  "Form 27D Issued to Buyers",
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
                  TCS Filing — Key Facts
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  FY 2025-26 · Transparent pricing
                </p>
              </div>

              <div className="p-5 space-y-3.5">
                {[
                  { label: "Return Form", val: "Form 27EQ" },
                  { label: "Certificate Issued", val: "Form 27D" },
                  { label: "Governing Section", val: "Section 206C" },
                  { label: "Filing Frequency", val: "Quarterly" },
                  { label: "Q1 Due Date", val: "15th July 2025" },
                  { label: "Late Filing Penalty", val: "₹200/day (Sec 234E)" },
                  { label: "Late Deposit Interest", val: "1%/month (Sec 206C(7))" },
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
                      Starting From
                    </p>
                    <p className="text-sky-300 text-2xl font-extrabold">
                      ₹999
                    </p>
                    <p className="text-white/40 text-[10px] mt-0.5">
                      Per quarter · GST extra
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={13} className="fill-amber-400" />
                    <span className="text-white font-bold text-sm">4.9</span>
                    <span className="text-white/40 text-xs">(195+)</span>
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
      <section className="bg-[#00416a] py-8" aria-label="Taxvio TCS filing statistics">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "195+", label: "TCS Returns Filed" },
            { val: "4 Qtrs", label: "Annual Package Available" },
            { val: "4.9★", label: "Average Rating" },
            { val: "₹999", label: "Starting / Quarter" },
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

      {/* ══════ WHO MUST FILE ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Who must collect TCS and file Form 27EQ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Applicability
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
            Who Must Collect TCS and File Form 27EQ?
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
            TCS compliance has significantly expanded since 2020. Check whether
            your business falls under any of these categories — each requires
            quarterly Form 27EQ filing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHO_MUST_FILE.map(({ icon, title, section, desc }) => (
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
      <section className="py-20 bg-white" aria-label="What is included in quarterly TCS return filing service">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Everything Covered Starting ₹999/Quarter
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              From buyer register maintenance to Form 27D delivery — Taxvio
              handles your complete quarterly TCS cycle.
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

      {/* ══════ DUE DATES TABLE ══════ */}
      <section
        id="due-dates"
        className="py-20 bg-gray-50"
        aria-label="TCS return filing due dates FY 2025-26"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Due Dates
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Quarterly TCS Return Due Dates — FY 2025-26
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              TCS due dates are{" "}
              <strong className="text-gray-700">
                15 days earlier than TDS due dates
              </strong>{" "}
              — the most common oversight that triggers automatic ₹200/day
              penalties.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold">Quarter</th>
                  <th className="px-4 py-3.5 text-left font-bold">Period</th>
                  <th className="px-4 py-3.5 text-left font-bold">Challan Due</th>
                  <th className="px-4 py-3.5 text-left font-bold">Form 27EQ Due</th>
                  <th className="px-4 py-3.5 text-left font-bold">Form 27D Issuance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {DUE_DATES.map(({ quarter, period, challan, form27eq, form27d }, i) => (
                  <tr
                    key={quarter}
                    className={`hover:bg-blue-50/20 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                    }`}
                  >
                    <td className="px-4 py-3.5 font-bold text-[#00416a]">
                      {quarter}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">{period}</td>
                    <td className="px-4 py-3.5 text-gray-600">{challan}</td>
                    <td className="px-4 py-3.5 font-semibold text-gray-800">
                      {form27eq}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">{form27d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Critical:</strong> TCS returns are due on the{" "}
              <strong>15th</strong> of the month after quarter-end — NOT the
              31st like TDS returns. Late filing triggers{" "}
              <strong>₹200/day under Section 234E</strong> with no waiver
              provision. The fee must be paid before the return can be
              submitted.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ TCS RATES TABLE ══════ */}
      <section className="py-20 bg-white" aria-label="TCS rates under all sections FY 2025-26">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Rate Reference
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              TCS Rates Under All Sections — FY 2025-26
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Complete TCS rate reference for all Section 206C sub-sections.
              Note the doubled rates when buyer PAN/Aadhaar is not furnished.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#00416a] text-white">
                  <th className="px-4 py-3.5 text-left font-bold whitespace-nowrap">Section</th>
                  <th className="px-4 py-3.5 text-left font-bold">Nature of Transaction</th>
                  <th className="px-4 py-3.5 text-left font-bold">Threshold</th>
                  <th className="px-4 py-3.5 text-left font-bold">TCS Rate</th>
                  <th className="px-4 py-3.5 text-left font-bold text-red-300">No PAN Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {TCS_RATES.map(({ section, nature, threshold, rate, noPan }, i) => (
                  <tr
                    key={section}
                    className={`hover:bg-blue-50/20 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                    }`}
                  >
                    <td className="px-4 py-3 font-bold text-[#00416a] whitespace-nowrap">
                      {section}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{nature}</td>
                    <td className="px-4 py-3 text-gray-500">{threshold}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">
                      {rate}
                    </td>
                    <td className="px-4 py-3 font-semibold text-red-600">
                      {noPan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>PAN/Aadhaar mandatory:</strong> If a buyer fails to
              furnish their PAN or Aadhaar to the seller, TCS rates double
              under Section 206CC. Always collect buyer PAN before invoicing to
              avoid collecting at the higher rate and creating reconciliation
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ 6-STEP PROCESS ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Quarterly TCS return filing process with Taxvio">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-12">
            Taxvio's 6-Step Quarterly TCS Filing Process
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

      {/* ══════ PENALTIES ══════ */}
      <section className="py-20 bg-white" aria-label="TCS non-compliance penalties India">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Penalties & Consequences
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              TCS Non-Compliance — What It Costs You
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              TCS penalties are automatic, compounding and have no waiver
              provision for late filing fees under Section 234E.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PENALTIES.map(({ icon, title, tag, badgeColor, desc }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-xl shrink-0">
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

          <div className="mt-6 flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-4">
            <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700 leading-relaxed">
              <strong>Buyer impact:</strong> If the seller does not file Form
              27EQ or files incorrectly, the TCS collected from the buyer does
              not appear in the buyer's{" "}
              <strong>Form 26AS or AIS</strong> — preventing the buyer from
              claiming the credit. This causes buyer complaints, disputes and
              can damage critical business relationships.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ SEO PILLAR CONTENT ══════ */}
      <section className="py-20 bg-gray-50" aria-label="Complete guide to TCS return filing in India">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Complete Guide to Quarterly TCS Return Filing in India — FY 2025-26
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Tax Collected at Source (TCS) is a compliance obligation under
                Section 206C of the Income Tax Act, 1961, where the{" "}
                <strong>seller collects tax from the buyer</strong> at the time
                of sale of specified goods or at the time of receipt of sale
                consideration — whichever is earlier. Unlike TDS where the
                payer deducts tax from the payee's amount, in TCS the seller
                adds the TCS amount over and above the invoice value and
                deposits it with the government. The buyer can subsequently
                claim credit for this TCS against their own income tax
                liability.
              </p>
              <p>
                TCS compliance has significantly expanded since 2020. The
                introduction of <strong>Section 206C(1H)</strong> brought a
                large new category of sellers into the TCS net — any seller
                whose aggregate turnover exceeded ₹10 crore in the preceding
                FY must collect TCS at 0.1% from buyers whose purchases exceed
                ₹50 lakh. Then <strong>Section 206C(1G)</strong> made
                authorised dealers and tour operators responsible for collecting
                TCS on foreign remittances under the LRS — with rates increased
                to <strong>20%</strong> from October 2023 for most remittances.
              </p>
              <p>
                Every TCS collector must file <strong>Form 27EQ quarterly</strong>,
                deposit TCS challans by the 7th of each following month, and
                issue <strong>Form 27D</strong> (TCS certificates) to buyers
                within 15 days of the return due date. Non-compliance triggers
                automatic ₹200/day fees under Section 234E with no waiver
                provision.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              TCS vs TDS — Key Differences Every Business Must Know
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                TCS and TDS are both advance tax collection mechanisms but
                operate fundamentally differently. Confusing the two leads to
                wrong compliance and missed obligations. In TDS, the{" "}
                <strong>payer (buyer) deducts tax</strong> from the payee's
                payment before remitting. In TCS, the{" "}
                <strong>seller collects tax</strong> from the buyer over and
                above the invoice amount.
              </p>
              <p>
                The return forms are different: TDS is reported in Forms 24Q
                (salary), 26Q (non-salary payments), and 27Q
                (non-resident payments). TCS is reported exclusively in{" "}
                <strong>Form 27EQ</strong>. The certificates are also different:
                TDS certificates are Form 16/16A, while TCS certificates are{" "}
                <strong>Form 27D</strong>. Due dates differ too — TCS returns
                are due on the <strong>15th of the month</strong> after quarter
                end, while TDS returns for non-government deductors are due on
                the 31st.
              </p>
              <p>
                A critical compliance point is the{" "}
                <strong>194Q vs 206C(1H) non-overlap rule</strong>. When a
                buyer's aggregate purchases from a seller exceed ₹50 lakh and
                the buyer deducts TDS under Section 194Q, the seller need not
                collect 206C(1H) TCS on that transaction. The obligation rests
                on the buyer for TDS. Missing this check leads to
                double-compliance and buyer disputes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Section 206C(1H) — TCS on Sale of Goods: Everything You Need to Know
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Section 206C(1H) is one of the most widely applicable TCS
                provisions, affecting traders and manufacturers with high
                turnover. Sellers with aggregate turnover exceeding{" "}
                <strong>₹10 crore</strong> in the preceding FY must collect TCS
                at <strong>0.1%</strong> from every buyer whose aggregate
                purchases from that seller exceed{" "}
                <strong>₹50 lakh</strong> in the current FY. TCS is triggered
                at the time of receipt of sale consideration — not the invoice
                date. This means advances received before goods delivery also
                attract TCS.
              </p>
              <p>
                Managing 206C(1H) compliance requires maintaining a{" "}
                <strong>buyer-wise purchase register</strong> throughout the
                year to track when each buyer crosses the ₹50 lakh threshold.
                Once the threshold is crossed, TCS applies on every rupee
                received from that buyer thereafter during the FY. If the buyer
                does not furnish PAN/Aadhaar, the TCS rate doubles to{" "}
                <strong>1% under Section 206CC</strong>.
              </p>
              <p>
                Section 206C(1H) does not apply to goods on which TCS is
                already collected under other subsections (scrap, minerals
                etc.), goods on which the buyer deducts TDS under Section 194Q,
                exported goods, or goods imported into India.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Section 206C(1G) — LRS TCS at 20%: Impact on Businesses and Individuals
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                From October 1, 2023, TCS on foreign remittances under the
                Liberalised Remittance Scheme was dramatically overhauled.
                General LRS remittances above ₹7 lakh per year now attract
                TCS at <strong>20%</strong> — applicable to remittances for
                foreign investment, gifts, maintenance of relatives abroad,
                purchase of foreign securities, and general travel not arranged
                through a tour operator.
              </p>
              <p>
                The rates are concessional for specific purposes: education
                abroad financed by a bank loan under Section 80E attracts only{" "}
                <strong>0.5% TCS</strong>. Education or medical treatment from
                own funds above ₹7 lakh attracts{" "}
                <strong>5% TCS</strong>. Overseas tour packages sold by tour
                operators attract 5% TCS up to ₹7 lakh and 20% TCS above ₹7
                lakh — with no minimum threshold (TCS applies from the first
                rupee of the package value).
              </p>
              <p>
                For authorised dealers and tour operators, LRS TCS compliance
                requires capturing the purpose of each remittance, verifying
                whether the buyer has provided an education loan declaration
                (for lower rate eligibility), maintaining buyer-wise annual
                remittance registers to track the ₹7 lakh threshold, and
                reporting correctly in Form 27EQ with the correct section
                mapping for each remittance category.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
              Form 27EQ Filing Process — TRACES, FVU and Challan Reconciliation
            </h2>
            <div className="text-gray-700 text-sm leading-relaxed space-y-3">
              <p>
                Form 27EQ is filed on the{" "}
                <strong>TRACES (TDS Reconciliation Analysis and Correction
                Enabling System)</strong> portal using the File Validation
                Utility (FVU). The return contains collectee-wise details
                (buyer name, PAN, address, amount, section, TCS collected),
                challan details (BSR code, serial number, date, amount), and
                section-wise summary.
              </p>
              <p>
                Before filing, every challan deposited during the quarter must
                be reconciled with TRACES data. Any challan mismatch — wrong
                BSR code, serial number, or amount — causes the return to fail
                validation. Defaults from previous quarters (short collection,
                short payment, late payment interest) must also be reviewed and
                addressed to avoid escalating demand notices.
              </p>
              <p>
                After successful Form 27EQ filing, the collector downloads{" "}
                <strong>Form 27D</strong> certificates from TRACES for each
                buyer and delivers them. These certificates appear in the
                buyer's Form 26AS and AIS, enabling the buyer to claim TCS
                credit while computing advance tax or final tax liability in
                their{" "}
                <Link
                  href="/serviceslist/income-tax/itr-proprietor"
                  className="text-[#00416a] font-semibold underline hover:text-sky-700 transition"
                >
                  Income Tax Return
                </Link>
                .
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════ FEE CALCULATOR ══════ */}
      <TCSFeeCalculator />

      {/* ══════ WHY TAXVIO ══════ */}
      <section className="py-20 bg-white" aria-label="Why choose Taxvio for quarterly TCS return filing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Why Taxvio
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Why Businesses Trust Taxvio for TCS Compliance
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
              Managed TCS compliance at transparent pricing — CA-assisted, 100%
              online, never miss a deadline.
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
      <section className="py-20 bg-gray-50" aria-label="Client reviews for TCS return filing service">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Trusted by Businesses for TCS Compliance
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
      <section className="py-20 bg-white" aria-label="TCS return filing FAQs India">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              FAQs
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
              Frequently Asked Questions — Quarterly TCS Return Filing
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
      <section className="py-14 bg-gray-50 border-t border-gray-100" aria-label="TCS filing services across India">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 rounded-full bg-[#00416a]" />
            <h2 className="text-lg font-extrabold text-gray-800">
              Quarterly TCS Return Filing Services Across India
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Taxvio is based in{" "}
            <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong> and
            provides quarterly TCS return filing (Form 27EQ) and Form 27D
            generation services for businesses, traders, vehicle dealers,
            authorised dealers and tour operators across{" "}
            <strong>
              Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai,
              Bangalore
            </strong>{" "}
            and all of India. 100% online — documents and data shared via
            WhatsApp or email.
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
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150"
              >
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ RELATED SERVICES ══════ */}
      <section className="py-14 bg-white border-t border-gray-100" aria-label="Related income tax services">
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
                title: "Quarterly TDS Filing",
                desc: "Forms 24Q, 26Q, 27Q — ₹999/quarter",
                href: "/serviceslist/income-tax/quarterly-tds",
                icon: "📋",
              },
              {
                title: "Income Tax Return (ITR-6)",
                desc: "Company ITR filing — ₹2,999",
                href: "/serviceslist/income-tax/itr-proprietor",
                icon: "💼",
              },
              {
                title: "GST Return Filing",
                desc: "GSTR-1 & GSTR-3B — ₹999/month",
                href: "/serviceslist/gst/gst-return",
                icon: "🧾",
              },
              {
                title: "Private Limited Registration",
                desc: "Incorporate a Pvt Ltd — ₹6,999",
                href: "/serviceslist/roc/private-limited-formation",
                icon: "🏛",
              },
            ].map(({ title, desc, href, icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200"
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
        aria-label="File quarterly TCS return with Taxvio"
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
                ⏳ TCS Due Date Alert
              </p>
              <p className="text-white/65 text-xs mt-0.5">
                Form 27EQ is due on the{" "}
                <strong className="text-white">15th</strong> — not the 31st.
                Late filing:{" "}
                <strong className="text-white">₹200/day, no waiver</strong>{" "}
                under Section 234E.
              </p>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]"
            >
              <MessageCircle size={13} /> File TCS Return Now
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
              195+ TCS Returns Filed · 4.9★ Rating · Starting ₹999/Quarter
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Never Miss a TCS Deadline —
              <span className="block mt-1 text-sky-300">
                Outsource to Taxvio from ₹999/Quarter
              </span>
            </h2>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Buyer register maintenance, challan reconciliation, 194Q overlap
              check, Form 27EQ filing, and Form 27D delivery to every buyer —
              all handled by Taxvio's CA team every quarter. 100% online,
              serving pan-India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
              >
                <MessageCircle size={16} /> Start TCS Filing — ₹999/Qtr
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
                <CheckCircle size={12} /> CA Assisted
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={12} /> TRACES Compliant
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