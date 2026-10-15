"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tax Planning and Optimization Services",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  },
  description:
    "Comprehensive tax planning services to minimize tax liability through legal investment strategies, deduction maximization under Section 80C/80D/80G, HRA optimization, capital gains planning, business expense structuring, and tax-efficient investment portfolio planning for individuals, professionals and businesses.",
  serviceType: "Tax Planning and Optimization",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "2999",
      maxPrice: "19999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is tax planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax planning is the strategic arrangement of your financial affairs to legally minimize income tax liability and maximize tax savings, within the framework of the Income Tax Act. It involves choosing investments, structuring expenses, and timing income to take advantage of deductions, exemptions, and concessions.",
      },
    },
    {
      "@type": "Question",
      name: "How does tax planning help me save money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax planning helps you legally reduce your tax burden by claiming all eligible deductions, exemptions, and credits; structuring investments tax-efficiently; timing income and expenses optimally; and making smart choices between the old and new tax regimes.",
      },
    },
    {
      "@type": "Question",
      name: "Is tax planning different from tax evasion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tax planning is completely legal and legitimate. It uses the provisions of the Income Tax Act to your benefit, such as deductions, exemptions, and concessions. Tax evasion is illegal and involves hiding income, claiming false deductions, or not paying taxes due. Tax planning is always within the boundaries of the law.",
      },
    },
    {
      "@type": "Question",
      name: "Who can benefit from tax planning services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everyone — salaried individuals, business owners, professionals, HNIs, investors, and senior citizens can benefit from tax planning. You can save lakhs of rupees over the years by optimizing your taxes strategically.",
      },
    },
  ],
};

