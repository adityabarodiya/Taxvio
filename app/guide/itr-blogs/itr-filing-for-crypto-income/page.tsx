// app/guide/itr-blogs/itr-filing-for-crypto-income/page.tsx

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
  Coins,
  Calendar,
  UserCheck,
  Landmark,
  BarChart3,
  Percent,
  DollarSign,
  FileSpreadsheet,
  Wallet,
  TrendingUp,
  Lock,
  Activity,
  XCircle,
  Ban,
  Upload,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "ITR Filing for Crypto Income: Complete Tax Guide for Cryptocurrency in India AY 2025-26 | Taxvio",
  description:
    "Complete guide to filing ITR for cryptocurrency income in India — 30% tax under Section 115BBH, VDA tax rules, no set-off of losses, TDS under Section 194S, gifting taxation, mining income, staking rewards, airdrops, and ITR-2 filing process for crypto traders and investors.",
  keywords: [
    "crypto income tax India",
    "cryptocurrency ITR filing",
    "Section 115BBH VDA tax",
    "30% tax on crypto",
    "crypto TDS Section 194S",
    "ITR-2 for crypto",
    "virtual digital assets tax",
    "crypto trading tax India",
    "Bitcoin tax India",
    "crypto gift tax",
    "crypto mining tax",
    "NFT tax India",
    "AY 2025-26 crypto tax",
    "crypto loss set-off",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-crypto-income",
  },
  openGraph: {
    title: "ITR Filing for Crypto Income — Complete Tax Guide AY 2025-26 | Taxvio",
    description:
      "Everything you need to know about filing ITR for cryptocurrency income in India — 30% tax, Section 115BBH, TDS, no loss set-off, gifting rules and compliance for AY 2025-26.",
    url: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-crypto-income",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing for Crypto Income — India Tax Guide AY 2025-26",
    description:
      "Learn how to file ITR for cryptocurrency income — 30% tax under Section 115BBH, TDS, no loss set-off, and complete compliance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const CRYPTO_TAX_BASICS = [
  {
    term: "Virtual Digital Assets (VDA)",
    definition: "As per Section 2(47A) of the Income Tax Act, VDA includes cryptocurrency (Bitcoin, Ethereum, etc.), NFTs (non-fungible tokens), and any other digital asset as notified by the government. All income from transfer of VDA is taxable under special provisions introduced in Budget 2022.",
    icon: "🪙",
    color: "bg-blue-50 border-blue-100",
  },
  {
    term: "30% Flat Tax (Section 115BBH)",
    definition: "Income from transfer of VDA is taxed at a flat rate of 30% (plus applicable surcharge and 4% cess) under Section 115BBH. This tax applies regardless of your income slab, holding period, or whether the crypto was purchased or received as gift. No deductions (80C, 80D, etc.) are allowed against this income.",
    icon: "💰",
    color: "bg-rose-50 border-rose-100",
  },
  {
    term: "No Set-Off of Losses",
    definition: "Loss from one crypto transaction cannot be set off against profit from another crypto transaction. Loss from crypto cannot be set off against any other income (salary, business, capital gains). Crypto losses cannot be carried forward to future years. Each profitable transaction is taxed independently.",
    icon: "❌",
    color: "bg-amber-50 border-amber-100",
  },
  {
    term: "1% TDS (Section 194S)",
    definition: "From 1 July 2022, buyers of VDA must deduct TDS at 1% on payments made to sellers if the transaction value exceeds ₹10,000 (for specified persons like exchanges) or ₹50,000 (for others) in a financial year. This TDS is in addition to the 30% tax on gains.",
    icon: "🏦",
    color: "bg-violet-50 border-violet-100",
  },
];

const VDA_TRANSACTIONS = [
  {
    transaction: "Selling Crypto for INR",
    taxable: "Yes",
    taxRate: "30% + surcharge + 4% cess",
    calculation: "Selling Price - Purchase Price (including gas fees, platform charges)",
    example: "Bought Bitcoin at ₹40L, sold at ₹60L → Gain = ₹20L → Tax = ₹6L (30% of ₹20L) + cess",
  },
  {
    transaction: "Crypto-to-Crypto Trade (e.g., BTC to ETH)",
    taxable: "Yes",
    taxRate: "30% + surcharge + 4% cess",
    calculation: "Fair Market Value of crypto received - Cost of crypto given up",
    example: "Traded 1 BTC (worth ₹50L) for 20 ETH (worth ₹55L at time of trade) → Gain = ₹5L → Tax = ₹1.5L",
  },
  {
    transaction: "Receiving Crypto as Gift",
    taxable: "Yes (on transfer by recipient)",
    taxRate: "30% when recipient sells",
    calculation: "Cost basis = Nil (if gift from non-relative) or donor's cost (if from relative)",
    example: "Received 1 ETH as gift (worth ₹2L). When you sell at ₹3L, gain = ₹3L (if non-relative) → Tax = ₹90,000",
  },
  {
    transaction: "Crypto Mining Rewards",
    taxable: "Yes (as income from business/profession)",
    taxRate: "30% under Section 115BBH OR as business income (slab rates)",
    calculation: "Fair Market Value of mined crypto at time of receipt",
    example: "Mined 0.5 BTC worth ₹25L → ₹25L is taxable income (debate whether 30% or business income)",
  },
  {
    transaction: "Staking Rewards / Interest from Crypto Lending",
    taxable: "Yes",
    taxRate: "30% under Section 115BBH OR as income from other sources",
    calculation: "Fair Market Value of rewards received",
    example: "Earned 1 ETH (worth ₹2L) as staking reward → ₹2L taxable at 30%",
  },
  {
    transaction: "Airdrops / Hard Forks",
    taxable: "Yes (on transfer)",
    taxRate: "30% when you sell the airdropped tokens",
    calculation: "Selling price - Cost basis (usually Nil)",
    example: "Received airdrop worth ₹50,000, sold at ₹80,000 → Gain = ₹80,000 → Tax = ₹24,000",
  },
  {
    transaction: "NFT Sale",
    taxable: "Yes",
    taxRate: "30% + surcharge + 4% cess",
    calculation: "Selling price - Purchase price (or creation cost)",
    example: "Bought NFT at ₹1L, sold at ₹5L → Gain = ₹4L → Tax = ₹1.2L",
  },
];

