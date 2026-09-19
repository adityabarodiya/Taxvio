// app/guide/roc/shareholders-agreement-tax-implications/page.tsx

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
  Handshake,
  GavelIcon,
  Binary,
  Wallet,
  TrendingUpDown,
  CoinsIcon,
  ScrollText,
  Banknote,
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Shareholders Agreement Tax Implications 2026: Vesting, Tag-Along, Drag-Along, Buyback & Exit Tax Treatment | Taxvio",
  description:
    "Complete guide to tax implications of Shareholders Agreement provisions 2026 — vesting schedules, tag-along/drag-along rights, anti-dilution, founder buyback, exit clauses, sweat equity taxation, phantom stock, capital gains on share transfer, dividend distribution tax, Section 56(2)(viib) angel tax and compliance framework.",
  keywords: [
    "shareholders agreement tax implications",
    "vesting schedule taxation",
    "tag along drag along tax",
    "founder buyback tax",
    "sweat equity taxation India",
    "phantom stock tax treatment",
    "share transfer capital gains",
    "dividend distribution tax",
    "Section 56 angel tax",
    "anti-dilution tax",
    "exit clause taxation",
    "SHA compliance India",
    "startup SHA tax",
    "equity vesting tax",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/roc/shareholders-agreement-tax-implications",
  },
  openGraph: {
    title: "Shareholders Agreement Tax Implications 2026 — Complete Guide | Taxvio",
    description:
      "Vesting, tag-along, drag-along, buyback, exit taxation, sweat equity, phantom stock, capital gains, angel tax and complete tax compliance framework for Shareholders Agreements.",
    url: "https://www.taxvio.in/guide/roc/shareholders-agreement-tax-implications",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shareholders Agreement Tax Implications 2026",
    description:
      "Complete SHA tax guide — vesting, tag-along, drag-along, buyback, exit, sweat equity, phantom stock, capital gains and angel tax compliance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const SHA_BASICS = [
  {
    concept: "Shareholders Agreement (SHA)",
    definition:
      "Private contract between shareholders defining rights, obligations, transfer restrictions, governance, exit mechanisms, and dispute resolution. Not filed publicly (unlike AoA/MoA), binding only on signatories.",
    taxRelevance: "SHA provisions (vesting, buyback, exit, anti-dilution) trigger tax events — capital gains, perquisite tax, deemed dividend, angel tax (Section 56). Poor drafting = unintended tax liability.",
    example: "Founder A and Investor B sign SHA with 4-year vesting, tag-along rights, and buyback clause. Each clause has different tax treatment.",
    icon: "📄",
  },
  {
    concept: "Vesting Schedule",
    definition:
      "Timeline over which founder/employee equity becomes fully owned. Typical: 1-year cliff + 3-year monthly vesting. Unvested shares may be subject to buyback/forfeiture on exit.",
    taxRelevance: "Tax triggered at exercise (for options) or grant (for restricted stock). If vesting accelerates (e.g., on M&A), perquisite value taxed at slab rate (up to 42.74%).",
    example: "Founder granted 100,000 shares with 4-year vesting. After 2 years (50% vested), exits. Unvested 50,000 shares bought back by company at nominal value → no tax for founder. Vested 50,000 sold to investor → capital gains tax.",
    icon: "📅",
  },
  {
    concept: "Tag-Along Rights (Co-Sale Rights)",
    definition:
      "If majority shareholder sells stake, minority can 'tag along' and sell proportionate stake to same buyer at same price. Protects minority from being left with illiquid shares.",
    taxRelevance: "Tag-along sale is share transfer → capital gains tax (LTCG 20% if held >24 months unlisted, >12 months listed; STCG at slab rate). Valuation must comply with Section 50CA (deemed fair market value rules).",
    example: "Founder A (60%) sells to PE fund. Investor B (10%) exercises tag-along, sells 10% at same valuation. B pays capital gains tax on (Sale price - Cost of acquisition).",
    icon: "🤝",
  },
  {
    concept: "Drag-Along Rights",
    definition:
      "Majority shareholder can 'drag' minority shareholders to sell their stake when majority accepts acquisition offer. Ensures clean exit for acquirer (100% ownership).",
    taxRelevance: "Forced sale under drag-along is still voluntary transfer for tax purposes → capital gains tax. If sale price < FMV, IT Department may invoke Section 50CA (deemed FMV as sale consideration).",
    example: "Acquirer offers to buy company for ₹100 Cr. Majority accepts, drags minority to sell. Minority shareholder with ₹10L cost sells for ₹50L (prorata share). Capital gains = ₹50L - ₹10L = ₹40L, LTCG @ 20% = ₹8L tax.",
    icon: "🎯",
  },
  {
    concept: "Anti-Dilution Protection",
    definition:
      "Clause protecting investor from equity dilution on down rounds (next funding at lower valuation). Full ratchet: investor gets additional shares to maintain % ownership. Weighted average: partial adjustment.",
    taxRelevance: "Additional shares issued to investor under anti-dilution may trigger angel tax (Section 56(2)(viib)) if shares issued below FMV. Company must obtain valuation certificate. Investor's cost of acquisition = original investment (not adjusted for free shares).",
    example: "Investor paid ₹10 Cr for 20% (₹50 Cr valuation). Next round at ₹30 Cr (down round). Anti-dilution gives investor additional shares to maintain 20%. Tax: If shares issued at ₹30 Cr FMV but original was ₹50 Cr, no angel tax (down round justified). But investor's basis remains ₹10 Cr for both tranches (capital gains calculated on ₹10 Cr cost).",
    icon: "🛡️",
  },
  {
    concept: "Founder Buyback / Reverse Vesting",
    definition:
      "Company buys back unvested shares from exiting founder at nominal price (₹1-10/share). Prevents founder from retaining equity after leaving prematurely.",
    taxRelevance: "Buyback by company is deemed dividend (Section 2(22)(e)) if company has accumulated profits. Tax: Buyback proceeds - Original issue price = Deemed dividend, taxed at shareholder's slab rate (up to 42.74%). Company also pays Buyback Distribution Tax (BDT) @ 20% + surcharge (abolished from FY 2020-21 for unlisted companies, but dividend in hands of shareholder taxable).",
    example: "Founder holds 100,000 shares (₹1 par value). Leaves after 1 year. Company buys back 75,000 unvested shares at ₹10/share = ₹7.5L. Original cost: ₹75K. Deemed dividend = ₹7.5L - ₹75K = ₹6.75L. Tax @ 30% slab = ₹2.02L.",
    icon: "🔄",
  },
];

