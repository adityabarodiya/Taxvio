// app/guide/roc/dpiit-startup-recognition-benefits-application/page.tsx

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
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "DPIIT Startup Recognition: Benefits, Eligibility & Application Process 2025 | Taxvio",
  description:
    "Complete guide to DPIIT Startup India Recognition 2025 — tax exemption under 80-IAC, patent cost rebate, self-certification, IPR fast-track, government tender benefits, eligibility criteria, online application process, required documents and renewal procedure.",
  keywords: [
    "DPIIT startup recognition",
    "Startup India certificate",
    "80-IAC tax exemption startups",
    "DPIIT registration benefits",
    "startup India application process",
    "startup recognition eligibility",
    "startup tax holiday 3 years",
    "angel tax exemption startups",
    "patent fee 80% rebate startups",
    "self certification startups",
    "public procurement startups",
    "startup India scheme 2025",
    "how to get DPIIT certificate",
    "startup registration online",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
  },
  openGraph: {
    title: "DPIIT Startup Recognition — Complete Benefits & Application Guide 2025 | Taxvio",
    description:
      "Tax exemption, patent rebate, tender benefits, angel tax relief — complete guide to DPIIT Startup India recognition eligibility, application process, documents required and how to claim benefits.",
    url: "https://www.taxvio.in/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "DPIIT Startup Recognition — Benefits & Application 2025",
    description:
      "80-IAC tax holiday, patent rebate, self-certification, tender benefits and more — complete DPIIT recognition guide for Indian startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const KEY_BENEFITS = [
  {
    benefit: "80-IAC Tax Exemption — 100% for 3 Years",
    desc: "DPIIT-recognized startups can claim 100% tax deduction on profit for any 3 consecutive years out of first 10 years u/s 80-IAC. Choose the years strategically when profit is highest. Available for startups incorporated before 1 April 2030 (extended in Budget 2025).",
    icon: "💰",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    section: "Section 80-IAC",
    value: "Save ₹25 lakh tax on ₹1 crore profit",
  },
  {
    benefit: "Angel Tax Exemption from AY 2025-26",
    desc: "Section 56(2)(viib) angel tax abolished from AY 2025-26 for all investors — share premium above fair market value no longer taxed. DPIIT startups get additional safety via notification G.S.R. 127(E) exempting them from scrutiny on valuation. Funding is now fully tax-free.",
    icon: "🚀",
    color: "bg-blue-50 border-blue-100 text-blue-700",
    section: "Section 56(2)(viib) exemption",
    value: "Raise funds without ₹10-50 lakh angel tax demand",
  },
  {
    benefit: "80% Rebate on Patent, Trademark & Design Filing Fees",
    desc: "DPIIT startups get 80% reduction in government fees for filing patents (Indian Patent Office), trademarks and designs. A patent that costs ₹16,000-₹20,000 for regular applicants costs only ₹3,200-₹4,000 for recognized startups. Applies for 5 years from recognition date.",
    icon: "📜",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    section: "IPR Policy for Startups",
    value: "Save ₹12,000-₹16,000 per patent/TM",
  },
  {
    benefit: "Self-Certification for 9 Labor & Environment Laws (3+6 Years)",
    desc: "Startups can self-certify compliance under 9 laws (3 labor + 6 environment) for 3-5 years instead of submitting to routine inspections. This reduces inspector visits, compliance burden and harassment. Extension to 6 years for some laws under ease-of-doing-business reforms.",
    icon: "✅",
    color: "bg-sky-50 border-sky-100 text-sky-700",
    section: "Startup India Action Plan",
    value: "Zero inspector visits for 3-6 years",
  },
  {
    benefit: "Fast-Track Patent Examination (within 1-2 years vs 5-7 years)",
    desc: "DPIIT startups can apply for expedited patent examination, reducing approval time from 5-7 years to 1-2 years. Faster patent grants mean quicker IP monetization, licensing and investor confidence. Handled by Controller General of Patents via Startup India Hub panel of facilitators.",
    icon: "⚡",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    section: "Schemes & Facilitation for Startups (SIPS)",
    value: "Patent granted in 1-2 years vs 5-7 years",
  },
  {
    benefit: "Easier Access to Government Tenders & Public Procurement",
    desc: "Startups get relaxation from earnest money deposit (EMD), prior turnover and prior experience criteria in government tenders. Eligible for benefits under Public Procurement Policy for Startups — preference in procurement by Central PSUs, Ministries and government departments.",
    icon: "🏛️",
    color: "bg-rose-50 border-rose-100 text-rose-700",
    section: "Public Procurement Policy",
    value: "Bid for govt contracts without EMD/turnover",
  },
  {
    benefit: "Access to ₹10,000 Crore Fund of Funds for Startups (FFS)",
    desc: "SIDBI-managed Fund of Funds provides capital to SEBI-registered AIFs (Alternative Investment Funds) who then invest in DPIIT-recognized startups. Indirect funding source for growth-stage startups. ₹10,000 crore corpus helps VCs raise and deploy capital in Indian startups.",
    icon: "💼",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
    section: "Fund of Funds Scheme",
    value: "Access to ₹10,000 Cr government-backed VC pool",
  },
  {
    benefit: "Free Hosting on Startup India Portal + Networking",
    desc: "DPIIT certificate allows you to create profile on Startup India Hub (startupindia.gov.in) with company details, pitch deck, founder bios. Get visibility to investors, mentors, corporate partners and government buyers. Attend Startup India events, pitch sessions and incubation programs.",
    icon: "🌐",
    color: "bg-teal-50 border-teal-100 text-teal-700",
    section: "Startup India Hub",
    value: "Free startup profile + investor connect",
  },
];

