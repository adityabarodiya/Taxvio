// app/guide/itr-blogs/income-from-selling-shares/page.tsx

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
  Upload,
  Calendar,
  UserCheck,
  Landmark,
  TrendingUp,
  TrendingDown,
  Percent,
  BarChart3,
  PieChart,
  LineChart,
  DollarSign,
  Briefcase,
  FileSpreadsheet,
  History,
  RefreshCw,
  CircleDollarSign,
  Wallet,
  Target,
  XCircle,
  MinusCircle,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Tax on Income from Selling Shares in India — Complete Guide 2025 | Taxvio",
  description:
    "Complete guide to taxation on share sale income — STCG vs LTCG, tax rates for equity & debt, exemptions under Section 112A, indexation, ITR filing, set-off of losses and tax-saving strategies for FY 2024-25.",
  keywords: [
    "tax on selling shares",
    "capital gains tax on shares",
    "STCG on equity shares",
    "LTCG on shares",
    "tax on share sale India",
    "Section 112A shares",
    "equity share taxation",
    "stock market tax India",
    "how to calculate capital gains on shares",
    "ITR for share trading",
    "set off capital loss shares",
    "tax exemption on shares",
    "indexation shares",
    "share capital gains FY 2024-25",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/income-from-selling-shares",
  },
  openGraph: {
    title: "Tax on Income from Selling Shares — Complete Guide 2025 | Taxvio",
    description:
      "Everything about capital gains tax on shares — STCG, LTCG, tax rates, exemptions, Section 112A, indexation, ITR filing and loss set-off explained for FY 2024-25.",
    url: "https://www.taxvio.in/guide/itr-blogs/income-from-selling-shares",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax on Selling Shares in India — STCG, LTCG & Exemptions 2025",
    description:
      "Master share taxation — short-term vs long-term capital gains, tax rates, Section 112A, indexation and loss set-off rules explained.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const KEY_CONCEPTS = [
  {
    icon: TrendingUp,
    title: "Capital Gains — Not Business Income",
    desc: "Income from selling shares held as investment is classified as Capital Gains (STCG or LTCG). If you are a trader (intraday or F&O), income is classified as Business Income and taxed under 'Profits and Gains of Business or Profession'.",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    icon: Calendar,
    title: "Holding Period Determines Tax Rate",
    desc: "For listed equity shares, holding period ≤12 months = Short-term. >12 months = Long-term. For unlisted shares and debt mutual funds, the threshold is 36 months (24 months for immovable property).",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    icon: Percent,
    title: "Different Tax Rates for Equity vs Debt",
    desc: "STCG on equity: 15% (plus cess). LTCG on equity: 10% above ₹1 lakh (Section 112A, no indexation). Debt/unlisted shares: STCG at slab rates, LTCG at 20% with indexation.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    icon: MinusCircle,
    title: "Losses Can Be Set-Off & Carried Forward",
    desc: "Short-term capital loss can be set-off against both STCG and LTCG. Long-term loss can only be set-off against LTCG. Unabsorbed losses can be carried forward for 8 years (ITR must be filed on time).",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
];

const SHARE_TYPES = [
  {
    type: "Listed Equity Shares",
    definition: "Shares listed on recognized stock exchanges (NSE, BSE) and STT paid on sale.",
    stcgPeriod: "≤ 12 months",
    ltcgPeriod: "> 12 months",
    stcgRate: "15% (flat) + 4% cess",
    ltcgRate: "10% above ₹1 lakh exemption (no indexation) + 4% cess",
    indexation: "Not available",
    section: "Section 111A (STCG), Section 112A (LTCG)",
  },
  {
    type: "Unlisted Equity Shares",
    definition: "Shares not listed on any stock exchange (private companies, startups).",
    stcgPeriod: "≤ 24 months",
    ltcgPeriod: "> 24 months",
    stcgRate: "As per income tax slab rates",
    ltcgRate: "20% with indexation benefit + 4% cess",
    indexation: "Available for LTCG",
    section: "Section 111A not applicable; taxed under normal provisions",
  },
  {
    type: "Equity-Oriented Mutual Funds",
    definition: "Mutual funds investing ≥65% in equity (large cap, mid cap, index funds, ELSS).",
    stcgPeriod: "≤ 12 months",
    ltcgPeriod: "> 12 months",
    stcgRate: "15% (flat) + 4% cess",
    ltcgRate: "10% above ₹1 lakh exemption (no indexation) + 4% cess",
    indexation: "Not available",
    section: "Treated same as listed equity shares",
  },
  {
    type: "Debt Mutual Funds / Non-Equity Funds",
    definition: "Mutual funds investing <65% in equity (debt funds, liquid funds, FMPs).",
    stcgPeriod: "≤ 36 months",
    ltcgPeriod: "> 36 months",
    stcgRate: "As per income tax slab rates",
    ltcgRate: "20% with indexation benefit + 4% cess",
    indexation: "Available for LTCG",
    section: "Finance Act 2023 amendment — now taxed as per slab for gains post 1 April 2023",
  },
];

const TAX_CALCULATION_STEPS = [
  {
    step: "01",
    title: "Determine the holding period",
    desc: "Calculate the number of days/months between purchase date and sale date. For listed equity: ≤12 months = STCG, >12 months = LTCG. For unlisted/debt: ≤24/36 months = STCG.",
    icon: Calendar,
  },
  {
    step: "02",
    title: "Calculate sale consideration",
    desc: "Full value of consideration = Sale price per share × Number of shares sold. Include brokerage, STT and other transaction costs if they reduce net sale proceeds.",
    icon: DollarSign,
  },
  {
    step: "03",
    title: "Determine cost of acquisition",
    desc: "For shares bought: Purchase price + brokerage + transaction charges. For shares received as gift/inheritance: Cost of acquisition in the hands of previous owner. For bonus/rights shares: ₹Nil cost (if no payment made).",
    icon: Wallet,
  },
  {
    step: "04",
    title: "Apply indexation (if applicable)",
    desc: "Indexation applies only to LTCG on unlisted shares and debt funds (acquired before 1 April 2023). Indexed cost = (Cost of acquisition × CII of year of sale) ÷ CII of year of purchase. CII (Cost Inflation Index) is notified by CBDT annually.",
    icon: TrendingUp,
  },
  {
    step: "05",
    title: "Compute capital gains",
    desc: "Capital Gain = Sale consideration − Indexed cost of acquisition − Transfer expenses (brokerage, STT, etc.). If result is positive = gain; if negative = loss.",
    icon: Calculator,
  },
  {
    step: "06",
    title: "Apply exemption (if LTCG on equity)",
    desc: "For LTCG on listed equity/equity MF under Section 112A: First ₹1 lakh of LTCG in a financial year is exempt. Only gains above ₹1 lakh are taxed at 10%.",
    icon: Target,
  },
  {
    step: "07",
    title: "Calculate tax liability",
    desc: "STCG on equity: Taxable gain × 15%. LTCG on equity: (Gain − ₹1 lakh) × 10%. STCG on unlisted/debt: Add to total income and tax as per slab. LTCG on unlisted/debt: Taxable gain × 20%. Add 4% health & education cess to all.",
    icon: Percent,
  },
];

const SECTION_112A_DETAILS = [
  {
    aspect: "Applicability",
    detail: "Applies only to LTCG on listed equity shares and equity-oriented mutual funds sold on or after 1 April 2018.",
  },
  {
    aspect: "Exemption Limit",
    detail: "First ₹1 lakh of LTCG in a financial year is fully exempt from tax. This is a combined limit for all equity LTCG in the year.",
  },
  {
    aspect: "Tax Rate",
    detail: "10% (without indexation benefit) on LTCG exceeding ₹1 lakh. Health & education cess of 4% applies on the tax amount.",
  },
  {
    aspect: "Grandfathering Provision",
    detail: "For shares held on 31 January 2018, the cost of acquisition is the higher of (a) actual cost, or (b) Fair Market Value (FMV) as on 31 January 2018. This protects gains accrued before Section 112A was introduced.",
  },
  {
    aspect: "STT Requirement",
    detail: "Securities Transaction Tax (STT) must have been paid on both purchase and sale for Section 112A to apply. Off-market transfers do not qualify.",
  },
  {
    aspect: "No Indexation",
    detail: "Unlike LTCG on unlisted shares/debt funds, indexation benefit is not available under Section 112A. The cost is taken as-is without adjusting for inflation.",
  },
];

const LOSS_SETOFF_RULES = [
  {
    lossType: "Short-Term Capital Loss (STCL)",
    canSetOffAgainst: [
      "Short-term capital gains (STCG) from any asset",
      "Long-term capital gains (LTCG) from any asset",
    ],
    carryForward: "Yes, up to 8 assessment years if ITR filed on time",
    example: "STCL of ₹50,000 from equity shares can be set-off against LTCG of ₹1.5 lakh from property sale.",
    color: "bg-rose-50 border-rose-100",
  },
  {
    lossType: "Long-Term Capital Loss (LTCL)",
    canSetOffAgainst: [
      "Long-term capital gains (LTCG) from any asset only",
      "Cannot be set-off against STCG or any other income",
    ],
    carryForward: "Yes, up to 8 assessment years if ITR filed on time",
    example: "LTCL of ₹80,000 from unlisted shares can only be set-off against LTCG from equity shares, not against STCG.",
    color: "bg-amber-50 border-amber-100",
  },
  {
    lossType: "Speculative Business Loss (Intraday Trading)",
    canSetOffAgainst: [
      "Only against speculative business income",
      "Cannot be set-off against capital gains or non-speculative business income",
    ],
    carryForward: "Yes, up to 4 assessment years",
    example: "Intraday trading loss of ₹30,000 can only be set-off against future intraday trading profits, not against equity delivery gains.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    lossType: "Non-Speculative Business Loss (F&O Trading)",
    canSetOffAgainst: [
      "Any business income (speculative or non-speculative)",
      "Cannot be set-off against salary or capital gains",
    ],
    carryForward: "Yes, up to 8 assessment years (subject to audit if turnover >₹10 crore / income >₹25 lakh)",
    example: "F&O loss of ₹1 lakh can be set-off against other business income but not against equity delivery gains or salary.",
    color: "bg-violet-50 border-violet-100",
  },
];

const ITR_FORM_SELECTION = [
  {
    form: "ITR-2",
    applicability: "For individuals/HUFs with capital gains income (no business income). Use if you have only salary, house property, capital gains and other sources.",
    disclosure: "Schedule CG (Capital Gains) — disclose each transaction separately with sale date, purchase date, cost, sale value and gain/loss.",
    whoShouldFile: "Salaried investors with equity delivery/long-term MF investments",
  },
  {
    form: "ITR-3",
    applicability: "For individuals/HUFs with income from business/profession. Use if you are an active trader (intraday, F&O) or have proprietary business income along with capital gains.",
    disclosure: "Schedule BP (Business/Profession) for trading income + Schedule CG for delivery-based capital gains, if any.",
    whoShouldFile: "Active traders, F&O traders, business owners with share investments",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Not reporting exempt LTCG under Section 112A",
    impact: "Even though LTCG up to ₹1 lakh is exempt, it must still be disclosed in Schedule CG of ITR. Non-disclosure can lead to notices and processing delays.",
    solution: "Disclose all LTCG in ITR-2/ITR-3 Schedule CG. The portal auto-applies ₹1 lakh exemption.",
    icon: "⚠️",
  },
  {
    mistake: "Claiming indexation on listed equity LTCG",
    impact: "Section 112A does not allow indexation. Claiming it is an error and ITR will be processed with tax demand.",
    solution: "Use actual cost of acquisition without indexation for listed equity LTCG.",
    icon: "❌",
  },
  {
    mistake: "Setting off LTCL against STCG",
    impact: "Not allowed under the Income Tax Act. LTCL can only be set-off against LTCG. Incorrect set-off leads to ITR rejection.",
    solution: "Carry forward LTCL to future years and set-off only against future LTCG.",
    icon: "🔁",
  },
  {
    mistake: "Not filing ITR to carry forward losses",
    impact: "Capital losses can be carried forward for 8 years only if ITR is filed before the due date. Belated ITR does not allow loss carry-forward.",
    solution: "File ITR before due date (31 July for non-audit cases) even if total income is below taxable limit.",
    icon: "📅",
  },
  {
    mistake: "Treating intraday trading as capital gains",
    impact: "Intraday trading is classified as speculative business income, not capital gains. Must be reported in Schedule BP, not Schedule CG.",
    solution: "Report intraday profits/losses in Schedule BP (Speculative Income). Maintain books if turnover >₹25 lakh.",
    icon: "📊",
  },
  {
    mistake: "Ignoring brokerage and STT in cost calculation",
    impact: "Brokerage and STT paid on purchase can be added to cost of acquisition. Ignoring them inflates taxable gains.",
    solution: "Add brokerage, STT, DP charges and other transaction costs to purchase price. Deduct brokerage from sale price.",
    icon: "💸",
  },
];

const TAX_SAVING_STRATEGIES = [
  {
    strategy: "Hold Equity Shares for >12 Months",
    benefit: "Converts STCG taxed at 15% into LTCG with ₹1 lakh exemption + 10% rate. For gains up to ₹1 lakh, entire gain becomes tax-free.",
    example: "Gain of ₹80,000 from shares sold after 13 months = ₹0 tax (exempt). Same gain sold after 10 months = ₹12,000 tax (15% STCG).",
  },
  {
    strategy: "Utilize ₹1 Lakh LTCG Exemption Every Year",
    benefit: "Section 112A exemption does not carry forward. Use it every financial year by strategically booking LTCG up to ₹1 lakh annually.",
    example: "If you have LTCG of ₹3 lakh, spread sales across 3 financial years (₹1 lakh each year) to fully utilize exemption and save ₹31,200 tax.",
  },
  {
    strategy: "Set-Off Capital Losses Against Gains",
    benefit: "Book capital losses in shares with unrealized losses before year-end to reduce tax on capital gains realized during the year.",
    example: "Realized LTCG of ₹2 lakh. Book LTCL of ₹50,000 from a losing stock. Net taxable LTCG = ₹1.5 lakh. Tax saved = ₹5,000.",
  },
  {
    strategy: "Gift Shares to Family Members in Lower Tax Bracket",
    benefit: "Shares gifted to spouse/children (adults) can be sold by them, and gains taxed at their lower slab rate. (Clubbing provisions apply for minor children and if there's no adequate consideration).",
    example: "Gift shares to adult son with no other income. He sells and pays tax at his slab (possibly nil if total income <₹2.5 lakh), instead of you paying at 30%.",
  },
  {
    strategy: "Avoid Wash Sales (Selling and Repurchasing Same Share)",
    benefit: "Wash sales to book losses and immediately repurchase may attract anti-avoidance scrutiny. Wait at least 30 days before repurchasing to establish genuine intent.",
    example: "Sell loss-making shares before March 31 to claim LTCL. Repurchase after April 15 in the new FY to avoid disallowance risk.",
  },
  {
    strategy: "Invest in Tax-Free Bonds for Indexation Benefits (Unlisted Debt)",
    benefit: "For unlisted bonds/debt mutual funds acquired before 1 April 2023, LTCG is taxed at 20% with indexation, which may result in lower effective tax than slab rates.",
    example: "Debt fund bought in 2020 for ₹5 lakh, sold in 2025 for ₹7 lakh. Indexed cost = ₹6.3 lakh. Taxable LTCG = ₹70,000 only. Tax = ₹14,000 (20%) vs ₹60,000 at 30% slab.",
  },
];

const FAQS = [
  {
    question: "Is income from selling shares taxable in India?",
    answer:
      "Yes. Income from selling shares is taxable as Capital Gains (short-term or long-term) if you hold shares as an investment. The tax rate depends on the type of share (listed equity, unlisted equity, debt mutual fund), holding period and whether STT was paid. Listed equity STCG is taxed at 15%, LTCG at 10% above ₹1 lakh exemption. Unlisted shares STCG is taxed at slab rates, LTCG at 20% with indexation.",
  },
  {
    question: "What is the difference between STCG and LTCG on shares?",
    answer:
      "Short-Term Capital Gain (STCG) arises when shares are sold within the specified holding period — 12 months for listed equity, 24 months for unlisted equity, 36 months for debt funds. Long-Term Capital Gain (LTCG) arises when shares are held beyond this period. STCG on listed equity is taxed at 15%, LTCG at 10% (above ₹1 lakh exemption). For unlisted shares, STCG is taxed as per your income tax slab, LTCG at 20% with indexation benefit.",
  },
  {
    question: "What is Section 112A and how does it work?",
    answer:
      "Section 112A was introduced from AY 2019-20 (applicable from 1 April 2018) to tax long-term capital gains on listed equity shares and equity mutual funds. Under this section, LTCG exceeding ₹1 lakh in a financial year is taxed at 10% (without indexation benefit). The first ₹1 lakh of LTCG is fully exempt. STT must be paid on both purchase and sale for this section to apply. There is a grandfathering provision for shares held on 31 January 2018.",
  },
  {
    question: "Can I set-off long-term capital loss against short-term capital gain?",
    answer:
      "No. Long-term capital loss (LTCL) can only be set-off against long-term capital gains (LTCG) from any asset class. It cannot be set-off against short-term capital gains (STCG), salary, business income or any other income. However, short-term capital loss (STCL) can be set-off against both STCG and LTCG. Unabsorbed capital losses can be carried forward for 8 years if ITR is filed before the due date.",
  },
  {
    question: "Do I need to file ITR if my total income is below taxable limit but I have capital gains?",
    answer:
      "Yes, if you have capital gains income (even if exempt LTCG under Section 112A), you must file ITR-2 or ITR-3 and disclose the transactions in Schedule CG. Additionally, if you want to carry forward capital losses for future set-off, filing ITR before the due date is mandatory. Non-filing can result in loss of carry-forward benefit and potential notices from the tax department.",
  },
  {
    question: "What is the grandfathering provision under Section 112A?",
    answer:
      "The grandfathering provision protects investors from paying tax on gains accrued before 1 April 2018 (when Section 112A was introduced). For shares held on 31 January 2018, the cost of acquisition for calculating LTCG is the higher of (a) actual purchase price, or (b) Fair Market Value (FMV) as on 31 January 2018. This ensures that only gains accruing after the introduction of LTCG tax are taxed at 10%.",
  },
  {
    question: "How is tax calculated on bonus shares and rights shares?",
    answer:
      "Bonus shares: Cost of acquisition is ₹Nil (since you paid nothing). Holding period starts from the date of allotment. LTCG = Full sale value − ₹Nil = Sale value. Rights shares: Cost = Amount paid for rights entitlement. Holding period starts from the date you exercised the rights. Tax calculation is the same as regular shares based on holding period and type of share.",
  },
  {
    question: "Is tax deducted at source (TDS) on sale of shares?",
    answer:
      "No. There is no TDS on sale of listed equity shares or equity mutual funds through stock exchanges or AMCs. However, if you are selling unlisted shares (private company shares) and the sale value exceeds ₹50 lakh, the buyer is required to deduct TDS at 20% on capital gains (or 10% if PAN of seller is provided and seller is resident). You must report the sale in your ITR and claim credit for TDS deducted.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tax on Income from Selling Shares in India — Complete Guide 2025",
  description:
    "Comprehensive guide to taxation on income from selling shares — STCG vs LTCG, tax rates for equity and debt, Section 112A exemption, indexation, ITR filing, loss set-off rules and tax-saving strategies for FY 2024-25.",
  url: "https://www.taxvio.in/guide/itr-blogs/income-from-selling-shares",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/income-from-selling-shares",
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
  dateModified: "2025-04-01",
  wordCount: 5000,
  inLanguage: "en-IN",
  articleSection: "Capital Gains Tax",
  keywords: [
    "tax on shares",
    "STCG",
    "LTCG",
    "Section 112A",
    "capital gains tax",
    "equity shares taxation",
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
      name: "Income from Selling Shares",
      item: "https://www.taxvio.in/guide/itr-blogs/income-from-selling-shares",
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
  color?: "blue" | "green" | "amber" | "rose" | "violet";
}) {
  const styles = {
    blue: "border-blue-100 bg-blue-50 text-blue-900",
    green: "border-emerald-100 bg-emerald-50 text-emerald-900",
    amber: "border-amber-100 bg-amber-50 text-amber-900",
    rose: "border-rose-100 bg-rose-50 text-rose-900",
    violet: "border-violet-100 bg-violet-50 text-violet-900",
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

export default function IncomeFromSellingSharesPage() {
  return (
    <>
      <Script
        id="shares-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="shares-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="shares-faq-schema"
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
                "radial-gradient(circle,rgba(56,189,248,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(45,212,191,0.09) 0%,transparent 65%)",
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
                  Income from Selling Shares
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Updated for FY 2024-25 · AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Tax on Income from
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Selling Shares in India
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Complete guide to taxation on share sale income — understand
                  the difference between{" "}
                  <strong className="text-white">
                    short-term and long-term capital gains
                  </strong>
                  , tax rates for equity and debt, Section 112A exemption,
                  indexation benefits, ITR filing, loss set-off rules and
                  tax-saving strategies for FY 2024-25.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/serviceslist/income-tax/capital-gain"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    File Capital Gains ITR <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    Talk to Tax Expert <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick highlights card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Tax rates at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: TrendingUp,
                      title: "STCG on equity",
                      text: "15% (flat) + 4% cess on shares held ≤12 months",
                    },
                    {
                      icon: TrendingDown,
                      title: "LTCG on equity",
                      text: "10% above ₹1 lakh exemption (no indexation) + 4% cess",
                    },
                    {
                      icon: BarChart3,
                      title: "Unlisted shares LTCG",
                      text: "20% with indexation benefit + 4% cess",
                    },
                    {
                      icon: Percent,
                      title: "Debt MF STCG",
                      text: "As per income tax slab rates (no flat rate)",
                    },
                    {
                      icon: MinusCircle,
                      title: "Loss carry forward",
                      text: "8 years for capital losses if ITR filed on time",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-sky-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-sky-300" />
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
                { icon: BadgeCheck, text: "CA-Verified Tax Planning" },
                { icon: Shield, text: "Accurate Capital Gains Calculation" },
                { icon: Clock, text: "On-Time ITR Filing" },
                { icon: Star, text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-sky-400" /> {text}
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
                  Capital Gains Tax Guide
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  How Is Income from Selling Shares Taxed in India?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  When you sell shares or mutual fund units at a profit, the
                  income is classified as{" "}
                  <strong>Capital Gains</strong> and is taxable under the Income
                  Tax Act, 1961. The tax you pay depends on several factors —
                  the <strong>type of share</strong> (listed equity, unlisted
                  equity, debt mutual fund), the{" "}
                  <strong>holding period</strong> (short-term or long-term), and
                  whether <strong>Securities Transaction Tax (STT)</strong> was
                  paid on the transaction.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The Income Tax Act distinguishes between{" "}
                  <strong>Short-Term Capital Gains (STCG)</strong> and{" "}
                  <strong>Long-Term Capital Gains (LTCG)</strong> based on how
                  long you held the shares before selling them. For listed
                  equity shares and equity-oriented mutual funds, the holding
                  period threshold is <strong>12 months</strong>. For unlisted
                  shares, it is <strong>24 months</strong>. For debt mutual
                  funds, it is <strong>36 months</strong>.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Tax rates vary significantly. STCG on listed equity shares is
                  taxed at a flat rate of <strong>15%</strong> (plus 4% cess),
                  irrespective of your income tax slab. LTCG on listed equity
                  exceeding <strong>₹1 lakh</strong> in a financial year is
                  taxed at <strong>10%</strong> (without indexation benefit)
                  under Section 112A. For unlisted shares and debt mutual funds,
                  STCG is taxed as per your income tax slab, while LTCG is taxed
                  at <strong>20%</strong> with indexation benefit.
                </p>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {KEY_CONCEPTS.map(({ icon: Icon, title, desc, color }) => (
                    <div
                      key={title}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")} border ${
                            color.split(" ")[1]
                          } flex items-center justify-center shrink-0`}
                        >
                          <Icon size={20} className={color.split(" ")[2]} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-extrabold text-gray-800">
                            {title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Capital gains vs business income" color="blue">
                  <p>
                    If you are engaged in <strong>intraday trading</strong> or{" "}
                    <strong>Futures & Options (F&O)</strong> trading, your
                    income is classified as <strong>Business Income</strong>
                    (speculative or non-speculative), not capital gains. It is
                    taxed as per your income tax slab and reported in Schedule
                    BP of ITR-3, not Schedule CG. Delivery-based share
                    investments are classified as capital gains.
                  </p>
                </InfoBox>
              </div>

              {/* Share Types */}
              <section id="share-types" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Classification"
                  heading="Types of Shares and Applicable Tax Rates"
                  icon={PieChart}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Tax treatment of capital gains varies based on the type of
                  share or mutual fund you are selling. Here is a comprehensive
                  breakdown:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#f8fbfd]">
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          Share Type
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          STCG Period
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          LTCG Period
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          STCG Rate
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          LTCG Rate
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          Indexation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {SHARE_TYPES.map(
                        ({
                          type,
                          stcgPeriod,
                          ltcgPeriod,
                          stcgRate,
                          ltcgRate,
                          indexation,
                        }) => (
                          <tr key={type} className="hover:bg-blue-50/30">
                            <td className="border border-gray-200 p-3 font-semibold text-gray-700">
                              {type}
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">
                              {stcgPeriod}
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">
                              {ltcgPeriod}
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">
                              {stcgRate}
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">
                              {ltcgRate}
                            </td>
                            <td className="border border-gray-200 p-3 text-gray-600">
                              {indexation}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="STT requirement for Section 111A & 112A" color="amber">
                    <p>
                      For STCG to be taxed at 15% under Section 111A and LTCG to
                      be taxed at 10% under Section 112A, Securities Transaction
                      Tax (STT) must be paid on both purchase and sale. Off-market
                      transfers (where STT is not paid) do not qualify for these
                      concessional rates and are taxed as per normal provisions.
                    </p>
                  </InfoBox>
                  <InfoBox title="Finance Act 2023 changes for debt funds" color="rose">
                    <p>
                      From 1 April 2023, debt mutual funds and unlisted bonds
                      acquired after this date do not get LTCG treatment with
                      indexation benefit. Instead, all gains (irrespective of
                      holding period) are taxed as per the investor&apos;s income
                      tax slab. This change significantly increases tax liability
                      on debt fund investments made post-April 2023.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Calculation Steps */}
              <section id="calculation" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step process"
                  heading="How to Calculate Capital Gains on Shares"
                  icon={Calculator}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Calculating capital gains involves determining the holding
                  period, sale consideration, cost of acquisition, applying
                  indexation (if applicable) and computing the taxable gain.
                  Here is the complete process:
                </p>

                <div className="space-y-4">
                  {TAX_CALCULATION_STEPS.map(({ step, title, desc, icon: Icon }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Icon
                            size={14}
                            className="text-[#0077b6] shrink-0"
                          />
                          <h3 className="text-sm font-bold text-gray-800">
                            {title}
                          </h3>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-gray-100 bg-[#f8fbfd] p-6">
                  <p className="text-sm font-bold text-gray-800 mb-4">
                    Example Calculation — LTCG on Listed Equity Shares
                  </p>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <strong>Scenario:</strong> You bought 100 shares of Reliance
                      Industries at ₹2,000 per share on 1 April 2023. You sold
                      them at ₹2,800 per share on 1 May 2024. Brokerage on
                      purchase = ₹200, Brokerage on sale = ₹300.
                    </p>
                    <div className="border-t border-gray-200 pt-3 space-y-2">
                      <p>
                        <strong>Purchase cost:</strong> (100 × ₹2,000) + ₹200 =
                        ₹2,00,200
                      </p>
                      <p>
                        <strong>Sale value:</strong> (100 × ₹2,800) − ₹300 =
                        ₹2,79,700
                      </p>
                      <p>
                        <strong>Capital Gain:</strong> ₹2,79,700 − ₹2,00,200 =
                        ₹79,500
                      </p>
                      <p>
                        <strong>Holding period:</strong> 13 months (Long-term)
                      </p>
                      <p>
                        <strong>Exemption:</strong> ₹79,500 is below ₹1 lakh, so
                        fully exempt under Section 112A
                      </p>
                      <p className="font-bold text-emerald-600">
                        <strong>Tax payable:</strong> ₹0
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 112A */}
              <section id="section-112a" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="LTCG exemption"
                  heading="Understanding Section 112A — ₹1 Lakh LTCG Exemption"
                  icon={Target}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Section 112A was introduced in the Finance Act 2018 to tax
                  long-term capital gains on listed equity shares and
                  equity-oriented mutual funds. Here are the key provisions:
                </p>

                <div className="space-y-4">
                  {SECTION_112A_DETAILS.map(({ aspect, detail }) => (
                    <div
                      key={aspect}
                      className="flex gap-4 items-start border border-gray-100 rounded-xl p-4 bg-white"
                    >
                      <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                        <CheckCircle size={16} className="text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">
                          {aspect}
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="₹1 lakh exemption is per financial year" color="green">
                  <p>
                    The ₹1 lakh exemption under Section 112A is a combined limit
                    for all long-term capital gains on equity shares and equity
                    mutual funds in a financial year. It does not carry forward
                    to the next year. Strategic planning — selling shares
                    gradually over multiple years — can maximize the benefit of
                    this exemption.
                  </p>
                </InfoBox>
              </section>

              {/* Loss Set-off */}
              <section id="loss-setoff" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Loss management"
                  heading="Capital Loss Set-Off and Carry Forward Rules"
                  icon={MinusCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Capital losses can be set-off against capital gains to reduce
                  tax liability. However, there are specific rules governing
                  which type of loss can be set-off against which type of gain:
                </p>

                <div className="space-y-4">
                  {LOSS_SETOFF_RULES.map(
                    ({ lossType, canSetOffAgainst, carryForward, example, color }) => (
                      <div
                        key={lossType}
                        className={`rounded-2xl border p-5 ${color
                          .split(" ")
                          .slice(0, 2)
                          .join(" ")}`}
                      >
                        <h3 className="text-sm font-extrabold text-gray-800 mb-3">
                          {lossType}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs font-semibold text-gray-700">
                              Can be set-off against:
                            </p>
                            <ul className="mt-1 space-y-1">
                              {canSetOffAgainst.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-1.5 text-xs text-gray-600"
                                >
                                  <CheckCircle
                                    size={11}
                                    className="text-emerald-500 shrink-0 mt-0.5"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-700">
                              Carry forward:
                            </p>
                            <p className="text-xs text-gray-600">{carryForward}</p>
                          </div>
                          <div className="border-t border-gray-200 pt-2">
                            <p className="text-xs font-semibold text-gray-700">
                              Example:
                            </p>
                            <p className="text-xs text-gray-600 italic">{example}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <InfoBox title="ITR filing is mandatory to carry forward losses" color="rose">
                  <p>
                    To carry forward capital losses for set-off in future years,
                    you must file your Income Tax Return (ITR) <strong>before
                    the due date</strong> (31 July for non-audit cases). Belated
                    or revised ITR does not allow loss carry-forward. Even if
                    your total income is below the taxable limit, file ITR on
                    time if you have capital losses.
                  </p>
                </InfoBox>
              </section>

              {/* ITR Filing */}
              <section id="itr-filing" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Compliance requirement"
                  heading="Which ITR Form to Use for Share Sale Income?"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The ITR form you need to file depends on whether you are an
                  investor (capital gains) or a trader (business income):
                </p>

                <div className="space-y-4">
                  {ITR_FORM_SELECTION.map(
                    ({ form, applicability, disclosure, whoShouldFile }) => (
                      <div
                        key={form}
                        className="border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                            <FileText size={18} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-extrabold text-gray-800">
                              {form}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-gray-600">
                              <strong>Applicability:</strong> {applicability}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-gray-600">
                              <strong>Disclosure:</strong> {disclosure}
                            </p>
                            <p className="mt-2 text-xs text-[#0077b6] font-semibold">
                              Who should file: {whoShouldFile}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <InfoBox title="Even exempt LTCG must be disclosed" color="amber">
                  <p>
                    Even if your long-term capital gains are below ₹1 lakh and
                    fully exempt under Section 112A, you must still disclose
                    these transactions in Schedule CG of your ITR. The Income Tax
                    Department uses this data to track transactions and verify
                    compliance. Non-disclosure can lead to notices.
                  </p>
                </InfoBox>
              </section>

              {/* Common Mistakes */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Avoid these errors"
                  heading="Common Mistakes When Filing Tax on Share Sale"
                  icon={XCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here are the most common errors taxpayers make when reporting
                  capital gains from shares, and how to avoid them:
                </p>

                <div className="space-y-4">
                  {COMMON_MISTAKES.map(({ mistake, impact, solution, icon }) => (
                    <div
                      key={mistake}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800">
                            {mistake}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            <strong>Impact:</strong> {impact}
                          </p>
                          <p className="mt-2 text-xs text-emerald-600 font-semibold">
                            ✓ Solution: {solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tax-Saving Strategies */}
              <section id="strategies" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Tax optimization"
                  heading="Tax-Saving Strategies for Share Investors"
                  icon={Briefcase}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Smart tax planning can significantly reduce your capital gains
                  tax liability. Here are proven strategies used by experienced
                  investors:
                </p>

                <div className="space-y-4">
                  {TAX_SAVING_STRATEGIES.map(({ strategy, benefit, example }) => (
                    <div
                      key={strategy}
                      className="border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                          <TrendingUp size={16} className="text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-800">
                            {strategy}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            <strong>Benefit:</strong> {benefit}
                          </p>
                          <p className="mt-2 text-xs text-[#0077b6] italic">
                            <strong>Example:</strong> {example}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Consult a CA for tax planning" color="violet">
                  <p>
                    Tax planning for capital gains requires analysis of your
                    overall income, existing investments, future cash needs and
                    risk appetite. A qualified Chartered Accountant can help you
                    structure your share sales to minimize tax liability while
                    ensuring full compliance with tax laws.
                  </p>
                </InfoBox>
              </section>

              {/* CTA */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      Need capital gains tax help?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your capital gains ITR filing
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team calculates STCG/LTCG, applies Section 112A
                      exemption, optimizes loss set-off and files accurate
                      ITR-2/ITR-3 — ensuring you pay minimum tax legally.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Talk to Taxvio <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="Share Taxation FAQs"
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
                  <strong className="text-gray-700">Disclaimer:</strong> This
                  article is for general educational purposes. Tax rates,
                  exemptions and provisions are subject to change through Finance
                  Acts, CBDT circulars and amendments. Capital gains calculation
                  involves individual facts and professional judgment. Always
                  consult a qualified Chartered Accountant or tax advisor for
                  personalized advice on your investments and ITR filing.
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
                      ["#share-types", "Types & tax rates"],
                      ["#calculation", "Calculation steps"],
                      ["#section-112a", "Section 112A"],
                      ["#loss-setoff", "Loss set-off rules"],
                      ["#itr-filing", "ITR form selection"],
                      ["#mistakes", "Common mistakes"],
                      ["#strategies", "Tax-saving tips"],
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
                    <Calculator size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    Capital gains tax help?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    We calculate STCG/LTCG, optimize tax, file ITR-2/ITR-3 and
                    manage all compliance. Accurate, compliant filing.
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
                    href: "/serviceslist/income-tax/capital-gain",
                    label: "Capital Gains ITR",
                    sub: "From ₹1,499",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/form-26as",
                    label: "Form 26AS Guide",
                    sub: "TDS credit statement",
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
                  title: "Income Tax Slabs FY 2024-25",
                  text: "New vs old regime tax rates, rebate under Section 87A and worked examples.",
                },
                {
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS — Tax Credit Statement",
                  text: "How to view, download and reconcile your TDS credits before ITR filing.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Tax Expert",
                  text: "Get CA-assisted capital gains calculation, ITR filing and complete tax compliance.",
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