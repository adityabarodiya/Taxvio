// app/guide/itr-blogs/itr-filing-for-fno-income/page.tsx
// app/guide/itr-blogs/itr-filing-for-fno-income/page.tsx

import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  CheckCircle,
  ChevronRight,
  Clock,
  FileText,
  IndianRupee,
  Info,
  MessageCircle,
  Shield,
  Star,
  AlertCircle,
  Eye,
  Download,
  Search,
  TrendingUp,
  Calendar,
  UserCheck,
  Landmark,
  BarChart3,
  Percent,
  DollarSign,
  FileSpreadsheet,
  Upload,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "ITR Filing for F&O Income: Complete Guide for Futures & Options Trading AY 2025-26 | Taxvio",
  description:
    "Complete guide to filing ITR for F&O (Futures & Options) income — which ITR form to use, presumptive taxation eligibility, turnover calculation, tax audit under Section 44AB, capital gains vs business income treatment, and tax-saving strategies for traders.",
  keywords: [
    "ITR for F&O income",
    "futures and options tax filing",
    "F&O trading ITR form",
    "Section 44AB audit for F&O",
    "presumptive taxation F&O",
    "ITR-3 for F&O traders",
    "F&O turnover calculation",
    "speculative business income",
    "non-speculative business income",
    "tax on F&O profit",
    "tax audit for F&O traders",
    "AY 2025-26 F&O ITR",
    "derivative trading tax",
    "income from share trading",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-fno-income",
  },
  openGraph: {
    title: "ITR Filing for F&O Income — Complete Tax Guide AY 2025-26 | Taxvio",
    description:
      "Everything you need to know about filing ITR for Futures & Options trading income — correct ITR form, turnover calculation, tax audit applicability, and compliance for AY 2025-26.",
    url: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-fno-income",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing for F&O Income — Complete Guide AY 2025-26",
    description:
      "Learn how to file ITR for F&O trading income — ITR-3, tax audit, turnover calculation, presumptive taxation and tax optimization strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const FNO_BASICS = [
  {
    term: "F&O Trading",
    definition: "Futures and Options (F&O) trading involves derivative contracts based on underlying securities like stocks, indices, commodities or currencies. Unlike equity delivery trading, F&O involves leveraged positions and is always treated as business income for tax purposes.",
    icon: "📊",
    color: "bg-blue-50 border-blue-100",
  },
  {
    term: "Business Income (Not Capital Gains)",
    definition: "Income from F&O trading is always classified as 'Business Income' under Section 28 of the Income Tax Act, not as 'Capital Gains'. This applies regardless of holding period, frequency of trades, or profit/loss amount.",
    icon: "💼",
    color: "bg-violet-50 border-violet-100",
  },
  {
    term: "Non-Speculative Business",
    definition: "F&O trading is considered 'Non-Speculative Business Income' as per Section 43(5)(d) because trades are settled through recognized stock exchanges. This is different from intraday equity trading which is speculative business.",
    icon: "✅",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    term: "Tax Audit Requirement",
    definition: "If your total sales/turnover from F&O trading exceeds ₹10 crore (or ₹1 crore if cash receipts exceed 5%), you must get your accounts audited under Section 44AB and file audit report in Form 3CD before filing ITR.",
    icon: "🔍",
    color: "bg-amber-50 border-amber-100",
  },
];

const ITR_FORM_COMPARISON = [
  {
    form: "ITR-3",
    title: "For F&O Traders (Business Income)",
    when: "You must file ITR-3 if you have F&O trading income, whether profit or loss, irrespective of amount",
    features: [
      "Mandatory for all F&O traders",
      "Allows reporting of business income",
      "Can set off F&O losses against business income",
      "Supports balance sheet and P&L statement filing",
      "Required even if F&O is only source of income",
    ],
    color: "bg-blue-50 border-blue-200",
    recommended: true,
  },
  {
    form: "ITR-4 (Sugam)",
    title: "Presumptive Taxation Scheme",
    when: "Can be used if total turnover from business ≤ ₹2 crore AND you opt for presumptive taxation under Section 44AD/44ADA",
    features: [
      "NOT applicable for F&O trading income",
      "Section 44AD excludes income under Section 43(5) derivatives",
      "F&O traders cannot use presumptive scheme",
      "Even small F&O traders must file ITR-3",
      "Attempting ITR-4 will result in defective return",
    ],
    color: "bg-rose-50 border-rose-200",
    recommended: false,
  },
];

const TURNOVER_CALCULATION = [
  {
    step: "Step 1",
    title: "Understand F&O Turnover Definition",
    detail:
      "For F&O trading, turnover is NOT the total contract value. As per ICAI guidance and CBDT Circular, turnover for F&O is calculated as the aggregate of positive and negative differences (absolute sum of profit and loss on all trades).",
    example: "If you made ₹5 lakh profit on some trades and ₹3 lakh loss on others, turnover = ₹5L + ₹3L = ₹8 lakh (not net ₹2 lakh profit).",
  },
  {
    step: "Step 2",
    title: "Alternative Method (Optional)",
    detail:
      "Some interpretations allow turnover to be calculated as total of favorable and unfavorable differences. Premium received in case of options can also be considered. However, the safer and more widely accepted method is absolute sum of profit and loss.",
    example: "For options: Premium received on writing options can be included in turnover calculation.",
  },
  {
    step: "Step 3",
    title: "Check Tax Audit Threshold",
    detail:
      "If turnover calculated as per Step 1 exceeds ₹10 crore (or ₹1 crore if digital payment condition not met, i.e., cash receipts > 5%), tax audit under Section 44AB is mandatory. Most F&O traders don't cross this threshold.",
    example: "Turnover ₹8 lakh → No audit required. Turnover ₹12 crore → Audit required.",
  },
];

