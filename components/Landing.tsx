"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust this import path to match where serviceCategories.ts actually lives in your repo
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path to match where you save InquiryFormButton.tsx

export default function Landing() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <Hero />
      <InquiryFormButton />

      <StatsBar />
      <IntroSection />
      <ServicesOverview />
      <PopularServices />
      <FounderNote />
      <TrustBadges />
      <ProcessSection />
      <ComplianceGuide />
      <WhoWeServe />
      <ComparisonSection />
      <DeadlinesSection />
      <Testimonials />
      <CoverageSection />
      <FAQSection />
      <FinalCTA />

      
    </main>
  );
}

/* ══════════════════════ HERO ══════════════════════ */

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          🏢 CA-Led GST, Tax & Compliance Platform
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Compliance Shouldn't Need<br />Three Different Consultants
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mb-10">
          GST, Income Tax, ROC and FSSAI — one CA-supervised team, transparent pricing,
          and a single point of contact from registration to your next annual filing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openInquiryForm()}
            className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
          >
            Get a Free Consultation →
          </button>
          <Link
            href="/serviceslist"
            className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
          >
            Browse All Services
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/70">
          {["✅ CA-Supervised Filings", "✅ Transparent Pricing", "✅ Pan-India Service", "✅ On-Time Deadline Tracking"].map((t) => (
            <span key={t} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ INTRO / ABOUT ══════════════════════ */

function IntroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="About Taxvio" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
        A Single CA-Led Team for Every Compliance Need
      </h2>
      <div className="grid md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
        <div className="space-y-4">
          <p>
            Running a business in India means juggling more regulatory touchpoints than most
            founders expect. A new venture typically needs company or LLP incorporation through
            the ROC, a GST registration before the first invoice goes out, an FSSAI license if
            food is involved in any way, and — once revenue starts flowing — income tax
            planning, advance tax payments, and annual return filing. Each of these usually
            means a different consultant, a different fee structure, and a different person to
            chase when a deadline is approaching.
          </p>
          <p>
            Taxvio was built to collapse that complexity into one relationship. Instead of
            juggling a GST consultant, a separate CA for income tax, a company secretary for ROC
            filings, and a food-license agent, you work with one CA-supervised team that already
            has your documents, your history, and your compliance calendar on file. That means
            fewer repeated conversations, fewer documents re-submitted from scratch, and nobody
            falling through the cracks between two consultants who don't talk to each other.
          </p>
        </div>
        <div className="space-y-4">
          <p>
            We work with proprietors filing their first ITR, growing partnerships and LLPs
            navigating ROC annual compliance, private limited companies handling statutory
            audits and board resolutions, and food businesses — from cloud kitchens to
            manufacturers — that need FSSAI licensing sorted correctly the first time. Every
            filing that leaves our team is reviewed by a practicing Chartered Accountant before
            submission, not just assembled from a template and sent off.
          </p>
          <p>
            Pricing is quoted upfront, before any engagement begins, so there are no
            surprise add-ons once the work is underway. And because deadlines in Indian
            compliance — GST returns, ROC annual filings, income tax audit due dates — carry
            real financial penalties when missed, our process is built around a compliance
            calendar that tracks what's due for your business well before it becomes urgent.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ STATS ══════════════════════ */

function StatsBar() {
  const stats = [
    { number: "5,000+", label: "Businesses Served", icon: "🏢" },
    { number: "50+", label: "Cities Covered Pan-India", icon: "📍" },
    { number: "4", label: "Compliance Verticals", icon: "📋" },
    { number: "100%", label: "CA-Reviewed Filings", icon: "👨‍💼" },
  ];
  return (
    <section className="bg-gray-50 py-14 border-b">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">{s.icon}</div>
            <p className="text-2xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
            <p className="text-gray-500 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ SERVICES OVERVIEW ══════════════════════ */

function ServicesOverview() {
  const lines = [
    { title: "GST Services", icon: "🧾", link: "/serviceslist/gst", desc: "New registration, monthly and quarterly return filing, refund applications, LUT for exporters, GST audits, notice replies, and compliance built specifically for e-commerce sellers and freelancers billing foreign clients." },
    { title: "Income Tax", icon: "📊", link: "/serviceslist/income-tax", desc: "ITR filing for salaried individuals, proprietors, firms, LLPs, trusts and companies, Section 44AB tax audits, quarterly TDS/TCS returns, income tax notice handling, and specialized NRI taxation support." },
    { title: "ROC / Company Law", icon: "🏢", link: "/serviceslist/roc", desc: "Private limited, LLP, OPC and Section 8 company incorporation, annual ROC compliance filings, director appointments and resignations, registered office changes, company closures and entity conversions." },
    { title: "FSSAI Licensing", icon: "🍽️", link: "/serviceslist/fssai", desc: "Basic, State and Central FSSAI food licenses for restaurants, cloud kitchens and manufacturers, license renewals before expiry, modifications for changed business details, and annual return filing." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="What We Handle" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
        One Firm for Every Compliance Need
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
        Most compliance firms specialize in one area and refer everything else elsewhere.
        Taxvio's team covers all four major compliance verticals a growing Indian business
        typically needs — GST, Income Tax, Registrar of Companies filings, and FSSAI food
        licensing — so the same team that registered your company can also handle its first
        GST return, and the same people who filed last year's ITR already know your
        business when ROC's annual compliance deadline comes around.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {lines.map((l) => (
          <Link key={l.title} href={l.link} className="block bg-white border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group">
            <div className="text-3xl mb-3">{l.icon}</div>
            <h3 className="font-bold text-[#00416a] mb-2">{l.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{l.desc}</p>
            <span className="text-sm text-[#00416a] font-semibold group-hover:underline">Explore Services →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ POPULAR SERVICES ══════════════════════ */

function PopularServices() {
  // Hand-picked high-intent services, pulled live from serviceCategories by slug
  // so titles/links/SEO data never drift out of sync with the rest of the site.
  const picks: { categorySlug: string; serviceSlug: string }[] = [
    { categorySlug: "gst", serviceSlug: "gst-registration" },
    { categorySlug: "income-tax", serviceSlug: "itr-proprietor" },
    { categorySlug: "roc", serviceSlug: "private-limited-formation" },
    { categorySlug: "fssai", serviceSlug: "fssai-registration" },
    { categorySlug: "income-tax", serviceSlug: "income-tax-audit" },
    { categorySlug: "roc", serviceSlug: "llp-formation" },
  ];

  const resolved = picks
    .map(({ categorySlug, serviceSlug }) => {
      const category = serviceCategories.find((c) => c.slug === categorySlug);
      const service = category?.services.find((s) => s.slug === serviceSlug);
      return service && category ? { ...service, categorySlug: category.slug } : null;
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Popular Right Now" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
          Start With a Service, Not a Guess
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          If you already know what you need, these are the services businesses ask us about
          most — from a first GST registration to incorporating a private limited company.
          Each one links to a full breakdown of the process, documents required, and fees, or
          you can tap "Enquire" to have a CA call you back about that specific service directly.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resolved.map((s) => (
            <div key={s.slug} className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex flex-col">
              <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-5 flex-1">{s.shortDescription}</p>
              <div className="flex items-center gap-3">
                <Link
                  href={`/serviceslist/${s.categorySlug}/${s.slug}`}
                  className="text-sm font-semibold text-[#00416a] hover:underline"
                >
                  Learn More →
                </Link>
                <button
                  onClick={() => openInquiryForm(s.title)}
                  className="ml-auto text-sm font-semibold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ FOUNDER NOTE ══════════════════════ */

function FounderNote() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-gray-50 border rounded-3xl p-8 md:p-12">
        <SectionLabel text="Why Taxvio Exists" />
        <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start mt-2">
          <div className="w-16 h-16 rounded-full bg-[#00416a] text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
            A
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
              "I started Taxvio because I kept hearing the same frustration from business
              owners — compliance felt scattered, confusing, and expensive to coordinate
              across different consultants. I wanted to build a platform where someone could
              come for any FSSAI, GST, Income Tax, or ROC need and get a clear process, honest
              pricing, and real professional support behind it — not just a form to fill out."
            </p>
            <p className="font-bold text-[#00416a]">Aditya</p>
            <p className="text-sm text-gray-500">Founder, Taxvio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ TRUST BADGES ══════════════════════ */

function TrustBadges() {
  const items = [
    { icon: "👨‍💼", title: "CA-Supervised Filings", desc: "Every return, registration and audit report is reviewed by a practicing Chartered Accountant before submission — not just assembled from a template and sent off without a second look." },
    { icon: "💰", title: "Transparent Pricing", desc: "Upfront quotes before any engagement begins, so you know exactly what you're paying for. No surprise add-ons once the paperwork is already underway." },
    { icon: "📋", title: "One Simple Enquiry Form", desc: "No app downloads, no account setup, no separate logins for each service — tell us what you need once in a single form and a CA calls you back." },
    { icon: "🇮🇳", title: "Pan-India Coverage", desc: "Headquartered in Khatauli, Muzaffarnagar, with clients across Delhi NCR, Meerut, Mumbai and every Indian state served fully online where an in-person visit isn't needed." },
    { icon: "⏱️", title: "On-Time Filing Focus", desc: "Deadline tracking built into our process, so your GST returns, ROC annual filings and income tax audit due dates never slip past the date that triggers a penalty." },
    { icon: "🔒", title: "Confidential by Default", desc: "Your financial documents, PAN, Aadhaar and business records are used only to deliver the service you've requested — never shared or sold to third parties." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="Why Taxvio" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Built to Be Your Long-Term Compliance Partner
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div key={item.title} className="p-6 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition">
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ PROCESS ══════════════════════ */

function ProcessSection() {
  const steps = [
    { step: "01", title: "Share Your Requirement", desc: "Fill the enquiry form with what you need — GST registration, an ITR filing, a ROC compliance matter, or an FSSAI license — and your preferred state and contact number." },
    { step: "02", title: "Free Consultation Call", desc: "A CA from our team reviews your case, explains what's actually required for your situation, and calls you back with a clear quote, usually within a few business hours." },
    { step: "03", title: "Documentation & Filing", desc: "Once you confirm, share the required documents over email or a shared upload link — our team prepares, cross-checks and files everything on your behalf with the correct authority." },
    { step: "04", title: "Confirmation & Ongoing Support", desc: "You receive acknowledgement copies and filing receipts for your records, and we keep track of your business's future compliance deadlines so the next one doesn't catch you off guard." },
  ];
  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="How It Works" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-12">
          From Enquiry to Filed — In Four Steps
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="bg-white border rounded-2xl p-6 hover:shadow-md transition relative">
              <span className="text-4xl font-extrabold text-[#00416a]/10 absolute top-4 right-5">{s.step}</span>
              <h3 className="text-lg font-bold text-[#00416a] mb-2 relative">{s.title}</h3>
              <p className="text-sm text-gray-600 relative">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ COMPLIANCE GUIDE ══════════════════════ */

function ComplianceGuide() {
  const topics = [
    {
      title: "GST Compliance in India",
      icon: "🧾",
      body: "Any business with turnover above the GST threshold — or one that wants to claim input tax credit and look credible to larger buyers — needs GST registration before raising its first tax invoice. Once registered, monthly or quarterly GSTR-1 and GSTR-3B returns become mandatory regardless of whether the business made any sales that period, and missing them accrues late fees and interest from day one. Businesses crossing higher turnover thresholds also face an annual GSTR-9 reconciliation and, in some cases, a GST audit. E-commerce sellers and freelancers billing clients abroad have their own additional layer of compliance — TCS credit matching for marketplace sellers, and LUT filing for exporters who want to invoice without charging IGST.",
    },
    {
      title: "Income Tax & ITR Filing",
      icon: "📊",
      body: "Every individual and entity earning above the basic exemption limit is required to file an income tax return each year, and the form required — ITR-1 through ITR-7 — depends on the nature and source of income. Proprietors and professionals with turnover or receipts above the Section 44AB threshold additionally need a tax audit conducted by a practicing Chartered Accountant, with a hard deadline that, if missed, triggers a penalty of up to ₹1.5 lakh. Businesses deducting tax at source on salaries, contractor payments or rent must also file quarterly TDS returns and issue Form 16 or 16A certificates to the people they deducted from.",
    },
    {
      title: "ROC & Company Law Compliance",
      icon: "🏢",
      body: "Incorporating a private limited company, LLP, OPC or Section 8 company is only the starting point — every registered entity then carries ongoing obligations to the Registrar of Companies regardless of whether it did any business that year. These include annual filings such as AOC-4 and MGT-7 for companies or Form 11 and Form 8 for LLPs, director KYC through DIR-3 KYC, auditor appointment filings, and event-based filings whenever a director changes, the registered office moves, or share capital is altered. Skipping these doesn't just risk penalties — prolonged non-compliance can lead to the company being struck off the register entirely, which then requires a far more expensive restoration process to reverse.",
    },
    {
      title: "FSSAI Food Licensing",
      icon: "🍽️",
      body: "Any business that manufactures, stores, transports, distributes or sells food in India — from a home-based tiffin service to a full-scale manufacturing unit — needs an FSSAI license or registration, with the category (Basic, State, or Central) determined by annual turnover and the scale of operations. Getting the wrong category, or missing the renewal window before an existing license expires, can halt operations until it's corrected. License holders above the Basic tier also need to file an FSSAI annual return each year, and any change to the business — a new product line, a change of address — requires a formal modification filing rather than being updated informally.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="Compliance Basics" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Understanding Business Compliance in India
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
        If you're new to running a registered business, here's a plain-language overview of
        what each compliance area actually involves — and why leaving any one of them unmanaged
        tends to get expensive.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((t) => (
          <div key={t.title} className="bg-gray-50 border rounded-2xl p-6 hover:bg-white hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{t.icon}</span>
              <h3 className="font-bold text-[#00416a]">{t.title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ WHO WE SERVE ══════════════════════ */

function WhoWeServe() {
  const audiences = [
    { icon: "🏪", title: "Retailers & Traders", desc: "From a single shop to a multi-branch trading business, with GST return filing, input tax credit reconciliation, and income tax support built around cash-and-credit sales cycles." },
    { icon: "🏭", title: "Manufacturers", desc: "GST compliance across multiple states, job work ITC-04 filings, e-way bill management, and tax audits that account for inventory valuation and depreciation on plant and machinery." },
    { icon: "💻", title: "Freelancers & Consultants", desc: "GST registration and LUT filing for billing foreign clients without IGST, SAC code mapping, and ITR filing that correctly claims deductions on laptops, software and home office expenses." },
    { icon: "🛒", title: "E-Commerce Sellers", desc: "Amazon, Flipkart, Meesho and D2C sellers get marketplace settlement reconciliation, GST TCS credit matching, and GSTR-8 compliance handled alongside their regular monthly returns." },
    { icon: "🍴", title: "Restaurants & Food Businesses", desc: "FSSAI licensing paired with GST composition scheme advisory and Section 9(5) compliance for businesses listed on Zomato or Swiggy, so food-specific and tax compliance aren't handled by two separate people." },
    { icon: "🚀", title: "Startups & New Companies", desc: "Private limited, LLP or OPC incorporation followed immediately by GST registration, PAN/TAN application, and a compliance calendar set up from day one instead of being figured out after the first missed deadline." },
  ];
  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Who We Serve" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
          Built for the Way Different Businesses Actually Operate
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Compliance needs look different for a trading shop than they do for a software
          freelancer or a cloud kitchen. Rather than offering one generic package, our team
          tailors the filings and advisory to how your specific business actually makes money.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((a) => (
            <div key={a.title} className="bg-white border rounded-2xl p-6 hover:shadow-md transition">
              <div className="text-3xl mb-3">{a.icon}</div>
              <p className="font-semibold text-[#00416a] mb-1">{a.title}</p>
              <p className="text-sm text-gray-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ COMPARISON ══════════════════════ */

function ComparisonSection() {
  const rows = [
    { label: "Response time", diy: "You figure it out alone", localCA: "Days, often by appointment only", taxvio: "Usually within a few business hours" },
    { label: "Pricing clarity", diy: "Free, but mistakes cost penalties", localCA: "Often quoted verbally, can shift later", taxvio: "Fixed quote upfront, in writing" },
    { label: "Services covered", diy: "Whatever you can learn yourself", localCA: "Usually one specialty (GST or ITR, rarely both)", taxvio: "GST, Income Tax, ROC and FSSAI under one team" },
    { label: "Deadline tracking", diy: "Entirely on you to remember", localCA: "Varies by individual practitioner", taxvio: "Built into our process for every client" },
    { label: "Review before filing", diy: "No second set of eyes", localCA: "Depends on the individual's workload", taxvio: "CA-reviewed before every submission" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="How We Compare" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        DIY Filing vs. a Local CA vs. Taxvio
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
        Filing your own GST returns or hiring a local Chartered Accountant both work for some
        businesses — here's an honest look at the trade-offs, and where a CA-led platform like
        Taxvio tends to fit in between the two.
      </p>
      <div className="overflow-x-auto rounded-2xl border shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-[#00416a] text-white">
            <tr>
              {["", "Doing It Yourself", "A Local CA", "Taxvio"].map((h) => (
                <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-4 font-semibold text-gray-800">{r.label}</td>
                <td className="px-5 py-4 text-gray-600">{r.diy}</td>
                <td className="px-5 py-4 text-gray-600">{r.localCA}</td>
                <td className="px-5 py-4 font-medium text-[#00416a]">{r.taxvio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ══════════════════════ KEY DEADLINES ══════════════════════ */

function DeadlinesSection() {
  const deadlines = [
    { date: "11th / 13th / 20th of every month", item: "GSTR-1, IFF and GSTR-3B", desc: "Monthly or quarterly GST return filing, depending on your scheme and turnover slab." },
    { date: "30th September*", item: "Income Tax Audit Report", desc: "Form 3CA/3CB and 3CD for taxpayers subject to Section 44AB audit, for the previous financial year." },
    { date: "31st October*", item: "ITR for Audit Cases", desc: "Income tax return filing for taxpayers whose accounts required a tax audit." },
    { date: "30th May", item: "ROC Form DPT-3", desc: "Annual return of deposits and outstanding loans for companies, as of 31st March." },
    { date: "On or before AGM + 30 days", item: "ROC Form AOC-4 & MGT-7", desc: "Annual financial statements and annual return filing with the Registrar of Companies." },
    { date: "Varies by license validity", item: "FSSAI License Renewal", desc: "Must be filed before expiry — typically 1 to 5 years from the date of issue, depending on the license type." },
  ];
  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Plan Ahead" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
          Key Compliance Deadlines to Keep On Your Radar
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          These are the recurring deadlines that catch businesses off guard most often. Dates
          marked with an asterisk are sometimes extended by the CBDT — our team tracks the
          official notifications so your filing date is always current, not just the statutory
          default.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {deadlines.map((d) => (
            <div key={d.item} className="bg-white border rounded-2xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-28 text-xs font-bold text-[#00416a] uppercase tracking-wide pt-1">{d.date}</div>
              <div>
                <p className="font-semibold text-gray-800 text-sm mb-1">{d.item}</p>
                <p className="text-sm text-gray-600">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ TESTIMONIALS ══════════════════════ */

function Testimonials() {
  const reviews = [
    { name: "Priya Enterprises", location: "Meerut", text: "We filled the form expecting a slow reply like every other consultant website, and got a callback the same afternoon instead. GST registration was done within days, with no back-and-forth confusion about which documents we'd already sent." },
    { name: "Verma Traders", location: "Muzaffarnagar", text: "We've used three different consultants before Taxvio, and every single one added some charge we weren't told about upfront. This is the first time pricing was clear from the first call, with nothing added once the work was underway." },
    { name: "Singh & Associates", location: "Ghaziabad", text: "Our ROC annual filing and income tax return used to go to two different people who never coordinated with each other. Having the same team handle both this year saved us a lot of repeated explaining and chasing." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="Client Stories" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Trusted by Businesses Across India
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="border rounded-2xl p-6 hover:shadow-lg transition bg-white">
            <div className="flex mb-3">
              {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">"{r.text}"</p>
            <p className="font-bold text-[#00416a]">{r.name}</p>
            <p className="text-sm text-gray-500">{r.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ COVERAGE ══════════════════════ */

function CoverageSection() {
  const cities = ["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"];
  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Our Reach" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
          Serving Businesses Across India
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
          Headquartered in <strong>Khatauli, Muzaffarnagar, UP</strong>, with dedicated client
          coverage across <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
          {" "}<strong>Ghaziabad</strong>, and <strong>Mumbai</strong> — and full compliance support
          online for every state and union territory in India.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <div key={city} className="bg-white border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
              📍 {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ FAQ ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "What services does Taxvio offer?", a: "GST registration and returns, Income Tax filing and audits, ROC/company law compliance, and FSSAI food licensing — all under one CA-led team, so you don't need separate consultants for each." },
    { q: "How quickly will I get a response?", a: "Most enquiries are responded to within a few business hours, Monday to Saturday. Fill the enquiry form and our team will call you back." },
    { q: "Is the initial consultation really free?", a: "Yes. The first consultation call to understand your requirement and give you a clear quote is completely free, with no obligation to proceed." },
    { q: "Do you serve businesses outside Uttar Pradesh?", a: "Yes. While we're headquartered in Khatauli, Muzaffarnagar, our services are delivered fully online to clients across every Indian state." },
    { q: "Is my information kept confidential?", a: "Yes. Your personal and financial details are used only to respond to your enquiry and deliver the service you request — never shared or sold to third parties." },
    { q: "I already have a CA — can Taxvio just handle one specific filing?", a: "Yes. Plenty of our clients come to us for a single service, like an FSSAI license or a one-off ROC filing, without switching their entire compliance relationship. There's no requirement to move everything over at once." },
    { q: "What happens if I miss a GST or ROC deadline before reaching out?", a: "Tell us the situation honestly in the enquiry form. Most late filings can still be completed with applicable late fees — the sooner it's addressed, the less interest and penalty accumulates, so reaching out immediately helps even after a deadline has passed." },
    { q: "Do you only work with companies, or also with proprietors and individuals?", a: "Both. A large share of our clients are individual proprietors and professionals filing ITR or registering for GST for the first time — you don't need to be an incorporated company to work with us." },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Common Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group border rounded-2xl overflow-hidden bg-white"
            open={open === i}
            onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}>
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ FINAL CTA ══════════════════════ */

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Ready to Get Your Compliance Sorted?
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tell us what you need — GST, Income Tax, ROC or FSSAI — and a CA from our team
              will call you back with a clear plan and honest pricing.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => openInquiryForm()}
              className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
            >
              Get a Free Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ HELPERS ══════════════════════ */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}