export default function TaxPlanningClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* URGENCY BANNER */}
        <div
          className="bg-purple-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          💡 Tax Planning Season: Plan Now to Save Maximum Tax for FY 2024-25 —
          Don't Wait Until the Last Month
        </div>

        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist/income-tax"
                className="hover:text-white transition"
              >
                Income Tax
              </Link>
              <span>/</span>
              <span className="text-white">Tax Planning</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📈 Tax Planning & Optimization
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Tax Planning
                  <br />
                  <span className="text-[#7ecbf0]">& Optimization</span>
                  <br />
                  Services
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Pay only the tax you legally owe —{" "}
                  <strong className="text-white">No more, no less</strong>.
                  Taxvio provides comprehensive tax planning services to minimize
                  your tax liability through{" "}
                  <strong className="text-white">smart investment
                  strategies</strong>, deduction maximization under Section 80C,
                  80D, HRA optimization, capital gains planning and business
                  expense structuring. Let our CA experts plan your taxes
                  efficiently and save you thousands every year, legally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Plan My Taxes — ₹2,999 →
                  </Link>

                 
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 80C/80D Maximization",
                    "✅ HRA Optimization",
                    "✅ Capital Gains Planning",
                    "✅ Expense Structuring",
                  ].map((text) => (
                    <span
                      key={text}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Key Benefits
                </p>

                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["💸", "Save up to ₹1.5 lakh + under 80C"],
                    ["🏥", "Additional ₹50,000 under 80D"],
                    ["🏠", "Home loan interest deduction up to ₹2 lakh"],
                    ["📊", "Capital gains tax reduction strategies"],
                    ["🏢", "Business expense optimization"],
                    ["💰", "Tax-efficient investment portfolio"],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start gap-3">
                      <span>{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "15,000+", label: "Tax Plans Created", icon: "📈" },
              { number: "₹2,999", label: "Starting Fee", icon: "💰" },
              { number: "10+ yrs", label: "CA Expertise", icon: "🎓" },
              { number: "All India", label: "Service Coverage", icon: "🇮🇳" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {item.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BADGES */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ Legal Tax Saving",
              "✔ Personalized Plan",
              "✔ Yearly Tax Calendar",
              "✔ Investment Guidance",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* MAIN CONTENT */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHY TAX PLANNING */}
          <section id="why-tax-planning">
            <SectionLabel text="Why Tax Planning" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              Why Effective Tax Planning Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Tax is one of the biggest expenses for most individuals and
                  businesses. However, the Income Tax Act provides numerous
                  provisions to <strong>legally reduce your tax burden</strong>.
                  Without proper planning, you may be overpaying thousands — or
                  even lakhs — of rupees every year.
                </p>

                <p>
                  Effective tax planning is not just about investing in the right
                  instruments under Section 80C. It involves a{" "}
                  <strong>holistic approach</strong> that considers your income
                  structure, investment portfolio, expenses, family profile,
                  risk tolerance and financial goals. It also involves timing
                  income and expenses, choosing the right tax regime, structuring
                  business expenses, and planning for capital gains.
                </p>

                <p>
                  Moreover, tax planning should be done{" "}
                  <strong>at the beginning of the financial year</strong>, not in
                  March! Early planning allows you to take advantage of all
                  investment options, spread your investments wisely, and avoid
                  last-minute rush.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The Income Tax Act offers deductions, exemptions, rebates and
                  incentives for savings, investments, health insurance, home
                  loans, education, donations and more. A strategic tax plan
                  ensures you claim all eligible benefits without missing
                  anything.
                </p>

                <p>
                  For <strong>business owners</strong>, tax planning includes
                  choosing the right business structure (proprietorship, firm,
                  LLP, company), optimizing employee compensation, structuring
                  financial expenses, and utilizing deductible business expenses.
                </p>

                <p>
                  Taxvio's tax planning services are{" "}
                  <strong>comprehensive and personalized</strong>. Our CA experts
                  work with you to understand your financial situation, identify
                  every possible deduction and exemption, and create a customized
                  tax plan that aligns with your financial goals — saving you
                  money today and helping you build wealth for tomorrow.
                </p>
              </div>
            </div>
          </section>

          {/* KEY TAX SAVING AREAS */}
          <section id="tax-saving-areas">
            <SectionLabel text="Key Focus Areas" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Coverage Areas in Our Tax Planning Service
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💼",
                  title: "Section 80C / 80CCC / 80CCD",
                  desc: "Optimize investments in PPF, EPF, ELSS, NSC, LIC, home loan principal, tuition fees, NPS and other eligible instruments up to ₹1.5 lakh.",
                },
                {
                  icon: "🏥",
                  title: "Health Insurance (80D)",
                  desc: "Plan health insurance premiums for self, family and parents to claim up to ₹75,000 deduction (including preventive health checkups).",
                },
                {
                  icon: "🏠",
                  title: "Home Loan Deductions",
                  desc: "Optimize interest deduction under Section 24(b) up to ₹2 lakh, principal repayment under 80C, and first-home buyer additional deduction under 80EE.",
                },
                {
                  icon: "💰",
                  title: "HRA Optimization",
                  desc: "Maximize House Rent Allowance exemption using landlord rent receipts, living in metro vs non-metro, and optimizing with rent paid vs HRA received.",
                },
                {
                  icon: "📊",
                  title: "Capital Gains Planning",
                  desc: "Plan sale of property, stocks and mutual funds to minimize long-term and short-term capital gains tax. Use exemptions under 54, 54EC, 54F, 54B etc., and set-off of losses.",
                },
                {
                  icon: "🏢",
                  title: "Business Expense Structuring",
                  desc: "Identify all deductible business expenses and structure them to reduce taxable income legally, including rent, salaries, depreciation, repairs, and professional fees.",
                },
                {
                  icon: "🎓",
                  title: "Education Loan & Deductions",
                  desc: "Claim deduction under Section 80E for interest on education loans with no upper limit, and other education-related tax benefits.",
                },
                {
                  icon: "❤️",
                  title: "Charitable Donations (80G)",
                  desc: "Plan donations to eligible charitable institutions to claim deductions of 50% or 100% of donation amount, subject to qualifying limits.",
                },
                {
                  icon: "🌱",
                  title: "NPS Additional Deduction",
                  desc: "Claim additional deduction of ₹50,000 under Section 80CCD(1B) for NPS investments, over and above the ₹1.5 lakh 80C limit.",
                },
                {
                  icon: "🔍",
                  title: "Other Deductions (80TTA, 80TTB)",
                  desc: "Optimize interest income on savings account (₹10,000) and fixed deposits for senior citizens (₹50,000 under 80TTB).",
                },
                {
                  icon: "📈",
                  title: "Old vs New Regime Analysis",
                  desc: "Perform detailed comparison between old and new tax regimes to choose the beneficial one based on your deductions and exemptions.",
                },
                {
                  icon: "🔄",
                  title: "Tax Efficient Investments",
                  desc: "Recommend tax-efficient investment products that also meet your wealth goals — mutual funds, bonds, insurance, real estate, gold ETFs and more.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* TAX PLANNING FOR DIFFERENT PROFILES */}
          <section id="who-needs-tax-planning">
            <SectionLabel text="Who Benefits" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Tax Planning for Different Taxpayer Profiles
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💼",
                  title: "Salaried Employees",
                  desc: "Maximize HRA, standard deduction, home loan benefits, and Section 80C investments while optimizing new vs old regime.",
                },
                {
                  icon: "🏢",
                  title: "Business Owners",
                  desc: "Optimize business expenses, choose the right business structure, plan capital expenditure for depreciation, and structure owner compensation.",
                },
                {
                  icon: "👨‍💼",
                  title: "Professionals & Freelancers",
                  desc: "Claim all eligible professional expenses, manage cash flow to spread income, and use presumptive taxation provisions (44AD/44ADA) effectively.",
                },
                {
                  icon: "💰",
                  title: "High Net Worth Individuals",
                  desc: "Advanced planning involving multiple income sources, capital gains, foreign investments, family tax planning, and wealth management.",
                },
                {
                  icon: "👵",
                  title: "Senior Citizens",
                  desc: "Maximize Section 80TTB deduction, health insurance benefits, and choose senior citizen savings schemes for tax free income.",
                },
                {
                  icon: "🌐",
                  title: "NRIs & OCI",
                  desc: "Plan NRI tax residency, double taxation relief, investment exemptions, and tax optimization for India-sourced income.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* TAX PLANNING PROCESS */}
          <section id="our-process">
            <SectionLabel text="Our Process" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Tax Planning Process
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl">
              We follow a systematic, personalized approach to create a tax plan
              tailored to your specific financial situation and goals.
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />

              <div className="space-y-10">
                {[
                  {
                    step: "01",
                    title: "Financial Data Collection",
                    desc: "We gather your income details, previous ITR, investment portfolio, salary breakup, expenses, loans, and financial goals to understand your complete tax profile.",
                  },
                  {
                    step: "02",
                    title: "Tax Liability Assessment",
                    desc: "We compute your current tax liability under both old and new regimes, identify wherever you are overpaying, and pinpoint all missed deductions and exemptions.",
                  },
                  {
                    step: "03",
                    title: "Investment & Deduction Planning",
                    desc: "Based on your financial goals and risk appetite, we recommend optimal investments across PPF, ELSS, NPS, insurance, home loan prepayment, and health insurance to maximize deductions.",
                  },
                  {
                    step: "04",
                    title: "Expense & Structure Optimization",
                    desc: "We review your business expenses, HRA, home loan interest, capital gains, donations, education expenses, and other eligible items to restructure them for maximum tax efficiency.",
                  },
                  {
                    step: "05",
                    title: "Regime Selection Analysis",
                    desc: "We perform a detailed comparison between old and new tax regimes to determine the most beneficial one for you, considering your deductions and income structure.",
                  },
                  {
                    step: "06",
                    title: "Tax Plan Implementation & Calendar",
                    desc: "We provide you with a comprehensive tax plan document including specific investment recommendations, expense structuring, quarterly deadlines and action items for the year.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="relative md:pl-16 flex gap-6 items-start"
                  >
                    <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm z-10 border-4 border-white shadow-md">
                      {index + 1}
                    </div>

                    <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                      <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">
                        Step {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BENEFITS */}
          <section
            id="benefits"
            className="bg-green-50 border border-green-100 rounded-3xl p-8 md:p-12"
          >
            <SectionLabel text="Benefits" />

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Benefits of Professional Tax Planning
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "💸",
                  title: "Maximum Tax Savings",
                  desc: "Save thousands legally by claiming every deduction and exemption you're entitled to.",
                },
                {
                  icon: "📊",
                  title: "Wealth Optimization",
                  desc: "Grow your wealth by investing existing tax savings into high-growth instruments aligned with your goals.",
                },
                {
                  icon: "⏱️",
                  title: "Time Savings & Peace of Mind",
                  desc: "No more last-minute March investments or stressing over which tax-saving option to choose.",
                },
                {
                  icon: "🛡️",
                  title: "Compliance & Accuracy",
                  desc: "Reduce risk of errors in ITR filing, notices, or penalties due to incorrect tax computation.",
                },
                {
                  icon: "📅",
                  title: "Year-Round Strategy",
                  desc: "Tax planning is not a one-time event. We give you a yearly calendar and help you stay on track.",
                },
                {
                  icon: "👨‍💼",
                  title: "Expert Guidance",
                  desc: "CA professionals stay updated on tax law changes and provide advice based on latest provisions.",
                },
                {
                  icon: "🏦",
                  title: "Better Financial Decisions",
                  desc: "Make informed choices on investments, loans, property, insurance and business expenses.",
                },
                {
                  icon: "🎯",
                  title: "Goal Alignment",
                  desc: "Your tax plan is woven into your financial plan for retirement, education, home purchase and wealth creation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-green-100 rounded-2xl p-6 hover:shadow-md transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-green-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="Required Information" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Tax Planning
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Income & Tax Documents
                </p>

                <ul className="space-y-3">
                  {[
                    "Previous year ITR",
                    "Form 26AS / Annual Information Statement (AIS)",
                    "Salary slips and Form 16 (if salaried)",
                    "Business income statement (if business)",
                    "Capital gains working (stocks, property, mutual funds)",
                    "Interest income certificates",
                    "Any other income proofs",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-blue-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-blue-50 text-blue-700">
                  Investment & Expense Details
                </p>

                <ul className="space-y-3">
                  {[
                    "Current investment portfolio (PPF, ELSS, NPS, LIC, FDs, etc.)",
                    "Health insurance policy details and premium receipts",
                    "Home loan statement or interest certificate",
                    "Rent agreement and rent receipts (for HRA)",
                    "Charitable donation details",
                    "Education loan certificates",
                    "Financial goals & investment preferences",
                    "Risk tolerance & liquidity needs",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-blue-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FEE CALCULATOR */}
          <FeeCalculator />

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Satisfied Clients
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ravi Kumar",
                  location: "Bangalore, Karnataka",
                  text: "Taxvio's tax planning plan helped me save ₹85,000 more in taxes than last year, just by optimizing my 80C investments and choosing the right tax regime. Worth every rupee!",
                },
                {
                  name: "Sneha Patel",
                  location: "Ahmedabad, Gujarat",
                  text: "As a freelancer, I never knew about the expenses I could claim. Taxvio structured my business expenses beautifully, and I paid significantly less tax. Great professional team.",
                },
                {
                  name: "Amit & Pooja Sharma",
                  location: "Delhi",
                  text: "Our combined tax liability was very high. Taxvio built a comprehensive tax plan for our family, including home loan, HRA, and investments. We saved over ₹1.5 lakh in taxes this year!",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>

                  <p className="font-bold text-[#00416a]">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NATIONWIDE SEO */}
          <section id="cities-served">
            <SectionLabel text="Nationwide Service" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Tax Planning Services Across India
            </h2>

            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio provides professional tax planning and optimization services
              across all major cities and states in India — helping individuals
              and businesses save taxes legally and plan their finances better.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Mumbai",
                "Delhi",
                "Bangalore",
                "Chennai",
                "Kolkata",
                "Hyderabad",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Jaipur",
                "Lucknow",
                "Kanpur",
                "Nagpur",
                "Indore",
                "Thane",
                "Bhopal",
                "Visakhapatnam",
                "Patna",
                "Vadodara",
                "Ghaziabad",
                "Ludhiana",
                "Agra",
                "Nashik",
                "Faridabad",
                "Meerut",
                "Rajkot",
                "Varanasi",
                "Srinagar",
                "Aurangabad",
                "Dhanbad",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-3 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition"
                >
                  📍 {city}
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 text-sm text-center">
              + All other cities and towns across India through online support
            </p>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Explore More" />

            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related Income Tax Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "ITR Filing — Salary",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "Income tax return filing for salaried individuals.",
                },
                {
                  title: "Form 26AS Analysis",
                  icon: "📊",
                  link: "/serviceslist/income-tax/form-26as",
                  desc: "Tax credit verification and TDS reconciliation.",
                },
                {
                  title: "Tax Appeal Filing",
                  icon: "⚖️",
                  link: "/serviceslist/income-tax/tax-appeal-filing",
                  desc: "CIT(A), ITAT and High Court appeals.",
                },
                {
                  title: "Income Tax Refund",
                  icon: "💰",
                  link: "/serviceslist/income-tax/income-tax-refund",
                  desc: "Refund tracking and expediting services.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Plan Smart, Save More
                  </p>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Start Your Tax Planning Today
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    Stop overpaying taxes. Let our CA experts create a personalized
                    tax plan that maximizes your savings today and builds your wealth
                    tomorrow. Comprehensive, legal and tailored just for you.
                    Starting ₹2,999.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Plan My Taxes — ₹2,999
                  </Link>

                  
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />
      </main>
    </>
  );
}

/* ─────────────────────────────────────────────
   FEE CALCULATOR
───────────────────────────────────────────── */

function FeeCalculator() {
  const [selected, setSelected] = useState("");
  const [fee, setFee] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  const services = [
    {
      value: "individual",
      label: "Salaried Individual (Basic Plan)",
      fee: 2999,
      description:
        "Tax planning for individuals with salary income — HRA, 80C, 80D, regime selection, basic deductions.",
    },
    {
      value: "professional",
      label: "Freelancer/Professional Plan",
      fee: 3999,
      description:
        "Tax planning for freelancers, consultants and professionals — business expense optimization, presumptive taxation, 80C/80D.",
    },
    {
      value: "business",
      label: "Business Owner Plan",
      fee: 5999,
      description:
        "For proprietors, partnerships and small businesses — expense structuring, depreciation planning, tax-efficient ownership",
    },
    {
      value: "family",
      label: "Family Tax Plan",
      fee: 4999,
      description:
        "Combined planning for individuals and their family — HRA, home loan, investments, education deductions.",
    },
    {
      value: "hni",
      label: "High Net Worth (HNI) Plan",
      fee: 9999,
      description:
        "Advanced planning for high-income individuals — capital gains planning, multi-income sources, wealth structuring.",
    },
    {
      value: "nri",
      label: "NRI Tax Plan",
      fee: 6999,
      description:
        "Tax planning for NRIs and OCIs — residency status, double taxation relief, India-sourced income optimization.",
    },
    {
      value: "multi-year",
      label: "Multi-Year Tax Planning",
      fee: 14999,
      description:
        "Comprehensive long-term tax planning covering 2-5 years, goal-based and integrates with financial planning.",
    },
    {
      value: "complete",
      label: "Complete Wealth Management & Tax Plan",
      fee: 19999,
      description:
        "Holistic plan integrating tax planning with investments, retirement, estate planning and insurance.",
    },
  ];

  return (
    <section id="fee-calculator">
      <SectionLabel text="Fee Estimator" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Estimate Your Tax Planning Fee
      </h2>

      <p className="text-gray-600 mb-8 max-w-xl">
        Select the plan that matches your profile for an estimated professional
        fee.
      </p>

      <div className="bg-gray-50 border rounded-3xl p-8">
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {services.map((service) => (
            <button
              key={service.value}
              onClick={() => {
                setSelected(service.value);
                setFee(service.fee);
                setDescription(service.description);
              }}
              className={`text-left p-4 rounded-xl border transition text-sm ${
                selected === service.value
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#00416a]"
              }`}
            >
              <span className="font-semibold block mb-1">
                {service.label}
              </span>
              <span
                className={`text-xs ${
                  selected === service.value
                    ? "text-gray-200"
                    : "text-gray-500"
                }`}
              >
                ₹{service.fee.toLocaleString("en-IN")} onwards
              </span>
            </button>
          ))}
        </div>

        {fee !== null ? (
          <div className="border-t pt-5" aria-live="polite">
            <p className="text-lg font-semibold text-[#00416a]">
              Estimated Professional Fee:{" "}
              <span className="text-3xl font-extrabold">
                ₹{fee.toLocaleString("en-IN")}
              </span>{" "}
              onwards
            </p>

            <p className="text-sm text-gray-500 mt-1">{description}</p>

            <p className="text-xs text-gray-400 mt-3">
              * Fees depend on number of income sources, complexity of
              investments, capital gains analysis, family composition and extent
              of restructuring required. GST applicable.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-block bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition"
            >
              Get Started — Contact Us →
            </Link>
          </div>
        ) : (
          <p className="text-gray-400 text-sm">
            Select a plan above to see an estimated fee.
          </p>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much tax can I save with tax planning?",
      a: "The amount depends on your income, deductions you are already claiming, and the optimization strategies. Most individuals can save anywhere between ₹20,000 to ₹2 lakh per year by comprehensive tax planning. Tax planning also helps avoid penalties and interest for non-compliance.",
    },
    {
      q: "Is tax planning the same as tax evasion?",
      a: "No. Tax planning is absolutely legal and uses the provisions of the Income Tax Act to minimize your tax burden. Tax evasion involves hiding income or claiming false deductions, which is illegal and punishable. Our tax planning is 100% compliant with all laws.",
    },
    {
      q: "Can tax planning help me choose between old and new tax regime?",
      a: "Absolutely. This is one of the most critical decisions. Our CA experts perform a detailed analysis of your income, deductions, and exemptions to determine which regime will result in lower tax liability. We also help you optimize deductions if you choose the old regime.",
    },
    {
      q: "Do I need tax planning if I am salaried?",
      a: "Yes. Even salaried employees often miss out on HRA benefits, home loan deduction, additional NPS contribution, medical expenses reimbursement, and other deductions. A tax plan can help you legally reduce your tax and potentially increase your take-home pay.",
    },
    {
      q: "When is the best time to do tax planning?",
      a: "Ideally at the beginning of the financial year (April-May) to take advantage of the full year's investments and span your financial decisions. However, it's never too late - we can help you during any part of the year to maximize what you can still claim.",
    },
    {
      q: "Will you help me invest in the recommended schemes?",
      a: "We provide recommendations and can guide you on how to invest, but we do not execute investments directly. We'll explain the options, complete the documentation with you, and ensure your investments align with your tax plan.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />

      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Tax Planning
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border rounded-2xl overflow-hidden"
            open={open === index}
            onToggle={(event) => {
              const isOpen = (event.target as HTMLDetailsElement).open;
              setOpen(isOpen ? index : null);
            }}
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{faq.q}</span>

              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>

            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHARED COMPONENT
───────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}