const SECTION_194S_TDS = [
  {
    scenario: "Exchange (Specified Person) — Transaction > ₹10,000",
    tdsRate: "1%",
    threshold: "₹10,000 in FY",
    deductedBy: "Crypto exchange (WazirX, CoinDCX, etc.)",
    details: "If your total sale/withdrawal value from a crypto exchange exceeds ₹10,000 in a financial year, the exchange deducts 1% TDS before crediting INR to your account. This TDS is on gross transaction value, not on profit.",
  },
  {
    scenario: "Individual Buyer — Transaction > ₹50,000",
    tdsRate: "1%",
    threshold: "₹50,000 in FY",
    deductedBy: "Individual or entity buying crypto from you (P2P)",
    details: "If an individual buys crypto from you and the aggregate value exceeds ₹50,000 in a financial year, they must deduct 1% TDS and deposit it with the government. Applicable mainly in P2P transactions.",
  },
  {
    scenario: "Gift or Transfer without Consideration",
    tdsRate: "Not applicable",
    threshold: "NA",
    deductedBy: "NA",
    details: "No TDS is deducted on gifts or free transfers of crypto. However, the recipient may have tax liability when they eventually sell the gifted crypto.",
  },
];

const ITR_FORM_CRYPTO = [
  {
    form: "ITR-2",
    title: "For Individuals with Crypto Income (Capital Gains)",
    when: "You must file ITR-2 if you have income from transfer of VDA (crypto, NFT). ITR-2 is for individuals having capital gains, multiple house properties, or foreign assets/income — and no business income.",
    features: [
      "Mandatory for reporting crypto gains under Section 115BBH",
      "Schedule VDA (Virtual Digital Assets) must be filled",
      "Cannot file ITR-1 (Sahaj) if you have crypto income",
      "Supports salary + crypto income combination",
      "Due date: 31 August 2026 for AY 2025-26 (non-audit cases)",
    ],
    color: "bg-blue-50 border-blue-200",
    recommended: true,
  },
  {
    form: "ITR-3",
    title: "For Crypto Trading as Business Income",
    when: "If you are a professional crypto trader with high frequency of trades, treating crypto as stock-in-trade (business income), you may file ITR-3. However, the 30% tax under Section 115BBH still applies.",
    features: [
      "For those treating crypto trading as business",
      "Allows reporting business income and expenses",
      "Still taxed at 30% under Section 115BBH (no benefit of business classification for VDA)",
      "Requires maintaining books of accounts",
      "Generally not recommended unless you have other business income",
    ],
    color: "bg-amber-50 border-amber-200",
    recommended: false,
  },
];

const COMMON_DEDUCTIONS_NOT_ALLOWED = [
  {
    deduction: "Section 80C (₹1.5 lakh)",
    allowed: "NO",
    reason: "Section 115BBH(2) explicitly states that no deduction under Chapter VI-A (80C, 80D, 80G, etc.) is allowed against income from VDA transfer.",
  },
  {
    deduction: "Section 80D (Health Insurance)",
    allowed: "NO",
    reason: "No Chapter VI-A deduction allowed against VDA income.",
  },
  {
    deduction: "Standard Deduction (₹50,000 for salary)",
    allowed: "NO (against crypto income)",
    reason: "Standard deduction applies only to salary income, not to crypto gains.",
  },
  {
    deduction: "Cost of Acquisition",
    allowed: "YES (only purchase price + transaction fees)",
    reason: "You can deduct the actual purchase price of crypto and direct transaction fees (gas fees, platform charges). No other expenses like internet, electricity, research are deductible for crypto held as investment.",
  },
  {
    deduction: "Loss Set-Off",
    allowed: "NO",
    reason: "Loss from one crypto transaction cannot be set off against profit from another crypto transaction or any other income. Loss cannot be carried forward.",
  },
];