const ELIGIBILITY_CRITERIA = [
  {
    criterion: "Entity type must be Private Limited, LLP or Registered Partnership",
    detail: "Sole proprietorships, public companies, Section 8 companies and trusts are not eligible. Must be incorporated/registered as Pvt Ltd Company u/s Companies Act, 2013 or LLP u/s LLP Act, 2008 or Partnership Firm u/s Indian Partnership Act, 1932.",
    icon: Building2,
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    criterion: "Incorporated/registered not earlier than 10 years (1 April 2015 onwards for 2025)",
    detail: "As of 2025, startups incorporated/registered on or after 1 April 2015 are eligible. Turnover should not exceed ₹100 crore in any financial year since incorporation. 10-year window rolls forward — check current financial year minus 10 years.",
    icon: Calendar,
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
  },
  {
    criterion: "Working towards innovation, development or improvement of products/processes/services",
    detail: "Entity must be working on innovation, developing new products, processes or services, or significantly improving existing ones. Must have scalable business model with high potential for employment generation or wealth creation. Cannot be formed by splitting or reconstruction of existing business.",
    icon: Zap,
    color: "bg-violet-50 border-violet-200 text-violet-800",
  },
  {
    criterion: "Annual turnover not exceeding ₹100 crore in any financial year",
    detail: "Total turnover (as per IT Act or Companies Act financials) must not cross ₹100 crore in any single financial year since incorporation. Once crossed, startup loses eligibility. Turnover is checked at application and renewal stages.",
    icon: TrendingUp,
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
  {
    criterion: "Not formed by splitting up or reconstruction of existing business",
    detail: "Entity should be a genuinely new business, not created by splitting or restructuring an existing business. If a running business is transferred to a new entity, it does not qualify as a startup. Original innovation and independent incorporation required.",
    icon: RefreshCw,
    color: "bg-rose-50 border-rose-200 text-rose-800",
  },
];

const APPLICATION_PROCESS = [
  {
    step: "01",
    title: "Visit Startup India Portal and create account",
    desc: "Go to startupindia.gov.in and click 'Register' on top-right. Create user account with valid email ID and mobile number. Verify email via OTP. Login to the portal. This account will be used for application submission and tracking.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "Click 'Recognition' and fill entity details",
    desc: "Navigate to 'Recognition' section from dashboard. Select entity type (Pvt Ltd / LLP / Partnership). Enter company name, CIN / LLP Identification Number (LLPIN) / registration number, date of incorporation, state, registered office address and brief business description.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Describe innovation, scalability and business model",
    desc: "In 'About Your Startup' section, write 200-500 words explaining: (1) What problem you are solving, (2) How your product/service/process is innovative or significantly improved, (3) Scalability potential and target market, (4) Employment and wealth creation potential. Be specific and factual.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Upload mandatory documents",
    desc: "Upload: (a) Certificate of Incorporation / Registration, (b) Brief write-up about nature of business (innovation narrative), (c) Pitch deck or product brochure (optional but recommended), (d) Recommendation letter from incubator/accelerator if applicable (optional). All docs in PDF, max 5MB each.",
    icon: Upload,
  },
  {
    step: "05",
    title: "Self-declare compliance and submit application",
    desc: "Tick the self-declaration checkbox confirming: (i) Entity is working towards innovation, (ii) Turnover does not exceed ₹100 crore, (iii) Entity is not formed by splitting/reconstruction, (iv) All information provided is true. Click 'Submit Application'.",
    icon: CheckCircle,
  },
  {
    step: "06",
    title: "Receive acknowledgement and recognition certificate",
    desc: "Acknowledgement email is sent immediately with application reference number. DPIIT reviews the application (usually within 2-5 working days). If approved, you receive Recognition Certificate and Recognition Number via email. Certificate is valid till 10 years from incorporation or ₹100 crore turnover, whichever is earlier.",
    icon: Award,
  },
  {
    step: "07",
    title: "Download certificate and start claiming benefits",
    desc: "Login to Startup India portal, go to 'My Account' > 'My Recognitions' and download the PDF certificate. Use this Recognition Number to apply for 80-IAC tax exemption (via IMB certificate from DPIIT), claim patent rebate, self-certification, government tender benefits and other schemes.",
    icon: Download,
  },
];

const DOCUMENTS_REQUIRED = [
  {
    category: "Entity incorporation/registration proof",
    items: [
      "Certificate of Incorporation (for Pvt Ltd from MCA)",
      "Certificate of Registration (for LLP from MCA)",
      "Partnership Deed + Registration Certificate (for Partnership Firm)",
      "Memorandum and Articles of Association (MOA/AOA) — optional",
    ],
    icon: "📑",
    color: "bg-blue-50 border-blue-100",
  },
  {
    category: "Innovation and business details",
    items: [
      "200-500 word write-up explaining innovation/improvement in product/process/service",
      "Pitch deck or product brochure (optional but recommended for better evaluation)",
      "Website link, app link or demo video (optional)",
      "Details of patents filed/granted, awards won, funding raised (optional)",
    ],
    icon: "💡",
    color: "bg-violet-50 border-violet-100",
  },
  {
    category: "Recommendation (if available)",
    items: [
      "Recommendation/support letter from recognized incubator",
      "Recommendation letter from government-funded accelerator",
      "Letter from funding agency or angel network (optional)",
      "Not mandatory but improves credibility and approval chances",
    ],
    icon: "✉️",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    category: "Founders and directors details",
    items: [
      "List of all directors/partners with DIN/PAN",
      "Brief founder bios with education and experience (optional)",
      "PAN of the entity (required for later claiming 80-IAC)",
      "GST registration certificate (if applicable)",
    ],
    icon: "👥",
    color: "bg-amber-50 border-amber-100",
  },
];

const EIGHTY_IAC_PROCESS = [
  {
    step: "01",
    title: "Obtain DPIIT Startup Recognition Certificate first",
    desc: "Before applying for 80-IAC tax exemption, you must have valid DPIIT Recognition Certificate with Recognition Number. This is the foundational requirement — no recognition means no 80-IAC eligibility.",
  },
  {
    step: "02",
    title: "Apply for Inter-Ministerial Board (IMB) certificate on Startup India portal",
    desc: "Login to startupindia.gov.in, go to 'Tax Exemption' section and apply for IMB certificate. Fill details about business model, financials, innovation, employment generated. Upload business plan, pitch deck, financial projections and bank statements.",
  },
  {
    step: "03",
    title: "IMB evaluates innovation and issues certificate",
    desc: "Inter-Ministerial Board (chaired by Joint Secretary, DPIIT with representatives from CBDT and DBT) reviews the application to verify innovation and scalability. If satisfied, IMB issues 'Certificate of Eligible Business' u/s 80-IAC. Takes 30-60 days.",
  },
  {
    step: "04",
    title: "Choose 3 consecutive years out of first 10 years to claim deduction",
    desc: "Startup can choose any 3 consecutive assessment years out of first 10 years from incorporation to claim 100% deduction. Example: incorporated in FY 2022-23, can choose AY 2025-26, 2026-27, 2027-28 (when profit is expected to be highest).",
  },
  {
    step: "05",
    title: "File ITR and claim deduction u/s 80-IAC with IMB certificate",
    desc: "In the chosen years, file ITR-6 (for companies) or ITR-5 (for LLP/partnership) and claim deduction u/s 80-IAC equal to 100% of profit. Attach IMB certificate copy and DPIIT recognition certificate with ITR. Taxable income becomes zero (but MAT may apply if company under old regime).",
  },
  {
    step: "06",
    title: "Maintain books, get audited and keep records for scrutiny",
    desc: "Startups must maintain proper books of accounts, get statutory audit done, and retain all supporting documents — IMB certificate, financials, business plan, innovation proof — for 8 years. During scrutiny, AO may ask for proof that business is same as approved by IMB.",
  },
];

const RENEWAL_COMPLIANCE = [
  {
    requirement: "Annual turnover declaration",
    detail: "Every year when filing ITR or annual financials, ensure turnover is declared correctly. If turnover exceeds ₹100 crore in any FY, startup loses DPIIT recognition and all benefits from that year onwards. No grace period — benefits stop immediately.",
    icon: "📊",
    color: "bg-rose-50 border-rose-100 text-rose-800",
  },
  {
    requirement: "Update Startup India profile regularly",
    detail: "Login to startupindia.gov.in and update your startup profile with latest funding rounds, product launches, team size, revenue milestones and awards. Active profile increases chances of getting noticed by investors, government buyers and accelerators.",
    icon: "🔄",
    color: "bg-blue-50 border-blue-100 text-blue-800",
  },
  {
    requirement: "Recognition valid for 10 years from incorporation",
    detail: "DPIIT recognition is valid for 10 years from date of incorporation or till turnover exceeds ₹100 crore, whichever is earlier. No need to renew annually. However, for claiming specific benefits like 80-IAC, separate applications (e.g., IMB certificate) are required.",
    icon: "⏳",
    color: "bg-emerald-50 border-emerald-100 text-emerald-800",
  },
  {
    requirement: "Maintain records of innovation and patents filed",
    detail: "Keep documented proof of innovation — R&D reports, patent applications, product development logs, customer testimonials showing improvement or new solution. This may be asked during benefit claim verification or government scheme applications.",
    icon: "📁",
    color: "bg-violet-50 border-violet-100 text-violet-800",
  },
  {
    requirement: "Inform DPIIT if entity undergoes merger, acquisition or name change",
    detail: "If your startup is acquired, merged with another company or changes name/CIN/LLPIN, inform DPIIT via email to dipp-startupindia@gov.in with updated incorporation certificate, board resolution and details. Recognition can be transferred subject to approval.",
    icon: "🔔",
    color: "bg-amber-50 border-amber-100 text-amber-800",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Applying with sole proprietorship or public company",
    why: "DPIIT recognition is available only for Private Limited, LLP and Registered Partnership. Sole proprietorships, public companies, Section 8 companies, societies and trusts are not eligible. Check entity type before applying.",
    fix: "Convert to Pvt Ltd or LLP, get incorporation certificate, then apply for DPIIT recognition.",
    icon: "❌",
  },
  {
    mistake: "Generic or vague innovation description",
    why: "Writing 'We provide IT services' or 'We sell products online' is too vague. DPIIT evaluators look for specific innovation — new algorithm, novel process, unique product feature, technology differentiation or significant improvement with proof.",
    fix: "Write 300-500 words explaining the problem, your unique solution, why it is innovative, tech used and scalability potential. Attach product demo or patent details.",
    icon: "📝",
  },
  {
    mistake: "Not applying for IMB certificate separately for 80-IAC",
    why: "DPIIT recognition certificate alone does not give tax exemption. You must separately apply for IMB (Inter-Ministerial Board) certificate on Startup India portal to claim 80-IAC deduction. Many startups miss this step and lose tax benefit.",
    fix: "After getting DPIIT recognition, immediately apply for IMB certificate under 'Tax Exemption' section on startupindia.gov.in. Wait for IMB approval before claiming 80-IAC in ITR.",
    icon: "⚠️",
  },
  {
    mistake: "Exceeding ₹100 crore turnover without informing DPIIT",
    why: "Once turnover crosses ₹100 crore in any FY, startup loses eligibility and all benefits stop. If you continue claiming benefits after crossing limit, it is misrepresentation and penalties u/s 270A (50%-200% penalty) can apply.",
    fix: "Track turnover monthly. If crossing ₹100 crore is imminent, stop claiming DPIIT benefits from that FY onwards. Inform DPIIT via email and update Startup India profile.",
    icon: "🚨",
  },
  {
    mistake: "Not maintaining proper books and audit for 80-IAC claim",
    why: "Section 80-IAC requires statutory audit and proper books of accounts. If you claim 100% deduction but do not have audited financials, business plan and innovation proof, the deduction will be disallowed during scrutiny with 50% penalty.",
    fix: "Get statutory audit done every year, maintain separate project-wise accounting for innovation activities, and keep all documents — IMB certificate, pitch deck, financials — for 8 years.",
    icon: "📚",
  },
];

const FAQS = [
  {
    question: "What is the difference between DPIIT recognition and IMB certificate for 80-IAC?",
    answer:
      "DPIIT Startup Recognition Certificate is the foundational recognition issued by Department for Promotion of Industry and Internal Trade (DPIIT) that certifies your entity as an eligible 'startup' under Startup India scheme. It gives you access to various benefits — patent rebate, self-certification, government tender relaxations, Fund of Funds access and angel tax exemption. IMB (Inter-Ministerial Board) Certificate is a separate, additional certificate issued specifically for claiming 80-IAC income tax deduction. IMB evaluates whether your business is innovative enough to qualify for 100% tax holiday for 3 years. You must first have DPIIT recognition before you can apply for IMB certificate. Think of it as two-step: Step 1 — DPIIT recognition (opens general benefits), Step 2 — IMB certificate (unlocks 80-IAC tax exemption specifically).",
  },
  {
    question: "Can a startup incorporated 8 years ago still apply for DPIIT recognition in 2025?",
    answer:
      "Yes, if the startup was incorporated on or after 1 April 2015, it is still eligible in 2025 because the 10-year eligibility window is calculated from date of incorporation, not application date. For example, a startup incorporated on 15 June 2016 will be eligible till 14 June 2026. However, benefits like 80-IAC tax exemption can be claimed only for any 3 consecutive years out of the first 10 years from incorporation. So an 8-year-old startup (incorporated in 2017) can still get DPIIT recognition in 2025, but can only claim 80-IAC for 2 more years (AY 2026-27 and 2027-28) before the 10-year window closes in 2027. It is advisable to apply early to maximize tax benefit years.",
  },
  {
    question: "Do I need to renew DPIIT recognition certificate every year?",
    answer:
      "No. DPIIT Startup Recognition Certificate is valid for the entire 10-year period from date of incorporation or until turnover exceeds ₹100 crore in any financial year, whichever is earlier. There is no annual renewal process for the recognition certificate itself. However, you must keep your Startup India profile updated with latest information — funding, team, revenue, product milestones. Additionally, if you want to claim specific benefits like 80-IAC tax exemption, you need to apply for IMB certificate separately and that is valid for the 3 chosen years. Similarly, self-certification under labor laws is valid for the period specified (3-6 years), but the DPIIT recognition itself does not expire till 10 years or ₹100 crore turnover.",
  },
  {
    question: "Can LLP and partnership firms also claim 80-IAC tax exemption like Private Limited companies?",
    answer:
      "Yes. Section 80-IAC tax exemption is available to all three eligible entity types — Private Limited Company, Limited Liability Partnership (LLP) and Registered Partnership Firm — provided they have valid DPIIT recognition and IMB certificate. The deduction is 100% of profit for any 3 consecutive assessment years out of first 10 years from incorporation/registration. However, there is one important difference: For companies under the old tax regime, MAT (Minimum Alternate Tax) at 15% on book profit may still apply even after 80-IAC deduction (though MAT credit can be carried forward). For LLPs and partnerships, there is no MAT, so 80-IAC deduction makes taxable income zero and tax liability zero (except for advance tax interest if not paid on time). From a tax perspective, LLPs and partnerships get cleaner tax holiday benefit than companies under old regime.",
  },
  {
    question: "What happens if my startup crosses ₹100 crore turnover in the 7th year?",
    answer:
      "If your startup's turnover exceeds ₹100 crore in any financial year, you lose DPIIT recognition and all associated benefits from that financial year onwards. Using your example: if a startup incorporated in FY 2019-20 crosses ₹100 crore turnover in FY 2025-26 (7th year), then from FY 2025-26 onwards, the startup is no longer eligible for DPIIT benefits — cannot claim 80-IAC deduction for subsequent years, loses patent rebate, self-certification benefits and government tender relaxations. If you had already started claiming 80-IAC for 3 years (say AY 2023-24, 2024-25, 2025-26), the deduction claimed for AY 2023-24 and 2024-25 remains valid, but for AY 2025-26 onwards you cannot claim it. The loss of eligibility is immediate and non-reversible. It is advisable to plan 80-IAC claim years strategically — choose 3 consecutive years when profit is highest and within the 10-year and ₹100 crore window.",
  },
  {
    question: "Can I get DPIIT recognition if I have already raised funding and issued shares at premium?",
    answer:
      "Yes. Having raised funding, issued shares at premium or even having existing investors does not disqualify you from DPIIT recognition. In fact, raising angel or VC funding often strengthens your application because it demonstrates innovation and scalability — which are core eligibility criteria. From AY 2025-26 onwards, angel tax u/s 56(2)(viib) has been abolished for all investors, so share premium is not taxed anyway. For prior years (AY 2024-25 and earlier), if you had DPIIT recognition at the time of share issue, you were already exempt from angel tax via G.S.R. 127(E) notification. The only turnover-related restriction is that annual turnover must not exceed ₹100 crore — not funding raised. You can raise ₹10 crore, ₹50 crore or ₹100 crore in funding and still hold DPIIT recognition as long as turnover is below ₹100 crore and other eligibility criteria are met.",
  },
  {
    question: "How long does it take to get DPIIT recognition certificate after applying online?",
    answer:
      "DPIIT recognition is typically granted within 2-5 working days if all information is correctly filled and mandatory documents are uploaded. The process is largely automated — after you submit the application on startupindia.gov.in, the system verifies entity details (CIN/LLPIN), incorporation date and turnover from MCA database. If there are no discrepancies and the innovation description is adequate, the recognition certificate is auto-generated and emailed to you. In some cases where additional verification is needed (e.g., partnership firms, borderline turnover, unclear innovation), it may take 7-10 working days and DPIIT may ask for clarifications via email. After receiving the certificate, you can immediately use it to claim patent rebate, self-certification and government tender benefits. However, for 80-IAC tax exemption, you need to separately apply for IMB certificate, which takes an additional 30-60 days for evaluation and approval.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DPIIT Startup Recognition: Benefits, Eligibility & Application Process 2025",
  description:
    "A comprehensive guide to DPIIT Startup India Recognition 2025 — covering tax exemption under 80-IAC, patent rebate, self-certification, eligibility criteria, online application process, required documents and how to claim benefits.",
  url: "https://www.taxvio.in/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
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
  wordCount: 3400,
  inLanguage: "en-IN",
  articleSection: "Startup Compliance",
  keywords: [
    "DPIIT recognition",
    "Startup India",
    "80-IAC tax exemption",
    "startup benefits",
    "patent rebate",
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
      name: "DPIIT Startup Recognition",
      item: "https://www.taxvio.in/guide/itr-blogs/dpiit-startup-recognition-benefits-application",
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

export default function DPIITStartupRecognitionPage() {
  return (
    <>
      <Script
        id="dpiit-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="dpiit-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="dpiit-faq-schema"
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
                "radial-gradient(circle,rgba(251,146,60,0.16) 0%,transparent 65%)",
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
                  DPIIT Startup Recognition
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
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                  Updated for 2025 · Extended till 2030
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  DPIIT Startup Recognition
                  <span className="block mt-2 bg-gradient-to-r from-orange-300 to-emerald-300 bg-clip-text text-transparent">
                    Benefits & Application 2025
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Get <strong className="text-white">100% tax exemption for 3 years</strong> (₹25 lakh
                  saved on ₹1 crore profit), 80% patent rebate, angel tax relief, government tender
                  benefits and fast-track IP — all with one free{" "}
                  <strong className="text-white">DPIIT Startup India certificate</strong>. This guide
                  covers eligibility, online application in 7 steps, IMB 80-IAC process and common
                  mistakes to avoid.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get DPIIT Filing Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#application"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    View Application Process <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  DPIIT benefits snapshot
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Gift,
                      title: "80-IAC tax holiday",
                      text: "100% profit exemption for any 3 years out of first 10 — save ₹25L on ₹1Cr profit",
                    },
                    {
                      icon: Sparkles,
                      title: "Angel tax zero",
                      text: "Share premium fully exempt from AY 2025-26 — raise funds without tax hit",
                    },
                    {
                      icon: Award,
                      title: "80% patent rebate",
                      text: "Pay ₹3,200 instead of ₹16,000 per patent/TM filing for 5 years",
                    },
                    {
                      icon: Shield,
                      title: "Self-certification",
                      text: "Zero labor/environment inspections for 3-6 years — compliance peace",
                    },
                    {
                      icon: Rocket,
                      title: "Fast-track IP",
                      text: "Patent granted in 1-2 years vs 5-7 years — faster commercialization",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-orange-300" />
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
                { icon: BadgeCheck, text: "CA-Assisted Application" },
                { icon: Shield, text: "IMB 80-IAC Support" },
                { icon: Clock, text: "2-5 Day Recognition" },
                { icon: Star, text: "4.9★ Taxvio Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-orange-400" /> {text}
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
                  Startup India Scheme Guide — 2025
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  What Is DPIIT Startup Recognition and Why Every Indian Startup Needs It
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>DPIIT Startup Recognition</strong> is an official certificate issued by the
                  Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce
                  and Industry, Government of India, that certifies your entity as an eligible startup
                  under the <strong>Startup India initiative</strong> launched in January 2016. This
                  recognition is free, online and unlocks 8+ major benefits worth ₹10 lakh to ₹50 lakh
                  over the startup's lifecycle.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The biggest benefit is <strong>Section 80-IAC income tax exemption</strong> — 100%
                  deduction on profit for any 3 consecutive years out of first 10 years from incorporation.
                  For a startup with ₹1 crore annual profit, this means zero tax (₹25 lakh saved per year
                  × 3 years = ₹75 lakh total savings). Add 80% rebate on patent filing fees (save ₹12,000
                  to ₹16,000 per patent/trademark), angel tax exemption (now abolished from AY 2025-26 for
                  all, but DPIIT gave early relief), self-certification for labor and environment laws
                  (zero inspector visits for 3-6 years), and fast-track patent examination (1-2 years vs
                  5-7 years).
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Budget 2025 extended the Startup India scheme to <strong>1 April 2030</strong> — startups
                  incorporated before 1 April 2030 can get DPIIT recognition and claim 80-IAC tax holiday.
                  The turnover cap remains ₹100 crore, and the 10-year eligibility window continues to roll.
                  As of 2025, over 1.2 lakh startups are DPIIT-recognized, and the application process is
                  100% online, paperless and takes 2-5 working days — making it one of the most founder-friendly
                  government schemes in India.
                </p>

                <div className="mt-6">
                  <InfoBox title="DPIIT recognition is NOT the same as company incorporation" color="blue">
                    <p>
                      Many founders confuse DPIIT recognition with company registration. They are separate.
                      You must <strong>first incorporate</strong> your entity as Pvt Ltd, LLP or Partnership
                      with MCA (Ministry of Corporate Affairs) and get CIN/LLPIN. Only <strong>after
                      incorporation</strong> can you apply for DPIIT Startup Recognition on startupindia.gov.in
                      using your CIN/LLPIN. Recognition is voluntary, free and gives access to tax and
                      non-tax benefits.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* KEY BENEFITS */}
              <section id="benefits" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="8 major benefits"
                  heading="Complete List of DPIIT Startup Recognition Benefits"
                  icon={Gift}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here are all the benefits available to DPIIT-recognized startups — tax exemptions,
                  cost reductions, compliance relaxations and funding access:
                </p>

                <div className="grid gap-4">
                  {KEY_BENEFITS.map(({ benefit, desc, icon, color, section, value }) => (
                    <div
                      key={benefit}
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
                            <h3 className="text-sm font-extrabold text-gray-800">{benefit}</h3>
                            <span
                              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color.split(" ").slice(0, 2).join(" ")} border ${color.split(" ")[1]} ${color.split(" ")[2]}`}
                            >
                              {section}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed text-gray-600 mb-2">{desc}</p>
                          <p className="text-[11px] font-semibold text-gray-500">
                            💡 Value: {value}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="80-IAC vs 115BAA — can you use both?" color="amber">
                    <p>
                      No. Section 80-IAC is a <strong>deduction</strong> (reduces taxable income),
                      while 115BAA is a <strong>concessional tax regime</strong> (lower rate but no
                      deductions). If you opt for 115BAA at 25.168%, you cannot claim 80-IAC or any
                      other Chapter VI-A deduction. Most DPIIT startups stay in old regime for first
                      3 years, claim 80-IAC (zero tax), then switch to 115BAA after 3-year holiday ends.
                    </p>
                  </InfoBox>
                  <InfoBox title="Self-certification: which 9 laws covered?" color="green">
                    <p>
                      <strong>3 labor laws:</strong> Payment of Wages Act, Employees' State Insurance
                      Act, Employees' Provident Funds Act. <strong>6 environment laws:</strong> Water
                      (Prevention and Control of Pollution) Act, Air (Prevention and Control of
                      Pollution) Act, Environment (Protection) Act and 3 hazardous waste rules.
                      Self-certification valid for 3-5 years based on law.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* ELIGIBILITY */}
              <section id="eligibility" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Who can apply"
                  heading="DPIIT Startup Recognition Eligibility Criteria"
                  icon={CheckCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Not all businesses qualify. Here are the five mandatory conditions that must be
                  met to get DPIIT recognition:
                </p>

                <div className="space-y-4">
                  {ELIGIBILITY_CRITERIA.map(({ criterion, detail, icon: Icon, color }) => (
                    <div
                      key={criterion}
                      className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                        <Icon size={18} className={color.split(" ")[2]} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-800 mb-2">{criterion}</h3>
                        <p className="text-xs leading-relaxed text-gray-600">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="What qualifies as 'innovation'?" color="blue">
                    <p>
                      DPIIT looks for: (1) <strong>New product/service</strong> — solving a problem
                      in a novel way (e.g., AI-based diagnostics, drone delivery), (2) <strong>New
                      process/technology</strong> — using new tech stack or methodology (e.g.,
                      blockchain for supply chain), (3) <strong>Significant improvement</strong> —
                      making existing solution 10x better/faster/cheaper (e.g., 50% cost reduction
                      in manufacturing via automation). Generic trading, reselling or service businesses
                      without differentiation do not qualify.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* APPLICATION PROCESS */}
              <section id="application" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="7-step online process"
                  heading="How to Apply for DPIIT Startup Recognition Certificate"
                  icon={Upload}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The application is 100% online on startupindia.gov.in. Here is the exact step-by-step
                  process with screenshots reference:
                </p>

                <div className="space-y-4">
                  {APPLICATION_PROCESS.map(({ step, title, desc, icon: Icon }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-[#f8fbfd] border border-gray-100 rounded-2xl p-5"
                    >
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

                <div className="mt-6">
                  <InfoBox title="Application is free — zero government or platform fees" color="green">
                    <p>
                      Unlike company incorporation or GST registration, DPIIT Startup Recognition has
                      <strong>zero fees</strong>. No government fee, no processing fee, no portal
                      charges. It is completely free. However, if you hire a CA or consultant to draft
                      your innovation writeup, prepare pitch deck and handle application, their
                      professional fee is typically ₹5,000 to ₹15,000 depending on complexity.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* DOCUMENTS */}
              <section id="documents" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="What you need"
                  heading="Documents Required for DPIIT Startup Recognition"
                  icon={FileText}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Keep these documents ready before starting the application. All uploads must be in
                  PDF format, max 5MB per file:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {DOCUMENTS_REQUIRED.map(({ category, items, icon, color }) => (
                    <div key={category} className={`rounded-2xl border p-5 ${color}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{icon}</span>
                        <h3 className="text-sm font-bold text-gray-800">{category}</h3>
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
              </section>

              {/* 80-IAC PROCESS */}
              <section id="eighty-iac" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Tax holiday activation"
                  heading="How to Claim 80-IAC Tax Exemption — IMB Certificate Process"
                  icon={IndianRupee}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  DPIIT recognition alone does not give 80-IAC tax exemption. You must separately apply
                  for <strong>IMB (Inter-Ministerial Board) Certificate</strong> on Startup India portal.
                  Here is the complete process:
                </p>

                <div className="space-y-3">
                  {EIGHTY_IAC_PROCESS.map(({ step, title, desc }) => (
                    <div
                      key={step}
                      className="border-l-4 border-emerald-500 bg-emerald-50 p-5 rounded-r-2xl"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700">
                          {step}
                        </span>
                        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
                      </div>
                      <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="Choose 3 years wisely — cannot change later" color="amber">
                    <p>
                      Once you choose your 3 consecutive assessment years for 80-IAC deduction (say
                      AY 2025-26, 2026-27, 2027-28) and claim it in ITR, you cannot change those
                      years later. If your profit was low in chosen years and high in 4th/5th year,
                      you miss the benefit. Strategic choice: forecast profit for next 5 years,
                      choose 3 years when profit is expected to be highest.
                    </p>
                  </InfoBox>
                  <InfoBox title="MAT still applies for companies in old regime" color="rose">
                    <p>
                      If your company is under old tax regime and claims 80-IAC, taxable income
                      becomes zero. But <strong>MAT (Minimum Alternate Tax)</strong> at 15% on book
                      profit may still apply. So effective tax is not truly zero, but 15.6% to 17.472%.
                      MAT credit can be carried forward for 15 years. LLPs and partnerships have no
                      MAT — their tax becomes truly zero.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* RENEWAL */}
              <section id="renewal" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Ongoing compliance"
                  heading="DPIIT Recognition Renewal & Compliance Requirements"
                  icon={RefreshCw}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  DPIIT recognition is valid for 10 years or till ₹100 crore turnover, whichever is
                  earlier. However, there are a few ongoing compliance and reporting requirements:
                </p>

                <div className="space-y-4">
                  {RENEWAL_COMPLIANCE.map(({ requirement, detail, icon, color }) => (
                    <div
                      key={requirement}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800 mb-2">
                            {requirement}
                          </h3>
                          <p className="text-xs leading-relaxed text-gray-600">{detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Avoid these"
                  heading="5 Common Mistakes Startups Make with DPIIT Recognition"
                  icon={XCircle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Many startups get DPIIT recognition but fail to unlock full benefits due to these
                  easily avoidable mistakes:
                </p>

                <div className="space-y-4">
                  {COMMON_MISTAKES.map(({ mistake, why, fix, icon }) => (
                    <div
                      key={mistake}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h4 className="text-sm font-extrabold text-rose-700 mb-2">
                            {mistake}
                          </h4>
                          <p className="text-xs leading-relaxed text-gray-600 mb-3">
                            <strong>Why it happens:</strong> {why}
                          </p>
                          <div className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                            <p className="text-xs leading-relaxed text-emerald-700">
                              <strong>Fix:</strong> {fix}
                            </p>
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
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-300">
                      Need DPIIT recognition + 80-IAC help?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your DPIIT application & IMB certificate
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team drafts your innovation writeup, prepares business plan and financials,
                      files DPIIT application, applies for IMB certificate and ensures you claim full
                      80-IAC tax exemption in ITR — end-to-end support.
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
                  heading="DPIIT Startup Recognition — FAQs"
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
                  education on DPIIT Startup India Recognition and associated benefits as of 2025.
                  Eligibility criteria, turnover limits, tax provisions and government schemes are
                  subject to change via DPIIT notifications, Finance Acts and CBDT circulars. Specific
                  benefit applicability depends on entity type, incorporation date, turnover, innovation
                  profile and compliance with all conditions. Always obtain written confirmation from
                  DPIIT, IMB or a qualified CA before claiming tax exemptions or other benefits. Taxvio
                  is not liable for decisions made based on this article.
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
                      ["#benefits", "8 major benefits"],
                      ["#eligibility", "Eligibility criteria"],
                      ["#application", "Application process"],
                      ["#documents", "Documents required"],
                      ["#eighty-iac", "80-IAC IMB process"],
                      ["#renewal", "Renewal & compliance"],
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
                    <MessageCircle size={18} className="text-orange-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">DPIIT + 80-IAC help?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get expert CA help to apply for DPIIT recognition, IMB certificate and claim
                    full 80-IAC tax exemption for 3 years.
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
                    label: "Startup Registration",
                    sub: "Pvt Ltd, LLP incorporation",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                    label: "Corporate Tax Guide",
                    sub: "115BAA, 80-IAC, deductions",
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
                Related Startup & Tax Guides
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                  title: "Legal Ways to Reduce Corporate Tax",
                  text: "115BAA, 80M, 80JJAA, depreciation and smart planning for FY 2025-26.",
                },
                {
                  href: "/guide/itr-blogs/proprietorship-vs-llp-vs-private-limited-conversion",
                  title: "Proprietorship vs LLP vs Private Limited",
                  text: "Complete comparison, conversion process, tax rates and when to switch.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Startup Tax Expert",
                  text: "Get CA-assisted DPIIT recognition, 80-IAC IMB certificate and startup compliance support.",
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
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20want%20help%20with%20DPIIT%20Startup%20Recognition%20and%2080-IAC%20tax%20exemption`}
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