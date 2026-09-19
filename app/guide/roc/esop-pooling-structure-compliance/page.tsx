// app/guide/roc/esop-pooling-structure-compliance/page.tsx

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
  Building2,
  Timer,
  Award,
  TrendingUp,
  RefreshCw,
  FileCheck,
  Scale,
  Users,
  Briefcase,
  XCircle,
  Zap,
  Target,
  Gift,
  Rocket,
  Sparkles,
  Lock,
  PieChart,
  BarChart3,
  DollarSign,
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "ESOP Pooling Structure & Tax Compliance 2026: Section 43(5), Perquisite Tax & Vesting | Taxvio",
  description:
    "Complete guide to ESOP pooling structure and tax compliance in India 2026 — ESOP pool formation, employee trust (ESOT), Section 43(5) valuation, perquisite tax at grant/exercise/vesting, AMT, buyback taxation, disclosure requirements and common pitfalls.",
  keywords: [
    "ESOP pooling structure",
    "employee stock option plan India",
    "ESOP tax compliance",
    "section 43(5) valuation",
    "perquisite tax ESOP",
    "employee stock option trust",
    "ESOP buyback tax",
    "ESOP exercise taxation",
    "AMT on ESOP",
    "ESOP vesting schedule",
    "ESOP pool accounting",
    "startup ESOP",
    "ESOP grant taxation",
    "ESOP compliance checklist",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/roc/esop-pooling-structure-compliance",
  },
  openGraph: {
    title: "ESOP Pooling Structure & Tax Compliance 2026 — Complete Guide | Taxvio",
    description:
      "Section 43(5) valuation, perquisite tax, ESOT formation, vesting, buyback and compliance — everything startups and companies need to know about ESOP structure and tax planning.",
    url: "https://www.taxvio.in/guide/roc/esop-pooling-structure-compliance",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESOP Pooling Structure & Tax Compliance 2026",
    description:
      "Complete ESOP tax guide — Section 43(5), perquisite tax, AMT, ESOT formation, buyback and compliance framework for Indian startups and companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const ESOP_BASICS = [
  {
    concept: "Employee Stock Option (ESO)",
    definition:
      "Right to purchase a company's shares at a predetermined price (exercise price) on or after a specified date (vesting). Not actual ownership until exercised.",
    example: "Grant 1,000 options at ₹100 exercise price. Employee exercises after 1 year, pays ₹100K, gets 1,000 shares.",
    tax: "Tax triggered at exercise (when employee pays)",
    icon: "📈",
  },
  {
    concept: "ESOP Pool",
    definition:
      "Total number of shares reserved for issuance to employees under the company's ESOP scheme. Typically 10-15% of authorized capital for startups.",
    example: "Company with 1 million authorized shares reserves 100,000 shares (10%) for ESOP pool.",
    tax: "No immediate tax; tax arises only when options are granted or exercised",
    icon: "🏊",
  },
  {
    concept: "Vesting Schedule",
    definition:
      "Timeline over which options become exercisable. Typical schedule: 1-year cliff (no vesting for first year) + 3-year linear vesting (1/36th per month for next 3 years).",
    example: "Grant 1,200 options on Jan 1, 2026. Cliff: 0 vested till Dec 31, 2026. Then 100/month vest (33.33/quarter).",
    tax: "No tax during vesting. Tax triggered when employee exercises vested options.",
    icon: "📅",
  },
  {
    concept: "Exercise Price / Strike Price",
    definition:
      "Price at which employee can purchase shares. Usually set at Fair Market Value (FMV) of shares at grant date per Section 43(5) or SEBI SBEB Regulations.",
    example: "If company valuation is ₹100 Cr with 1M shares, FMV per share = ₹100. Exercise price = ₹100.",
    tax: "Lower exercise price = higher perquisite value = higher tax for employee. No tax benefit if FMV = exercise price.",
    icon: "💰",
  },
  {
    concept: "Perquisite Value",
    definition:
      "Taxable benefit when employee exercises options. Calculated as (FMV at exercise - Exercise price) × Number of shares exercised.",
    example: "Exercise 100 shares at ₹100 when FMV is ₹200. Perquisite = (₹200 - ₹100) × 100 = ₹10,000.",
    tax: "Taxed as perquisite in hands of employee under Section 17 at slab rate (up to 42.74% for high earners).",
    icon: "🎁",
  },
];