const TAX_AUDIT_RULES = [
  {
    condition: "Turnover > ₹10 Crore",
    auditRequired: "Yes — Mandatory",
    section: "Section 44AB(a)",
    details: "If total sales, turnover or gross receipts from F&O business exceed ₹10 crore in the financial year, tax audit is compulsory.",
    color: "bg-rose-50 border-rose-100",
  },
  {
    condition: "Turnover ₹1 Crore to ₹10 Crore + Cash > 5%",
    auditRequired: "Yes — If cash receipts/payments exceed 5%",
    section: "Section 44AB(a) proviso",
    details: "If turnover is between ₹1 crore and ₹10 crore AND cash receipts or payments exceed 5% of total receipts/payments, audit is required. Most F&O traders use digital payments, so this typically doesn't apply.",
    color: "bg-amber-50 border-amber-100",
  },
  {
    condition: "Turnover ≤ ₹1 Crore (all digital payments)",
    auditRequired: "No audit required",
    section: "Below threshold",
    details: "If turnover does not exceed ₹1 crore, no tax audit is required under Section 44AB. You can file ITR-3 without audit report.",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    condition: "Loss in F&O + Total Income > Basic Exemption",
    auditRequired: "No (but ITR filing mandatory)",
    section: "Section 139(1)",
    details: "Even if you have a loss in F&O trading, if your total income (including salary, interest, etc.) exceeds the basic exemption limit, you must file ITR-3. Loss can be carried forward for 8 years if return filed within due date.",
    color: "bg-blue-50 border-blue-100",
  },
];

const SET_OFF_RULES = [
  {
    type: "F&O Loss",
    canSetOffAgainst: "Any Business Income or Profession Income (same year)",
    cannotSetOffAgainst: "Salary, House Property, Capital Gains, Other Sources",
    carryForward: "Can be carried forward for 8 years (if return filed on time)",
    section: "Section 72",
    color: "bg-violet-50 border-violet-100",
  },
  {
    type: "Intraday Equity Loss (Speculative)",
    canSetOffAgainst: "Only Speculative Business Income",
    cannotSetOffAgainst: "F&O profit, Salary, Other Income, Non-speculative business",
    carryForward: "Can be carried forward for 4 years (if return filed on time)",
    section: "Section 73",
    color: "bg-amber-50 border-amber-100",
  },
  {
    type: "Equity Delivery Loss (STCG/LTCG)",
    canSetOffAgainst: "Capital Gains (STCG can set off against any CG, LTCG only against LTCG)",
    cannotSetOffAgainst: "Business income, Salary, F&O income",
    carryForward: "Can be carried forward for 8 years",
    section: "Section 74",
    color: "bg-blue-50 border-blue-100",
  },
];

const DEDUCTIONS_ALLOWED = [
  {
    expense: "Brokerage & Transaction Charges",
    deductible: "Yes — Fully deductible",
    details: "All brokerage charges paid to stock broker, transaction charges, STT (Securities Transaction Tax), stamp duty, GST on brokerage are fully deductible as business expenses.",
    documents: "Contract notes, brokerage statement from broker",
  },
  {
    expense: "Depreciable Assets (Computer, Software)",
    deductible: "Yes — As depreciation",
    details: "If you purchase computer, laptop, trading software, or other capital assets for F&O trading, you can claim depreciation as per Income Tax depreciation rates (not full cost in one year).",
    documents: "Purchase invoices, depreciation schedule",
  },
  {
    expense: "Internet & Phone Bills",
    deductible: "Yes — Proportionate deduction",
    details: "If you use internet and mobile for F&O trading, you can claim proportionate expenses. For example, if 50% usage is for trading, claim 50% of bills as business expense.",
    documents: "Bills with usage details, self-declaration of business use percentage",
  },
  {
    expense: "Trading Platform Subscription",
    deductible: "Yes — Fully deductible",
    details: "Subscription fees paid for trading platforms, charting software, data feeds, advisory services are fully deductible business expenses.",
    documents: "Subscription invoices, payment proof",
  },
  {
    expense: "Books & Research Material",
    deductible: "Yes — Fully deductible",
    details: "Cost of trading books, courses, seminars, research reports related to F&O trading are deductible business expenses.",
    documents: "Purchase receipts, course certificates",
  },
  {
    expense: "Home Office Expenses (Rent, Electricity)",
    deductible: "Yes — Proportionate deduction (if used exclusively)",
    details: "If you use a dedicated room/space at home for F&O trading, you can claim proportionate rent, electricity, maintenance as business expense. Be conservative and claim only reasonable proportion.",
    documents: "Rent agreement, electricity bills, calculation worksheet",
  },
];

