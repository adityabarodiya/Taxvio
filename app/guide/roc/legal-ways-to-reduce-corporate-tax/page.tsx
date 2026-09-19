// app/guide/itr-blogs/legal-ways-to-reduce-corporate-tax/page.tsx

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
  Search,
  Upload,
  Calendar,
  UserCheck,
  Building2,
  Timer,
  Award,
  TrendingUp,
  RefreshCw,
  FileCheck,
  Scale,
  Users,
  Briefcase,
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Legal Ways to Reduce Corporate Tax in FY 2025-26: Rates, 115BAA & Deductions | Taxvio",
  description:
    "Top legal ways to reduce corporate tax in FY 2025-26 (AY 2026-27) — 115BAA vs old regime, 15% manufacturing rate, 80M, 80JJAA, depreciation, 35AD, startup 80-IAC, IFSC, MSME 43B(h) rule, MAT credit & Budget 2025 updates.",
  keywords: [
    "reduce corporate tax legally",
    "corporate tax rate FY 2025-26",
    "115BAA vs old regime",
    "115BAB 15% tax rate",
    "80M inter corporate dividend",
    "80JJAA new employees deduction",
    "corporate tax planning India",
    "MAT credit carry forward",
    "43B(h) MSME 45 days rule",
    "startup tax holiday 80-IAC",
    "IFSC tax benefit 80LA",
    "Budget 2025 corporate tax",
    "additional depreciation 20%",
    "corporate tax saving tips",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
  },
  openGraph: {
    title: "Legal Ways to Reduce Corporate Tax — FY 2025-26 Complete Guide | Taxvio",
    description:
      "Corporate tax rates, regime selection, deductions, MSME rules and Budget 2025 changes for FY 2025-26 — 8 proven legal strategies to pay less tax without risk.",
    url: "https://www.taxvio.in/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Ways to Reduce Corporate Tax — FY 2025-26",
    description:
      "115BAA, 80M, 80JJAA, depreciation, startup holiday, MSME 43B(h), MAT credit and more — legal corporate tax planning for FY 2025-26.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const TAX_RATES = [
  {
    regime: "Section 115BAA",
    title: "22% Concessional Rate — Most Popular",
    desc: "Flat 22% + 10% surcharge + 4% cess = 25.168% effective. No MAT, no additional depreciation, no 35AD/R&D weighted benefits. But 80JJAA and 80M still allowed. One-time option, irrevocable after exercise.",
    icon: "⭐",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    effective: "25.168% flat",
    bestFor: "Profitable companies with low exemptions",
  },
  {
    regime: "Section 115BAB",
    title: "15% New Manufacturing Rate",
    desc: "Flat 15% + 10% surcharge + 4% cess = 17.16% effective — lowest legal rate in India. Only for domestic manufacturing companies incorporated after 1 Oct 2019 that commenced manufacturing before 31 Mar 2024 and opted in time. No new entry in FY 2025-26, but existing opt-ins continue.",
    icon: "🏭",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    effective: "17.16% flat",
    bestFor: "Eligible new manufacturers who opted on time",
  },
  {
    regime: "Regular 25%",
    title: "Turnover up to ₹400 Crore",
    desc: "Base 25% if total turnover or gross receipts in FY 2023-24 did not exceed ₹400 crore. Plus surcharge Nil / 7% / 12% based on income slab plus 4% cess. All deductions, depreciation and MAT credit available.",
    icon: "🏢",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    effective: "26% / 27.82% / 29.12%",
    bestFor: "SMEs with high depreciation, 35AD, losses",
  },
  {
    regime: "Regular 30%",
    title: "Turnover above ₹400 Crore",
    desc: "Base 30% if turnover in FY 2023-24 exceeded ₹400 crore. Plus surcharge Nil / 7% / 12% plus 4% cess. Effective goes up to 34.944%. Usually benefits from switching to 115BAA unless very large tax incentives.",
    icon: "🏦",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    effective: "31.2% / 33.384% / 34.944%",
    bestFor: "Large companies before regime switch",
  },
  {
    regime: "MAT u/s 115JB",
    title: "Minimum Alternate Tax 15%",
    desc: "If you stay in old regime and pay very low tax due to deductions, MAT at 15% of book profit + surcharge + cess applies. Effective 15.6% / 16.692% / 17.472%. MAT credit can be carried forward for 15 years — but lapses if you shift to 115BAA.",
    icon: "⚖️",
    color: "bg-sky-50 border-sky-100 text-sky-700",
    effective: "15.6% to 17.472% on book profit",
    bestFor: "Zero-tax companies in old regime",
  },
  {
    regime: "Foreign Company",
    title: "35% Rate — Reduced from 40%",
    desc: "Base 35% from AY 2025-26 onwards vide Finance (No.2) Act 2024 — continues in FY 2025-26. Plus 2% / 5% surcharge plus 4% cess. Effective 36.4% / 37.128% / 38.22%. Major relief for foreign companies with India branch or project office.",
    icon: "🌐",
    color: "bg-rose-50 border-rose-100 text-rose-700",
    effective: "36.4% to 38.22%",
    bestFor: "Foreign companies operating in India",
  },
];

