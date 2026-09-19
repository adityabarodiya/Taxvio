// app/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion/page.tsx

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
  ArrowRightLeft,
  Zap,
  Target,
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Proprietorship vs LLP vs Private Limited: Complete Comparison & Conversion Guide 2025 | Taxvio",
  description:
    "Complete guide to choosing between Proprietorship, LLP and Private Limited Company in 2025 — tax rates, compliance, liability, funding, conversion process, cost, documents required, timeline and when to convert your business structure.",
  keywords: [
    "proprietorship vs LLP vs private limited",
    "convert proprietorship to LLP",
    "convert proprietorship to private limited",
    "convert LLP to private limited",
    "business structure comparison India",
    "sole proprietorship to company conversion",
    "LLP vs Pvt Ltd tax",
    "which business structure best",
    "proprietorship to LLP process",
    "conversion cost timeline",
    "startup entity selection",
    "limited liability partnership",
    "private company registration",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
  },
  openGraph: {
    title: "Proprietorship vs LLP vs Private Limited — Complete Guide 2025 | Taxvio",
    description:
      "Tax comparison, compliance requirements, conversion process, cost and timeline for Proprietorship, LLP and Private Limited in India — choose and convert the right structure for your business.",
    url: "https://www.taxvio.in/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proprietorship vs LLP vs Private Limited — 2025 Guide",
    description:
      "Complete comparison and conversion guide for Indian businesses — tax, compliance, liability, funding and step-by-step conversion process.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const ENTITY_COMPARISON = [
  {
    entity: "Sole Proprietorship",
    icon: "👤",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    formation: "No registration needed — start immediately with PAN card",
    members: "Only one owner",
    liability: "Unlimited — personal assets at risk",
    taxation: "Individual slab rates (up to 42.744% above ₹5 crore)",
    compliance: "ITR-3/4, GST (if applicable), minimal ROC/MCA compliance",
    funding: "Very limited — banks hesitant, no equity investors",
    transferability: "Cannot be transferred or sold — dies with owner",
    bestFor: "Solo consultants, freelancers, small traders, low-risk services",
  },
  {
    entity: "Limited Liability Partnership (LLP)",
    icon: "🤝",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    formation: "Register with MCA — DIN, LLP agreement, incorporation in 7-10 days",
    members: "Minimum 2 partners, no maximum limit",
    liability: "Limited — partners not personally liable beyond contribution",
    taxation: "30% flat on profit + surcharge + cess (max 34.944%)",
    compliance: "Annual filing (Form 8, Form 11), audit if turnover >₹40L or capital >₹25L, ROC compliance",
    funding: "Moderate — bank loans easier, venture debt possible, no equity funding allowed",
    transferability: "Partner admission/exit via LLP agreement — easier than proprietorship",
    bestFor: "Professional services, startups testing market, service businesses with 2+ founders",
  },
  {
    entity: "Private Limited Company",
    icon: "🏢",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    formation: "Register with MCA — DIN, DSC, MOA, AOA, incorporation in 10-15 days",
    members: "Minimum 2 directors, 2 shareholders, maximum 200 shareholders",
    liability: "Limited — shareholders liable only up to unpaid share capital",
    taxation: "22% or 25.168% (115BAA) on profit — lower than LLP above ₹50L profit",
    compliance: "Annual audit mandatory, AGM, AOC-4, MGT-7, board meetings, director KYC — high compliance",
    funding: "Excellent — equity investors, angel, VC, PE, IPO path, ESOPs possible",
    transferability: "Shares fully transferable — easy entry/exit, M&A, acquisitions possible",
    bestFor: "Scalable startups, tech companies, manufacturing, businesses seeking VC funding",
  },
];

