// app/guide/itr-blogs/how-to-respond-to-drc-01/page.tsx

import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";

const phoneNumber = "918937980366"; 

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
    FileWarning,
    Scale,
    Ban,
    Gavel,
    FileCheck,
    RefreshCw,
} from "lucide-react";

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
    title: "How to Respond to GST DRC-01 Notice: Complete Guide | Taxvio",
    description:
        "Learn how to respond to GST DRC-01 notice — what it means, reasons for issue, step-by-step reply process on GST portal, documents required, time limit and consequences of non-reply. Complete guide for FY 2024-25.",
    keywords: [
        "DRC-01 notice GST",
        "how to reply to DRC-01",
        "GST DRC-01 response",
        "DRC-01 notice reply online",
        "GST demand notice",
        "DRC-01 time limit",
        "GST portal DRC-01",
        "DRC-01 penalty",
        "DRC-01 vs DRC-02",
        "GST show cause notice",
        "DRC-01 reply format",
        "GST notice response",
        "tax demand GST",
        "DRC-01 filing process",
    ],
    alternates: {
        canonical: "https://www.taxvio.in/guide/itr-blogs/how-to-respond-to-drc-01",
    },
    openGraph: {
        title: "How to Respond to GST DRC-01 Notice — Complete Guide | Taxvio",
        description:
            "A complete guide to responding to GST DRC-01 notice — reasons, reply process, documents, time limits and consequences explained for FY 2024-25.",
        url: "https://www.taxvio.in/guide/itr-blogs/how-to-respond-to-drc-01",
        siteName: "Taxvio",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Respond to GST DRC-01 Notice — Complete Guide FY 2024-25",
        description:
            "Everything you need to know about DRC-01 notice — what it is, how to reply online, documents needed and what happens if you don't respond.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const REASONS_FOR_DRC01 = [
    {
        reason: "Mismatch in GSTR-3B and GSTR-1",
        desc: "When the tax liability declared in your monthly/quarterly GSTR-3B does not match the outward supplies reported in GSTR-1. This is the most common reason for DRC-01 issuance.",
        icon: "⚖️",
        color: "bg-rose-50 border-rose-100 text-rose-700",
        section: "Section 73 / 74",
    },
    {
        reason: "Excess ITC claimed in GSTR-3B",
        desc: "When the Input Tax Credit (ITC) claimed in GSTR-3B exceeds the ITC available in GSTR-2A/2B. Department issues DRC-01 for recovery of excess or ineligible ITC claimed.",
        icon: "📊",
        color: "bg-amber-50 border-amber-100 text-amber-700",
        section: "Section 73",
    },
    {
        reason: "Non-filing or delayed filing of returns",
        desc: "DRC-01 can be issued when a taxpayer has not filed GSTR-3B for one or more tax periods, or has filed returns beyond the due date, attracting late fees and interest liability.",
        icon: "📅",
        color: "bg-orange-50 border-orange-100 text-orange-700",
        section: "Section 47",
    },
    {
        reason: "Non-payment or short payment of tax",
        desc: "When tax has been determined in returns but not deposited through DRC-03, or partial payment has been made, DRC-01 serves as a demand notice for the outstanding tax liability.",
        icon: "💸",
        color: "bg-red-50 border-red-100 text-red-700",
        section: "Section 73",
    },
    {
        reason: "Wrong availment of tax rate or exemption",
        desc: "When a taxpayer has charged incorrect GST rate (lower than applicable) or has wrongly claimed exemption on supplies, resulting in short payment of GST liability.",
        icon: "🏷️",
        color: "bg-violet-50 border-violet-100 text-violet-700",
        section: "Section 73 / 74",
    },
    {
        reason: "Discrepancy in e-way bill data",
        desc: "Mismatch between e-way bill value and invoice value reported in GSTR-1, or movement of goods without proper e-way bill generation, triggering scrutiny and DRC-01 issuance.",
        icon: "🚚",
        color: "bg-blue-50 border-blue-100 text-blue-700",
        section: "Section 129 / 130",
    },
];