const POOLING_STRUCTURE = [
  {
    structure: "Direct Grant by Company",
    desc: "Company grants options directly to employees. Simplest structure. Company maintains ESOP register, issues share certificates after exercise.",
    pros: [
      "Simple to establish and manage",
      "No third-party involvement",
      "Lower costs (no trust fees)",
      "Direct employee ownership"
    ],
    cons: [
      "Company is trustee — potential conflicts",
      "Employees directly liable for tax",
      "Difficult to manage group options (vesting, buyback)",
      "Poor for employee liquidity/buyback"
    ],
    bestFor: "Small private companies with <50 employees, no near-term exit plans",
    icon: "🏢",
    taxTreatment: "Employee taxed at exercise on perquisite value; long-term capital gains on sale after 1 year hold",
  },
  {
    structure: "Employee Stock Option Trust (ESOT)",
    desc: "Independent trust entity holds ESOP shares. Company grants options to employees; trust holds and manages shares on their behalf until exercise/sale. Trust enters into employee agreements.",
    pros: [
      "Better tax efficiency if structured as grantor trust",
      "Neutral third-party manages ESOP",
      "Easier employee liquidity (secondary sales, buyback)",
      "Better protection in corporate transactions (M&A)"
    ],
    cons: [
      "Complex documentation and trust deed",
      "Annual trust compliance and audit",
      "Trust fees (₹50K-₹2L annually)",
      "Potential perquisite value taxation at grant itself under certain interpretations"
    ],
    bestFor: "Growth-stage startups (Series B+), companies planning M&A, 100+ employee base",
    icon: "🤝",
    taxTreatment: "Depends on trust classification — grantor trust (taxed at exercise), beneficiary trust (taxed at grant at FMV)",
  },
  {
    structure: "Employee Stock Ownership Plan (ESOP) Fund / SPV",
    desc: "Company incorporates special-purpose vehicle (SPV) or fund structure. SPV issues shares to employees or holds for them. Common in PE-backed companies and later-stage startups.",
    pros: [
      "Professional management",
      "Tax-efficient (SPV may be pass-through)",
      "Easier secondary market operations",
      "Clear separation from company"
    ],
    cons: [
      "Very complex structuring (multiple entities, LLCs, funds)",
      "High professional fees (CA, lawyer, fund manager)",
      "Regulatory compliance (if SPV is regulated entity)",
      "Potential transfer pricing scrutiny"
    ],
    bestFor: "Mature startups with multiple funding rounds, PE/VC-backed companies, ₹500Cr+ valuations",
    icon: "🏛️",
    taxTreatment: "SPV treated as pass-through; tax still at employee level on perquisite and capital gains",
  },
];