const GIFTING_RULES = [
  {
    scenario: "Receiving Crypto Gift from Relative",
    taxAtReceipt: "No tax at the time of receipt",
    taxOnSale: "30% tax on gain calculated as: Sale Price - Donor's Original Cost",
    definition: "Relative as per Income Tax Act: spouse, siblings, parents, spouse's parents, lineal ascendants/descendants.",
    example: "Father bought BTC at ₹10L, gifted to you when worth ₹20L. You sell at ₹30L → Gain = ₹30L - ₹10L = ₹20L → Tax = ₹6L",
  },
  {
    scenario: "Receiving Crypto Gift from Non-Relative",
    taxAtReceipt: "Taxable if FMV > ₹50,000 in a year (clubbed with other gifts) under Section 56(2)(x)",
    taxOnSale: "30% tax on full sale proceeds (cost basis = Nil)",
    definition: "Non-relative includes friends, colleagues, online community members, etc.",
    example: "Received 1 ETH worth ₹2L as gift from friend → ₹2L taxable under 'Income from Other Sources' at slab rate. Later sold at ₹3L → ₹3L taxable at 30% under Section 115BBH.",
  },
  {
    scenario: "Giving Crypto as Gift",
    taxOnGiver: "Yes — treated as transfer, 30% tax on capital gain",
    taxOnReceiver: "Depends on relationship (see above)",
    definition: "Giving crypto is treated as disposal/transfer. You must pay 30% tax on gain even if you received no money.",
    example: "You bought BTC at ₹5L, gifted when worth ₹8L → You pay tax on ₹3L gain = ₹90,000 (30%). Recipient's cost basis = ₹8L (if non-relative) or ₹5L (if relative).",
  },
];

const FILING_STEPS = [
  {
    step: "01",
    title: "Collect All Transaction Records",
    desc: "Download complete transaction history from all crypto exchanges you used (WazirX, CoinDCX, Binance, etc.). Include buy, sell, trade, withdrawal, deposit records. Also collect records of P2P transactions, gifts received/given, airdrops, staking rewards, mining income. Maintain Excel sheet with date, type, quantity, INR value, fees.",
    icon: Download,
  },
  {
    step: "02",
    title: "Calculate Gain/Loss for Each Transaction",
    desc: "For every sale or transfer of crypto, calculate: Selling Price (or FMV at time of trade) - Purchase Price (including gas fees, exchange fees). Note that even crypto-to-crypto trades are taxable events. Each profitable transaction is taxed at 30%; losses are not allowed to be set off.",
    icon: Calculator,
  },
  {
    step: "03",
    title: "Download Form 26AS and AIS (Annual Information Statement)",
    desc: "Log in to the income tax portal or TRACES and download Form 26AS to check TDS deducted by crypto exchanges under Section 194S. Also check AIS (Annual Information Statement) which may show crypto transactions reported by exchanges. Reconcile with your records.",
    icon: FileSpreadsheet,
  },
  {
    step: "04",
    title: "Login to Income Tax E-Filing Portal",
    desc: "Visit incometax.gov.in and log in with your PAN and password. Navigate to e-File > Income Tax Returns > File Income Tax Return. Select Assessment Year 2025-26.",
    icon: UserCheck,
  },
  {
    step: "05",
    title: "Select ITR-2 Form",
    desc: "Choose ITR-2 as your ITR form. ITR-2 is applicable for individuals having capital gains (including VDA gains), foreign assets, or multiple house properties. ITR-1 (Sahaj) cannot be used if you have crypto income.",
    icon: FileText,
  },
  {
    step: "06",
    title: "Fill Personal Information (Part A)",
    desc: "Enter PAN, name, date of birth, address, mobile, email, bank account details. Select residential status (Resident/NRI). Choose tax regime (new regime or old regime — note that Chapter VI-A deductions don't apply to VDA income anyway).",
    icon: Landmark,
  },
  {
    step: "07",
    title: "Fill Schedule VDA — Virtual Digital Assets",
    desc: "ITR-2 has a dedicated Schedule VDA for reporting crypto income. Enter details of each transaction: Date of acquisition, date of transfer, sale consideration (selling price), cost of acquisition, gain (will be auto-computed), head of income (select '115BBH — VDA'). Portal will compute 30% tax on each gain.",
    icon: Coins,
  },
  {
    step: "08",
    title: "Report Other Income (if any)",
    desc: "If you also have salary income, report in Schedule S. House property income in Schedule HP. Other capital gains (equity, mutual funds, property) in Schedule CG. Interest, dividend in Schedule OS. These incomes are taxed at slab rates (or applicable capital gains rates).",
    icon: BarChart3,
  },
  {
    step: "09",
    title: "Claim TDS Credit (Section 194S)",
    desc: "In the TDS section, enter TDS deducted by crypto exchanges under Section 194S. This will be auto-populated from Form 26AS in most cases. Verify the entries. TDS will be adjusted against your total tax liability (including the 30% VDA tax).",
    icon: Eye,
  },
  {
    step: "10",
    title: "Compute Tax, Pay Balance and Submit",
    desc: "The portal will compute total tax liability: 30% on VDA gains + slab rate tax on other income + surcharge + 4% cess. Deduct TDS credits and advance tax paid (if any). Pay any balance tax using Challan 280. Submit ITR and verify within 30 days using Aadhaar OTP, EVC or ITR-V.",
    icon: Upload,
  },
];

