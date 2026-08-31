// app/guide/itr-blogs/itr-filing-for-freelancer-income/page.tsx

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
  Briefcase,
  Calendar,
  UserCheck,
  Landmark,
  BarChart3,
  Percent,
  DollarSign,
  FileSpreadsheet,
  Laptop,
  Globe,
  Wallet,
  TrendingUp,
  Upload,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "ITR Filing for Freelancers: Complete Tax Guide for Freelance Income AY 2025-26 | Taxvio",
  description:
    "Complete guide to filing ITR for freelance income in India — which ITR form (ITR-3 vs ITR-4), presumptive taxation under Section 44ADA, professional income reporting, deductible expenses, advance tax, TDS under Section 194J, and tax-saving strategies for freelancers.",
  keywords: [
    "ITR for freelancers",
    "freelance income tax filing",
    "Section 44ADA presumptive taxation",
    "ITR-3 for freelancers",
    "ITR-4 for freelancers",
    "professional income tax",
    "TDS on freelance income",
    "Section 194J TDS",
    "freelancer tax deductions",
    "advance tax for freelancers",
    "freelance business income",
    "AY 2025-26 freelancer ITR",
    "consultant income tax",
    "self-employed tax filing",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-freelancer-income",
  },
  openGraph: {
    title: "ITR Filing for Freelancers — Complete Tax Guide AY 2025-26 | Taxvio",
    description:
      "Everything freelancers need to know about filing ITR in India — correct ITR form, presumptive taxation, deductible expenses, TDS, advance tax and compliance for AY 2025-26.",
    url: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-freelancer-income",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITR Filing for Freelancers — Complete Guide AY 2025-26",
    description:
      "Learn how to file ITR for freelance income — ITR-3 vs ITR-4, Section 44ADA, deductible expenses, TDS and tax optimization strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const FREELANCER_BASICS = [
  {
    term: "Who is a Freelancer?",
    definition: "A freelancer is a self-employed professional who provides services to clients on a contract or project basis without being on the payroll of any employer. Common freelance professions include content writers, graphic designers, web developers, consultants, photographers, video editors, digital marketers, and online tutors.",
    icon: "💼",
    color: "bg-blue-50 border-blue-100",
  },
  {
    term: "Professional Income (Not Salary)",
    definition: "Freelance income is classified as 'Income from Business or Profession' under Section 28 of the Income Tax Act, not as 'Salary'. This means you report it in ITR-3 or ITR-4 (not ITR-1), can claim business expenses, and may need to pay advance tax quarterly.",
    icon: "📊",
    color: "bg-violet-50 border-violet-100",
  },
  {
    term: "Presumptive Taxation Option",
    definition: "Freelancers in specified professions (Section 44AA) can opt for presumptive taxation under Section 44ADA if gross receipts ≤ ₹50 lakh. This allows you to declare 50% of gross receipts as income and file ITR-4, without maintaining detailed books of accounts.",
    icon: "✅",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    term: "TDS Applicability — Section 194J",
    definition: "Clients are required to deduct TDS at 10% (for individuals/HUF) or 2% (if you provide PAN and declaration under Section 194J(2A)) on freelance professional fees exceeding ₹30,000 in a financial year. You can claim this TDS credit while filing ITR.",
    icon: "🏦",
    color: "bg-amber-50 border-amber-100",
  },
];

const ITR_FORM_COMPARISON = [
  {
    form: "ITR-4 (Sugam)",
    title: "For Freelancers Using Presumptive Taxation",
    when: "If your gross receipts from freelance profession ≤ ₹50 lakh AND you opt for Section 44ADA presumptive scheme",
    features: [
      "Declare 50% of gross receipts as taxable income",
      "No need to maintain detailed books of accounts",
      "Cannot claim actual expenses (deemed 50% as expenses)",
      "Simpler filing process",
      "No tax audit required (even if receipts exceed ₹50 lakh turnover limit for non-professionals)",
      "Due date: 31 August 2026 for AY 2025-26",
    ],
    color: "bg-emerald-50 border-emerald-200",
    recommended: true,
    tag: "Easier Option",
  },
  {
    form: "ITR-3",
    title: "For Freelancers Maintaining Regular Books",
    when: "If gross receipts > ₹50 lakh OR you want to claim actual expenses OR you don't want to opt for presumptive scheme",
    features: [
      "Declare actual net profit (receipts minus actual expenses)",
      "Must maintain proper books of accounts and prepare P&L, Balance Sheet",
      "Can claim all business expenses with proper documentation",
      "Better if actual expenses > 50% of receipts",
      "Tax audit required if receipts exceed ₹50 lakh under Section 44AB",
      "Due date: 31 August 2026 (non-audit) or 31 October 2026 (audit)",
    ],
    color: "bg-blue-50 border-blue-200",
    recommended: false,
    tag: "Full Compliance",
  },
];