const DETAILED_COMPARISON = [
  {
    parameter: "Incorporation cost",
    proprietorship: "₹0 (just PAN + GST registration)",
    llp: "₹10,000 – ₹15,000 (govt fees + professional)",
    pvtLtd: "₹15,000 – ₹25,000 (govt fees + professional)",
  },
  {
    parameter: "Time to incorporate",
    proprietorship: "Immediate (same day if PAN exists)",
    llp: "7-10 working days",
    pvtLtd: "10-15 working days",
  },
  {
    parameter: "Number of owners",
    proprietorship: "1 (only sole owner)",
    llp: "Min 2 partners, no max",
    pvtLtd: "Min 2 directors + 2 shareholders, max 200",
  },
  {
    parameter: "Separate legal entity",
    proprietorship: "No — owner and business same",
    llp: "Yes — LLP is separate legal person",
    pvtLtd: "Yes — company is separate legal person",
  },
  {
    parameter: "Personal liability",
    proprietorship: "Unlimited — personal assets at risk",
    llp: "Limited to contribution",
    pvtLtd: "Limited to unpaid share capital",
  },
  {
    parameter: "Perpetual succession",
    proprietorship: "No — ends on death/closure",
    llp: "Yes — continues despite partner change",
    pvtLtd: "Yes — continues despite director change",
  },
  {
    parameter: "Tax rate (profit ₹20 lakh)",
    proprietorship: "30% + 10% surcharge + 4% cess = 34.32%",
    llp: "30% + cess = 31.2%",
    pvtLtd: "25.168% (115BAA) or 26%",
  },
  {
    parameter: "Tax rate (profit ₹2 crore)",
    proprietorship: "30% + 25% surcharge + 4% cess = 39%",
    llp: "30% + 12% surcharge + 4% cess = 34.944%",
    pvtLtd: "25.168% (115BAA) or 29.12%",
  },
  {
    parameter: "Audit mandatory",
    proprietorship: "Only if turnover >₹1Cr (tax audit)",
    llp: "Yes, if turnover >₹40L or capital >₹25L",
    pvtLtd: "Yes — always mandatory",
  },
  {
    parameter: "Annual compliance cost",
    proprietorship: "₹5,000 – ₹15,000 (ITR + GST)",
    llp: "₹20,000 – ₹40,000 (audit + ROC filings)",
    pvtLtd: "₹40,000 – ₹80,000 (audit, AGM, ROC filings)",
  },
  {
    parameter: "Compliance complexity",
    proprietorship: "Low — ITR, GST, basic books",
    llp: "Medium — Form 8, 11, audit, annual return",
    pvtLtd: "High — AGM, board meetings, AOC-4, MGT-7, director KYC",
  },
  {
    parameter: "Funding from investors",
    proprietorship: "Not possible — no equity structure",
    llp: "Very limited — only debt, no equity investors",
    pvtLtd: "Excellent — angels, VCs, PE, strategic investors",
  },
  {
    parameter: "ESOP / stock options",
    proprietorship: "Not possible",
    llp: "Not allowed under LLP Act",
    pvtLtd: "Yes — can issue ESOPs to employees",
  },
  {
    parameter: "Raising debt from banks",
    proprietorship: "Difficult — personal guarantee needed",
    llp: "Moderate — better than proprietorship",
    pvtLtd: "Easier — company credit rating matters",
  },
  {
    parameter: "Exit / transfer",
    proprietorship: "Cannot sell — must close and start new",
    llp: "Partner change via LLP agreement",
    pvtLtd: "Share transfer, M&A, acquisition — clean exit",
  },
  {
    parameter: "Brand perception",
    proprietorship: "Perceived as small / individual",
    llp: "Moderate — professional services credibility",
    pvtLtd: "High — corporate credibility, trusted by clients",
  },
];

const WHEN_TO_CONVERT = [
  {
    trigger: "Turnover crosses ₹40 lakh consistently",
    reason: "At ₹40 lakh turnover, LLP needs statutory audit. Above ₹1 crore, proprietorship needs tax audit. The compliance burden of proprietorship (tax + GST) approaches that of LLP, but without liability protection. Converting to LLP gives limited liability with similar compliance cost.",
    recommendedMove: "Proprietorship → LLP",
    icon: "📈",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    trigger: "Profit exceeds ₹50 lakh per year",
    reason: "Above ₹50 lakh profit, individual slab hits 30% + 25% surcharge = 39% effective (at ₹2 crore+). Private limited at 25.168% (115BAA) saves ₹14 lakh tax annually on ₹1 crore profit. Tax arbitrage justifies higher compliance cost.",
    recommendedMove: "Proprietorship / LLP → Private Limited",
    icon: "💰",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    trigger: "Planning to raise equity funding or investor entry",
    reason: "Angels, VCs and PE funds cannot invest in proprietorships or LLPs (no equity structure). If you want to raise ₹25 lakh+ from investors for equity, you must be a Private Limited company. Conversion takes 30-45 days, so plan before investor meetings.",
    recommendedMove: "Any → Private Limited",
    icon: "🚀",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    trigger: "Need to hire senior talent with ESOPs / stock options",
    reason: "LLP Act does not permit profit-sharing instruments tradeable like equity. Private Limited can issue ESOPs under SEBI (SBEB) Regulations or Companies Act rules, allowing you to grant stock options to CXOs, senior engineers and retain talent without immediate cash.",
    recommendedMove: "LLP → Private Limited",
    icon: "👥",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    trigger: "Entering high-liability business or taking large contracts",
    reason: "If your business involves manufacturing, construction, healthcare, logistics or any activity with potential litigation, creditor claims or product liability, personal unlimited liability in proprietorship can bankrupt you personally. LLP or Pvt Ltd shields personal assets.",
    recommendedMove: "Proprietorship → LLP or Pvt Ltd",
    icon: "⚖️",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    trigger: "Planning exit, sale, acquisition or bringing in co-founders",
    reason: "Proprietorship cannot be sold or transferred — you can only sell assets and close. LLP partner admission needs all partners' consent. Private Limited shares are freely transferable, M&A-ready, and clean exits are possible through share purchase agreements.",
    recommendedMove: "Proprietorship / LLP → Private Limited",
    icon: "🔄",
    color: "bg-sky-50 border-sky-100 text-sky-700",
  },
];

