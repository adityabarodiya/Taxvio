// app/gst-for-freelancer/GstForFreelancerClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Footar from "@/components/Footar";
import {
    ArrowRight,
    CheckCircle,
    ChevronRight,
    ChevronDown,
    Shield,
    Users,
    Zap,
    Clock,
    FileText,
    Phone,
    MessageCircle,
    Star,
    AlertCircle,
    TrendingUp,
    RefreshCw,
    Search,
    Globe,
    Briefcase,
} from "lucide-react";

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const PHONE = "918937980366";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    "Hello Taxvio, I am a freelancer and need GST guidance — registration, LUT for foreign clients and return filing. Please help."
)}`;

/* ─── Who needs freelancer GST ───────────────────────────────────────────────── */
const WHO_NEEDS = [
    {
        icon: "💻",
        title: "IT & Software Developers",
        section: "Tech Freelancers",
        desc: "Developers, coders, web designers and software engineers billing Indian or foreign clients for IT services need correct SAC code mapping, GST invoices, LUT for exports and monthly return filing.",
    },
    {
        icon: "✍️",
        title: "Content Writers & Copywriters",
        section: "Content Professionals",
        desc: "Freelance writers, bloggers, SEO content creators and copywriters billing companies, agencies or foreign brands need GST registration and correct classification of content services under GST.",
    },
    {
        icon: "🎨",
        title: "Designers & Creative Professionals",
        section: "Design / Media / Film",
        desc: "Graphic designers, UI/UX designers, video editors, photographers, animators and filmmakers billing corporate clients or foreign agencies need GST setup and LUT for zero-rated foreign invoices.",
    },
    {
        icon: "📊",
        title: "Consultants & Advisors",
        section: "Professional Services",
        desc: "Management consultants, HR consultants, financial advisors, tax practitioners and business advisors providing professional services to companies need proper GST invoicing and return compliance.",
    },
    {
        icon: "📱",
        title: "Digital Marketers & SEO Professionals",
        section: "Marketing Services",
        desc: "Freelance digital marketers, performance marketers, SEO specialists and social media managers billing Indian or global clients need correct GST registration, SAC codes and invoice format.",
    },
    {
        icon: "⚖️",
        title: "Lawyers, CA & Professionals",
        section: "Regulated Professions",
        desc: "Advocates, chartered accountants, architects, engineers and other licensed professionals providing taxable services to businesses need to understand compulsory registration triggers and correct GST treatment.",
    },
];

/* ─── What's included ─────────────────────────────────────────────────────────── */
const WHAT_INCLUDED = [
    {
        icon: "🪪",
        title: "GST Registration",
        desc: "End-to-end GST registration for freelancers — PAN, Aadhaar OTP, business address proof, SAC code identification, bank account verification and GSTIN activation.",
    },
    {
        icon: "🌐",
        title: "LUT Filing for Foreign Client Invoicing",
        desc: "Letter of Undertaking (Form RFD-11) filed on the GST portal before the start of the financial year — enabling zero-rated invoicing for foreign clients without charging IGST.",
    },
    {
        icon: "🧾",
        title: "GST Invoice Setup",
        desc: "Correct invoice format for freelancers — SAC code, GSTIN, place of supply, HSN/SAC description, tax rate, reverse charge declaration and export invoice format for foreign client billing.",
    },
    {
        icon: "📊",
        title: "Monthly GSTR-1 & GSTR-3B Filing",
        desc: "Return filing covering domestic client invoices, export invoices under LUT, ITC claims, RCM adjustments, credit notes and monthly tax payment after ITC adjustment.",
    },
    {
        icon: "🔍",
        title: "ITC Identification & Claim",
        desc: "We identify eligible ITC on freelancer business expenses — laptop, software, subscriptions, internet, professional tools, office rent and business-use purchases to reduce net GST outflow.",
    },
    {
        icon: "📩",
        title: "GST Notice & Mismatch Support",
        desc: "ASMT-10, DRC-01A, GSTR-1 vs 3B mismatch, GSTR-2B ITC mismatch, LUT violation notices and export turnover mismatch — reviewed and replied professionally.",
    },
];

/* ─── LUT section steps ───────────────────────────────────────────────────────── */
const LUT_STEPS = [
    {
        step: "01",
        title: "GST Registration (If Not Already Registered)",
        desc: "If you bill foreign clients regularly, GST registration is required first — even if domestic turnover is below ₹20 lakh. Registration is on the basis of voluntary application or compulsory inter-state supply trigger.",
    },
    {
        step: "02",
        title: "LUT Filing (Form RFD-11) Before Financial Year Start",
        desc: "Form RFD-11 is filed on the GST portal before the start of the financial year (or before the first export invoice of the year). The LUT is valid for the entire financial year and must be renewed annually.",
    },
    {
        step: "03",
        title: "Zero-Rated Invoice to Foreign Client",
        desc: "After LUT is filed, you issue an export invoice under LUT to the foreign client — showing the service description, USD or foreign currency amount, SAC code, GSTIN and LUT reference. No IGST is charged.",
    },
    {
        step: "04",
        title: "FIRC / FIRA Receipt from Bank",
        desc: "When payment is received in foreign currency, the bank issues a Foreign Inward Remittance Certificate (FIRC) or Foreign Inward Remittance Advice (FIRA). This is the evidence of export realisation.",
    },
    {
        step: "05",
        title: "Report in GSTR-1 as Export Supply",
        desc: "Export invoices must be reported in Table 6A of GSTR-1 with the correct invoice details, foreign currency amount, converted INR value, SAC code and LUT/Bond reference. This creates a clean export record on the GST portal.",
    },
    {
        step: "06",
        title: "GSTR-3B Filing & ITC Adjustment",
        desc: "Domestic GST liability, ITC on business purchases, RCM liability (if applicable) and any refund-eligible zero-rated credit are declared in GSTR-3B. Taxvio ensures every adjustment is correctly mapped.",
    },
];

/* ─── SAC codes reference ─────────────────────────────────────────────────────── */
const SAC_CODES = [
    { service: "Software development & IT services", sac: "998314", rate: "18%" },
    { service: "Website development services", sac: "998313", rate: "18%" },
    { service: "Data processing & analytics", sac: "998316", rate: "18%" },
    { service: "Management consulting", sac: "998311", rate: "18%" },
    { service: "Graphic design & visual communication", sac: "998392", rate: "18%" },
    { service: "Content writing & editorial services", sac: "998393", rate: "18%" },
    { service: "Digital advertising services", sac: "998361", rate: "18%" },
    { service: "Video production & post-production", sac: "999611", rate: "18%" },
    { service: "Photography services", sac: "999612", rate: "18%" },
    { service: "Legal services (other than RCM)", sac: "998211", rate: "18%" },
    { service: "Accounting & bookkeeping services", sac: "998222", rate: "18%" },
    { service: "Architecture & interior design", sac: "998311", rate: "18%" },
    { service: "HR and recruitment consulting", sac: "998512", rate: "18%" },
    { service: "Translation & language services", sac: "998431", rate: "18%" },
];

/* ─── Registration threshold comparison ──────────────────────────────────────── */
const THRESHOLD_COMPARISON = [
    {
        point: "General States (Incl. UP, Maharashtra, Delhi, Karnataka)",
        threshold: "₹20 lakh / year",
        compulsory: "Inter-state services, exports",
    },
    {
        point: "Special Category States (J&K, HP, Uttarakhand, NE States)",
        threshold: "₹10 lakh / year",
        compulsory: "Inter-state services, exports",
    },
    {
        point: "Foreign Client Billing (Export of Services)",
        threshold: "Registration required regardless of turnover",
        compulsory: "LUT required for zero-rated billing",
    },
    {
        point: "Voluntary Registration (Below Threshold)",
        threshold: "No minimum turnover",
        compulsory: "Useful for ITC claims and B2B credibility",
    },
    {
        point: "Composition Scheme",
        threshold: "Not available for pure service providers",
        compulsory: "Service-only freelancers cannot opt in",
    },
];

/* ─── ITC eligible items ──────────────────────────────────────────────────────── */
const ITC_ITEMS = [
    {
        category: "Technology & Tools",
        icon: "💻",
        badgeColor: "bg-blue-500",
        eligible: "Yes",
        items: [
            "Laptop or desktop (business use)",
            "Software subscriptions — Adobe, Figma, VS Code extensions",
            "SaaS tools — project management, invoicing, CRM",
            "Cloud storage subscriptions — Google Workspace, Dropbox",
            "Domain and web hosting for business website",
        ],
    },
    {
        category: "Office & Business",
        icon: "🏢",
        badgeColor: "bg-emerald-500",
        eligible: "Yes",
        items: [
            "Co-working space rent (if GST invoice available)",
            "Business broadband / internet bills",
            "Mobile phone (business use portion)",
            "Stationery, printer ink, office supplies",
            "Professional courses and training (business related)",
        ],
    },
    {
        category: "Professional Services",
        icon: "📋",
        badgeColor: "bg-violet-500",
        eligible: "Yes",
        items: [
            "CA / accountant fees (GST-registered CA)",
            "Legal fees from GST-registered lawyers",
            "Graphic design or content outsourced",
            "Courier and shipping for deliverables",
            "Advertising or marketing spend (GST-registered vendors)",
        ],
    },
    {
        category: "Blocked / Not Available",
        icon: "🚫",
        badgeColor: "bg-red-500",
        eligible: "No",
        items: [
            "Food and beverages (Section 17(5))",
            "Personal vehicle (if not exclusively for business)",
            "Health and life insurance for self",
            "Goods / services for personal use",
            "Works contract for personal property",
        ],
    },
];

/* ─── RCM scenarios ───────────────────────────────────────────────────────────── */
const RCM_SCENARIOS = [
    {
        icon: "☁️",
        title: "Foreign Software Subscriptions",
        desc: "If you subscribe to foreign SaaS tools like Zoom, Slack, Notion, Figma or cloud platforms (AWS, GCP, Azure) billed from outside India, you may be liable to pay IGST on RCM basis as the recipient.",
    },
    {
        icon: "🌍",
        title: "Import of Services from Foreign Consultants",
        desc: "If you hire a foreign professional, designer or developer and pay them from India, the import of service is taxable. You must self-invoice and pay IGST under RCM even if the foreign supplier does not charge GST.",
    },
    {
        icon: "🏠",
        title: "Rent from Unregistered Landlord",
        desc: "If you rent commercial office space from an unregistered individual, RCM may apply on the rent paid. You must pay GST under reverse charge and report it in GSTR-3B. Residential rent is generally exempt.",
    },
    {
        icon: "🚗",
        title: "Transport Services",
        desc: "If you use a Goods Transport Agency (GTA) for delivering physical deliverables and the GTA is not registered under GST, RCM may apply on the freight amount. Verify GTA registration before assuming no GST liability.",
    },
];

/* ─── Why Taxvio ──────────────────────────────────────────────────────────────── */
const WHY_POINTS = [
    {
        icon: Globe,
        title: "Foreign Client LUT Experts",
        desc: "We handle annual LUT filing, export invoice setup, FIRC tracking and GSTR-1 export table reporting so your zero-rated billing to foreign clients is always clean.",
    },
    {
        icon: Users,
        title: "CA-Assisted GST",
        desc: "Every freelancer GST file is reviewed by qualified professionals who understand service exports, SAC codes, ITC on business tools and freelancer-specific tax issues.",
    },
    {
        icon: FileText,
        title: "SAC Code & Invoice Setup",
        desc: "Correct SAC codes reduce GST notice risk significantly. We map your exact service type, configure invoice format and review place of supply before you send a single bill.",
    },
    {
        icon: Zap,
        title: "QRMP Scheme Advisory",
        desc: "Eligible freelancers can file GST quarterly under QRMP, reducing workload from 24 returns per year to 8. We evaluate and set up the scheme for qualifying freelancers.",
    },
    {
        icon: Search,
        title: "ITC Maximisation",
        desc: "Most freelancers miss ITC on laptops, subscriptions, cloud tools, co-working spaces and business purchases. We identify and properly claim all eligible ITC every month.",
    },
    {
        icon: Shield,
        title: "RCM Compliance",
        desc: "Foreign subscriptions and import of services often create surprise RCM liability for freelancers. We review your vendor list and ensure RCM is correctly handled.",
    },
];

/* ─── Testimonials ────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
    {
        stars: 5,
        text: "I'm a freelance developer and was confused about billing US clients. Taxvio got me registered, filed the LUT and set up my export invoice format. Now I invoice foreign clients cleanly with zero GST.",
        name: "Karan Verma",
        location: "Noida",
    },
    {
        stars: 5,
        text: "As a freelance designer, I had no idea about SAC codes or ITC on my Adobe and Figma subscriptions. Taxvio set up everything and I get back GST credit on my tools every month.",
        name: "Priya Agarwal",
        location: "Meerut",
    },
    {
        stars: 5,
        text: "I'm a consultant with both Indian and foreign clients. Taxvio manages my GSTR-1, GSTR-3B and LUT renewal every year. Monthly filings are completely handled — I just focus on client work.",
        name: "Suresh Tyagi",
        location: "Muzaffarnagar",
    },
];

/* ─── FAQs ────────────────────────────────────────────────────────────────────── */
const FAQS = [
    {
        q: "Is GST mandatory for freelancers in India?",
        a: "GST registration is mandatory for freelancers if aggregate turnover from services exceeds ₹20 lakh in a financial year (₹10 lakh for special category states). Additionally, registration is compulsory regardless of turnover for freelancers making inter-state taxable supplies of services and for those who export services to foreign clients and want to issue zero-rated invoices.",
    },
    {
        q: "Can a freelancer invoice foreign clients without charging GST?",
        a: "Yes. Export of services is zero-rated under Section 16 of the IGST Act. A registered freelancer can invoice foreign clients without charging GST by filing a Letter of Undertaking (LUT) in Form RFD-11 on the GST portal before the financial year begins. Without an LUT, the freelancer must charge IGST at 18% and then claim a refund — which is slower and involves cash blockage.",
    },
    {
        q: "How do I know if my income from a foreign client qualifies as export of services?",
        a: "A supply qualifies as export of services under Section 2(6) of the IGST Act only if: (1) the supplier is in India, (2) the recipient is outside India, (3) place of supply is outside India, (4) payment is received in convertible foreign exchange or Indian rupees allowed by RBI, and (5) the supplier and recipient are not merely establishments of the same entity. If all five conditions are met, the supply is zero-rated.",
    },
    {
        q: "What SAC code should a freelancer use for IT services?",
        a: "For software development and IT services, SAC 998314 or 998313 is commonly used. Website development typically uses 998313. For data analytics, 998316 is applicable. For graphic and design services, 998392 is used. Taxvio identifies the most appropriate SAC code based on the actual nature of work being performed to avoid mismatch notices.",
    },
    {
        q: "What GST returns does a freelancer need to file?",
        a: "Registered freelancers generally file GSTR-1 (outward supply details) and GSTR-3B (monthly summary and tax payment). Those eligible for QRMP scheme (turnover up to ₹5 crore) can file GSTR-1 and GSTR-3B quarterly with monthly payment through PMT-06. Export invoices under LUT must be reported in Table 6A of GSTR-1.",
    },
    {
        q: "Can a freelancer claim ITC on laptop, software and business tools?",
        a: "Yes. A GST-registered freelancer can claim ITC on laptops, software subscriptions (Adobe, Figma, VS Code tools), SaaS tools, internet and broadband, co-working space rent (with GST invoice), professional services and business advertising spend. ITC on personal use items or Section 17(5) blocked credits is not available.",
    },
    {
        q: "What is QRMP scheme and should freelancers opt in?",
        a: "The Quarterly Return Monthly Payment (QRMP) scheme allows taxpayers with aggregate turnover up to ₹5 crore to file GSTR-1 and GSTR-3B quarterly instead of monthly. However, monthly tax payment through PMT-06 remains mandatory. For freelancers with lower transaction volumes and predominantly foreign client invoices, QRMP can significantly reduce compliance effort.",
    },
    {
        q: "Does RCM apply if a freelancer uses foreign software like AWS, Zoom or Figma?",
        a: "Possibly yes. If foreign software or service providers bill from outside India without a GSTIN, the import of service may be treated as a taxable supply under RCM by the recipient (the freelancer). The freelancer must self-invoice and pay IGST under RCM in GSTR-3B. However, the exact applicability depends on whether the foreign supplier is registered in India, the nature of service, and specific conditions. Taxvio reviews your vendor list to confirm.",
    },
    {
        q: "What happens if I do not file GST returns on time?",
        a: "Late filing of GSTR-1 and GSTR-3B attracts a late fee of ₹50/day (₹20/day for nil returns) under Section 47. Interest at 18% per annum is charged on outstanding tax liability from the due date under Section 50. Additionally, buyers cannot claim ITC on your invoices if you do not file GSTR-1 on time, which may cause client friction.",
    },
];

/* ─── FAQ accordion ────────────────────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            itemScope
            itemType="https://schema.org/Question"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open}
            >
                <span
                    className="font-bold text-gray-800 text-sm leading-snug flex items-start gap-3"
                    itemProp="name"
                >
                    <span className="w-5 h-5 rounded-full bg-[#00416a] text-white flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5">
                        Q
                    </span>
                    {q}
                </span>
                <ChevronDown
                    size={16}
                    className={`shrink-0 text-[#00416a] mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>
            {open && (
                <div
                    className="px-6 pb-5 pl-14"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                >
                    <p
                        className="text-gray-600 text-xs leading-relaxed"
                        itemProp="text"
                    >
                        {a}
                    </p>
                </div>
            )}
        </div>
    );
}