const FILING_STEPS = [
  {
    step: "01",
    title: "Calculate Total Turnover from F&O Trading",
    desc: "Download your P&L statement from your broker for FY 2024-25. Calculate turnover as the absolute sum of all profits and losses across all F&O trades. Determine if you cross the ₹10 crore (or ₹1 crore) tax audit threshold.",
    icon: Calculator,
  },
  {
    step: "02",
    title: "Get Tax Audit Done (if applicable)",
    desc: "If turnover exceeds audit threshold, appoint a Chartered Accountant to conduct tax audit under Section 44AB. The CA will prepare Form 3CD (audit report) and Form 3CB (audit certificate). Audit report must be obtained before filing ITR.",
    icon: FileSpreadsheet,
  },
  {
    step: "03",
    title: "Prepare Profit & Loss Statement and Balance Sheet",
    desc: "Maintain proper books of accounts showing all F&O trades, income, expenses, assets and liabilities. Prepare a Profit & Loss account and Balance Sheet. Even if audit is not required, these statements help in accurate ITR filing and are mandatory for ITR-3.",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Login to Income Tax E-Filing Portal",
    desc: "Visit incometax.gov.in and log in with your PAN and password. Navigate to e-File > Income Tax Returns > File Income Tax Return. Select Assessment Year 2025-26 and ITR Form as ITR-3.",
    icon: UserCheck,
  },
  {
    step: "05",
    title: "Fill Part A — General Information",
    desc: "Enter personal information — PAN, name, date of birth, address, contact details, bank account for refund (if any). Select filing status (Individual, HUF, etc.) and residential status (Resident, NRI, etc.).",
    icon: FileText,
  },
  {
    step: "06",
    title: "Fill Schedule BP — Business Income from F&O",
    desc: "In Schedule BP (Profits and Gains of Business or Profession), select 'Non-Speculative Business' and enter net profit/loss from F&O trading. Attach the detailed P&L statement and Balance Sheet in the annexures.",
    icon: DollarSign,
  },
  {
    step: "07",
    title: "Report Other Income (if any)",
    desc: "If you have salary income, report it in Schedule S. House property income in Schedule HP. Capital gains (delivery equity, mutual funds) in Schedule CG. Other sources (interest, dividend) in Schedule OS.",
    icon: Landmark,
  },
  {
    step: "08",
    title: "Claim Deductions under Chapter VI-A",
    desc: "Claim eligible deductions like Section 80C (₹1.5 lakh), 80D (health insurance), 80G (donations), etc., in the appropriate schedules. Note: Business loss can reduce total taxable income, but deductions apply after income computation.",
    icon: Percent,
  },
  {
    step: "09",
    title: "Compute Tax Liability and Pay Tax Due",
    desc: "The portal will auto-compute your total income, tax liability, interest under Sections 234A/B/C (if any). Adjust for TDS credits from Form 26AS and advance tax paid. Pay balance tax due (if any) using Challan 280 before filing.",
    icon: IndianRupee,
  },
  {
    step: "10",
    title: "Upload Audit Report (if applicable) and Submit ITR",
    desc: "If tax audit is applicable, upload Form 3CD and 3CB before submitting ITR-3. Submit the return and note the acknowledgement number. Verify the return within 30 days using Aadhaar OTP, EVC or ITR-V.",
    icon: Upload,
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Filing ITR-4 instead of ITR-3",
    why: "F&O income cannot use presumptive taxation under Section 44AD. ITR-4 is not applicable for derivative trading income.",
    consequence: "Defective return notice, rejection by CPC, penalty risk",
    fix: "Always file ITR-3 for F&O income",
    icon: "❌",
    color: "bg-rose-50 border-rose-100",
  },
  {
    mistake: "Treating F&O profit as Capital Gains",
    why: "F&O trading is always business income, not capital gains, regardless of holding period or frequency.",
    consequence: "Wrong tax computation, possible scrutiny, disallowance of loss set-off",
    fix: "Report F&O income under 'Business Income' (Schedule BP) in ITR-3",
    icon: "⚠️",
    color: "bg-amber-50 border-amber-100",
  },
  {
    mistake: "Not filing ITR when F&O results in loss",
    why: "Even if F&O trading resulted in loss, if total income exceeds basic exemption, ITR filing is mandatory. Moreover, losses can be carried forward only if return is filed on time.",
    consequence: "Loss of loss carry-forward benefit (can't set off in future years), penalty for non-filing",
    fix: "File ITR-3 on or before 31 August 2026 to carry forward F&O losses for 8 years",
    icon: "🚫",
    color: "bg-red-50 border-red-100",
  },
  {
    mistake: "Incorrect turnover calculation",
    why: "Many traders calculate turnover as net profit/loss or total contract value, both of which are incorrect.",
    consequence: "Wrong audit applicability assessment, possible penalty for non-audit when audit was required",
    fix: "Calculate turnover as absolute sum of all profits and losses. Consult CA if turnover is close to audit threshold.",
    icon: "📉",
    color: "bg-orange-50 border-orange-100",
  },
  {
    mistake: "Not maintaining proper books of accounts",
    why: "ITR-3 requires submission of Balance Sheet and P&L statement. Without proper books, you cannot file ITR-3 accurately.",
    consequence: "Rejection of return, scrutiny assessment, penalty under Section 271B for failure to maintain books",
    fix: "Maintain digital or manual records of all trades, expenses, and prepare financial statements before filing",
    icon: "📚",
    color: "bg-yellow-50 border-yellow-100",
  },
];