const CONVERSION_PROCESS = [
  {
    conversion: "Proprietorship to LLP",
    steps: [
      {
        step: "01",
        title: "Obtain DIN and DSC for partners",
        desc: "All partners need Director Identification Number (DIN) and Digital Signature Certificate (DSC). Apply via MCA portal — takes 3-5 days. At least 2 partners required.",
      },
      {
        step: "02",
        title: "Reserve LLP name via RUN-LLP",
        desc: "File RUN-LLP (Reserve Unique Name) on MCA portal with 2 proposed names. Avoid identical/similar names to existing LLPs or companies. Approved in 1-2 days.",
      },
      {
        step: "03",
        title: "Draft and notarize LLP Agreement",
        desc: "Prepare LLP agreement defining profit sharing, capital contribution, roles, exit clauses. Get it notarized. Must be filed within 30 days of incorporation.",
      },
      {
        step: "04",
        title: "File FiLLiP (Form for Incorporation of LLP)",
        desc: "File FiLLiP with subscriber sheet, consent of partners, address proof and professional certificate. Pay govt fees (₹500 + state fees). MCA issues Certificate of Incorporation in 5-7 days.",
      },
      {
        step: "05",
        title: "File LLP Agreement (Form 3) within 30 days",
        desc: "Upload executed and notarized LLP Agreement in Form 3 on MCA portal within 30 days of incorporation. Late filing attracts penalty.",
      },
      {
        step: "06",
        title: "Transfer assets and liabilities from proprietorship to LLP",
        desc: "Transfer can be done by sale or contribution. Update vendor/customer contracts, bank accounts, GST registration transfer (via amendment), domain, trademarks to new LLP name.",
      },
      {
        step: "07",
        title: "Close proprietorship books and file final ITR",
        desc: "File final ITR-3/4 for proprietorship showing discontinued business. Settle all liabilities. GST cancellation if not transferring registration. Maintain records for 8 years.",
      },
    ],
    timeline: "15-30 days",
    cost: "₹10,000 – ₹20,000",
    taxImplication: "Asset transfer at market value — capital gains tax may apply on transfer of goodwill, property. Consult CA for slump sale vs itemized transfer.",
  },
  {
    conversion: "Proprietorship to Private Limited",
    steps: [
      {
        step: "01",
        title: "Obtain DIN and DSC for directors",
        desc: "Minimum 2 directors required. Each needs DIN (apply via DIR-3) and Class 3 DSC from licensed certifying authority. Takes 3-5 days.",
      },
      {
        step: "02",
        title: "Reserve company name via RUN (Reserve Unique Name)",
        desc: "File RUN on MCA portal with 2 proposed names. Check for trademark conflicts. Approved in 1-2 days if names are unique and comply with naming rules.",
      },
      {
        step: "03",
        title: "Draft Memorandum (MOA) and Articles of Association (AOA)",
        desc: "MOA defines objectives, authorized capital, liability clause. AOA defines internal management rules. Both must be digitally signed and filed with SPICe+ form.",
      },
      {
        step: "04",
        title: "File SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus)",
        desc: "Single integrated form for company incorporation, DIN allotment, PAN, TAN, EPFO, ESIC, Shops & Establishment, GST, bank account opening. Pay govt fees (₹1,000 + stamp duty + state fees).",
      },
      {
        step: "05",
        title: "Obtain Certificate of Incorporation (COI)",
        desc: "MCA reviews and issues COI along with PAN, TAN within 5-7 days if all documents are in order. Company is now legally formed.",
      },
      {
        step: "06",
        title: "Transfer business from proprietorship to company",
        desc: "Two methods: (a) Slump sale — transfer entire business as going concern for lump sum consideration, or (b) Itemized sale — transfer each asset individually. Execute Business Transfer Agreement, issue shares to proprietor.",
      },
      {
        step: "07",
        title: "Hold first board meeting and commence business",
        desc: "First board meeting to adopt AOA, appoint statutory auditor, open bank account, appoint key managerial personnel. File INC-20A (commencement of business) if paid-up capital. Close proprietorship as above.",
      },
    ],
    timeline: "20-40 days",
    cost: "₹15,000 – ₹35,000",
    taxImplication: "Business transfer to company is deemed sale. Tax on capital gains from goodwill, fixed assets transfer. Section 47(xiv) exemption not available as proprietorship is not a company. Plan capital structure to minimize tax.",
  },
  {
    conversion: "LLP to Private Limited",
    steps: [
      {
        step: "01",
        title: "Pass special resolution among LLP partners",
        desc: "All partners must consent to conversion. Pass resolution as per LLP agreement or majority as per Act. Document consent in writing.",
      },
      {
        step: "02",
        title: "Reserve company name and check MOA/AOA alignment",
        desc: "File RUN for company name (can be same as LLP name if available). Draft MOA and AOA ensuring main objects match LLP's business activities.",
      },
      {
        step: "03",
        title: "File conversion application in Form 18 (Part A) with MCA",
        desc: "Form 18 is specific for LLP to Company conversion u/s 366 of Companies Act. Attach statement of assets/liabilities, partner consent, solvency certificate, auditor certificate, MOA/AOA drafts.",
      },
      {
        step: "04",
        title: "Publish notice of conversion in newspapers",
        desc: "Advertise conversion proposal in one English and one vernacular newspaper (within whose jurisdiction LLP's registered office is located). Wait 21 days for creditor objections.",
      },
      {
        step: "05",
        title: "File Form 18 (Part B) with ROC after 21 days",
        desc: "If no creditor objections (or objections resolved), file Part B with proof of newspaper publication, list of creditors, partner consent, board resolution approving conversion.",
      },
      {
        step: "06",
        title: "Obtain Certificate of Incorporation as Private Limited Company",
        desc: "ROC reviews Part A and B. If satisfied, issues new Certificate of Incorporation with 'converted from LLP' notation. LLP ceases, company takes over all assets, liabilities, contracts automatically.",
      },
      {
        step: "07",
        title: "Complete post-conversion formalities",
        desc: "Appoint auditor, conduct first board meeting and AGM, file DIR-12 if new directors, update GST, PAN, bank accounts, contracts, letterheads. File first AOC-4/MGT-7 from conversion date.",
      },
    ],
    timeline: "45-60 days (due to 21-day notice period)",
    cost: "₹25,000 – ₹50,000",
    taxImplication: "Section 47(xiiib) and (xiii): Conversion of LLP to company is exempt from capital gains tax if all assets and liabilities are transferred, all partners become shareholders in same proportion, partners hold shares for 5 years, company continues same business for 5 years. Powerful tax-neutral conversion route.",
  },
];