const SECTION_44ADA_ELIGIBILITY = [
  {
    profession: "Legal",
    examples: "Lawyers, advocates, legal consultants",
    eligible: true,
  },
  {
    profession: "Medical",
    examples: "Doctors, physicians, surgeons (not running nursing homes)",
    eligible: true,
  },
  {
    profession: "Engineering / Architecture",
    examples: "Engineers, architects, quantity surveyors, interior designers",
    eligible: true,
  },
  {
    profession: "Accountancy",
    examples: "Chartered Accountants, cost accountants, company secretaries",
    eligible: true,
  },
  {
    profession: "Technical Consultancy",
    examples: "IT consultants, technical advisors, film artists, authors",
    eligible: true,
  },
  {
    profession: "Content Creation / Freelance Writing",
    examples: "Content writers, copywriters, bloggers, journalists (freelance)",
    eligible: true,
  },
  {
    profession: "Design & Creative",
    examples: "Graphic designers, UI/UX designers, video editors, photographers",
    eligible: true,
  },
  {
    profession: "Software Development / IT Services",
    examples: "Web developers, app developers, software consultants",
    eligible: true,
  },
  {
    profession: "Digital Marketing / Social Media",
    examples: "SEO consultants, social media managers, digital marketers",
    eligible: true,
  },
  {
    profession: "E-commerce / Product Sales",
    examples: "Online sellers, dropshippers, Amazon/Flipkart sellers",
    eligible: false,
  },
];

const DEDUCTIBLE_EXPENSES = [
  {
    expense: "Office Rent",
    details: "If you rent a separate office or co-working space exclusively for your freelance work, full rent is deductible. If you work from home, you can claim proportionate rent (e.g., 20-30% if you use one room for work).",
    documents: "Rent agreement, rent receipts, landlord PAN (if rent > ₹1 lakh/month)",
    claimableUnder44ADA: false,
  },
  {
    expense: "Internet & Phone Bills",
    details: "Proportionate internet and mobile bills used for business communication. If 60% usage is for work, claim 60% of bills.",
    documents: "Monthly bills, usage log/self-declaration",
    claimableUnder44ADA: false,
  },
  {
    expense: "Laptop, Computer, Software",
    details: "Cost of laptop, desktop, software subscriptions (Adobe, MS Office, hosting, domain) — claim as depreciation if capital asset, or full expense if subscription/consumable.",
    documents: "Purchase invoices, subscription receipts",
    claimableUnder44ADA: false,
  },
  {
    expense: "Professional Development",
    details: "Online courses, certifications, books, conferences, seminars related to your profession are fully deductible.",
    documents: "Course receipts, certificates, seminar tickets",
    claimableUnder44ADA: false,
  },
  {
    expense: "Marketing & Advertising",
    details: "Cost of website, business cards, LinkedIn ads, Google ads, social media promotion for your freelance services.",
    documents: "Invoices from ad platforms, designer, website developer",
    claimableUnder44ADA: false,
  },
  {
    expense: "Travel Expenses (Business)",
    details: "Travel for client meetings, site visits, conferences (if directly related to earning freelance income). Personal travel not deductible.",
    documents: "Travel tickets, hotel bills, purpose documentation",
    claimableUnder44ADA: false,
  },
  {
    expense: "Bank Charges & Payment Gateway Fees",
    details: "Bank charges, credit card fees, PayPal/Stripe/Razorpay fees, foreign transaction charges.",
    documents: "Bank statements, payment gateway statements",
    claimableUnder44ADA: false,
  },
  {
    expense: "Professional Insurance",
    details: "Professional indemnity insurance, liability insurance related to your freelance business.",
    documents: "Insurance policy, premium receipts",
    claimableUnder44ADA: false,
  },
];

const ADVANCE_TAX_SCHEDULE = [
  {
    installment: "1st Installment",
    dueDate: "15 June",
    percentage: "15% of total tax liability",
    applicableFor: "AY 2025-26 (FY 2024-25)",
  },
  {
    installment: "2nd Installment",
    dueDate: "15 September",
    percentage: "45% of total tax liability (cumulative, so pay 30% more)",
    applicableFor: "AY 2025-26 (FY 2024-25)",
  },
  {
    installment: "3rd Installment",
    dueDate: "15 December",
    percentage: "75% of total tax liability (cumulative, so pay 30% more)",
    applicableFor: "AY 2025-26 (FY 2024-25)",
  },
  {
    installment: "4th Installment",
    dueDate: "15 March",
    percentage: "100% of total tax liability (pay remaining 25%)",
    applicableFor: "AY 2025-26 (FY 2024-25)",
  },
];

