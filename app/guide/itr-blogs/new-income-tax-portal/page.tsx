// app/guide/itr-blogs/new-income-tax-portal/page.tsx

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
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "New Income Tax Portal Guide 2025: Registration, Login & Features | Taxvio",
  description:
    "Complete guide to the new income tax e-filing portal (incometax.gov.in) — registration, login, ITR filing, refund status, Form 26AS, AIS, TIS, compliance checks and all features explained for AY 2025-26.",
  keywords: [
    "new income tax portal",
    "incometax.gov.in login",
    "income tax portal registration",
    "new ITR filing portal",
    "income tax e-filing 2025",
    "AIS income tax portal",
    "TIS tax information statement",
    "Form 26AS new portal",
    "income tax refund status",
    "e-verify ITR new portal",
    "income tax portal features",
    "tax compliance portal India",
    "ITR filing online 2025",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/new-income-tax-portal",
  },
  openGraph: {
    title: "New Income Tax Portal — Complete Guide 2025 | Taxvio",
    description:
      "Everything you need to know about the new income tax e-filing portal — registration, login, ITR filing, AIS, TIS, refund tracking and compliance features for FY 2024-25.",
    url: "https://www.taxvio.in/guide/itr-blogs/new-income-tax-portal",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Income Tax Portal Guide — Registration, Login & Features 2025",
    description:
      "Master the new income tax portal — step-by-step registration, ITR filing, AIS/TIS, refund status and all key features explained.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const KEY_FEATURES = [
  {
    icon: Zap,
    title: "Faster ITR Filing",
    desc: "Pre-filled ITR forms with data from Form 26AS, AIS and TIS. Auto-calculation of tax, faster processing and instant acknowledgement generation.",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    icon: Eye,
    title: "Annual Information Statement (AIS)",
    desc: "Comprehensive view of all financial transactions — salary, interest, dividends, capital gains, TDS, TCS and high-value transactions reported by third parties.",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    icon: FileCheck,
    title: "Tax Information Statement (TIS)",
    desc: "Editable version of AIS where you can accept, reject or provide feedback on transactions before using them in your ITR. Helps avoid mismatches.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Refund Status",
    desc: "Track ITR processing, refund initiation, refund issued status and failure reasons in real-time. Download refund confirmation directly from the portal.",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    icon: Lock,
    title: "Aadhaar-Based OTP Login",
    desc: "Secure login using PAN + Aadhaar OTP or EVC (Electronic Verification Code). Two-factor authentication for enhanced security.",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    icon: Bell,
    title: "Compliance & Alerts",
    desc: "Automated email and SMS alerts for ITR due dates, notices, demand orders, refund status and pending actions. Never miss a deadline.",
    color: "bg-cyan-50 border-cyan-100 text-cyan-700",
  },
  {
    icon: Upload,
    title: "Document Upload & DSC",
    desc: "Upload supporting documents, ITR-V, response to notices and signed forms. Digital Signature Certificate (DSC) support for businesses.",
    color: "bg-purple-50 border-purple-100 text-purple-700",
  },
  {
    icon: Users,
    title: "Multi-User Access for CAs",
    desc: "Chartered Accountants and tax professionals can link multiple client PANs and file returns on their behalf using authorized access.",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "Visit the official portal",
    desc: "Go to incometax.gov.in and click on 'Register' (for first-time users). Make sure you have your PAN card, Aadhaar card and registered mobile number ready.",
    icon: Globe,
  },
  {
    step: "02",
    title: "Enter PAN and other details",
    desc: "Enter your PAN, full name (as per PAN), date of birth and mobile number. The portal will validate your PAN against the ITD database.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Aadhaar verification (if linked)",
    desc: "If your PAN is linked to Aadhaar, an OTP will be sent to your Aadhaar-registered mobile. Enter the OTP to verify your identity.",
    icon: Smartphone,
  },
  {
    step: "04",
    title: "Set password and security question",
    desc: "Create a strong password (minimum 8 characters with uppercase, lowercase, number and special character). Choose a security question and answer for account recovery.",
    icon: Lock,
  },
  {
    step: "05",
    title: "Complete profile",
    desc: "Log in with your PAN and password. Complete your profile by adding email, address, bank account (for refunds), and contact details. Save the profile.",
    icon: FileCheck,
  },
  {
    step: "06",
    title: "Verify email and mobile",
    desc: "The portal will send OTPs to your email and mobile. Enter both OTPs to complete verification. Your account is now fully activated.",
    icon: CheckCircle,
  },
];