const VALUATION_METHODS = [
  {
    method: "Fair Market Value (FMV) per Section 43(5) SBEB",
    definition:
      "Determined by independent valuer using DCF, market multiples or comparable transactions. For startups, typically based on latest funding round valuation or third-party valuation report.",
    formula: "Per SEBI SBEB Regulations: Shares valued at amount agreed between company and investor in latest funding round, or independent valuation using certified valuer.",
    example: "Series A funding at ₹100 per share → FMV = ₹100 for ESOP grant issued within 3 months of Series A.",
    taxCompliance: "Must be certified by registered valuer under Companies Act. IT Department scrutiny common if exercise price < 80% of FMV.",
    icon: "📊",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    method: "Historical Cost Method",
    definition:
      "Uses Par Value or cost-plus approach. Exercise price set at company's initial share cost to investors. Outdated, rarely used now.",
    formula: "Exercise Price = Par Value (e.g., ₹1) or Cost per share to founders/early investors",
    example: "Founder's cost ₹0.50/share → Exercise price ₹0.50, but FMV ₹100 → Perquisite ₹99.50/share (high tax!)",
    taxCompliance: "If exercise price << FMV, IT Department challenges valuation. Can trigger perquisite on entire spread at exercise.",
    icon: "📉",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    method: "409A-Like Valuation (US GAAP, adapted for India)",
    definition:
      "Independent valuation following 409A valuation principles (US standard). Some Indian startups follow this for transparency and to justify FMV to IT Department.",
    formula: "Valuation using weighted-average method combining: VC funding rounds (recent), DCF analysis, market comparables, and minority discount",
    example: "Series A: ₹75/share (₹50Cr valuation). Post-money analysis → FMV for ESOP grant = ₹75/share (same as funding round)",
    taxCompliance: "Strengthens documentation if IT Department scrutinizes. Shows arm's length valuation principle.",
    icon: "🔍",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    method: "Weighted Average / Discounted Valuation",
    definition:
      "FMV discounted for non-liquidity, minority stake, and risk factors. Commonly used to set lower exercise prices while maintaining tax safety.",
    formula: "FMV = (Post-money Valuation × Discount Factor for Illiquidity + Size + Minority)",
    example: "Series A post-money ₹100Cr. FMV per share ₹100. Apply 30% illiquidity discount → Exercise price ₹70/share. Perquisite spread ₹30/share.",
    taxCompliance: "IT Department may challenge if discount is too aggressive (>50%). Must be backed by valuation report from registered valuer.",
    icon: "📉",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
];

const TAX_TRIGGER_POINTS = [
  {
    event: "At Grant of Options",
    when: "Date when options are granted to employee",
    tax: "No tax (options are contingent rights, not shares). Only if exercise price < FMV by 20%+ may IT Department question valuation.",
    documentation: "Grant agreement, board resolution, ESOP scheme copy, valuation report",
    ifMissed: "Not a missed compliance issue — no tax due",
    icon: "🎯",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    event: "At Exercise of Options",
    when: "Date employee exercises options and pays exercise price to company",
    tax: "Perquisite value = (FMV at exercise date - Exercise price) × Shares. Taxed as perquisite under Section 17 at employee's slab rate (up to 42.74%).",
    documentation: "Exercise notice, share certificate, FMV certificate at exercise date, compute perquisite, report in salary ITR",
    ifMissed: "Missing in ITR → perquisite income disallowed in return scrutiny. IT Department adds back and imposes penalty.",
    icon: "💪",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    event: "At Vesting (no tax unless restructured)",
    when: "Date when vesting schedule allows exercise (typical: 4-year vest with 1-year cliff)",
    tax: "No tax triggered on vesting alone. Tax only if options are exercised after vesting.",
    documentation: "Vesting schedule in grant agreement. Tracking register maintained.",
    ifMissed: "No immediate impact. But if employee leaves before full vesting, unvested options lapse.",
    icon: "📅",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    event: "At Sale / Buyback",
    when: "Date employee sells shares (either in market or to company buyback)",
    tax: "Capital gains = (Sale price - FMV at exercise) × Shares. If held >1 year, LTCG taxed at 20% + surcharge + cess (effective 23.3%); <1 year, STCG at slab rate.",
    documentation: "Share sale agreement, consideration received, holding period proof",
    ifMissed: "Capital gains disallowed in ITR → IT Department issues demand. Penalty and interest apply.",
    icon: "🔄",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    event: "At Separation / Forfeiture",
    when: "Date employee leaves company and unvested options are forfeited",
    tax: "No tax on forfeiture (unvested options had no value). But if employee exercised before leaving, tax already paid at exercise.",
    documentation: "Separation agreement, forfeiture notice, updated ESOP register",
    ifMissed: "No tax impact, but must update leave records and ESOP ledger",
    icon: "🚪",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
];

const PERQUISITE_TAX_DEEP_DIVE = [
  {
    scenario: "Grant at FMV (No discount)",
    grantPrice: "₹100",
    fmvAtGrant: "₹100",
    perquisiteAtGrant: "₹0 (no tax)",
    exercisePrice: "₹100",
    fmvAtExercise: "₹150",
    perquisiteAtExercise: "₹50/share (taxed at slab)",
    totalTaxFor100Shares: "₹50 × 100 = ₹5,000 (perquisite tax at slab, typically 30% = ₹1,500 to 42.74% = ₹2,137)",
    capitalGainOnSale: "₹25/share if sold at ₹175 after 1 year (LTCG 20%, tax ₹500)",
  },
  {
    scenario: "Grant at discount to FMV (Common for startups)",
    grantPrice: "₹70 (30% discount to manage perquisite)",
    fmvAtGrant: "₹100",
    perquisiteAtGrant: "₹0 (if structured as ESOT or trust grant)",
    exercisePrice: "₹70",
    fmvAtExercise: "₹150",
    perquisiteAtExercise: "₹80/share (higher spread, higher tax)",
    totalTaxFor100Shares: "₹80 × 100 = ₹8,000 (perquisite tax at slab = ₹2,400 to ₹3,419)",
    capitalGainOnSale: "₹25/share if sold at ₹175 (same LTCG as above)",
  },
  {
    scenario: "Vesting immediately on grant (rare, risky)",
    grantPrice: "₹100",
    fmvAtGrant: "₹150",
    perquisiteAtGrant: "₹50 × 100 = ₹5,000 (IMMEDIATE tax risk!)",
    exercisePrice: "₹100",
    fmvAtExercise: "₹150",
    perquisiteAtExercise: "₹0 (already taxed at grant, so no additional)",
    totalTaxFor100Shares: "₹5,000 perquisite tax at slab = ₹1,500-2,137",
    capitalGainOnSale: "₹0 (since already paid full value at exercise = FMV at grant)",
    riskNote: "If shares crash to ₹50 after grant, employee still paid tax on ₹5,000 profit that evaporated. Very risky structure."
  },
];

const COMPLIANCE_CHECKLIST = [
  {
    phase: "ESOP Scheme Design & Approval",
    tasks: [
      "Board of Directors approves ESOP scheme and document",
      "ESOP scheme filed with Stock Exchange (if listed) or with MCA portal",
      "Shareholder approval obtained (via special resolution if required)",
      "ESOP scheme specifies: grant process, vesting schedule, exercise price, buyback terms, forfeiture rules, valuation method",
      "Define employee eligibility: employees, contractors, founders, related entities",
      "Maximum ESOP pool size set (typically 10-15% of authorized capital)",
    ],
    docs: "Board resolution, ESOP scheme document, shareholder meeting minutes",
  },
  {
    phase: "Fair Market Value (FMV) Determination",
    tasks: [
      "Independent valuer (registered u/s Companies Act) valuesshares at grant date",
      "Valuation method documented: DCF, market multiples, latest funding round, or comparable transactions",
      "Valuation report signed by valuer with certification of FMV per Section 43(5) SBEB",
      "Valuation report attached to ESOP scheme and board minutes",
      "If FMV contested by IT Department, valuation must withstand scrutiny (not artificially low to avoid perquisite tax)",
    ],
    docs: "Valuation report from registered valuer, board resolution, funding round term sheet (if relying on funding round valuation)",
  },
  {
    phase: "Grant & Documentation",
    tasks: [
      "Individual grant agreement signed between company and employee specifying: grant date, number of options, exercise price, vesting schedule, exit scenario",
      "Grant agreement explicitly states FMV at grant date, perquisite tax treatment, and that employee understands tax liability",
      "Grant registered in ESOP register with unique option ID, employee details, grant date, vesting schedule",
      "Copy of ESOP scheme and grant agreement provided to employee",
      "No oral grants or side letters — all must be in writing",
    ],
    docs: "Signed grant agreement, copy to employee, ESOP register entry, grant board resolution",
  },
  {
    phase: "Vesting & Employee Communication",
    tasks: [
      "Maintain vesting schedule register (monthly/quarterly tracking of vested options per employee)",
      "Send monthly/quarterly vesting statements to employees showing cumulative vested options",
      "If employee leaves, immediately update vesting and lapse unvested options per scheme",
      "If ESOP scheme changes (e.g., new funding, secondary sale), amend grant agreements and communicate to employees",
      "No surprises — transparency is key to avoiding disputes",
    ],
    docs: "Vesting register, employee vesting statements (monthly/quarterly), separation letters",
  },
  {
    phase: "Exercise & Tax Compliance",
    tasks: [
      "When employee exercises, compute FMV at exercise date (using latest valuation or funding round)",
      "Calculate perquisite value = (FMV at exercise - Exercise price) × Shares",
      "Company must add perquisite value to employee's salary for that financial year (report in Form 12BA or payroll)",
      "If TDS not deducted at exercise, company must mention it in ITR compliance so employee reports it in ITR",
      "Issue exercise confirmation and share certificate to employee",
      "Update ESOP and shareholding register with employee becoming shareholder",
    ],
    docs: "Exercise agreement, FMV certificate at exercise date, Form 12BA (employer certificate), share certificate, ESOP register update",
  },
  {
    phase: "Capital Gains & Buyback/Sale",
    tasks: [
      "When employee sells shares (market sale or company buyback), compute holding period from exercise date to sale date",
      "If sale price > FMV at exercise, excess is capital gain (LTCG if >1 year, STCG if <1 year)",
      "Employee must report capital gains in ITR under relevant schedule",
      "If company undertakes buyback, buyback price must be reasonable (arms-length) and documented",
      "Company may withhold taxes at source if required",
    ],
    docs: "Sale agreement, share certificate, holding period proof, buyback agreement, tax computation",
  },
  {
    phase: "Annual Company Compliance",
    tasks: [
      "Maintain ESOP register (grant, vesting, exercise, sale, forfeiture details for all employees)",
      "Annual ESOP status report to board: new grants, vested shares, exercised options, outstanding options",
      "Update Form 5IF (information return on ESOP) if company is listed or if required by stock exchange",
      "File with auditor updated ESOP details for audit compliance and disclosure in notes to financial statements",
      "If company raises funding, update FMV and notify existing grantees",
    ],
    docs: "ESOP register, annual ESOP report to board, Form 5IF (if applicable), audit schedules",
  },
  {
    phase: "Employee Tax Compliance (Annual ITR)",
    tasks: [
      "Employee must report perquisite income (from ESOP exercise) in ITR under salary or PGBP section",
      "Report capital gains (if shares sold) under Schedule CG",
      "If perquisite value > ₹50,000 in any year, may be subject to AMT (Alternate Minimum Tax) if under certain categories",
      "Keep Form 12BA or employer certificate showing perquisite value added to salary",
      "Keep share certificates, exercise confirmation, and sale agreements for documentation",
    ],
    docs: "ITR filed, Form 12BA, share certificates, exercise/sale agreements, ESOP scheme copy",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Setting exercise price well below FMV without documentation",
    why: "Company issues options at ₹10 when FMV is ₹100 (per latest funding round) to make it attractive to employees, but does not document the discounted valuation with a proper valuation report.",
    consequence: "IT Department challenges valuation, demands perquisite tax on entire ₹90 spread per share at exercise, imposes penalty for underreporting income.",
    fix: "Always conduct independent valuation for FMV. If intentionally discounting (e.g., for retention), document the discount rationale and get independent valuer to certify.",
  },
  {
    mistake: "Granting options with immediate/cliff vesting mixed with performance conditions",
    why: "Company grants options vesting immediately on grant (risky structure) with performance conditions that are subjective or may not be met.",
    consequence: "If performance condition is not met, employee paid tax on options that could be forfeited. If forfeited, no deduction allowed for tax already paid.",
    fix: "Use clear 4-year vesting with 1-year cliff. Document vesting schedule in grant agreement. Avoid performance conditions unless very objective and measurable.",
  },
  {
    mistake: "Not reporting perquisite in salary in the year of exercise",
    why: "Company computes perquisite but does not add it to employee's salary or issue Form 12BA, expecting employee to report in their own ITR.",
    consequence: "Employee, unaware of perquisite value, does not report in ITR. IT Department scrutiny finds unaccounted income, demands back-taxes with interest and penalties for both company and employee.",
    fix: "Company MUST add perquisite to employee salary in the year of exercise. Issue Form 12BA clearly stating perquisite value added. Communicate to employee.",
  },
  {
    mistake: "No independent valuation report; relying on founder or CEO's estimate of FMV",
    why: "Startup founder estimates FMV as ₹50/share without third-party validation, using this for ESOP exercise price.",
    consequence: "If IT Department audits, valuation is deemed inadequate. Department imposes higher perquisite value based on comparables or DCF, demands back-taxes and penalties.",
    fix: "Get independent registered valuer to determine FMV per Section 43(5) SBEB Regulations. Cost ₹50K-₹1.5L depending on complexity, but protects company and employees from tax risks.",
  },
  {
    mistake: "ESOP scheme approved by board but not disclosed in financial statements",
    why: "Company establishes ESOP but does not disclose grants, vesting, exercise details in Notes to Accounts or financial statements, leaving no audit trail.",
    consequence: "Auditor flags non-disclosure. If company is raising funding or going for listing, investors/stock exchange demand ESOP details, revealing lack of documentation and governance.",
    fix: "Annually disclose in Notes to Accounts: total ESOP pool, grants during year, vested, exercised, outstanding options, FMV basis, and tax treated.",
  },
  {
    mistake: "No vesting schedule communicated to employees; employees not aware of cliff or graded vesting",
    why: "Grant agreement has 4-year vesting with 1-year cliff, but company does not communicate this clearly or send vesting statements.",
    consequence: "Employee leaves after 10 months thinking they are fully vested, only to find they have zero vested options and lose grant. Causes employee disputes, potential legal action.",
    fix: "Send monthly/quarterly vesting statements to all employees. Maintain transparent vesting register. Communicate clearly in grant agreement and employee handbooks.",
  },
];

const FAQS = [
  {
    question: "Can a founder or director receive ESOPs? What is the tax treatment?",
    answer:
      "Yes, founders, promoters, and directors can receive ESOPs under company's ESOP scheme if they are also employees. However, tax treatment is complex. If founder/director is receiving options as an employee (for services), perquisite tax applies like any employee. If founder receives options as part of promoting the company (bonus/equity gift), it may be treated as capital contribution (no perquisite tax), but IT Department often scrutinizes this distinction. Best practice: Keep founder ESOP separate from promoter equity. If founder is active employee, issue options with perquisite tax treatment. Keep clear documentation of role and contribution.",
  },
  {
    question: "What is AMT (Alternate Minimum Tax) on ESOP and when does it apply?",
    answer:
      "AMT is a minimum tax calculated at 15% on 'adjusted total income' (which includes perquisite income from ESOP) if the regular income tax is lower. It applies to individuals not covered by Section 115BAA (concessional regime). For example, if employee exercises ESOP with ₹5 lakh perquisite value and their regular income is low (so tax rate is <15%), AMT at 15% applies. AMT becomes particularly relevant for high-salary employees or those with substantial ESOP perquisites. You can claim AMT credit in subsequent years if regular tax exceeds AMT. Startup employees should be aware of this in the year of large ESOP exercises.",
  },
  {
    question: "If the company valuation crashes after ESOP grant, can the employee get tax refund?",
    answer:
      "No. Tax is based on FMV at exercise, not at grant. So if company valued at ₹100 at grant but crashes to ₹10 at exercise, tax is computed on perquisite at exercise based on ₹10 FMV (lower tax). However, if grant had immediate vesting (rare structure) and company valued at ₹100 at grant, employee paid perquisite tax on ₹100 valuation; if shares crash to ₹10 and are forfeited, employee cannot claim deduction or refund. This is why immediate vesting is risky — employee pays tax upfront without knowing if they will retain shares. Cliff + graded vesting structure is safer because tax is triggered only at exercise, by which time valuation is clearer.",
  },
  {
    question: "Can employee defer exercising vested options to defer paying perquisite tax?",
    answer:
      "Yes, employee can defer exercise as long as options remain valid (as per grant agreement, typically 10 years from grant). If employee waits to exercise until company valuation increases, the perquisite value (FMV at exercise - Exercise price) will be higher, but employee pays tax only at exercise, not at grant or vesting. This is a tax planning strategy for employees — wait for higher valuation to exercise if possible (if company allows and if options don't expire). However, if employee leaves company before exercising, unvested options are forfeited and exercisable options may lapse (depending on grant agreement). So delaying carries risk of losing options if separated.",
  },
  {
    question: "How does ESOP taxing change if company is acquired or IPO?",
    answer:
      "Acquisition: On sale of company shares in M&A, employee gets (Acquisition price - FMV at exercise) as capital gain, taxed at LTCG (20% if held >1 year) or STCG (slab rate if held <1 year). Perquisite tax was already paid at exercise. Example: Exercise at FMV ₹100, pay ₹100. Company acquired at ₹500/share. Capital gain = ₹400/share, LTCG tax 20% = ₹80/share. IPO: On IPO listing, shares become liquid. Employee can sell anytime. Capital gain = (IPO price - FMV at exercise). Tax rate depends on holding period (>1 year = LTCG 20%, <1 year = STCG at slab). No additional perquisite tax at IPO; perquisite was already taxed at exercise. Both scenarios are favorable because the time gap between exercise and exit (acquisition/IPO) is typically 2-5 years, allowing LTCG tax treatment.",
  },
  {
    question: "Can a company buy back ESOP shares at less than FMV? Is there a tax impact on the employee?",
    answer:
      "Yes, company can buyback at less than current FMV (e.g., at ₹100 even if current FMV is ₹150), but this is treated as a discount on sale. The tax impact: Capital gain = (Buyback price - FMV at exercise) × Shares. If buyback price < FMV at exercise, there is a capital loss (which can offset other capital gains). If buyback price > FMV at exercise, there is a capital gain (LTCG if held >1 year, STCG otherwise). The key is holding period from exercise to buyback. If employee exercised 2 years ago at ₹100 and company buys back at ₹120, capital gain = ₹20/share, taxed as LTCG (20%). However, if buyback price is suspiciously low (e.g., ₹50 when FMV is ₹150), IT Department may question the valuation and demand higher buyback consideration, treating it as potential transfer pricing violation.",
  },
  {
    question: "Must ESOP be granted via an Employee Stock Option Trust (ESOT), or can the company grant directly?",
    answer:
      "ESOT is optional, not mandatory. Company can grant ESOPs directly to employees (simpler structure). However, ESOT offers advantages: (1) Neutral third-party management, (2) Potential better tax treatment if ESOT is grantor trust, (3) Easier liquidity and secondary transactions, (4) Better protection in M&A. For early-stage startups (<50 employees, no exit plans), direct grant is fine. For growth-stage startups (Series B+, 100+ employees, M&A/IPO likely), ESOT is recommended. Tax treatment differs: Direct grant — employee taxed at exercise on perquisite value. ESOT (as grantor trust) — employee also taxed at exercise, but trust structure provides neutrality. ESOT (as beneficiary trust) — potential taxing at grant itself (complex and risky), so not recommended. Consult CA before choosing structure.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ESOP Pooling Structure & Tax Compliance 2026: Complete Guide to Section 43(5) and Perquisite Tax",
  description:
    "A comprehensive guide to ESOP pooling structure, Fair Market Value (FMV) determination under Section 43(5), perquisite tax at grant/exercise, AMT, buyback taxation, employee stock option trusts (ESOT), and compliance framework for Indian startups.",
  url: "https://www.taxvio.in/guide/itr-blogs/esop-pooling-structure-compliance",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/roc/esop-pooling-structure-compliance",
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
  dateModified: "2026-04-01",
  wordCount: 3600,
  inLanguage: "en-IN",
  articleSection: "Startup Compliance",
  keywords: [
    "ESOP pooling",
    "Section 43(5)",
    "perquisite tax",
    "ESOT",
    "employee stock options",
    "ESOP tax compliance",
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
      name: "ROC Guides",
      item: "https://www.taxvio.in/guide/roc",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ESOP Pooling Structure & Compliance",
      item: "https://www.taxvio.in/guide/roc/esop-pooling-structure-compliance",
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

export default function ESOPPoolingStructureCompliancePage() {
  return (
    <>
      <Script
        id="esop-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="esop-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="esop-faq-schema"
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
                "radial-gradient(circle,rgba(34,197,94,0.16) 0%,transparent 65%)",
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
                  <Link href="/guide/roc" className="hover:text-white transition">
                    ROC Guides
                  </Link>
                </li>
                <ChevronRight size={11} className="text-white/25" />
                <li className="text-white/80 font-semibold">
                  ESOP Pooling Structure & Compliance
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
                  Updated for 2026 · Perquisite Tax & Section 43(5)
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  ESOP Pooling Structure
                  <span className="block mt-2 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                    & Tax Compliance
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Understand <strong className="text-white">Fair Market Value (Section 43(5))</strong>,
                  <strong className="text-white">perquisite taxation at exercise</strong>, ESOP pool
                  structures (direct grant vs ESOT), vesting schedules, capital gains on sale and
                  complete compliance framework to avoid tax scrutiny, penalties and employee disputes
                  on ESOP grants.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get ESOP Structuring Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#valuation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View FMV Methods <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  ESOP at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Gift,
                      title: "FMV at Section 43(5)",
                      text: "Determines perquisite value at exercise — must be certified by registered valuer",
                    },
                    {
                      icon: PieChart,
                      title: "Perquisite tax at exercise",
                      text: "(FMV - Exercise price) × Shares, taxed at employee slab rate (up to 42.74%)",
                    },
                    {
                      icon: Lock,
                      title: "Vesting: 4-year cliff+graded",
                      text: "No tax at grant/vesting — tax triggered only when employee exercises vested options",
                    },
                    {
                      icon: BarChart3,
                      title: "Capital gains on sale",
                      text: "LTCG 20% if held >1 year (23.3% with surcharge) vs STCG at slab rate",
                    },
                    {
                      icon: Shield,
                      title: "3 pooling structures",
                      text: "Direct grant (simple), ESOT (neutral trust), SPV/Fund (complex, PE-backed)",
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
                { icon: BadgeCheck, text: "CA-Assisted ESOP Structuring" },
                { icon: Shield, text: "FMV Valuation Support" },
                { icon: Clock, text: "Compliance & Tax Planning" },
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
                  Startup Equity Compensation Guide — 2026
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Why Your ESOP Structure Matters More Than You Think
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Employee Stock Option Plans (ESOPs)</strong> are the primary tool startups
                  use to attract and retain talent without burning cash. But an improperly structured
                  ESOP can cost employees thousands in unexpected perquisite taxes, trigger IT Department
                  scrutiny, create disputes during exits, and expose the company to compliance penalties.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The core issue: <strong>Fair Market Value (FMV) determination under Section 43(5)</strong>.
                  The exercise price set for ESOP options, the valuation method used, and the vesting
                  schedule directly determine how much perquisite tax an employee pays when they exercise
                  options. For a high-flying startup, this can be the difference between a ₹1 lakh tax bill
                  and a ₹50 lakh bill on the same exercise event.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This guide covers: (1) ESOP basics and pooling structures, (2) FMV determination methods
                  (DCF, comparables, funding round, 409A-like), (3) perquisite tax triggers (grant, exercise,
                  vesting, sale), (4) complete compliance framework with checklists, and (5) common mistakes
                  that lead to tax penalties and employee disputes.
                </p>

                <div className="mt-6">
                  <InfoBox title="Perquisite tax is not optional — it is mandatory" color="blue">
                    <p>
                      When an employee exercises options, the difference between FMV at exercise and
                      exercise price is treated as a perquisite (taxable benefit) under Section 17 of
                      the Income Tax Act. This is NOT a capital gain. It is ordinary income taxed at the
                      employee's slab rate (up to 42.74% for high earners). Company MUST add this to the
                      employee's salary in that year and issue Form 12BA. Missing this is a compliance
                      violation leading to IT Department demand and penalties.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* ESOP BASICS */}
              <section id="basics" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Terminology & concepts"
                  heading="ESOP Basics — Options, Vesting, Perquisites Explained"
                  icon={Gift}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Let's start with core ESOP concepts and terminology that drive the entire tax treatment:
                </p>

                <div className="space-y-4">
                  {ESOP_BASICS.map(({ concept, definition, example, tax, icon }) => (
                    <div
                      key={concept}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-extrabold text-gray-800 mb-2">
                            {concept}
                          </h4>
                          <p className="text-xs leading-relaxed text-gray-600 mb-2">
                            <strong>Definition:</strong> {definition}
                          </p>
                          <p className="text-xs leading-relaxed text-gray-600 mb-2">
                            <strong>Example:</strong> {example}
                          </p>
                          <p className="text-xs leading-relaxed text-amber-700 font-semibold">
                            <strong>Tax impact:</strong> {tax}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* POOLING STRUCTURES */}
              <section id="structures" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="How to set up ESOP"
                  heading="3 ESOP Pooling Structures — Pros, Cons & Tax Treatment"
                  icon={Building2}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Companies can structure ESOP in three ways. Each has different compliance,
                  cost and tax implications:
                </p>

                <div className="space-y-4">
                  {POOLING_STRUCTURE.map(({
                    structure,
                    desc,
                    pros,
                    cons,
                    bestFor,
                    icon,
                    taxTreatment,
                  }) => (
                    <div
                      key={structure}
                      className="rounded-2xl border border-gray-100 bg-white p-5"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-3xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800">{structure}</h4>
                          <p className="text-xs leading-relaxed text-gray-600 mt-1">{desc}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs font-bold text-emerald-700 mb-2">✓ Pros:</p>
                          <ul className="space-y-1">
                            {pros.map((pro) => (
                              <li
                                key={pro}
                                className="text-[11px] leading-relaxed text-emerald-600"
                              >
                                • {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-rose-700 mb-2">✗ Cons:</p>
                          <ul className="space-y-1">
                            {cons.map((con) => (
                              <li key={con} className="text-[11px] leading-relaxed text-rose-600">
                                • {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        <p className="text-xs">
                          <strong className="text-gray-700">Best for:</strong>{" "}
                          <span className="text-gray-600">{bestFor}</span>
                        </p>
                        <p className="text-xs">
                          <strong className="text-gray-700">Tax treatment:</strong>{" "}
                          <span className="text-amber-700">{taxTreatment}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* VALUATION METHODS */}
              <section id="valuation" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Section 43(5) compliance"
                  heading="Fair Market Value Determination — 4 Valuation Methods Explained"
                  icon={BarChart3}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The exercise price of ESOP options determines the perquisite value taxed to employees.
                  This must be set based on a defensible Fair Market Value (FMV) per Section 43(5) of the
                  Income Tax Act and SEBI SBEB Regulations. Here are the four main valuation methods:
                </p>

                <div className="grid gap-4">
                  {VALUATION_METHODS.map(({
                    method,
                    definition,
                    formula,
                    example,
                    taxCompliance,
                    icon,
                    color,
                  }) => (
                    <div
                      key={method}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <h4 className="text-sm font-extrabold text-gray-800">{method}</h4>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>
                          <strong>Definition:</strong> {definition}
                        </p>
                        <p>
                          <strong>Formula:</strong> {formula}
                        </p>
                        <p>
                          <strong>Example:</strong> {example}
                        </p>
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>Tax compliance:</strong> {taxCompliance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Always use independent registered valuer — never self-value" color="amber">
                    <p>
                      Company founders or CFOs cannot determine FMV for ESOP exercise price. You must hire
                      a CA or independent valuerwith valuation license to compute FMV based on DCF, comparables,
                      or latest funding round. Cost is ₹50K-₹1.5L, but it is non-negotiable. If you self-value
                      and set a suspiciously low exercise price, IT Department scrutiny is certain, and you will
                      end up paying higher perquisite tax plus penalties for both company and employees.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* TAX TRIGGER POINTS */}
              <section id="tax-triggers" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="When tax is due"
                  heading="5 Key Events That Trigger ESOP Taxation"
                  icon={Zap}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Tax on ESOPs is triggered at specific events, not continuously. Understanding these
                  trigger points helps with tax planning:
                </p>

                <div className="grid gap-4">
                  {TAX_TRIGGER_POINTS.map(({
                    event,
                    when,
                    tax,
                    documentation,
                    ifMissed,
                    icon,
                    color,
                  }) => (
                    <div
                      key={event}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800 mb-2">{event}</h4>
                          <div className="space-y-2 text-xs text-gray-600">
                            <p>
                              <strong>When:</strong> {when}
                            </p>
                            <p className={`font-semibold ${color.split(" ")[2]}`}>
                              <strong>Tax:</strong> {tax}
                            </p>
                            <p>
                              <strong>Documentation:</strong> {documentation}
                            </p>
                            <p className="text-rose-700 font-semibold">
                              <strong>If missed:</strong> {ifMissed}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PERQUISITE SCENARIOS */}
              <section id="scenarios" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Real-world examples"
                  heading="Perquisite Tax Scenarios — How Much Tax Will Employees Pay?"
                  icon={Calculator}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Here are three real scenarios showing how perquisite tax is computed and what total
                  tax employees face across exercise and sale:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Scenario
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Grant Price
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          FMV at Grant
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Perquisite at Grant
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Exercise Price
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          FMV at Exercise
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Perquisite at Exercise
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Tax @ Slab
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {PERQUISITE_TAX_DEEP_DIVE.map(({
                        scenario,
                        grantPrice,
                        fmvAtGrant,
                        perquisiteAtGrant,
                        exercisePrice,
                        fmvAtExercise,
                        perquisiteAtExercise,
                        totalTaxFor100Shares,
                      }) => (
                        <tr key={scenario} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                            {scenario}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {grantPrice}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {fmvAtGrant}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {perquisiteAtGrant}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {exercisePrice}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {fmvAtExercise}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-emerald-700 font-semibold">
                            {perquisiteAtExercise}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-amber-700 font-bold">
                            {totalTaxFor100Shares}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <InfoBox title="Scenario 3 shows why immediate vesting is risky" color="rose">
                    <p>
                      If company grants options with immediate vesting (all options vest at grant),
                      employee pays perquisite tax at grant date valuation — even if they haven't
                      exercised yet or if shares crash later. If shares crash from ₹150 to ₹50 after
                      grant, employee already paid ₹5,000 perquisite tax on a grant that is now worth
                      nothing. Standard 4-year cliff+graded vesting avoids this risk — perquisite tax
                      is triggered only at exercise, by which time valuation is clearer.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* COMPLIANCE CHECKLIST */}
              <section id="compliance" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Governance & documentation"
                  heading="8-Phase ESOP Compliance Checklist for Companies"
                  icon={CheckCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Here is the complete compliance framework from ESOP scheme design through annual
                  reporting and employee tax filing:
                </p>

                <div className="space-y-4">
                  {COMPLIANCE_CHECKLIST.map(({ phase, tasks, docs }) => (
                    <div
                      key={phase}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <h4 className="text-sm font-extrabold text-gray-800">{phase}</h4>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-2">Tasks:</p>
                          <ul className="space-y-1">
                            {tasks.map((task) => (
                              <li key={task} className="text-[11px] leading-relaxed text-gray-600">
                                ✓ {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-gray-200 pt-2">
                          <p className="text-xs font-semibold text-gray-700 mb-1">Documents:</p>
                          <p className="text-[11px] text-blue-700 font-medium">{docs}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Maintain comprehensive ESOP register — it is your defense" color="green">
                    <p>
                      The ESOP register is the single source of truth. It must track: grant date, grant ID,
                      employee, grant size, vesting schedule, exercise details (date, price, FMV), sale/
                      forfeiture details, and FMV certifications at each stage. During IT audit or employee
                      disputes, the register is your main evidence of compliance. Without it, you are vulnerable
                      to disallowances, penalties, and employee litigation. Get it audited annually by your
                      statutory auditor.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Costly errors"
                  heading="6 Common ESOP Mistakes That Trigger Tax Penalties & Disputes"
                  icon={AlertCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  These mistakes are surprisingly common and each can cost ₹50K to ₹5L+ in taxes,
                  penalties and litigation:
                </p>

                <div className="space-y-4">
                  {COMMON_MISTAKES.map(({ mistake, why, consequence, fix }) => (
                    <div
                      key={mistake}
                      className="rounded-2xl border border-gray-100 bg-white p-5"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <XCircle size={18} className="text-rose-600 shrink-0 mt-0.5" />
                        <h4 className="text-sm font-extrabold text-rose-700">{mistake}</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-gray-600">
                          <strong>Why it happens:</strong> {why}
                        </p>
                        <p className="text-xs text-rose-700 font-semibold">
                          <strong>Consequence:</strong> {consequence}
                        </p>
                        <div className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                          <p className="text-xs text-emerald-700">
                            <strong>Fix:</strong> {fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Need ESOP structuring + tax help?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your ESOP compliance
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team designs ESOP scheme, conducts FMV valuation, prepares grant agreements,
                      registers on ESOP portal, handles annual compliance and ensures employees file correct
                      ITR with perquisite/capital gains — end-to-end support.
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
                  heading="ESOP Pooling & Tax Compliance — FAQs"
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

              <div className="mt-12 pt-7 border-t border-gray-100">
                <p className="text-xs leading-6 text-gray-500">
                  <strong className="text-gray-700">Disclaimer:</strong> This article is for general
                  education on ESOP structuring and tax compliance under Indian law as of 2026. Tax
                  treatment of ESOPs depends on entity structure (Pvt Ltd, LLP, startup status), employee
                  status (employee, director, founder), valuation method, vesting schedule, and holding
                  period. Specific tax computation requires analysis of individual facts. Always obtain
                  written advice from a qualified CA or tax lawyer before implementing an ESOP scheme or
                  exercising options. Taxvio is not liable for decisions made based on this article.
                </p>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl border border-[#dcebf3] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]">
                    On this page
                  </p>
                  <nav className="mt-4 space-y-1.5">
                    {[
                      ["#basics", "ESOP basics"],
                      ["#structures", "3 pooling structures"],
                      ["#valuation", "FMV valuation methods"],
                      ["#tax-triggers", "Tax trigger events"],
                      ["#scenarios", "Perquisite tax examples"],
                      ["#compliance", "Compliance checklist"],
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

                <div className="rounded-2xl bg-[#00416a] p-5 text-white shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageCircle size={18} className="text-emerald-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">ESOP help?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get CA-assisted ESOP scheme design, FMV valuation, grant agreements and tax
                    compliance support.
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
                    href: "/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
                    label: "DPIIT Recognition",
                    sub: "Startup 80-IAC guide",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                    label: "Corporate Tax",
                    sub: "115BAA & deductions",
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

        <section className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">
                Explore more
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#00416a]">
                Related Startup & Compliance Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                  title: "Legal Ways to Reduce Corporate Tax",
                  text: "115BAA, 80M, 80JJAA, depreciation and smart planning for FY 2026-26.",
                },
                {
                  href: "/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
                  title: "Proprietorship vs LLP vs Private Limited",
                  text: "Complete comparison, conversion process, tax rates and when to switch.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Startup Compliance Expert",
                  text: "Get CA-assisted ESOP structuring, FMV valuation, compliance audits and tax planning.",
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

        <a
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20with%20ESOP%20structuring%20and%20tax%20compliance`}
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