const COST_BREAKDOWN = [
  {
    stage: "Pre-incorporation",
    proprietorship: "₹0",
    llp: "₹2,000 (DIN + DSC for 2 partners)",
    pvtLtd: "₹2,500 (DIN + DSC for 2 directors)",
  },
  {
    stage: "Government fees",
    proprietorship: "₹0 (PAN free, GST free)",
    llp: "₹1,500 – ₹3,000 (LLP incorporation + state fees)",
    pvtLtd: "₹3,000 – ₹6,000 (company incorporation + stamp duty + state fees)",
  },
  {
    stage: "Professional fees (CA/CS)",
    proprietorship: "₹0 (self can do)",
    llp: "₹6,000 – ₹10,000",
    pvtLtd: "₹10,000 – ₹20,000",
  },
  {
    stage: "Total incorporation cost",
    proprietorship: "₹0",
    llp: "₹10,000 – ₹15,000",
    pvtLtd: "₹15,000 – ₹28,000",
  },
  {
    stage: "Annual compliance (audit + filings)",
    proprietorship: "₹5,000 – ₹15,000",
    llp: "₹20,000 – ₹40,000",
    pvtLtd: "₹40,000 – ₹80,000",
  },
];

const MYTHS_VS_FACTS = [
  {
    myth: "Private Limited is only for big companies",
    fact: "False. You can start a Pvt Ltd with ₹1 lakh authorized capital and 2 shareholders. Thousands of startups, small manufacturers and service providers operate as Pvt Ltd from day one to get limited liability and investor-readiness.",
    icon: "🏢",
  },
  {
    myth: "LLP and Private Limited have same tax rate",
    fact: "False. LLP is taxed at 30% + surcharge + cess (max 34.944%). Private Limited under 115BAA pays 25.168% flat, and under regular regime 26% to 34.944%. For profit above ₹50 lakh, Pvt Ltd saves 5-10% absolute tax.",
    icon: "💰",
  },
  {
    myth: "Proprietorship cannot raise bank loans",
    fact: "Partially true. Proprietorships can get loans, but banks require personal guarantee, personal asset collateral and charge higher interest due to unlimited liability and no separate financials. LLP and company get better rates and purely business-based credit.",
    icon: "🏦",
  },
  {
    myth: "Converting to Private Limited is very expensive",
    fact: "Exaggerated. Full conversion from proprietorship to Pvt Ltd costs ₹20,000 to ₹40,000 including professional fees. If annual tax saving is ₹1-2 lakh (on ₹50 lakh+ profit), conversion pays for itself in 3-6 months.",
    icon: "💸",
  },
  {
    myth: "LLP is better than Private Limited for all small businesses",
    fact: "Context-dependent. LLP is better for professional services (CA, lawyer, consultant) where equity funding is not needed. Pvt Ltd is better for product businesses, tech startups, manufacturing, or any business planning VC/PE funding or ESOP issuance.",
    icon: "⚖️",
  },
  {
    myth: "Once you form LLP, you cannot convert to Private Limited",
    fact: "False. LLP to Pvt Ltd conversion is explicitly allowed under Section 366 of Companies Act, 2013 via Form 18 with tax-neutral treatment u/s 47(xiiib) if conditions are met. Takes 45-60 days and costs ₹30,000-₹50,000.",
    icon: "🔄",
  },
];