const LOGIN_METHODS = [
  {
    method: "PAN + Password",
    desc: "Standard login using your PAN as User ID and the password you set during registration. Suitable for all users.",
    icon: "🔑",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    method: "Aadhaar OTP",
    desc: "Login using PAN and Aadhaar OTP (if PAN-Aadhaar is linked). OTP is sent to Aadhaar-registered mobile. No password required.",
    icon: "📱",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    method: "EVC (Net Banking)",
    desc: "Login via EVC generated through your bank's net banking portal. Available for select banks and for e-verification of ITR.",
    icon: "🏦",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    method: "Digital Signature Certificate",
    desc: "Companies, LLPs and users with Class 2/3 DSC can login using their digital signature. Mandatory for certain business filings.",
    icon: "🔐",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
];

const PORTAL_SECTIONS = [
  {
    section: "Dashboard",
    desc: "Your landing page after login. Shows pending actions, ITR filing status, refund status, outstanding tax demand, recent notices and quick links to key services.",
    features: [
      "Pending compliance items",
      "Recent ITRs filed",
      "Refund/demand summary",
      "Notice and intimation alerts",
    ],
  },
  {
    section: "e-File → File Income Tax Return",
    desc: "Select assessment year, choose ITR form (1, 2, 3, 4, 5, 6 or 7), fill online or upload JSON/XML file, verify data, pay tax if due and submit. Download acknowledgement (ITR-V).",
    features: [
      "Pre-filled data from AIS/TIS",
      "Tax calculation auto-computed",
      "Upload JSON file",
      "E-verify using Aadhaar OTP/EVC",
    ],
  },
  {
    section: "e-File → Income Tax Forms",
    desc: "File other forms like Form 10E (relief u/s 89), Form 15CA/15CB (foreign remittance), Form 67 (foreign tax credit), TDS returns and challan correction requests.",
    features: [
      "TDS return filing (24Q, 26Q, 27Q)",
      "Form 10E for salary arrears",
      "Foreign tax credit forms",
      "Rectification requests",
    ],
  },
  {
    section: "e-File → Response to Outstanding Tax Demand",
    desc: "View outstanding demands under Section 143(1) or other provisions, pay online via challan or submit a response/rectification if you disagree with the demand.",
    features: [
      "View demand details",
      "Pay demand online",
      "File rectification request",
      "Track rectification status",
    ],
  },
  {
    section: "Services → Annual Information Statement (AIS)",
    desc: "View and download your AIS for the selected financial year. Contains salary, interest, dividends, securities transactions, TDS/TCS, foreign remittance and SFT (Statement of Financial Transactions).",
    features: [
      "View all reported income",
      "Download AIS PDF",
      "Check TDS/TCS details",
      "High-value transaction records",
    ],
  },
  {
    section: "Services → Tax Information Statement (TIS)",
    desc: "An editable version of AIS. You can provide feedback, accept or reject entries, and use the accepted data for pre-filling your ITR. TIS syncs with ITR forms.",
    features: [
      "Accept/reject income entries",
      "Provide feedback to deductor",
      "Sync with ITR form",
      "Export to Excel for reconciliation",
    ],
  },
  {
    section: "Services → View Form 26AS",
    desc: "Your tax credit statement showing TDS deducted by deductors, advance tax/self-assessment tax paid, TDS on sale of property, TCS collected and details of refunds.",
    features: [
      "TDS credited by deductors",
      "Advance/self-assessment tax",
      "Tax collected at source (TCS)",
      "Refunds/adjustments",
    ],
  },
  {
    section: "Services → Refund/Demand Status",
    desc: "Track the status of your ITR refund — whether it's under processing, issued, or failed. View refund amount, mode (NEFT/cheque), date and bank account.",
    features: [
      "Real-time refund tracking",
      "Refund failure reasons",
      "Download refund confirmation",
      "Update bank account",
    ],
  },
  {
    section: "My Account → Pending Actions",
    desc: "Shows all pending compliance actions — ITR not filed, ITR not verified, outstanding demand, response pending to notice, rectification pending, etc.",
    features: [
      "Unfiled ITRs",
      "Unverified ITRs",
      "Pending rectifications",
      "Response to notices",
    ],
  },
  {
    section: "My Account → Service Request",
    desc: "Raise service requests for issues like incorrect refund, PAN-Aadhaar linking failure, EVC generation failure, login issues and other technical grievances.",
    features: [
      "PAN-Aadhaar linking issues",
      "Refund re-issue request",
      "Login/password reset",
      "Track service request status",
    ],
  },
];

const ITR_FILING_PROCESS = [
  {
    step: "01",
    title: "Login to the portal",
    desc: "Log in using your PAN and password (or Aadhaar OTP). Navigate to e-File → File Income Tax Return.",
    icon: LogIn,
  },
  {
    step: "02",
    title: "Select assessment year and ITR form",
    desc: "Choose the assessment year (e.g., AY 2025-26 for FY 2024-25). Select the applicable ITR form — ITR-1 for salaried, ITR-2 for capital gains, ITR-3 for business, etc.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Choose filing mode",
    desc: "You can fill the ITR online (recommended for ITR-1/ITR-4) or upload a JSON/XML file prepared using offline utility or tax software.",
    icon: Upload,
  },
  {
    step: "04",
    title: "Verify pre-filled data",
    desc: "The portal auto-fills data from AIS, TIS, Form 26AS and previous ITR. Verify employer details, salary, TDS, interest income, capital gains and deductions.",
    icon: Eye,
  },
  {
    step: "05",
    title: "Add/edit income and deductions",
    desc: "Add any income not captured in AIS (cash income, business income). Claim deductions under 80C, 80D, 80G, etc. The portal auto-calculates tax liability.",
    icon: Calculator,
  },
  {
    step: "06",
    title: "Pay self-assessment tax (if applicable)",
    desc: "If there's tax payable after TDS credit, pay via challan 280 using net banking. Enter challan details (BSR, date, serial number) in the ITR.",
    icon: IndianRupee,
  },
  {
    step: "07",
    title: "Validate and submit ITR",
    desc: "The portal validates the ITR for errors. Resolve any errors shown. Preview the ITR, submit it and download the acknowledgement (ITR-V PDF).",
    icon: CheckCircle,
  },
  {
    step: "08",
    title: "E-verify ITR within 30 days",
    desc: "Verify your ITR using Aadhaar OTP, EVC via net banking, or by sending signed ITR-V to CPC Bangalore by post. Verification must be done within 30 days of filing.",
    icon: Shield,
  },
];

const AIS_TIS_COMPARISON = [
  {
    aspect: "Full Form",
    ais: "Annual Information Statement",
    tis: "Tax Information Statement",
  },
  {
    aspect: "Source of Data",
    ais: "Comprehensive data from tax deductors, banks, stock exchanges, registrars, foreign exchange dealers and other reporting entities",
    tis: "Subset of AIS data — taxpayer can filter, accept or reject entries",
  },
  {
    aspect: "Editable?",
    ais: "No — read-only statement",
    tis: "Yes — taxpayer can provide feedback, accept or reject entries",
  },
  {
    aspect: "Purpose",
    ais: "To inform the taxpayer of all income reported by third parties; helps in tax compliance and detecting under-reporting",
    tis: "To reconcile reported income before ITR filing; accepted entries are used to pre-fill ITR",
  },
  {
    aspect: "Usage in ITR",
    ais: "Not directly used in ITR — reference only",
    tis: "Accepted entries in TIS sync with ITR form and pre-fill income schedules",
  },
  {
    aspect: "Availability",
    ais: "Available for current FY and past 7 FYs",
    tis: "Available only for the FY for which ITR is being filed",
  },
];

const COMMON_ISSUES = [
  {
    issue: "PAN-Aadhaar not linked",
    solution:
      "Link your PAN and Aadhaar by visiting incometax.gov.in → Quick Links → Link Aadhaar. Enter PAN, Aadhaar number and name as per Aadhaar. An OTP will be sent to Aadhaar-registered mobile. Submit to complete linking. Linking is mandatory for ITR filing from AY 2023-24 onwards.",
    icon: "🔗",
    color: "bg-rose-50 border-rose-100",
  },
  {
    issue: "Unable to login — forgot password",
    solution:
      "Click 'Forgot Password' on the login page. Enter your PAN. An OTP will be sent to your registered email and mobile. Enter both OTPs, then set a new password. If email/mobile is not registered, raise a service request via 'Contact Us' on the portal.",
    icon: "🔒",
    color: "bg-amber-50 border-amber-100",
  },
  {
    issue: "Refund not received after ITR processing",
    solution:
      "Check refund status under Services → Refund/Demand Status. If status shows 'Refund Failed', the reason (incorrect bank account, account closed, name mismatch) will be displayed. Update your bank account under My Account → My Profile and raise a refund reissue request.",
    icon: "💸",
    color: "bg-blue-50 border-blue-100",
  },
  {
    issue: "Mismatch in Form 26AS and AIS",
    solution:
      "AIS may show transactions not yet reflected in Form 26AS, or vice versa, due to data feed timing. Download both statements, reconcile manually and use TIS to accept only validated entries. If there's an error in AIS, provide feedback in TIS or contact the deductor to file a correction return.",
    icon: "⚠️",
    color: "bg-violet-50 border-violet-100",
  },
  {
    issue: "ITR filed but not verified within 30 days",
    solution:
      "If you miss the 30-day e-verification deadline, your ITR will be treated as invalid/defective. You must file a fresh ITR (if within the due date) or file a belated/revised return. Set reminders or enable SMS/email alerts to avoid missing verification deadlines.",
    icon: "⏰",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    issue: "Outstanding tax demand notice received",
    solution:
      "Login to the portal → e-File → Response to Outstanding Tax Demand. View the demand order (CPC or AO order). If demand is correct, pay via challan. If incorrect, file a rectification request under Section 154 with supporting documents. Track rectification status online.",
    icon: "📄",
    color: "bg-orange-50 border-orange-100",
  },
];

const FAQS = [
  {
    question: "Is registration on the new income tax portal mandatory?",
    answer:
      "Yes. Every taxpayer who wants to file ITR, view Form 26AS, check refund status, respond to notices or access any e-filing service must register on the portal using their PAN. Registration is free and requires PAN, Aadhaar (if linked), mobile and email verification.",
  },
  {
    question: "Can I file ITR without linking PAN and Aadhaar?",
    answer:
      "No. From AY 2023-24 onwards, PAN-Aadhaar linking is mandatory for filing ITR as per Section 139AA. If not linked, the ITR filed will be considered invalid and may be treated as defective. Link your PAN and Aadhaar on the income tax portal before filing your return.",
  },
  {
    question: "What is the difference between ITR-V acknowledgement and ITR processing?",
    answer:
      "ITR-V is the acknowledgement receipt you receive immediately after submitting your ITR. It confirms that the ITR has been uploaded. ITR processing happens later at the Centralized Processing Centre (CPC), where the return is verified, tax is calculated and refund/demand is determined. Processing typically takes 1–6 months depending on the complexity of the return.",
  },
  {
    question: "How do I check my income tax refund status?",
    answer:
      "Login to incometax.gov.in and go to Services → Refund/Demand Status. Select the assessment year and view the status. You can also check refund status without login by visiting incometax.gov.in/iec/foportal → Refund/Demand Status (enter PAN only). The status will show 'Refund Issued', 'Refund Failed', 'Under Processing' or 'No Refund Due'.",
  },
  {
    question: "What should I do if I see unknown income in AIS or Form 26AS?",
    answer:
      "If you see income or TDS that does not belong to you, first verify the PAN and deductor details. If it's an error, provide feedback in the TIS (for AIS entries) or contact the deductor to file a TDS correction return. Do not include incorrect income in your ITR — this can lead to over-payment of tax and future reconciliation issues.",
  },
  {
    question: "Can a CA or tax professional file ITR on my behalf?",
    answer:
      "Yes. You can authorize a Chartered Accountant or Enrolled Agent to access your account and file ITR on your behalf. Go to My Account → Authorize CA/Other Intermediary, enter the CA's PAN and set permissions. The CA can then login to their account and file returns for all linked clients. This is commonly used for salaried employees and business owners who engage professional help.",
  },
  {
    question: "Is the old e-filing portal still active?",
    answer:
      "No. The old e-filing portal (incometaxindiaefiling.gov.in) was completely phased out in 2021. All taxpayers must now use the new portal at incometax.gov.in for all e-filing and compliance activities. Old login credentials do not work on the new portal — you must re-register even if you had an account on the old portal.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "New Income Tax Portal Guide 2025: Complete Registration, Login & Features",
  description:
    "A comprehensive guide to the new income tax e-filing portal — covering registration, login methods, ITR filing process, AIS, TIS, Form 26AS, refund tracking, compliance features and common issues explained for FY 2024-25.",
  url: "https://www.taxvio.in/guide/itr-blogs/new-income-tax-portal",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/new-income-tax-portal",
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
  wordCount: 3200,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "income tax portal",
    "ITR filing online",
    "AIS",
    "TIS",
    "Form 26AS",
    "refund status",
    "new e-filing portal",
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
      name: "New Income Tax Portal",
      item: "https://www.taxvio.in/guide/itr-blogs/new-income-tax-portal",
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

export default function NewIncomeTaxPortalPage() {
  return (
    <>
      <Script
        id="portal-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="portal-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="portal-faq-schema"
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
                  New Income Tax Portal
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
                  Updated for AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  New Income Tax
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Portal Complete Guide
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  The new income tax e-filing portal at{" "}
                  <strong className="text-white">incometax.gov.in</strong>{" "}
                  offers faster ITR filing, pre-filled forms, AIS/TIS
                  statements, real-time refund tracking and comprehensive
                  compliance features. This guide walks you through
                  registration, login, ITR filing and all key portal features.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/serviceslist/income-tax/itr-salaried"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    File Your ITR <ArrowRight size={15} />
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
                  Portal highlights
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Globe,
                      title: "Official portal",
                      text: "incometax.gov.in — the only authorized portal for ITR filing",
                    },
                    {
                      icon: Zap,
                      title: "Pre-filled ITR",
                      text: "Auto-populated forms with data from AIS, TIS and Form 26AS",
                    },
                    {
                      icon: Eye,
                      title: "AIS & TIS",
                      text: "Comprehensive income statement and editable tax information view",
                    },
                    {
                      icon: RefreshCw,
                      title: "Refund tracking",
                      text: "Real-time ITR processing and refund status with failure alerts",
                    },
                    {
                      icon: Lock,
                      title: "Secure login",
                      text: "Aadhaar OTP, EVC and DSC-based authentication options",
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
                { icon: BadgeCheck, text: "CA-Verified ITR Filing" },
                { icon: Shield, text: "100% Data Security" },
                { icon: Clock, text: "Same-Day Filing Support" },
                { icon: Star, text: "4.9★ Customer Rating" },
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
                  What Is the New Income Tax Portal?
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  The <strong>new income tax e-filing portal</strong> at{" "}
                  <a
                    href="https://www.incometax.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077b6] font-semibold underline"
                  >
                    incometax.gov.in
                  </a>{" "}
                  was launched in June 2021, replacing the older portal
                  (incometaxindiaefiling.gov.in). It serves as the single
                  official platform for all income tax compliance activities in
                  India — ITR filing, viewing tax credit statements (Form 26AS,
                  AIS), tracking refunds, responding to notices, paying taxes
                  and accessing various other tax-related services.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  The portal is designed for individual taxpayers, businesses,
                  Chartered Accountants, Tax Return Preparers (TRPs) and tax
                  deductors (employers, banks, companies). It integrates data
                  from multiple sources — banks, stock exchanges, TDS deductors,
                  foreign exchange dealers, property registrars — to create the{" "}
                  <strong>Annual Information Statement (AIS)</strong> and{" "}
                  <strong>Tax Information Statement (TIS)</strong>, which
                  pre-fill your ITR forms and help detect unreported income.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Whether you are a salaried employee filing ITR-1, a business
                  owner filing ITR-3, or a CA managing multiple client returns,
                  understanding the portal&apos;s features, navigation and
                  functionality is critical for smooth and compliant tax filing.
                  This guide provides a complete walkthrough of the portal for
                  FY 2024-25 / AY 2025-26.
                </p>

                <InfoBox title="Old portal is no longer accessible" color="rose">
                  <p>
                    The old e-filing portal at incometaxindiaefiling.gov.in was
                    permanently shut down in 2021. All users must register and
                    file on the new portal at incometax.gov.in. Old credentials
                    (login ID and password from the old portal) do not work on
                    the new portal — you must re-register using your PAN.
                  </p>
                </InfoBox>
              </div>

              {/* Key Features */}
              <section id="features" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Portal capabilities"
                  heading="Key Features of the New Income Tax Portal"
                  icon={Zap}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The new portal offers significant improvements over the old
                  system in terms of speed, data integration, transparency and
                  user experience. Here are the key features:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {KEY_FEATURES.map(({ icon: Icon, title, desc, color }) => (
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
              </section>

              {/* Registration Process */}
              <section id="registration" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Getting started"
                  heading="How to Register on the New Income Tax Portal"
                  icon={UserCheck}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  First-time users must register on the portal using their PAN.
                  Registration is mandatory to access any service — even to view
                  your Form 26AS or check refund status. Here is the complete
                  step-by-step registration process:
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
                  <InfoBox title="PAN-Aadhaar linking is mandatory" color="rose">
                    <p>
                      As per Section 139AA of the Income Tax Act, linking PAN
                      with Aadhaar is mandatory for filing ITR from AY 2023-24
                      onwards. If not linked, the portal will not allow you to
                      file your return. Link your PAN-Aadhaar on the portal
                      before registration or filing.
                    </p>
                  </InfoBox>
                  <InfoBox title="Use the registered mobile number" color="blue">
                    <p>
                      The mobile number you provide during registration must be
                      the same as the one registered with your Aadhaar (if
                      PAN-Aadhaar is linked). OTP for login and verification
                      will be sent to this number. Keep it active and accessible.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Login Methods */}
              <section id="login" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Access your account"
                  heading="Login Methods on the Income Tax Portal"
                  icon={Lock}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The portal supports multiple login methods for flexibility and
                  security. You can choose any method depending on whether your
                  PAN is linked to Aadhaar, whether you have net banking access,
                  or whether you are a business entity with a Digital Signature
                  Certificate (DSC).
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {LOGIN_METHODS.map(({ method, desc, icon, color }) => (
                    <div
                      key={method}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800">
                            {method}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox title="Forgot password? Use 'Forgot Password' option" color="amber">
                  <p>
                    If you forget your password, click &apos;Forgot
                    Password&apos; on the login page. Enter your PAN, and OTPs
                    will be sent to your registered email and mobile. After
                    verification, you can reset your password. If you do not
                    have access to registered email/mobile, raise a service
                    request on the portal.
                  </p>
                </InfoBox>
              </section>

              {/* ITR Filing Process */}
              <section id="itr-filing" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step guide"
                  heading="How to File ITR on the New Portal"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Filing your Income Tax Return (ITR) on the new portal is
                  faster and more streamlined thanks to pre-filled data and
                  auto-calculation features. Here is the complete filing process
                  from login to e-verification:
                </p>

                <div className="space-y-4">
                  {ITR_FILING_PROCESS.map(({ step, title, desc, icon: Icon }) => (
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

                <InfoBox title="E-verification within 30 days is mandatory" color="rose">
                  <p>
                    Your ITR is considered &apos;filed&apos; only after you
                    e-verify it within 30 days of submission. If not verified
                    within 30 days, the ITR is treated as invalid and you will
                    have to file a fresh return. Set a reminder or enable SMS
                    alerts to avoid missing the verification deadline.
                  </p>
                </InfoBox>
              </section>

              {/* Portal Sections */}
              <section id="sections" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Navigate the portal"
                  heading="Key Sections and Services on the Portal"
                  icon={Globe}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  The portal is divided into multiple sections, each dedicated
                  to a specific tax-related activity. Understanding the purpose
                  of each section helps you navigate efficiently:
                </p>

                <div className="space-y-4">
                  {PORTAL_SECTIONS.map(({ section, desc, features }) => (
                    <div
                      key={section}
                      className="border border-gray-100 rounded-2xl p-5 bg-white hover:shadow-sm transition-all"
                    >
                      <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                        <ChevronDown
                          size={14}
                          className="text-[#00416a] shrink-0"
                        />
                        {section}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-600">
                        {desc}
                      </p>
                      <ul className="mt-3 grid sm:grid-cols-2 gap-1">
                        {features.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-1.5 text-[11px] text-gray-600"
                          >
                            <CheckCircle
                              size={11}
                              className="text-emerald-500 shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* AIS vs TIS */}
              <section id="ais-tis" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Data statements"
                  heading="AIS vs TIS: What's the Difference?"
                  icon={Eye}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Both AIS (Annual Information Statement) and TIS (Tax
                  Information Statement) are new features introduced in the
                  portal. While they seem similar, they serve different purposes
                  in the ITR filing process:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#f8fbfd]">
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          Aspect
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          AIS
                        </th>
                        <th className="border border-gray-200 p-3 text-left font-bold text-gray-800">
                          TIS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {AIS_TIS_COMPARISON.map(({ aspect, ais, tis }) => (
                        <tr key={aspect} className="hover:bg-blue-50/30">
                          <td className="border border-gray-200 p-3 font-semibold text-gray-700">
                            {aspect}
                          </td>
                          <td className="border border-gray-200 p-3 text-gray-600">
                            {ais}
                          </td>
                          <td className="border border-gray-200 p-3 text-gray-600">
                            {tis}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="Always review TIS before filing ITR" color="green">
                  <p>
                    TIS allows you to filter and correct income entries before
                    they are used in your ITR. If you see an incorrect entry in
                    AIS, reject it in TIS and provide feedback. Only accepted
                    entries in TIS will be used to pre-fill your ITR, reducing
                    the risk of over-reporting income and paying excess tax.
                  </p>
                </InfoBox>
              </section>

              {/* Common Issues */}
              <section id="issues" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Troubleshooting"
                  heading="Common Portal Issues and Solutions"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Users frequently encounter specific issues while using the
                  portal. Here are the most common problems and how to resolve
                  them:
                </p>

                <div className="space-y-4">
                  {COMMON_ISSUES.map(({ issue, solution, icon, color }) => (
                    <div
                      key={issue}
                      className={`rounded-2xl border p-5 ${color
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl shrink-0">{icon}</span>
                        <div>
                          <h3 className="text-sm font-extrabold text-gray-800">
                            {issue}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {solution}
                          </p>
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
                      Need ITR filing help?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your ITR filing on the new portal
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team manages portal registration, data
                      verification, AIS/TIS reconciliation, ITR preparation and
                      e-verification — ensuring accurate and compliant filing
                      every year.
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
                  heading="Income Tax Portal FAQs"
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
                  article is for general educational purposes only. Portal
                  features, login methods, ITR forms and compliance requirements
                  are subject to change through Finance Acts, CBDT
                  notifications and departmental updates. Always verify current
                  procedures on the official income tax portal at
                  incometax.gov.in, or consult a qualified tax professional for
                  your specific situation.
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
                      ["#features", "Portal features"],
                      ["#registration", "How to register"],
                      ["#login", "Login methods"],
                      ["#itr-filing", "ITR filing process"],
                      ["#sections", "Portal sections"],
                      ["#ais-tis", "AIS vs TIS"],
                      ["#issues", "Common issues"],
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
                    ITR filing support?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    We handle portal registration, AIS/TIS verification, ITR
                    preparation and e-verification. Accurate filing, on time.
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
                    sub: "Understand tax credits",
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
                  title: "Form 26AS — Your Tax Credit Statement",
                  text: "Understand what Form 26AS contains, how to view it, and how to reconcile TDS credits before filing your ITR.",
                },
                {
                  href: "/guide/itr-blogs/how-to-file-tds-return",
                  title: "How to File TDS Return Online",
                  text: "Complete guide to filing TDS returns — forms, due dates, RPU, FVU and penalties explained.",
                },
                {
                  href: "/contact",
                  title: "Talk to a Tax Expert",
                  text: "Get CA-assisted ITR filing, portal navigation support and complete compliance management.",
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