const PENALTIES_INTEREST = [
  {
    section: "Section 115BBH",
    penalty: "30% Flat Tax on VDA Gains",
    detail: "This is not a penalty but the core tax provision. Every gain from VDA transfer is taxed at 30% + applicable surcharge (10-37% based on income) + 4% cess. Effective rate can be as high as 42.7% for very high incomes.",
    avoidance: "Cannot be avoided — mandatory tax on all crypto gains.",
  },
  {
    section: "Section 271AAD",
    penalty: "Penalty for Non-Furnishing of Return",
    detail: "If you fail to file ITR when you have crypto income, penalty of up to ₹10,000 can be levied under Section 271AAD (introduced in Budget 2022 specifically for VDA non-compliance).",
    avoidance: "File ITR on time (by 31 August 2026 for AY 2025-26).",
  },
  {
    section: "Section 234A",
    penalty: "Interest for Late Filing",
    detail: "1% per month simple interest on unpaid tax from the due date (1 August) till the date of filing ITR. Applies to balance tax payable after adjusting TDS and advance tax.",
    avoidance: "File ITR and pay tax by 31 August.",
  },
  {
    section: "Section 234B",
    penalty: "Interest for Non-Payment of Advance Tax",
    detail: "1% per month on shortfall in advance tax. If your total tax liability (including VDA tax) exceeds ₹10,000, you must pay advance tax in installments. Not paying advance tax attracts this interest.",
    avoidance: "Pay advance tax in four installments (15 June, 15 Sept, 15 Dec, 15 March).",
  },
  {
    section: "Section 270A",
    penalty: "Penalty for Misreporting/Under-reporting",
    detail: "If you under-report crypto income or misreport transactions, penalty of 50% of tax on under-reported income can be levied (200% in case of misreporting with intent to evade tax).",
    avoidance: "Report all crypto transactions accurately, maintain transaction records for 6 years.",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Not reporting crypto-to-crypto trades",
    why: "Many believe only crypto-to-INR sales are taxable. However, even trading BTC for ETH is a taxable event — you must compute gain/loss based on FMV at time of trade.",
    consequence: "Under-reporting of income, penalty under Section 270A, scrutiny assessment",
    fix: "Report every crypto-to-crypto trade as a separate transaction in Schedule VDA",
    icon: "❌",
    color: "bg-rose-50 border-rose-100",
  },
  {
    mistake: "Setting off crypto losses against other income or gains",
    why: "Crypto losses cannot be set off against any other income — not even against other crypto gains. Many taxpayers incorrectly calculate net profit/loss and report only net.",
    consequence: "Incorrect tax computation, notice from tax department, loss of legitimate tax credits",
    fix: "Report each profitable transaction separately, pay 30% tax on each. Ignore losses (cannot be claimed).",
    icon: "⚠️",
    color: "bg-amber-50 border-amber-100",
  },
  {
    mistake: "Not reporting gifts of crypto",
    why: "Giving crypto as gift is treated as transfer/disposal. You must pay 30% tax on capital gain even if you didn't receive money. Receiving crypto gift from non-relative is also taxable.",
    consequence: "Tax evasion charge, penalty, interest on unpaid tax",
    fix: "Report crypto gifts given (pay tax on gain) and received (tax under 'Other Sources' if from non-relative > ₹50k)",
    icon: "🎁",
    color: "bg-orange-50 border-orange-100",
  },
  {
    mistake: "Claiming deductions (80C, 80D) against crypto income",
    why: "Section 115BBH(2) clearly prohibits claiming any Chapter VI-A deduction against VDA income. Yet many file ITR claiming 80C/80D thinking it will reduce crypto tax.",
    consequence: "Defective return, addition of income, penalty",
    fix: "Do not claim 80C, 80D, 80G or any other deduction against crypto gains. These can be claimed only against other income (salary, house property).",
    icon: "🚫",
    color: "bg-red-50 border-red-100",
  },
  {
    mistake: "Not maintaining transaction records",
    why: "Without proper records of purchase price, date, quantity, you cannot accurately compute gain. Exchanges may not provide historical data after a few years.",
    consequence: "Unable to substantiate cost of acquisition in case of scrutiny, entire sale proceeds may be treated as income",
    fix: "Download and save all transaction history, maintain Excel/CSV records, take screenshots of wallet transactions, save blockchain explorer links",
    icon: "📂",
    color: "bg-yellow-50 border-yellow-100",
  },
];