const FILING_STEPS_ITR4 = [
  {
    step: "01",
    title: "Calculate Total Gross Receipts",
    desc: "Add up all payments received from clients during FY 2024-25 (1 April 2024 to 31 March 2025). Include all professional fees, consulting income, project payments — before TDS deduction. This is your gross receipts.",
    icon: Calculator,
  },
  {
    step: "02",
    title: "Check Eligibility for Section 44ADA",
    desc: "Ensure your profession is covered under Section 44AA (specified professions) and gross receipts do not exceed ₹50 lakh. If eligible and you want to use presumptive scheme, you can file ITR-4.",
    icon: CheckCircle,
  },
  {
    step: "03",
    title: "Compute Presumptive Income (50% of Gross Receipts)",
    desc: "Under Section 44ADA, your taxable income is deemed to be 50% of gross receipts. For example, if gross receipts = ₹10 lakh, taxable income = ₹5 lakh. You cannot claim actual expenses separately.",
    icon: Percent,
  },
  {
    step: "04",
    title: "Login to Income Tax E-Filing Portal",
    desc: "Visit incometax.gov.in and log in with your PAN and password. Navigate to e-File > Income Tax Returns > File Income Tax Return. Select AY 2025-26 and ITR Form 4 (Sugam).",
    icon: UserCheck,
  },
  {
    step: "05",
    title: "Fill Part A — Personal Information",
    desc: "Enter PAN, name, date of birth, address, mobile, email, bank account for refund. Select residential status (Resident/NRI). Choose new or old tax regime.",
    icon: FileText,
  },
  {
    step: "06",
    title: "Fill Schedule BP — Presumptive Income",
    desc: "In Schedule BP (Business or Profession), select 'Presumptive Income u/s 44ADA'. Enter gross receipts and the portal will auto-compute 50% as presumptive income. This becomes your taxable business income.",
    icon: BarChart3,
  },
  {
    step: "07",
    title: "Report Other Income (if any)",
    desc: "If you also have salary income (ITR-4 allows salary up to a limit), report in Schedule S. Interest income in Schedule OS. No capital gains allowed in ITR-4.",
    icon: Landmark,
  },
  {
    step: "08",
    title: "Claim Deductions under Chapter VI-A",
    desc: "Claim Section 80C (₹1.5 lakh), 80D (health insurance), 80G (donations), etc. These deductions apply after computing total income from all sources.",
    icon: DollarSign,
  },
  {
    step: "09",
    title: "Verify TDS Credits from Form 26AS",
    desc: "Download Form 26AS from TRACES or e-filing portal. Verify all TDS deducted by clients under Section 194J. Enter TDS details in the return. Portal will adjust TDS against computed tax liability.",
    icon: Eye,
  },
  {
    step: "10",
    title: "Pay Balance Tax (if any) and Submit Return",
    desc: "If tax payable exceeds TDS and advance tax paid, pay balance tax using Challan 280. Submit the return, note acknowledgement number, and verify within 30 days using Aadhaar OTP or ITR-V.",
    icon: Upload,
  },
];

const FILING_STEPS_ITR3 = [
  {
    step: "01",
    title: "Maintain Proper Books of Accounts",
    desc: "Maintain digital or physical books showing all receipts, expenses, assets, liabilities. Prepare a Profit & Loss Account and Balance Sheet for FY 2024-25. Use accounting software like Zoho Books, Tally, or even Excel.",
    icon: FileSpreadsheet,
  },
  {
    step: "02",
    title: "Calculate Net Profit (Receipts - Actual Expenses)",
    desc: "Compute net profit by deducting all allowable business expenses from gross receipts. This is your taxable professional income. Unlike Section 44ADA, you claim actual expenses, not deemed 50%.",
    icon: Calculator,
  },
  {
    step: "03",
    title: "Check if Tax Audit is Required",
    desc: "If gross receipts exceed ₹50 lakh, tax audit under Section 44AB is mandatory. Appoint a CA to audit your books and prepare Form 3CD and 3CB. Audit must be completed before filing ITR.",
    icon: AlertCircle,
  },
  {
    step: "04",
    title: "Login to E-Filing Portal and Select ITR-3",
    desc: "Log in to incometax.gov.in, select AY 2025-26 and ITR-3. ITR-3 is for individuals/HUFs having income from business or profession (other than presumptive).",
    icon: UserCheck,
  },
  {
    step: "05",
    title: "Fill Part A — General Information",
    desc: "Enter personal details, address, bank account. Choose filing status, residential status, and tax regime (new or old).",
    icon: FileText,
  },
  {
    step: "06",
    title: "Fill Schedule BP — Business Income (Regular)",
    desc: "In Schedule BP, DO NOT select presumptive income. Enter net profit as per your Profit & Loss account. Attach P&L and Balance Sheet in the annexures.",
    icon: BarChart3,
  },
  {
    step: "07",
    title: "Report Other Income (if any)",
    desc: "Salary in Schedule S, house property in Schedule HP, capital gains in Schedule CG, other sources in Schedule OS.",
    icon: Landmark,
  },
  {
    step: "08",
    title: "Claim Deductions under Chapter VI-A",
    desc: "Claim 80C, 80D, 80G, etc. in the deductions schedule.",
    icon: Percent,
  },
  {
    step: "09",
    title: "Verify TDS and Advance Tax Credits",
    desc: "Check Form 26AS for TDS under Section 194J. Verify advance tax payments (if any) from Challan 280. Portal will auto-populate most TDS data.",
    icon: Eye,
  },
  {
    step: "10",
    title: "Upload Audit Report (if applicable) and Submit",
    desc: "If audit required, upload Form 3CD and 3CB before submitting ITR-3. Pay any balance tax due, submit return, and verify within 30 days.",
    icon: Upload,
  },
];