const FAQS = [
  {
    question: "Which is better for a startup — LLP or Private Limited?",
    answer:
      "For a tech startup, SaaS product, mobile app or any business planning to raise equity funding from angels, VCs or incubators, Private Limited is better because: (1) Investors can buy equity shares — not possible in LLP, (2) You can issue ESOPs to attract and retain talent, (3) Lower tax rate at 25.168% vs 34.944%, (4) Clean M&A and exit possible through share transfer. LLP is suitable for bootstrapped service businesses (consulting, agency, professional services) with 2-3 partners, no equity funding plans, and preference for lower compliance than Pvt Ltd. If in doubt and ambitious, choose Pvt Ltd.",
  },
  {
    question: "What is the minimum capital required to start a Private Limited company?",
    answer:
      "There is no minimum paid-up capital requirement under the Companies Act, 2013. You can start a Pvt Ltd with ₹10,000 or even ₹1,000 paid-up capital. However, authorized capital (mentioned in MOA) can be ₹1 lakh, ₹5 lakh or ₹10 lakh — this determines stamp duty during incorporation. For practical purposes, most companies start with ₹1 lakh authorized capital and ₹50,000 to ₹1 lakh paid-up capital. You can increase authorized capital later by passing special resolution and paying additional stamp duty.",
  },
  {
    question: "Can I convert my proprietorship to LLP without closing the business?",
    answer:
      "Yes. Conversion does not mean shutting down operations. The process is: (1) Form new LLP with 2 partners (you + spouse/partner/co-founder), (2) Transfer business assets and liabilities from proprietorship to LLP via sale or capital contribution, (3) Novate or assign customer/vendor contracts to LLP name, (4) Transfer or amend GST registration to LLP, (5) File final ITR for proprietorship showing business discontinued from the date of transfer. You continue the same business under LLP structure with limited liability protection. Business continuity is maintained — only legal wrapper changes.",
  },
  {
    question: "How much tax will I save by converting to Private Limited from proprietorship?",
    answer:
      "Tax saving depends on profit level. Example: At ₹20 lakh profit — Proprietorship pays ₹6.86 lakh (34.32% effective), Pvt Ltd under 115BAA pays ₹5.03 lakh (25.168%), saving ₹1.83 lakh per year. At ₹1 crore profit — Proprietorship pays ₹39 lakh (39% due to surcharge), Pvt Ltd pays ₹25.17 lakh (25.168%), saving ₹13.83 lakh per year. Below ₹15-20 lakh profit, the saving is marginal and higher compliance cost may offset it. Conversion makes sense financially above ₹30-40 lakh profit where absolute savings exceed ₹5 lakh annually.",
  },
  {
    question: "What happens to GST registration when I convert from proprietorship to LLP or Pvt Ltd?",
    answer:
      "GST registration is PAN-based and entity-specific. When you convert, you have two options: (1) Surrender the old GSTIN (proprietorship) and apply for fresh GSTIN in LLP or company name — requires new application, 7-10 days processing, and updating all invoices/contracts. ITC can be transferred via credit note mechanism. (2) Apply for amendment of GSTIN from proprietorship to LLP/company if the business is being transferred as going concern — this is treated as change in constitution of business. Submit Business Transfer Agreement, new entity incorporation certificate and Form GST REG-14. Second route is faster and ensures ITC continuity. Consult GST practitioner before conversion to avoid ITC lapse.",
  },
  {
    question: "Can an LLP raise funding from venture capital or angel investors?",
    answer:
      "No. Under the LLP Act, 2008, there is no provision for issuing equity shares or preference shares. LLP has 'capital contribution' structure where partners contribute and share profit as per LLP agreement. External investors cannot become partners easily because LLP agreement requires consent of all existing partners for admission of new partner, and profit-sharing is not tradeable like equity. Venture capital funds, angel investors and PE firms invest only in Private Limited companies where they get equity shares, board seats, liquidation preference and clean exit via share sale or IPO. If you want to raise institutional equity, convert LLP to Pvt Ltd first using Section 366 route.",
  },
  {
    question: "Is director disqualification applicable to LLP partners like in Private Limited?",
    answer:
      "No. The director disqualification provisions under Section 164 of the Companies Act (disqualification for 5 years if company does not file financials for 3 consecutive years) apply only to directors of companies, not to designated partners or partners of LLPs. However, LLP partners can be disqualified under Section 75 of the LLP Act if they are convicted of fraud, found guilty of misconduct by Tribunal, or disqualified by court order. The compliance burden and personal risk for non-filing is higher in Pvt Ltd (director disqualification + penalties) than in LLP, but Pvt Ltd offers better funding and exit routes.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Proprietorship vs LLP vs Private Limited: Complete Comparison & Conversion Guide 2025",
  description:
    "A comprehensive guide comparing Sole Proprietorship, LLP and Private Limited Company in India — tax rates, compliance, liability, funding, and detailed conversion process with timeline, cost and documents required.",
  url: "https://www.taxvio.in/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
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
  wordCount: 3600,
  inLanguage: "en-IN",
  articleSection: "Business Structure",
  keywords: [
    "proprietorship vs LLP",
    "LLP vs private limited",
    "business structure comparison",
    "convert to company",
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
      name: "Proprietorship vs LLP vs Private Limited",
      item: "https://www.taxvio.in/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
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

export default function ProprietorshipVsLLPVsPrivateLimitedPage() {
  return (
    <>
      <Script
        id="entity-comparison-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="entity-comparison-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="entity-comparison-faq-schema"
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
                "radial-gradient(circle,rgba(139,92,246,0.16) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(52,211,153,0.10) 0%,transparent 65%)",
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
                  Proprietorship vs LLP vs Private Limited
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
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
                  Complete Guide 2025 · Conversion Process Included
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Proprietorship vs LLP
                  <span className="block mt-2 bg-gradient-to-r from-violet-300 to-emerald-300 bg-clip-text text-transparent">
                    vs Private Limited
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Choosing the wrong business structure costs you lakhs in tax, blocks funding
                  and exposes personal assets. This guide compares{" "}
                  <strong className="text-white">tax rates, liability, compliance and conversion</strong>{" "}
                  — plus exact step-by-step process to convert Proprietorship to LLP, LLP to
                  Private Limited, or Proprietorship to Pvt Ltd with timeline, cost and documents.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Conversion Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#comparison"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View Comparison <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Quick decision matrix
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Solo freelancer / consultant",
                      text: "→ Proprietorship (simple, no compliance)",
                    },
                    {
                      icon: Briefcase,
                      title: "2-3 partners, service business",
                      text: "→ LLP (limited liability, moderate tax)",
                    },
                    {
                      icon: TrendingUp,
                      title: "Raising funding / issuing ESOPs",
                      text: "→ Private Limited (only option for equity)",
                    },
                    {
                      icon: IndianRupee,
                      title: "Profit above ₹50 lakh per year",
                      text: "→ Private Limited (lowest tax at 25.168%)",
                    },
                    {
                      icon: Target,
                      title: "High-liability business / contracts",
                      text: "→ LLP or Pvt Ltd (protect personal assets)",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-violet-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-violet-300" />
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
                { icon: BadgeCheck, text: "CA / CS Assisted Registration" },
                { icon: Shield, text: "100% Compliance Support" },
                { icon: Clock, text: "7-30 Day Turnaround" },
                { icon: Star, text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-violet-400" /> {text}
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
                  Business Structure Guide — India 2025
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Why Your Business Structure Choice Matters More Than You Think
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  Your business structure — <strong>Sole Proprietorship, Limited Liability
                  Partnership (LLP)</strong> or <strong>Private Limited Company</strong> — is
                  not just a legal formality. It determines your tax rate (25.168% vs 39%),
                  whether investors can fund you (yes for Pvt Ltd, no for LLP), whether your
                  personal house and car are at risk if business fails (unlimited liability in
                  proprietorship), and whether you can grant stock options to employees (only
                  Pvt Ltd).
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Most entrepreneurs start as proprietorships because it is free and instant.
                  But as turnover crosses ₹40 lakh, profit exceeds ₹20-30 lakh, or you need
                  a co-founder or investor, the lack of limited liability protection and
                  unfavorable tax treatment starts costing real money — ₹5 to ₹15 lakh extra
                  tax per year, inability to raise ₹50 lakh angel round, or personal bankruptcy
                  risk from a ₹1 crore vendor dispute.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The good news: conversion is legal, structured and relatively inexpensive.
                  Proprietorship to LLP takes 15-30 days and ₹10,000 to ₹20,000. LLP to
                  Private Limited via Section 366 route takes 45-60 days, costs ₹30,000 to
                  ₹50,000 and is <strong>100% tax-neutral</strong> if you follow conditions
                  in Section 47(xiiib). This guide gives you the comparison matrix, conversion
                  timelines and exact MCA forms so you can make the switch at the right time.
                </p>

                <div className="mt-6">
                  <InfoBox title="The ₹50 lakh profit rule of thumb" color="blue">
                    <p>
                      If your annual profit consistently exceeds ₹50 lakh and you are still a
                      proprietorship or LLP, you are likely overpaying ₹5-10 lakh tax every
                      year. At that profit level, Private Limited under 115BAA at 25.168%
                      beats individual slab (39% at ₹2 crore+) or LLP (34.944%). The
                      conversion cost pays for itself in 3-6 months via tax savings alone.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* HIGH-LEVEL COMPARISON */}
              <section id="comparison" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="At-a-glance overview"
                  heading="Proprietorship vs LLP vs Private Limited — Key Differences"
                  icon={Scale}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here are the fundamental differences that determine which structure fits your
                  business stage, risk profile and growth ambitions:
                </p>

                <div className="grid gap-4">
                  {ENTITY_COMPARISON.map(({
                    entity,
                    icon,
                    color,
                    formation,
                    members,
                    liability,
                    taxation,
                    compliance,
                    funding,
                    transferability,
                    bestFor,
                  }) => (
                    <div
                      key={entity}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} flex items-center justify-center text-2xl shrink-0`}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-extrabold text-gray-800 mb-3">{entity}</h3>
                          <div className="space-y-2 text-xs text-gray-600">
                            <p><strong>Formation:</strong> {formation}</p>
                            <p><strong>Members:</strong> {members}</p>
                            <p><strong>Liability:</strong> {liability}</p>
                            <p><strong>Taxation:</strong> {taxation}</p>
                            <p><strong>Compliance:</strong> {compliance}</p>
                            <p><strong>Funding:</strong> {funding}</p>
                            <p><strong>Transferability:</strong> {transferability}</p>
                            <p className="text-[11px] text-gray-500 mt-3 pt-2 border-t border-gray-200">
                              <strong>Best for:</strong> {bestFor}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* DETAILED TABLE */}
              <section id="detailed-comparison" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="16-point comparison"
                  heading="Side-by-Side: Proprietorship vs LLP vs Private Limited"
                  icon={FileText}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  This table covers formation, tax, compliance, funding, exit and perception —
                  everything you need to choose the right structure:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Parameter</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Proprietorship</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">LLP</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Private Limited</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DETAILED_COMPARISON.map(({ parameter, proprietorship, llp, pvtLtd }) => (
                        <tr key={parameter} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">{parameter}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{proprietorship}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{llp}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{pvtLtd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="Tax savings example at ₹1 crore profit" color="green">
                    <p>
                      <strong>Proprietorship:</strong> ₹39 lakh tax (30% + 25% surcharge + cess).<br />
                      <strong>LLP:</strong> ₹34.94 lakh tax (30% + 12% surcharge + cess).<br />
                      <strong>Pvt Ltd (115BAA):</strong> ₹25.17 lakh tax (25.168% flat).<br />
                      <strong>Savings vs proprietorship:</strong> ₹13.83 lakh per year — enough to
                      pay 1-2 senior engineers or fund entire annual compliance cost.
                    </p>
                  </InfoBox>
                  <InfoBox title="Compliance cost is one-time pain, tax is every year" color="amber">
                    <p>
                      Many resist conversion because Pvt Ltd compliance costs ₹40,000-₹80,000
                      annually vs ₹5,000-₹15,000 for proprietorship. But at ₹1 crore profit,
                      you save ₹13.83 lakh tax annually. Even after paying ₹80,000 compliance,
                      net saving is ₹13 lakh — every single year. One-time conversion cost of
                      ₹30,000 is recovered in 1-2 months.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* WHEN TO CONVERT */}
              <section id="when-to-convert" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Timing your switch"
                  heading="6 Clear Signals It's Time to Convert Your Business Structure"
                  icon={Zap}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Conversion is not about hitting a magic number — it is about crossing specific
                  thresholds where the benefits (tax saving, liability protection, funding access)
                  outweigh the costs (compliance burden, incorporation fees):
                </p>

                <div className="grid gap-4">
                  {WHEN_TO_CONVERT.map(({ trigger, reason, recommendedMove, icon, color }) => (
                    <div
                      key={trigger}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-11 h-11 rounded-xl ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} flex items-center justify-center text-2xl shrink-0`}
                        >
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h3 className="text-sm font-extrabold text-gray-800">{trigger}</h3>
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} ${color.split(" ")[2]}`}
                            >
                              {recommendedMove}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600">{reason}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Don't convert too early or too late" color="blue">
                    <p>
                      <strong>Too early:</strong> Converting at ₹5 lakh turnover means paying
                      ₹40,000 annual compliance for minimal tax benefit — waste of money.
                      <strong>Too late:</strong> Waiting till ₹5 crore turnover means you have
                      already lost ₹50 lakh+ in cumulative excess tax over 3-4 years. Sweet
                      spot: convert when profit crosses ₹30-40 lakh (tax saving justifies
                      compliance) or when you are 6 months away from raising first investor
                      round.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* CONVERSION PROCESS */}
              <section id="conversion-process" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step roadmap"
                  heading="How to Convert: Complete Process, Timeline & Cost"
                  icon={ArrowRightLeft}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here is the exact MCA process for the three most common conversions. Each
                  includes timeline, government fees, professional fees and tax implications:
                </p>

                {CONVERSION_PROCESS.map(({ conversion, steps, timeline, cost, taxImplication }) => (
                  <div key={conversion} className="mb-10 pb-10 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center shrink-0">
                        <ArrowRightLeft size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-[#00416a]">{conversion}</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700">
                            ⏱ {timeline}
                          </span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                            💰 {cost}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {steps.map(({ step, title, desc }) => (
                        <div key={step} className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5">
                          <div className="w-10 h-10 rounded-xl bg-[#00416a] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                            {step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-800 mb-1">{title}</h4>
                            <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={15} className="text-amber-700 shrink-0" />
                        <h4 className="text-sm font-extrabold text-amber-900">Tax Implication</h4>
                      </div>
                      <p className="text-xs leading-relaxed text-amber-800">{taxImplication}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* COST BREAKDOWN */}
              <section id="cost-breakdown" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Investment required"
                  heading="Complete Cost Breakdown — Incorporation & Annual Compliance"
                  icon={IndianRupee}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Here is the realistic cost comparison covering government fees, professional
                  fees and annual recurring compliance cost:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Stage</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Proprietorship</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">LLP</th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">Private Limited</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_BREAKDOWN.map(({ stage, proprietorship, llp, pvtLtd }) => (
                        <tr key={stage} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">{stage}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{proprietorship}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{llp}</td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">{pvtLtd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <InfoBox title="ROI of conversion at ₹50 lakh profit" color="green">
                    <p>
                      Conversion cost (proprietorship → Pvt Ltd): ₹25,000 one-time + ₹40,000
                      extra annual compliance. Annual tax saving (39% → 25.168%): ₹6.9 lakh.
                      Net benefit in Year 1: ₹6.25 lakh. Year 2 onwards: ₹6.5 lakh every year.
                      Total benefit over 5 years: ₹32 lakh+. Conversion pays for itself in the
                      first quarter.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* MYTHS */}
              <section id="myths" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Common misconceptions"
                  heading="Myths vs Facts About Business Structures"
                  icon={XCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Let's bust six widespread myths that keep entrepreneurs stuck in inefficient
                  structures:
                </p>

                <div className="space-y-4">
                  {MYTHS_VS_FACTS.map(({ myth, fact, icon }) => (
                    <div key={myth} className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <XCircle size={14} className="text-rose-600 shrink-0" />
                            <h4 className="text-sm font-extrabold text-rose-700">{myth}</h4>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                            <p className="text-xs leading-relaxed text-gray-600">{fact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
                      Ready to convert or incorporate?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your business structure change
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA/CS team files DIN, DSC, MOA/AOA, SPICe+, Form 18, asset transfer
                      agreements and ensures tax-neutral conversion with proper documentation,
                      GST migration and zero compliance gap.
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
                  heading="Business Structure & Conversion — FAQs"
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
                  general education on business structure selection and conversion in India
                  as of 2025. Tax rates, compliance requirements and MCA procedures are subject
                  to change via Finance Acts, Companies Amendment Acts and CBDT notifications.
                  Specific tax outcomes depend on individual facts — turnover, profit, industry,
                  state of incorporation and existing agreements. Always obtain a written opinion
                  from a qualified CA, CS or corporate lawyer before converting or incorporating.
                  Taxvio is not liable for decisions made based on this article.
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
                      ["#comparison", "Key differences"],
                      ["#detailed-comparison", "16-point table"],
                      ["#when-to-convert", "When to convert"],
                      ["#conversion-process", "Conversion process"],
                      ["#cost-breakdown", "Cost breakdown"],
                      ["#myths", "Myths vs facts"],
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
                    <MessageCircle size={18} className="text-violet-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">Need structure advice?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get personalized recommendation on Proprietorship, LLP or Pvt Ltd based on
                    your turnover, profit, funding plans and liability risk.
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
                    href: "/serviceslist/compliance/company-registration",
                    label: "Company Registration",
                    sub: "Pvt Ltd, LLP, OPC filing",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                    label: "Corporate Tax Guide",
                    sub: "115BAA, deductions, planning",
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

        <section className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6]">Explore more</p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#00416a]">
                Related Business & Compliance Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                  title: "Legal Ways to Reduce Corporate Tax",
                  text: "115BAA, depreciation, 80M, 80JJAA and smart planning for FY 2025-26.",
                },
                {
                  href: "/guide/itr-blogs/late-filing-fee-waiver-mca",
                  title: "MCA Late Filing Fee Waiver",
                  text: "Save penalties on AOC-4, MGT-7, Form 8/11 under CFSS and LLP schemes.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Business Setup Expert",
                  text: "Get CA/CS-assisted Pvt Ltd / LLP incorporation or conversion with full documentation.",
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
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20want%20to%20convert%20my%20business%20structure%20or%20incorporate%20a%20new%20company`}
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