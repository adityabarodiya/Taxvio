// app/guide/roc/register-company-us-clients-invoicing/page.tsx

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
  CreditCard,
  MapPin,
  PackageCheck,
  Banknote,
  Receipt,
  Wallet,
} from "lucide-react";

const phoneNumber = "918937980366";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "How to Register a Company for US Clients Invoicing 2026: LLP vs Pvt Ltd, FIRC, FEMA, GST & Tax Planning | Taxvio",
  description:
    "Complete guide to registering an Indian company for invoicing US clients 2026 — LLP vs Private Limited comparison, export invoice format, FIRC compliance, FEMA reporting, GST on exports (LUT), income tax treatment, foreign remittance, Wise/PayPal setup and complete compliance checklist.",
  keywords: [
    "register company for US clients",
    "invoice US clients from India",
    "LLP vs private limited for exports",
    "export invoice India",
    "FIRC compliance",
    "FEMA export reporting",
    "GST on export services",
    "LUT for exports",
    "foreign remittance India",
    "Wise business account India",
    "PayPal invoicing India",
    "tax on US client income",
    "export services compliance",
    "freelancer to company India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/guide/roc/register-company-us-clients-invoicing",
  },
  openGraph: {
    title: "How to Register a Company for US Clients Invoicing 2026 — Complete Guide | Taxvio",
    description:
      "LLP vs Pvt Ltd, export invoicing, FIRC, FEMA, GST LUT, tax treatment, foreign remittance and complete compliance framework for Indian companies serving US clients.",
    url: "https://www.taxvio.in/guide/roc/register-company-us-clients-invoicing",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register Company for US Clients Invoicing 2026",
    description:
      "Complete guide — LLP vs Pvt Ltd, export invoice, FIRC, FEMA, GST LUT, tax planning and compliance for Indian companies invoicing US clients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const ENTITY_COMPARISON = [
  {
    entity: "Proprietorship",
    registrationCost: "₹0-5,000 (GST + bank account)",
    registrationTime: "1-3 days",
    compliance: "Low — ITR, GST returns only",
    liability: "Unlimited personal liability",
    taxRate: "Individual slab (up to 42.74%)",
    foreignClients: "✓ Allowed, but credibility issue",
    fundingOption: "✗ Cannot raise funding",
    bestFor: "Solo freelancers, <₹10L annual revenue",
    pros: [
      "Zero registration cost",
      "Minimal compliance",
      "Quick setup",
      "Easy dissolution"
    ],
    cons: [
      "Personal assets at risk",
      "High tax rate (slab)",
      "Low client credibility (especially US)",
      "Cannot scale or raise funding",
      "No separate legal entity"
    ],
    icon: "👤",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    entity: "LLP (Limited Liability Partnership)",
    registrationCost: "₹10,000-25,000 (govt fees + CA charges)",
    registrationTime: "7-15 days",
    compliance: "Medium — ITR, GST, Annual ROC filing",
    liability: "Limited to LLP capital",
    taxRate: "30% flat + surcharge (effective 34.94%)",
    foreignClients: "✓✓ Good credibility, separate entity",
    fundingOption: "Limited (debt only, no equity funding)",
    bestFor: "Service businesses, 2+ partners, ₹10L-₹2Cr revenue",
    pros: [
      "Limited liability protection",
      "Lower compliance vs Pvt Ltd",
      "Flat 30% tax (vs slab)",
      "Good for professional services (IT, consulting)",
      "Separate legal entity",
      "Easy profit distribution (no dividend tax)"
    ],
    cons: [
      "Cannot raise equity funding (VC/angel)",
      "Not ideal for product companies",
      "At least 2 partners required",
      "Annual ROC filings mandatory",
      "Partner changes require ROC approval"
    ],
    icon: "🤝",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    entity: "Private Limited Company",
    registrationCost: "₹15,000-40,000 (govt fees + CA charges)",
    registrationTime: "10-20 days",
    compliance: "High — ITR, GST, Annual ROC, Board meetings, audit",
    liability: "Limited to share capital",
    taxRate: "25% (turnover <₹400Cr) or 22% u/s 115BAA (new cos)",
    foreignClients: "✓✓✓ Highest credibility, professional entity",
    fundingOption: "✓ Can raise equity (VC/angel/FDI)",
    bestFor: "Scalable businesses, product companies, funding plans",
    pros: [
      "Can raise equity funding",
      "Highest client credibility",
      "Lower tax rate (22-25%)",
      "Perpetual succession",
      "Easy ownership transfer",
      "Best for US/international clients"
    ],
    cons: [
      "Highest compliance burden",
      "Mandatory audit (all Pvt Ltds)",
      "Complex dissolution process",
      "Dividend Distribution Tax (DDT) abolished, but dividends taxed in shareholders' hands",
      "Regulatory scrutiny (MCA, ROC)"
    ],
    icon: "🏢",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
];

const REGISTRATION_STEPS = [
  {
    step: "1. Choose Entity Type",
    description: "Decide between Proprietorship, LLP, or Private Limited based on business size, funding plans, and tax optimization.",
    timeline: "1 day",
    action: "Consult CA to compare tax liability and compliance cost for each entity",
    documents: "None required at this stage (decision-making)",
    icon: "🎯",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    step: "2. Obtain Digital Signature Certificate (DSC)",
    description: "Required for all electronic filings with MCA. Valid for 2 years. Needed for directors/partners.",
    timeline: "1-2 days",
    action: "Apply online via licensed DSC vendor (eMudhra, Sify, Capricorn). Cost: ₹1,000-2,000 per DSC.",
    documents: "PAN card, Aadhaar, passport-size photo, email, mobile",
    icon: "🔐",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    step: "3. Obtain Director Identification Number (DIN) — For Pvt Ltd",
    description: "Unique identification for company directors. Required before incorporating Pvt Ltd company.",
    timeline: "1-2 days",
    action: "File SPICe+ Part A on MCA portal (online). DIN issued within 1-2 days if docs correct.",
    documents: "PAN, Aadhaar, address proof, passport-size photo",
    icon: "🆔",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    step: "4. Name Reservation (RUN)",
    description: "Reserve company/LLP name. Check availability on MCA portal. Avoid trademark conflicts.",
    timeline: "1-3 days",
    action: "File SPICe+ Part A (Pvt Ltd) or FiLLiP (LLP) with 2 proposed names. MCA approves one or asks for resubmission.",
    documents: "Proposed names (2 options), No-objection if name similar to existing entity",
    icon: "📝",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
  {
    step: "5. File Incorporation Documents",
    description: "For Pvt Ltd: SPICe+ (INC-32), MoA, AoA. For LLP: FiLLiP, LLP Agreement.",
    timeline: "5-10 days (MCA processing)",
    action: "File incorporation form on MCA portal with all attachments. Pay govt fees (₹4,000-10,000 depending on capital).",
    documents: "MoA/AoA (Pvt Ltd), LLP Agreement (LLP), Registered office proof, Director/Partner consent, DSC",
    icon: "📄",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
  {
    step: "6. Obtain PAN & TAN",
    description: "PAN (company PAN) and TAN (Tax Deduction Account Number) issued automatically via SPICe+ for Pvt Ltd. For LLP, apply separately on NSDL portal.",
    timeline: "1-7 days (auto-issued for Pvt Ltd, 7-10 days for LLP)",
    action: "For Pvt Ltd: Auto-issued with CIN. For LLP: Apply on NSDL portal with LLPIN and DSC.",
    documents: "Incorporation certificate, MoA/AoA, registered office proof",
    icon: "🏦",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    step: "7. Open Current Bank Account",
    description: "Dedicated business bank account for company/LLP. Required for GST registration and client payments.",
    timeline: "3-7 days",
    action: "Visit bank with incorporation docs. Most banks offer online account opening for companies. Submit KYC and MOA/AOA.",
    documents: "Incorporation certificate, PAN, MoA/AoA, Board resolution, Director/Partner KYC, address proof",
    icon: "💳",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    step: "8. Register for GST (if turnover >₹20L or voluntary)",
    description: "GST registration mandatory if annual turnover exceeds ₹20 lakh (₹10L for NE states). For export services, voluntary registration recommended to claim input credit.",
    timeline: "3-7 days",
    action: "File GST REG-01 on GST portal. Upload incorporation docs, bank statement, rent agreement (registered office).",
    documents: "PAN, incorporation certificate, bank account proof, registered office proof (rent agreement + electricity bill)",
    icon: "📊",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    step: "9. Obtain Import Export Code (IEC) — For Export Services",
    description: "IEC is 10-digit code required for all export/import transactions. Mandatory for receiving export payments.",
    timeline: "1-3 days (online application)",
    action: "Apply on DGFT portal with PAN, bank certificate, cancelled cheque. One-time registration, no renewal.",
    documents: "PAN, bank account certificate (on bank letterhead), cancelled cheque, incorporation certificate",
    icon: "🌍",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    step: "10. File Letter of Undertaking (LUT) for GST on Exports",
    description: "LUT allows export of services without payment of IGST. Without LUT, you pay 18% IGST and claim refund (cashflow issue).",
    timeline: "Instant (online filing)",
    action: "File Form GST RFD-11 on GST portal. Valid for financial year. Renew annually.",
    documents: "GST registration, IEC, bank account with AD Code (Authorized Dealer code for forex transactions)",
    icon: "📋",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
];

const INVOICE_REQUIREMENTS = [
  {
    field: "Invoice Number & Date",
    mandatory: "Yes",
    description: "Sequential invoice number (e.g., INV-2026-001) and invoice date. Must be chronological.",
    example: "Invoice No: INV-2026-001, Date: 15-Jan-2026",
    gstRequirement: "Mandatory for GST compliance (even for export)",
    icon: "🔢",
  },
  {
    field: "Supplier Details (Your Company)",
    mandatory: "Yes",
    description: "Full legal name, registered address, GSTIN (if registered), PAN, IEC, email, phone",
    example: "ABC Tech Solutions LLP, 123 MG Road, Bangalore 560001, GSTIN: 29XXXXX, IEC: XXXXX, PAN: AAAA1234C",
    gstRequirement: "GSTIN mandatory if GST registered, IEC mandatory for export invoice",
    icon: "🏢",
  },
  {
    field: "Client Details (US Client)",
    mandatory: "Yes",
    description: "Client legal name, full address (Street, City, State, ZIP, Country), email. No GST/tax ID needed for foreign clients.",
    example: "XYZ Inc., 456 Silicon Valley Blvd, San Francisco, CA 94101, USA",
    gstRequirement: "Not required for foreign clients, but full address mandatory for export declaration",
    icon: "🌎",
  },
  {
    field: "Place of Supply",
    mandatory: "Yes (for GST)",
    description: "Location where service is provided or consumed. For export, mention 'Outside India' or specific country.",
    example: "Place of Supply: United States (Outside India)",
    gstRequirement: "Mandatory for GST returns to classify as export",
    icon: "📍",
  },
  {
    field: "Service Description",
    mandatory: "Yes",
    description: "Detailed description of services provided. Mention SAC (Services Accounting Code) for GST.",
    example: "Software Development Services (SAC: 998314), Website Design (SAC: 998313)",
    gstRequirement: "SAC code mandatory if GST registered",
    icon: "📝",
  },
  {
    field: "Currency & Amount",
    mandatory: "Yes",
    description: "Invoice in USD or client's currency. Mention exchange rate if converting to INR for accounting.",
    example: "Amount: USD 5,000 (INR equivalent: ₹4,12,500 @ USD 1 = INR 82.50 as on 15-Jan-2026)",
    gstRequirement: "For GST, convert to INR using RBI reference rate or actual rate realized",
    icon: "💵",
  },
  {
    field: "GST Rate & Amount",
    mandatory: "Yes (if GST registered)",
    description: "For export under LUT, GST rate = 0%. Mention 'Supply meant for export under LUT without payment of IGST'.",
    example: "IGST @ 0% (Export under LUT ARN: XXXXX dated 01-Apr-2026): NIL",
    gstRequirement: "Mandatory to mention LUT reference to claim zero GST",
    icon: "🧾",
  },
  {
    field: "Payment Terms",
    mandatory: "Recommended",
    description: "Due date, payment method (wire transfer, PayPal, Wise), late payment penalties.",
    example: "Payment Due: 30 days from invoice date. Payment Method: Wire transfer to [Bank details]. Late fee: 1.5% per month.",
    gstRequirement: "Not mandatory for GST, but good practice for client contracts",
    icon: "⏰",
  },
  {
    field: "Bank Details for Wire Transfer",
    mandatory: "Yes",
    description: "Include bank name, account number, SWIFT/BIC code, IFSC, bank address. Needed for international wire transfers.",
    example: "Bank: HDFC Bank Ltd, A/c No: 123456789, SWIFT: HDFCINBBXXX, IFSC: HDFC0001234, Branch: MG Road Bangalore",
    gstRequirement: "Not GST requirement, but mandatory for receiving payment",
    icon: "🏦",
  },
  {
    field: "Declaration Statement",
    mandatory: "Yes (for exports)",
    description: "Declaration that this is an export invoice and payment will be received in foreign currency.",
    example: "This is an export invoice. Payment shall be received in convertible foreign exchange. We undertake to realize and repatriate the export proceeds within the stipulated period.",
    gstRequirement: "Required to claim export benefits and LUT",
    icon: "✅",
  },
  {
    field: "Digital Signature / Authorized Signatory",
    mandatory: "Recommended",
    description: "Name and signature of authorized person (Director/Partner/Authorized Signatory).",
    example: "For ABC Tech Solutions LLP, [Signature], John Doe, Designated Partner",
    gstRequirement: "Not mandatory for GST, but adds legal validity",
    icon: "✍️",
  },
];

const PAYMENT_METHODS = [
  {
    method: "Wire Transfer (SWIFT)",
    setup: "Provide bank SWIFT details to client. Client sends via their bank.",
    fees: "Bank charges: USD 10-50 per transaction (receiving bank). Client may also pay sending fees.",
    processingTime: "2-5 business days",
    pros: [
      "Most professional method",
      "Suitable for large amounts (>$5,000)",
      "Automatic FIRC (Foreign Inward Remittance Certificate) issued by bank",
      "No third-party intermediary"
    ],
    cons: [
      "High fees for small amounts (<$1,000)",
      "Slower (2-5 days)",
      "Requires client to use bank (some clients prefer online methods)"
    ],
    taxCompliance: "Bank auto-reports to RBI via FIRC. File FETERS (Foreign Exchange Transaction Electronic Reporting System) for transactions >$25K.",
    icon: "🏦",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    method: "Wise (formerly TransferWise) Business",
    setup: "Open Wise Business account (requires company docs). Get USD/EUR/GBP account details. Share with client.",
    fees: "0.5-1.5% of transfer amount (much lower than banks). No receiving fees.",
    processingTime: "1-2 business days",
    pros: [
      "Low fees (vs banks)",
      "Fast transfers (1-2 days)",
      "Multi-currency accounts (USD, EUR, GBP)",
      "Easy reconciliation via Wise dashboard",
      "Good for small-medium invoices ($500-$10K)"
    ],
    cons: [
      "Not all Indian banks accept Wise transfers smoothly (ICICI, HDFC, Axis generally OK)",
      "FIRC may not be auto-issued (need to request from Wise support)",
      "Some clients prefer traditional bank transfers"
    ],
    taxCompliance: "Download transaction report from Wise. Attach to ITR and FEMA compliance. Request FIRC from Wise support for RBI reporting.",
    icon: "💸",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    method: "PayPal Business",
    setup: "Open PayPal Business account linked to Indian company bank account. Share PayPal invoice or email for payment.",
    fees: "4.4% + fixed fee (USD 0.30) per transaction. High for large amounts.",
    processingTime: "Instant (PayPal balance), 3-5 days (withdrawal to bank)",
    pros: [
      "Instant payment confirmation",
      "Widely used by US clients",
      "Good for small invoices (<$2,000)",
      "Built-in invoicing system",
      "Buyer/seller protection"
    ],
    cons: [
      "High fees (4.4%)",
      "Currency conversion fees if client pays in non-USD",
      "PayPal account freezes/holds (compliance issues common)",
      "FIRC not auto-issued (must request via customer support)"
    ],
    taxCompliance: "Download PayPal statement. Convert to INR at actual rate realized. Report in ITR. Request FIRC for FEMA compliance if transaction >$25K.",
    icon: "💳",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    method: "Stripe (for SaaS/subscription businesses)",
    setup: "Integrate Stripe payment gateway. Client pays via credit card. Stripe sends to your bank.",
    fees: "2.9% + $0.30 per transaction (US cards). International cards: 3.4% + $0.30.",
    processingTime: "7-14 days (payout cycle to Indian bank)",
    pros: [
      "Automated recurring billing (good for SaaS)",
      "Instant payment confirmation",
      "Supports 135+ currencies",
      "Developer-friendly APIs",
      "Good for product/SaaS businesses"
    ],
    cons: [
      "High fees for large transactions",
      "7-14 day payout delay to Indian bank",
      "Requires technical integration (not suitable for simple invoicing)",
      "FIRC not auto-issued"
    ],
    taxCompliance: "Download Stripe reports. Report all payouts in ITR. Request FIRC for FEMA compliance.",
    icon: "🔵",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    method: "Payoneer",
    setup: "Open Payoneer account. Get US/EU bank details. Share with client or use Payoneer invoicing.",
    fees: "1-3% depending on payment source. Lower than PayPal, higher than Wise.",
    processingTime: "2-3 business days",
    pros: [
      "Multi-currency receiving accounts",
      "Lower fees than PayPal",
      "Good for marketplace payments (Upwork, Fiverr integrations)",
      "Easy withdrawal to Indian bank"
    ],
    cons: [
      "Account approval takes 1-2 weeks",
      "FIRC may require manual request",
      "Less popular among US clients vs PayPal/Wise"
    ],
    taxCompliance: "Download Payoneer transaction history. Report in ITR. Request FIRC from Payoneer support for RBI reporting.",
    icon: "🟠",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
];

const TAX_TREATMENT = [
  {
    scenario: "Export of Services to US Client (B2B)",
    incomeType: "Business Income (PGBP)",
    gstTreatment: "Zero-rated supply under GST (0% GST if LUT filed). If no LUT, pay 18% IGST and claim refund.",
    incomeTax: "Taxable as business income. LLP: 30% + surcharge. Pvt Ltd: 22-25% (depending on turnover and 115BAA eligibility).",
    femaCompliance: "Export proceeds must be realized within 9 months (extendable to 12 months). File FETERS if >$25K per transaction.",
    example: "Invoice $10,000 to US client. Receive $10,000 via wire transfer. Convert at ₹82.50 = ₹8,25,000. GST: NIL (LUT). Income tax: ₹8,25,000 × 30% (LLP) = ₹2,47,500 or ₹8,25,000 × 25% (Pvt Ltd) = ₹2,06,250.",
    deductions: "Can claim business expenses: software licenses, salaries, office rent, travel, professional fees (CA, lawyer), marketing, etc. Net taxable income = Revenue - Expenses.",
    icon: "💼",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    scenario: "Receiving Payment in USD — Conversion to INR",
    incomeType: "Revenue recognition on accrual basis (invoice date) or cash basis (payment date) — choose method consistently",
    gstTreatment: "GST rate: 0% (export under LUT). Report in GSTR-1 as export.",
    incomeTax: "Convert USD to INR using: (1) RBI reference rate on invoice date OR (2) Actual rate realized on payment date. Choose one method and apply consistently.",
    femaCompliance: "Bank auto-reports FIRC. Keep FIRC copy for ITR and FEMA audit.",
    example: "Invoice $5,000 on Jan 15 (RBI rate ₹82.50). Client pays on Feb 10 (actual rate ₹83.00). Option 1: Book ₹4,12,500 income (using RBI rate). Option 2: Book ₹4,15,000 income (using actual rate). Difference ₹2,500 = forex gain/loss.",
    deductions: "Forex gain/loss is capital gain or ordinary income depending on accounting method chosen (consult CA).",
    icon: "💱",
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    scenario: "Payment Gateway Fees (PayPal, Wise, Stripe)",
    incomeType: "Business expense (deductible)",
    gstTreatment: "Gateway fees charged by foreign entities (PayPal, Wise, Stripe) are subject to Reverse Charge Mechanism (RCM) under GST. You must pay GST under RCM and can claim input credit if GST registered.",
    incomeTax: "Fully deductible as business expense. Reduces taxable income.",
    femaCompliance: "No FEMA reporting for gateway fees (they are service charges, not repatriation).",
    example: "Receive $1,000 via PayPal. PayPal charges 4.4% = $44. Net received: $956. For tax: Revenue = $1,000 (invoice amount), Expense = $44 (gateway fee). Taxable income = $956 equivalent in INR.",
    deductions: "All payment gateway fees, bank charges, forex conversion charges are deductible business expenses.",
    icon: "💳",
    color: "bg-violet-50 border-violet-100 text-violet-700",
  },
  {
    scenario: "Advance Payment from US Client",
    incomeType: "Advance received is NOT immediately taxable (tax on accrual when service rendered or invoice raised)",
    gstTreatment: "GST is payable on advance receipts for domestic supplies. But for export, GST @ 0% under LUT, so no GST on advance either.",
    incomeTax: "If you follow cash basis accounting, advance is taxable income in year received. If accrual basis, taxable only when service rendered/invoice raised.",
    femaCompliance: "FIRC issued by bank on receipt. Keep for records. Link advance to final invoice in books.",
    example: "Client pays $2,000 advance on Jan 1, 2026. You raise final invoice for $10,000 on March 1, 2026. If accrual basis: ₹8,25,000 taxable in FY 2026-27 (when invoice raised). Advance ₹1,65,000 is liability till invoice raised.",
    deductions: "N/A (advance is not income until service rendered).",
    icon: "📥",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    scenario: "Unrealized Export Proceeds (Client doesn't pay)",
    incomeType: "Bad debt — can claim deduction if invoice was already booked as income",
    gstTreatment: "No GST impact (already reported as 0% export). If invoice was in GSTR-1, no adjustment needed.",
    incomeTax: "If you booked invoice as income (accrual basis) but client never paid, you can write off as bad debt. Claim deduction under Section 36(1)(vii) if debt is written off in books.",
    femaCompliance: "If export proceeds not realized within 9 months, you must report to RBI and apply for extension or explain reason (client dispute, bankruptcy, etc.). Non-realization without reporting is FEMA violation.",
    example: "Invoiced $5,000 on Jan 1, 2026 (₹4,12,500). Client never paid. By Sept 30, 2026 (9 months), inform bank and RBI. Write off ₹4,12,500 as bad debt in FY 2026-27. Claim deduction in ITR.",
    deductions: "Bad debt deduction available only if income was already taxed (accrual method). If cash method, no tax paid = no deduction needed.",
    icon: "❌",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
];

const COMPLIANCE_CHECKLIST = [
  {
    phase: "Pre-Invoice Stage (Before Closing Client)",
    tasks: [
      "Verify client is genuine (check website, LinkedIn, payment history)",
      "Sign Master Service Agreement (MSA) or Statement of Work (SOW) clearly defining scope, payment terms, deliverables",
      "Include FEMA compliance clause: 'Payment shall be received in convertible foreign exchange within 9 months of invoice date'",
      "Include jurisdiction clause: 'Disputes governed by laws of India, jurisdiction of [Your City] courts'",
      "Decide currency: USD is standard for US clients. EUR/GBP if European clients.",
      "Set payment terms: Net 30, Net 15, or 50% advance + 50% on delivery",
    ],
    docs: "Master Service Agreement, SOW, NDA (if applicable)",
  },
  {
    phase: "Invoice Generation",
    tasks: [
      "Use professional invoicing software (Zoho Invoice, QuickBooks, Wave) or template (Excel/Google Sheets)",
      "Include all mandatory fields: Invoice number, date, your company details (GSTIN, IEC, PAN), client details, service description with SAC code, amount in USD, GST @ 0% under LUT, bank details, payment terms",
      "Add declaration: 'This is an export invoice. Payment shall be received in foreign exchange. Export under LUT [ARN] dated [Date].'",
      "Save invoice as PDF with filename: InvoiceNo_ClientName_Date.pdf (e.g., INV-001_XYZ-Inc_15Jan2026.pdf)",
      "Send via email with professional message: 'Please find attached invoice for [services]. Payment due by [date]. For any queries, contact [email/phone].'",
    ],
    docs: "Invoice PDF, email confirmation, client acknowledgment (reply email)",
  },
  {
    phase: "Payment Receipt & FIRC",
    tasks: [
      "Monitor bank account for incoming payment (wire transfer takes 2-5 days, Wise 1-2 days, PayPal instant)",
      "Once payment received, bank auto-issues FIRC (Foreign Inward Remittance Certificate) for wire transfers",
      "For Wise/PayPal/Stripe: Download transaction statement and request FIRC from support (if transaction >$25K or for RBI audit)",
      "Match FIRC details with invoice: amount, client name, invoice reference",
      "Record entry in accounting software: Dr. Bank A/c, Cr. Export Revenue A/c (in INR at realized exchange rate)",
      "File FIRC safely — required for ITR, GST returns, FEMA compliance, and RBI audit",
    ],
    docs: "FIRC, bank statement, payment gateway statement (Wise/PayPal), accounting entry",
  },
  {
    phase: "GST Compliance (Monthly/Quarterly)",
    tasks: [
      "Report export invoices in GSTR-1 under 'Exports' section (Table 6A for services)",
      "Mention invoice number, date, invoice value (in INR), GSTIN (your GSTIN), place of supply (country), shipping bill/bill of export number (for goods, N/A for services)",
      "For services export, no shipping bill required. Just mention invoice details and LUT reference.",
      "File GSTR-1 by 11th of next month (monthly filers) or by 13th of month after quarter (quarterly filers)",
      "File GSTR-3B showing export supplies under 'Zero-rated supplies' (Table 3.1(b)). No IGST payment if LUT filed.",
      "Reconcile GSTR-1 and GSTR-3B — export value should match in both returns",
    ],
    docs: "GSTR-1 filed acknowledgment, GSTR-3B acknowledgment, export invoice copies",
  },
  {
    phase: "Income Tax Compliance (Annual ITR)",
    tasks: [
      "Compile all export invoices for financial year (Apr 1 - Mar 31)",
      "Total export revenue in INR (convert each invoice at RBI rate or actual realized rate — use consistent method)",
      "Subtract business expenses: salaries, rent, software subscriptions, payment gateway fees, CA fees, marketing, travel, etc.",
      "Net taxable income = Revenue - Expenses",
      "For LLP: File ITR-5, pay tax @ 30% + surcharge + cess (effective 34.94% for income >₹1Cr)",
      "For Pvt Ltd: File ITR-6, pay tax @ 25% (if turnover <₹400Cr) or 22% under Section 115BAA (new companies with no incentives)",
      "Attach FIRC copies, export invoices, and bank statements to ITR (upload on portal or keep for scrutiny)",
    ],
    docs: "ITR filed acknowledgment, tax payment challans, FIRC, export invoices, bank statements, P&L, Balance Sheet",
  },
  {
    phase: "FEMA Compliance (Export Realization)",
    tasks: [
      "All export proceeds must be realized within 9 months of export date (shipping bill date for goods, invoice date for services)",
      "For unrealized exports beyond 9 months, inform bank immediately and file extension request with RBI (via bank) explaining reason (client dispute, payment delay, etc.)",
      "If export proceeds not realized even after extension, may need to write off and report to Enforcement Directorate (ED) if very large amount",
      "File FETERS (Foreign Exchange Transaction Electronic Reporting System) on RBI portal if individual transaction >$25,000 (bank may do this automatically, confirm with bank)",
      "Maintain export register: Invoice no, date, amount in USD, INR equivalent, payment received date, FIRC no, realization within 9 months (Yes/No)",
    ],
    docs: "FIRC, export invoice, FETERS filing confirmation (if applicable), bank correspondence for unrealized exports",
  },
  {
    phase: "Annual ROC Compliance (LLP/Pvt Ltd)",
    tasks: [
      "For LLP: File Form 11 (Annual Return) and Form 8 (Statement of Accounts) by May 30 each year. Must be certified by CA if turnover >₹40 lakh or contribution >₹25 lakh.",
      "For Pvt Ltd: File AOC-4 (Financial Statements) and MGT-7 (Annual Return) by Oct 30 (small company) or Sep 30 (one person company). Mandatory audit by CA for all Pvt Ltds.",
      "Disclose export revenue in Notes to Accounts under 'Revenue from Operations' with breakup: Domestic revenue, Export revenue",
      "Disclose foreign exchange earnings and outgo in Notes to Accounts (required for audit)",
      "Hold Annual General Meeting (AGM) for Pvt Ltd within 6 months of FY end (by Sep 30). For LLP, no AGM required.",
    ],
    docs: "Form 11 + Form 8 (LLP) or AOC-4 + MGT-7 (Pvt Ltd), audited financials, AGM minutes (Pvt Ltd)",
  },
  {
    phase: "Annual Internal Compliance Review",
    tasks: [
      "Reconcile all export invoices with FIRC and bank statements — ensure no missing FIRCs",
      "Review GST filings: all export invoices reported in GSTR-1, LUT renewed for new FY (file fresh RFD-11 by Apr 1 each year)",
      "Check FEMA compliance: all export proceeds realized within 9 months, no pending unrealized exports without RBI intimation",
      "Tax planning: review expenses, consider Section 80G donations, depreciation, etc. to reduce tax liability",
      "Appoint CA for annual audit (mandatory for Pvt Ltd, optional but recommended for LLP if turnover >₹40L)",
      "Update company resolutions: any change in directors/partners, registered office, authorized signatories, etc.",
    ],
    docs: "Internal compliance report, CA audit report, updated resolutions, tax computation sheet",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Not obtaining IEC before raising first export invoice",
    why: "Many founders assume company registration and GST are sufficient for export invoicing. IEC (Import Export Code) is mandatory for all export/import transactions.",
    consequence: "Bank may reject incoming foreign payment if IEC not linked to account. Cannot claim export benefits. Cannot file shipping bill (for goods) or report export in GST. Penalty for export without IEC: ₹1-5 lakh under Customs Act.",
    fix: "Apply for IEC immediately on DGFT portal. It's free and takes 1-3 days. Link IEC with GST and bank account.",
    prevention: "Obtain IEC immediately after GST registration, before invoicing any foreign client.",
  },
  {
    mistake: "Not filing LUT (Letter of Undertaking) — paying 18% IGST on exports",
    why: "Without LUT, you must pay 18% IGST on export invoice value and then claim refund (which takes 3-6 months, creating cashflow problem).",
    consequence: "For $10,000 invoice (₹8.25L), you pay ₹1.48L IGST upfront. Wait 3-6 months for refund. Cashflow crunch for small companies.",
    fix: "File Form GST RFD-11 (LUT) on GST portal before raising first export invoice. Valid for one financial year. Renew by Apr 1 each year.",
    prevention: "Set annual reminder to renew LUT on Apr 1. File LUT as soon as GST registration is done (even before first invoice).",
  },
  {
    mistake: "Invoice raised but payment received after 9 months — FEMA violation",
    why: "Client delays payment, or you forget to follow up. Export proceeds not realized within 9 months of invoice date.",
    consequence: "FEMA violation. Must report to bank and RBI. Penalty: ₹10,000 - ₹1 lakh. If willful violation (e.g., you knew client won't pay but didn't report), penalty up to ₹1 lakh + interest. Enforcement Directorate (ED) scrutiny for large amounts.",
    fix: "As soon as 9-month deadline approaches (e.g., 8 months after invoice), if payment not received, inform bank in writing. Apply for extension citing reason (client dispute, payment delay, etc.). Bank forwards to RBI for approval.",
    prevention: "Set 30-day, 60-day, 90-day payment reminders for every invoice. If client doesn't pay by 6 months, escalate and inform bank by 7-8 months.",
  },
  {
    mistake: "Not keeping FIRC copies — ITR scrutiny fails",
    why: "Bank issues FIRC (Foreign Inward Remittance Certificate) on email or via net banking. Founder downloads once but doesn't maintain organized record. During IT scrutiny (2-3 years later), cannot produce FIRC.",
    consequence: "IT Department demands proof of foreign income. Without FIRC, Department may disallow export income, treat it as unexplained income, and tax at 60% + penalty. Even if you have invoice and bank statement, FIRC is the only proof accepted by IT Department for foreign remittance.",
    fix: "Immediately download FIRC from bank portal/email on receipt of payment. Save in organized folder: FY2026-27/FIRCs/InvoiceNo_FIRC.pdf. Upload to cloud (Google Drive, Dropbox) for backup.",
    prevention: "Create FIRC filing system from Day 1. For every payment, download FIRC within 1 week of receipt. Quarterly review to ensure all FIRCs collected.",
  },
  {
    mistake: "Mixing personal and business accounts — receiving export payment in personal account",
    why: "Founder uses personal savings account to receive small client payments instead of company current account.",
    consequence: "FEMA violation (export proceeds must come to business account, not personal). IT Department can challenge business income (if in personal account, treated as personal income taxed at slab rate up to 42.74% vs company rate 25-30%). Bank may freeze account for suspicious forex transactions. Cannot claim business expenses if income in personal account.",
    fix: "Immediately transfer funds from personal to business account. File rectification with IT Department if already filed ITR showing personal income. Apply for FEMA compounding if penalty notice received.",
    prevention: "NEVER receive export payment in personal account. Always use company current account. Give clients only company bank details on invoice.",
  },
  {
    mistake: "Not reporting PayPal/Wise income in ITR — treating it as 'cash' income",
    why: "Payments received via PayPal/Wise don't show in company bank statement until withdrawn. Founder forgets to report PayPal balance as income, thinking 'only bank deposit is income.'",
    consequence: "Income Tax Department can access PayPal/Wise data via international information exchange (FATCA, CRS). Non-reporting = tax evasion. Penalty: 50-200% of tax evaded + prosecution under Section 276C ITA (imprisonment up to 7 years for willful evasion >₹25L).",
    fix: "Download full transaction history from PayPal/Wise for FY. Convert all receipts to INR. Report as export income in ITR even if funds still in PayPal/Wise (not yet withdrawn to bank). Show PayPal/Wise balance as 'Current Asset' in Balance Sheet.",
    prevention: "Maintain parallel register for PayPal/Wise transactions. Quarterly reconciliation: PayPal income + bank withdrawal = total export income. Include in ITR computation.",
  },
];

const FAQS = [
  {
    question: "Can I invoice US clients as a freelancer (individual) without registering a company?",
    answer:
      "Yes, you can invoice as a freelancer (individual/proprietor) without company registration. However, you face several disadvantages: (1) Personal assets at risk (unlimited liability), (2) Higher tax rate (individual slab up to 42.74% vs company flat 25-30%), (3) Lower client credibility (US companies prefer invoices from registered entities like LLP/Pvt Ltd for their vendor compliance), (4) Cannot raise funding, (5) Difficult to scale or hire employees. For occasional freelancing (<₹10L/year), proprietorship is OK. But if you're building a business (>₹10L revenue, plans to scale, hire, or raise funding), register LLP or Pvt Ltd. Cost of LLP registration (₹10-25K) is quickly offset by tax savings and client trust.",
  },
  {
    question: "Do I need to register for GST if I only invoice foreign clients (100% export)?",
    answer:
      "GST registration is NOT mandatory if your turnover is below ₹20 lakh (₹10L for NE states), even if all sales are exports. However, VOLUNTARY GST registration is highly recommended for export businesses because: (1) You can file LUT and export at 0% GST (without LUT, you'd need to pay 18% IGST and claim refund — cashflow issue), (2) You can claim input tax credit on business expenses (office rent, software subscriptions, etc.), (3) GST registration adds credibility (clients, investors, banks view it as professional entity), (4) IEC (Import Export Code) application requires GST or PAN — GST makes IEC process smoother. Best practice: Register for GST voluntarily even if turnover <₹20L if you're doing export business.",
  },
  {
    question: "What is FIRC and why is it important? What if my bank doesn't issue FIRC automatically?",
    answer:
      "FIRC (Foreign Inward Remittance Certificate) is a certificate issued by your bank confirming that you received foreign currency remittance. It contains: sender name, amount in foreign currency, INR equivalent, purpose (export of services), invoice reference. FIRC is critical for: (1) Income Tax compliance (proof of export income for ITR), (2) GST compliance (proof for claiming export benefits), (3) FEMA compliance (proof that export proceeds realized), (4) RBI audit (if selected for inspection). For SWIFT wire transfers, banks auto-issue FIRC within 2-3 days of receiving payment (check net banking or email). For Wise/PayPal/Stripe, FIRC may NOT be auto-issued. You must request via support ticket: 'Please provide FIRC for transaction [ID] dated [Date] for INR [Amount].' Wise usually provides within 5-7 days. PayPal may refuse (in that case, use PayPal transaction statement + bank statement showing deposit as proof — consult CA for ITR). Always chase bank/payment provider for FIRC within 1 week of receiving payment.",
  },
  {
    question: "Can I use my personal PayPal account to receive payments, then transfer to company bank account?",
    answer:
      "Legally, NO. Export proceeds must be received directly in the company's bank account (or company's PayPal Business account). If you receive in personal PayPal and transfer to company, it creates compliance issues: (1) FEMA violation (export proceeds in personal account), (2) IT Department may treat it as personal income (taxed at individual slab rate, not company rate), (3) Cannot claim business expenses (expense deduction available only against business income in business account), (4) Mixing personal and business funds = poor accounting, audit failures. Correct approach: Open PayPal BUSINESS account in the name of your company (LLP/Pvt Ltd). Link it to company bank account. Receive all client payments in PayPal Business. Withdraw to company bank account. This keeps everything clean for tax, FEMA, and audit.",
  },
  {
    question: "How do I handle currency conversion — should I invoice in USD or INR?",
    answer:
      "Best practice: Invoice in USD (or client's currency — EUR, GBP, etc.) for international clients. Reasons: (1) Client preference (US clients expect USD invoices), (2) Avoids forex risk transfer to client (if you invoice in INR, client must convert USD to INR, adding complexity), (3) Standard practice for export invoicing. For accounting and tax, you must convert USD to INR. Two methods: (a) RBI Reference Rate method: Use RBI's reference rate on invoice date. Check RBI website (https://rbi.org.in → Database → Reference Rate). Example: Invoice $5,000 on Jan 15, RBI rate = ₹82.50, book ₹4,12,500 income. (b) Actual Realization method: Use actual rate at which bank credited INR to your account. Example: Client pays $5,000, bank credits ₹4,15,000 (rate ₹83.00), book ₹4,15,000 income. Difference (₹2,500) is forex gain/loss. Choose ONE method and apply consistently every year (changing method year-to-year = tax audit issue). Consult CA to decide which method is better for your business.",
  },
  {
    question: "What happens if my US client refuses to pay or disputes the invoice?",
    answer:
      "If client disputes invoice or refuses to pay: (1) Immediately communicate via email to resolve dispute (clarify scope, deliverables, quality issues). Keep email trail as evidence. (2) Offer mediation or compromise if feasible (partial payment, revised scope, etc.). (3) If unresolved, send formal legal notice via lawyer (international arbitration clause in MSA/SOW is helpful). (4) For FEMA compliance: If 9 months elapse without payment, inform bank and RBI immediately, citing reason (client dispute). Apply for extension. Provide evidence (emails, dispute correspondence). RBI usually grants extension for genuine disputes. (5) For tax: If you booked invoice as income (accrual method) and client never pays, you can claim bad debt deduction in ITR. Write off in books, show in ITR as 'Bad Debts written off u/s 36(1)(vii)'. (6) Legal action: For large amounts (>$10K), consider international arbitration or small claims court in US (if your MSA has jurisdiction clause). For small amounts (<$5K), may not be worth legal costs — write off as bad debt. Lesson: Always take 50% advance for new clients. Use escrow for large projects (Upwork, Escrow.com). Include clear payment terms and dispute resolution clause in MSA.",
  },
  {
    question: "Should I register LLP or Private Limited company for invoicing US clients?",
    answer:
      "Depends on your business goals: Choose LLP if: (1) Service business (IT, consulting, design, marketing), (2) 2+ partners (LLP requires min 2 partners), (3) No plans to raise equity funding (VC/angel), (4) Lower compliance appetite (no audit required if turnover <₹40L/contribution <₹25L), (5) Want easier profit distribution (LLP partners can withdraw profit anytime vs Pvt Ltd dividend rules). Tax: LLP pays 30% + surcharge (effective 34.94% if income >₹1Cr). Choose Pvt Ltd if: (1) Scalable business (product, SaaS, tech platform), (2) Plan to raise funding (VC/angel/FDI — only Pvt Ltd can issue equity), (3) Want highest client credibility (US clients often prefer 'Inc.' equivalent, which is Pvt Ltd), (4) Lower tax rate (22-25% vs LLP 30%), (5) OK with higher compliance (mandatory audit, board meetings, ROC filings). Tax: Pvt Ltd pays 25% (turnover <₹400Cr) or 22% (Section 115BAA for new cos). For most export service businesses (IT, consulting, design), LLP is optimal (lower compliance, decent credibility, easy profit distribution). For product/SaaS companies planning to scale and raise funding, Pvt Ltd is better (despite higher compliance).",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Register a Company for US Clients Invoicing 2026: Complete Guide to LLP vs Pvt Ltd, Export Compliance & Tax Planning",
  description:
    "A comprehensive guide to registering an Indian company for invoicing US clients — LLP vs Private Limited comparison, export invoice format, FIRC compliance, FEMA reporting, GST LUT, income tax treatment, foreign payment methods (Wise, PayPal, wire transfer) and complete compliance checklist.",
  url: "https://www.taxvio.in/guide/roc/register-company-us-clients-invoicing",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.taxvio.in/guide/roc/register-company-us-clients-invoicing",
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
  wordCount: 5200,
  inLanguage: "en-IN",
  articleSection: "Business Registration",
  keywords: [
    "register company for US clients",
    "LLP vs private limited",
    "export invoice India",
    "FIRC compliance",
    "GST on exports",
    "foreign payment India",
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
      name: "Register Company for US Clients",
      item: "https://www.taxvio.in/guide/roc/register-company-us-clients-invoicing",
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

export default function RegisterCompanyUSClientsInvoicingPage() {
  return (
    <>
      <Script
        id="us-invoice-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="us-invoice-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="us-invoice-faq-schema"
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
                  Register Company for US Clients
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
                  Updated for 2026 · Export Compliance Framework
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                  Register Company for
                  <span className="block mt-2 bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                    US Clients Invoicing
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                  Complete guide to <strong className="text-white">LLP vs Private Limited</strong> for
                  invoicing US clients, export invoice format, <strong className="text-white">FIRC compliance</strong>,
                  FEMA reporting, GST LUT (0% tax), foreign payment methods (Wise, PayPal, wire transfer),
                  income tax planning and how to avoid costly compliance mistakes.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                  >
                    Register Your Company <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#comparison"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                  >
                    LLP vs Pvt Ltd <Scale size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Quick Overview
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Building2,
                      title: "LLP: ₹10K-25K registration",
                      text: "7-15 days, 30% tax, good for services, no equity funding",
                    },
                    {
                      icon: Rocket,
                      title: "Pvt Ltd: ₹15K-40K registration",
                      text: "10-20 days, 22-25% tax, can raise funding, highest credibility",
                    },
                    {
                      icon: Globe,
                      title: "IEC + GST LUT mandatory",
                      text: "Export at 0% GST (no upfront IGST payment), realize proceeds in 9 months",
                    },
                    {
                      icon: Receipt,
                      title: "FIRC is proof of export",
                      text: "Bank-issued certificate for foreign payment — keep for ITR, GST, FEMA audit",
                    },
                    {
                      icon: CreditCard,
                      title: "Payment: Wire/Wise/PayPal",
                      text: "Wire (2-5 days, $10-50 fee), Wise (1-2 days, 1% fee), PayPal (instant, 4.4% fee)",
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
                { icon: BadgeCheck, text: "CA-Assisted Registration" },
                { icon: Shield, text: "Export Compliance Support" },
                { icon: Clock, text: "10-Day Company Setup" },
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
                  Export Business Setup Guide — 2026
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                  Why Registering a Company is Critical for Invoicing US Clients
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-600">
                  If you're a freelancer, agency, or startup serving US clients, you've likely faced this
                  question: <strong>Should I invoice as an individual (proprietor) or register a company
                  (LLP/Pvt Ltd)?</strong> The answer affects your taxes, credibility, liability protection,
                  and ability to scale.
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  <strong>The reality:</strong> Most US clients (especially mid-to-large companies) require
                  vendors to be registered entities for their compliance (W-8BEN form, vendor onboarding,
                  insurance, etc.). Invoicing as "John Doe Freelancer" works for small gigs on Upwork, but
                  for $5K+ monthly retainers or enterprise contracts, you need a registered company. Plus,
                  tax savings alone justify registration — LLP (30% tax) vs individual (up to 42.74% slab).
                </p>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This guide covers: (1) Proprietorship vs LLP vs Pvt Ltd comparison, (2) 10-step registration
                  process (DSC, DIN, name reservation, incorporation, GST, IEC, LUT), (3) Export invoice
                  format with all mandatory fields, (4) Payment methods (wire transfer, Wise, PayPal, Stripe),
                  (5) Tax treatment and FEMA compliance, (6) Common mistakes that trigger ₹1-5 lakh penalties.
                </p>

                <div className="mt-6">
                  <InfoBox title="US clients care about THREE things in your invoice" color="blue">
                    <p>
                      (1) <strong>Legal entity name</strong> (not "John Doe Services" — they want "ABC Tech
                      Solutions LLP" with registration number), (2) <strong>Tax compliance</strong> (W-8BEN
                      form showing you're non-US entity exempt from US withholding tax), (3) <strong>Professional
                      invoice format</strong> (clear payment terms, wire transfer details, service description).
                      A registered company (LLP/Pvt Ltd) makes all three easy. Proprietorship can work, but
                      you'll lose enterprise clients.
                    </p>
                  </InfoBox>
                </div>
              </div>

              {/* ENTITY COMPARISON */}
              <section id="comparison" className="pt-10 scroll-mt-24">
                <SectionHeader
                  eyebrow="Choose your entity"
                  heading="Proprietorship vs LLP vs Private Limited — Complete Comparison"
                  icon={Scale}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here's how the three entity types compare for invoicing US clients:
                </p>

                <div className="space-y-4">
                  {ENTITY_COMPARISON.map(({
                    entity,
                    registrationCost,
                    registrationTime,
                    compliance,
                    liability,
                    taxRate,
                    foreignClients,
                    fundingOption,
                    bestFor,
                    pros,
                    cons,
                    icon,
                    color,
                  }) => (
                    <div
                      key={entity}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-3xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800">{entity}</h4>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-gray-500">Cost:</span>{" "}
                              <span className="font-semibold text-gray-700">{registrationCost}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Time:</span>{" "}
                              <span className="font-semibold text-gray-700">{registrationTime}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Compliance:</span>{" "}
                              <span className="font-semibold text-gray-700">{compliance}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Liability:</span>{" "}
                              <span className="font-semibold text-gray-700">{liability}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Tax Rate:</span>{" "}
                              <span className="font-semibold text-gray-700">{taxRate}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Foreign Clients:</span>{" "}
                              <span className="font-semibold text-gray-700">{foreignClients}</span>
                            </div>
                          </div>
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

                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-xs">
                          <strong className="text-gray-700">Best for:</strong>{" "}
                          <span className="text-gray-600">{bestFor}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Tax savings: LLP vs Proprietorship example" color="green">
                    <p>
                      <strong>Scenario:</strong> You earn ₹30 lakh/year from US clients. <br />
                      <strong>As Proprietor:</strong> Taxable at individual slab. Assuming no other income,
                      tax = ₹8,12,500 (effective 27% after deductions). <br />
                      <strong>As LLP:</strong> Flat 30% + surcharge = ₹10,47,900 (effective 34.94%). <br />
                      Wait, LLP pays MORE tax? Yes, but you save on: (1) Professional credibility (US clients),
                      (2) Limited liability (personal assets protected), (3) Business expenses fully deductible
                      (software, office, travel — harder to claim as individual). Real benefit: scaling beyond
                      ₹30L. At ₹1 Cr revenue, individual slab = 42.74%, LLP = 34.94% → LLP saves ₹7-8 lakh/year.
                      <strong> Verdict:</strong> For &lt;₹20L, proprietorship OK. For ₹20L-₹2Cr, LLP best.
                      For &gt;₹2Cr or funding plans, Pvt Ltd (22-25% tax + equity option).
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* REGISTRATION STEPS */}
              <section id="registration" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Setup process"
                  heading="10-Step Company Registration Process for Export Business"
                  icon={Rocket}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here's the complete registration journey from zero to first invoice:
                </p>

                <div className="space-y-4">
                  {REGISTRATION_STEPS.map(({
                    step,
                    description,
                    timeline,
                    action,
                    documents,
                    icon,
                    color,
                  }) => (
                    <div
                      key={step}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-2xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800">{step}</h4>
                          <p className="text-xs text-gray-500 italic mt-0.5">Timeline: {timeline}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-gray-600">
                        <p>{description}</p>
                        <p>
                          <strong>Action:</strong> {action}
                        </p>
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>Documents needed:</strong> {documents}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="IEC and LUT are non-negotiable for export business" color="amber">
                    <p>
                      <strong>IEC (Import Export Code):</strong> 10-digit code mandatory for ALL export/import
                      transactions. Apply on DGFT portal (https://dgft.gov.in). Free of cost, takes 1-3 days.
                      Without IEC, bank may reject foreign payment. <br />
                      <strong>LUT (Letter of Undertaking):</strong> Allows export at 0% GST (no upfront IGST
                      payment). File Form GST RFD-11 on GST portal. Valid for 1 financial year, renew annually.
                      Without LUT, you pay 18% IGST on invoice value and claim refund later (3-6 months) —
                      major cashflow problem for small companies. <strong>Example:</strong> $10K invoice = ₹8.25L.
                      Without LUT, pay ₹1.48L IGST upfront. With LUT, ₹0 upfront. Always file LUT before first invoice.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* INVOICE REQUIREMENTS */}
              <section id="invoice" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Invoice format"
                  heading="10 Mandatory Fields in Export Invoice for US Clients"
                  icon={Receipt}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Your export invoice must include these fields for GST, income tax, and FEMA compliance:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#00416a] text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Field
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Mandatory?
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Description
                        </th>
                        <th className="border border-gray-300 px-3 py-2 text-left font-bold">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {INVOICE_REQUIREMENTS.map(({
                        field,
                        mandatory,
                        description,
                        example,
                      }) => (
                        <tr key={field} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-3 py-2 font-semibold text-gray-800">
                            {field}
                          </td>
                          <td className="border border-gray-200 px-3 py-2">
                            {mandatory === "Yes" ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle size={12} /> Yes
                              </span>
                            ) : (
                              <span className="text-amber-600">Recommended</span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-gray-600">
                            {description}
                          </td>
                          <td className="border border-gray-200 px-3 py-2 text-blue-700 font-mono text-[10px]">
                            {example}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <InfoBox title="Sample export invoice declaration statement" color="blue">
                    <p className="font-mono text-xs leading-relaxed">
                      "This is an export invoice for services provided outside India. Payment shall be received
                      in convertible foreign exchange (USD) within the prescribed period as per FEMA regulations.
                      We undertake to realize and repatriate the export proceeds in accordance with the Foreign
                      Exchange Management Act, 1999. This supply is being made under Letter of Undertaking
                      (LUT) ARN: [Your LUT ARN] dated [Date] without payment of Integrated Goods and Services
                      Tax (IGST) as per Section 16(3) of IGST Act, 2017."
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* PAYMENT METHODS */}
              <section id="payment" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Getting paid"
                  heading="5 Payment Methods for Receiving USD from US Clients"
                  icon={CreditCard}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here's how to receive international payments with fees, timelines, and compliance notes:
                </p>

                <div className="space-y-4">
                  {PAYMENT_METHODS.map(({
                    method,
                    setup,
                    fees,
                    processingTime,
                    pros,
                    cons,
                    taxCompliance,
                    icon,
                    color,
                  }) => (
                    <div
                      key={method}
                      className={`rounded-2xl border p-5 ${color.split(" ").slice(0, 2).join(" ")}`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span className="text-3xl">{icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-extrabold text-gray-800">{method}</h4>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-gray-500">Fees:</span>{" "}
                              <span className="font-semibold text-gray-700">{fees}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Time:</span>{" "}
                              <span className="font-semibold text-gray-700">{processingTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 mb-3">
                        <strong>Setup:</strong> {setup}
                      </p>

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

                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-xs">
                          <strong className="text-blue-700">Tax compliance:</strong>{" "}
                          <span className="text-gray-600">{taxCompliance}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <InfoBox title="Recommended payment mix for different invoice sizes" color="green">
                    <p>
                      <strong>&lt;$1,000:</strong> PayPal (instant, client familiarity) — accept 4.4% fee for
                      convenience. <br />
                      <strong>$1K-$5K:</strong> Wise (1-2 days, 1% fee) — best balance of speed and cost. <br />
                      <strong>&gt;$5K:</strong> Wire transfer (2-5 days, $10-50 fee) — most professional, lower
                      fee % for large amounts. <br />
                      <strong>Recurring/SaaS:</strong> Stripe (automated billing, 2.9% fee) — best for subscriptions. <br />
                      Always keep multiple options — some clients prefer wire, others PayPal. Mention all options
                      on invoice footer.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* TAX TREATMENT */}
              <section id="tax" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Income tax & GST"
                  heading="Tax Treatment of Export Income — 5 Key Scenarios"
                  icon={Calculator}
                />
                <p className="text-sm leading-8 text-gray-600 mb-8">
                  Here's how different export income scenarios are taxed:
                </p>

                <div className="space-y-4">
                  {TAX_TREATMENT.map(({
                    scenario,
                    incomeType,
                    gstTreatment,
                    incomeTax,
                    femaCompliance,
                    example,
                    deductions,
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
                          <strong>Income Type:</strong> {incomeType}
                        </p>
                        <p>
                          <strong>GST Treatment:</strong> {gstTreatment}
                        </p>
                        <p>
                          <strong>Income Tax:</strong> {incomeTax}
                        </p>
                        <p className={`font-semibold ${color.split(" ")[2]}`}>
                          <strong>FEMA Compliance:</strong> {femaCompliance}
                        </p>
                        <p className="bg-white/50 p-2 rounded border border-gray-200">
                          <strong>Example:</strong> {example}
                        </p>
                        <p className="text-emerald-700 font-semibold">
                          <strong>Deductions:</strong> {deductions}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMPLIANCE CHECKLIST */}
              <section id="compliance" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Stay compliant"
                  heading="8-Phase Export Compliance Checklist — From Invoice to ITR"
                  icon={FileCheck}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  Complete compliance journey for every export transaction:
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
                  <InfoBox title="Set up quarterly compliance calendar — automate reminders" color="green">
                    <p>
                      <strong>Monthly:</strong> GSTR-1 filing (by 11th), follow up on pending invoices. <br />
                      <strong>Quarterly:</strong> GSTR-3B filing (by 20th/24th), reconcile export invoices
                      with FIRC, check FEMA 9-month deadline for unrealized exports. <br />
                      <strong>Annually:</strong> ITR filing (by Jul 31 for individuals, Oct 31 for companies),
                      LUT renewal (file fresh RFD-11 by Apr 1), ROC filings (Form 11+8 for LLP by May 30,
                      AOC-4+MGT-7 for Pvt Ltd by Sep 30). <br />
                      Use Google Calendar with email reminders or compliance software (ClearTax, Zoho Books)
                      to automate. Missing GST/ROC deadline = ₹50-200/day late fee + penalty.
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* COMMON MISTAKES */}
              <section id="mistakes" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Avoid penalties"
                  heading="6 Costly Mistakes When Invoicing US Clients"
                  icon={AlertTriangle}
                />
                <p className="text-sm leading-8 text-gray-600 mb-6">
                  These mistakes cost ₹50K-₹5L+ in penalties and tax demands:
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
                      Need company registration + export setup?
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold">
                      Let Taxvio handle everything end-to-end
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                      We register your LLP/Pvt Ltd, obtain GST, IEC, file LUT, set up invoicing system,
                      and handle monthly GST + annual ITR/ROC compliance — complete export business setup.
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

              <section id="faq" className="pt-12 scroll-mt-24">
                <SectionHeader
                  eyebrow="Frequently asked questions"
                  heading="US Client Invoicing — FAQs"
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
                  education on registering a company for invoicing US clients as of 2026. Entity choice
                  (Proprietorship/LLP/Pvt Ltd), tax planning, GST compliance, and FEMA reporting depend
                  on business size, revenue, client type, and growth plans. Specific compliance requires
                  analysis of individual facts. Always obtain written advice from a qualified CA before
                  registering a company or filing tax returns. Taxvio is not liable for decisions made
                  based on this article.
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
                      ["#comparison", "Entity comparison"],
                      ["#registration", "Registration steps"],
                      ["#invoice", "Invoice format"],
                      ["#payment", "Payment methods"],
                      ["#tax", "Tax treatment"],
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
                  <h3 className="mt-4 text-base font-extrabold">Company registration?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Get LLP/Pvt Ltd registered in 10 days with GST, IEC, bank account and export setup.
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
                    href: "/guide/roc/fdi-compliance-fema-startups",
                    label: "FDI Compliance",
                    sub: "FEMA, FC-GPR, FLA",
                    color: "bg-emerald-50 border-emerald-100",
                    text: "text-emerald-700",
                  },
                  {
                    href: "/guide/roc/esop-pooling-structure-compliance",
                    label: "ESOP Setup",
                    sub: "Section 43(5) & tax",
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
                Related Guides for Export Businesses
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/guide/roc/fdi-compliance-fema-startups",
                  title: "FDI Compliance under FEMA",
                  text: "Automatic route, sectoral caps, FC-GPR, FLA returns and RBI reporting for foreign investment.",
                },
                {
                  href: "/guide/itr-blogs/legal-ways-to-reduce-corporate-tax",
                  title: "Legal Ways to Reduce Corporate Tax",
                  text: "115BAA, Section 80 deductions, depreciation and smart tax planning for companies.",
                },
                {
                  href: "/contact",
                  title: "Talk to Export Compliance Expert",
                  text: "Get end-to-end support: company registration, GST, IEC, LUT, invoicing and monthly compliance.",
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
          href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20need%20help%20with%20company%20registration%20for%20invoicing%20US%20clients`}
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