const TDS_SECTION_194J = [
  {
    scenario: "Client is Individual / HUF",
    tdsRate: "10%",
    threshold: "Payment > ₹30,000 in FY",
    details: "If an individual or HUF pays you professional fees exceeding ₹30,000 in aggregate during the financial year, they must deduct TDS at 10% under Section 194J.",
  },
  {
    scenario: "Client is Company / Firm / LLP",
    tdsRate: "10%",
    threshold: "Payment > ₹30,000 in FY",
    details: "All business entities (companies, partnership firms, LLPs) must deduct 10% TDS on professional fees exceeding ₹30,000 in aggregate during the FY.",
  },
  {
    scenario: "You Submit Form 15G/15H (No Tax Liability)",
    tdsRate: "Nil (if accepted)",
    threshold: "NA",
    details: "If your total income is below taxable limit, you can submit Form 15G (below 60 years) or 15H (senior citizens) to the client requesting no TDS deduction. Client may accept at their discretion.",
  },
  {
    scenario: "You Provide Self-Declaration u/s 194J(2A)",
    tdsRate: "2% (lower rate)",
    threshold: "Only for technical/professional services",
    details: "If you declare that your gross receipts from profession don't exceed ₹50 lakh and provide a self-declaration, the client can deduct TDS at only 2% instead of 10%. You must file this declaration in Form 26AS portal.",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Not filing ITR thinking income is below taxable limit",
    why: "Even if net income after expenses is below ₹2.5/3 lakh, if gross receipts exceed ₹50 lakh or you want to claim TDS refund, you must file ITR.",
    consequence: "Loss of TDS refund, inability to carry forward losses, compliance issues for future loans/visas",
    fix: "Always file ITR if you have professional income, even if tax liability is nil",
    icon: "❌",
    color: "bg-rose-50 border-rose-100",
  },
  {
    mistake: "Filing ITR-1 instead of ITR-3/ITR-4",
    why: "ITR-1 (Sahaj) is only for salaried individuals with salary, one house property and other sources. Freelance professional income cannot be reported in ITR-1.",
    consequence: "Defective return, rejection by CPC, penalty for incorrect filing",
    fix: "File ITR-3 (regular) or ITR-4 (presumptive) based on your choice",
    icon: "⚠️",
    color: "bg-amber-50 border-amber-100",
  },
  {
    mistake: "Not paying advance tax and facing interest penalty",
    why: "If your tax liability exceeds ₹10,000, you must pay advance tax in four installments. Not paying attracts interest under Section 234B and 234C.",
    consequence: "Interest at 1% per month on tax shortfall, significant additional outflow",
    fix: "Calculate tax liability quarterly and pay advance tax by 15 June, 15 Sept, 15 Dec, 15 March",
    icon: "💸",
    color: "bg-orange-50 border-orange-100",
  },
  {
    mistake: "Not claiming TDS credit due to mismatch",
    why: "If clients deduct TDS but don't deposit it with the government or deposit with wrong PAN, it won't show in your Form 26AS and you can't claim credit.",
    consequence: "You pay tax again on the same income, effective double taxation",
    fix: "Download Form 26AS before filing ITR, reconcile with your records, follow up with clients for TDS certificate and correction if needed",
    icon: "🔍",
    color: "bg-red-50 border-red-100",
  },
  {
    mistake: "Not maintaining invoices and expense receipts",
    why: "If you file ITR-3 and claim actual expenses, you need proper documentation. In case of scrutiny, you must produce invoices, bills, rent receipts, etc.",
    consequence: "Expense disallowance, addition to income, higher tax and penalty",
    fix: "Maintain digital copies of all invoices, receipts, bank statements; use cloud storage for backup",
    icon: "📂",
    color: "bg-yellow-50 border-yellow-100",
  },
];