const FAQS = [
  {
    question: "Which ITR form should I file if I have only F&O trading income and no other income?",
    answer:
      "You must file ITR-3 even if F&O trading is your only source of income. F&O income is classified as business income (non-speculative), and ITR-3 is the prescribed form for reporting business income. You cannot file ITR-1 or ITR-2. ITR-4 (Sugam) is also not applicable because F&O trading is excluded from the presumptive taxation scheme under Section 44AD.",
  },
  {
    question: "Is F&O trading income taxed as business income or capital gains?",
    answer:
      "F&O trading income is always taxed as 'Business Income' under Section 28, never as capital gains. This is because derivative trading is considered a business activity as per Section 43(5) of the Income Tax Act. The income is classified as 'non-speculative business income' because F&O trades are settled through recognized stock exchanges. This classification applies regardless of how frequently you trade or how long you hold positions.",
  },
  {
    question: "Can I use presumptive taxation (Section 44AD) for F&O income and file ITR-4?",
    answer:
      "No. Section 44AD specifically excludes income from trading in derivatives and securities. The presumptive taxation scheme under Section 44AD is not available for F&O traders. Even if your turnover is below ₹2 crore, you cannot opt for presumptive taxation for F&O income. You must maintain books of accounts, prepare Profit & Loss and Balance Sheet, and file ITR-3. Attempting to file ITR-4 will result in a defective return.",
  },
  {
    question: "How do I calculate turnover for F&O trading for tax audit purpose?",
    answer:
      "For F&O trading, turnover is calculated as the absolute sum of positive differences (profits) and negative differences (losses) across all trades during the financial year. For example, if your total profit on winning trades was ₹8 lakh and total loss on losing trades was ₹5 lakh, your turnover is ₹8L + ₹5L = ₹13 lakh (not net profit of ₹3 lakh). This method is based on ICAI guidance and is the most conservative and widely accepted approach. If this calculated turnover exceeds ₹10 crore (or ₹1 crore with >5% cash transactions), tax audit under Section 44AB is required.",
  },
  {
    question: "When is tax audit required for F&O traders?",
    answer:
      "Tax audit under Section 44AB is required if: (1) Your F&O turnover (calculated as absolute sum of profit and loss) exceeds ₹10 crore in the financial year, OR (2) Turnover exceeds ₹1 crore and cash receipts/payments exceed 5% of total receipts/payments (this rarely applies to F&O traders as most transactions are digital). Most individual F&O traders do not cross the ₹10 crore turnover threshold and hence do not require tax audit. However, if audit is required, it must be completed by a Chartered Accountant and Form 3CD/3CB must be filed before filing ITR.",
  },
  {
    question: "Can I set off F&O losses against my salary income?",
    answer:
      "No. F&O losses, being non-speculative business losses, can only be set off against business or professional income in the same year. They cannot be set off against salary income, house property income, capital gains, or income from other sources. If you have no other business income in the current year to absorb the F&O loss, the loss can be carried forward for 8 assessment years, provided you file your ITR on or before the due date (31 Augustfor non-audit cases). The carried forward loss can be set off against business income in subsequent years.",
  },
  {
    question: "What expenses can I claim as deductions against F&O income?",
    answer:
      "You can claim all expenses incurred wholly and exclusively for the purpose of F&O trading as business expenses. Common deductible expenses include: (1) Brokerage and transaction charges, (2) Securities Transaction Tax (STT), (3) GST on brokerage, (4) Stamp duty, (5) Trading platform subscription fees, (6) Internet and phone bills (proportionate), (7) Depreciation on computer and trading equipment, (8) Advisory and research services, (9) Trading books and courses, (10) Bank charges related to trading account. Maintain proper invoices and documentation for all claimed expenses. Personal expenses and expenses not related to trading are not deductible.",
  },
  {
    question: "Do I need to file ITR if I made a loss in F&O trading and have no other income?",
    answer:
      "If your total income (after considering F&O loss and any other income) does not exceed the basic exemption limit (₹2.5 lakh for individuals below 60 years under old regime, or ₹3 lakh under new regime for FY 2024-25), filing ITR is not mandatory. However, it is highly advisable to file ITR even in case of loss because: (1) F&O losses can be carried forward for 8 years only if you file return on or before the due date (31 July), (2) You can set off carried forward losses against future business income, (3) ITR filing establishes a tax filing record which is useful for loans, visas, etc. If you don't file, you lose the right to carry forward and set off the loss in future years.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITR Filing for F&O Income: Complete Guide for Futures & Options Traders",
  description:
    "Comprehensive guide to filing Income Tax Return for F&O (Futures & Options) trading income — covering ITR-3 filing, turnover calculation, tax audit under Section 44AB, business income treatment, set-off rules, deductible expenses and tax-saving strategies for AY 2025-26.",
  url: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-fno-income",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-fno-income",
  },
  author: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://www.taxvio.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://www.taxvio.in",
  },
  datePublished: "2025-05-20",
  dateModified: "2025-05-20",
  wordCount: 3800,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "F&O income tax",
    "ITR-3 for F&O",
    "futures and options tax",
    "derivative trading tax",
    "Section 44AB audit",
    "AY 2025-26",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "ITR Guides",
      item: "https://www.taxvio.in/guide/itr-blogs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ITR Filing for F&O Income",
      item: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-fno-income",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

/* ─── Reusable Components ───────────────────────────────────────────────── */

