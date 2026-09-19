// app/guide/roc/fdi-compliance-fema-startups/page.tsx

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
  Globe,
  Landmark,
  ShieldCheck,
  AlertTriangle,
  TrendingDown,
  Percent,
  Files,
  Mail,
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "FDI Compliance under FEMA for Indian Startups 2026: Automatic Route, Sectoral Caps, FC-GPR & Reporting | Taxvio",
  description:
    "Complete guide to Foreign Direct Investment (FDI) compliance under FEMA for Indian startups 2026 — Automatic vs Government route, sectoral caps, pricing guidelines, Form FC-GPR filing, Annual Return on Foreign Liabilities (FLA), downstream investment rules, ODI compliance and common violations.",
  keywords: [
    "FDI compliance India",
    "FEMA regulations startups",
    "automatic route FDI",
    "government route FDI",
    "Form FC-GPR filing",
    "FLA return FEMA",
    "sectoral caps FDI",
    "pricing guidelines FDI",
    "downstream investment",
    "ODI compliance",
    "foreign investment India",
    "startup FDI rules",
    "RBI FDI reporting",
    "FEMA compliance checklist",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/roc/fdi-compliance-fema-startups",
  },
  openGraph: {
    title: "FDI Compliance under FEMA for Indian Startups 2026 — Complete Guide | Taxvio",
    description:
      "Automatic route, sectoral caps, pricing guidelines, FC-GPR filing, FLA returns, downstream investment and complete FEMA compliance framework for startups raising foreign funding.",
    url: "https://www.taxvio.in/guide/roc/fdi-compliance-fema-startups",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FDI Compliance under FEMA for Indian Startups 2026",
    description:
      "Complete FEMA compliance guide — Automatic vs Government route, FC-GPR, FLA, pricing guidelines, sectoral caps and common violations for Indian startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const FDI_BASICS = [
  {
    concept: "Foreign Direct Investment (FDI)",
    definition:
      "Investment by a foreign entity (individual, company, fund) in the share capital of an Indian company. FDI is regulated by FEMA (Foreign Exchange Management Act) and consolidated FDI Policy issued by DPIIT.",
    example: "Singapore-based VC invests $1M in Indian startup for 10% equity → this is FDI, subject to FEMA rules.",
    regulation: "Governed by FEMA 1999, FDI Policy (updated annually), RBI Master Directions on FDI",
    icon: "🌍",
  },
  {
    concept: "Automatic Route vs Government Route",
    definition:
      "Automatic Route: FDI allowed without prior approval from RBI/Government, only post-facto reporting required. Government Route: Prior approval from DPIIT/FIPB required before investment. Most sectors allow automatic route up to 100% FDI.",
    example: "E-commerce marketplace (B2B): 100% FDI automatic route. E-commerce inventory (B2C): 0% FDI allowed (prohibited).",
    regulation: "Annex A of FDI Policy lists sector-wise routes and caps",
    icon: "🚦",
  },
  {
    concept: "Sectoral Caps",
    definition:
      "Maximum percentage of FDI allowed in a sector. Some sectors have 100% FDI, others have caps (e.g., insurance 74%, multi-brand retail 0%). Caps apply to total foreign holding, not individual investor.",
    example: "Insurance sector: max 74% FDI. If existing FDI is 70%, new foreign investor can invest only 4% more.",
    regulation: "Sectoral caps listed in FDI Policy Annex; monitored by sector regulators (IRDAI, SEBI, etc.)",
    icon: "📊",
  },
  {
    concept: "Pricing Guidelines (Valuation Rules)",
    definition:
      "FDI in Indian company must be at Fair Market Value (FMV) or above for equity shares. For unlisted startups, FMV determined by SEBI registered Category-I Merchant Banker or Chartered Accountant with 10+ years valuation experience.",
    example: "Startup valued at ₹10 Cr by merchant banker. Foreign investor invests at ₹12 Cr (above FMV) ✓ allowed. Investment at ₹8 Cr (below FMV) ✗ violates pricing guidelines.",
    regulation: "Schedule 1 of FEM (Non-Debt Instruments) Rules, 2019 — Valuation norms",
    icon: "💰",
  },
  {
    concept: "Form FC-GPR (Foreign Currency - Gross Provisional Return)",
    definition:
      "Mandatory filing within 30 days of receipt of FDI funds. Filed by Indian company on RBI FIRMS portal. Reports amount received, mode (equity/CCD/pref shares), investor details, sectoral classification.",
    example: "Company receives $500K FDI on Jan 15, 2026. Must file FC-GPR by Feb 14, 2026. Late filing attracts ₹5,000/day penalty (max ₹1 lakh).",
    regulation: "Master Direction on Reporting under FEMA, 1999",
    icon: "📄",
  },
  {
    concept: "Annual Return on Foreign Liabilities and Assets (FLA)",
    definition:
      "Annual filing by all Indian companies with foreign investment (equity or debt). Due by July 15 each year. Reports outstanding foreign investment, repatriation, foreign assets held.",
    example: "Indian company with total FDI of ₹50 lakh must file FLA by July 15, 2026 for FY 2025-26. Non-filing: penalty ₹10,000/day.",
    regulation: "FLA Return — Master Direction on Reporting, RBI",
    icon: "📅",
  },
];