const FAQS = [
  {
    question: "Which ITR form should freelancers file — ITR-3 or ITR-4?",
    answer:
      "It depends on your gross receipts and whether you want to opt for presumptive taxation. If your gross receipts from freelance profession are ₹50 lakh or less AND you want to use the presumptive taxation scheme under Section 44ADA (where 50% of receipts is deemed as income and you don't need to maintain detailed books), file ITR-4 (Sugam). If your receipts exceed ₹50 lakh OR you want to claim actual expenses (which may be more than 50% of receipts), file ITR-3. ITR-3 requires maintaining proper books of accounts, Profit & Loss statement and Balance Sheet.",
  },
  {
    question: "What is Section 44ADA and who can use it?",
    answer:
      "Section 44ADA is a presumptive taxation scheme for specified professionals — including doctors, lawyers, engineers, architects, accountants, technical consultants, interior decorators, authors, and freelancers in IT, content writing, design, digital marketing, etc. If your profession is covered under Section 44AA (notified professions) and your gross receipts do not exceed ₹50 lakh in a financial year, you can opt for Section 44ADA. Under this scheme, 50% of your gross receipts is deemed to be your taxable income, and you are not required to maintain detailed books of accounts or get audit done. You file ITR-4 and the process is much simpler.",
  },
  {
    question: "Can I claim actual expenses if I use Section 44ADA presumptive taxation?",
    answer:
      "No. Under Section 44ADA, you cannot claim actual expenses separately. The law deems that 50% of gross receipts is your business income (meaning the other 50% is deemed to be expenses). You cannot claim depreciation, rent, internet, travel, or any other expense separately. If your actual expenses are more than 50% of receipts, it is better to opt out of Section 44ADA and file ITR-3 where you can claim all actual expenses with proper documentation.",
  },
  {
    question: "How does TDS work for freelancers under Section 194J?",
    answer:
      "Clients are required to deduct TDS under Section 194J at 10% on professional or technical fees if the payment exceeds ₹30,000 in aggregate during the financial year. This applies when the client is a company, firm, LLP, individual or HUF whose accounts are subject to audit. If you provide a self-declaration under Section 194J(2A) stating that your gross receipts will not exceed ₹50 lakh and you have not opted out of presumptive taxation, the TDS rate can be reduced to 2%. The TDS deducted by clients is deposited with the government and appears in your Form 26AS. You can claim this as credit while filing your ITR.",
  },
  {
    question: "Do freelancers need to pay advance tax? When and how much?",
    answer:
      "Yes, if your total tax liability for the year exceeds ₹10,000 (after TDS), you are required to pay advance tax in four installments: 15% by 15 June, 45% by 15 September (cumulative), 75% by 15 December (cumulative), and 100% by 15 March. Advance tax is calculated on your estimated income for the financial year. If you don't pay advance tax or pay less than required, you will be charged interest under Section 234B (1% per month on shortfall from 1 April to filing date) and Section 234C (1% per month for each installment shortfall). You can pay advance tax online using Challan 280 on the income tax portal.",
  },
  {
    question: "What expenses can freelancers claim as deductions?",
    answer:
      "If you file ITR-3 (not using presumptive taxation), you can claim all expenses incurred wholly and exclusively for your freelance business. Common deductible expenses include: office rent (proportionate if home office), internet and phone bills (proportionate), laptop/computer/software (as depreciation or expense), professional courses and certifications, marketing and advertising (website, business cards, ads), travel for client meetings, bank charges and payment gateway fees, professional insurance, stationery and consumables. You must maintain proper invoices, bills and receipts for all claimed expenses. Personal expenses are not deductible.",
  },
  {
    question: "Is tax audit required for freelancers? When?",
    answer:
      "Tax audit under Section 44AB is required if: (1) Your gross receipts from profession exceed ₹50 lakh in the financial year, OR (2) You have claimed profit lower than the deemed profit under Section 44ADA (i.e., you opted out of presumptive taxation and claimed actual expenses, and receipts are below ₹50 lakh but you claimed profit less than 50% of receipts — in this case also audit may be required). If audit is applicable, you must get your accounts audited by a Chartered Accountant who will prepare audit report in Form 3CD and 3CB. The audit report must be filed before filing ITR-3. Due date for audit cases is 31 October 2026 for AY 2025-26.",
  },
  {
    question: "Can I claim work-from-home expenses like rent and electricity?",
    answer:
      "Yes, if you work from home and use a dedicated space (like a room) exclusively or predominantly for your freelance work, you can claim a proportionate amount of rent and electricity as business expense. For example, if you use one room out of a 3-bedroom house, you can claim approximately 25-30% of rent and electricity. However, you need to be reasonable and conservative in your claims, maintain proper documentation (rent agreement, bills), and be prepared to justify the claim in case of scrutiny. If you also have a separate rented office, you can claim full office rent.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ITR Filing for Freelancers: Complete Tax Guide for Freelance Income",
  description:
    "Comprehensive guide to filing Income Tax Return for freelance and professional income in India — covering ITR-3 vs ITR-4, presumptive taxation under Section 44ADA, deductible expenses, TDS under Section 194J, advance tax, and tax-saving strategies for freelancers for AY 2025-26.",
  url: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-freelancer-income",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-freelancer-income",
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
  datePublished: "2025-05-25",
  dateModified: "2025-05-25",
  wordCount: 4200,
  inLanguage: "en-IN",
  articleSection: "Income Tax",
  keywords: [
    "freelancer ITR",
    "ITR-3",
    "ITR-4",
    "Section 44ADA",
    "professional income tax",
    "Section 194J TDS",
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
      name: "ITR Filing for Freelancer Income",
      item: "https://www.taxvio.in/guide/itr-blogs/itr-filing-for-freelancer-income",
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

export default function FreelancerITRFilingPage() {
  return (
    <>
      <Script
        id="freelancer-itr-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="freelancer-itr-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="freelancer-itr-faq-schema"
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
                "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(34,197,94,0.09) 0%,transparent 65%)",
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
                  ITR Filing for Freelancer Income
                </li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-sm"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.25)",
                  }}
                >
                  <Laptop size={13} className="text-purple-300" />
                  For Freelancers & Self-Employed — AY 2025-26
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  ITR Filing for
                  <span className="block mt-2 bg-gradient-to-r from-purple-300 to-emerald-300 bg-clip-text text-transparent">
                    Freelancer Income
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  If you earn income as a <strong className="text-white">freelancer</strong>,
                  consultant, or self-employed professional, your income is treated as{" "}
                  <strong className="text-white">professional income</strong> (not salary).
                  This guide covers which ITR form to file (ITR-3 vs ITR-4), presumptive
                  taxation under Section 44ADA, TDS under Section 194J, deductible expenses,
                  and complete compliance for AY 2025-26.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Get Freelancer ITR Help <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/serviceslist/income-tax/itr-business"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    File ITR Now <FileText size={15} />
                  </Link>
                </div>
              </div>

              {/* Quick facts card */}
              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Freelancer Tax Essentials
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: FileText,
                      title: "ITR Form Required",
                      text: "ITR-4 (if using Section 44ADA) or ITR-3 (regular books)",
                    },
                    {
                      icon: Percent,
                      title: "Presumptive Taxation",
                      text: "50% of gross receipts deemed as income (if receipts ≤ ₹50L)",
                    },
                    {
                      icon: Wallet,
                      title: "TDS Deduction",
                      text: "10% TDS under Section 194J (or 2% with declaration)",
                    },
                    {
                      icon: Calculator,
                      title: "Advance Tax",
                      text: "Pay in 4 installments if tax liability > ₹10,000",
                    },
                    {
                      icon: Calendar,
                      title: "Due Date",
                      text: "31 August 2026 (non-audit) or 31 October 2026 (audit)",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-400/15 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-purple-300" />
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
                { icon: BadgeCheck, text: "CA-Verified Freelancer Tax Guide" },
                { icon: Shield, text: "Section 44ADA Compliant" },
                { icon: Clock, text: "Updated for AY 2025-26" },
                { icon: Star, text: "15,000+ Freelancer ITRs Filed" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-white/55 text-xs"
                >
                  <Icon size={12} className="text-purple-400" /> {text}
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
                  Income Tax Guide for Freelancers
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Understanding Freelance Income Taxation in India
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  The rise of the <strong>gig economy</strong> and remote work has led to
                  millions of Indians earning income as freelancers, consultants, and
                  independent professionals. Whether you're a content writer, graphic
                  designer, software developer, digital marketer, photographer, online tutor,
                  or consultant, if you provide professional services without being on anyone's
                  payroll, your income is classified as <strong>professional income</strong> or
                  <strong>business income</strong> under the Income Tax Act, 1961.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  Unlike salaried individuals who file ITR-1 and have TDS deducted monthly,
                  freelancers face different tax compliance requirements — choosing the correct
                  ITR form (ITR-3 or ITR-4), deciding whether to use presumptive taxation,
                  paying advance tax quarterly, managing TDS under Section 194J, and maintaining
                  books of accounts (in some cases).
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This comprehensive guide is designed to help freelancers navigate the entire
                  ITR filing process for Assessment Year 2025-26 (Financial Year 2024-25). We
                  cover everything from basic tax classification to step-by-step filing
                  instructions, deductible expenses, TDS credits, advance tax, and common
                  mistakes to avoid.
                </p>

                <InfoBox title="Freelance income = Professional income (not salary)" color="blue">
                  <p>
                    Freelance income is reported under the head <strong>"Profits and Gains of
                    Business or Profession"</strong> in your ITR, not as salary. This means you
                    cannot file ITR-1 (Sahaj) — you must file either <strong>ITR-3</strong> (if
                    maintaining regular books) or <strong>ITR-4 (Sugam)</strong> (if using
                    presumptive taxation under Section 44ADA).
                  </p>
                </InfoBox>
              </div>

              {/* Freelancer Basics */}
              <section id="basics" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Tax fundamentals"
                  heading="Freelance Income — Tax Treatment Basics"
                  icon={Briefcase}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Before diving into ITR filing, let's understand the fundamental tax concepts
                  that apply to freelance income:
                </p>

                <div className="grid gap-4">
                  {FREELANCER_BASICS.map(({ term, definition, icon, color }) => (
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

              {/* ITR Form Comparison */}
              <section id="itr-form" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Correct form selection"
                  heading="ITR-3 vs ITR-4 — Which Form Should Freelancers File?"
                  icon={FileText}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Freelancers have two ITR form options. The choice depends on your gross
                  receipts, whether you want to use presumptive taxation, and whether you
                  want to claim actual expenses. Here's a detailed comparison:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {ITR_FORM_COMPARISON.map(({ form, title, when, features, color, recommended, tag }) => (
                    <div
                      key={form}
                      className={`rounded-2xl border-2 p-5 ${color} ${
                        recommended ? "ring-2 ring-emerald-500 ring-offset-2" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span
                            className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                              recommended
                                ? "bg-emerald-600 text-white"
                                : "bg-blue-600 text-white"
                            }`}
                          >
                            {form}
                          </span>
                        </div>
                        <span className={`text-xs font-bold ${
                          recommended ? "text-emerald-600" : "text-blue-600"
                        } flex items-center gap-1`}>
                          {recommended ? <CheckCircle size={13} /> : <Briefcase size={13} />}
                          {tag}
                        </span>
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
                                recommended ? "text-emerald-500" : "text-blue-500"
                              } shrink-0 mt-0.5`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <InfoBox title="When to choose ITR-4 (Presumptive)" color="green">
                    <p className="mb-2">
                      <strong>Best for:</strong> Freelancers with gross receipts ≤ ₹50 lakh who
                      have low actual expenses (less than 50% of receipts).
                    </p>
                    <p>
                      <strong>Benefits:</strong> Simpler filing, no need to maintain detailed
                      books, no expense documentation required, no balance sheet needed.
                    </p>
                  </InfoBox>

                  <InfoBox title="When to choose ITR-3 (Regular)" color="blue">
                    <p className="mb-2">
                      <strong>Best for:</strong> Freelancers with receipts &gt; ₹50 lakh OR those
                      with high actual expenses (more than 50% of receipts).
                    </p>
                    <p>
                      <strong>Benefits:</strong> Can claim all actual expenses, better if you have
                      substantial business costs like rent, equipment, employees, travel.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Section 44ADA Eligibility */}
              <section id="section-44ada" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Presumptive taxation"
                  heading="Section 44ADA Eligibility — Which Professions Qualify?"
                  icon={CheckCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Section 44ADA applies to specified professions listed under Section 44AA.
                  Here's which freelance professions are eligible for presumptive taxation:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded-xl">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="p-3 text-left font-bold">Profession Category</th>
                        <th className="p-3 text-left font-bold">Examples</th>
                        <th className="p-3 text-center font-bold">Section 44ADA Eligible?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SECTION_44ADA_ELIGIBILITY.map(({ profession, examples, eligible }, idx) => (
                        <tr
                          key={profession}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="p-3 font-semibold text-gray-800">{profession}</td>
                          <td className="p-3 text-gray-600">{examples}</td>
                          <td className="p-3 text-center">
                            {eligible ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle size={12} />
                                Yes
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-rose-700 font-bold">
                                <AlertCircle size={12} />
                                No
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="E-commerce sellers cannot use Section 44ADA" color="amber">
                  <p>
                    If you sell products online (Amazon, Flipkart, own website), this is
                    <strong> business income</strong>, not professional income. You cannot use
                    Section 44ADA. You may use Section 44AD (presumptive for business) if
                    turnover ≤ ₹2 crore, or file ITR-3 with regular books.
                  </p>
                </InfoBox>
              </section>

              {/* TDS Section 194J */}
              <section id="tds" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="TDS compliance"
                  heading="TDS on Freelance Income — Section 194J Explained"
                  icon={Wallet}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Clients are required to deduct TDS (Tax Deducted at Source) on professional
                  fees paid to freelancers under Section 194J. Here's how it works:
                </p>

                <div className="space-y-4">
                  {TDS_SECTION_194J.map(({ scenario, tdsRate, threshold, details }) => (
                    <div
                      key={scenario}
                      className="rounded-2xl border border-gray-100 bg-[#f8fbfd] p-5"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-sm font-extrabold text-gray-800">
                          {scenario}
                        </h3>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-600 text-white whitespace-nowrap">
                          {tdsRate}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        Threshold: {threshold}
                      </p>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {details}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Eye size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-blue-900 mb-2">
                        How to Claim TDS Credit
                      </h4>
                      <ul className="text-xs leading-relaxed text-blue-800 space-y-2 list-disc list-inside">
                        <li>TDS deducted by clients is deposited with the government and appears in your <strong>Form 26AS</strong></li>
                        <li>Download Form 26AS from TRACES or e-filing portal before filing ITR</li>
                        <li>Verify all TDS entries — ensure client name, TAN, amount, PAN match</li>
                        <li>While filing ITR, the portal auto-populates TDS from Form 26AS</li>
                        <li>TDS is adjusted against your computed tax liability — excess TDS is refunded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advance Tax */}
              <section id="advance-tax" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Quarterly tax payment"
                  heading="Advance Tax for Freelancers — When and How Much to Pay"
                  icon={Calendar}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  If your total tax liability for the year exceeds ₹10,000 (after TDS), you are
                  required to pay <strong>advance tax</strong> in four installments during the
                  financial year. Here's the schedule for FY 2024-25:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {ADVANCE_TAX_SCHEDULE.map(({ installment, dueDate, percentage, applicableFor }) => (
                    <div
                      key={installment}
                      className="rounded-2xl border border-violet-100 bg-violet-50 p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-violet-600">
                          {installment}
                        </span>
                        <span className="text-xs font-bold bg-white px-2 py-0.5 rounded-full text-violet-700">
                          {dueDate}
                        </span>
                      </div>
                      <p className="text-xl font-extrabold text-violet-900 mb-1">
                        {percentage.split(" ")[0]}
                      </p>
                      <p className="text-xs text-violet-700 leading-relaxed">
                        {percentage}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <InfoBox title="How to calculate advance tax" color="blue">
                    <p className="mb-2">
                      Estimate your total income for FY 2024-25 (freelance receipts minus
                      expenses or 50% if using presumptive). Compute tax using applicable slab
                      rates.
                    </p>
                    <p>
                      Deduct TDS already deducted. If balance tax &gt; ₹10,000, pay advance tax as
                      to ITR filing date.
                    </p>
                    <p>
                      <strong>Section 234C:</strong> 1% per month for each installment shortfall.
                      Computed automatically while filing ITR.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Deductible Expenses */}
              <section id="expenses" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Expense claims (ITR-3 only)"
                  heading="Deductible Expenses for Freelancers Filing ITR-3"
                  icon={DollarSign}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  If you file ITR-3 (not using presumptive taxation), you can claim all
                  expenses incurred wholly and exclusively for your freelance business. Here
                  are common deductible expenses:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200 rounded-xl">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="p-3 text-left font-bold">Expense</th>
                        <th className="p-3 text-left font-bold">Details</th>
                        <th className="p-3 text-left font-bold">Documents Required</th>
                        <th className="p-3 text-center font-bold">Claimable under 44ADA?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEDUCTIBLE_EXPENSES.map(({ expense, details, documents, claimableUnder44ADA }, idx) => (
                        <tr
                          key={expense}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="p-3 font-semibold text-gray-800">{expense}</td>
                          <td className="p-3 text-gray-600 leading-relaxed">{details}</td>
                          <td className="p-3 text-gray-500">{documents}</td>
                          <td className="p-3 text-center">
                            {claimableUnder44ADA ? (
                              <span className="text-emerald-600 font-bold">Yes</span>
                            ) : (
                              <span className="text-rose-600 font-bold">No</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <InfoBox title="Keep all receipts and invoices" color="amber">
                  <p>
                    Maintain digital or physical copies of all expense receipts, invoices, rent
                    agreements, bills. In case of scrutiny assessment, the Assessing Officer
                    may ask for proof of expenses. Missing documentation can lead to expense
                    disallowance and higher tax.
                  </p>
                </InfoBox>
              </section>

              {/* Filing Steps ITR-4 */}
              <section id="filing-itr4" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Step-by-step guide"
                  heading="How to File ITR-4 for Freelancers (Presumptive Taxation)"
                  icon={Upload}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  If you're eligible for Section 44ADA and want to use presumptive taxation,
                  follow these steps to file ITR-4:
                </p>

                <div className="space-y-4">
                  {FILING_STEPS_ITR4.map(({ step, title, desc, icon: Icon }) => (
                    <div
                      key={step}
                      className="flex gap-4 items-start bg-emerald-50 border border-emerald-100 rounded-2xl p-5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                        {step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <Icon
                            size={14}
                            className="text-emerald-600 shrink-0"
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
              </section>

              {/* Filing Steps ITR-3 */}
              <section id="filing-itr3" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Alternative approach"
                  heading="How to File ITR-3 for Freelancers (Regular Books)"
                  icon={FileSpreadsheet}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  If your receipts exceed ₹50 lakh OR you want to claim actual expenses, file
                  ITR-3:
                </p>

                <div className="space-y-4">
                  {FILING_STEPS_ITR3.map(({ step, title, desc, icon: Icon }) => (
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

                <InfoBox title="Tax audit threshold for freelancers" color="amber">
                  <p>
                    Tax audit under Section 44AB is required if your gross receipts from
                    profession exceed <strong>₹50 lakh</strong> in the financial year. If audit
                    is required, due date for filing ITR-3 is <strong>31 October 2025</strong>
                    (for AY 2025-26). Audit report (Form 3CD, 3CB) must be prepared by a CA and
                    uploaded before filing ITR.
                  </p>
                </InfoBox>
              </section>

              {/* Common Mistakes */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Avoid these errors"
                  heading="Common Mistakes Freelancers Make While Filing ITR"
                  icon={AlertCircle}
                />

                <p className="text-sm leading-8 text-gray-600 mb-8">
                  These are the most frequent errors that lead to penalties, interest charges
                  or loss of tax benefits:
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
                      Freelancer ITR made simple
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle your freelancer ITR filing
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      Our CA team specializes in freelancer tax compliance — we help you choose
                      the right ITR form, optimize expenses, claim all TDS credits, file advance
                      tax, and ensure 100% compliant ITR-3 or ITR-4 filing within 24 hours.
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
                  heading="Freelancer Income Tax Filing FAQs"
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
                  general educational and informational purposes only. Tax laws, ITR forms,
                  presumptive taxation rules and TDS rates are subject to change through Finance
                  Acts, CBDT notifications and judicial decisions. The information provided is
                  based on the Income Tax Act, 1961 as applicable for Assessment Year 2025-26.
                  Freelancers should consult a qualified Chartered Accountant for personalized
                  tax advice, especially regarding ITR form selection, expense claims and advance
                  tax computation. Taxvio does not assume legal liability for actions taken based
                  solely on this content.
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
                      ["#basics", "Freelance tax basics"],
                      ["#itr-form", "ITR-3 vs ITR-4"],
                      ["#section-44ada", "Section 44ADA eligibility"],
                      ["#tds", "TDS Section 194J"],
                      ["#advance-tax", "Advance tax"],
                      ["#expenses", "Deductible expenses"],
                      ["#filing-itr4", "Filing ITR-4"],
                      ["#filing-itr3", "Filing ITR-3"],
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
                    <Laptop size={18} className="text-purple-300" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold">
                    Expert freelancer ITR filing
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    CA-assisted ITR-3/ITR-4 filing for freelancers — includes expense
                    optimization, TDS credit claiming, advance tax computation and
                    complete compliance.
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
                    href: "/serviceslist/income-tax/itr-business",
                    label: "ITR-3/ITR-4 Filing",
                    sub: "Professional income from ₹1,499",
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
                  title: "Get Expert ITR Filing Help",
                  text: "CA-assisted freelancer ITR filing with expense optimization and complete compliance support.",
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