const KEY_CLAUSES_TAX_IMPACT = [
  {
    clause: "Vesting Schedule with Cliff",
    typical: "1-year cliff, then monthly vesting over 3 years (total 4 years)",
    taxEvent: "Grant: No tax if shares issued at FMV. Exercise (for options): Perquisite tax on (FMV - Exercise price). Sale: Capital gains on (Sale price - FMV at exercise).",
    planning: "Issue founder shares at par value (₹1-10) at incorporation to avoid high perquisite tax later. Use restricted stock (not options) for founders to minimize perquisite value. Ensure vesting schedule clear in SHA to avoid disputes on tax treatment of unvested shares.",
    pitfall: "Accelerated vesting on M&A: If SHA says 'all unvested shares vest on acquisition,' entire perquisite value taxed in year of acquisition (can be ₹10L-₹1Cr+ taxable income at slab rate).",
    example: "Founder granted 100K shares at ₹10 (FMV ₹10, no perquisite). After 2 years, M&A happens, SHA accelerates vesting. Remaining 50K shares vest when FMV = ₹500. Perquisite = (₹500 - ₹10) × 50K = ₹2.45 Cr. Tax @ 42.74% = ₹1.05 Cr.",
    icon: "📅",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    clause: "Tag-Along Rights (Co-Sale)",
    typical: "If majority sells >X% stake, minority can tag along at same price and terms",
    taxEvent: "Share sale → Capital gains tax. LTCG @ 20% if unlisted shares held >24 months, STCG at slab rate if <24 months.",
    planning: "Ensure tag-along price = Fair Market Value (FMV) per Section 50CA to avoid deemed FMV adjustment. Obtain valuation certificate from merchant banker/CA. Plan sale timing to meet 24-month holding period for LTCG benefit.",
    pitfall: "If tag-along price < FMV, IT Department can invoke Section 50CA and tax capital gains on FMV (not actual sale price), resulting in tax without corresponding cash receipt.",
    example: "Minority shareholder bought shares for ₹5L, held 3 years. Tags along in sale at ₹50L. FMV per valuation = ₹50L. Capital gain = ₹50L - ₹5L = ₹45L. LTCG @ 20% = ₹9L. But if sale price was ₹30L and FMV ₹50L, IT Department deems ₹50L as sale price, tax on ₹45L (but shareholder received only ₹30L — ₹6L tax on ₹25L actual gain).",
    icon: "🤝",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    clause: "Drag-Along Rights",
    typical: "Majority (>75%) can compel minority to sell on same terms in acquisition",
    taxEvent: "Forced sale treated as voluntary transfer for tax → Capital gains tax. Same LTCG/STCG treatment as tag-along.",
    planning: "Ensure SHA specifies drag-along price will be at FMV (certified by valuer) to avoid Section 50CA issues. Minority shareholders should negotiate minimum price floor to protect against undervalued exits.",
    pitfall: "If drag-along executed at below-market price (e.g., distress sale, founder favoritism), IT Department may question valuation and impose higher capital gains tax on deemed FMV.",
    example: "Acquirer buys company for ₹100 Cr (₹500/share). Minority shareholder with 10K shares (cost ₹10/share) dragged to sell. Sale price = ₹500/share = ₹50L. Capital gains = ₹50L - ₹1L = ₹49L. LTCG @ 20% = ₹9.8L.",
    icon: "🎯",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    clause: "Anti-Dilution Protection (Full Ratchet / Weighted Average)",
    typical: "If down round, investor gets additional shares to maintain % ownership or adjusted valuation",
    taxEvent: "Additional shares issued at lower valuation may trigger angel tax u/s 56(2)(viib) if FMV justification missing. Investor's cost basis remains original investment (no step-up for free shares).",
    planning: "Obtain fresh valuation certificate justifying down round (market conditions, revenue miss, etc.). Document reason for lower valuation in board resolution. For investor: No immediate tax on receiving anti-dilution shares (not income), but capital gains calculated on original cost.",
    pitfall: "If anti-dilution shares issued without valuation justification, IT Department may treat them as shares issued below FMV → company pays angel tax @ 30.9% on (FMV - Issue price) × Shares.",
    example: "Investor A invested ₹10 Cr for 20% at ₹50 Cr valuation (200K shares at ₹500/share). Down round at ₹30 Cr (₹300/share). Full ratchet: Investor gets additional 66.67K shares (total 266.67K shares = 20% of new cap). Tax: No immediate tax for investor. Company must show valuation drop justified (else angel tax on 66.67K × (₹500 - ₹300) = ₹1.33 Cr). Investor's cost = ₹10 Cr for all 266.67K shares (₹375/share average). On exit at ₹1000/share, capital gains = (₹1000 - ₹375) × 266.67K.",
    icon: "🛡️",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    clause: "Right of First Refusal (ROFR) / Right of First Offer (ROFO)",
    typical: "If shareholder wants to sell, must first offer to existing shareholders at same price",
    taxEvent: "No tax on ROFR/ROFO offer itself. Tax triggered only when actual sale happens (capital gains). If existing shareholders exercise ROFR and buy at offered price, seller pays capital gains on (Offer price - Cost).",
    planning: "ROFR/ROFO doesn't change tax treatment — still capital gains on sale. Ensure offer price is at FMV to avoid Section 50CA issues. If ROFR not exercised and shares sold to third party, same capital gains tax applies.",
    pitfall: "If ROFR price is set in SHA as 'book value' or 'par value' (common in old SHAs), but FMV is much higher, IT Department may invoke Section 50CA and tax capital gains on FMV, not book value.",
    example: "Shareholder offers to sell 10K shares at ₹500/share (book value) under ROFR. Existing shareholders don't buy. Shareholder sells to external investor at ₹500/share. Cost of acquisition = ₹50/share. Capital gains = (₹500 - ₹50) × 10K = ₹45L. LTCG @ 20% = ₹9L. But if FMV (per valuation) is ₹800/share, IT Department may deem sale at ₹800 → capital gains = ₹75L → tax ₹15L (on ₹45L actual cash received).",
    icon: "🔐",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    clause: "Founder Buyback on Exit (Reverse Vesting)",
    typical: "If founder leaves before vesting completes, company buys back unvested shares at nominal price (₹1-10/share)",
    taxEvent: "Buyback by company treated as deemed dividend u/s 2(22)(e) if company has accumulated profits. Tax = Buyback proceeds - Original cost, taxed at shareholder's slab rate.",
    planning: "Structure as cancellation (not buyback) if possible to avoid deemed dividend treatment. Alternatively, issue shares at higher price initially (₹100 vs ₹1) so buyback at ₹100 results in zero gain. Ensure SHA specifies buyback price mechanism to avoid disputes.",
    pitfall: "If company buys back at ₹1/share when FMV is ₹500/share, IT Department may question whether it's genuine buyback or gift/benefit to remaining shareholders. Also, if company has profits, entire buyback proceeds (not just gain) may be deemed dividend.",
    example: "Founder holds 100K shares (par ₹1, total ₹1L). Leaves after 1 year. Company buys back 75K unvested shares at ₹10/share = ₹7.5L. Original cost ₹75K. Deemed dividend = ₹7.5L - ₹75K = ₹6.75L. Tax @ 30% = ₹2.02L. If company has accumulated profits of ₹10 Cr, entire ₹7.5L may be deemed dividend (not just ₹6.75L gain).",
    icon: "🔄",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    clause: "Sweat Equity / Phantom Stock Provision",
    taxEvent: "Sweat equity: Shares issued to employees/directors for services (not cash). Tax = FMV of shares on issue date, treated as perquisite (salary income) taxed at slab rate. Phantom stock: Cash bonus based on notional equity value, taxed as salary.",
    planning: "For sweat equity: Issue at low FMV early (minimize perquisite). Obtain valuation certificate. File requisite forms with ROC. For phantom stock: Structure as performance bonus (deductible for company), taxed as salary for employee.",
    pitfall: "Sweat equity issued without valuation certificate → IT Department may deem FMV based on comparable companies, resulting in huge perquisite tax. Phantom stock without clear SHA documentation → dispute on valuation and tax treatment.",
    example: "Company issues 10K sweat equity shares (FMV ₹500/share per valuation) to CTO for services. Perquisite value = ₹50L. Tax @ 42.74% (assuming high earner) = ₹21.37L. CTO has ₹21.37L tax liability without any cash receipt. On future sale at ₹1000/share, capital gain = (₹1000 - ₹500) × 10K = ₹50L, LTCG @ 20% = ₹10L.",
    icon: "💎",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
];

const CAPITAL_GAINS_SCENARIOS = [
  {
    scenario: "Long-Term Capital Gains (LTCG) on Unlisted Shares (Held >24 months)",
    holding: ">24 months from date of acquisition",
    taxRate: "20% + surcharge + cess (effective ~23.92% for high earners) with indexation benefit",
    computation: "Capital Gain = (Sale Price - Indexed Cost of Acquisition - Indexed Cost of Improvement). Indexed Cost = Cost × (CII of sale year / CII of purchase year).",
    example: "Shares purchased in Jan 2022 for ₹10L. CII FY 2021-22 = 317. Sold in Jan 2026 for ₹50L. CII FY 2025-26 = 363 (assumed). Indexed Cost = ₹10L × (363/317) = ₹11.45L. Capital Gain = ₹50L - ₹11.45L = ₹38.55L. LTCG @ 20% = ₹7.71L.",
    shaConsideration: "Ensure SHA allows holding period to exceed 24 months (no forced sale clauses within 24 months). For tag-along/drag-along, negotiate timing to meet LTCG threshold.",
    icon: "📈",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    scenario: "Short-Term Capital Gains (STCG) on Unlisted Shares (Held ≤24 months)",
    holding: "≤24 months from date of acquisition",
    taxRate: "Taxed at individual slab rate (up to 42.74%) or company rate (25-30%) — no indexation benefit",
    computation: "Capital Gain = Sale Price - Cost of Acquisition - Cost of Improvement. No indexation.",
    example: "Shares purchased in Jan 2025 for ₹10L. Sold in Dec 2025 for ₹30L (held 11 months). Capital Gain = ₹30L - ₹10L = ₹20L. STCG @ 30% slab (individual) = ₹6L or @ 25% (Pvt Ltd company shareholder) = ₹5L.",
    shaConsideration: "SHA should avoid forced exits within 24 months (drag-along, buyback) unless tax impact accepted. Founders selling early pay much higher tax (STCG vs LTCG).",
    icon: "⏱️",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    scenario: "LTCG on Listed Shares (Held >12 months)",
    holding: ">12 months from date of acquisition",
    taxRate: "10% above ₹1 lakh (no indexation) OR 20% with indexation (whichever is lower) — for shares sold on or after Apr 1, 2018",
    computation: "Capital Gain = Sale Price - Cost of Acquisition. If gain >₹1L, excess taxed @ 10%. Or calculate with indexation @ 20% and take lower tax.",
    example: "Listed shares bought for ₹5L in 2023, sold for ₹15L in 2026 (held 3 years). Capital Gain = ₹10L. Tax: Option 1: (₹10L - ₹1L) × 10% = ₹90K. Option 2: With indexation (if beneficial). Lower of two applies.",
    shaConsideration: "If company plans IPO, SHA should clarify lock-in period and treatment of pre-IPO shares (DII, FII have different lock-ins). Post-IPO sales enjoy listed LTCG treatment (12 months, 10% tax).",
    icon: "📊",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    scenario: "Sale to Related Party / Below Fair Market Value (Section 50CA Risk)",
    holding: "Any holding period",
    taxRate: "IT Department may invoke Section 50CA: if sale price < stamp duty value (or FMV if no stamp duty), deemed sale price = FMV. Capital gains calculated on FMV, not actual price.",
    computation: "If Sale Price < FMV, Capital Gain = (FMV - Cost) for tax purposes (even if actual cash received is less).",
    example: "Shares sold to co-founder for ₹20L (actual transaction). FMV per valuation = ₹50L. IT Department invokes Section 50CA: Capital Gain = ₹50L - ₹10L (cost) = ₹40L. LTCG @ 20% = ₹8L. Seller receives only ₹20L but pays tax on ₹40L gain.",
    shaConsideration: "SHA should mandate all share transfers at FMV (certified by valuer) to avoid Section 50CA. ROFR/ROFO price should be FMV, not 'book value' or 'par value.'",
    icon: "⚠️",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    scenario: "Buyback by Company (Deemed Dividend u/s 2(22)(e))",
    holding: "N/A (not capital gains, treated as dividend)",
    taxRate: "Buyback proceeds - Original cost = Deemed dividend. Taxed at shareholder's slab rate (up to 42.74%). No LTCG/STCG treatment.",
    computation: "Deemed Dividend = Buyback Price - Original Issue Price. If company has accumulated profits, entire buyback proceeds may be deemed dividend.",
    example: "Shareholder sells 10K shares back to company at ₹500/share = ₹50L. Original cost = ₹10/share = ₹1L. Deemed dividend = ₹50L - ₹1L = ₹49L. Tax @ 42.74% = ₹20.94L.",
    shaConsideration: "SHA should avoid buyback clauses unless tax impact is understood. Better to structure as 'sale to other shareholders' (capital gains treatment) vs 'company buyback' (deemed dividend).",
    icon: "🔄",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
];

const ANGEL_TAX_SHA = [
  {
    provision: "Investment by Foreign VC/PE at Premium",
    angelTaxRisk: "Section 56(2)(viib) applies ONLY to resident investors. Foreign investors (non-residents) exempt from angel tax on shares issued at premium.",
    compliance: "Obtain FEMA compliance (FC-GPR filing). No angel tax risk for foreign investment (even if premium is high). But if foreign investor later transfers shares to Indian resident at premium, Indian buyer may face angel tax.",
    example: "Singapore VC invests ₹10 Cr for 10% at ₹100 Cr valuation (₹90 Cr premium). No angel tax (foreign investor exempt). Company files FC-GPR with RBI.",
    shaClause: "SHA should clarify: 'Investment by foreign investors shall comply with FEMA and RBI regulations. Investor represents it is non-resident for Indian tax purposes.'",
    icon: "🌍",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    provision: "Investment by Indian Angel/HNI at Premium",
    angelTaxRisk: "HIGH risk. If shares issued at premium > Fair Market Value (FMV), company pays angel tax @ 30.9% on (Premium - FMV).",
    compliance: "MUST obtain valuation certificate from merchant banker (SEBI Category-I) showing FMV ≥ Issue Price. Safe harbor exemptions: DPIIT-registered startups, investment by VC/AIF (SEBI registered), consideration <₹25 Cr in FY.",
    example: "Indian angel invests ₹50L for 5% at ₹10 Cr valuation. FMV per valuation = ₹8 Cr. Premium = ₹50L - (₹8 Cr × 5%) = ₹50L - ₹40L = ₹10L excess. Angel tax = ₹10L × 30.9% = ₹3.09L (company pays, not investor).",
    shaClause: "SHA should include: 'Company shall obtain valuation certificate from SEBI-registered merchant banker prior to allotment. Company represents shares issued at or below FMV. Company indemnifies investor against any angel tax liability.'",
    icon: "🎯",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    provision: "DPIIT Startup Recognition Exemption",
    angelTaxRisk: "If company is DPIIT-recognized startup, exempt from Section 56(2)(viib) angel tax (for investments up to ₹25 Cr aggregate per year).",
    compliance: "Apply for DPIIT recognition on Startup India portal. Upload incorporation certificate, pitch deck, innovative business description. Recognition valid till 10 years from incorporation. Must file Form 2 with IT Department claiming exemption.",
    example: "Startup recognized by DPIIT raises ₹5 Cr from Indian angel at ₹50 Cr valuation (₹4.5 Cr premium). Even if FMV is ₹30 Cr, no angel tax (DPIIT exemption). Company files Form 2 with ITR.",
    shaClause: "SHA should state: 'Company represents it is DPIIT-recognized startup (Certificate No. XXXXX dated XXXX) and exempt from angel tax u/s 56(2)(viib) for investments up to ₹25 Cr per FY.'",
    icon: "🚀",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    provision: "Investment by SEBI-Registered VC Fund / AIF (Cat-I)",
    angelTaxRisk: "ZERO risk. Investments by SEBI-registered Venture Capital Funds (VCF) or Alternative Investment Funds (AIF Category-I/II) are exempt from Section 56(2)(viib).",
    compliance: "Obtain copy of investor's SEBI registration certificate. Attach to SHA and company records. No valuation certificate needed for angel tax (but recommended for pricing guidelines compliance).",
    example: "AIF invests ₹20 Cr for 20% at ₹100 Cr valuation. No angel tax (SEBI-registered AIF exempt). Company keeps SEBI certificate on file.",
    shaClause: "SHA should include: 'Investor represents it is SEBI-registered [AIF Category-I / VCF] (Registration No. XXXXX). Investment is exempt from angel tax u/s 56(2)(viib).'",
    icon: "🏦",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    provision: "Anti-Dilution Shares Issued Below FMV",
    angelTaxRisk: "If anti-dilution clause triggers issuance of shares at below-market price (down round), may attract angel tax if FMV not justified.",
    compliance: "Obtain fresh valuation certificate justifying lower valuation (down round due to market conditions, revenue miss, etc.). Document board resolution explaining anti-dilution trigger. Show FMV at down round = Issue Price.",
    example: "Original investment at ₹50 Cr valuation. Down round at ₹30 Cr. Anti-dilution gives investor additional shares at ₹30 Cr equivalent. Valuation report shows FMV = ₹30 Cr (justified by poor performance). No angel tax.",
    shaClause: "SHA should specify: 'Anti-dilution shares issued pursuant to down round shall be at Fair Market Value as determined by independent valuer. Company shall obtain valuation certificate within 30 days of issuance.'",
    icon: "🛡️",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
];

const COMPLIANCE_CHECKLIST = [
  {
    phase: "SHA Drafting & Negotiation (Pre-Signing)",
    tasks: [
      "Engage experienced startup lawyer to draft SHA (not generic template)",
      "Tax review: Have CA review all SHA clauses for tax implications (vesting, buyback, exit, anti-dilution, sweat equity)",
      "Valuation: Obtain valuation certificate from SEBI merchant banker/CA (10+ years) showing FMV for share issuance",
      "DPIIT recognition: If startup, apply for DPIIT recognition to claim angel tax exemption",
      "FEMA compliance: For foreign investors, ensure SHA complies with FDI Policy (sectoral caps, pricing guidelines)",
      "Angel tax planning: If Indian investor, ensure issue price ≤ FMV or claim exemption (DPIIT/SEBI VC/AIF)",
      "Include tax indemnity clauses: Who bears tax liability if IT Department challenges valuation or treatment",
    ],
    docs: "SHA draft, valuation certificate, DPIIT certificate (if applicable), SEBI registration certificate (if investor is VC/AIF), tax opinion from CA",
  },
  {
    phase: "Execution & Share Issuance",
    tasks: [
      "SHA signed by all parties with wet signatures or digital signatures (as per SHA terms)",
      "Board resolution approving SHA, share issuance, and valuation",
      "Allotment of shares: Issue share certificates, update cap table, file Form PAS-3 with MCA (within 30 days)",
      "Payment receipt: Receive investment amount in company bank account, issue receipt",
      "FEMA compliance: For foreign investment, file Form FC-GPR with RBI (within 30 days of receipt)",
      "Angel tax filing: If Indian investor and DPIIT-exempted, file Form 2 with ITR declaring exemption",
      "Stamp duty payment: SHA is a contract — may attract stamp duty in some states (Maharashtra, Karnataka). Pay stamp duty and get SHA stamped.",
    ],
    docs: "Signed SHA (stamped copy), board resolution, Form PAS-3 acknowledgment, share certificates, payment receipt, FC-GPR acknowledgment (if foreign investment), Form 2 (if DPIIT exemption)",
  },
  {
    phase: "Ongoing Compliance (Annual/Event-Based)",
    tasks: [
      "Vesting tracking: Maintain vesting schedule register for all shareholders. Update monthly/quarterly.",
      "ROFR/ROFO compliance: If shareholder wants to sell, ensure ROFR/ROFO process followed (offer to existing shareholders first). Document offers and responses.",
      "Buyback execution: If SHA allows buyback, ensure board resolution, shareholder approval (special resolution if required), RBI approval (if foreign shareholder), and tax treatment (deemed dividend vs capital gains).",
      "Tag-along/Drag-along: If majority sells, notify minority of tag-along rights. For drag-along, issue formal notice to minority shareholders.",
      "Anti-dilution: If down round, calculate anti-dilution shares, obtain fresh valuation, issue shares, and file MCA forms.",
      "Annual disclosure: In annual financials, disclose SHA existence in Notes to Accounts (required for audit and Companies Act compliance).",
    ],
    docs: "Vesting register, ROFR/ROFO offer letters, buyback board resolution + RBI approval (if applicable), tag-along/drag-along notices, anti-dilution calculation and valuation certificate, Notes to Accounts",
  },
  {
    phase: "Exit Event (M&A, IPO, Buyback)",
    tasks: [
      "Tax planning: Calculate capital gains for all selling shareholders (LTCG vs STCG). Plan timing to meet 24-month holding for LTCG.",
      "Valuation certificate: Obtain FMV certificate at exit date to comply with Section 50CA (avoid deemed FMV issues).",
      "SHA termination/amendment: On M&A/IPO, SHA may terminate or require amendment (acquirer may want new SHA). Document SHA termination in writing.",
      "Withholding tax: If foreign shareholder exits, deduct TDS on capital gains (10-20% depending on treaty). Issue Form 16A.",
      "Disclosure: File requisite forms with MCA (e.g., Form MGT-14 for special resolutions, Form SH-4 for share transfer).",
      "ITR filing: All exiting shareholders must report capital gains in ITR. Attach SHA, sale agreement, valuation certificate, and TDS certificate.",
    ],
    docs: "Exit valuation certificate, capital gains computation, SHA termination agreement, TDS Form 16A (if foreign shareholder), Form MGT-14/SH-4 (MCA filings), ITR with capital gains schedule",
  },
  {
    phase: "Dispute Resolution (If SHA Breach or Tax Scrutiny)",
    tasks: [
      "SHA breach: Follow dispute resolution mechanism in SHA (arbitration, mediation, jurisdiction clause). Engage lawyer.",
      "IT scrutiny: If IT Department questions valuation, perquisite tax, angel tax, or capital gains treatment, respond with: SHA copy, valuation certificate, board resolutions, and CA opinion.",
      "Compounding: If angel tax demand issued, consider filing compounding application (settling violation by paying penalty). Engage tax lawyer.",
      "Reassessment: If capital gains disallowed or recomputed, file appeal with CIT(A) within 30 days. Attach SHA and all supporting documents.",
      "Penalty avoidance: Show bonafide belief in tax position (valuation certificate, CA opinion, legal opinion) to avoid penalty u/s 270A.",
    ],
    docs: "SHA, valuation certificates, board resolutions, CA/legal opinion, correspondence with IT Department, appeal filing, compounding application (if applicable)",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "SHA allows accelerated vesting on M&A without considering perquisite tax impact",
    why: "Many SHAs have clause: 'On Change of Control, all unvested shares vest immediately.' Sounds good for founders, but creates massive perquisite tax liability if FMV is high at M&A.",
    consequence: "Founder with 50K unvested shares (FMV ₹1000/share, cost ₹10) has perquisite income of ₹4.95 Cr. Tax @ 42.74% = ₹2.12 Cr. Founder receives no cash (shares not sold, just vested), but owes ₹2.12 Cr in tax. May need to sell shares immediately to pay tax (forced liquidation).",
    fix: "Amend SHA to say: 'On Change of Control, unvested shares may be accelerated at sole discretion of board, considering tax impact on founder.' Or: 'Acceleration only if founder consents in writing acknowledging tax liability.'",
    prevention: "Before signing SHA, model tax impact of accelerated vesting at various FMV scenarios (₹100/share, ₹500/share, ₹1000/share). If tax unaffordable, remove acceleration clause.",
  },
  {
    mistake: "ROFR/ROFO price set at 'book value' or 'par value' in SHA",
    why: "Old template SHAs often say: 'ROFR price = Book Value per latest audited financials' or 'Par Value (₹10/share).' This was to keep price low for easy transfers, but creates Section 50CA risk.",
    consequence: "Shareholder sells at book value ₹100/share, but FMV is ₹500/share. IT Department invokes Section 50CA: Capital gains calculated on ₹500/share (deemed FMV). Seller pays tax on ₹400/share gain even though actual cash received is zero gain (if cost = book value).",
    fix: "Amend SHA to: 'ROFR/ROFO price shall be Fair Market Value as determined by independent SEBI-registered merchant banker within 30 days of offer.' Get valuation certificate for every transfer.",
    prevention: "NEVER use book value or par value for share transfer pricing in SHA. Always use FMV or formula linked to latest funding round valuation.",
  },
  {
    mistake: "Anti-dilution shares issued without fresh valuation certificate",
    why: "Down round triggers anti-dilution. Company issues additional shares to investor but doesn't obtain valuation certificate showing lower FMV is justified.",
    consequence: "IT Department treats anti-dilution shares as issued below FMV → angel tax on (Original FMV - Down round FMV) × Anti-dilution shares. Company pays ₹1-5 Cr angel tax + penalty.",
    fix: "Immediately obtain valuation certificate from merchant banker justifying down round FMV. Document reasons: revenue miss, market downturn, competition, etc. File valuation report with ITR.",
    prevention: "SHA should mandate: 'Anti-dilution adjustment shall only be made after company obtains valuation certificate from SEBI-registered merchant banker showing Fair Market Value at time of adjustment.' Make it investor's obligation to cooperate (not demand anti-dilution without valuation).",
  },
  {
    mistake: "Founder buyback at nominal value without considering deemed dividend treatment",
    why: "SHA says: 'On founder exit, company shall buy back unvested shares at ₹1/share.' Seems fair (founder loses unvested equity), but creates deemed dividend tax if company has profits.",
    consequence: "Company buys back 50K shares at ₹1/share = ₹50K total. Original cost to founder = ₹50K. Deemed dividend = ₹50K - ₹50K = ₹0? NO. If company has accumulated profits, IT Department may treat ENTIRE ₹50K as deemed dividend (not just gain). Founder pays ₹15K-₹21K tax (30-42% slab) on ₹50K.",
    fix: "Structure as cancellation (not buyback): 'Unvested shares shall be cancelled and extinguished without consideration.' Or: 'Unvested shares shall be transferred to ESOP pool for re-grant.' Avoids deemed dividend treatment.",
    prevention: "Consult CA before finalizing buyback clause in SHA. If company has accumulated profits, avoid buyback mechanism. Use cancellation or re-grant to ESOP pool instead.",
  },
  {
    mistake: "SHA signed but not stamped — invalid and unenforceable",
    why: "SHA is a contract. In many states (Maharashtra, Karnataka, Gujarat, etc.), SHA attracts stamp duty (0.1-0.5% of share value). If not stamped within 30 days of execution, SHA is inadmissible as evidence in court.",
    consequence: "Investor and founder dispute arises. Court rejects SHA as evidence (not stamped). Cannot enforce tag-along, ROFR, vesting, or any SHA clause. Investor loses protection.",
    fix: "Immediately get SHA stamped. Pay stamp duty in state where company is registered. Obtain stamped copy from Sub-Registrar or use e-stamping portal. Retrospective stamping allowed with penalty (usually 2-10x stamp duty).",
    prevention: "Before signing SHA, check stamp duty rate in company's state. Pay stamp duty within 30 days of execution. Get physical stamped copy or e-stamp certificate. Keep stamped SHA in company records and give copy to all shareholders.",
  },
  {
    mistake: "No tax indemnity clause in SHA — dispute on who pays angel tax or capital gains tax adjustment",
    why: "SHA doesn't specify who bears tax liability if IT Department challenges valuation, angel tax arises, or Section 50CA adjustment happens. Investor and company blame each other.",
    consequence: "Angel tax demand of ₹50L issued to company. Company says investor should pay (since investor benefited from shares). Investor says company's fault (didn't get proper valuation). Dispute goes to arbitration, costing ₹5-10L legal fees + relationship breakdown.",
    fix: "Add tax indemnity clause in SHA: 'Company shall obtain valuation certificate from SEBI merchant banker and indemnify investor against any angel tax, perquisite tax, or capital gains tax adjustment arising from incorrect valuation. Investor shall indemnify company if investor's misrepresentation (e.g., fake SEBI AIF certificate) causes tax liability.'",
    prevention: "Always include comprehensive tax indemnity and representation clause in SHA. Specify: (1) Company's obligation to get valuation, (2) Investor's representation on tax status (resident/non-resident, SEBI-registered, etc.), (3) Who bears tax if IT Department challenges, (4) Mechanism for reimbursement.",
  },
];

const FAQS = [
  {
    question: "Does a Shareholders Agreement need to be filed with MCA or ROC? Is it a public document?",
    answer:
      "No, SHA is a private contract between shareholders. It does NOT need to be filed with MCA/ROC (unlike Articles of Association or Memorandum of Association, which are public). SHA is confidential and binding only on signatories. However, if SHA contains provisions that contradict AoA (e.g., different voting rights), AoA must be amended via special resolution and filed with MCA (Form MGT-14). Also, auditor may ask for SHA copy during annual audit to verify related party transactions, shareholding disclosures, and compliance with Companies Act. Best practice: Keep SHA confidential but disclose existence in Notes to Accounts ('Company has entered into Shareholders Agreement with certain shareholders governing transfer restrictions, ROFR, tag-along, and exit rights').",
  },
  {
    question: "If SHA has vesting clause and founder leaves before full vesting, can the company buy back shares at any price?",
    answer:
      "SHA can specify buyback price for unvested shares (typically ₹1-10/share or par value), but tax treatment depends on Companies Act and Income Tax Act, not SHA. Under Companies Act, company buyback requires board resolution + shareholder approval (special resolution if buyback >10% paid-up capital). Under Income Tax Act, buyback proceeds are treated as deemed dividend u/s 2(22)(e) if company has accumulated profits. So even if SHA says ₹1/share buyback, and company has profits, founder may pay tax on deemed dividend (buyback price - original cost). For unlisted companies, Buyback Distribution Tax (BDT) was abolished from FY 2020-21, but dividend in hands of shareholder is taxable at slab rate. Best approach: Instead of buyback, SHA should provide for cancellation or transfer to ESOP pool to avoid deemed dividend treatment. Consult CA before executing buyback.",
  },
  {
    question: "Are tag-along and drag-along rights taxable events by themselves, or only when shares are actually sold?",
    answer:
      "Tag-along and drag-along RIGHTS (mere contractual rights in SHA) are not taxable events. Tax is triggered only when shares are ACTUALLY sold pursuant to tag-along/drag-along. At that point, seller pays capital gains tax on (Sale price - Cost of acquisition). LTCG @ 20% with indexation if held >24 months (unlisted), STCG at slab rate if held ≤24 months. Important: Even if sale is 'forced' via drag-along, it is treated as voluntary transfer for tax purposes. If sale price is below FMV, IT Department may invoke Section 50CA and deem sale at FMV for capital gains calculation (resulting in tax without equivalent cash receipt). Ensure SHA specifies tag-along/drag-along price will be at Fair Market Value (certified by independent valuer) to avoid Section 50CA risk.",
  },
  {
    question: "Can SHA specify that investor's shares are exempt from angel tax? Is such a clause valid?",
    answer:
      "SHA can include representations and warranties by investor (e.g., 'Investor represents it is SEBI-registered AIF Category-I and investment is exempt from angel tax u/s 56(2)(viib)'). But SHA cannot CREATE exemption — exemption must exist under Income Tax Act. Valid exemptions: (1) Investment by non-resident (foreign investor), (2) Investment by SEBI-registered VC/AIF, (3) Investment in DPIIT-recognized startup (up to ₹25 Cr per FY), (4) Issue price ≤ FMV per valuation certificate. If investor falsely represents exemption (e.g., fake SEBI certificate) and angel tax arises, SHA should have indemnity clause: 'Investor shall indemnify company for any angel tax, penalty, or interest arising from investor's misrepresentation.' This protects company. But ultimately, angel tax is company's liability (not investor's) under Section 56(2)(viib), so company must verify investor's exemption claim before relying on it.",
  },
  {
    question: "What happens if SHA says shares will vest over 4 years, but founder wants to leave after 2 years and sell all shares?",
    answer:
      "It depends on SHA terms. Typical SHA has: (1) Vesting schedule: 25% after 1 year (cliff), then 1/36th per month for next 3 years. (2) Leaver provisions: If founder leaves, unvested shares are subject to buyback/cancellation by company (at nominal price), vested shares can be sold (subject to ROFR/tag-along). If founder leaves after 2 years, typically 50% vested (can be sold), 50% unvested (bought back/cancelled). For vested shares, founder must follow ROFR (offer to existing shareholders first at FMV). If they don't buy, founder can sell to external party. Capital gains tax on sale: LTCG @ 20% if held >24 months, STCG at slab if <24 months. For unvested shares, if company buys back at nominal price, deemed dividend tax applies if company has profits. If shares are cancelled (no consideration), no tax for founder. SHA cannot override tax law — even if SHA says 'no tax on buyback,' deemed dividend tax still applies if conditions met.",
  },
  {
    question: "Does sweat equity issued under SHA trigger immediate tax for the recipient, even if shares are not sold?",
    answer:
      "Yes. Sweat equity (shares issued for services, not cash) is treated as perquisite (salary income) under Section 17 of Income Tax Act. Tax is triggered at grant (when shares are issued), not at sale. Perquisite value = Fair Market Value of shares on issue date. This is taxed at recipient's slab rate (up to 42.74%). Recipient pays tax WITHOUT any cash receipt (shares are illiquid, cannot be sold immediately). Example: Company issues 10K sweat equity shares (FMV ₹500/share per valuation) to CTO. Perquisite = ₹50L. Tax @ 42.74% = ₹21.37L. CTO has ₹21.37L tax liability in that FY (must arrange cash to pay tax). On future sale, capital gains = (Sale price - ₹500 cost) × shares. LTCG @ 20% if held >24 months. To minimize tax: Issue sweat equity when FMV is low (early-stage startup), issue restricted stock (not options) with vesting (but still taxed at grant), or use phantom stock (cash bonus based on equity value, taxed as salary but company pays cash, so recipient has funds for tax).",
  },
  {
    question: "If anti-dilution clause in SHA gives investor free shares on down round, does investor pay tax on those shares?",
    answer:
      "No immediate tax for investor. Anti-dilution shares are not treated as income or gift for investor (they are contractual adjustment for down round protection). However, investor's cost of acquisition remains original investment amount (not adjusted for anti-dilution shares). Example: Investor paid ₹10 Cr for 200K shares (₹500/share). Down round triggers anti-dilution, investor gets additional 66.67K shares (total 266.67K shares). Investor's cost basis = ₹10 Cr for all 266.67K shares (average ₹375/share). On exit at ₹1000/share, capital gains = (₹1000 - ₹375) × 266.67K = ₹16.67 Cr. LTCG @ 20% = ₹3.33 Cr. For company: Anti-dilution shares must be issued at Fair Market Value (with valuation certificate) to avoid angel tax. If down round is not justified (no valuation certificate), IT Department may treat anti-dilution shares as issued below FMV → company pays angel tax on (Original FMV - Down round FMV) × Anti-dilution shares.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shareholders Agreement Tax Implications 2026: Complete Guide to Vesting, Tag-Along, Drag-Along, Buyback & Exit Taxation",
  description:
    "A comprehensive guide to tax implications of Shareholders Agreement provisions — vesting schedules, tag-along/drag-along rights, anti-dilution, founder buyback, exit clauses, sweat equity, phantom stock, capital gains, dividend distribution tax, Section 56(2)(viib) angel tax and compliance framework.",
  url: "https://www.taxvio.in/guide/roc/shareholders-agreement-tax-implications",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/roc/shareholders-agreement-tax-implications",
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
  wordCount: 4800,
  inLanguage: "en-IN",
  articleSection: "Corporate Compliance",
  keywords: [
    "shareholders agreement tax",
    "vesting schedule taxation",
    "tag-along drag-along tax",
    "angel tax Section 56",
    "capital gains SHA",
    "sweat equity tax",
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
      name: "Shareholders Agreement Tax Implications",
      item: "https://www.taxvio.in/guide/roc/shareholders-agreement-tax-implications",
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

export default function ShareholdersAgreementTaxImplicationsPage() {
  return (
    <>
      <Script
        id="sha-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="sha-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="sha-faq-schema"
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
                  Shareholders Agreement Tax Implications
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
                  Updated for 2026 · SHA Tax Planning Framework
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Shareholders Agreement
                  <span className="block mt-2 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                    Tax Implications 2026
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Master the tax treatment of <strong className="text-white">vesting schedules</strong>,
                  tag-along/drag-along rights, anti-dilution, founder buyback, exit clauses,
                  <strong className="text-white">sweat equity taxation</strong>, phantom stock, capital
                  gains on share transfer, angel tax (Section 56(2)(viib)) and complete compliance
                  framework to avoid ₹1-25 lakh penalties.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get SHA Tax Review <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#clauses"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View Tax Clauses <Handshake size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  SHA Tax at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Calendar,
                      title: "Vesting: Tax at exercise",
                      text: "Perquisite = (FMV - Exercise price) × Shares, taxed at slab rate (up to 42.74%)",
                    },
                    {
                      icon: Handshake,
                      title: "Tag/Drag-Along: Capital gains",
                      text: "LTCG 20% (>24 months) vs STCG slab rate — Section 50CA FMV risk if below market",
                    },
                    {
                      icon: RefreshCw,
                      title: "Buyback: Deemed dividend",
                      text: "Proceeds - Cost taxed at slab rate if company has profits (not capital gains)",
                    },
                    {
                      icon: AlertCircle,
                      title: "Angel Tax: Section 56(2)(viib)",
                      text: "30.9% on (Premium - FMV) for Indian investors — DPIIT/SEBI/foreign exempt",
                    },
                    {
                      icon: Gift,
                      title: "Sweat Equity: Perquisite at grant",
                      text: "FMV taxed as salary at grant (no cash receipt) — ₹20L+ tax liability possible",
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
                { icon: BadgeCheck, text: "CA-Assisted SHA Drafting" },
                { icon: Shield, text: "Tax Clause Review" },
                { icon: Clock, text: "Valuation Certificate Support" },
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
                  Startup Equity Planning Guide — 2026
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Why Every SHA Clause Has Hidden Tax Implications
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  A <strong>Shareholders Agreement (SHA)</strong> is the most critical document in startup
                  fundraising. It governs ownership, control, exit rights, and dispute resolution. Yet,
                  99% of founders and investors focus on <em>business terms</em> (valuation, board seats,
                  veto rights) and ignore <strong>tax implications</strong> of SHA clauses.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The reality: Every SHA provision — vesting schedules, tag-along/drag-along rights,
                  anti-dilution protection, founder buyback, exit clauses, sweat equity — triggers a
                  tax event. Poor drafting can cost ₹10L-₹1Cr+ in unexpected taxes, penalties, and
                  disputes. Common mistakes: Accelerated vesting on M&A (₹2 Cr perquisite tax without
                  cash receipt), ROFR at book value (Section 50CA deemed FMV issue), buyback at nominal
                  price (deemed dividend tax), anti-dilution without valuation (₹5 Cr angel tax demand).
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This guide covers: (1) SHA basics and tax relevance, (2) Tax treatment of 7 key SHA
                  clauses (vesting, tag-along, drag-along, anti-dilution, ROFR, buyback, sweat equity),
                  (3) Capital gains scenarios (LTCG vs STCG, Section 50CA risk, buyback vs sale),
                  (4) Angel tax (Section 56(2)(viib)) implications for SHA provisions, (5) Compliance
                  checklist from drafting to exit, and (6) Common mistakes that trigger ₹1-25L penalties.
                </p>

                <div className="mt-6">
                  <InfoBox title="SHA is private, but tax law is public — SHA cannot override tax treatment" color="blue">
                    <p>
                      Many founders think: "We'll write SHA saying 'no tax on buyback' or 'investor exempt
                      from angel tax'." This is wishful thinking. SHA can specify who BEARS tax liability
                      (indemnity clause), but cannot CREATE exemptions or change tax treatment. Income Tax
                      Act determines tax, not SHA. Example: SHA says founder buyback at ₹1/share is 'capital
                      return, not dividend.' But IT Department will treat it as deemed dividend u/s 2(22)(e)
                      if company has accumulated profits. SHA drafting must ALIGN with tax law, not fight it.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* SHA BASICS */}
              <section id="basics" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Core concepts"
                  heading="SHA Basics — What Every Founder & Investor Must Know"
                  icon={ScrollText}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Let's start with fundamental SHA concepts and why they matter for tax planning:
                </p>

                <div className="space-y-4">
                  {SHA_BASICS.map(({ concept, definition, taxRelevance, example, icon }) => (
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
                          <p className="text-xs leading-relaxed text-amber-700 font-semibold mb-2">
                            <strong>Tax relevance:</strong> {taxRelevance}
                          </p>
                          <p className="text-xs leading-relaxed text-blue-700">
                            <strong>Example:</strong> {example}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* KEY CLAUSES TAX IMPACT */}
              <section id="clauses" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Clause-by-clause analysis"
                  heading="7 Key SHA Clauses — Tax Events, Planning & Pitfalls"
                  icon={GavelIcon}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here's how each major SHA clause triggers tax and how to plan around it:
                </p>

                <div className="space-y-4">
                  {KEY_CLAUSES_TAX_IMPACT.map(({
                    clause,
                    typical,
                    taxEvent,
                    planning,
                    pitfall,
                    example,
                    icon,
                    color,
                  }) => (
                    <div
                      key={clause}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-3xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800">{clause}</h4>
                          <p className="text-xs text-gray-500 italic mt-1">
                            <strong>Typical clause:</strong> {typical}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="bg-white/50 p-3 rounded border border-gray-200">
                          <p className="font-semibold text-blue-700 mb-1">Tax Event:</p>
                          <p className="text-gray-600">{taxEvent}</p>
                        </div>

                        <div className="bg-white/50 p-3 rounded border border-gray-200">
                          <p className="font-semibold text-emerald-700 mb-1">✓ Tax Planning:</p>
                          <p className="text-gray-600">{planning}</p>
                        </div>

                        <div className="bg-white/50 p-3 rounded border border-gray-200">
                          <p className="font-semibold text-rose-700 mb-1">✗ Common Pitfall:</p>
                          <p className="text-gray-600">{pitfall}</p>
                        </div>

                        <div className="bg-white/50 p-3 rounded border border-gray-200">
                          <p className="font-semibold text-violet-700 mb-1">Example:</p>
                          <p className="text-gray-600">{example}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CAPITAL GAINS SCENARIOS */}
              <section id="capital-gains" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Exit taxation"
                  heading="5 Capital Gains Scenarios on Share Transfer under SHA"
                  icon={TrendingUpDown}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  When shares are sold (tag-along, drag-along, or voluntary exit), here's how capital
                  gains tax is calculated:
                </p>

                <div className="grid gap-4">
                  {CAPITAL_GAINS_SCENARIOS.map(({
                    scenario,
                    holding,
                    taxRate,
                    computation,
                    example,
                    shaConsideration,
                    icon,
                    color,
                  }) => (
                    <div
                      key={scenario}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <h4 className="text-sm font-extrabold text-gray-800">{scenario}</h4>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>
                          <strong>Holding period:</strong> {holding}
                        </p>
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>Tax rate:</strong> {taxRate}
                        </p>
                        <p>
                          <strong>Computation:</strong> {computation}
                        </p>
                        <div className="bg-white/50 p-2 rounded border border-gray-200">
                          <p className="font-semibold text-blue-700 mb-1">Example:</p>
                          <p>{example}</p>
                        </div>
                        <div className="bg-white/50 p-2 rounded border border-gray-200">
                          <p className="font-semibold text-emerald-700 mb-1">SHA consideration:</p>
                          <p>{shaConsideration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Section 50CA risk: Always sell at FMV or above (get valuation certificate)" color="rose">
                    <p>
                      <strong>Section 50CA:</strong> If unlisted shares sold at below Fair Market Value
                      (FMV), IT Department can deem sale price = FMV (per stamp duty valuation or independent
                      valuer) and calculate capital gains on deemed FMV. Result: Tax on higher gain than
                      actual cash received. <strong>Example:</strong> Shares sold at ₹30L (actual cash),
                      FMV ₹50L. Capital gain = ₹50L - ₹10L (cost) = ₹40L. LTCG @ 20% = ₹8L tax. But seller
                      received only ₹30L → ₹6L tax on ₹20L actual gain. To avoid: Always sell at FMV or
                      above. Get valuation certificate from merchant banker/CA. SHA should mandate: 'All
                      share transfers (tag-along, drag-along, ROFR) shall be at Fair Market Value certified
                      by SEBI-registered merchant banker within 30 days of transfer.'
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* ANGEL TAX & SHA */}
              <section id="angel-tax" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Section 56(2)(viib)"
                  heading="Angel Tax Implications of SHA Provisions"
                  icon={AlertCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Section 56(2)(viib) angel tax applies when Indian company issues shares at premium above
                  Fair Market Value. Here's how SHA provisions interact with angel tax:
                </p>

                <div className="grid gap-4">
                  {ANGEL_TAX_SHA.map(({
                    provision,
                    angelTaxRisk,
                    compliance,
                    example,
                    shaClause,
                    icon,
                    color,
                  }) => (
                    <div
                      key={provision}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <h4 className="text-sm font-extrabold text-gray-800">{provision}</h4>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>Angel tax risk:</strong> {angelTaxRisk}
                        </p>
                        <p>
                          <strong>Compliance:</strong> {compliance}
                        </p>
                        <div className="bg-white/50 p-2 rounded border border-gray-200">
                          <p className="font-semibold text-blue-700 mb-1">Example:</p>
                          <p>{example}</p>
                        </div>
                        <div className="bg-white/50 p-2 rounded border border-gray-200">
                          <p className="font-semibold text-emerald-700 mb-1">Recommended SHA clause:</p>
                          <p className="italic">"{shaClause}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMPLIANCE CHECKLIST */}
              <section id="compliance" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step"
                  heading="5-Phase SHA Tax Compliance Checklist"
                  icon={FileCheck}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Complete compliance framework from SHA drafting through exit:
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
                  <InfoBox title="Always include tax indemnity clause in SHA" color="green">
                    <p>
                      SHA should clearly specify who bears tax liability if IT Department challenges
                      valuation, angel tax arises, or capital gains treatment is disputed. Recommended
                      clause: <em>"Company shall obtain valuation certificate from SEBI-registered
                      merchant banker prior to share issuance and indemnify investor against any angel
                      tax, perquisite tax, or capital gains tax adjustment arising from incorrect valuation
                      or company's misrepresentation. Investor shall indemnify company if investor's
                      misrepresentation (e.g., false exemption claim) causes tax liability. Indemnifying
                      party shall reimburse indemnified party within 30 days of tax payment."</em> This
                      prevents disputes and clarifies liability upfront.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Costly errors"
                  heading="6 SHA Drafting Mistakes That Trigger ₹1-25L Tax Penalties"
                  icon={AlertTriangle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  These mistakes are common in template SHAs and DIY agreements:
                </p>

                <div className="space-y-4">
                  {COMMON_MISTAKES.map(({ mistake, why, consequence, fix, prevention }) => (
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

              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Need SHA tax review + drafting?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio review your Shareholders Agreement
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA + lawyer team reviews SHA clauses for tax implications, drafts tax-efficient
                      provisions (vesting, buyback, exit), obtains valuation certificates, and ensures
                      compliance with angel tax, capital gains, and FEMA regulations.
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
                  heading="Shareholders Agreement Tax Implications — FAQs"
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
                  education on tax implications of Shareholders Agreement provisions as of 2026. Specific
                  tax treatment depends on SHA terms, company structure, investor status (resident/non-resident,
                  SEBI-registered, DPIIT startup), share valuation, holding period, and exit scenario.
                  Always obtain written legal and tax advice from qualified CA and startup lawyer before
                  signing SHA or executing buyback/exit. Taxvio is not liable for decisions made based
                  on this article.
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
                      ["#basics", "SHA basics"],
                      ["#clauses", "Key clauses & tax"],
                      ["#capital-gains", "Capital gains scenarios"],
                      ["#angel-tax", "Angel tax implications"],
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
                  <h3 className="mt-4 text-base font-extrabold">SHA tax review?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get expert SHA drafting, tax clause review, valuation certificates and compliance
                    support.
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
                    href: "/guide/roc/fdi-compliance-fema-startups",
                    label: "FDI Compliance",
                    sub: "FEMA, FC-GPR, FLA",
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
                Related Startup & Equity Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/roc/esop-pooling-structure-compliance",
                  title: "ESOP Pooling Structure & Tax Compliance",
                  text: "Section 43(5), perquisite tax, vesting, ESOT and complete compliance framework.",
                },
                {
                  href: "/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
                  title: "DPIIT Startup Recognition & Angel Tax Exemption",
                  text: "80-IAC benefits, self-certification, Section 56 exemption and application process.",
                },
                {
                  href: "/contact",
                  title: "Talk to SHA Tax Expert",
                  text: "Get CA + lawyer review of SHA clauses, valuation certificates and tax planning.",
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
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20with%20Shareholders%20Agreement%20tax%20review`}
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