/* ─── Client Component ─────────────────────────────────────────────────────────── */
export default function GstForFreelancerClient() {
    return (
        <main className="bg-white text-gray-800">

            {/* ══════ ALERT BANNER ══════ */}
            <div className="bg-amber-500 text-white text-xs font-semibold py-2.5 px-4 text-center leading-relaxed">
                ⚡ Billing foreign clients?{" "}
                <strong>File LUT (Form RFD-11) before your first export invoice</strong>{" "}
                of the financial year | Without LUT you must charge 18% IGST and wait
                for refund | Taxvio files your LUT online
            </div>

            {/* ══════ HERO ══════ */}
            <section
                aria-label="GST for Freelancers India — Taxvio"
                className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
            >
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle,#fff 1px,transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)",
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)",
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-24">

                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/serviceslist", label: "Services" },
                                { href: "/serviceslist/gst", label: "GST" },
                                { href: null, label: "GST for Freelancers" },
                            ].map(({ href, label }, i, arr) => (
                                <li key={label} className="flex items-center gap-1.5">
                                    {href ? (
                                        <Link
                                            href={href}
                                            className="hover:text-white/80 transition"
                                        >
                                            {label}
                                        </Link>
                                    ) : (
                                        <span className="text-white/75 font-medium">{label}</span>
                                    )}
                                    {i < arr.length - 1 && (
                                        <ChevronRight size={12} className="text-white/25" />
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <div
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 text-sky-300"
                        style={{
                            background: "rgba(56,189,248,0.12)",
                            border: "1px solid rgba(56,189,248,0.25)",
                        }}
                    >
                        💼 GST for Freelancers — Registration · LUT · Returns · Foreign Billing
                    </div>

                    <div className="grid md:grid-cols-[1fr_310px] gap-12 items-start">

                        {/* ── Left ── */}
                        <div>
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                                GST for Freelancers
                                <span className="block mt-2 text-sky-300">
                                    India — Complete Guide
                                </span>
                            </h1>

                            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
                                Complete GST setup for{" "}
                                <strong className="text-white">
                                    developers, designers, consultants, content creators and
                                    professionals
                                </strong>{" "}
                                — whether you bill Indian or foreign clients. Taxvio handles
                                GST registration,{" "}
                                <strong className="text-white">LUT for zero-rated foreign billing</strong>,
                                SAC code mapping, GSTR-1, GSTR-3B, ITC claims and RCM
                                compliance. Starting{" "}
                                <strong className="text-white">₹1,499</strong>.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "✅ GST Registration",
                                    "🌐 LUT for Foreign Clients",
                                    "📊 GSTR-1 & GSTR-3B",
                                    "💡 ITC on Business Tools",
                                ].map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs font-semibold rounded-full px-3 py-1.5"
                                        style={{
                                            background: "rgba(255,255,255,0.09)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "rgba(255,255,255,0.82)",
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                                >
                                    <MessageCircle size={16} /> Start GST Setup — ₹1,499
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                                >
                                    Free Consultation <ArrowRight size={15} />
                                </Link>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
                                {[
                                    "Zero-Rated Export Invoicing",
                                    "LUT Form RFD-11",
                                    "SAC Code Setup",
                                    "QRMP Scheme Advisory",
                                ].map((t) => (
                                    <span key={t} className="flex items-center gap-1.5">
                                        <CheckCircle size={11} className="text-sky-400" /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ── Right — Key Facts Card ── */}
                        <div
                            className="rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(255,255,255,0.14)",
                            }}
                        >
                            <div
                                className="px-6 py-4 border-b"
                                style={{ borderColor: "rgba(255,255,255,0.1)" }}
                            >
                                <p className="font-bold text-white text-sm">
                                    Freelancer GST — Key Facts
                                </p>
                                <p className="text-xs text-white/50 mt-0.5">
                                    Current rules · CA-assisted
                                </p>
                            </div>

                            <div className="p-5 space-y-3.5">
                                {[
                                    { label: "Reg. Threshold (General)", val: "₹20 lakh/year" },
                                    { label: "Reg. Threshold (Special)", val: "₹10 lakh/year" },
                                    { label: "Foreign Billing Route", val: "Zero-rated + LUT" },
                                    { label: "LUT Form", val: "RFD-11" },
                                    { label: "LUT Valid For", val: "One financial year" },
                                    { label: "GST Rate on Services", val: "18% (standard)" },
                                    { label: "Scheme for Low Volume", val: "QRMP (up to ₹5 Cr)" },
                                ].map(({ label, val }) => (
                                    <div key={label} className="flex items-center justify-between">
                                        <span className="text-white/60 text-xs">{label}</span>
                                        <span className="font-bold text-white text-xs text-right">
                                            {val}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="px-5 pb-5">
                                <div
                                    className="rounded-xl px-4 py-3 flex items-center justify-between"
                                    style={{
                                        background: "rgba(255,255,255,0.10)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                >
                                    <div>
                                        <p className="text-white text-xs font-bold">Starting From</p>
                                        <p className="text-sky-300 text-2xl font-extrabold">₹1,499</p>
                                        <p className="text-white/40 text-[10px] mt-0.5">
                                            GST reg · Returns from ₹799/mo
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star size={13} className="fill-amber-400" />
                                        <span className="text-white font-bold text-sm">4.9</span>
                                        <span className="text-white/40 text-xs">(220+)</span>
                                    </div>
                                </div>

                                <a
                                    href={WA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 text-white text-sm font-bold transition-all active:scale-[0.97] mt-3"
                                >
                                    <MessageCircle size={14} /> Get Started on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ STATS STRIP ══════ */}
            <section className="bg-[#00416a] py-8" aria-label="Taxvio freelancer GST statistics">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { val: "220+", label: "Freelancers Served" },
                        { val: "3–7", label: "GST Setup Days" },
                        { val: "4.9★", label: "Average Rating" },
                        { val: "₹1,499", label: "Starting Price" },
                    ].map(({ val, label }) => (
                        <div key={label}>
                            <p className="text-xl md:text-2xl font-extrabold text-white">{val}</p>
                            <p className="text-xs text-white/55 mt-0.5">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════ WHO NEEDS ══════ */}
            <section className="py-20 bg-gray-50" aria-label="Which freelancers need GST compliance">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Applicability
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
                        Which Freelancers Need GST Compliance?
                    </h2>
                    <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
                        Whether you bill Indian companies or foreign clients, GST impacts
                        your invoices, ITC claims and annual compliance differently depending
                        on your service type.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {WHO_NEEDS.map(({ icon, title, section, desc }) => (
                            <div
                                key={title}
                                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#00416a] mb-0.5">
                                            {section}
                                        </p>
                                        <h3 className="font-bold text-gray-800 text-sm leading-snug">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ WHAT'S INCLUDED ══════ */}
            <section className="py-20 bg-white" aria-label="What is included in freelancer GST service">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            What's Included
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            Complete Freelancer GST Support Starting ₹1,499
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
                            Registration to returns, LUT to ITC — Taxvio handles your
                            complete GST compliance so you can focus on client work.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {WHAT_INCLUDED.map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="w-11 h-11 rounded-2xl bg-[#00416a]/8 border border-[#00416a]/12 flex items-center justify-center text-2xl mb-4">
                                    {icon}
                                </div>
                                <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ LUT PROCESS ══════ */}
            <section className="py-20 bg-gray-50" aria-label="LUT process for freelancers billing foreign clients">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Foreign Client Billing
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] text-center mt-4 mb-3">
                        How Freelancers Invoice Foreign Clients Without GST — LUT Process
                    </h2>
                    <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-12">
                        Filing LUT is the most important GST step for any freelancer with
                        foreign clients. Without it, you either charge IGST or lose cash
                        in refund cycles.
                    </p>

                    <div className="space-y-4">
                        {LUT_STEPS.map(({ step, title, desc }) => (
                            <div
                                key={step}
                                className="flex gap-5 items-start bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-[#00416a]/15 transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-md">
                                    {step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                                        {title}
                                    </h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
                        <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#00416a] leading-relaxed">
                            <strong>LUT renewal reminder:</strong> The LUT must be renewed at
                            the start of every financial year by filing a fresh Form RFD-11.
                            There is no automatic renewal. If you issue an export invoice
                            before filing the LUT for the new year, it will not be treated as
                            zero-rated and you may need to pay IGST or file a fresh invoice.
                            Taxvio renews your LUT every April.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ REGISTRATION THRESHOLD TABLE ══════ */}
            <section className="py-20 bg-white" aria-label="GST registration thresholds for freelancers">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Registration Rules
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            When Is GST Registration Mandatory for Freelancers?
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                            The ₹20 lakh threshold is not the only trigger. Inter-state
                            supplies and foreign client billing may require registration even
                            before you cross the threshold.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="bg-[#00416a] text-white">
                                    <th className="px-4 py-3.5 text-left font-bold">Scenario</th>
                                    <th className="px-4 py-3.5 text-left font-bold">Threshold</th>
                                    <th className="px-4 py-3.5 text-left font-bold">Compulsory Trigger</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {SAC_CODES.map(({ service, sac, rate }, i) => (
                                    <tr
                                        key={`${sac}-${i}`}
                                        className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                                            }`}
                                    >
                                        <td className="px-4 py-3 text-gray-700 font-medium">{service}</td>
                                        <td className="px-4 py-3 font-bold text-[#00416a]">{sac}</td>
                                        <td className="px-4 py-3 font-semibold text-gray-800">{rate}</td>
                                    </tr>
                                ))}
                            </tbody>



                        </table>
                    </div>

                    <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
                        <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800 leading-relaxed">
                            <strong>Voluntary registration note:</strong> Freelancers below
                            the threshold can also register voluntarily to claim ITC on
                            business purchases (laptop, software, tools) and to present a
                            more professional image to B2B clients who need a GSTIN for their
                            input credit claims.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ SAC CODES TABLE ══════ */}
            <section className="py-20 bg-gray-50" aria-label="SAC codes for freelancers in India">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            SAC Code Reference
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            Common SAC Codes for Freelancers — FY 2025-26
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                            Every GST invoice must mention the correct SAC code for your
                            service. Wrong SAC codes can attract notices and create ITC
                            mismatch for your clients.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="bg-[#00416a] text-white">
                                    <th className="px-4 py-3.5 text-left font-bold">Service Type</th>
                                    <th className="px-4 py-3.5 text-left font-bold">SAC Code</th>
                                    <th className="px-4 py-3.5 text-left font-bold">GST Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {SAC_CODES.map(({ service, sac, rate }, i) => (
                                    <tr
                                        key={sac}
                                        className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                                            }`}
                                    >
                                        <td className="px-4 py-3 text-gray-700 font-medium">
                                            {service}
                                        </td>
                                        <td className="px-4 py-3 font-bold text-[#00416a]">
                                            {sac}
                                        </td>
                                        <td className="px-4 py-3 font-semibold text-gray-800">
                                            {rate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
                        <Search size={16} className="text-[#00416a] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#00416a] leading-relaxed">
                            <strong>Note:</strong> SAC codes have multiple sub-categories.
                            The right code depends on the precise nature of work performed,
                            not just the broad category. Taxvio identifies the most accurate
                            SAC code for your specific freelance services before you send the
                            first invoice.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ ITC CHECKLIST ══════ */}
            <section className="py-20 bg-white" aria-label="ITC eligible items for freelancers">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Input Tax Credit
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            ITC That Freelancers Can Claim — and What Is Blocked
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                            Most freelancers overpay GST because they don't claim ITC on
                            eligible business purchases. Always get a proper GST invoice from
                            vendors to enable ITC.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {ITC_ITEMS.map(({ category, icon, badgeColor, eligible, items }) => (
                            <div
                                key={category}
                                className={`border rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${eligible === "No"
                                        ? "bg-white border-red-100"
                                        : "bg-gray-50 border-gray-100"
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 ${eligible === "No"
                                                    ? "bg-red-50 border border-red-100"
                                                    : "bg-[#00416a] "
                                                }`}
                                        >
                                            {icon}
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-sm">
                                            {category}
                                        </h3>
                                    </div>
                                    <span
                                        className={`text-[10px] font-bold text-white px-2.5 py-1 rounded-full ${badgeColor}`}
                                    >
                                        ITC: {eligible}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2 text-xs text-gray-600"
                                        >
                                            {eligible === "No" ? (
                                                <span className="text-red-400 shrink-0 mt-0.5 text-[10px] font-bold">
                                                    ✗
                                                </span>
                                            ) : (
                                                <CheckCircle
                                                    size={10}
                                                    className="text-green-500 shrink-0 mt-0.5"
                                                />
                                            )}
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex items-start gap-3 bg-[#00416a]/5 border border-[#00416a]/15 rounded-2xl p-4">
                        <AlertCircle size={16} className="text-[#00416a] shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-700 leading-relaxed">
                            <strong className="text-[#00416a]">ITC matching reminder:</strong>{" "}
                            ITC can only be claimed if the vendor has filed their GSTR-1 and
                            the invoice appears in your GSTR-2B. Taxvio verifies GSTR-2B
                            before finalising ITC claims each month to avoid demand notices
                            for unmatched ITC.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ RCM ══════ */}
            <section className="py-20 bg-gray-50" aria-label="Reverse charge mechanism for freelancers">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Reverse Charge
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            RCM Scenarios Freelancers Must Know
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                            Reverse Charge Mechanism can apply even when you are a service
                            provider receiving services from abroad or from unregistered
                            vendors in India.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {RCM_SCENARIOS.map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-white border border-amber-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-xl shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-sm mb-1">
                                            {title}
                                        </h3>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
                        <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800 leading-relaxed">
                            <strong>RCM self-invoicing:</strong> When RCM applies, you must
                            issue a self-invoice for the transaction, pay IGST in cash (RCM
                            credit cannot be used to pay RCM liability), and claim ITC on the
                            self-invoiced amount in the following tax period. Taxvio reviews
                            your expense list and identifies all RCM-triggering transactions
                            before filing.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════ SEO PILLAR CONTENT ══════ */}
            <section
                className="py-20 bg-white"
                aria-label="Complete guide to GST for freelancers in India"
            >
                <div className="max-w-4xl mx-auto px-6 space-y-14">

                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                            GST for Freelancers in India — The Complete Legal Guide
                        </h2>
                        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                            <p>
                                GST applies to freelancers and independent professionals in
                                India just as it does to companies and registered businesses.
                                Whether you are a software developer, designer, content writer,
                                consultant, marketer or any other professional providing taxable
                                services — if your aggregate turnover crosses the registration
                                threshold or triggers a compulsory registration condition, you
                                are required to register, collect GST from clients, file returns
                                and deposit tax.
                            </p>
                            <p>
                                The most commonly misunderstood aspect of freelancer GST is the
                                distinction between domestic billing and foreign client billing.
                                For domestic clients, you charge 18% GST on your invoice, file
                                GSTR-1 to report the supply, file GSTR-3B to pay the net tax
                                after adjusting ITC, and issue a proper GST invoice. For foreign
                                clients, the rules are completely different — the supply qualifies
                                as export of services and is zero-rated, meaning you do not
                                charge any GST to the client, but you still file returns and
                                report the export.
                            </p>
                            <p>
                                The key instrument for zero-rated foreign billing is the{" "}
                                <strong>Letter of Undertaking (LUT)</strong> filed in Form
                                RFD-11. Without an LUT, even export invoices attract IGST, and
                                the freelancer must charge and collect IGST from the foreign
                                client — which most foreign clients are unwilling to pay — and
                                then claim a refund. Filing the LUT before the financial year
                                begins eliminates this friction entirely.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                            Export of Services — The Five Conditions Freelancers Must Satisfy
                        </h2>
                        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                            <p>
                                Not every payment from a foreign client automatically qualifies
                                as export of services. Section 2(6) of the IGST Act defines
                                export of services with five specific conditions that must all
                                be simultaneously satisfied. Missing even one condition can
                                change the treatment from zero-rated export to a regular taxable
                                domestic supply.
                            </p>
                            <p>
                                The five conditions are: (1) the supplier must be located in
                                India; (2) the recipient must be located outside India; (3) the
                                place of supply must be outside India; (4) payment must be
                                received in convertible foreign exchange or Indian rupees
                                permitted by RBI; and (5) the supplier and recipient must not
                                be merely different establishments of the same legal entity.
                            </p>
                            <p>
                                The most practically important condition for freelancers is
                                condition (4) — payment received in convertible foreign exchange.
                                Payments received in INR from foreign clients through a wire
                                transfer authorised by RBI also qualify. However, payments
                                received in INR from Indian bank accounts of foreign entities
                                operating in India may be treated differently depending on the
                                facts. Taxvio reviews each client contract structure to ensure
                                the export classification is defensible.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                            QRMP Scheme for Freelancers — Quarterly Returns with Monthly Tax
                        </h2>
                        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                            <p>
                                The Quarterly Return Monthly Payment (QRMP) scheme was
                                introduced to reduce the compliance burden for small taxpayers.
                                Registered freelancers with aggregate annual turnover up to
                                ₹5 crore in the preceding financial year are eligible to opt for
                                QRMP. Under this scheme, GSTR-1 (outward supply details) and
                                GSTR-3B (summary return) are filed quarterly — reducing the
                                annual filing count from 24 returns to 8.
                            </p>
                            <p>
                                However, tax payment remains monthly. The QRMP scheme requires
                                monthly tax payment through Form PMT-06 using either the fixed
                                sum method (35% of net cash tax paid in the last quarter of the
                                previous year) or the self-assessment method (computing actual
                                liability for each month). Freelancers with predominantly export
                                invoices (zero-rated) and significant ITC may find the
                                self-assessment method more accurate to avoid excess payment.
                            </p>
                            <p>
                                QRMP is optional — freelancers can opt in or out at the
                                beginning of each quarter. The decision should consider the
                                number of clients, invoice frequency, ITC claims and whether
                                buyers need frequent GSTR-1 updates for their own ITC
                                reconciliation. For freelancers with few clients and primarily
                                foreign billing, QRMP typically reduces workload significantly.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                            GST Invoice Format for Freelancers — What Must Appear on Every Invoice
                        </h2>
                        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                            <p>
                                A valid GST invoice from a registered freelancer must include
                                specific mandatory fields under Rule 46 of the CGST Rules. For
                                domestic B2B invoices, the invoice must show: your legal name,
                                address and GSTIN; the client's legal name, address and GSTIN
                                (if registered); invoice number and date; description of
                                service; SAC code; taxable value; applicable tax rate; CGST and
                                SGST/IGST amounts separately; total invoice value; and place of
                                supply.
                            </p>
                            <p>
                                For export invoices under LUT, additional fields are required:
                                the invoice must clearly state "Supply Meant for Export Under
                                LUT Without Payment of IGST"; the LUT reference number and
                                date; the foreign currency amount and equivalent INR value at
                                the exchange rate; and the shipping bill details if applicable.
                                Export invoices are B2B by default — there is no B2C export
                                invoice for professional services.
                            </p>
                            <p>
                                For{" "}
                                <Link
                                    href="/serviceslist/roc/opc-formation"
                                    className="text-[#00416a] font-semibold underline hover:text-sky-700 transition"
                                >
                                    OPC
                                </Link>{" "}
                                or{" "}
                                <Link
                                    href="/serviceslist/roc/private-limited-formation"
                                    className="text-[#00416a] font-semibold underline hover:text-sky-700 transition"
                                >
                                    Private Limited Company
                                </Link>{" "}
                                freelancers who are also registered under the Companies Act, the
                                invoice must also mention the CIN and registered office address.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">
                            GST vs Income Tax for Freelancers — Two Separate Obligations
                        </h2>
                        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                            <p>
                                Many freelancers confuse GST with income tax or assume they are
                                interchangeable. They are completely separate obligations under
                                separate laws, administered by different departments with
                                different returns, thresholds and rules. GST is charged on the
                                invoice to the client, deposited with the GST department and
                                reported in monthly returns. It is effectively a pass-through tax
                                — you collect it from the client and deposit it with the
                                government.
                            </p>
                            <p>
                                Income tax, on the other hand, is levied on your net income or
                                profit from freelancing. It is reported through your annual ITR
                                (typically ITR-4 for freelancers under presumptive taxation or
                                ITR-3 for those maintaining regular books). If your net profit
                                exceeds the basic exemption limit, income tax is payable at the
                                applicable slab rates or presumptive rate.
                            </p>
                            <p>
                                Freelancers often also face TDS (Tax Deducted at Source) from
                                their Indian business clients under Section 194J (professional
                                services) or Section 194C (contracts). This TDS reduces your
                                advance tax liability but does not replace the need to file ITR.
                                Taxvio assists with both GST compliance and{" "}
                                <Link
                                    href="/serviceslist/income-tax/itr-proprietor"
                                    className="text-[#00416a] font-semibold underline hover:text-sky-700 transition"
                                >
                                    income tax return filing
                                </Link>{" "}
                                for freelancers to ensure both obligations are correctly handled.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ══════ WHY TAXVIO ══════ */}
            <section className="py-20 bg-gray-50" aria-label="Why choose Taxvio for freelancer GST">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Why Taxvio
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            Why Freelancers Trust Taxvio for GST
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
                            Freelancer-friendly GST compliance — professional quality without
                            enterprise pricing. 100% online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#00416a]/8 flex items-center justify-center shrink-0">
                                    <Icon size={18} className="text-[#00416a]" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ TESTIMONIALS ══════ */}
            <section className="py-20 bg-white" aria-label="Client reviews for freelancer GST service">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            Client Stories
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            Freelancers Who Got GST Right with Taxvio
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5">
                        {TESTIMONIALS.map(({ stars, text, name, location }) => (
                            <div
                                key={name}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: stars }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={12}
                                            className="text-amber-400 fill-amber-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-xs leading-relaxed mb-5 italic">
                                    "{text}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-[#00416a] flex items-center justify-center text-white font-extrabold text-xs shrink-0">
                                        {name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-xs">{name}</p>
                                        <p className="text-gray-400 text-[10px]">📍 {location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ FAQ ══════ */}
            <section className="py-20 bg-gray-50" aria-label="GST for freelancers FAQs">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                            FAQs
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                            Frequently Asked Questions — GST for Freelancers in India
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {FAQS.map(({ q, a }) => (
                            <FAQItem key={q} q={q} a={a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ OUR REACH ══════ */}
            <section
                className="py-14 bg-white border-t border-gray-100"
                aria-label="GST for freelancers services across India"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-7 rounded-full bg-[#00416a]" />
                        <h2 className="text-lg font-extrabold text-gray-800">
                            Freelancer GST Services Across India
                        </h2>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 max-w-3xl">
                        Taxvio is based in{" "}
                        <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong> and
                        provides GST registration, LUT filing, SAC code mapping, monthly
                        return filing and GST notice support for freelancers and independent
                        professionals across{" "}
                        <strong>
                            Noida, Delhi NCR, Meerut, Ghaziabad, Lucknow, Jaipur, Mumbai,
                            Bangalore
                        </strong>{" "}
                        and all of India. Our process is 100% online — no office visit
                        required.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "Khatauli",
                            "Muzaffarnagar",
                            "Meerut",
                            "Noida",
                            "Delhi NCR",
                            "Ghaziabad",
                            "Lucknow",
                            "Jaipur",
                            "Mumbai",
                            "Bangalore",
                            "Hyderabad",
                            "Chennai",
                            "Pune",
                            "Surat",
                        ].map((city) => (
                            <Link
                                key={city}
                                href={`/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150"
                            >
                                📍 {city}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ RELATED SERVICES ══════ */}
            <section
                className="py-14 bg-gray-50 border-t border-gray-100"
                aria-label="Related GST and tax services for freelancers"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-8 rounded-full bg-[#00416a]" />
                        <h2 className="text-lg font-extrabold text-gray-800">
                            Explore More — Related Services
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            {
                                title: "GST Registration",
                                desc: "Get GSTIN in 3–7 days — ₹1,499",
                                href: "/serviceslist/gst/gst-registration",
                                icon: "🧾",
                            },
                            {
                                title: "GST Return Filing",
                                desc: "GSTR-1 & GSTR-3B — ₹799/month",
                                href: "/serviceslist/gst/gst-return",
                                icon: "📋",
                            },
                            {
                                title: "Income Tax Return (ITR)",
                                desc: "Freelancer ITR-4 / ITR-3 filing",
                                href: "/serviceslist/income-tax/itr-proprietor",
                                icon: "💼",
                            },
                            {
                                title: "OPC Registration",
                                desc: "Solo founder company — ₹4,999",
                                href: "/serviceslist/roc/opc-formation",
                                icon: "👤",
                            },
                        ].map(({ title, desc, href, icon }) => (
                            <Link
                                key={title}
                                href={href}
                                className="group flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <span className="text-xl shrink-0">{icon}</span>
                                <div>
                                    <p className="font-bold text-gray-800 text-xs group-hover:text-[#00416a] transition">
                                        {title}
                                    </p>
                                    <p className="text-gray-500 text-[11px] mt-0.5 leading-snug">
                                        {desc}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00416a] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn More <ArrowRight size={9} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ FINAL CTA ══════ */}
            <section
                className="py-20 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] relative overflow-hidden"
                aria-label="Start freelancer GST compliance with Taxvio"
            >
                <div
                    className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 65%)",
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
                        backgroundSize: "26px 26px",
                    }}
                />

                <div className="relative max-w-4xl mx-auto px-6">
                    {/* Callout */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-white font-bold text-sm">
                                🌐 Billing Foreign Clients?
                            </p>
                            <p className="text-white/65 text-xs mt-0.5">
                                File <strong className="text-white">LUT (Form RFD-11)</strong>{" "}
                                before issuing the first export invoice of FY 2025-26. Without
                                it, you must charge{" "}
                                <strong className="text-white">18% IGST</strong> and wait for
                                refund.
                            </p>
                        </div>
                        <a
                            href={WA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#00416a] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-[0.97]"
                        >
                            <MessageCircle size={13} /> File LUT Now
                        </a>
                    </div>

                    <div className="text-center">
                        <div
                            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 text-white"
                            style={{
                                background: "rgba(255,255,255,0.10)",
                                border: "1px solid rgba(255,255,255,0.18)",
                            }}
                        >
                            <TrendingUp size={12} className="text-sky-400" />
                            220+ Freelancers Served · 4.9★ Rating · Starting ₹1,499
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                            GST for Freelancers — Done Right
                            <span className="block mt-1 text-sky-300">
                                Registration, LUT, Returns Starting ₹1,499
                            </span>
                        </h2>

                        <p className="mt-5 text-white/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            GST registration, LUT for zero-rated foreign billing, SAC code
                            setup, GSTR-1, GSTR-3B, ITC on business tools, RCM compliance
                            and GST notice support — all handled by Taxvio's CA team. 100%
                            online, pan-India.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href={WA}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-green-500 hover:bg-green-600 px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                            >
                                <MessageCircle size={16} /> Start GST Setup — ₹1,499
                            </a>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                            >
                                Free Consultation <ArrowRight size={15} />
                            </Link>
                            <a
                                href={`tel:${PHONE}`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]"
                            >
                                <Phone size={15} /> Call Now
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
                            <span className="flex items-center gap-1.5">
                                <Shield size={12} /> 100% Confidential
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle size={12} /> CA Assisted
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Globe size={12} /> Foreign Client Ready
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={12} /> Mon–Sat · 9 AM–7 PM
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <Footar />
        </main>
    );
}