const REGIME_COMPARISON = [
  {
    particular: "Base rate",
    oldRegime: "25% (up to ₹400cr) / 30%",
    newRegime: "22% flat",
    verdict: "New lower",
  },
  {
    particular: "Effective rate (income up to ₹1cr)",
    oldRegime: "26% / 31.2%",
    newRegime: "25.168%",
    verdict: "New wins marginally",
  },
  {
    particular: "Effective rate (income above ₹10cr)",
    oldRegime: "29.12% / 34.944%",
    newRegime: "25.168%",
    verdict: "New wins big",
  },
  {
    particular: "MAT on book profit",
    oldRegime: "Yes — 15% + surcharge",
    newRegime: "No MAT",
    verdict: "New simpler",
  },
  {
    particular: "Additional depreciation 20% (Sec 32)",
    oldRegime: "Yes",
    newRegime: "No",
    verdict: "Old wins if heavy capex",
  },
  {
    particular: "35AD, R&D, SEZ,茶 10AA-type incentives",
    oldRegime: "Yes",
    newRegime: "No (must forgo)",
    verdict: "Old wins if large incentives",
  },
  {
    particular: "80JJAA (new jobs) + 80M (dividends)",
    oldRegime: "Yes",
    newRegime: "Yes — still allowed",
    verdict: "Both allowed",
  },
  {
    particular: "Brought forward losses linked to incentives",
    oldRegime: "Can carry and set off",
    newRegime: "Must forgo on switch",
    verdict: "Time your switch",
  },
  {
    particular: "MAT credit (115JAA) 15 years",
    oldRegime: "Can utilise",
    newRegime: "Lapses — cannot carry",
    verdict: "Use credit first",
  },
];

const STRATEGIES = [
  {
    strategy: "Pick the Cheapest Regime Every Year",
    desc: "Model 115BAA 25.168% vs old regime with all your deductions. As a thumb rule, if total incentives are below 35-40% of profit, 115BAA usually wins. If you have huge depreciation, 35AD or brought forward losses, old regime can drop below 20%. Re-run the maths every March — the answer changes with profit and capex.",
    icon: "📊",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    section: "Sec 115BAA",
  },
  {
    strategy: "Time Capex for Normal + Additional 20% Depreciation",
    desc: "In old regime, new plant and machinery for manufacturing or power gets normal depreciation plus additional 20% in first year (10% if used for under 180 days, balance next year). A ₹1 crore machine can give ₹35-40 lakh first-year deduction. Put assets to use before 31 March to claim in FY 2025-26.",
    icon: "🏭",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    section: "Sec 32",
  },
  {
    strategy: "Hire and Save 30% for 3 Years",
    desc: "80JJAA gives 30% of additional employee cost as extra deduction for 3 assessment years — allowed even under 115BAA. Conditions: salary up to ₹25,000 per month, 240 days employment (150 days for apparel, footwear, leather), PF-covered. 50 new staff at ₹20,000 can save about ₹36 lakh tax over 3 years.",
    icon: "👥",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    section: "Sec 80JJAA",
  },
  {
    strategy: "Kill Dividend Cascading Tax with 80M",
    desc: "If your holding company receives dividend from a subsidiary and further distributes it to its own shareholders before the ITR due date, 80M allows full deduction of dividends distributed (up to dividends received). No double tax in group. Allowed under both old regime and 115BAA. Critical for FY 2025-26 group structures.",
    icon: "🔗",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    section: "Sec 80M",
  },
  {
    strategy: "Fund Growth with Debt — Interest is Deductible",
    desc: "Interest on borrowings for business is fully deductible u/s 36(1)(iii), while dividend on equity is not. At 25.168% rate, ₹1 crore interest saves ₹25.17 lakh tax. Watch limits: pay bank/NBFC interest before ITR date (43B), and 94B thin-cap rule caps interest to foreign associated enterprises at 30% of EBITDA above ₹1 crore.",
    icon: "🏦",
    color: "bg-sky-50 border-sky-100 text-sky-700",
    section: "Sec 36(1)(iii)",
  },
  {
    strategy: "Pay MSMEs in 45 Days, Bonus Before ITR Date",
    desc: "43B(h): any amount payable to Micro or Small enterprise beyond 45 days (15 days if no written agreement) is disallowed in FY 2025-26 and allowed only on payment. Similarly, bonus, employer PF, gratuity, taxes and bank interest are allowed only on payment before ITR due date u/s 43B. March vendor clearing directly cuts tax.",
    icon: "⏰",
    color: "bg-rose-50 border-rose-100 text-rose-700",
    section: "Sec 43B / 43B(h)",
  },
  {
    strategy: "Use Startup and IFSC Holidays Before They Expire",
    desc: "DPIIT startups incorporated before 1 April 2030 can claim 100% deduction for any 3 consecutive years in first 10 years u/s 80-IAC. IFSC units commencing before 31 March 2030 get 100% for 10 years u/s 80LA. Plus angel tax is zero from AY 2025-26 and buyback is now taxed as dividend — fundraising is cheaper in FY 2025-26.",
    icon: "🚀",
    color: "bg-orange-50 border-orange-100 text-orange-700",
    section: "Sec 80-IAC / 80LA",
  },
  {
    strategy: "Harvest Losses, Set Off Smartly, Use MAT Credit",
    desc: "Business loss can be carried forward 8 years, unabsorbed depreciation forever. Set off short-term capital loss against both STCG and LTCG, long-term loss only against LTCG. If you have MAT credit, stay in old regime till credit is exhausted — switching to 115BAA makes entire MAT credit lapse permanently.",
    icon: "📉",
    color: "bg-cyan-50 border-cyan-100 text-cyan-700",
    section: "Sec 72 / 115JAA",
  },
];