const FAQS = [
  {
    question: "Which ITR form should I file if I have crypto income?",
    answer:
      "You must file ITR-2 if you have income from transfer of cryptocurrency, NFTs, or any other virtual digital assets (VDA). ITR-2 is for individuals and HUFs having capital gains, foreign assets, or multiple house properties — and no business income. ITR-2 has a dedicated Schedule VDA where you report each crypto transaction. You cannot file ITR-1 (Sahaj) if you have any crypto income, even if your total income is below taxable limit. If you are a professional crypto trader treating crypto as stock-in-trade, you may file ITR-3, but the 30% tax under Section 115BBH still applies, so there is generally no benefit.",
  },
  {
    question: "What is the tax rate on cryptocurrency in India?",
    answer:
      "Income from transfer of virtual digital assets (VDA) including cryptocurrency and NFTs is taxed at a flat rate of 30% under Section 115BBH, introduced in Finance Act 2022. In addition to the 30% tax, applicable surcharge (10-37% based on total income) and 4% health and education cess are added. The effective tax rate can go up to 42.744% for very high-income individuals. This 30% rate applies regardless of your income tax slab, holding period (short-term or long-term), or whether the crypto was purchased or received as gift. No deductions under Chapter VI-A (80C, 80D, etc.) are allowed against this income.",
  },
  {
    question: "Can I set off crypto losses against crypto gains or other income?",
    answer:
      "No. Section 115BBH explicitly prohibits set-off of losses from VDA transactions. This means: (1) Loss from one crypto transaction cannot be set off against profit from another crypto transaction, (2) Loss from crypto cannot be set off against any other income like salary, business income, house property income, or other capital gains, (3) Crypto losses cannot be carried forward to future years. You must pay 30% tax on each profitable transaction independently. If you made ₹10 lakh profit on Bitcoin and ₹8 lakh loss on Ethereum, you pay 30% tax on ₹10 lakh (₹3 lakh) — you cannot net it to ₹2 lakh.",
  },
  {
    question: "Is TDS deducted on crypto transactions? What is Section 194S?",
    answer:
      "Yes. From 1 July 2022, TDS at 1% is deducted on transfer of virtual digital assets under Section 194S. The TDS is deducted by: (1) Crypto exchanges (specified persons) if your aggregate transaction value exceeds ₹10,000 in a financial year, (2) Individual buyers (in P2P transactions) if aggregate value exceeds ₹50,000 in a financial year. The TDS is on gross transaction value (sale proceeds), not on profit. For example, if you sell Bitcoin worth ₹5 lakh on WazirX, 1% TDS = ₹5,000 is deducted before crediting INR to you. This TDS can be claimed as credit while filing ITR and will be adjusted against your total tax liability. TDS is in addition to the 30% tax on gains — they are separate provisions.",
  },
  {
    question: "How is crypto-to-crypto trade taxed? Do I pay tax only when I convert to INR?",
    answer:
      "No. Any transfer of cryptocurrency is a taxable event, including crypto-to-crypto trades. For example, if you trade 1 Bitcoin for 20 Ethereum, it is treated as: (1) You sold Bitcoin at its fair market value at the time of trade, (2) You purchased Ethereum at the same fair market value. You must compute capital gain on the Bitcoin sale as: FMV of Ethereum received - Cost of Bitcoin given up. This gain is taxed at 30% under Section 115BBH. You do NOT have to wait till you convert to INR. Every swap, trade, or transfer is a separate taxable event. This makes record-keeping critical — you need to track FMV (in INR) at the time of every trade.",
  },
  {
    question: "Are gifts of cryptocurrency taxable in India?",
    answer:
      "Yes, but the tax treatment differs based on who is giving/receiving: **Receiving crypto gift from relative (as defined in Income Tax Act):** No tax at the time of receipt. When you sell the crypto later, you pay 30% tax on gain calculated as Sale Price - Original Cost to Donor. **Receiving crypto gift from non-relative:** If the fair market value of crypto gift exceeds ₹50,000 in a financial year (clubbed with all other gifts), it is taxable as 'Income from Other Sources' at your slab rate under Section 56(2)(x). When you sell it later, you pay 30% tax on full sale proceeds (cost basis = Nil). **Giving crypto as gift:** Treated as transfer/disposal. You must pay 30% tax on capital gain (FMV at time of gift - Your purchase price), even though you received no money.",
  },
  {
    question: "How is crypto mining, staking rewards, and airdrop income taxed?",
    answer:
      "These are taxed as follows: **Mining rewards:** The fair market value of mined crypto at the time you receive it is taxable income. There is debate whether it should be taxed as business income (at slab rates with expense deductions) or under Section 115BBH (30%). Conservative approach: report as business income if mining is your business activity; otherwise 30% under Section 115BBH. When you later sell the mined crypto, you pay 30% tax on (Sale Price - FMV at time of mining). **Staking rewards / Lending interest:** Fair market value at receipt is taxable at 30% under Section 115BBH (or as 'Other Sources' — there is ambiguity). **Airdrops / Hard forks:** No tax at receipt (cost basis = Nil). When you sell, entire sale proceeds are taxed at 30%. Given the complexity, consult a crypto tax specialist for mining and staking income.",
  },
  {
    question: "Do I need to file ITR if I only bought crypto but didn't sell?",
    answer:
      "If you only purchased and held cryptocurrency (HODL) without selling, swapping, or transferring, you have not realized any income from VDA, so technically you are not required to report it in ITR solely due to crypto. However, you must still file ITR if your total income from all sources (salary, interest, etc.) exceeds the basic exemption limit (₹2.5 lakh for individuals below 60 under old regime, ₹3 lakh under new regime). Note that simply holding crypto does not create taxable income — tax applies only on transfer/disposal. But if you received crypto as gift from a non-relative worth more than ₹50,000, or earned staking rewards, airdrops, or mining income, you must report and pay tax even if you haven't sold the crypto yet.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITR Filing for Crypto Income: Complete Tax Guide for Cryptocurrency in India",
  description:
    "Comprehensive guide to filing Income Tax Return for cryptocurrency income in India — covering 30% tax under Section 115BBH, VDA tax rules, no set-off of losses, TDS under Section 194S, gifting taxation, mining, staking, airdrops, and ITR-2 filing process for AY 2025-26.",
  url: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-crypto-income",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-crypto-income",
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
  datePublished: "2025-05-28",
  dateModified: "2025-05-28",
  wordCount: 4500,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "crypto tax India",
    "Section 115BBH",
    "VDA tax",
    "cryptocurrency ITR",
    "Section 194S TDS",
    "ITR-2",
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
      name: "ITR Filing for Crypto Income",
      item: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-crypto-income",
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

export default function CryptoITRFilingPage() {
  return (
    <>
      <Script
        id="crypto-itr-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="crypto-itr-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="crypto-itr-faq-schema"
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
                "radial-gradient(circle,rgba(251,191,36,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(59,130,246,0.09) 0%,transparent 65%)",
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
                  ITR Filing for Crypto Income
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(251,191,36,0.15)",
                    border: "1px solid rgba(251,191,36,0.25)",
                  }}
                >
                  <Coins size={13} className="text-amber-300" />
                  For Crypto Traders & Investors — AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  ITR Filing for
                  <span className="block mt-2 bg-gradient-to-r from-amber-300 to-blue-300 bg-clip-text text-transparent">
                    Cryptocurrency Income
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  If you trade or invest in <strong className="text-white">cryptocurrency</strong>,
                  Bitcoin, Ethereum, NFTs or any virtual digital assets (VDA), your income is
                  taxed at a <strong className="text-white">flat 30%</strong> under Section
                  115BBH. This guide covers ITR-2 filing, TDS under Section 194S, no loss
                  set-off rules, gifting taxation, and complete compliance for AY 2025-26.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Crypto Tax Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/serviceslist/income-tax/itr-capital-gains"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    File ITR-2 Now <FileText size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick facts card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Crypto Tax Essentials
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Percent,
                      title: "30% Flat Tax",
                      text: "Section 115BBH — 30% + surcharge + 4% cess on all VDA gains",
                    },
                    {
                      icon: Ban,
                      title: "No Loss Set-Off",
                      text: "Losses cannot be set off against any income or carried forward",
                    },
                    {
                      icon: Wallet,
                      title: "1% TDS",
                      text: "Section 194S — exchanges deduct 1% TDS on transactions > ₹10,000",
                    },
                    {
                      icon: FileText,
                      title: "ITR Form",
                      text: "Must file ITR-2 with Schedule VDA for all crypto transactions",
                    },
                    {
                      icon: Calendar,
                      title: "Due Date",
                      text: "31 August 2026 for AY 2025-26 (non-audit cases)",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-amber-300" />
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
                { icon: BadgeCheck, text: "CA-Verified Crypto Tax Guide" },
                { icon: Shield, text: "Section 115BBH Compliant" },
                { icon: Clock, text: "Updated for AY 2025-26" },
                { icon: Star, text: "5,000+ Crypto ITRs Filed" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-amber-400" /> {text}
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
                  Income Tax Guide for Crypto
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Understanding Cryptocurrency Taxation in India
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  The taxation of <strong>cryptocurrency</strong> and other virtual digital
                  assets (VDA) in India underwent a major overhaul in <strong>Budget 2022</strong>.
                  The government introduced a new Section 115BBH in the Income Tax Act, which
                  imposes a <strong>flat 30% tax</strong> on income from transfer of any VDA —
                  including Bitcoin, Ethereum, altcoins, NFTs, and other digital tokens.
                  Additionally, Section 194S was introduced mandating <strong>1% TDS</strong> on
                  VDA transactions.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  These provisions have made crypto taxation one of the most stringent in the
                  world. Unlike other capital gains which allow indexation, set-off of losses,
                  and lower tax rates for long-term holdings, crypto gains are taxed uniformly
                  at 30% regardless of holding period, and losses cannot be set off against
                  any income or carried forward.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This comprehensive guide is designed for crypto traders, investors, and HODLers
                  to understand their tax obligations and file ITR correctly for Assessment Year
                  2025-26 (Financial Year 2024-25). We cover Section 115BBH provisions, ITR-2
                  filing process, TDS compliance, gifting rules, staking/mining income, and
                  common mistakes to avoid.
                </p>

                <InfoBox title="30% tax applies to ALL crypto gains — no exemptions" color="rose">
                  <p>
                    The 30% tax rate under Section 115BBH applies to <strong>every profitable
                    crypto transaction</strong> — whether you held for 1 day or 10 years, whether
                    you are a casual investor or active trader. There are no exemptions, no lower
                    rates, and no deductions allowed. This is in addition to applicable surcharge
                    (up to 37% on income above ₹5 crore) and 4% cess.
                  </p>
                </InfoBox>
              </div>

              {/* Crypto Tax Basics */}
              <section id="basics" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Tax fundamentals"
                  heading="Virtual Digital Assets (VDA) — Tax Treatment Basics"
                  icon={Coins}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Before diving into ITR filing, let's understand the fundamental tax concepts
                  introduced for cryptocurrency:
                </p>

                <div className="grid gap-4">
                  {CRYPTO_TAX_BASICS.map(({ term, definition, icon, color }) => (
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

              {/* VDA Transactions */}
              <section id="transactions" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Taxable events"
                  heading="Which Crypto Transactions Are Taxable?"
                  icon={Activity}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Almost every crypto activity that involves transfer or disposal is a taxable
                  event. Here's a comprehensive breakdown:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded-xl">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="p-3 text-left font-bold">Transaction Type</th>
                        <th className="p-3 text-left font-bold">Taxable?</th>
                        <th className="p-3 text-left font-bold">Tax Rate</th>
                        <th className="p-3 text-left font-bold">Gain Calculation</th>
                        <th className="p-3 text-left font-bold">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {VDA_TRANSACTIONS.map(({ transaction, taxable, taxRate, calculation, example }, idx) => (
                        <tr
                          key={transaction}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="p-3 font-semibold text-gray-800">{transaction}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                              <CheckCircle size={11} />
                              {taxable}
                            </span>
                          </td>
                          <td className="p-3 text-rose-700 font-semibold">{taxRate}</td>
                          <td className="p-3 text-gray-600 leading-relaxed">{calculation}</td>
                          <td className="p-3 text-gray-500 text-[11px] leading-relaxed">{example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="Crypto-to-crypto trades are taxable events" color="amber">
                  <p className="mb-2">
                    Many crypto investors mistakenly believe tax applies only when converting
                    crypto to INR (fiat). This is incorrect.
                  </p>
                  <p>
                    <strong>Every swap, trade, or exchange</strong> of one crypto for another is
                    a taxable event. For example, trading Bitcoin for Ethereum triggers capital
                    gains tax on the Bitcoin at the time of trade, computed using the INR fair
                    market value of Ethereum received.
                  </p>
                </InfoBox>
              </section>

              {/* Section 194S TDS */}
              <section id="tds" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="TDS compliance"
                  heading="1% TDS on Crypto Transactions — Section 194S Explained"
                  icon={Wallet}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  From 1 July 2022, TDS at 1% is deducted on payments for transfer of virtual
                  digital assets under Section 194S. Here's how it works:
                </p>

                <div className="space-y-4">
                  {SECTION_194S_TDS.map(({ scenario, tdsRate, threshold, deductedBy, details }) => (
                    <div
                      key={scenario}
                      className="rounded-2xl border border-violet-100 bg-violet-50 p-5"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-sm font-extrabold text-gray-800">
                          {scenario}
                        </h3>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-600 text-white whitespace-nowrap">
                          TDS: {tdsRate}
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <p className="text-violet-700 font-semibold">
                          Threshold: {threshold}
                        </p>
                        <p className="text-violet-700 font-semibold">
                          Deducted by: {deductedBy}
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-2">
                          {details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Eye size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-blue-900 mb-2">
                        Important: TDS is on Gross Value, Not Profit
                      </h4>
                      <p className="text-xs leading-relaxed text-blue-800 mb-3">
                        Section 194S TDS is deducted on the <strong>total transaction value</strong>
                        (sale proceeds), not on your profit. For example, if you sell Bitcoin worth
                        ₹10 lakh, 1% TDS = ₹10,000 is deducted, even if your actual profit was only
                        ₹2 lakh or even if you made a loss.
                      </p>
                      <p className="text-xs leading-relaxed text-blue-800">
                        This TDS can be claimed as credit while filing ITR and will be adjusted
                        against your total tax liability. Download Form 26AS to verify TDS deducted
                        by exchanges.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ITR Form */}
              <section id="itr-form" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Correct form selection"
                  heading="ITR-2 for Crypto Income — Cannot Use ITR-1"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The correct ITR form for reporting cryptocurrency income is determined by the
                  nature of your income and crypto activity:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {ITR_FORM_CRYPTO.map(({ form, title, when, features, color, recommended }) => (
                    <div
                      key={form}
                      className={`rounded-2xl border-2 p-5 ${color} ${
                        recommended ? "ring-2 ring-blue-500 ring-offset-2" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span
                            className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                              recommended
                                ? "bg-blue-600 text-white"
                                : "bg-amber-600 text-white"
                            }`}
                          >
                            {form}
                          </span>
                        </div>
                        {recommended && (
                          <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                            <CheckCircle size={13} />
                            Recommended
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
                            <CheckCircle
                              size={13}
                              className={`${
                                recommended ? "text-blue-500" : "text-amber-500"
                              } shrink-0 mt-0.5`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="ITR-1 (Sahaj) cannot be used if you have crypto income" color="rose">
                  <p>
                    Even if you are a salaried individual with income below ₹50 lakh and only
                    bought/sold small amounts of crypto, you <strong>cannot file ITR-1</strong>.
                    ITR-1 specifically excludes individuals having income from capital gains.
                    Since crypto is taxed as capital gains under Section 115BBH, you must file
                    ITR-2. Filing ITR-1 with crypto income will result in a defective return.
                  </p>
                </InfoBox>
              </section>

              {/* Gifting Rules */}
              <section id="gifting" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Gift taxation"
                  heading="Cryptocurrency Gifts — Tax Implications"
                  icon={DollarSign}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Gifting cryptocurrency has unique tax implications for both the giver and
                  receiver:
                </p>

                <div className="space-y-4">
                  {GIFTING_RULES.map(({ scenario, taxAtReceipt, taxOnSale, definition, example }) => (
                    <div
                      key={scenario}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <h3 className="text-sm font-extrabold text-gray-800 mb-3">
                        {scenario}
                      </h3>
                      <div className="space-y-3 text-xs">
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-white rounded-xl p-3 border border-emerald-100">
                            <p className="font-bold text-emerald-700 mb-1">
                              Tax at receipt:
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              {taxAtReceipt}
                            </p>
                          </div>
                          <div className="bg-white rounded-xl p-3 border border-rose-100">
                            <p className="font-bold text-rose-700 mb-1">
                              Tax on sale:
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              {taxOnSale}
                            </p>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 border border-blue-100">
                          <p className="font-bold text-blue-700 mb-1">
                            Definition:
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {definition}
                          </p>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                          <p className="font-bold text-amber-800 mb-1">
                            Example:
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {example}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* No Deductions */}
              <section id="deductions" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Important limitation"
                  heading="Deductions NOT Allowed Against Crypto Income"
                  icon={XCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Section 115BBH(2) explicitly prohibits claiming any deduction or allowance
                  (except cost of acquisition) against VDA income:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded-xl">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="p-3 text-left font-bold">Deduction</th>
                        <th className="p-3 text-center font-bold">Allowed?</th>
                        <th className="p-3 text-left font-bold">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMMON_DEDUCTIONS_NOT_ALLOWED.map(({ deduction, allowed, reason }, idx) => (
                        <tr
                          key={deduction}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="p-3 font-semibold text-gray-800">{deduction}</td>
                          <td className="p-3 text-center">
                            {allowed === "YES" ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle size={12} />
                                {allowed}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-rose-700 font-bold">
                                <XCircle size={12} />
                                {allowed}
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-gray-600 leading-relaxed">{reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="Only purchase price and direct transaction fees deductible" color="amber">
                  <p className="mb-2">
                    You can deduct from sale proceeds: (1) Original purchase price of the crypto,
                    (2) Gas fees paid at the time of purchase/transfer, (3) Exchange platform
                    charges directly related to the transaction.
                  </p>
                  <p>
                    You <strong>cannot</strong> deduct: Internet bills, electricity costs
                    (for mining), hardware costs, research expenses, advisory fees, or any other
                    indirect expenses.
                  </p>
                </InfoBox>
              </section>

              {/* Filing Steps */}
              <section id="filing-steps" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step process"
                  heading="How to File ITR-2 for Cryptocurrency Income"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Follow these steps to file ITR-2 and report your crypto income correctly:
                </p>

                <div className="space-y-4">
                  {FILING_STEPS.map(({ step, title, desc, icon: Icon }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-blue-50 border border-blue-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-blue-600 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <Icon
                            size={14}
                            className="text-blue-600 shrink-0"
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

                <InfoBox title="Schedule VDA is mandatory for all crypto transactions" color="blue">
                  <p>
                    ITR-2 has a dedicated <strong>Schedule VDA (Virtual Digital Assets)</strong> where
                    you must report each crypto transaction separately — date of purchase, date of
                    sale, purchase price, sale price, and gain. The portal auto-computes 30% tax on
                    each gain. You cannot report just net profit/loss — each profitable transaction
                    must be reported individually.
                  </p>
                </InfoBox>
              </section>

              {/* Penalties */}
              <section id="penalties" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Consequences of non-compliance"
                  heading="Penalties and Interest for Crypto Tax Non-Compliance"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Non-compliance with crypto tax provisions can result in heavy penalties:
                </p>

                <div className="space-y-4">
                  {PENALTIES_INTEREST.map(({ section, penalty, detail, avoidance }) => (
                    <div
                      key={section}
                      className="rounded-2xl border border-rose-100 bg-rose-50 p-5"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-sm font-extrabold text-gray-800">
                          {penalty}
                        </h3>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-600 text-white whitespace-nowrap">
                          {section}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-gray-600 mb-3">
                        {detail}
                      </p>
                      <div className="bg-white rounded-xl p-3 border border-emerald-100">
                        <p className="text-xs font-semibold text-emerald-700 mb-1">
                          How to avoid:
                        </p>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {avoidance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Avoid these errors"
                  heading="Common Mistakes in Crypto ITR Filing"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  These are the most frequent errors that lead to penalties, scrutiny or
                  incorrect tax computation:
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
                      Crypto tax made simple
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your crypto ITR filing
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team specializes in cryptocurrency taxation — we help you calculate
                      gain/loss on every transaction, claim TDS credits, handle gifting scenarios,
                      and file accurate ITR-2 with complete Schedule VDA compliance.
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
                  heading="Cryptocurrency Tax Filing FAQs"
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
                  <strong className="text-gray-700">Disclaimer:</strong> This article is for
                  general educational and informational purposes only. Cryptocurrency tax laws,
                  Section 115BBH provisions, TDS rules and ITR forms are subject to change through
                  Finance Acts, CBDT notifications and judicial interpretations. The information
                  provided is based on the Income Tax Act, 1961 as applicable for Assessment Year
                  2025-26. Crypto taxation involves complex scenarios (mining, staking, DeFi, NFTs,
                  airdrops) — consult a qualified Chartered Accountant or crypto tax specialist
                  for personalized advice. Taxvio does not assume legal liability for actions
                  taken based solely on this content.
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
                      ["#basics", "VDA tax basics"],
                      ["#transactions", "Taxable transactions"],
                      ["#tds", "Section 194S TDS"],
                      ["#itr-form", "ITR-2 form"],
                      ["#gifting", "Crypto gifting rules"],
                      ["#deductions", "No deductions allowed"],
                      ["#filing-steps", "ITR-2 filing steps"],
                      ["#penalties", "Penalties & interest"],
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
                    <Coins size={18} className="text-amber-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    Expert crypto tax filing
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    CA-assisted ITR-2 filing for crypto traders — includes transaction-level
                    gain calculation, TDS credit claiming, Schedule VDA and complete compliance.
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
                    href: "/serviceslist/income-tax/itr-capital-gains",
                    label: "ITR-2 Filing",
                    sub: "Capital gains from ₹1,299",
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
                  href: "/guide/itr-blogs/itr-filing-for-fno-income",
                  title: "ITR Filing for F&O Income",
                  text: "Complete guide to filing ITR for futures and options trading income — ITR-3, turnover, tax audit.",
                },
                {
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS — Tax Credit Statement",
                  text: "Understand TDS credits, how to download and reconcile before filing your ITR.",
                },
                {
                  href: "/contact",
                  title: "Get Expert Crypto Tax Help",
                  text: "CA-assisted crypto ITR filing with transaction analysis and complete Schedule VDA compliance.",
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