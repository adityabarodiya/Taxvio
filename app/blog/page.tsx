import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import { ArrowRight, Clock, Tag, TrendingUp, BookOpen, Search } from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST, Income Tax & Compliance Blog | Taxvio — Tax Tips & Updates India",
  description:
    "Read expert articles on GST registration, income tax filing, company registration, TDS compliance, FSSAI license, and ROC compliance. Stay updated with latest tax law changes, due dates, and compliance guides for Indian businesses.",
  keywords: [
    "GST blog India", "income tax tips India", "GST return filing guide",
    "ITR filing guide", "company registration India blog",
    "TDS compliance India", "tax updates India 2025",
    "Taxvio blog", "GST due dates", "income tax due dates India",
  ],
  alternates: { canonical: "https://www.taxvio.in/blog" },
  openGraph: {
    title: "GST, Income Tax & Compliance Blog | Taxvio",
    description: "Expert tax articles, GST guides, ITR filing tips, and compliance updates for Indian businesses — by Taxvio's CA team.",
    url: "https://www.taxvio.in/blog",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-blog.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST & Tax Compliance Blog | Taxvio",
    description: "Expert GST, ITR, and compliance guides for Indian businesses.",
  },
  robots: { index: true, follow: true },
};

/* ─── Schema ───────────────────────────────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.taxvio.in/blog" },
  ],
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Taxvio Tax & Compliance Blog",
  url: "https://www.taxvio.in/blog",
  description: "Expert articles on GST, income tax, company registration, TDS compliance, and business regulations in India.",
  publisher: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    logo: { "@type": "ImageObject", url: "https://www.taxvio.in/logo.png" },
  },
};

/* ─── Blog Data ─────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { label: "All", slug: "all", count: 24 },
  { label: "GST", slug: "gst", count: 9 },
  { label: "Income Tax", slug: "income-tax", count: 7 },
  { label: "Company Registration", slug: "company", count: 4 },
  { label: "TDS & TCS", slug: "tds", count: 3 },
  { label: "FSSAI", slug: "fssai", count: 1 },
];

const FEATURED_POST = {
  slug: "gst-return-filing-guide-2025",
  category: "GST",
  categoryColor: "emerald",
  title: "Complete Guide to GST Return Filing in 2025 — GSTR-1, GSTR-3B & GSTR-9 Explained",
  excerpt:
    "A step-by-step guide covering every GST return form — GSTR-1 (outward supplies), GSTR-3B (monthly summary), GSTR-9 (annual return), and GSTR-9C (reconciliation statement). Includes due dates, penalties for late filing, ITC reconciliation tips, and common mistakes to avoid.",
  author: "CA Team, Taxvio",
  date: "15 May 2025",
  readTime: "12 min read",
  tags: ["GST Returns", "GSTR-1", "GSTR-3B", "GSTR-9", "ITC Reconciliation"],
};

const POSTS = [
  {
    slug: "gst-registration-documents-eligibility-2025",
    category: "GST",
    categoryColor: "emerald",
    title: "GST Registration in India 2025 — Eligibility, Documents & Step-by-Step Process",
    excerpt: "Who needs GST registration? Complete breakdown of turnover thresholds, mandatory registration categories, documents required, and the GSTN registration process for traders, manufacturers, and service providers.",
    author: "CA Team, Taxvio",
    date: "10 May 2025",
    readTime: "9 min read",
    tags: ["GST Registration", "GSTIN", "GST Eligibility"],
  },
  {
    slug: "itr-filing-salaried-guide-fy2024-25",
    category: "Income Tax",
    categoryColor: "blue",
    title: "ITR Filing for Salaried Employees FY 2024-25 — Which ITR Form, Deductions & Due Dates",
    excerpt: "Complete guide to filing income tax returns for salaried individuals — ITR-1 vs ITR-2, how to use Form 16, Section 80C deductions, HRA exemption, capital gains reporting, and the AIS/TIS reconciliation process.",
    author: "CA Team, Taxvio",
    date: "5 May 2025",
    readTime: "11 min read",
    tags: ["ITR Filing", "Form 16", "Salaried ITR", "Section 80C"],
  },
  {
    slug: "section-43b-h-msme-payment-compliance",
    category: "Income Tax",
    categoryColor: "blue",
    title: "Section 43B(h) — MSME Payment Rule & Income Tax Impact Explained",
    excerpt: "The Finance Act 2023 introduced Section 43B(h) requiring payments to MSMEs within 45 days. Understand how this affects your tax deduction claims, what counts as an MSME supplier, and how to audit-proof your vendor payments.",
    author: "CA Team, Taxvio",
    date: "28 Apr 2025",
    readTime: "8 min read",
    tags: ["Section 43B", "MSME", "Income Tax", "Vendor Compliance"],
  },
  {
    slug: "gst-itc-reconciliation-gstr-2b-guide",
    category: "GST",
    categoryColor: "emerald",
    title: "GST ITC Reconciliation — GSTR-2B vs Books: How to Fix Mismatches & Avoid Notices",
    excerpt: "ITC mismatches between GSTR-2B and your books of accounts are the most common GST audit trigger. This guide walks through the reconciliation process, how to handle missing credits, supplier non-compliance, and the correct treatment in GSTR-3B.",
    author: "CA Team, Taxvio",
    date: "20 Apr 2025",
    readTime: "10 min read",
    tags: ["ITC Reconciliation", "GSTR-2B", "GST Audit", "Input Tax Credit"],
  },
  {
    slug: "private-limited-company-registration-guide",
    category: "Company Registration",
    categoryColor: "violet",
    title: "Private Limited Company Registration in India 2025 — Complete MCA Process & Documents",
    excerpt: "Step-by-step guide to incorporating a Private Limited Company through the MCA portal — name availability, DIN & DSC application, SPICe+ form filing, MOA & AOA, Certificate of Incorporation, and post-incorporation compliance checklist.",
    author: "CA Team, Taxvio",
    date: "15 Apr 2025",
    readTime: "13 min read",
    tags: ["Company Registration", "Private Limited", "MCA", "SPICe+"],
  },
  {
    slug: "tds-return-filing-24q-26q-guide",
    category: "TDS & TCS",
    categoryColor: "orange",
    title: "TDS Return Filing Guide — Form 24Q, 26Q & 27Q: Due Dates, Penalties & Process",
    excerpt: "Everything you need to know about quarterly TDS return filing — which form applies to which payment, how to prepare the return using TRACES, challan reconciliation, TDS certificate (Form 16/16A) generation, and consequences of late filing.",
    author: "CA Team, Taxvio",
    date: "8 Apr 2025",
    readTime: "9 min read",
    tags: ["TDS Returns", "Form 24Q", "Form 26Q", "TDS Compliance"],
  },
  {
    slug: "gst-e-invoicing-irn-qr-code-guide",
    category: "GST",
    categoryColor: "emerald",
    title: "GST E-Invoicing in India 2025 — IRN Generation, QR Code & Applicability Threshold",
    excerpt: "E-invoicing is now mandatory for businesses with turnover above ₹5 crore. Understand the IRP registration, Invoice Reference Number (IRN) generation, QR code requirements, B2B vs B2C applicability, and how to integrate e-invoicing with your accounting software.",
    author: "CA Team, Taxvio",
    date: "1 Apr 2025",
    readTime: "8 min read",
    tags: ["E-Invoicing", "IRN", "GST Compliance", "IRP"],
  },
  {
    slug: "new-tax-regime-vs-old-tax-regime-2025",
    category: "Income Tax",
    categoryColor: "blue",
    title: "New Tax Regime vs Old Tax Regime FY 2025-26 — Which is Better for You?",
    excerpt: "Detailed comparison of the new and old income tax regimes for FY 2025-26. Includes slab-by-slab tax calculation, which deductions are available under each regime, standard deduction changes, and a decision framework for salaried employees and business owners.",
    author: "CA Team, Taxvio",
    date: "25 Mar 2025",
    readTime: "12 min read",
    tags: ["New Tax Regime", "Old Tax Regime", "Income Tax Slabs", "Tax Planning"],
  },
  {
    slug: "fssai-registration-food-business-guide",
    category: "FSSAI",
    categoryColor: "amber",
    title: "FSSAI Registration Guide 2025 — Basic, State & Central License: Who Needs What?",
    excerpt: "Complete guide to FSSAI food license registration — Basic vs State vs Central license applicability based on turnover, business type and location; documents required; how to apply through FoSCoS; and the renewal and modification process.",
    author: "CA Team, Taxvio",
    date: "18 Mar 2025",
    readTime: "8 min read",
    tags: ["FSSAI", "Food License", "FoSCoS", "Food Business"],
  },
];

const DUE_DATES = [
  { date: "11 Jun", form: "GSTR-1", desc: "Monthly outward supplies (May 2025)", color: "emerald" },
  { date: "20 Jun", form: "GSTR-3B", desc: "Monthly GST summary return (May 2025)", color: "emerald" },
  { date: "15 Jun", form: "Advance Tax", desc: "1st instalment FY 2025-26", color: "blue" },
  { date: "30 Jun", form: "TDS Q4 Return", desc: "Form 24Q / 26Q (Q4 FY24-25)", color: "orange" },
  { date: "31 Jul", form: "ITR Filing", desc: "Income Tax Return FY 2024-25", color: "blue" },
  { date: "31 Jul", form: "GSTR-9", desc: "GST Annual Return FY 2024-25", color: "emerald" },
];

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100", dot: "bg-emerald-500" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-100",    dot: "bg-blue-500"    },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-100",  dot: "bg-violet-500"  },
  orange:  { bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-100",  dot: "bg-orange-500"  },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-100",   dot: "bg-amber-500"   },
};

/* ─── Sub-components ────────────────────────────────────────────────────────── */
function CategoryBadge({ category, color }: { category: string; color: string }) {
  const c = COLOR_MAP[color] || COLOR_MAP.blue;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${c.bg} ${c.text} ${c.border} border`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {category}
    </span>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <>
      <Script id="bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="blog-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ════════ HERO ════════ */}
        <section
          aria-label="Taxvio Tax & Compliance Blog"
          className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
        >
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.13) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex items-center gap-2 text-xs text-white/45">
                <li><Link href="/" className="hover:text-white/80 transition">Home</Link></li>
                <span className="text-white/25">›</span>
                <li className="text-white/75 font-medium">Blog</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <BookOpen size={12} className="text-sky-400" />
                Expert Articles · CA-Written · Updated Regularly
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
                GST, Income Tax &amp;
                <span className="block mt-2 text-sky-300">Compliance Blog</span>
              </h1>
              <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
                Expert guides, tax updates, compliance checklists, and due-date trackers — written by Taxvio's CA team to help Indian businesses stay compliant and tax-efficient.
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
                {[
                  { val: "24+", label: "Articles" },
                  { val: "4", label: "Categories" },
                  { val: "CA-Written", label: "Every post" },
                  { val: "Free", label: "Always" },
                ].map(({ val, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="font-extrabold text-white">{val}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ MAIN GRID ════════ */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              {/* ── LEFT: Posts ── */}
              <div>
                {/* Category Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {CATEGORIES.map(({ label, slug, count }) => (
                    <button key={slug}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                        ${slug === "all"
                          ? "bg-[#00416a] text-white shadow-md"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-[#00416a]/30 hover:text-[#00416a] hover:bg-blue-50"}`}>
                      {label}
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                        ${slug === "all" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                        {count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Featured Post */}
                <Link href={`/blog/${FEATURED_POST.slug}`}
                  className="group block mb-6 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  itemScope itemType="https://schema.org/BlogPosting">
                  {/* Featured image placeholder */}
                  <div className="relative h-52 bg-gradient-to-br from-[#00416a] to-[#0077b6] flex items-end p-6">
                    <div className="absolute inset-0 opacity-[0.06]"
                      style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                    <div className="absolute top-4 left-6">
                      <span className="inline-flex items-center gap-1 bg-white/20 border border-white/30 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                        ⭐ Featured Article
                      </span>
                    </div>
                    <h2 className="relative text-white text-xl md:text-2xl font-extrabold leading-snug max-w-2xl" itemProp="headline">
                      {FEATURED_POST.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <CategoryBadge category={FEATURED_POST.category} color={FEATURED_POST.categoryColor} />
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={11} /> {FEATURED_POST.readTime}
                      </span>
                      <span className="text-xs text-gray-400">{FEATURED_POST.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" itemProp="description">{FEATURED_POST.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {FEATURED_POST.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-medium bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Tag size={9} /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-[#00416a] text-sm font-bold group-hover:gap-3 transition-all">
                      Read Full Guide <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>

                {/* Post Grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {POSTS.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}
                      className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
                      itemScope itemType="https://schema.org/BlogPosting">

                      {/* Color top bar */}
                      <div className={`h-1.5 w-full bg-gradient-to-r
                        ${post.categoryColor === "emerald" ? "from-emerald-400 to-teal-500" :
                          post.categoryColor === "blue"    ? "from-blue-400 to-indigo-500" :
                          post.categoryColor === "violet"  ? "from-violet-400 to-purple-500" :
                          post.categoryColor === "orange"  ? "from-orange-400 to-amber-500" :
                                                             "from-amber-400 to-yellow-500"}`} />

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <CategoryBadge category={post.category} color={post.categoryColor} />
                          <span className="flex items-center gap-1 text-[11px] text-gray-400 shrink-0">
                            <Clock size={10} /> {post.readTime}
                          </span>
                        </div>

                        <h2 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors leading-snug mb-2 flex-1" itemProp="headline">
                          {post.title}
                        </h2>

                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4" itemProp="description">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] font-medium bg-gray-50 border border-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-[10px] text-gray-400">+{post.tags.length - 2}</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                          <span className="text-[11px] text-gray-400">{post.date}</span>
                          <span className="inline-flex items-center gap-1 text-[#00416a] text-xs font-bold group-hover:gap-2 transition-all">
                            Read <ArrowRight size={11} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-10 text-center">
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#00416a]/30 text-[#00416a] text-sm font-bold hover:bg-[#00416a] hover:text-white hover:border-[#00416a] active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    Load More Articles <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* ── RIGHT: Sidebar ── */}
              <aside className="space-y-6 lg:sticky lg:top-24">

                {/* Search */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-extrabold text-gray-800 text-sm mb-3 flex items-center gap-2">
                    <Search size={15} className="text-[#00416a]" /> Search Articles
                  </h3>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search GST, ITR, ROC..."
                      className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 focus:border-[#00416a] placeholder:text-gray-400 transition"
                    />
                    <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Due Dates Widget */}
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-[#00416a] to-[#0077b6] px-5 py-4">
                    <h3 className="text-white font-extrabold text-sm flex items-center gap-2">
                      <TrendingUp size={15} /> Upcoming Due Dates
                    </h3>
                    <p className="text-white/60 text-[11px] mt-0.5">Key compliance deadlines — 2025</p>
                  </div>
                  <div className="p-4 space-y-2">
                    {DUE_DATES.map(({ date, form, desc, color }) => {
                      const c = COLOR_MAP[color] || COLOR_MAP.blue;
                      return (
                        <div key={`${date}-${form}`}
                          className={`flex items-start gap-3 p-3 rounded-xl ${c.bg} border ${c.border}`}>
                          <div className="shrink-0 text-center">
                            <p className={`text-xs font-extrabold ${c.text} leading-none`}>{date.split(" ")[0]}</p>
                            <p className={`text-[10px] ${c.text} opacity-70`}>{date.split(" ")[1]}</p>
                          </div>
                          <div className="min-w-0">
                            <p className={`text-xs font-bold ${c.text}`}>{form}</p>
                            <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="px-4 pb-4">
                    <Link href="/contact"
                      className="block text-center text-xs font-bold text-[#00416a] py-2.5 rounded-xl border border-[#00416a]/20 hover:bg-blue-50 transition">
                      Get Filing Help →
                    </Link>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-extrabold text-gray-800 text-sm mb-4 flex items-center gap-2">
                    <Tag size={14} className="text-[#00416a]" /> Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "GST Registration", "GSTR-1", "GSTR-3B", "GSTR-9",
                      "ITR Filing", "Section 80C", "Form 16", "TDS Returns",
                      "Company Registration", "ITC Reconciliation", "GST Notice",
                      "New Tax Regime", "MSME", "E-Invoicing", "FSSAI",
                    ].map(tag => (
                      <span key={tag}
                        className="cursor-pointer inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:bg-blue-50 hover:border-[#00416a]/20 hover:text-[#00416a] transition-all">
                        <Tag size={9} className="shrink-0" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#00416a] to-[#002b45] rounded-2xl p-6 text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    <BookOpen size={18} className="text-sky-300" />
                  </div>
                  <h3 className="font-extrabold text-base leading-snug">
                    Need Expert Help with GST or Tax Filing?
                  </h3>
                  <p className="text-white/65 text-xs mt-2 leading-relaxed">
                    Our CA team handles everything — registration, return filing, notices, and compliance. Starting ₹499.
                  </p>
                  <div className="mt-5 space-y-2">
                    <Link href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-[#00416a] text-xs font-bold hover:bg-gray-50 active:scale-[0.97] transition-all">
                      Free Consultation <ArrowRight size={12} />
                    </Link>
                    <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20have%20a%20tax%20query."
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 active:scale-[0.97] transition-all">
                      💬 WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Quick Services */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-extrabold text-gray-800 text-sm mb-4">Quick Service Links</h3>
                  <div className="space-y-1">
                    {[
                      { label: "GST Registration — ₹1,499", href: "/serviceslist/gst/gst-registration" },
                      { label: "GST Return Filing — ₹499/mo", href: "/serviceslist/gst/gst-return" },
                      { label: "ITR Filing — from ₹499", href: "/serviceslist/income-tax/itr-salaried" },
                      { label: "Company Registration", href: "/serviceslist/roc/private-limited-formation" },
                      { label: "TDS Return Filing", href: "/serviceslist/income-tax/quarterly-tds" },
                    ].map(({ label, href }) => (
                      <Link key={label} href={href}
                        className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-blue-50 transition-all group">
                        <span>{label}</span>
                        <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* ════════ SEO CONTENT ════════ */}
        <section className="py-20 bg-white" aria-label="About Taxvio Tax Blog">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <div className="text-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                About This Blog
              </span>
            </div>

            <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
              <h2 className="text-2xl font-extrabold text-[#00416a]">
                Expert GST, Income Tax &amp; Compliance Guides for Indian Businesses
              </h2>
              <p>
                The Taxvio Blog is written by our in-house team of practising Chartered Accountants and compliance specialists to help Indian businesses, entrepreneurs, salaried employees, and professionals navigate the complex landscape of GST law, income tax regulations, corporate compliance under the Companies Act, TDS obligations, and FSSAI food licensing requirements. Every article is based on current law, official government circulars, and CBIC notifications — not generic internet content.
              </p>
              <p>
                Our <strong>GST guides</strong> cover the full compliance lifecycle — from eligibility for GST registration and the step-by-step GSTN registration process, to monthly GSTR-1 and GSTR-3B filing, ITC reconciliation using GSTR-2B, annual return filing (GSTR-9 and GSTR-9C), GST audit under Sections 65 and 66, e-invoicing and IRN generation, LUT filing for exporters, and how to respond to GST notices including ASMT-10 scrutiny notices and DRC-01 demand notices.
              </p>
              <p>
                Our <strong>income tax articles</strong> address ITR form selection (ITR-1 through ITR-7), how to maximise deductions under Chapter VIA (Sections 80C, 80D, 80G, 80E, and more), capital gains tax computation and reporting, advance tax calculation, TDS reconciliation using Form 26AS and AIS, how to respond to income tax notices under Sections 139(9), 143(1), 143(2), and 148, and the implications of key Finance Act amendments such as Section 43B(h) on MSME payments.
              </p>
              <p>
                For businesses at the registration stage, our <strong>company registration guides</strong> walk through the complete MCA portal process for Private Limited Company, LLP, OPC, and Section 8 company formation — including the SPICe+ integrated form, DIN and DSC applications, MOA and AOA drafting, and the post-incorporation compliance calendar. We also cover ROC annual filing obligations (AOC-4, MGT-7, Form 11, Form 8) and event-based filings such as director changes and capital increases.
              </p>
              <p>
                The <strong>due dates widget</strong> in the sidebar is updated regularly to reflect the latest GST return due dates, income tax advance tax instalments, TDS return deadlines, and ROC filing timelines — so your business never misses a statutory deadline. If you need expert help with any compliance matter, our CA team is available on WhatsApp and call — Monday to Saturday, 9 AM to 7 PM IST.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="py-16 bg-gradient-to-r from-[#00416a] to-[#002b45]"
          aria-label="Contact Taxvio for tax services">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Have a Tax Query?</h2>
              <p className="text-white/60 text-sm mt-1">Our CA team answers on WhatsApp — usually within minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20have%20a%20tax%20query."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 active:scale-[0.97] transition-all min-h-[52px]">
                💬 WhatsApp Us
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all min-h-[52px]">
                Free Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}