const DRC_TIMELINE = [
    {
        stage: "DRC-01 Issued",
        desc: "Tax officer issues Form GST DRC-01 electronically on the GST portal, specifying the alleged discrepancy, tax period, amount involved and grounds.",
        icon: FileWarning,
        color: "bg-red-50 border-red-200 text-red-800",
        days: "Day 0",
    },
    {
        stage: "Taxpayer receives notice",
        desc: "DRC-01 is visible on the GST portal dashboard under 'View Additional Notices and Orders'. An email and SMS notification is also sent to the registered email/mobile.",
        icon: Eye,
        color: "bg-orange-50 border-orange-200 text-orange-800",
        days: "Day 1–2",
    },
    {
        stage: "Time to reply (7 days)",
        desc: "The taxpayer must file a response in Form GST DRC-06 within 7 working days from the date of service of DRC-01. This is a strict timeline and cannot be extended automatically.",
        icon: Clock,
        color: "bg-amber-50 border-amber-200 text-amber-800",
        days: "Day 3–10",
    },
    {
        stage: "Payment or reply submission",
        desc: "Taxpayer can either accept the demand and pay via DRC-03, or file a detailed reply in DRC-06 with supporting documents explaining why the demand is incorrect or unjustified.",
        icon: Upload,
        color: "bg-sky-50 border-sky-200 text-sky-800",
        days: "Before deadline",
    },
    {
        stage: "Officer reviews reply",
        desc: "If DRC-06 is filed, the officer reviews the reply and supporting documents. They may issue DRC-02 (demand confirmation) or drop proceedings if satisfied with the explanation.",
        icon: Search,
        color: "bg-violet-50 border-violet-200 text-violet-800",
        days: "Day 11–30",
    },
    {
        stage: "DRC-02 or closure",
        desc: "If officer is not satisfied, DRC-02 (order confirming demand) is issued. Taxpayer can then pay the amount or file an appeal. If reply is accepted, no further action is taken.",
        icon: Gavel,
        color: "bg-emerald-50 border-emerald-200 text-emerald-800",
        days: "Day 30–45",
    },
];

const REPLY_STEPS = [
    {
        step: "01",
        title: "Login to GST portal with valid credentials",
        desc: "Visit gst.gov.in and log in using your GSTIN, username and password. Ensure you have taxpayer (not facilitation center) access. Navigate to 'Services > User Services > View Additional Notices and Orders'.",
        icon: UserCheck,
    },
    {
        step: "02",
        title: "Download and review DRC-01 notice carefully",
        desc: "Locate the DRC-01 notice in the notices section, download the PDF and read it thoroughly. Note the tax period, alleged discrepancy, demand amount, grounds cited (Section 73/74), and the deadline for reply.",
        icon: Download,
    },
    {
        step: "03",
        title: "Prepare supporting documents and evidence",
        desc: "Collect all relevant documents — invoices, payment challans, reconciliation statements, GSTR-1/3B data, ITC ledger, purchase register, bank statements — that disprove the allegation or explain the discrepancy.",
        icon: FileText,
    },
    {
        step: "04",
        title: "Draft a detailed reply in DRC-06 format",
        desc: "On the GST portal, go to 'Services > User Services > Reply to Notice/Order'. Select the DRC-01 reference number. Fill Form GST DRC-06 with a point-by-point response addressing each allegation with facts and law.",
        icon: FileCheck,
    },
    {
        step: "05",
        title: "Attach all supporting documents",
        desc: "Upload all supporting documents (PDF format, max 5 MB per file) as attachments to DRC-06. Ensure file names are clear and each document is relevant. Multiple files can be uploaded.",
        icon: Upload,
    },
    {
        step: "06",
        title: "Submit DRC-06 reply before the deadline",
        desc: "Review your reply, verify all attachments are uploaded, and click 'Submit with DSC or EVC'. Save the acknowledgement receipt (ARN). The reply is now visible to the tax officer for review.",
        icon: CheckCircle,
    },
    {
        step: "07",
        title: "Track status and await officer's decision",
        desc: "Monitor the status of your reply under 'View Additional Notices and Orders'. The officer may issue DRC-02 (demand order) or close the proceedings. You will receive email/SMS notification of the decision.",
        icon: RefreshCw,
    },
];

const DOCUMENTS_REQUIRED = [
    {
        category: "Tax returns and reconciliation",
        items: [
            "Copy of GSTR-1 for the disputed period",
            "Copy of GSTR-3B for the disputed period",
            "GSTR-2A/2B (auto-populated purchase data)",
            "GSTR-9 (annual return) if applicable",
            "Reconciliation statement between books and returns",
        ],
        icon: "📋",
        color: "bg-blue-50 border-blue-100",
    },
    {
        category: "Payment proof and ledgers",
        items: [
            "PMT-06 (tax payment challan) screenshots",
            "Electronic cash ledger statement from portal",
            "Electronic credit ledger statement",
            "Bank statements showing tax payment",
            "DRC-03 payment challans if voluntary payment made",
        ],
        icon: "💳",
        color: "bg-emerald-50 border-emerald-100",
    },
    {
        category: "Transaction documents",
        items: [
            "Invoices corresponding to disputed transactions",
            "Purchase invoices and bills of entry (for ITC claims)",
            "E-way bills and transport documents",
            "Debit/credit notes issued or received",
            "Export shipping bills and LUT (if applicable)",
        ],
        icon: "📄",
        color: "bg-violet-50 border-violet-100",
    },
    {
        category: "Legal and supporting evidence",
        items: [
            "Relevant court judgments or advance rulings",
            "CBIC circulars, notifications or clarifications",
            "Previous assessment orders (if any)",
            "Correspondence with tax department",
            "CA certificate or reconciliation report (if available)",
        ],
        icon: "⚖️",
        color: "bg-amber-50 border-amber-100",
    },
];