const ROUTES_AND_CAPS = [
  {
    sector: "E-commerce (B2B Marketplace)",
    route: "Automatic",
    cap: "100%",
    conditions: "Only marketplace model allowed (platform connecting buyers-sellers). No inventory-based B2C model. No seller ownership >25% by marketplace entity.",
    example: "Amazon India operates marketplace under 100% FDI (automatic route). Flipkart similarly structured.",
    icon: "🛒",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    sector: "E-commerce (Inventory/B2C)",
    route: "Prohibited",
    cap: "0%",
    conditions: "FDI not allowed in inventory-based e-commerce (where platform owns and sells inventory directly to consumers).",
    example: "Foreign entity cannot set up B2C e-commerce selling inventory in India (violates FDI policy). Only marketplace model allowed.",
    icon: "🚫",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    sector: "Startups (Technology, SaaS, Fintech)",
    route: "Automatic",
    cap: "100%",
    conditions: "Must comply with sector-specific regulations (e.g., Payment Aggregators need RBI license). No restriction on technology/software startups.",
    example: "SaaS startup raises Series A from US VC at 100% FDI (automatic route). No prior approval needed, only FC-GPR filing post-investment.",
    icon: "💻",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    sector: "Insurance",
    route: "Automatic",
    cap: "74%",
    conditions: "FDI up to 49% automatic, 49%-74% automatic but with prior approval from IRDAI (Insurance Regulatory and Development Authority). Indian management and control required.",
    example: "Indian insurtech with 40% FDI can raise additional 34% from foreign investor (total 74%) under automatic route after IRDAI approval.",
    icon: "🛡️",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    sector: "Banking (Private Sector)",
    route: "Automatic",
    cap: "74%",
    conditions: "FDI up to 49% automatic. 49%-74% requires RBI approval. Foreign banks can set up wholly-owned subsidiaries (100% FDI) under separate RBI guidelines.",
    example: "Foreign PE firm invests 20% in Indian private bank (automatic route). For 50%+, RBI approval needed.",
    icon: "🏦",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    sector: "Real Estate Development",
    route: "Automatic",
    cap: "100%",
    conditions: "Minimum area: 20,000 sq.m (townships), minimum capitalization $5M. At least 50% of project must be developed within 5 years. Exit allowed only after completion.",
    example: "Foreign PE invests in Indian real estate developer building township (100% FDI automatic, subject to minimum area and lock-in).",
    icon: "🏗️",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    sector: "Multi-Brand Retail Trading (MBRT)",
    route: "Government Route",
    cap: "51%",
    conditions: "Requires prior DPIIT approval. Mandatory 30% local sourcing. Only in cities with population >1M. Single-brand retail: 100% FDI (automatic up to 49%, government route 49%-100%).",
    example: "Walmart India operates as B2B cash-and-carry (100% FDI). For B2C multi-brand retail, 51% cap with government approval + local sourcing norm.",
    icon: "🏬",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    sector: "Pharmaceuticals (Greenfield)",
    route: "Automatic",
    cap: "100%",
    conditions: "Greenfield (new venture): 100% FDI automatic. Brownfield (existing company): 74% automatic, >74% government route with FIPB approval.",
    example: "Foreign pharma company sets up new manufacturing unit in India (greenfield) — 100% FDI automatic. Acquires stake in existing pharma company — 74% max automatic.",
    icon: "💊",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
];

const PRICING_GUIDELINES = [
  {
    instrument: "Equity Shares (Listed Companies)",
    pricingRule: "Price must not be less than floor price computed as per SEBI (ICDR) Regulations: average of weekly high-low of closing prices during 26 weeks / 2 weeks preceding relevant date.",
    whoValues: "Not required — market price used as reference. If preferential allotment, price per SEBI ICDR Reg 164.",
    example: "Foreign investor buys shares in NSE-listed startup. Price must be ≥ SEBI floor price (26-week or 2-week average).",
    violation: "If price < floor price, RBI can compel company to refund, penalty on company and investor, downstream investment restrictions.",
    icon: "📈",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    instrument: "Equity Shares (Unlisted Companies)",
    pricingRule: "Price must be at or above Fair Market Value (FMV) determined by SEBI registered Category-I Merchant Banker OR Chartered Accountant with 10+ years valuation experience, using DCF method or any other SEBI/ICAI approved method.",
    whoValues: "Category-I Merchant Banker (SEBI registered) OR CA with 10+ years valuation experience",
    example: "Startup raises Series A at ₹500/share. Merchant banker values FMV at ₹450/share → ✓ compliant (price > FMV). If FMV is ₹600/share and price is ₹500 → ✗ violation.",
    violation: "Investment below FMV treated as downstream investment violation. Company must refund excess within 90 days or convert to debt. Penalty ₹1-5 lakh + compounding fees.",
    icon: "💼",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    instrument: "Compulsorily Convertible Preference Shares (CCPS)",
    pricingRule: "Same as equity shares — must be at or above FMV. If CCPS converts to equity, conversion price must also be ≥ FMV at conversion date OR ≥ FMV at issue date (whichever is higher, unless RBI approves lower price).",
    whoValues: "Category-I Merchant Banker OR CA (10+ years valuation experience)",
    example: "CCPS issued at ₹100 (FMV at issue ₹90). After 2 years, FMV is ₹200. Conversion price must be ≥ ₹200 (higher of issue FMV and conversion FMV).",
    violation: "Conversion at lower price violates pricing guidelines. RBI can impose penalty, demand refund, or restrict further FDI.",
    icon: "🔄",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    instrument: "Compulsorily Convertible Debentures (CCD)",
    pricingRule: "Same pricing rules as equity/CCPS. On conversion, conversion price ≥ FMV. Interest paid on CCD is tax-deductible (unlike dividends on preference shares).",
    whoValues: "Category-I Merchant Banker OR CA (10+ years valuation experience)",
    example: "Foreign investor subscribes CCD at ₹1,000 (FMV ₹950). Converts after 3 years when FMV is ₹1,500. Conversion price must be ≥ ₹1,500.",
    violation: "Below-FMV conversion is violation; RBI can demand refund or impose penalty. Interest deduction disallowed in IT scrutiny if conversion price non-compliant.",
    icon: "📜",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    instrument: "Transfer of Shares (Secondary Sale)",
    pricingRule: "Transfer price for unlisted shares: between floor price (lower of FMV or acquisition price by seller) and ceiling price (higher of FMV or acquisition price). For listed shares: market price ± 10% per SEBI regulations.",
    whoValues: "Category-I Merchant Banker OR CA (10+ years) determines FMV at transfer date",
    example: "Founder (Indian) sells shares to foreign investor. FMV at transfer ₹500/share. Founder acquired at ₹100/share. Transfer price must be between ₹100 (floor) and ₹500 (ceiling). Transfer at ₹300 ✓ compliant. Transfer at ₹50 ✗ violation (below floor).",
    violation: "Transfer below floor or above ceiling violates FEMA pricing guidelines. Penalty on seller and buyer. RBI can cancel transaction, demand rectification within 90 days.",
    icon: "🔀",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
];

const COMPLIANCE_TIMELINE = [
  {
    event: "FDI Investment Received",
    when: "Day funds credited to Indian company's bank account (FIRC — Foreign Inward Remittance Certificate issued by bank)",
    action: "Company receives funds, updates cap table, issues share certificates or CCPS/CCD instruments as per subscription agreement",
    deadline: "Issue shares within 60 days of receipt of funds (RBI guideline)",
    penalty: "Delay in share issuance may trigger violation; RBI can ask for explanation and impose penalty if funds parked without shares issued",
    icon: "💸",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    event: "Form FC-GPR Filing",
    when: "Within 30 days of receipt of FDI funds",
    action: "Company files Form FC-GPR on RBI FIRMS portal (Foreign Investment Reporting and Management System). Reports: investor name, country, amount, instrument type, sectoral classification, pricing details.",
    deadline: "30 days from fund receipt (strict deadline)",
    penalty: "Late filing: ₹5,000/day penalty (maximum ₹1 lakh). Non-filing: ₹1 lakh fine + compounding charges. Repeat violations can lead to downstream investment restrictions.",
    icon: "📄",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    event: "KYC & Beneficial Ownership Disclosure",
    when: "At the time of FC-GPR filing or within 30 days of investment",
    action: "Company must disclose ultimate beneficial owner (UBO) of foreign investor entity. If investor is fund/LLP/company, must report individual(s) owning >25% or exercising control. Upload KYC documents on FIRMS.",
    deadline: "Within 30 days of FDI receipt",
    penalty: "Non-disclosure of UBO is FEMA violation. Penalty ₹10,000-₹2 lakh. If UBO is from restricted country (Pakistan, Bangladesh, etc.), investment may be rejected/refunded.",
    icon: "🔍",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    event: "Annual Return on Foreign Liabilities and Assets (FLA)",
    when: "Once a year, by July 15 (for previous financial year ending March 31)",
    action: "All companies with foreign investment (equity or debt) must file FLA Return. Reports: total FDI received, repatriation, outstanding foreign liabilities, foreign assets, downstream investment details.",
    deadline: "July 15 every year",
    penalty: "Late filing: ₹10,000/day (no cap). Non-filing: ₹25,000 penalty + adjudication. RBI can impose additional penalties, restrict future FDI if repeated non-compliance.",
    icon: "📅",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    event: "Downstream Investment Reporting",
    when: "Within 30 days of Indian company (with FDI) investing in another Indian company",
    action: "If Indian company has FDI and invests in another Indian entity, it is 'downstream investment.' Must file Form DI (Downstream Investment) on FIRMS portal. Must comply with sectoral caps and pricing guidelines.",
    deadline: "30 days from downstream investment",
    penalty: "Non-reporting: ₹5,000/day. Violation of sectoral cap through downstream investment: penalty ₹1-5 lakh, compounding fees, forced divestment.",
    icon: "🔽",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    event: "Transfer of Shares (Secondary Sale) Reporting",
    when: "Within 60 days of transfer (seller and buyer both must report)",
    action: "Seller files Form FC-TRS (Transfer) and buyer files Form FC-GPR. Both must report transaction on FIRMS. Must attach valuation certificate if unlisted shares.",
    deadline: "60 days from transfer date",
    penalty: "Late filing: ₹5,000/day (max ₹1 lakh). Non-filing: ₹1 lakh fine. Non-compliant pricing (below floor or above ceiling): penalty + compounding, transaction may be reversed.",
    icon: "🔀",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    event: "Exit / Repatriation Reporting",
    when: "When foreign investor exits (sells shares or company buys back shares) and repatriates funds abroad",
    action: "Company files Form FC-TRS. Bank issues Foreign Outward Remittance Certificate (FORC). Must show capital gains tax paid (if applicable). RBI monitors repatriation for transfer pricing and tax compliance.",
    deadline: "60 days from exit/repatriation",
    penalty: "Repatriation without filing FC-TRS: ₹1 lakh penalty. If tax not paid on capital gains, IT Department issues demand + penalty. RBI can block future repatriation.",
    icon: "🚪",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
];

const DOWNSTREAM_INVESTMENT_RULES = [
  {
    rule: "Definition of Downstream Investment",
    explanation: "Investment by an Indian company (having FDI) into another Indian company. This 'indirect' FDI must comply with same sectoral caps and entry routes as direct FDI.",
    example: "Indian Company A has 40% FDI. Company A invests ₹1 Cr in Indian Company B (which has 0% FDI). This is downstream investment. Company B is now deemed to have 40% indirect FDI (from Company A's foreign shareholders).",
    compliance: "Company A must file Form DI within 30 days. Company B must ensure its sector allows 40%+ FDI.",
    icon: "🔽",
  },
  {
    rule: "Sectoral Cap Compliance for Downstream Investment",
    explanation: "Downstream investment is counted towards sectoral cap of investee company. If investee's sector has FDI cap, indirect FDI (downstream) cannot breach cap.",
    example: "Insurance company (74% FDI cap) receives investment from Indian holding company with 80% FDI. This breaches sectoral cap → violation. Insurance company can accept downstream investment only from entities with ≤74% FDI.",
    compliance: "Before downstream investment, check investee's sector cap. Calculate total FDI (direct + indirect). If breached, investment not allowed.",
    icon: "⚖️",
  },
  {
    rule: "Calculation of Indirect FDI Percentage",
    explanation: "Indirect FDI % in investee = (FDI% in investor × Stake% investor holds in investee). Total FDI in investee = Direct FDI% + Sum of all Indirect FDI%.",
    example: "Company X has 50% FDI. Company X owns 20% of Company Y. Indirect FDI in Y = 50% × 20% = 10%. If Y also has 30% direct FDI, total FDI in Y = 30% + 10% = 40%.",
    compliance: "Maintain cap table showing both direct and indirect FDI. File Form DI for each downstream investment transaction.",
    icon: "🧮",
  },
  {
    rule: "Prohibited Sectors and Downstream Investment",
    explanation: "If investee operates in sector where FDI is prohibited (e.g., multi-brand retail B2C, lottery, gambling, real estate brokerage), NO downstream investment allowed from any entity with FDI.",
    example: "Indian Company A (has 1% FDI) wants to invest in lottery company (FDI prohibited). Not allowed — even 1% indirect FDI violates prohibition.",
    compliance: "Check FDI Policy Annex. If sector is prohibited, no downstream investment from FDI-holding entity, regardless of %.",
    icon: "🚫",
  },
  {
    rule: "Reporting & Documentation for Downstream Investment",
    explanation: "Investor must file Form DI within 30 days. Must attach: (1) Board resolution, (2) FDI details of investor, (3) Sectoral classification of investee, (4) Certificate confirming sectoral cap compliance.",
    example: "Company A (40% FDI, software sector) invests ₹50 lakh in Company B (e-commerce marketplace, 100% FDI allowed). Company A files Form DI with all docs within 30 days.",
    compliance: "Form DI filed on RBI FIRMS portal. Investee company must also report downstream investment in its FLA return.",
    icon: "📋",
  },
];

const COMMON_VIOLATIONS = [
  {
    violation: "FDI received but FC-GPR not filed within 30 days",
    why: "Startup receives funding, focuses on product/sales, forgets compliance. CA/CFO not aware of 30-day deadline. No automated reminder from RBI.",
    consequence: "Penalty ₹5,000/day (max ₹1 lakh). If discovered during RBI audit, additional penalty + compounding fees (₹25K-₹1L). Repeat violations lead to restrictions on future FDI.",
    fix: "Immediately file FC-GPR (even if late). Apply for compounding if penalty notice received. Set calendar reminder for all future FDI receipts (30-day countdown).",
    prevention: "Appoint dedicated compliance officer. Use FEMA compliance software. Maintain checklist for every FDI transaction.",
  },
  {
    violation: "Investment received below Fair Market Value (FMV)",
    why: "Startup and investor agree on lower valuation to give investor better terms, without realizing FEMA pricing guidelines require FMV or above. No valuation certificate obtained from merchant banker/CA.",
    consequence: "RBI can declare investment invalid. Company must refund amount below FMV within 90 days or convert to compliant instrument (debt). Penalty ₹1-5 lakh. Future FDI restricted until rectified.",
    fix: "Obtain retrospective valuation certificate from Category-I Merchant Banker showing investment was at/above FMV. If below FMV, investor must top-up to FMV or company must issue additional shares. Apply for RBI compounding.",
    prevention: "ALWAYS get valuation certificate BEFORE closing FDI round. Ensure subscription agreement specifies price ≥ FMV per valuation report dated within 90 days of investment.",
  },
  {
    violation: "FDI in prohibited sector or beyond sectoral cap",
    why: "Startup pivots business model (e.g., from B2B marketplace to B2C inventory e-commerce) without realizing FDI implications. Or downstream investment causes indirect breach of sectoral cap.",
    consequence: "RBI declares investment non-compliant. Company must refund FDI within 90 days OR divest to bring within cap. Penalty ₹5-10 lakh. Company barred from raising further FDI until rectified. Criminal prosecution possible under FEMA for willful violations.",
    fix: "Immediate corrective action: divest excess FDI, change business model to compliant activity, or seek government approval (if government route available). Apply for RBI compounding and seek legal advice.",
    prevention: "Before FDI, verify sector classification and FDI cap. Before business pivot, re-check FEMA compliance. Annual FEMA audit by external CA recommended.",
  },
  {
    violation: "Annual FLA Return not filed by July 15",
    why: "Small startup thinks FLA applies only to large companies. CFO not aware of filing requirement. No reminder from RBI or MCA.",
    consequence: "Penalty ₹10,000/day (no cap). For 1 month delay, penalty = ₹3 lakh. RBI issues show-cause notice. Non-filing for 2+ years: penalty ₹10-25 lakh + prosecution. Company blacklisted for future FDI.",
    fix: "File FLA immediately (even if 6-12 months late). Pay penalty. Apply for compounding if penalty notice received. Ensure all prior years' FLA filed.",
    prevention: "Set annual reminder for FLA filing (due July 15). Appoint CA for annual FEMA compliance. Maintain updated foreign investment register year-round.",
  },
  {
    violation: "Downstream investment without Form DI filing",
    why: "Indian company with FDI invests in another Indian entity, treating it as routine domestic investment. Unaware that it qualifies as downstream investment requiring separate reporting.",
    consequence: "Penalty ₹5,000/day for late filing. If investee's sector cap breached due to downstream FDI, both investor and investee penalized (₹5-10 lakh each). Forced divestment if cap breached.",
    fix: "File Form DI immediately. If sectoral cap breached, divest to bring within cap. Apply for compounding. Investee company must also rectify its FLA return showing downstream FDI.",
    prevention: "Before any investment by FDI-holding company, check if it is downstream investment. Maintain register of all subsidiaries/investee companies. File Form DI within 30 days of each investment.",
  },
  {
    violation: "Transfer of shares (secondary sale) without FC-TRS filing or non-compliant pricing",
    why: "Founder sells shares to foreign investor in secondary transaction. Founder and investor treat it as private sale, don't file FEMA reports. Or transfer price is outside floor-ceiling range (violates pricing guidelines).",
    consequence: "Penalty ₹5,000/day for non-filing (both seller and buyer liable). If pricing non-compliant, RBI can cancel transaction, demand refund within 90 days. Penalty ₹1-5 lakh + compounding fees. Capital gains tax issues if transfer price disputed.",
    fix: "File FC-TRS (seller) and FC-GPR (buyer) immediately. Obtain valuation certificate showing transfer price within compliant range. If price non-compliant, parties may need to adjust consideration or apply for RBI approval.",
    prevention: "For every share transfer involving foreign investor, obtain valuation certificate BEFORE transfer. File FC-TRS and FC-GPR within 60 days. Include FEMA compliance clause in share purchase agreement.",
  },
];

const COMPLIANCE_CHECKLIST = [
  {
    phase: "Pre-Investment Due Diligence",
    tasks: [
      "Verify investor's country of incorporation (not from restricted countries: Pakistan, Bangladesh, etc.)",
      "Check investor's KYC: passport, proof of address, PAN (if applicable), beneficial ownership details",
      "Confirm company's sector classification per FDI Policy (use DPIIT sectoral classification)",
      "Verify FDI route (automatic or government) and sectoral cap for company's sector",
      "If government route, obtain prior approval from DPIIT/FIPB before accepting funds",
      "Obtain valuation certificate from SEBI Category-I Merchant Banker or CA (10+ years) showing FMV",
      "Ensure investment price ≥ FMV (for equity/CCPS/CCD)",
      "Draft subscription agreement with FEMA compliance clauses (pricing, reporting, representations)",
    ],
    docs: "Investor KYC, valuation certificate, FDI Policy sectoral classification, subscription agreement",
  },
  {
    phase: "Receipt of FDI Funds",
    tasks: [
      "FDI funds must be received via banking channel (SWIFT/wire transfer) in Indian company's rupee account or EEFC account",
      "Bank issues FIRC (Foreign Inward Remittance Certificate) — obtain immediately",
      "Verify FIRC matches subscription agreement (amount, investor name, purpose)",
      "Update cap table with new investor shareholding (calculate pre-money, post-money valuation)",
      "Issue share certificates or instruments (CCPS/CCD) within 60 days of fund receipt per Companies Act",
      "Board resolution for allotment, file Form PAS-3 with MCA (if equity shares issued)",
    ],
    docs: "FIRC, bank statement, share certificate, Board resolution, Form PAS-3 (MCA filing)",
  },
  {
    phase: "Form FC-GPR Filing (within 30 days)",
    tasks: [
      "Login to RBI FIRMS portal (https://firms.rbi.org.in) with company credentials",
      "File Form FC-GPR reporting: investor details, amount received, instrument type, sectoral classification, pricing details",
      "Upload supporting documents: FIRC, valuation certificate, subscription agreement, KYC of investor",
      "Submit form and obtain acknowledgment number",
      "Monitor for any queries/objections from RBI (respond within 15 days if raised)",
      "If filing missed 30-day deadline, file immediately and apply for compounding (penalty waiver application)",
    ],
    docs: "FC-GPR acknowledgment, FIRC, valuation certificate, investor KYC, subscription agreement",
  },
  {
    phase: "Annual FLA Return Filing (by July 15)",
    tasks: [
      "Compile all FDI received during financial year (April 1 to March 31)",
      "Compile all foreign liabilities: FDI equity, foreign debt (ECB, trade credit), foreign assets held by company",
      "Compile downstream investment details (if company has invested in other Indian entities)",
      "File FLA Return on RBI FIRMS portal by July 15",
      "Attach supporting documents: audited financials, FIRC copies, downstream investment details",
      "Obtain acknowledgment and maintain copy for records",
    ],
    docs: "FLA Return acknowledgment, audited financials, FIRC, downstream investment schedule",
  },
  {
    phase: "Downstream Investment Compliance",
    tasks: [
      "Before investing in another Indian company, verify if investor company has FDI (if yes, it's downstream investment)",
      "Check investee's sector and FDI cap",
      "Calculate indirect FDI %: (FDI% in investor × Stake% in investee)",
      "Ensure investee's total FDI (direct + indirect) does not breach sectoral cap",
      "File Form DI on FIRMS within 30 days of investment",
      "Investee company must also report downstream investment in its FLA return",
    ],
    docs: "Form DI acknowledgment, investee's FDI cap verification, cap table showing direct + indirect FDI",
  },
  {
    phase: "Transfer of Shares / Secondary Sale",
    tasks: [
      "Obtain valuation certificate at transfer date showing FMV",
      "Ensure transfer price is within floor-ceiling range (Floor: lower of FMV or seller's acquisition price; Ceiling: higher of FMV or seller's acquisition price)",
      "Seller files Form FC-TRS within 60 days of transfer",
      "Buyer files Form FC-GPR within 60 days (if buyer is foreign investor acquiring shares)",
      "Attach valuation certificate, share transfer deed, consideration proof",
      "If transfer involves repatriation (seller is foreign and exiting), bank issues FORC (Foreign Outward Remittance Certificate)",
      "Ensure capital gains tax paid (seller's liability); attach tax payment proof to FC-TRS",
    ],
    docs: "FC-TRS acknowledgment, FC-GPR (if buyer is foreign), valuation certificate, share transfer deed, FORC (if repatriation), capital gains tax proof",
  },
  {
    phase: "Exit / Repatriation Compliance",
    tasks: [
      "Foreign investor exiting (selling shares or company buying back)",
      "File Form FC-TRS showing sale/buyback details",
      "Bank issues FORC for outward remittance",
      "Ensure capital gains tax paid by exiting investor (TDS deducted by buyer/company if applicable)",
      "Attach TDS certificate (Form 16A) and tax payment proof to FC-TRS",
      "RBI monitors repatriation for transfer pricing and tax compliance — ensure all docs in order",
    ],
    docs: "FC-TRS acknowledgment, FORC, TDS certificate (Form 16A), capital gains tax computation, buyback agreement (if buyback)",
  },
  {
    phase: "Annual FEMA Audit & Compliance Review",
    tasks: [
      "Appoint CA for annual FEMA compliance audit",
      "Review all FDI transactions during year: FC-GPR filings, FLA return, downstream investments, transfers",
      "Check for missed filings, late filings, non-compliant pricing",
      "If violations found, apply for compounding immediately",
      "Maintain FEMA compliance register: all filings, acknowledgments, certificates, correspondence with RBI",
      "Update board and investors on FEMA compliance status",
    ],
    docs: "FEMA audit report, compliance register, compounding applications (if any), board report",
  },
];

const ODI_BASICS = [
  {
    concept: "Overseas Direct Investment (ODI)",
    definition:
      "Investment by Indian company/resident in foreign entity (equity, debt, branch office). Governed by FEMA (Transfer or Issue of any Foreign Security) Regulations. Requires RBI reporting and compliance with LRS (Liberalised Remittance Scheme) limits if by individual.",
    example: "Indian startup sets up wholly-owned subsidiary in Singapore for SEA expansion → this is ODI, subject to RBI reporting.",
    compliance: "File Form ODI on FIRMS portal within 30 days of investment. Annual Performance Report (APR) due by June 30 each year.",
    icon: "🌏",
  },
  {
    concept: "ODI Routes: Automatic vs Approval",
    definition:
      "Automatic Route: Indian company can invest up to 400% of net worth without RBI approval. Approval Route: Investment >400% of net worth or in certain sectors (banking, financial services) requires RBI prior approval.",
    example: "Indian company with net worth ₹10 Cr can invest up to ₹40 Cr abroad (automatic route). Investment of ₹50 Cr requires RBI approval.",
    compliance: "Calculate net worth per latest audited financials. If exceeding 400%, apply for RBI approval before investment.",
    icon: "🚀",
  },
  {
    concept: "ODI Reporting: Form ODI and APR",
    definition:
      "Form ODI: Filed within 30 days of investment. APR (Annual Performance Report): Filed by June 30 each year, reporting financial performance of overseas entity, dividend/profit repatriated, any changes in investment.",
    example: "Indian company invests $500K in US subsidiary on Feb 1, 2026. Must file Form ODI by March 3, 2026. Must file APR by June 30, 2027 (for FY 2026-27).",
    compliance: "Form ODI and APR filed on RBI FIRMS portal. Late filing penalty: ₹5,000/day (Form ODI), ₹10,000/day (APR).",
    icon: "📊",
  },
  {
    concept: "Repatriation of Proceeds from ODI",
    definition:
      "Proceeds from sale/liquidation of overseas investment can be repatriated to India without limit (no LRS cap applies to corporate ODI repatriation). Must report to RBI on FIRMS.",
    example: "Indian company sells its Singapore subsidiary for $2M. Can repatriate full $2M to India (no cap). Must file Form ODI (exit) and report repatriation.",
    compliance: "File Form ODI showing divestment/exit. Bank issues certificate. Report in APR for that year.",
    icon: "💵",
  },
];

const FAQS = [
  {
    question: "Can a startup with 100% FDI (foreign-owned) invest in another Indian company?",
    answer:
      "Yes, a 100% FDI-owned Indian company can invest in another Indian company, but it is treated as 'downstream investment.' The investee company is deemed to have 100% indirect FDI (from the investor's foreign shareholders). This is allowed only if the investee's sector permits 100% FDI under automatic or government route. If investee's sector has a cap (e.g., insurance 74%), a 100% FDI company cannot invest beyond the cap. The investor must file Form DI within 30 days, and investee must report downstream FDI in its FLA return. This is a common compliance gap — many startups overlook downstream investment reporting, leading to penalties.",
  },
  {
    question: "What happens if FDI is received from a restricted country (e.g., Pakistan, China border areas)?",
    answer:
      "FDI from Pakistan, Bangladesh, and certain other countries is prohibited or requires government approval. FDI from China or entities with beneficial ownership from China requires prior government approval (Press Note 3 of 2020). If funds are received from such entities without approval, RBI will declare the investment invalid and demand refund within 90 days. Company and investor both face penalties (₹1-10 lakh). If company is unaware of investor's beneficial ownership (e.g., investor is Mauritius fund but ultimate owner is Chinese entity), company must conduct thorough KYC and UBO verification. Always disclose beneficial ownership in FC-GPR filing. If in doubt, obtain RBI/DPIIT clarification before accepting funds.",
  },
  {
    question: "Is ESOP issued to foreign employees considered FDI? Do pricing guidelines apply?",
    answer:
      "ESOP granted to foreign employees (non-residents) is treated as FDI under FEMA. However, RBI has relaxed pricing guidelines for ESOPs — startups can grant ESOPs to foreign employees at exercise price below FMV (as per company's ESOP scheme and board resolution), provided the scheme is SEBI SBEB compliant. When foreign employee exercises ESOP, company must file Form FC-GPR within 30 days of allotment of shares. Foreign employee becomes foreign shareholder, and total FDI% includes ESOP-based FDI. Company must ensure total FDI (including ESOP) does not breach sectoral cap. If employee later sells shares (repatriation), must file Form FC-TRS and pay capital gains tax. Best practice: Clearly document ESOP scheme, obtain board approval for ESOP to foreign employees, and monitor FDI% after each ESOP exercise.",
  },
  {
    question: "Can a startup raise convertible notes or SAFE from foreign investors? How is it treated under FEMA?",
    answer:
      "Convertible notes and SAFE (Simple Agreement for Future Equity) are NOT recognized instruments under FEMA. RBI treats them as debt (ECB — External Commercial Borrowing) until conversion. If treated as ECB, company must comply with ECB regulations (minimum maturity, end-use restrictions, all-in-cost caps). Most startups use Compulsorily Convertible Debentures (CCD) or Compulsorily Convertible Preference Shares (CCPS) instead, which are recognized under FEMA and treated as FDI (not debt). If foreign investor insists on convertible note/SAFE, structure it as CCD with similar terms (automatic conversion on next funding round, discount/valuation cap). At issuance, file Form FC-GPR reporting CCD as FDI instrument. On conversion, ensure conversion price ≥ FMV at conversion date (or grant date, whichever is higher). This avoids ECB complications and keeps it within FDI framework.",
  },
  {
    question: "What is the difference between FDI and FPI (Foreign Portfolio Investment)? Which applies to startups?",
    answer:
      "FDI (Foreign Direct Investment): Investment by foreign investor acquiring ≥10% stake or control/management influence in Indian company. Governed by FDI Policy, allows automatic route up to sectoral caps. FPI (Foreign Portfolio Investment): Investment by registered foreign portfolio investors (mutual funds, pension funds) acquiring <10% stake without control. Governed by SEBI FPI Regulations, allowed in listed companies up to sectoral cap. For unlisted startups, all foreign investment is treated as FDI (not FPI), regardless of stake%. Even 1% stake by foreign investor = FDI. Listed startups: foreign investors can invest as FPI (if registered with SEBI) or FDI (if acquiring ≥10% or seeking control). FPI route has simpler compliance (no FC-GPR, only reporting via custodian), but not available to unlisted startups. Since most Indian startups are unlisted, they deal only with FDI compliance, not FPI.",
  },
  {
    question: "Can FDI funds be used for any purpose, or are there restrictions?",
    answer:
      "FDI funds can be used for company's business activities as specified in its Memorandum of Association (MoA). General allowed uses: capital expenditure, working capital, R&D, acquisitions (subject to downstream investment rules), repayment of rupee loans (with RBI approval). Prohibited uses: (1) Real estate investment (unless company is in real estate development sector), (2) Stock market speculation, (3) Investing in chit funds, Nidhi companies, agricultural land (unless for specific permitted activities). If company uses FDI for prohibited purpose, RBI can demand refund, impose penalty, and bar future FDI. Best practice: Maintain separate bank account for FDI funds, use only for business purposes as per MoA, and document all fund utilization in board resolutions and financial statements.",
  },
  {
    question: "What is compounding under FEMA? When is it needed and how does it work?",
    answer:
      "Compounding is the process of settling FEMA violations by paying a penalty to RBI (instead of facing prosecution). Any person who violates FEMA provisions (late filing, non-filing, non-compliant pricing, breach of sectoral cap, etc.) can apply for compounding. Compounding fees: typically ₹25,000 to ₹5,00,000 depending on severity and delay. Application process: Submit application on RBI website (https://rbi.org.in → FEMA Compounding), pay fee, provide documents showing violation and corrective action taken. RBI reviews, may ask for clarification, and issues compounding order (penalty amount + interest). Once compounded, violation is settled (no prosecution). However, compounding does NOT erase the violation from record — repeated violations lead to higher penalties and can result in blacklisting from future FDI. Apply for compounding immediately upon discovering violation; don't wait for RBI notice (proactive compounding shows good faith and may result in lower penalty).",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FDI Compliance under FEMA for Indian Startups 2026: Complete Guide to Automatic Route, Sectoral Caps & Reporting",
  description:
    "A comprehensive guide to Foreign Direct Investment (FDI) compliance under FEMA for Indian startups — automatic vs government route, sectoral caps, pricing guidelines, Form FC-GPR filing, Annual FLA return, downstream investment rules, ODI compliance and common FEMA violations.",
  url: "https://www.taxvio.in/guide/roc/fdi-compliance-fema-startups",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/roc/fdi-compliance-fema-startups",
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
  wordCount: 4200,
  inLanguage: "en-IN",
  articleSection: "Startup Compliance",
  keywords: [
    "FDI compliance",
    "FEMA regulations",
    "automatic route",
    "FC-GPR filing",
    "FLA return",
    "downstream investment",
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
      name: "FDI Compliance under FEMA",
      item: "https://www.taxvio.in/guide/roc/fdi-compliance-fema-startups",
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

export default function FDIComplianceFEMAStartupsPage() {
  return (
    <>
      <Script
        id="fdi-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="fdi-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="fdi-faq-schema"
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
                  FDI Compliance under FEMA
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
                  Updated for 2026 · FEMA Compliance Framework
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  FDI Compliance under FEMA
                  <span className="block mt-2 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                    for Indian Startups
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Master <strong className="text-white">Foreign Direct Investment (FDI)</strong> compliance
                  under FEMA — automatic vs government route, sectoral caps, pricing guidelines,
                  <strong className="text-white">Form FC-GPR filing</strong>, Annual FLA return, downstream
                  investment rules, ODI compliance and how to avoid ₹1-25 lakh penalties for
                  non-compliance.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get FEMA Compliance Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#routes"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View Sectoral Caps <Globe size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  FDI at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      title: "Automatic Route: 100% FDI",
                      text: "Most sectors allow 100% FDI without prior approval — only post-facto FC-GPR filing",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Pricing: FMV or above",
                      text: "Investment must be at Fair Market Value per merchant banker/CA valuation certificate",
                    },
                    {
                      icon: FileText,
                      title: "FC-GPR: 30-day deadline",
                      text: "File within 30 days of FDI receipt — ₹5,000/day penalty for late filing (max ₹1L)",
                    },
                    {
                      icon: Calendar,
                      title: "FLA Return: July 15 annual",
                      text: "All companies with FDI must file by July 15 — ₹10,000/day penalty (no cap)",
                    },
                    {
                      icon: TrendingDown,
                      title: "Downstream Investment",
                      text: "Indian company with FDI investing in another Indian entity — Form DI + sectoral compliance",
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
                { icon: BadgeCheck, text: "CA-Assisted FEMA Filing" },
                { icon: Shield, text: "FC-GPR & FLA Compliance" },
                { icon: Clock, text: "Downstream Investment Support" },
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
                  Startup Foreign Investment Guide — 2026
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Why FEMA Compliance is Critical for Startups Raising Foreign Funding
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>Foreign Direct Investment (FDI)</strong> is the lifeblood of India's startup
                  ecosystem. Nearly 80% of Series A+ funding comes from foreign VCs, PEs, and angel
                  investors. But raising foreign capital comes with strict regulatory compliance under
                  <strong> FEMA (Foreign Exchange Management Act)</strong>.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Non-compliance is expensive: penalties range from ₹5,000/day for late FC-GPR filing
                  to ₹25 lakh+ for FLA non-filing or sectoral cap violations. Worse, RBI can declare
                  the investment invalid, forcing refunds and blacklisting the company from future FDI.
                  Yet, many startups ignore FEMA compliance until an RBI audit or investor exit triggers
                  scrutiny.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This guide covers: (1) FDI basics and routes, (2) Sectoral caps and prohibited sectors,
                  (3) Pricing guidelines (FMV rules), (4) FC-GPR and FLA filing timelines, (5) Downstream
                  investment compliance, (6) ODI (outbound investment) basics, and (7) Common FEMA
                  violations and how to avoid them.
                </p>

                <div className="mt-6">
                  <InfoBox title="RBI monitors ALL foreign investment — no transaction is too small" color="blue">
                    <p>
                      Even $10,000 FDI requires FC-GPR filing. RBI's FIRMS portal tracks every inward
                      remittance marked as FDI. Banks report FIRC (Foreign Inward Remittance Certificate)
                      details to RBI. If you don't file FC-GPR within 30 days, RBI's automated system flags
                      it and issues penalty notice. There is no "minimum threshold" exemption for FEMA
                      compliance.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* FDI BASICS */}
              <section id="basics" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Core concepts"
                  heading="FDI Basics — What Every Startup Founder Must Know"
                  icon={Globe}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Let's start with fundamental FDI concepts that govern all foreign investment in India:
                </p>

                <div className="space-y-4">
                  {FDI_BASICS.map(({ concept, definition, example, regulation, icon }) => (
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
                          <p className="text-xs leading-relaxed text-blue-700 font-semibold">
                            <strong>Regulation:</strong> {regulation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ROUTES AND CAPS */}
              <section id="routes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Sectoral limits"
                  heading="FDI Routes & Sectoral Caps — Automatic vs Government Approval"
                  icon={Landmark}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  India allows FDI in most sectors, but with varying caps and routes. Here are key sectors
                  relevant to startups:
                </p>

                <div className="space-y-4">
                  {ROUTES_AND_CAPS.map(({
                    sector,
                    route,
                    cap,
                    conditions,
                    example,
                    icon,
                    color,
                  }) => (
                    <div
                      key={sector}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-3xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800">{sector}</h4>
                          <div className="mt-2 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold">
                              <CheckCircle size={12} className="text-emerald-600" />
                              Route: {route}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold">
                              <Percent size={12} className="text-blue-600" />
                              Cap: {cap}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-gray-600">
                        <p>
                          <strong>Conditions:</strong> {conditions}
                        </p>
                        <p>
                          <strong>Example:</strong> {example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Sectoral classification is critical — misclassification causes violations" color="amber">
                    <p>
                      Many startups operate in multiple sectors (e.g., fintech = payments + lending + software).
                      You must identify your PRIMARY sector per FDI Policy sectoral classification. If you
                      classify as "Software" (100% FDI automatic) but actually operate as "NBFC - Lending"
                      (100% FDI automatic but requires RBI license), RBI can challenge classification and
                      demand compliance with NBFC norms. Always obtain CA/lawyer opinion on sectoral
                      classification BEFORE accepting FDI.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* PRICING GUIDELINES */}
              <section id="pricing" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Valuation compliance"
                  heading="Pricing Guidelines — Fair Market Value (FMV) Rules for FDI"
                  icon={DollarSign}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  All FDI in Indian companies must comply with pricing guidelines under Schedule 1 of
                  FEM (Non-Debt Instruments) Rules. Investment must be at or above Fair Market Value (FMV):
                </p>

                <div className="grid gap-4">
                  {PRICING_GUIDELINES.map(({
                    instrument,
                    pricingRule,
                    whoValues,
                    example,
                    violation,
                    icon,
                    color,
                  }) => (
                    <div
                      key={instrument}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <h4 className="text-sm font-extrabold text-gray-800">{instrument}</h4>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>
                          <strong>Pricing rule:</strong> {pricingRule}
                        </p>
                        <p>
                          <strong>Who determines FMV:</strong> {whoValues}
                        </p>
                        <p>
                          <strong>Example:</strong> {example}
                        </p>
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>Violation:</strong> {violation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Always obtain valuation certificate BEFORE closing FDI round" color="rose">
                    <p>
                      Many startups negotiate valuation with investors, close the round, receive funds, and
                      THEN try to get a valuation certificate. This is backwards and risky. Valuation
                      certificate must be dated BEFORE or within 90 days of investment date. If merchant
                      banker/CA values company at ₹50 Cr but you raised at ₹40 Cr (below FMV), you have
                      a FEMA violation. Get valuation done FIRST, set investment terms based on FMV, then
                      close round. Cost of valuation certificate: ₹50K-₹2L (depending on complexity).
                      Cost of FEMA violation: ₹1-5 lakh penalty + forced refund/rectification.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* COMPLIANCE TIMELINE */}
              <section id="timeline" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Filing deadlines"
                  heading="7-Stage FEMA Compliance Timeline — From FDI Receipt to Exit"
                  icon={Timer}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here is the complete compliance journey from receiving FDI to investor exit:
                </p>

                <div className="grid gap-4">
                  {COMPLIANCE_TIMELINE.map(({
                    event,
                    when,
                    action,
                    deadline,
                    penalty,
                    icon,
                    color,
                  }) => (
                    <div
                      key={event}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800 mb-1">{event}</h4>
                          <p className="text-xs text-gray-500 italic">{when}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>
                          <strong>Action:</strong> {action}
                        </p>
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>Deadline:</strong> {deadline}
                        </p>
                        <p className="text-rose-700 font-semibold">
                          <strong>Penalty:</strong> {penalty}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* DOWNSTREAM INVESTMENT */}
              <section id="downstream" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Indirect FDI"
                  heading="Downstream Investment Rules — When Indian Company with FDI Invests in Another Indian Entity"
                  icon={TrendingDown}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Downstream investment is one of the most overlooked FEMA compliance areas. Here's what
                  you need to know:
                </p>

                <div className="space-y-4">
                  {DOWNSTREAM_INVESTMENT_RULES.map(({
                    rule,
                    explanation,
                    example,
                    compliance,
                    icon,
                  }) => (
                    <div
                      key={rule}
                      className="rounded-2xl border border-gray-100 bg-white p-5"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <h4 className="text-sm font-extrabold text-gray-800">{rule}</h4>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>
                          <strong>Explanation:</strong> {explanation}
                        </p>
                        <p>
                          <strong>Example:</strong> {example}
                        </p>
                        <p className="text-blue-700 font-semibold">
                          <strong>Compliance:</strong> {compliance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Downstream investment Form DI filing is separate from FC-GPR" color="green">
                    <p>
                      Many startups think filing FC-GPR for their own FDI receipt is sufficient. But when
                      they invest in another Indian company (downstream investment), they must ALSO file
                      Form DI within 30 days. This is a separate filing on FIRMS portal. Non-filing penalty:
                      ₹5,000/day. If downstream investment causes investee to breach sectoral cap, both
                      investor and investee face penalty (₹5-10 lakh each) + forced divestment. Always
                      check investee's sectoral cap BEFORE investing.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* COMMON VIOLATIONS */}
              <section id="violations" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Pitfalls to avoid"
                  heading="6 Most Common FEMA Violations — And How to Fix Them"
                  icon={AlertTriangle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  These violations are surprisingly common and each can cost ₹50K to ₹25L+ in penalties:
                </p>

                <div className="space-y-4">
                  {COMMON_VIOLATIONS.map(({ violation, why, consequence, fix, prevention }) => (
                    <div
                      key={violation}
                      className="rounded-2xl border border-gray-100 bg-white p-5"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <XCircle size={18} className="text-rose-600 shrink-0 mt-0.5" />
                        <h4 className="text-sm font-extrabold text-rose-700">{violation}</h4>
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
                        <div className="flex items-start gap-2">
                          <Shield size={13} className="text-blue-600 shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-700">
                            <strong>Prevention:</strong> {prevention}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMPLIANCE CHECKLIST */}
              <section id="checklist" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step guide"
                  heading="8-Phase FEMA Compliance Checklist for Startups"
                  icon={FileCheck}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Complete checklist covering pre-investment due diligence through annual compliance:
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
                  <InfoBox title="Appoint dedicated FEMA compliance officer — don't rely on memory" color="green">
                    <p>
                      FEMA compliance has multiple 30-day, 60-day, and annual deadlines. Missing even one
                      triggers penalty. Best practice: Appoint one person (CFO, CA, or compliance officer)
                      responsible for ALL FEMA filings. Maintain FEMA compliance calendar with automated
                      reminders. Use FEMA compliance software or engage CA firm for annual compliance retainer
                      (cost: ₹50K-₹2L/year depending on transaction volume). This is cheaper than paying
                      ₹5-25 lakh in penalties + compounding fees for missed deadlines.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* ODI BASICS */}
              <section id="odi" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Outbound investment"
                  heading="ODI Compliance Basics — When Indian Startup Invests Abroad"
                  icon={Rocket}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  If your startup expands globally (sets up overseas subsidiary, acquires foreign company,
                  or invests in foreign entity), you must comply with ODI (Overseas Direct Investment) rules:
                </p>

                <div className="space-y-4">
                  {ODI_BASICS.map(({ concept, definition, compliance, example, icon }) => (
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
                          <p className="text-xs leading-relaxed text-blue-700 font-semibold">
                            <strong>Compliance:</strong> {compliance}
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
                      Need FEMA compliance support?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your FDI compliance
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team handles FC-GPR filing, FLA returns, valuation certificates, downstream
                      investment reporting, sectoral cap verification, and annual FEMA audit — complete
                      end-to-end compliance support.
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
                  heading="FDI Compliance under FEMA — FAQs"
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
                  education on FDI compliance under FEMA as of 2026. FEMA regulations change frequently
                  via RBI circulars, press notes, and FDI Policy updates. Specific compliance depends on
                  sector, investor country, investment structure, and transaction specifics. Always obtain
                  written advice from a qualified CA or FEMA consultant before accepting foreign investment
                  or filing FEMA returns. Taxvio is not liable for decisions made based on this article.
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
                      ["#basics", "FDI basics"],
                      ["#routes", "Routes & sectoral caps"],
                      ["#pricing", "Pricing guidelines"],
                      ["#timeline", "Compliance timeline"],
                      ["#downstream", "Downstream investment"],
                      ["#violations", "Common violations"],
                      ["#checklist", "Compliance checklist"],
                      ["#odi", "ODI basics"],
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
                  <h3 className="mt-4 text-base font-extrabold">FEMA compliance help?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get CA-assisted FC-GPR filing, FLA returns, valuation certificates and annual
                    FEMA audit support.
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
                    href: "/guide/roc/esop-pooling-structure-compliance",
                    label: "ESOP Compliance",
                    sub: "Section 43(5) & tax",
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
                  href: "/guide/roc/esop-pooling-structure-compliance",
                  title: "ESOP Pooling Structure & Tax Compliance",
                  text: "Section 43(5), perquisite tax, ESOT, vesting and complete compliance framework.",
                },
                {
                  href: "/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
                  title: "DPIIT Startup Recognition 2026",
                  text: "80-IAC tax exemption, self-certification, angel tax relief and application process.",
                },
                {
                  href: "/contact",
                  title: "Talk to a FEMA Compliance Expert",
                  text: "Get CA-assisted FC-GPR filing, FLA returns, valuation certificates and annual audit.",
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
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20with%20FDI%20compliance%20under%20FEMA`}
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