const DEDUCTION_CATEGORIES = [
  {
    category: "Capex and R&D",
    items: [
      "Normal depreciation + 20% additional (Sec 32, old regime)",
      "100% for specified businesses — cold chain, warehousing (Sec 35AD)",
      "100% for scientific research spend (Sec 35)",
      "Preliminary expenses amortised over 5 years (Sec 35D)",
      "Lease vs buy modelling for cars, plant",
    ],
    icon: "🏭",
    color: "bg-blue-50 border-blue-100",
  },
  {
    category: "People and dividends",
    items: [
      "30% for 3 years on new low-salary jobs (80JJAA)",
      "Inter-corporate dividend deduction (80M)",
      "Employer NPS up to 14% of salary (Sec 36)",
      "ESOP cost on allotment, staff welfare, training",
      "Director remuneration if wholly for business (Sec 37)",
    ],
    icon: "👥",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    category: "Financing and structure",
    items: [
      "Interest on business borrowings (36(1)(iii))",
      "Amalgamation / demerger tax neutrality (Sec 47)",
      "Carry forward of losses on merger (Sec 72A)",
      "Group holding-subsidiary dividend flow via 80M",
      "Export benefits — RoDTEP, EPCG, drawback",
    ],
    icon: "🏦",
    color: "bg-violet-50 border-violet-100",
  },
  {
    category: "Timing and compliance",
    items: [
      "Pay MSME vendors within 45 days (43B(h))",
      "Pay bonus, PF employer share before ITR date (43B)",
      "Deduct and deposit TDS on time to avoid 30% disallowance",
      "Avoid cash payments above ₹10,000 per day (40A(3))",
      "Pay advance tax instalments to avoid 234B / 234C interest",
    ],
    icon: "⏱️",
    color: "bg-amber-50 border-amber-100",
  },
];

const BUDGET_UPDATES = [
  {
    update: "No Hike in Corporate Rates — Stability Continues",
    desc: "Budget 2025 kept all corporate rates unchanged for FY 2025-26. 115BAA stays at 25.168%, 115BAB at 17.16%, regular 26% to 34.944%, foreign company 35% base. No change in surcharge, cess, STT or capital gains rates. Planning can assume rate stability.",
    icon: CheckCircle,
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    tag: "FY 2025-26",
  },
  {
    update: "Startup 80-IAC and IFSC 80LA Extended to 2030",
    desc: "100% holiday for DPIIT startups (3 years in first 10) now available if incorporated before 1 April 2030 — extended from 2025. IFSC units, funds, ship and aircraft leasing benefits extended to commencement before 31 March 2030. Five extra years to plan new entities.",
    icon: Award,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    tag: "Till 31 Mar 2030",
  },
  {
    update: "Angel Tax Zero + Buyback as Dividend",
    desc: "Continuing from Finance (No.2) Act 2024: Section 56(2)(viib) angel tax abolished for all investors from AY 2025-26 — share premium above FMV is no longer taxed. Buyback proceeds from 1 Oct 2024 taxed as deemed dividend in shareholder hands with cost treated as capital loss — reprices promoter exits in FY 2025-26.",
    icon: TrendingUp,
    color: "bg-violet-50 border-violet-200 text-violet-800",
    tag: "Fundraising Win",
  },
  {
    update: "Updated Return Window Doubled to 4 Years",
    desc: "ITR-U can now be filed up to 48 months from end of assessment year (earlier 24 months). Additional tax: 60% in 3rd year, 70% in 4th year. Gives one more chance to disclose missed income, pay tax and avoid prosecution — but not a tool to claim refunds or extra losses.",
    icon: RefreshCw,
    color: "bg-amber-50 border-amber-200 text-amber-800",
    tag: "Extra Chance",
  },
  {
    update: "TDS / TCS Thresholds Raised, Cash Flow Freed",
    desc: "Budget 2025 raised TDS thresholds — bank interest 40k to 50k (1 lakh for senior citizens), rent 2.4 lakh yearly to 50k monthly, professional fees 30k to 50k, compensation on acquisition 2.5 lakh to 5 lakh. TCS on LRS raised 7 lakh to 10 lakh and 0.1% TCS on sale of goods removed. Less blocking of working capital.",
    icon: IndianRupee,
    color: "bg-sky-50 border-sky-200 text-sky-800",
    tag: "Cash Flow Boost",
  },
  {
    update: "3-Year Transfer Pricing Certainty + New Tax Bill Coming",
    desc: "New scheme to determine arm's length price for international transactions for a 3-year block — less yearly litigation for MNCs and exporters. New Income-tax Bill 2025 tabled to simplify language and halve sections, but FY 2025-26 is still governed by the 1961 Act. No action needed yet, but track drafts.",
    icon: Shield,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    tag: "Litigation Relief",
  },
];

const PLANNING_STEPS = [
  {
    step: "01",
    title: "Model 115BAA vs old regime with actual numbers",
    desc: "Build a two-column computation for FY 2025-26: gross profit less depreciation, 35AD, 80JJAA, 80M, brought forward losses and MAT credit. Compare tax at 25.168% flat vs slab rates plus MAT. Include surcharge and cess. The break-even shifts every year with profit and capex.",
    icon: Calculator,
  },
  {
    step: "02",
    title: "Plan capex and put assets to use before 31 March",
    desc: "If staying in old regime, advance plant, servers, vehicles and electricals to FY 2025-26 to claim normal plus 20% additional depreciation. Obtain installation certificates and put-to-use evidence. Assets used for under 180 days get half additional depreciation now, balance next year.",
    icon: Building2,
  },
  {
    step: "03",
    title: "Clean payroll, 80JJAA headcount and bonus payouts",
    desc: "Identify new employees below ₹25,000 monthly salary with 240 days service and PF coverage for 80JJAA. Accrue bonus and ex-gratia in March but ensure payment before ITR due date to claim u/s 43B. Deposit employer PF and ESI on time.",
    icon: Users,
  },
  {
    step: "04",
    title: "Clear MSME dues within 45 days and reconcile TDS",
    desc: "Download creditor ageing, flag Micro and Small suppliers (check Udyam status with new Budget 2025 limits) and pay all invoices older than 45 days before 31 March 2026. Deduct TDS on contractors, rent, professionals and deposit by 7th next month to avoid 30% disallowance u/s 40(a)(ia).",
    icon: Clock,
  },
  {
    step: "05",
    title: "Pay advance tax on time to avoid 234B and 234C interest",
    desc: "Companies must pay 15% by 15 June, 45% by 15 Sept, 75% by 15 Dec and 100% by 15 March. Shortfall attracts 1% per month interest u/s 234B and 234C — non-deductible. Revise estimates in December and March after regime modelling. Consider 44AD? Not available to companies — estimate actual income.",
    icon: IndianRupee,
  },
  {
    step: "06",
    title: "Document every claim — invoices, resolutions, valuations",
    desc: "For each deduction keep: purchase invoices with GST, bank payment proof, board resolutions for remuneration and bonuses, valuation reports for share issues, 80JJAA employee register with PF UAN, 80M dividend trail, R&D project files and loan sanction letters showing business purpose. No document means no deduction in scrutiny.",
    icon: FileCheck,
  },
  {
    step: "07",
    title: "Do March review and post-March audit plus ITR closure",
    desc: "In last week of March, freeze regime choice, capex, provisions and dividend distribution for 80M. After year-end, complete statutory audit before AGM, tax audit by 30 Sept 2026, transfer pricing report if applicable, and file ITR by 31 Oct 2026 for audit cases. Carry forward losses only if ITR filed on time.",
    icon: Eye,
  },
];