const CONSEQUENCES = [
    {
        scenario: "If you accept the demand and pay",
        outcome:
            "Liability is settled and no further proceedings. Pay the demanded amount plus interest via DRC-03. No penalty is levied if payment is made before DRC-02 is issued. Case is closed after payment.",
        icon: "✅",
        color: "bg-emerald-50 border-emerald-100 text-emerald-800",
    },
    {
        scenario: "If you file a valid reply (DRC-06)",
        outcome:
            "Officer reviews your reply and documents. If satisfied, proceedings are dropped. If not satisfied, officer issues DRC-02 confirming the demand. You can then pay or file an appeal within 3 months.",
        icon: "📝",
        color: "bg-blue-50 border-blue-100 text-blue-800",
    },
    {
        scenario: "If you do not reply within 7 days",
        outcome:
            "Officer may proceed to issue DRC-02 (demand order) ex-parte based on the allegations in DRC-01. The demand becomes enforceable. Penalty under Section 122/125 may also be levied. Recovery proceedings can be initiated.",
        icon: "⚠️",
        color: "bg-amber-50 border-amber-100 text-amber-800",
    },
    {
        scenario: "If DRC-02 is issued after reply",
        outcome:
            "The demand is confirmed by the officer through DRC-02 order. You must pay the amount or file an appeal to the First Appellate Authority within 3 months. If appeal is filed, pre-deposit of 10% of disputed tax is mandatory.",
        icon: "⏳",
        color: "bg-orange-50 border-orange-100 text-orange-800",
    },
    {
        scenario: "If you ignore DRC-02 order",
        outcome:
            "Tax department can initiate recovery proceedings — attachment of bank accounts, seizure of goods, recovery from third parties. Interest continues to accrue. Criminal prosecution possible under Section 132 for willful tax evasion.",
        icon: "❌",
        color: "bg-rose-50 border-rose-100 text-rose-800",
    },
];

