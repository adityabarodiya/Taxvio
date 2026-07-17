// app/guide/itr-blogs/incometax-gov-in/page.tsx

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
  Lock,
  Smartphone,
  Globe,
  RefreshCw,
  ChevronDown,
  LogIn,
  Users,
  FileCheck,
  Zap,
  Bell,
  CreditCard,
  Home,
  Building2,
  FileQuestion,
  HelpCircle,
  Briefcase,
  Percent,
  Receipt,
  FileSpreadsheet,
  History,
  Settings,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Incometax.gov.in — Complete Guide to Income Tax Portal 2025 | Taxvio",
  description:
    "Everything about incometax.gov.in — ITR filing, registration, login, PAN card services, refund status, Form 26AS, AIS, TIS, tax payment, notices, grievances and all portal features explained for FY 2024-25.",
  keywords: [
    "incometax.gov.in",
    "income tax portal India",
    "ITR filing online",
    "incometax gov in login",
    "income tax e-filing portal",
    "PAN card services",
    "income tax refund status",
    "Form 26AS online",
    "AIS income tax",
    "TIS tax statement",
    "income tax payment online",
    "tax notice response",
    "income tax registration",
    "e-verify ITR",
    "income tax India official website",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/incometax-gov-in",
  },
  openGraph: {
    title: "Incometax.gov.in — Official Income Tax Portal Complete Guide 2025",
    description:
      "Master the official income tax portal — registration, ITR filing, PAN services, refund tracking, AIS/TIS, tax payment, notices and all features explained.",
    url: "https://www.taxvio.in/guide/itr-blogs/incometax-gov-in",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incometax.gov.in Portal Guide — Registration to ITR Filing 2025",
    description:
      "Complete guide to incometax.gov.in — ITR filing, PAN services, refund status, AIS, TIS, tax payment and compliance features.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const PORTAL_OVERVIEW = [
  {
    icon: Globe,
    title: "Official Tax Portal",
    desc: "incometax.gov.in is the only authorized portal of the Income Tax Department of India for all tax-related services — ITR filing, refund tracking, PAN services and compliance.",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    icon: Users,
    title: "For All Taxpayers",
    desc: "Serves individual taxpayers, businesses, companies, non-residents, tax deductors, CAs, tax professionals and government entities with dedicated login portals.",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    icon: Shield,
    title: "Secure & Authenticated",
    desc: "Multi-factor authentication using PAN, Aadhaar OTP, EVC and DSC. All transactions are encrypted and logged for audit purposes.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    desc: "Instant ITR acknowledgement, live refund status updates, automated intimations under Section 143(1) and direct credit of refunds to bank accounts.",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
];

const KEY_SERVICES = [
  {
    service: "e-Filing of Income Tax Returns (ITR)",
    desc: "File ITR-1 to ITR-7 online for individuals, HUFs, firms, companies and trusts. Pre-filled data from AIS/TIS, auto-calculation of tax and instant acknowledgement (ITR-V).",
    icon: FileText,
    link: "#itr-filing",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    service: "PAN Card Services",
    desc: "Apply for new PAN (Form 49A/49AA), request PAN correction, reprint PAN card, link PAN with Aadhaar, verify PAN status and download e-PAN instantly.",
    icon: CreditCard,
    link: "#pan-services",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    service: "Refund Status & Tracking",
    desc: "Check real-time status of ITR refund — whether it's under processing, issued to bank, or failed. Download refund confirmation and update bank account details.",
    icon: IndianRupee,
    link: "#refund-status",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    service: "Tax Payment via Challan",
    desc: "Pay advance tax, self-assessment tax, TDS/TCS, regular assessment tax and penalties using Challan 280 or ITNS 281 via net banking, debit/credit card or NEFT/RTGS.",
    icon: Receipt,
    link: "#tax-payment",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    service: "View Form 26AS & TDS Certificate",
    desc: "Access your consolidated tax credit statement showing TDS deducted, advance tax paid, TCS collected and tax refunds. Download TDS certificates (Form 16/16A) from deductors.",
    icon: FileSpreadsheet,
    link: "#form-26as",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    service: "Annual Information Statement (AIS)",
    desc: "View comprehensive income data reported by third parties — salary, interest, dividends, securities transactions, property sale, foreign remittance and high-value transactions.",
    icon: Eye,
    link: "#ais-tis",
    color: "bg-cyan-50 border-cyan-100 text-cyan-700",
  },
  {
    service: "Tax Information Statement (TIS)",
    desc: "Edit and reconcile AIS data before ITR filing. Accept, reject or provide feedback on income entries. Accepted entries auto-fill your ITR form.",
    icon: FileCheck,
    link: "#ais-tis",
    color: "bg-purple-50 border-purple-100 text-purple-700",
  },
  {
    service: "Response to Notices & Orders",
    desc: "View and respond to notices under Section 143(2), 142(1), 148, 156 and others. Upload supporting documents, file rectification requests and track case status.",
    icon: Bell,
    link: "#notices",
    color: "bg-orange-50 border-orange-100 text-orange-700",
  },
  {
    service: "Outstanding Tax Demand",
    desc: "Check pending tax demands under Section 143(1), pay online via challan or file rectification if the demand is incorrect. View demand register and challan history.",
    icon: AlertCircle,
    link: "#tax-demand",
    color: "bg-red-50 border-red-100 text-red-700",
  },
  {
    service: "Compliance & Pending Actions",
    desc: "Dashboard showing all pending items — unfiled ITRs, unverified returns, response pending to notices, outstanding demands, TDS defaults and other compliance alerts.",
    icon: CheckCircle,
    link: "#compliance",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
  {
    service: "TAN Services for Deductors",
    desc: "Apply for TAN, file quarterly TDS/TCS returns (24Q, 26Q, 27Q, 27EQ), view challan status, download TDS certificates, file correction statements via TRACES.",
    icon: Building2,
    link: "#tan-services",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    service: "Grievance Redressal & Help",
    desc: "Raise service requests for refund reissue, login issues, PAN-Aadhaar linking failures, rectification delays and other technical or procedural grievances. Track grievance status.",
    icon: HelpCircle,
    link: "#grievances",
    color: "bg-pink-50 border-pink-100 text-pink-700",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "Visit incometax.gov.in",
    desc: "Open the official portal at www.incometax.gov.in in any browser (Chrome, Firefox, Safari, Edge). Click on 'Register Yourself' or 'Register' link on the homepage.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Select user category",
    desc: "Choose 'Taxpayer' if you are an individual, HUF or AOP. Choose 'Tax Professional/CA' if you are an authorized representative. Companies and firms select 'Others'.",
    icon: Users,
  },
  {
    step: "03",
    title: "Enter PAN details",
    desc: "Enter your PAN (permanent account number), full name as per PAN, date of birth/date of incorporation and registered mobile number. Click 'Continue'.",
    icon: CreditCard,
  },
  {
    step: "04",
    title: "Aadhaar OTP verification (if linked)",
    desc: "If your PAN is linked to Aadhaar, an OTP will be sent to your Aadhaar-registered mobile. Enter the 6-digit OTP to authenticate your identity.",
    icon: Smartphone,
  },
  {
    step: "05",
    title: "Set password and security question",
    desc: "Create a strong password (min 8 characters with uppercase, lowercase, number and special character). Select a security question and provide an answer for account recovery.",
    icon: Lock,
  },
  {
    step: "06",
    title: "Email and mobile verification",
    desc: "Enter your email address. OTPs will be sent to both email and mobile. Enter both OTPs to complete email/mobile verification and activate your account.",
    icon: CheckCircle,
  },
  {
    step: "07",
    title: "Complete profile details",
    desc: "Login with PAN and password. Navigate to 'My Profile' and add address, bank account (for refunds), communication preferences and other required details. Save the profile.",
    icon: UserCheck,
  },
];

const LOGIN_METHODS = [
  {
    method: "User ID (PAN) + Password",
    desc: "Standard login method for all users. Enter your PAN as User ID and the password you set during registration. This is the most common login method.",
    icon: "🔑",
    steps: [
      "Visit incometax.gov.in",
      "Click 'Login'",
      "Enter PAN and Password",
      "Click 'Continue'",
    ],
  },
  {
    method: "Aadhaar OTP",
    desc: "Login using PAN and Aadhaar OTP if PAN-Aadhaar is linked. OTP is sent to Aadhaar-registered mobile. No password required. Valid for one session only.",
    icon: "📱",
    steps: [
      "Click 'Login with Aadhaar OTP'",
      "Enter PAN",
      "Click 'Request OTP'",
      "Enter OTP received on Aadhaar mobile",
    ],
  },
  {
    method: "EVC via Net Banking",
    desc: "Electronic Verification Code (EVC) generated via net banking. Available for select banks. Used primarily for ITR e-verification but can also be used for login.",
    icon: "🏦",
    steps: [
      "Login to your bank's net banking",
      "Generate EVC from tax section",
      "Use EVC on income tax portal",
      "Login or e-verify ITR",
    ],
  },
  {
    method: "Digital Signature Certificate (DSC)",
    desc: "Companies, LLPs and businesses with Class 2/3 DSC can use digital signature for secure login. DSC is mandatory for certain business filings.",
    icon: "🔐",
    steps: [
      "Connect DSC token/USB",
      "Click 'Login with DSC'",
      "Select certificate",
      "Enter DSC password/PIN",
    ],
  },
];

const ITR_FILING_STEPS = [
  {
    step: "01",
    title: "Login to incometax.gov.in",
    desc: "Login using your PAN and password or Aadhaar OTP. Navigate to the dashboard and click on 'e-File' > 'File Income Tax Return'.",
    icon: LogIn,
  },
  {
    step: "02",
    title: "Select assessment year and ITR form",
    desc: "Choose the assessment year (e.g., AY 2025-26 for FY 2024-25). The portal recommends the applicable ITR form based on your income sources, or you can select manually (ITR-1 to ITR-7).",
    icon: FileText,
  },
  {
    step: "03",
    title: "Choose filing mode — Online or Upload",
    desc: "For ITR-1 and ITR-4, you can fill the form online (recommended for most users). For other ITR forms, you can prepare offline using ITR utility and upload JSON file.",
    icon: Upload,
  },
  {
    step: "04",
    title: "Verify and edit pre-filled data",
    desc: "The portal pre-fills data from Form 26AS, AIS and TIS — salary, TDS, interest income, capital gains. Verify each section carefully and edit if required.",
    icon: Eye,
  },
  {
    step: "05",
    title: "Enter additional income and deductions",
    desc: "Add any income not captured (business income, cash receipts, rental income). Claim deductions under Chapter VI-A (80C, 80D, 80G, etc.). Portal auto-calculates tax liability.",
    icon: Calculator,
  },
  {
    step: "06",
    title: "Pay self-assessment tax (if any)",
    desc: "If there is tax payable after TDS credit, pay via Challan 280 using net banking. Enter challan details (BSR code, date, serial number, amount) in the ITR before submitting.",
    icon: IndianRupee,
  },
  {
    step: "07",
    title: "Preview, validate and submit ITR",
    desc: "Preview the filled ITR. The portal validates for errors and missing mandatory fields. Resolve all errors, accept declaration and submit. Download ITR-V acknowledgement PDF.",
    icon: CheckCircle,
  },
  {
    step: "08",
    title: "E-verify ITR within 30 days",
    desc: "ITR must be e-verified within 30 days of filing. Use Aadhaar OTP, EVC via net banking, DSC, or send signed ITR-V by post to CPC Bangalore. Verification completes the filing process.",
    icon: Shield,
  },
];

const PAN_SERVICES_LIST = [
  {
    service: "Apply for New PAN Card",
    desc: "Individuals and entities without PAN can apply online using Form 49A (Indian residents) or Form 49AA (foreign nationals). Upload documents and receive e-PAN instantly after verification.",
    link: "Quick Links > Instant e-PAN",
  },
  {
    service: "Request PAN Correction",
    desc: "Correct errors in PAN details — name, father's name, date of birth, address, photo, signature. Submit Form for Changes or Correction in PAN Data with supporting documents.",
    link: "Quick Links > Changes or Correction in PAN Data",
  },
  {
    service: "Link PAN with Aadhaar",
    desc: "Mandatory linking as per Section 139AA. Enter PAN, Aadhaar number and name as per Aadhaar. OTP verification required. Free linking available on the portal.",
    link: "Quick Links > Link Aadhaar",
  },
  {
    service: "Download e-PAN",
    desc: "Download e-PAN card (digitally signed PDF) instantly if you have applied for PAN online. Valid for all official purposes. No need to wait for physical card.",
    link: "Quick Links > Download e-PAN",
  },
  {
    service: "Verify PAN Details",
    desc: "Verify whether a PAN is valid, active or deactivated. Check PAN details for name mismatch, date of birth and status. Used for vendor verification and KYC compliance.",
    link: "Quick Links > Verify Your PAN",
  },
  {
    service: "Reprint/Reissue PAN Card",
    desc: "If PAN card is lost, damaged or incorrect details are printed, request reprint online. A new physical PAN card will be dispatched to your registered address.",
    link: "Services > Request for Reprint of PAN Card",
  },
];

const REFUND_STATUS_STEPS = [
  {
    method: "With Login",
    steps: [
      "Login to incometax.gov.in",
      "Go to 'Services' > 'Refund/Demand Status'",
      "Select Assessment Year",
      "View refund status, amount and bank details",
      "Download refund confirmation if issued",
    ],
    icon: "🔐",
  },
  {
    method: "Without Login (PAN-based)",
    steps: [
      "Visit incometax.gov.in/iec/foportal",
      "Click 'Refund/Demand Status'",
      "Enter PAN and Captcha",
      "View refund status for all assessment years",
      "Note: Cannot download confirmation without login",
    ],
    icon: "🔓",
  },
];

const REFUND_STATUSES = [
  {
    status: "Refund Determined",
    meaning: "ITR processed; refund amount calculated and approved by CPC/AO.",
    action: "Wait for refund to be issued. Usually takes 7–21 days.",
  },
  {
    status: "Refund Issued",
    meaning: "Refund has been credited to your bank account via NEFT.",
    action: "Check bank statement. Download refund confirmation from portal.",
  },
  {
    status: "Refund Failed",
    meaning: "Refund could not be credited — bank account closed, name mismatch, incorrect IFSC, etc.",
    action: "Update bank account in 'My Profile'. Raise refund reissue request.",
  },
  {
    status: "Refund Adjusted Against Demand",
    meaning: "Refund was adjusted against outstanding tax demand from previous years.",
    action: "Check demand register. If incorrect, file rectification request.",
  },
  {
    status: "Under Processing",
    meaning: "ITR is being processed at CPC Bangalore. Refund not yet determined.",
    action: "Wait for processing to complete. Check after 2–4 weeks.",
  },
];

const TAX_PAYMENT_CHALLANS = [
  {
    challan: "Challan 280",
    purpose: "Income Tax Payment",
    usage: "Advance tax, self-assessment tax, regular assessment tax, tax on distributed income, and other direct tax payments by individuals, companies, firms.",
    taxCodes: "100 (Advance Tax), 102 (TDS/TCS), 300 (Self-Assessment Tax), 400 (Regular Assessment)",
  },
  {
    challan: "ITNS 281",
    purpose: "TDS/TCS Payment",
    usage: "Tax deducted at source (TDS) or tax collected at source (TCS) by deductors/collectors. Includes salary TDS, contractor TDS, professional fees TDS, rent TDS.",
    taxCodes: "Section 192 (Salary), 194C (Contractor), 194J (Professional Fees), 194I (Rent)",
  },
  {
    challan: "Challan 282",
    purpose: "Gift Tax, Wealth Tax, Other Taxes",
    usage: "Now rarely used as gift tax and wealth tax have been abolished. May be used for securities transaction tax (STT) in specific cases.",
    taxCodes: "Varies by tax type",
  },
];

const COMMON_ERRORS = [
  {
    error: "PAN-Aadhaar Not Linked",
    solution: "Go to Quick Links > Link Aadhaar. Enter PAN, Aadhaar and name. Verify via Aadhaar OTP. Linking is mandatory for ITR filing from AY 2023-24.",
    impact: "Cannot file ITR; PAN may become inoperative from 1 July",
    icon: "🔗",
  },
  {
    error: "Forgot Password / Cannot Login",
    solution: "Click 'Forgot Password' on login page. Enter PAN. OTPs sent to registered email and mobile. Enter both OTPs and reset password. If email/mobile not accessible, raise service request.",
    impact: "Cannot access any portal service until password is reset",
    icon: "🔒",
  },
  {
    error: "Mismatch in Form 26AS and AIS",
    solution: "Download both Form 26AS and AIS. Reconcile manually. If income shown in AIS is incorrect, provide feedback in TIS. If TDS not reflected in 26AS, ask deductor to file correction return.",
    impact: "ITR processing delay, incorrect tax calculation, notices from ITD",
    icon: "⚠️",
  },
  {
    error: "Refund Not Received / Refund Failed",
    solution: "Check refund status. If 'Refund Failed', update bank account in My Profile (name, account number, IFSC). Raise refund reissue request under Services > Service Request.",
    impact: "Refund stuck; must be manually reissued after bank update",
    icon: "💸",
  },
  {
    error: "ITR Not E-Verified Within 30 Days",
    solution: "If 30-day deadline missed, ITR is invalid. File a fresh return if still within due date, or file belated/revised return. Enable SMS alerts to avoid missing verification deadline in future.",
    impact: "ITR treated as not filed; penalties and interest applicable",
    icon: "⏰",
  },
  {
    error: "Outstanding Tax Demand — Incorrect Calculation",
    solution: "Login > e-File > Response to Outstanding Tax Demand. View demand order. If incorrect, file rectification request under Section 154 with supporting documents. Track rectification status online.",
    impact: "Demand interest accrues until rectified; may affect credit score",
    icon: "📄",
  },
  {
    error: "Notice Received — 143(2), 142(1), 148",
    solution: "View notice under e-File > Pending Actions or My Account > View Notices. Download notice PDF. Consult CA to draft response. Upload response and supporting documents before deadline. Track case status.",
    impact: "Non-compliance leads to best judgement assessment, penalties",
    icon: "🔔",
  },
];

const FAQS = [
  {
    question: "What is the official website for income tax in India?",
    answer:
      "The official website is www.incometax.gov.in. This is the only authorized portal of the Income Tax Department of India for all tax-related services — ITR filing, PAN services, tax payment, refund tracking, notices, compliance and grievances. Do not use any third-party website claiming to be 'official' — always verify the URL is incometax.gov.in before entering any credentials.",
  },
  {
    question: "How do I register on incometax.gov.in for the first time?",
    answer:
      "Visit incometax.gov.in and click 'Register Yourself'. Enter your PAN, name, date of birth and mobile number. If PAN-Aadhaar is linked, verify using Aadhaar OTP. Set password and security question. Verify email and mobile via OTP. Complete profile with address and bank details. Registration is free and takes 10–15 minutes. Once registered, you can login anytime using PAN and password.",
  },
  {
    question: "Can I file ITR on incometax.gov.in without a CA?",
    answer:
      "Yes. Individual taxpayers with straightforward income sources (salary, interest, rental income, capital gains) can file ITR themselves using the online filing mode. ITR-1 (Sahaj) and ITR-4 (Sugam) have user-friendly online forms with pre-filled data and auto-calculation. For complex returns (business income, foreign assets, multiple properties, partnership), consulting a CA is recommended.",
  },
  {
    question: "How do I link my PAN with Aadhaar on incometax.gov.in?",
    answer:
      "Login to incometax.gov.in or visit without login via Quick Links > Link Aadhaar. Enter your PAN, Aadhaar number and name exactly as per Aadhaar card. Click 'Validate'. An OTP will be sent to your Aadhaar-registered mobile. Enter OTP and submit. Linking confirmation is displayed instantly. Linking is mandatory for ITR filing and to keep PAN active.",
  },
  {
    question: "What is the difference between Form 26AS, AIS and TIS?",
    answer:
      "Form 26AS is your tax credit statement showing TDS deducted, advance tax paid, TCS collected and refunds. AIS (Annual Information Statement) is a comprehensive data statement showing all income reported by third parties — salary, interest, dividends, securities transactions, property purchases, foreign remittance. TIS (Tax Information Statement) is an editable version of AIS where you can accept, reject or provide feedback on entries before using them in ITR. All three are available on incometax.gov.in.",
  },
  {
    question: "How can I check my income tax refund status?",
    answer:
      "Login to incometax.gov.in and go to Services > Refund/Demand Status. Select the assessment year and view refund status. You can also check without login by visiting incometax.gov.in/iec/foportal and entering your PAN. Status will show 'Refund Determined', 'Refund Issued', 'Refund Failed' or 'Under Processing'. If refund failed, update bank account and raise reissue request.",
  },
  {
    question: "Is incometax.gov.in safe for online transactions?",
    answer:
      "Yes. The portal uses 256-bit SSL encryption for all data transmission, multi-factor authentication (PAN + password/OTP/EVC/DSC) and secure payment gateways (SBI, HDFC, ICICI) for tax payments. All transactions are logged and can be audited. However, never share your password, OTP or login credentials with anyone. Always verify the URL is 'https://www.incometax.gov.in' before entering sensitive information.",
  },
  {
    question: "What should I do if I receive a notice on the portal?",
    answer:
      "Login to incometax.gov.in and go to e-File > Pending Actions or My Account > View Notices. Download the notice PDF and read it carefully. Check the section under which the notice is issued (143(2), 142(1), 148, 156, etc.) and the deadline for response. Consult a CA to understand the notice and prepare a response. Upload the response and supporting documents on the portal before the deadline. Track the case status under 'My Account'.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Incometax.gov.in — Complete Guide to Official Income Tax Portal 2025",
  description:
    "Comprehensive guide to incometax.gov.in — the official income tax portal of India. Covers registration, login, ITR filing, PAN services, refund status, Form 26AS, AIS, TIS, tax payment, notices, compliance and all portal features for FY 2024-25.",
  url: "https://www.taxvio.in/guide/itr-blogs/incometax-gov-in",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/incometax-gov-in",
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
  wordCount: 4500,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "incometax.gov.in",
    "income tax portal",
    "ITR filing",
    "PAN services",
    "refund status",
    "Form 26AS",
    "AIS",
    "TIS",
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
      name: "Incometax.gov.in Portal Guide",
      item: "https://www.taxvio.in/guide/itr-blogs/incometax-gov-in",
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

export default function IncometaxGovInPage() {
  return (
    <>
      <Script
        id="incometax-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="incometax-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="incometax-faq-schema"
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
                  Incometax.gov.in Portal
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
                  Official Income Tax Portal Guide
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Incometax.gov.in —
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Complete Portal Guide 2025
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  <strong className="text-white">incometax.gov.in</strong> is
                  the official portal of the Income Tax Department of India.
                  This comprehensive guide covers everything — registration,
                  ITR filing, PAN services, refund tracking, Form 26AS, AIS,
                  TIS, tax payment, notices and all compliance features for FY
                  2024-25.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    File ITR Online <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    Talk to Expert <MessageCircle size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick highlights card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Portal at a glance
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      title: "Official portal",
                      text: "www.incometax.gov.in — only authorized tax portal in India",
                    },
                    {
                      icon: FileText,
                      title: "ITR filing",
                      text: "File ITR-1 to ITR-7 with pre-filled data and auto-calculation",
                    },
                    {
                      icon: CreditCard,
                      title: "PAN services",
                      text: "Apply, correct, link Aadhaar, download e-PAN instantly",
                    },
                    {
                      icon: IndianRupee,
                      title: "Refund tracking",
                      text: "Real-time status — issued, failed or under processing",
                    },
                    {
                      icon: Eye,
                      title: "AIS & TIS",
                      text: "View comprehensive income data and reconcile before ITR",
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
                { icon: BadgeCheck, text: "CA-Verified Filing" },
                { icon: Shield, text: "100% Secure Portal" },
                { icon: Clock, text: "24/7 Portal Access" },
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
                  Income Tax Portal Guide
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  What is Incometax.gov.in?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  <strong>incometax.gov.in</strong> is the official website and
                  e-filing portal of the{" "}
                  <strong>Income Tax Department of India</strong>, operated
                  under the Central Board of Direct Taxes (CBDT), Ministry of
                  Finance, Government of India. Launched in its current form in
                  June 2021, it replaced the older portal
                  (incometaxindiaefiling.gov.in) and serves as the single
                  unified platform for all direct tax compliance and services in
                  India.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The portal caters to more than 9 crore registered taxpayers —
                  individuals, Hindu Undivided Families (HUFs), firms,
                  companies, trusts, non-residents and government entities. It
                  enables taxpayers to file Income Tax Returns (ITR), view tax
                  credit statements (Form 26AS, AIS, TIS), check refund status,
                  pay taxes via challans, respond to notices, manage PAN card
                  services, link PAN-Aadhaar and access various other
                  tax-related services — all online, 24×7.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  For businesses and employers, the portal also facilitates TAN
                  registration, TDS/TCS return filing, TDS certificate
                  generation and compliance management. Tax professionals
                  (Chartered Accountants, Enrolled Agents, Tax Return
                  Preparers) can manage multiple client accounts through
                  authorized access. The portal integrates with the TRACES
                  (TDS Reconciliation Analysis and Correction Enabling System)
                  portal for TDS credit tracking and Form 16/16A download.
                </p>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {PORTAL_OVERVIEW.map(({ icon: Icon, title, desc, color }) => (
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

                <InfoBox title="Always verify the official URL" color="rose">
                  <p>
                    The only official income tax portal URL is{" "}
                    <strong>www.incometax.gov.in</strong>. Beware of phishing
                    websites with similar-looking URLs (e.g., incometax.org.in,
                    incometax-india.com). Always check for the{" "}
                    <strong>HTTPS lock icon</strong> in your browser and never
                    share your password or OTP with anyone.
                  </p>
                </InfoBox>
              </div>

              {/* Key Services */}
              <section id="services" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="What you can do"
                  heading="Key Services Available on Incometax.gov.in"
                  icon={Zap}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The portal offers a comprehensive suite of services covering
                  every aspect of income tax compliance and taxpayer support:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {KEY_SERVICES.map(({ service, desc, icon: Icon, color }) => (
                    <div
                      key={service}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")} hover:shadow-md transition-all`}
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
                            {service}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Registration */}
              <section id="registration" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Getting started"
                  heading="How to Register on Incometax.gov.in"
                  icon={UserCheck}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  First-time users must register on the portal to access any
                  service. Registration is mandatory even for viewing Form 26AS
                  or checking refund status. Here is the complete registration
                  process:
                </p>

                <div className="space-y-4">
                  {REGISTRATION_STEPS.map(({ step, title, desc, icon: Icon }) => (
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

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                  <InfoBox title="PAN is mandatory for registration" color="blue">
                    <p>
                      You cannot register on incometax.gov.in without a valid
                      PAN. If you do not have PAN, apply for one using Form 49A
                      (residents) or 49AA (foreign nationals) on the portal
                      itself. e-PAN is issued instantly after verification.
                    </p>
                  </InfoBox>
                  <InfoBox title="Mobile and email verification required" color="amber">
                    <p>
                      Both mobile number and email address must be verified via
                      OTP during registration. These are used for login alerts,
                      ITR filing confirmations, refund notifications and
                      important tax-related communications.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Login Methods */}
              <section id="login" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Access your account"
                  heading="Login Methods on Incometax.gov.in"
                  icon={Lock}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The portal supports multiple secure login methods to
                  accommodate different user preferences and security
                  requirements:
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {LOGIN_METHODS.map(({ method, desc, icon, steps }) => (
                    <div
                      key={method}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-3xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800">
                            {method}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {desc}
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-xs font-bold text-gray-700 mb-2">
                          Login steps:
                        </p>
                        <ol className="space-y-1">
                          {steps.map((s, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <span className="text-[#0077b6] font-bold shrink-0">
                                {i + 1}.
                              </span>
                              {s}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ITR Filing */}
              <section id="itr-filing" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="File your return"
                  heading="How to File ITR on Incometax.gov.in"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Filing your Income Tax Return on incometax.gov.in is
                  streamlined with pre-filled data, auto-calculation and
                  multiple e-verification options. Here is the complete process:
                </p>

                <div className="space-y-4">
                  {ITR_FILING_STEPS.map(({ step, title, desc, icon: Icon }) => (
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

                <InfoBox title="E-verification is mandatory within 30 days" color="rose">
                  <p>
                    Your ITR is not considered &apos;filed&apos; until you
                    e-verify it within 30 days of submission. If verification is
                    missed, the ITR becomes invalid and you must file a fresh
                    return. Use Aadhaar OTP (instant), EVC via net banking or
                    send signed ITR-V by post to CPC Bangalore.
                  </p>
                </InfoBox>
              </section>

              {/* PAN Services */}
              <section id="pan-services" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="PAN management"
                  heading="PAN Card Services on Incometax.gov.in"
                  icon={CreditCard}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The portal offers comprehensive PAN-related services — from
                  new PAN application to correction, linking and verification:
                </p>

                <div className="space-y-4">
                  {PAN_SERVICES_LIST.map(({ service, desc, link }) => (
                    <div
                      key={service}
                      className="border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                            <CreditCard
                              size={14}
                              className="text-[#00416a] shrink-0"
                            />
                            {service}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {desc}
                          </p>
                          <p className="mt-2 text-xs text-[#0077b6] font-semibold">
                            📍 {link}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="PAN-Aadhaar linking is mandatory" color="rose">
                  <p>
                    As per Section 139AA, linking PAN with Aadhaar is mandatory
                    for filing ITR from AY 2023-24. Non-linked PANs become
                    inoperative from 1 July. Link for free on incometax.gov.in
                    via Quick Links → Link Aadhaar. Verification via Aadhaar OTP
                    is instant.
                  </p>
                </InfoBox>
              </section>

              {/* Refund Status */}
              <section id="refund-status" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Track your refund"
                  heading="How to Check Income Tax Refund Status"
                  icon={IndianRupee}
                />

                <p className="text-sm leading-8 text-gray-600 mb-6">
                  You can check your ITR refund status both with and without
                  login. Here are both methods:
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {REFUND_STATUS_STEPS.map(({ method, steps, icon }) => (
                    <div
                      key={method}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{icon}</span>
                        <h3 className="text-sm font-extrabold text-gray-800">
                          {method}
                        </h3>
                      </div>
                      <ol className="space-y-2">
                        {steps.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="text-[#0077b6] font-bold shrink-0">
                              {i + 1}.
                            </span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                <p className="text-sm font-bold text-gray-800 mb-4">
                  Understanding refund statuses:
                </p>

                <div className="space-y-3">
                  {REFUND_STATUSES.map(({ status, meaning, action }) => (
                    <div
                      key={status}
                      className="flex gap-4 items-start border border-gray-100 rounded-xl p-4 bg-white"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <IndianRupee size={16} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">
                          {status}
                        </h4>
                        <p className="mt-1 text-xs text-gray-600">{meaning}</p>
                        <p className="mt-2 text-xs text-[#0077b6] font-semibold">
                          ➜ {action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tax Payment */}
              <section id="tax-payment" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Pay taxes online"
                  heading="How to Pay Income Tax on Incometax.gov.in"
                  icon={Receipt}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  You can pay all types of income tax online via challans. The
                  portal supports net banking, debit/credit card and NEFT/RTGS
                  payment modes. Here are the main challans:
                </p>

                <div className="space-y-4 mb-8">
                  {TAX_PAYMENT_CHALLANS.map(
                    ({ challan, purpose, usage, taxCodes }) => (
                      <div
                        key={challan}
                        className="border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                            <Receipt size={18} className="text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-extrabold text-gray-800">
                              {challan} — {purpose}
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-gray-600">
                              {usage}
                            </p>
                            <p className="mt-2 text-xs font-semibold text-gray-700">
                              Tax codes: {taxCodes}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <InfoBox title="How to pay tax via challan" color="blue">
                  <p className="mb-2">
                    <strong>Steps:</strong>
                  </p>
                  <ol className="space-y-1 text-sm">
                    <li>1. Login → e-Pay Tax → Select challan type (280/281)</li>
                    <li>2. Enter PAN, assessment year, tax type and amount</li>
                    <li>3. Choose payment mode (net banking/card)</li>
                    <li>4. Complete payment and download challan counterfoil</li>
                    <li>5. Note BSR code, date and serial number for ITR</li>
                  </ol>
                </InfoBox>
              </section>

              {/* Common Errors */}
              <section id="errors" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Troubleshooting"
                  heading="Common Errors & Solutions on Incometax.gov.in"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here are the most frequently encountered issues and how to
                  resolve them:
                </p>

                <div className="space-y-4">
                  {COMMON_ERRORS.map(({ error, solution, impact, icon }) => (
                    <div
                      key={error}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800">
                            {error}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            <strong>Solution:</strong> {solution}
                          </p>
                          <p className="mt-2 text-xs text-rose-600 font-semibold">
                            ⚠ Impact: {impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                      Need help with the portal?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your ITR filing and tax compliance
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team manages portal registration, ITR filing, PAN
                      services, refund tracking, notice response and complete
                      tax compliance — so you don't have to navigate the portal
                      alone.
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
                  heading="Incometax.gov.in FAQs"
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
                  article is for general educational purposes. Portal features,
                  login procedures, ITR forms and compliance requirements are
                  subject to change through Finance Acts, CBDT notifications
                  and departmental updates. Always verify current information
                  on the official portal at incometax.gov.in or consult a
                  qualified tax professional.
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
                      ["#services", "Key services"],
                      ["#registration", "How to register"],
                      ["#login", "Login methods"],
                      ["#itr-filing", "ITR filing process"],
                      ["#pan-services", "PAN services"],
                      ["#refund-status", "Refund status"],
                      ["#tax-payment", "Tax payment"],
                      ["#errors", "Common errors"],
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
                    <MessageCircle size={18} className="text-sky-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    ITR filing help?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    We handle portal registration, ITR filing, PAN-Aadhaar
                    linking and all compliance tasks. Accurate, on-time filing.
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
                    href: "/serviceslist/income-tax/itr-salaried",
                    label: "ITR Filing",
                    sub: "Salaried from ₹699",
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
                  href: "/guide/itr-blogs/form-26as",
                  title: "Form 26AS — Tax Credit Statement",
                  text: "Complete guide to viewing, downloading and reconciling your Form 26AS before ITR filing.",
                },
                {
                  href: "/guide/itr-blogs/how-to-file-tds-return",
                  title: "How to File TDS Return Online",
                  text: "TDS return filing process — forms, RPU, FVU, TRACES and due dates explained.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Tax Expert",
                  text: "Get CA-assisted ITR filing, portal support and complete tax compliance management.",
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