function InfoBox({
  title,
  children,
  color = "blue",
}: {
  title: string;
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "rose";
}) {
  const styles = {
    blue: "border-blue-100 bg-blue-50 text-blue-900",
    green: "border-emerald-100 bg-emerald-50 text-emerald-900",
    amber: "border-amber-100 bg-amber-50 text-amber-900",
    rose: "border-rose-100 bg-rose-50 text-rose-900",
  };
  return (
    <div className={`rounded-2xl border p-5 ${styles[color]}`}>
      <div className="mb-2 flex items-center gap-2">
        <Info size={15} className="shrink-0" />
        <h3 className="text-sm font-extrabold">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  heading,
  icon: Icon,
}: {
  eyebrow: string;
  heading: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00416a]/10">
        <Icon size={17} className="text-[#00416a]" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-extrabold text-[#00416a] md:text-2xl">
          {heading}
        </h2>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function FNOITRFilingPage() {
  return (
    <>
      <Script
        id="fno-itr-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="fno-itr-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="fno-itr-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[#f8fbfd] font-sans text-gray-800">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-[#00416a] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(34,211,238,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(52,211,153,0.09) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 md:pt-28">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li>
                  <Link
                    href="/guide/itr-blogs"
                    className="hover:text-white transition"
                  >
                    ITR Guides
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li className="text-white/80 font-semibold">
                  ITR Filing for F&O Income
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(34,211,238,0.15)",
                    border: "1px solid rgba(34,211,238,0.25)",
                  }}
                >
                  <TrendingUp size={13} className="text-cyan-300" />
                  For Futures & Options Traders — AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  ITR Filing for
                  <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                    F&O Trading Income
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  If you trade in <strong className="text-white">Futures & Options</strong> (equity,
                  index, commodity or currency derivatives), your income is treated as{" "}
                  <strong className="text-white">non-speculative business income</strong> — not
                  capital gains. This guide covers which ITR form to use, turnover
                  calculation, tax audit applicability, and how to file ITR-3 correctly
                  for AY 2025-26.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get F&O ITR Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/serviceslist/income-tax/itr-business"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    File ITR-3 Now <FileText size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick facts card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  F&O Tax Essentials
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: FileText,
                      title: "ITR Form Required",
                      text: "ITR-3 — Mandatory for all F&O traders (ITR-4 not applicable)",
                    },
                    {
                      icon: BarChart3,
                      title: "Income Classification",
                      text: "Non-Speculative Business Income — Not Capital Gains",
                    },
                    {
                      icon: Calculator,
                      title: "Turnover Calculation",
                      text: "Absolute sum of all profits + losses (not net profit)",
                    },
                    {
                      icon: FileSpreadsheet,
                      title: "Tax Audit Threshold",
                      text: "₹10 crore turnover (or ₹1 crore if cash >5%)",
                    },
                    {
                      icon: Calendar,
                      title: "Due Date (No Audit)",
                      text: "31 August2026 for non-audit cases (AY 2025-26)",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-cyan-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-cyan-300" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white">
                          {title}
                        </p>
                        <p className="text-xs text-white/55 mt-0.5 leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, text: "CA-Verified F&O Tax Guidance" },
                { icon: Shield, text: "Section 44AB Compliant" },
                { icon: Clock, text: "Updated for AY 2025-26" },
                { icon: Star, text: "5,000+ Trader ITRs Filed" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-cyan-400" /> {text}
                </div>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 1440 48" fill="none" className="w-full block">
            <path
              d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z"
              fill="#f8fbfd"
            />
          </svg>
        </section>

        {/* ════════ ARTICLE + SIDEBAR ════════ */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">

            {/* ── Main Article ── */}
            <article className="min-w-0 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">

              {/* Introduction */}
              <div className="pb-10 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0077b6] mb-4">
                  Income Tax Guide for Traders
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Understanding F&O Income Taxation in India
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Futures and Options (F&O)</strong> trading has become
                  increasingly popular among retail investors in India. Unlike equity
                  delivery trading where the tax treatment depends on holding period
                  (short-term or long-term capital gains), income from F&O trading is{" "}
                  <strong>always treated as business income</strong> for tax purposes,
                  regardless of how frequently you trade or how long you hold positions.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This classification has significant implications for ITR filing,
                  deductible expenses, loss set-off rules, and tax audit requirements.
                  Many F&O traders make costly mistakes by filing the wrong ITR form
                  (ITR-1 or ITR-4 instead of ITR-3), treating F&O income as capital
                  gains, or failing to carry forward losses due to late or incorrect
                  filing.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This comprehensive guide covers everything you need to know about
                  filing your Income Tax Return if you have F&O trading income for
                  Assessment Year 2025-26 (Financial Year 2024-25) — including the
                  correct ITR form, turnover calculation, tax audit applicability,
                  expense deductions, loss set-off rules, and a step-by-step filing
                  process.
                </p>

                <InfoBox title="Key takeaway — F&O is always business income" color="blue">
                  <p>
                    F&O trading income (profit or loss) is classified as{" "}
                    <strong>'Non-Speculative Business Income'</strong> under Section
                    43(5)(d) of the Income Tax Act because F&O trades are settled
                    through recognized stock exchanges. This is true for equity F&O,
                    index F&O, commodity F&O and currency F&O. Capital gains treatment
                    does not apply to F&O trading.
                  </p>
                </InfoBox>
              </div>

              {/* F&O Basics */}
              <section id="fno-basics" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Tax fundamentals"
                  heading="F&O Trading — Tax Treatment Basics"
                  icon={TrendingUp}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Before diving into ITR filing, it's important to understand the
                  fundamental tax concepts that apply to F&O trading:
                </p>

                <div className="grid gap-4">
                  {FNO_BASICS.map(({ term, definition, icon, color }) => (
                    <div
                      key={term}
                      className={`rounded-2xl border p-5 ${color}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color} border ${
                            color.split(" ")[1]
                          } flex items-center justify-center text-xl shrink-0`}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-extrabold text-gray-800 mb-2">
                            {term}
                          </h3>
                          <p className="text-xs leading-relaxed text-gray-600">
                            {definition}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ITR Form Comparison */}
              <section id="itr-form" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Correct form selection"
                  heading="ITR-3 vs ITR-4 — Which Form for F&O Traders?"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  One of the most common mistakes F&O traders make is filing the wrong
                  ITR form. Here's a clear comparison to help you choose correctly:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {ITR_FORM_COMPARISON.map(({ form, title, when, features, color, recommended }) => (
                    <div
                      key={form}
                      className={`rounded-2xl border-2 p-5 ${color} ${
                        recommended ? "ring-2 ring-emerald-500 ring-offset-2" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span
                            className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                              recommended
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-600 text-white"
                            }`}
                          >
                            {form}
                          </span>
                        </div>
                        {recommended && (
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                            <CheckCircle size={13} />
                            Correct Form
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-extrabold text-gray-800 mb-3">
                        {title}
                      </h3>

                      <div className="mb-4 p-3 rounded-xl bg-white/60 border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700 mb-1">
                          When to use:
                        </p>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {when}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2 text-xs text-gray-700"
                          >
                            {recommended ? (
                              <CheckCircle
                                size={13}
                                className="text-emerald-500 shrink-0 mt-0.5"
                              />
                            ) : (
                              <AlertCircle
                                size={13}
                                className="text-rose-500 shrink-0 mt-0.5"
                              />
                            )}
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="ITR-4 is NOT applicable for F&O income" color="rose">
                  <p className="mb-2">
                    Many traders mistakenly believe they can file ITR-4 (Sugam) if their
                    turnover is below ₹2 crore. This is incorrect.
                  </p>
                  <p>
                    Section 44AD (presumptive taxation for business) specifically
                    excludes income from trading in shares, securities and derivatives.
                    F&O trading cannot use the presumptive taxation scheme. All F&O
                    traders must file <strong>ITR-3</strong> and maintain proper books
                    of accounts, regardless of turnover amount.
                  </p>
                </InfoBox>
              </section>

              {/* Turnover calculation */}
              <section id="turnover" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Critical calculation"
                  heading="How to Calculate Turnover for F&O Trading"
                  icon={Calculator}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Turnover calculation is critical because it determines whether you
                  need a tax audit under Section 44AB. The method for calculating F&O
                  turnover is different from regular business turnover:
                </p>

                <div className="space-y-4">
                  {TURNOVER_CALCULATION.map(({ step, title, detail, example }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step.split(" ")[1]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-800 mb-2">
                          {title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-600 mb-3">
                          {detail}
                        </p>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                          <p className="text-xs font-semibold text-emerald-800 mb-1">
                            Example:
                          </p>
                          <p className="text-xs leading-relaxed text-emerald-700">
                            {example}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="flex items-start gap-3">
                    <Calculator size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-amber-900 mb-2">
                        Worked Example — Turnover Calculation
                      </h4>
                      <div className="text-xs leading-relaxed text-amber-800 space-y-2">
                        <p>
                          Suppose you made the following F&O trades in FY 2024-25:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Nifty Futures — Net profit: ₹4,50,000</li>
                          <li>Bank Nifty Options — Net loss: ₹2,80,000</li>
                          <li>Stock Futures — Net profit: ₹1,20,000</li>
                          <li>Currency Futures — Net loss: ₹90,000</li>
                        </ul>
                        <p className="font-bold mt-3">
                          Turnover = ₹4,50,000 + ₹2,80,000 + ₹1,20,000 + ₹90,000 ={" "}
                          <span className="text-amber-900">₹9,40,000</span>
                        </p>
                        <p className="font-bold">
                          Net Profit/Loss = ₹4,50,000 - ₹2,80,000 + ₹1,20,000 - ₹90,000 ={" "}
                          <span className="text-amber-900">₹2,00,000 profit</span>
                        </p>
                        <p className="mt-2">
                          Since turnover (₹9.4 lakh) is below ₹10 crore, no tax audit
                          is required. You file ITR-3 and report ₹2 lakh business income.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tax audit rules */}
              <section id="tax-audit" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Section 44AB compliance"
                  heading="When is Tax Audit Required for F&O Traders?"
                  icon={FileSpreadsheet}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Tax audit under Section 44AB is a statutory audit conducted by a
                  Chartered Accountant. It is mandatory in certain situations. Here's
                  when F&O traders need tax audit:
                </p>

                <div className="space-y-4">
                  {TAX_AUDIT_RULES.map(({ condition, auditRequired, section, details, color }) => (
                    <div
                      key={condition}
                      className={`rounded-2xl border p-5 ${color}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-sm font-extrabold text-gray-800">
                          {condition}
                        </h3>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                            auditRequired.includes("Yes")
                              ? "bg-rose-600 text-white"
                              : "bg-emerald-600 text-white"
                          }`}
                        >
                          {auditRequired}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        {section}
                      </p>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {details}
                      </p>
                    </div>
                  ))}
                </div>

                <InfoBox title="Most F&O traders don't need tax audit" color="green">
                  <p>
                    The ₹10 crore turnover threshold for tax audit is quite high.
                    Majority of individual F&O traders do not cross this limit and
                    hence are not required to get their accounts audited. However, if
                    you do cross the threshold, tax audit is mandatory and Form 3CD
                    must be filed before filing ITR-3. The due date for audit cases is
                    31 October 2026 for AY 2025-26.
                  </p>
                </InfoBox>
              </section>

              {/* Set-off rules */}
              <section id="set-off" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Loss management"
                  heading="Set-Off and Carry Forward Rules for F&O Losses"
                  icon={BarChart3}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Understanding loss set-off rules is crucial for tax planning. F&O
                  losses have specific set-off restrictions:
                </p>

                <div className="space-y-4">
                  {SET_OFF_RULES.map(({ type, canSetOffAgainst, cannotSetOffAgainst, carryForward, section, color }) => (
                    <div
                      key={type}
                      className={`rounded-2xl border p-5 ${color}`}
                    >
                      <h3 className="text-sm font-extrabold text-gray-800 mb-3">
                        {type}
                      </h3>
                      <div className="space-y-3 text-xs">
                        <div className="bg-white/60 rounded-xl p-3 border border-emerald-100">
                          <p className="font-bold text-emerald-700 mb-1">
                            ✓ Can set off against:
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {canSetOffAgainst}
                          </p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 border border-rose-100">
                          <p className="font-bold text-rose-700 mb-1">
                            ✗ Cannot set off against:
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {cannotSetOffAgainst}
                          </p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-3 border border-blue-100">
                          <p className="font-bold text-blue-700 mb-1">
                            📅 Carry forward:
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {carryForward}
                          </p>
                        </div>
                        <p className="text-gray-500 font-semibold">
                          {section}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="File ITR on time to carry forward F&O losses" color="amber">
                  <p className="mb-2">
                    F&O losses can be carried forward for 8 assessment years, but
                    <strong> only if you file your ITR on or before the due date</strong> —
                    which is 31 August2026 for non-audit cases (AY 2025-26).
                  </p>
                  <p>
                    If you file a belated return after 31 July, you cannot carry forward
                    the loss. Even if you made a loss in F&O and have no taxable income,
                    file ITR-3 by 31 Augustto preserve the right to set off the loss
                    against future business income.
                  </p>
                </InfoBox>
              </section>

              {/* Deductions */}
              <section id="deductions" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Expense claims"
                  heading="Deductible Expenses Against F&O Income"
                  icon={DollarSign}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Since F&O income is business income, you can claim all expenses
                  incurred wholly and exclusively for the purpose of F&O trading. Here
                  are common deductible expenses:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded-xl">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="p-3 text-left font-bold">Expense Type</th>
                        <th className="p-3 text-left font-bold">Deductible?</th>
                        <th className="p-3 text-left font-bold">Details</th>
                        <th className="p-3 text-left font-bold">Documents Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEDUCTIONS_ALLOWED.map(({ expense, deductible, details, documents }, idx) => (
                        <tr
                          key={expense}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="p-3 font-semibold text-gray-800">{expense}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                              <CheckCircle size={12} />
                              {deductible}
                            </span>
                          </td>
                          <td className="p-3 text-gray-600 leading-relaxed">{details}</td>
                          <td className="p-3 text-gray-500">{documents}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <InfoBox title="Keep all expense receipts" color="blue">
                    <p>
                      Maintain proper documentation for all claimed expenses — invoices,
                      bills, payment receipts, bank statements. In case of scrutiny
                      assessment, you need to produce these documents to justify expense
                      claims. Digital copies are acceptable.
                    </p>
                  </InfoBox>

                  <InfoBox title="Personal expenses are not deductible" color="rose">
                    <p>
                      You cannot claim personal expenses or expenses not related to F&O
                      trading. For example, full internet bill cannot be claimed if you
                      also use internet for personal use — claim only the trading-related
                      portion. Be reasonable and conservative in expense claims.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Filing steps */}
              <section id="filing-steps" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step process"
                  heading="How to File ITR-3 for F&O Income — Complete Process"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Filing ITR-3 for F&O income involves several steps, from calculating
                  turnover to verifying the return. Here's the complete process:
                </p>

                <div className="space-y-4">
                  {FILING_STEPS.map(({ step, title, desc, icon: Icon }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <Icon
                            size={14}
                            className="text-[#0077b6] shrink-0"
                          />
                          <h3 className="text-sm font-bold text-gray-800">
                            {title}
                          </h3>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-600">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Due dates for AY 2025-26" color="amber">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Without tax audit:</strong> 31 August2025
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>With tax audit (turnover &gt; ₹10 crore):</strong> 31 October 2025
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>Belated return:</strong> Up to 31 December 2026 (cannot carry forward loss)
                      </span>
                    </li>
                  </ul>
                </InfoBox>
              </section>

              {/* Common mistakes */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Avoid these errors"
                  heading="Common Mistakes F&O Traders Make While Filing ITR"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  These are the most common errors that lead to defective returns,
                  penalty notices or loss of tax benefits:
                </p>

                <div className="space-y-4">
                  {COMMON_MISTAKES.map(({ mistake, why, consequence, fix, icon, color }) => (
                    <div
                      key={mistake}
                      className={`rounded-2xl border p-5 ${color}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div className="flex-1">
                          <h3 className="text-sm font-extrabold text-gray-800 mb-2">
                            {mistake}
                          </h3>
                          <div className="space-y-2 text-xs">
                            <div className="bg-white/60 rounded-lg p-2.5 border border-gray-200">
                              <p className="font-bold text-gray-700 mb-1">Why it's wrong:</p>
                              <p className="text-gray-600 leading-relaxed">{why}</p>
                            </div>
                            <div className="bg-white/60 rounded-lg p-2.5 border border-rose-100">
                              <p className="font-bold text-rose-700 mb-1">Consequence:</p>
                              <p className="text-gray-600 leading-relaxed">{consequence}</p>
                            </div>
                            <div className="bg-white/60 rounded-lg p-2.5 border border-emerald-100">
                              <p className="font-bold text-emerald-700 mb-1">How to fix:</p>
                              <p className="text-gray-600 leading-relaxed">{fix}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA inside article */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      F&O ITR filing made simple
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your F&O ITR-3 filing
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team specializes in F&O trader ITRs — we handle turnover
                      calculation, expense optimization, loss carry-forward, tax audit
                      (if required) and complete ITR-3 filing with P&L and Balance Sheet.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Get Started <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="F&O Income Tax Filing FAQs"
                  icon={BookOpen}
                />

                <div className="space-y-3">
                  {FAQS.map(({ question, answer }) => (
                    <details
                      key={question}
                      className="group rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-gray-800 marker:hidden">
                        <span className="flex items-start gap-3">
                          <span className="text-[#00416a] mt-0.5">Q.</span>
                          {question}
                        </span>
                      </summary>
                      <p className="mt-4 border-t border-gray-200 pt-4 text-sm leading-7 text-gray-600">
                        {answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="mt-12 pt-7 border-t border-gray-100">
                <p className="text-xs leading-6 text-gray-500">
                  <strong className="text-gray-700">Disclaimer:</strong> This article
                  is for general educational and informational purposes only. Tax laws,
                  turnover calculation methods, audit thresholds and ITR forms are
                  subject to change through Finance Acts, CBDT circulars and judicial
                  pronouncements. The information provided is based on the Income Tax
                  Act, 1961 as applicable for Assessment Year 2025-26. F&O traders should
                  consult a qualified Chartered Accountant for personalized tax advice,
                  especially regarding turnover calculation and tax audit applicability.
                  Taxvio does not assume legal liability for actions taken based solely
                  on this content.
                </p>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">

                {/* TOC */}
                <div className="rounded-2xl border border-[#dcebf3] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]">
                    On this page
                  </p>
                  <nav className="mt-4 space-y-1.5">
                    {[
                      ["#fno-basics", "F&O tax basics"],
                      ["#itr-form", "ITR-3 vs ITR-4"],
                      ["#turnover", "Turnover calculation"],
                      ["#tax-audit", "Tax audit rules"],
                      ["#set-off", "Loss set-off rules"],
                      ["#deductions", "Deductible expenses"],
                      ["#filing-steps", "Filing process"],
                      ["#mistakes", "Common mistakes"],
                      ["#faq", "FAQs"],
                    ].map(([href, label]) => (
                      <a
                        key={href}
                        href={href}
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-blue-50 hover:text-[#00416a]"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Promo card */}
                <div className="rounded-2xl bg-[#00416a] p-5 text-white shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <TrendingUp size={18} className="text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    Expert F&O ITR filing
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    CA-assisted ITR-3 filing for F&O traders — includes P&L
                    preparation, Balance Sheet, expense optimization and tax audit
                    support if required.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Contact Taxvio <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Quick service links */}
                {[
                  {
                    href: "/serviceslist/income-tax/itr-business",
                    label: "ITR-3 Filing",
                    sub: "Business income from ₹1,999",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/income-tax-slabs",
                    label: "Tax Slabs AY 25-26",
                    sub: "New vs old regime",
                    color: "bg-blue-50 border-blue-100",
                    text: "text-blue-700",
                  },
                ].map(({ href, label, sub, color, text }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`group flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${color}`}
                  >
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-wide ${text}`}
                      >
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-extrabold text-gray-800">
                        {sub}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className={`${text} transition group-hover:translate-x-1`}
                    />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ════════ RELATED GUIDES ════════ */}
        <section className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                Explore more
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#00416a]">
                Related Income Tax Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/income-tax-slabs",
                  title: "Income Tax Slabs AY 2025-26",
                  text: "Complete new vs old regime comparison with rates, rebates and worked examples for all taxpayers.",
                },
                {
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS — Tax Credit Statement",
                  text: "Understand TDS credits, how to download, reconcile and verify before filing your ITR.",
                },
                {
                  href: "/contact",
                  title: "Get Expert ITR-3 Filing Help",
                  text: "CA-assisted F&O ITR filing, P&L preparation, tax audit and complete compliance support.",
                },
              ].map(({ href, title, text }) => (
                <Link
                  key={title}
                  href={href}
                  className="group rounded-2xl border border-[#dcebf3] bg-[#f8fbfd] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <FileText size={18} className="text-[#00416a]" />
                    <ArrowRight
                      size={15}
                      className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#00416a]"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-extrabold text-gray-800 group-hover:text-[#00416a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}