const FAQS = [
    {
        question: "What is the difference between DRC-01 and DRC-02?",
        answer:
            "DRC-01 is a show cause notice issued under Section 73 or 74 informing the taxpayer about a proposed demand and seeking their response within 7 days. It is not a final order. DRC-02, on the other hand, is an order confirming the demand after considering the taxpayer's reply (or in absence of reply). DRC-02 is enforceable and the taxpayer must either pay the amount or file an appeal. DRC-01 is the notice stage; DRC-02 is the adjudication stage.",
    },
    {
        question: "Can I request extension of time to reply to DRC-01?",
        answer:
            "The CGST Act specifies a reply period of 7 working days from the date of service of DRC-01. There is no automatic provision for extension. However, if you have a genuine reason (medical emergency, natural calamity, technical issues), you can submit a written request to the jurisdictional officer via the 'File Application for Condonation of Delay' option on the portal or through email, explaining the reason and requesting additional time. The officer has discretion to grant or reject the request.",
    },
    {
        question: "What happens if I partially agree with the DRC-01 demand?",
        answer:
            "If you agree with a portion of the demand but dispute the rest, you can make a voluntary payment of the accepted amount via Form GST DRC-03 on the portal and file a reply in DRC-06 explaining why the remaining demand is incorrect. Mention the DRC-03 payment details in your DRC-06 reply. This demonstrates good faith and may reduce interest and penalty liability on the accepted portion. The officer will adjudicate the disputed portion separately.",
    },
    {
        question: "Is penalty levied along with DRC-01 demand?",
        answer:
            "DRC-01 is a show cause notice, not a final demand. Penalty is not automatically levied at the DRC-01 stage. However, the notice may mention potential penalty under Section 73(9) (15% of tax) or Section 74 (100% of tax in fraud cases). If you pay the demand before DRC-02 is issued, penalty may be waived. Penalty is formally levied only in DRC-02 if the officer decides to impose it after reviewing your reply.",
    },
    {
        question: "Can I appeal against DRC-01 directly?",
        answer:
            "No. DRC-01 is a notice, not an appealable order. You cannot file an appeal against DRC-01. The correct course of action is to file a reply in Form GST DRC-06 within 7 days. If you are dissatisfied with the officer's decision and they issue DRC-02 confirming the demand, you can appeal against DRC-02 to the First Appellate Authority within 3 months from the date of DRC-02, subject to pre-deposit of 10% of the disputed tax amount.",
    },
    {
        question: "What if the discrepancy mentioned in DRC-01 is due to a software or portal error?",
        answer:
            "If the discrepancy is due to a technical glitch, portal error or incorrect auto-population in GSTR-2A/2B, mention this clearly in your DRC-06 reply. Attach screenshots from the portal showing the error, system-generated reports, and any correspondence with the GST helpdesk. If the error has been corrected through a subsequent return or rectification statement, attach proof of the correction. Officers are generally sympathetic to genuine technical issues if adequately documented.",
    },
    {
        question: "Can DRC-01 be issued for periods beyond 3 years?",
        answer:
            "Under Section 73 (cases not involving fraud or willful misstatement), a show cause notice (DRC-01) can be issued within 3 years from the due date of filing annual return for the year to which the tax relates, or the actual filing date, whichever is later. Under Section 74 (fraud/willful misstatement cases), the time limit is 5 years. If DRC-01 is issued beyond these limitation periods, you can contest it on grounds of being time-barred. Mention this in your DRC-06 reply with relevant dates and legal provisions.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Respond to GST DRC-01 Notice: Complete Step-by-Step Guide",
    description:
        "A comprehensive guide to responding to GST DRC-01 notice — covering what it means, common reasons for issue, step-by-step reply process on GST portal, documents required, time limits, and consequences of non-compliance.",
    url: "https://www.taxvio.in/guide/itr-blogs/how-to-respond-to-drc-01",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.taxvio.in/guide/itr-blogs/how-to-respond-to-drc-01",
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
    wordCount: 2800,
    inLanguage: "en-IN",
    articleSection: "GST Compliance",
    keywords: [
        "DRC-01 notice",
        "GST demand notice",
        "DRC-06 reply",
        "GST portal response",
        "tax notice reply",
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
            name: "How to Respond to DRC-01",
            item: "https://www.taxvio.in/guide/itr-blogs/how-to-respond-to-drc-01",
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

export default function HowToRespondToDRC01Page() {
    return (
        <>
            <Script
                id="drc01-article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="drc01-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="drc01-faq-schema"
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
                                "radial-gradient(circle,rgba(239,68,68,0.14) 0%,transparent 65%)",
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle,rgba(251,146,60,0.09) 0%,transparent 65%)",
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
                                    How to Respond to DRC-01
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
                                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
                                    Urgent · 7 Days to Respond
                                </div>

                                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
                                    How to Respond to
                                    <span className="block mt-2 bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                                        GST DRC-01 Notice
                                    </span>
                                </h1>

                                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
                                    Received a <strong className="text-white">Form GST DRC-01</strong> on
                                    the GST portal? It's a show cause notice demanding tax,
                                    interest or penalty. You have <strong className="text-white">only 7 working days</strong> to
                                    respond. This guide explains what DRC-01 means, why it's
                                    issued, and exactly how to file your reply using Form DRC-06.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 active:scale-[0.97] transition-all"
                                    >
                                        Get Expert Help Now <ArrowRight size={15} />
                                    </Link>
                                    <Link
                                        href="#reply-steps"
                                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                                    >
                                        View Reply Process <MessageCircle size={15} />
                                    </Link>
                                </div>
                            </div>

                            {/* Quick highlights card */}
                            <div
                                className="rounded-3xl p-6 shadow-2xl backdrop-blur-sm border border-white/15"
                                style={{ background: "rgba(255,255,255,0.08)" }}
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45 mb-5">
                                    DRC-01 at a glance
                                </p>
                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: FileWarning,
                                            title: "What is DRC-01?",
                                            text: "Show cause notice for alleged tax short-payment, excess ITC or return discrepancies",
                                        },
                                        {
                                            icon: Clock,
                                            title: "Time limit to reply",
                                            text: "7 working days from date of service — strict deadline, no auto-extension",
                                        },
                                        {
                                            icon: FileCheck,
                                            title: "How to reply",
                                            text: "File Form GST DRC-06 online on GST portal with supporting documents",
                                        },
                                        {
                                            icon: Scale,
                                            title: "What happens next",
                                            text: "Officer reviews reply and issues DRC-02 (demand order) or drops proceedings",
                                        },
                                        {
                                            icon: Ban,
                                            title: "Consequence of no reply",
                                            text: "Ex-parte DRC-02 order, enforceable demand, penalty and recovery proceedings",
                                        },
                                    ].map(({ icon: Icon, title, text }) => (
                                        <div
                                            key={title}
                                            className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                                        >
                                            <div className="w-9 h-9 rounded-xl bg-red-400/15 flex items-center justify-center shrink-0">
                                                <Icon size={16} className="text-red-300" />
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
                                { icon: BadgeCheck, text: "CA-Assisted Notice Reply" },
                                { icon: Shield, text: "Confidential Consultation" },
                                { icon: Clock, text: "Same-Day Response Support" },
                                { icon: Star, text: "4.9★ Client Rating" },
                            ].map(({ icon: Icon, text }) => (
                                <div
                                    key={text}
                                    className="flex items-center gap-1.5 text-white/55 text-xs"
                                >
                                    <Icon size={12} className="text-red-400" /> {text}
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
                                    GST Compliance Guide
                                </p>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                                    What Is Form GST DRC-01 and Why Is It Issued?
                                </h2>

                                <p className="mt-5 text-sm leading-8 text-gray-600">
                                    <strong>Form GST DRC-01</strong> is a statutory notice issued
                                    by GST tax officers under Section 73 or Section 74 of the CGST
                                    Act, 2017. It is commonly referred to as a{" "}
                                    <strong>show cause notice</strong> — a formal intimation to the
                                    taxpayer that the department has identified a discrepancy,
                                    short payment of tax, excess claim of Input Tax Credit, or
                                    non-compliance with GST provisions for a particular tax period.
                                </p>

                                <p className="mt-4 text-sm leading-8 text-gray-600">
                                    DRC-01 is <strong>not</strong> a final demand order. It is an
                                    opportunity given to the taxpayer to explain their position,
                                    provide supporting documents, and demonstrate why the alleged
                                    demand is incorrect or unjustified. The taxpayer has{" "}
                                    <strong>7 working days</strong> from the date of service of the
                                    notice to file a reply in Form GST DRC-06. If no reply is filed
                                    within this period, the tax officer can proceed to issue Form
                                    GST DRC-02, which is a final demand order that becomes
                                    enforceable.
                                </p>

                                <p className="mt-4 text-sm leading-8 text-gray-600">
                                    DRC-01 can be issued for a variety of reasons — mismatch
                                    between GSTR-1 and GSTR-3B, excess ITC claimed compared to
                                    GSTR-2A/2B, non-payment or short payment of tax, incorrect tax
                                    rate application, non-filing of returns, discrepancies in e-way
                                    bill data, or any other contravention detected through scrutiny,
                                    audit, or inspection. The notice specifies the tax period, the
                                    nature of the discrepancy, the amount of tax, interest and
                                    penalty involved, and the legal provisions under which it is
                                    issued.
                                </p>

                                <InfoBox title="DRC-01 vs DRC-02 — understand the difference" color="amber">
                                    <p>
                                        <strong>DRC-01</strong> is a <em>show cause notice</em> —
                                        you can respond to it. <strong>DRC-02</strong> is the{" "}
                                        <em>final demand order</em> issued after considering your
                                        reply (or in absence of reply). DRC-02 is enforceable and
                                        can only be challenged through an appeal. Always respond to
                                        DRC-01 to avoid an ex-parte DRC-02.
                                    </p>
                                </InfoBox>
                            </div>

                            {/* Common Reasons */}
                            <section id="reasons" className="pt-10 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="Why DRC-01 is issued"
                                    heading="Common Reasons for Receiving a DRC-01 Notice"
                                    icon={AlertCircle}
                                />

                                <p className="text-sm leading-8 text-gray-600 mb-8">
                                    DRC-01 notices are triggered by automated system-generated
                                    alerts or manual scrutiny by tax officers. Here are the most
                                    common reasons why a taxpayer receives a DRC-01:
                                </p>

                                <div className="grid gap-4">
                                    {REASONS_FOR_DRC01.map(({ reason, desc, icon, color, section }) => (
                                        <div
                                            key={reason}
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
                                                        .join(" ")} border ${color.split(" ")[1]
                                                        } flex items-center justify-center text-xl shrink-0`}
                                                >
                                                    {icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap mb-2">
                                                        <h3 className="text-sm font-extrabold text-gray-800">
                                                            {reason}
                                                        </h3>
                                                        <span
                                                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${color
                                                                .split(" ")
                                                                .slice(0, 2)
                                                                .join(" ")} border ${color.split(" ")[1]} ${color.split(" ")[2]
                                                                }`}
                                                        >
                                                            {section}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs leading-relaxed text-gray-600">
                                                        {desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 grid md:grid-cols-2 gap-5">
                                    <InfoBox title="Section 73 vs Section 74" color="blue">
                                        <p>
                                            <strong>Section 73</strong> applies to cases involving
                                            non-fraudulent errors — genuine mistakes, clerical errors,
                                            interpretation issues. <strong>Section 74</strong> applies
                                            when there is fraud, willful misstatement or suppression of
                                            facts. Section 74 notices carry higher penalty (100% vs
                                            15%) and longer limitation period (5 years vs 3 years).
                                        </p>
                                    </InfoBox>
                                    <InfoBox title="System-generated vs manual scrutiny" color="green">
                                        <p>
                                            Many DRC-01 notices are auto-generated by the GSTN system
                                            based on return data mismatches. However, manual scrutiny
                                            by officers can also trigger DRC-01 — especially after
                                            audits, inspections, or intelligence inputs. Always verify
                                            whether the discrepancy is real or a system error before
                                            responding.
                                        </p>
                                    </InfoBox>
                                </div>
                            </section>

                            {/* Timeline */}
                            <section id="timeline" className="pt-12 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="DRC-01 lifecycle"
                                    heading="DRC-01 to DRC-02 — Complete Timeline"
                                    icon={Calendar}
                                />

                                <p className="text-sm leading-8 text-gray-600 mb-8">
                                    Understanding the timeline from DRC-01 notice issuance to the
                                    final DRC-02 order helps you plan your response effectively:
                                </p>

                                <div className="space-y-4">
                                    {DRC_TIMELINE.map(({ stage, desc, icon: Icon, color, days }) => (
                                        <div
                                            key={stage}
                                            className={`flex gap-4 items-start rounded-2xl border p-5 ${color}`}
                                        >
                                            <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center shrink-0">
                                                <Icon size={18} className={color.split(" ")[2]} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                                                    <h3 className="text-sm font-bold text-gray-800">
                                                        {stage}
                                                    </h3>
                                                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white/70 text-gray-700">
                                                        {days}
                                                    </span>
                                                </div>
                                                <p className="text-xs leading-relaxed text-gray-600">
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <InfoBox title="7 working days — not calendar days" color="amber">
                                    <p>
                                        The 7-day reply period is calculated in <strong>working
                                            days</strong> (excluding Sundays and national holidays), not
                                        calendar days. Count carefully from the date mentioned in the
                                        DRC-01 notice. If the deadline falls on a Sunday or holiday,
                                        it is extended to the next working day. However, do not wait
                                        until the last day — technical issues on the portal can
                                        prevent timely submission.
                                    </p>
                                </InfoBox>
                            </section>

                            {/* Step-by-step reply */}
                            <section id="reply-steps" className="pt-12 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="Step-by-step process"
                                    heading="How to File Reply to DRC-01 Using Form DRC-06"
                                    icon={Upload}
                                />

                                <p className="text-sm leading-8 text-gray-600 mb-8">
                                    Filing a reply to DRC-01 requires careful preparation. Here is
                                    the complete step-by-step process to file Form GST DRC-06 on
                                    the GST portal:
                                </p>

                                <div className="space-y-4">
                                    {REPLY_STEPS.map(({ step, title, desc, icon: Icon }) => (
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
                                    <InfoBox title="Use DSC or EVC to sign DRC-06" color="blue">
                                        <p>
                                            Form DRC-06 must be digitally signed using either a Digital
                                            Signature Certificate (DSC) or an Electronic Verification
                                            Code (EVC) sent to the registered mobile/email. Without
                                            signing, the reply cannot be submitted. Ensure your DSC is
                                            valid and not expired before starting the reply process.
                                        </p>
                                    </InfoBox>
                                    <InfoBox title="Keep copies of all submitted documents" color="green">
                                        <p>
                                            After submitting DRC-06, download and save the
                                            acknowledgement receipt (ARN) and copies of all uploaded
                                            documents. These will be required if the case proceeds to
                                            DRC-02 or appeal. Also maintain a physical file with
                                            printed copies for office records.
                                        </p>
                                    </InfoBox>
                                </div>
                            </section>

                            {/* Documents Required */}
                            <section id="documents" className="pt-12 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="Supporting evidence"
                                    heading="Documents Required to Support Your DRC-06 Reply"
                                    icon={FileText}
                                />

                                <p className="text-sm leading-8 text-gray-600 mb-6">
                                    Your reply in DRC-06 must be backed by concrete documentary
                                    evidence. The strength of your reply depends on the quality and
                                    relevance of the documents you attach. Here is a comprehensive
                                    list of documents you may need:
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {DOCUMENTS_REQUIRED.map(({ category, items, icon, color }) => (
                                        <div
                                            key={category}
                                            className={`rounded-2xl border p-5 ${color}`}
                                        >
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-2xl">{icon}</span>
                                                <h3 className="text-sm font-bold text-gray-800">
                                                    {category}
                                                </h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-start gap-2 text-xs text-gray-600"
                                                    >
                                                        <CheckCircle
                                                            size={12}
                                                            className="text-emerald-500 shrink-0 mt-0.5"
                                                        />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <InfoBox title="File size and format requirements" color="amber">
                                    <p>
                                        Each document uploaded to DRC-06 must be in PDF format and
                                        should not exceed 5 MB in size. If you have large files
                                        (e.g., complete ledger statements), compress them or split
                                        into multiple files. Ensure file names are descriptive (e.g.,
                                        "GSTR3B_Mar2024.pdf" instead of "Document1.pdf") for easy
                                        identification by the officer.
                                    </p>
                                </InfoBox>
                            </section>

                            {/* What to write in DRC-06 */}
                            <section id="reply-content" className="pt-12 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="Content guidelines"
                                    heading="What to Write in Your DRC-06 Reply"
                                    icon={FileCheck}
                                />

                                <p className="text-sm leading-8 text-gray-600">
                                    The text of your DRC-06 reply should be clear, factual and
                                    legally sound. Here is a suggested structure:
                                </p>

                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            heading: "1. Introduction and acknowledgement",
                                            content:
                                                "Start by acknowledging receipt of DRC-01 notice number, date of issue, and the tax period covered. Mention your GSTIN, legal name and registered address. State that you are filing this reply within the stipulated time period.",
                                        },
                                        {
                                            heading: "2. Summary of allegations in DRC-01",
                                            content:
                                                "Briefly summarize the discrepancy or demand mentioned in the DRC-01 notice. For example: 'The notice alleges a mismatch of ₹X between GSTR-1 and GSTR-3B for the period April-June 2024, resulting in a demand of ₹Y tax plus interest and penalty.'",
                                        },
                                        {
                                            heading: "3. Point-by-point response to each allegation",
                                            content:
                                                "Address each point raised in the DRC-01 separately. Explain the facts, cite the relevant invoices, challans or return data, and demonstrate why the allegation is incorrect or why the demand is unjustified. Use clear sub-headings for each point.",
                                        },
                                        {
                                            heading: "4. Legal grounds and case law (if applicable)",
                                            content:
                                                "If your defense involves interpretation of GST law, cite the relevant sections of the CGST Act, GST Rules, notifications, circulars, or court judgments that support your position. Avoid vague statements — be specific.",
                                        },
                                        {
                                            heading: "5. Supporting documents reference",
                                            content:
                                                "List all documents you are attaching as annexures (e.g., Annexure A — GSTR-3B for Apr-Jun 2024, Annexure B — Payment challan PMT-06, etc.) and cross-reference them in your explanation.",
                                        },
                                        {
                                            heading: "6. Prayer and conclusion",
                                            content:
                                                "Conclude by requesting the officer to drop the proceedings in light of the explanation and evidence provided. Offer to provide any further clarification if required. Sign off with your name, designation (if company), and date.",
                                        },
                                    ].map(({ heading, content }) => (
                                        <div
                                            key={heading}
                                            className="border-l-4 border-[#00416a] bg-[#f8fbfd] p-5 rounded-r-2xl"
                                        >
                                            <h3 className="text-sm font-bold text-gray-800 mb-2">
                                                {heading}
                                            </h3>
                                            <p className="text-xs leading-relaxed text-gray-600">
                                                {content}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <InfoBox title="Tone and language matter" color="blue">
                                    <p>
                                        Use respectful, professional language in your reply. Avoid
                                        emotional or aggressive statements. Stick to facts and law.
                                        Do not make unsubstantiated claims or provide false
                                        information — this can escalate the matter under Section 74
                                        (fraud provisions) and result in higher penalties.
                                    </p>
                                </InfoBox>
                            </section>

                            {/* Consequences */}
                            <section id="consequences" className="pt-12 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="What happens next"
                                    heading="Possible Outcomes After You Reply (or Don't Reply)"
                                    icon={Scale}
                                />

                                <p className="text-sm leading-8 text-gray-600 mb-6">
                                    After you file your DRC-06 reply — or if you choose not to
                                    reply at all — the following scenarios can unfold:
                                </p>

                                <div className="space-y-4">
                                    {CONSEQUENCES.map(({ scenario, outcome, icon, color }) => (
                                        <div
                                            key={scenario}
                                            className={`rounded-2xl border p-5 ${color
                                                .split(" ")
                                                .slice(0, 2)
                                                .join(" ")}`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-2xl shrink-0">{icon}</span>
                                                <div>
                                                    <h3 className="text-sm font-extrabold text-gray-800 mb-2">
                                                        {scenario}
                                                    </h3>
                                                    <p className="text-xs leading-relaxed text-gray-600">
                                                        {outcome}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <InfoBox title="10% pre-deposit mandatory for appeal against DRC-02" color="rose">
                                    <p>
                                        If you are aggrieved by the DRC-02 order and wish to file an
                                        appeal, you must deposit 10% of the disputed tax amount
                                        before the appeal can be admitted by the First Appellate
                                        Authority. This is a mandatory pre-deposit under Section 107
                                        of the CGST Act and cannot be waived except in cases of
                                        undue hardship (which must be demonstrated).
                                    </p>
                                </InfoBox>
                            </section>

                            {/* Do's and Don'ts */}
                            <section id="dos-donts" className="pt-12 scroll-mt-24">
                                <SectionHeader
                                    eyebrow="Best practices"
                                    heading="Do's and Don'ts When Responding to DRC-01"
                                    icon={CheckCircle}
                                />

                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    {/* Do's */}
                                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                                                <CheckCircle size={16} className="text-white" />
                                            </div>
                                            <h3 className="text-sm font-extrabold text-emerald-900">
                                                Do's ✓
                                            </h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {[
                                                "Reply within 7 working days — do not wait till last day",
                                                "Read DRC-01 notice carefully and understand each allegation",
                                                "Gather all supporting documents before drafting reply",
                                                "Address each point raised in the notice separately",
                                                "Attach relevant invoices, returns, and payment proof",
                                                "Keep tone professional and factual, avoid emotions",
                                                "Cite specific sections, rules and case laws if applicable",
                                                "Save acknowledgement receipt and uploaded documents",
                                                "Consult a CA or GST expert if demand is substantial",
                                                "Track status of reply on portal regularly",
                                            ].map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2 text-xs text-emerald-800"
                                                >
                                                    <CheckCircle
                                                        size={12}
                                                        className="text-emerald-600 shrink-0 mt-0.5"
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Don'ts */}
                                    <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
                                                <Ban size={16} className="text-white" />
                                            </div>
                                            <h3 className="text-sm font-extrabold text-rose-900">
                                                Don'ts ✗
                                            </h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {[
                                                "Do not ignore DRC-01 notice — it will lead to DRC-02",
                                                "Do not miss the 7-day deadline without requesting extension",
                                                "Do not submit vague or generic replies without evidence",
                                                "Do not provide false or misleading information",
                                                "Do not upload irrelevant or unclear documents",
                                                "Do not rely solely on verbal explanations to officer",
                                                "Do not assume system-generated notice is always wrong",
                                                "Do not fail to verify data in GSTR-1, 3B, 2A/2B before replying",
                                                "Do not use aggressive or disrespectful language",
                                                "Do not delay seeking professional help if unsure",
                                            ].map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2 text-xs text-rose-800"
                                                >
                                                    <Ban
                                                        size={12}
                                                        className="text-rose-600 shrink-0 mt-0.5"
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* CTA inside article */}
                            <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#00416a] to-[#001e36] p-7 md:p-9 text-white">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-red-300">
                                            Received a DRC-01 notice?
                                        </p>
                                        <h2 className="mt-2 text-2xl font-extrabold">
                                            Let Taxvio draft your DRC-06 reply
                                        </h2>
                                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
                                            Our CA team analyzes the notice, reviews your returns and
                                            documents, and prepares a comprehensive, legally sound
                                            DRC-06 reply — filed on time, every time.
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
                                    heading="DRC-01 Notice Reply — FAQs"
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
                                    article is for general educational purposes only. GST notice
                                    procedures, portal functionalities and legal provisions are
                                    subject to change through amendments, notifications and
                                    circulars. DRC-01 notices are case-specific and responses
                                    should be tailored to the facts and legal position of each
                                    case. Always consult a qualified GST practitioner or CA before
                                    filing your reply. Taxvio and its authors are not liable for
                                    any consequences arising from reliance on this article.
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
                                            ["#reasons", "Why DRC-01 is issued"],
                                            ["#timeline", "DRC-01 to DRC-02 timeline"],
                                            ["#reply-steps", "Step-by-step reply process"],
                                            ["#documents", "Documents required"],
                                            ["#reply-content", "What to write in DRC-06"],
                                            ["#consequences", "Possible outcomes"],
                                            ["#dos-donts", "Do's and Don'ts"],
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
                                        <MessageCircle size={18} className="text-red-300" />
                                    </div>
                                    <h3 className="mt-4 text-base font-extrabold">
                                        DRC-01 notice help?
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                                        Expert CA team to draft your DRC-06 reply with full
                                        documentation support. Same-day turnaround available.
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
                                        href: "/serviceslist/gst/gst-registration",
                                        label: "GST Registration",
                                        sub: "New GSTIN in 3-5 days",
                                        color: "bg-emerald-50 border-emerald-100",
                                        text: "text-emerald-700",
                                    },
                                    {
                                        href: "/guide/itr-blogs/gst-return-filing",
                                        label: "GST Return Filing",
                                        sub: "GSTR-1, 3B filing guide",
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
                                Related GST Compliance Guides
                            </h2>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    href: "/guide/itr-blogs/gst-return-filing",
                                    title: "GST Return Filing Guide",
                                    text: "Complete guide to filing GSTR-1, GSTR-3B and other GST returns online — due dates, process and penalties.",
                                },
                                {
                                    href: "/guide/itr-blogs/input-tax-credit",
                                    title: "Input Tax Credit (ITC) Rules",
                                    text: "Understand ITC eligibility, conditions, reversal and reconciliation with GSTR-2A/2B.",
                                },
                                {
                                    href: "/contact",
                                    title: "Talk to a GST Expert",
                                    text: "Get CA-assisted GST notice reply, return filing, ITC reconciliation and compliance support.",
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
                {/* ════════ FIXED WHATSAPP BUTTON ════════ */}
                <a
                    href={`https://wa.me/${phoneNumber}?text=Hi%2C%20I%20received%20a%20DRC-01%20notice%20and%20need%20help%20with%20the%20reply`}
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