const DISALLOWANCES = [
  {
    rule: "Section 43B(h)",
    title: "MSME Payment Beyond 45 Days — Fully Disallowed",
    detail: "Any sum payable to Micro or Small enterprise (Udyam-registered) beyond 15 days (no agreement) or 45 days (written agreement) is disallowed on accrual basis in FY 2025-26. Allowed only on actual payment. Medium enterprises are not covered. Biggest reason for sudden tax spikes since AY 2024-25.",
    icon: "⏰",
    color: "bg-rose-50 border-rose-100 text-rose-800",
  },
  {
    rule: "Section 43B",
    title: "Bonus, PF, Gratuity, Taxes, Bank Interest — Pay Before ITR Date",
    detail: "Bonus, employer PF/ESI, gratuity, leave encashment, royalty, taxes and interest to banks, NBFCs and financial institutions are deductible only on payment before ITR due date u/s 139(1). Mere provision on 31 March is not enough. Unpaid amounts are added back to income.",
    icon: "💸",
    color: "bg-amber-50 border-amber-100 text-amber-800",
  },
  {
    rule: "Section 40(a)(ia)",
    title: "TDS Default — 30% of Expense Disallowed",
    detail: "If you fail to deduct TDS on contractor payments, rent, professional fees, commission, interest or fail to deposit it, 30% of that expense is disallowed in FY 2025-26. Disallowance is reversed in year of TDS payment, but you lose time value and face interest u/s 201(1A) plus late fees.",
    icon: "📑",
    color: "bg-orange-50 border-orange-100 text-orange-800",
  },
  {
    rule: "Section 40A(3)",
    title: "Cash Payments Above ₹10,000 — 100% Disallowed",
    detail: "Any business payment above ₹10,000 per person per day in cash (₹35,000 for transporters) is fully disallowed, except to banks, government or in prescribed exceptional cases. Even genuine cash purchases lose deduction. Use banking channels, UPI or cards for all vendor payments.",
    icon: "💵",
    color: "bg-red-50 border-red-100 text-red-800",
    // @ts-ignore tailwind safelist
  },
  {
    rule: "Section 37(1)",
    title: "CSR, Penalties, Personal Expenses — Never Deductible",
    detail: "Mandatory CSR spend is not business expenditure and cannot be claimed u/s 37. Penalties for law violations, GST late fees attributable to breach, personal car or home expenses and political donations in cash are also disallowed. Structure community spend outside CSR via eligible 80G projects only after professional advice.",
    icon: "🚫",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    rule: "Section 36(1)(va)",
    title: "Employees PF/ESI Paid Late — Never Allowed",
    detail: "As confirmed in Checkmate Services ruling, employees share of PF/ESI deducted from salary must be deposited before statutory due date under PF/ESI Act. Even one day delay means permanent disallowance — unlike employer share which gets time till ITR date u/s 43B. Automate payroll compliance.",
    icon: "👷",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    rule: "Section 94B",
    title: "Thin Capitalisation — Excess Foreign Interest Capped",
    detail: "Interest paid to non-resident associated enterprises above ₹1 crore is restricted to 30% of EBITDA. Excess is disallowed and can be carried forward 8 years. Back-to-back loans via banks to circumvent this are also covered. Model debt-equity ratio before taking ECBs or foreign shareholder loans.",
    icon: "🏦",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
];

const CHECKLIST_ITEMS = [
  "115BAA vs old regime modelled with surcharge, cess and MAT",
  "MAT credit ledger reviewed — switch only after full utilisation",
  "Capex put-to-use certificates dated before 31 March 2026",
  "80JJAA employee list with UAN, salary slips and days worked",
  "80M dividend received and distributed trail with board minutes",
  "All Micro/Small vendor dues within 45 days — ageing cleared",
  "Bonus and employer PF/ESI scheduled for payment before ITR date",
  "TDS deducted, deposited and reconciled with 26AS and AIS",
  "No cash payments above ₹10,000 — all via bank",
  "Advance tax 15/45/75/100% paid by due dates",
  "Loan files show business purpose for interest deduction",
  "ITR, tax audit and transfer pricing calendar blocked for Sep-Oct 2026",
];

const FAQS = [
  {
    question: "What is the lowest legal corporate tax rate in India for FY 2025-26?",
    answer:
      "The lowest headline rate is 17.16% effective (15% + 10% surcharge + 4% cess) under Section 115BAB for eligible new domestic manufacturing companies that were incorporated after 1 October 2019, commenced manufacturing before 31 March 2024 and exercised the option on time. No fresh entry is possible in FY 2025-26. The next lowest is 25.168% effective (22% + 10% surcharge + 4% cess) under Section 115BAA, open to all domestic companies. Regular rates are 26% to 29.12% for companies with turnover up to ₹400 crore in FY 2023-24 and 31.2% to 34.944% above that, plus MAT at 15.6% to 17.472% on book profit.",
  },
  {
    question: "Should my company opt for the 22% regime under Section 115BAA?",
    answer:
      "Opt for 115BAA if your total incentives — additional depreciation, 35AD, R&D, exemptions, brought forward incentive-linked losses and MAT credit — are relatively small compared to profit. Typically, if deductions are below 35-40% of profit, 25.168% flat beats the old regime, especially for companies above ₹10 crore income where old rates touch 29.12% or 34.944%. Stay in old regime if you have heavy capex with 20% additional depreciation, large 35AD projects, unabsorbed losses or sizable MAT credit. Remember the option is largely irrevocable and MAT credit lapses on switch, so model 3-5 years, not just FY 2025-26.",
  },
  {
    question: "Can a new manufacturing company get 15% tax rate in FY 2025-26?",
    answer:
      "No, a newly incorporated company in FY 2025-26 cannot get the 15% rate under Section 115BAB because the law requires incorporation after 1 October 2019 and commencement of manufacturing on or before 31 March 2024. The deadline was not extended in Budget 2024 or Budget 2025. Such companies can still opt for 115BAA at 25.168% or stay in regular 26% to 34.944% slab with depreciation and other benefits. Companies that already qualified and opted for 115BAB continue to enjoy 17.16% in FY 2025-26 provided they satisfy all conditions like no specified incentives and separate accounts.",
  },
  {
    question: "Is CSR expenditure deductible? How to structure social spending tax-efficiently?",
    answer:
      "No. Explanation 2 to Section 37(1) specifically provides that mandatory CSR expenditure under Section 135 of Companies Act is not incurred wholly and exclusively for business and is not deductible. Penalties, fines for law violations and personal expenses are also disallowed. You also cannot claim the same CSR spend as 80G donation to get around this. Tax-efficient alternatives are: (1) spend on activities that are genuinely business-linked and allowable u/s 30-36 independent of CSR, with proper documentation, (2) for non-mandatory community work outside CSR obligation, route through eligible 80G institutions, 35AC or 35CCD projects after taking professional advice, and (3) focus on deductible staff welfare, training and R&D instead of re-labelling CSR.",
  },
  {
    question: "How does the MSME 45-day payment rule u/s 43B(h) affect my FY 2025-26 tax?",
    answer:
      "From AY 2024-25 onwards, Section 43B(h) provides that any amount payable to a Micro or Small enterprise (registered under Udyam, including new Budget 2025 limits — Micro up to ₹2.5 crore investment and ₹10 crore turnover, Small up to ₹25 crore and ₹100 crore) beyond the time limit in Section 15 of MSMED Act is allowed only on actual payment. That limit is 15 days if there is no written agreement and 45 days maximum even with agreement. Medium enterprises are excluded. So if you owe a small supplier ₹50 lakh for over 45 days on 31 March 2026, your FY 2025-26 profit goes up by ₹50 lakh and tax rises by about ₹12.5 lakh at 25.168%. Pay all MSME overdues before year-end and renegotiate credit terms to 45 days.",
  },
  {
    question: "Can startups pay zero corporate tax legally in FY 2025-26?",
    answer:
      "Yes, in three legal ways. First, DPIIT-recognised startups incorporated before 1 April 2030 can claim 100% deduction for any 3 consecutive years out of first 10 years u/s 80-IAC — taxable income becomes nil for those years, though MAT at 15.6% to 17.472% on book profit may still apply if in old regime and can be carried as MAT credit. Second, loss-making startups naturally pay no tax and can carry forward business losses 8 years and unabsorbed depreciation indefinitely if ITR is filed on time; Section 79 relaxations help retain losses despite shareholding changes. Third, from AY 2025-26 angel tax u/s 56(2)(viib) is abolished for all investors, so premium on share issues is no longer taxed. Combine 80-IAC with 80JJAA on new hiring and 80M on group dividends for maximum benefit.",
  },
  {
    question: "What is the difference between tax planning, tax avoidance and tax evasion?",
    answer:
      "Tax planning is using express provisions of law — choosing 115BAA, claiming depreciation, 80M, 80JJAA, paying MSMEs on time — to minimise tax. It is fully legal and encouraged. Tax avoidance uses loopholes or artificial structures without business substance to defeat legislative intent — for example, sham transactions or treaty shopping. India counters this with GAAR (General Anti-Avoidance Rules), transfer pricing rules and substance tests, and such arrangements can be disregarded with penalties. Tax evasion is illegal suppression — hiding sales, bogus purchases, cash outside books, fake invoices. It attracts 50% to 200% penalty u/s 270A, prosecution u/s 276C with imprisonment up to 7 years, and loss of carry forward. This guide covers only the first category: documented, disclosed, business-driven planning.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Ways to Reduce Corporate Tax in FY 2025-26: Complete Guide",
  description:
    "A comprehensive guide to legally reducing corporate tax in FY 2025-26 — covering tax rates, 115BAA vs old regime, 80M, 80JJAA, depreciation, 35AD, startup and IFSC holidays, MSME 43B(h), MAT credit and Budget 2025 updates.",
  url: "https://www.taxvio.in/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
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
  dateModified: "2026-02-01",
  wordCount: 3400,
  inLanguage: "en-IN",
  articleSection: "Corporate Tax",
  keywords: [
    "corporate tax FY 2025-26",
    "115BAA",
    "reduce company tax",
    "80M dividend",
    "80JJAA",
    "MSME 43B(h)",
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
      name: "Legal Ways to Reduce Corporate Tax",
      item: "https://www.taxvio.in/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
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

export default function LegalWaysToReduceCorporateTaxPage() {
  return (
    <>
      <Script
        id="corp-tax-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="corp-tax-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="corp-tax-faq-schema"
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
                "radial-gradient(circle,rgba(52,211,153,0.16) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(251,191,36,0.10) 0%,transparent 65%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-14 md:pt-28">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li>
                  <Link href="/guide/itr-blogs" className="hover:text-white transition">
                    ITR Guides
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li className="text-white/80 font-semibold">
                  Legal Ways to Reduce Corporate Tax
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  Updated for FY 2025-26 · AY 2026-27 · Budget 2025
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Legal Ways to Reduce
                  <span className="block mt-2 bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
                    Corporate Tax in FY 2025-26
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  No loopholes, no black money tricks — only{" "}
                  <strong className="text-white">100% legal, audit-proof strategies</strong>{" "}
                  using 115BAA, depreciation, 80M, 80JJAA, startup holidays and smart timing.
                  Learn which regime saves you lakhs, which deductions survive in FY 2025-26,
                  and which March mistakes silently inflate your tax.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Corporate Tax Plan <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#regime-choice"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    115BAA vs Old Regime <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  FY 2025-26 at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: IndianRupee,
                      title: "Effective rates FY 2025-26",
                      text: "25.168% (115BAA), 17.16% (115BAB), 26% to 34.944% (old), 35% base for foreign cos",
                    },
                    {
                      icon: Scale,
                      title: "Biggest lever: regime choice",
                      text: "115BAA wins unless incentives exceed 35-40% of profit — model before March",
                    },
                    {
                      icon: Award,
                      title: "Top legal savers that survive",
                      text: "80M dividends, 80JJAA jobs, depreciation, 35AD, MAT credit, startup holiday",
                    },
                    {
                      icon: Timer,
                      title: "Killer rule: MSME 45 days",
                      text: "Pay Micro/Small vendors within 45 days or lose deduction in FY 2025-26",
                    },
                    {
                      icon: TrendingUp,
                      title: "Startup boost extended",
                      text: "80-IAC and IFSC 80LA till 2030 + angel tax zero from AY 2025-26",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-white">{title}</p>
                        <p className="text-xs text-white/55 mt-0.5 leading-relaxed">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, text: "CA-Assisted Tax Planning" },
                { icon: Shield, text: "100% Legal & Audit-Proof" },
                { icon: Clock, text: "Advance Tax & ROC Aligned" },
                { icon: Star, text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-emerald-400" /> {text}
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
            <article className="min-w-0 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
              <div className="pb-10 border-b border-gray-100">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0077b6] mb-4">
                  Corporate Tax Guide — FY 2025-26
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  What Does Legal Corporate Tax Reduction Mean in FY 2025-26?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Corporate tax planning</strong> means arranging your business affairs —
                  regime selection, timing of capex, hiring, borrowings, vendor payments and
                  dividend flows — so you pay the minimum tax that the law itself permits for
                  FY 2025-26 (AY 2026-27). It uses express provisions like Section 115BAA,
                  Section 32 depreciation, Section 80M, Section 80JJAA and Section 35AD,
                  with full disclosure in books, audit reports and ITR.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  FY 2025-26 is special because <strong>rates are stable but rules are stricter</strong>.
                  Budget 2025 kept all corporate rates unchanged, extended startup and IFSC holidays
                  to 2030, raised TDS thresholds and doubled the updated-return window to 4 years.
                  At the same time, the MSME 45-day payment rule u/s 43B(h), Checkmate Services
                  PF rule, 30% TDS disallowance and GAAR mean undocumented or delayed
                  compliance directly increases taxable profit. Planning in March 2026 matters
                  more than planning in July 2026.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This guide shows only the first category — <strong>planning, not avoidance
                  or evasion</strong>. Avoidance uses artificial structures without substance
                  and can be disregarded under GAAR. Evasion — hiding sales, bogus purchases,
                  cash outside books — attracts 50% to 200% penalty u/s 270A and prosecution
                  up to 7 years u/s 276C. Every strategy below is disclose-and-claim, with
                  section numbers, conditions and documents you must keep for scrutiny.
                </p>

                <div className="mt-6">
                  <InfoBox title="Planning vs avoidance vs evasion — know the line" color="amber">
                    <p>
                      <strong>Planning</strong> = using 115BAA, depreciation, 80M, 80JJAA as
                      Parliament intended. <strong>Avoidance</strong> = paper structures with
                      no business purpose to exploit loopholes — hit by GAAR.{" "}
                      <strong>Evasion</strong> = concealment and fraud — punished with heavy
                      penalty and jail. Stay firmly in the first lane: real business purpose,
                      real documents, real bank trails.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* TAX RATES */}
              <section id="tax-rates" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Rates that apply from 1 Apr 2025 to 31 Mar 2026"
                  heading="Corporate Tax Rates for FY 2025-26"
                  icon={IndianRupee}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Your first saving comes from being in the right slab. For domestic companies,
                  the base rate depends on turnover in FY 2023-24 and whether you have opted
                  for 115BAA or 115BAB. Surcharge is Nil up to ₹1 crore income, 7% above ₹1
                  crore up to ₹10 crore, 12% above ₹10 crore — plus 4% health and education cess
                  in all cases:
                </p>

                <div className="grid gap-4">
                  {TAX_RATES.map(({ regime, title, desc, icon, color, effective, bestFor }) => (
                    <div
                      key={regime}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} flex items-center justify-center text-xl shrink-0`}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} ${color.split(" ")[2]}`}
                            >
                              {regime}
                            </span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-700">
                              Effective: {effective}
                            </span>
                          </div>
                          <h3 className="mt-2 text-sm font-extrabold text-gray-800">{title}</h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">{desc}</p>
                          <p className="mt-2 text-[11px] font-semibold text-gray-500">
                            Best for: {bestFor}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Turnover test uses FY 2023-24, not FY 2025-26" color="blue">
                    <p>
                      For AY 2026-27 (FY 2025-26), the ₹400 crore test looks at total turnover
                      or gross receipts in FY 2023-24. If you crossed ₹400 crore in FY 2023-24,
                      you are in the 30% base slab for FY 2025-26 even if current-year sales fall.
                      Check audited FY 2023-24 figures before estimating advance tax.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* REGIME CHOICE */}
              <section id="regime-choice" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="The ₹10 lakh decision"
                  heading="115BAA 22% vs Old Regime — Which Saves More?"
                  icon={Scale}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Most companies overpay by staying in the wrong regime. 115BAA gives a low
                  flat 25.168% but forces you to forgo additional depreciation, 35AD, R&D
                  incentives and brought-forward incentive losses — and your entire MAT credit
                  lapses. Old regime keeps all benefits but charges up to 34.944%:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Particular</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Old Regime</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">115BAA New</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Verdict</th>
                      </tr>
                    </thead>
                    <tbody>
                      {REGIME_COMPARISON.map(({ particular, oldRegime, newRegime, verdict }) => (
                        <tr key={particular} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">{particular}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{oldRegime}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{newRegime}</td>
                          <td className="border border-gray-200 px-3 py-2 text-emerald-700 font-bold">{verdict}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="80JJAA + 80M work in both regimes" color="green">
                    <p>
                      Good news for FY 2025-26: deduction for new employees (80JJAA) and
                      inter-corporate dividends (80M) is allowed even under 115BAA. You do
                      not lose these two when you switch. Prioritise hiring and group
                      dividend planning regardless of regime.
                    </p>
                  </InfoBox>
                  <InfoBox title="Never switch with unutilised MAT credit" color="rose">
                    <p>
                      MAT credit u/s 115JAA can be carried forward 15 years in old regime,
                      but the entire balance lapses the moment you opt for 115BAA. If you
                      have ₹50 lakh MAT credit, staying one more year in old regime can
                      be cheaper than switching early. Model 3 years, not 1 year.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* STRATEGIES */}
              <section id="strategies" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="8 proven levers"
                  heading="8 Legal Strategies to Cut Corporate Tax in FY 2025-26"
                  icon={TrendingUp}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  These are the highest-ROI moves for private limited companies, startups
                  and SMEs this year. Each cites the exact section, so your auditor can
                  verify it:
                </p>

                <div className="grid gap-4">
                  {STRATEGIES.map(({ strategy, desc, icon, color, section }) => (
                    <div
                      key={strategy}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} flex items-center justify-center text-xl shrink-0`}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-sm font-extrabold text-gray-800">{strategy}</h3>
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} ${color.split(" ")[2]}`}
                            >
                              {section}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 mb-4 text-sm font-extrabold text-[#00416a]">
                  High-impact deductions to prioritise in FY 2025-26
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {DEDUCTION_CATEGORIES.map(({ category, items, icon, color }) => (
                    <div key={category} className={`rounded-2xl border p-5 ${color}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{icon}</span>
                        <h4 className="text-sm font-bold text-gray-800">{category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Example: ₹2 crore profit, ₹60 lakh capex" color="blue">
                    <p>
                      Old regime: ₹2 crore less ₹24 lakh additional depreciation, ₹12 lakh
                      normal depreciation and ₹10 lakh 80JJAA = ₹1.54 crore taxable at about
                      27.82% = ₹42.8 lakh tax. 115BAA: ₹2 crore less ₹10 lakh 80JJAA = ₹1.90
                      crore at 25.168% = ₹47.8 lakh tax. Old regime saves ₹5 lakh here. Flip
                      the numbers with no capex and 115BAA wins. Always model, never guess.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* BUDGET 2025 */}
              <section id="budget-2025" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="What changed for companies"
                  heading="Budget 2025 + Finance Act Changes for FY 2025-26"
                  icon={Calendar}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Corporate rates did not change, but five adjacent changes directly affect
                  how much cash you keep, how you raise funds and how you handle disputes:
                </p>

                <div className="space-y-4">
                  {BUDGET_UPDATES.map(({ update, desc, icon: Icon, color, tag }) => (
                    <div key={update} className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}>
                      <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                        <Icon size={18} className={color.split(" ")[2]} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                          <h3 className="text-sm font-bold text-gray-800">{update}</h3>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/70 text-gray-700">
                            {tag}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="Capital gains rules from 23 July 2024 continue" color="amber">
                    <p>
                      For FY 2025-26 treasury planning: listed equity STCG 20%, LTCG 12.5%
                      above ₹1.25 lakh (12 months holding); other assets LTCG 12.5% without
                      indexation (24 months holding). Unlisted shares, bonds and property
                      follow the new 12.5% regime. Factor this into buyback vs dividend vs
                      bonus decisions.
                    </p>
                  </InfoBox>
                  <InfoBox title="MSME limits doubled — re-check 43B(h)" color="green">
                    <p>
                      Micro is now up to ₹2.5 crore investment and ₹10 crore turnover, Small
                      up to ₹25 crore and ₹100 crore, Medium up to ₹125 crore and ₹500 crore.
                      Vendors who were medium may now be small — and fall under the 45-day
                      43B(h) rule. Re-download Udyam statuses in March 2026.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* PLANNING STEPS */}
              <section id="planning-steps" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="March to October playbook"
                  heading="Year-End Corporate Tax Planning Process"
                  icon={Upload}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Do these seven steps in order. Steps 1 to 4 must finish before 31 March
                  2026 — after that you can only document, not create, deductions:
                </p>

                <div className="space-y-4">
                  {PLANNING_STEPS.map(({ step, title, desc, icon: Icon }) => (
                    <div key={step} className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5">
                      <div className="w-11 h-11 rounded-xl bg-[#00416a] text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Icon size={14} className="text-[#0077b6] shrink-0" />
                          <h3 className="text-sm font-bold text-gray-800">{title}</h3>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* DISALLOWANCES */}
              <section id="disallowances" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Silent tax increasers"
                  heading="7 Expenses That Quietly Increase Your Tax"
                  icon={AlertCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Most companies do not need new deductions — they need to stop losing
                  existing ones. Any amount below is added back to profit if you miss the
                  deadline or mode:
                </p>

                <div className="space-y-4">
                  {DISALLOWANCES.map(({ rule, title, detail, icon, color }) => (
                    <div
                      key={rule + title}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${color.split(" ")[1]} ${color.split(" ")[2]}`}
                            >
                              {rule}
                            </span>
                            <h3 className="text-sm font-extrabold text-gray-800">{title}</h3>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600">{detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="One March clean-up can save more than a new investment" color="rose">
                    <p>
                      Paying ₹40 lakh MSME overdues before 31 March 2026 saves about ₹10 lakh
                      tax at 25.168% immediately. An equivalent saving via new machinery needs
                      about ₹50 lakh capex. Clear creditors, TDS and advance tax first — then
                      think of fresh spending.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* CHECKLIST */}
              <section id="checklist" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Before 31 March 2026"
                  heading="FY 2025-26 Corporate Tax Checklist"
                  icon={CheckCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Use this with your CA in the last week of March. Tick all twelve before
                  you close the books:
                </p>

                <div className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {CHECKLIST_ITEMS.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Paying more than 25.168%?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio model your lowest legal tax
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team compares 115BAA vs old regime on your live FY 2025-26
                      numbers, fixes MSME, TDS and advance tax gaps, and builds an
                      audit-proof file with resolutions, registers and valuations.
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

              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="Corporate Tax Saving — FAQs for FY 2025-26"
                  icon={BookOpen}
                />
                <div className="space-y-3">
                  {FAQS.map(({ question, answer }) => (
                    <details key={question} className="group rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5">
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

              <div className="mt-12 pt-7 border-t border-gray-100">
                <p className="text-xs leading-6 text-gray-500">
                  <strong className="text-gray-700">Disclaimer:</strong> This article is for
                  general education on FY 2025-26 (AY 2026-27) based on the Income-tax Act,
                  1961 as amended by Finance (No.2) Act, 2024 and Finance Act, 2025, as
                  understood on 1 Feb 2026. Rates, thresholds and notifications can change via
                  CBDT circulars. Tax outcomes depend on turnover in FY 2023-24, regime option
                  exercised, residential status, industry and documentation. Always get a
                  computation signed by your statutory auditor or tax advisor before acting.
                </p>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl border border-[#dcebf3] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]">
                    On this page
                  </p>
                  <nav className="mt-4 space-y-1.5">
                    {[
                      ["#tax-rates", "Tax rates FY 2025-26"],
                      ["#regime-choice", "115BAA vs old regime"],
                      ["#strategies", "8 legal strategies"],
                      ["#budget-2025", "Budget 2025 updates"],
                      ["#planning-steps", "Year-end process"],
                      ["#disallowances", "Disallowances to avoid"],
                      ["#checklist", "March checklist"],
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

                <div className="rounded-2xl bg-[#00416a] p-5 text-white shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageCircle size={18} className="text-emerald-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">Corporate tax review?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get a 115BAA vs old regime model, MSME and TDS clean-up, and
                    advance-tax plan for FY 2025-26 from our CA team.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#00416a] transition hover:bg-gray-50"
                  >
                    Contact Taxvio <ArrowRight size={13} />
                  </Link>
                </div>

                {[
                  {
                    href: "/serviceslist/income-tax/itr-business",
                    label: "Business ITR",
                    sub: "Audit + ITR-6 filing",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/statutory-audit-deadline-penalty",
                    label: "Audit Deadline",
                    sub: "Avoid 271B penalty",
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
                      <p className={`text-xs font-bold uppercase tracking-wide ${text}`}>{label}</p>
                      <p className="mt-1 text-sm font-extrabold text-gray-800">{sub}</p>
                    </div>
                    <ArrowRight size={16} className={`${text} transition group-hover:translate-x-1`} />
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
              <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">Explore more</p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#00416a]">
                Related Corporate Tax Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/statutory-audit-deadline-penalty",
                  title: "Statutory Audit Deadline & Penalty",
                  text: "Audit, AGM and ITR dates for FY 2025-26 — avoid 271B, 234E and director disqualification.",
                },
                {
                  href: "/guide/itr-blogs/late-filing-fee-waiver-mca",
                  title: "MCA Late Filing Fee Waiver",
                  text: "Save up to ₹1 lakh per form on AOC-4, MGT-7 and LLP filings under MCA schemes.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Corporate Tax Expert",
                  text: "Get CA-assisted regime selection, advance tax, TDS and audit-proof documentation.",
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
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FIXED WHATSAPP BUTTON ════════ */}
        <a
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20to%20legally%20reduce%20corporate%20tax%20for%20FY%202025-26`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
            <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 group-hover:pr-5">
              <div className="w-14 h-14 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-xs group-hover:mr-1">
                Chat with us
              </span>
            </div>
          </div>
        </a>

        <Footar />
      </main>
    </>
  );
}