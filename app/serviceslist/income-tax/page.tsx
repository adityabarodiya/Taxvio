import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Income Tax Filing, ITR & Compliance Services in India | Taxvio",
  description:
    "Complete income tax services including ITR filing for salaried, proprietor, firm, LLP, company & trust. Also covers TDS, TCS, tax audit, scrutiny, 12A, 80G & Form 15G/15H. Expert CA-supervised support in Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "Income Tax Filing India, ITR Filing Online, Income Tax Consultant Khatauli, TDS Return Filing, TCS Return, Income Tax Audit, Income Tax Scrutiny, 12A Registration, 80G Registration, Form 15G 15H, ITR Salaried, ITR Proprietor, ITR Firm LLP",
  openGraph: {
    title: "Income Tax Filing & Compliance Services | Taxvio",
    description:
      "End-to-end income tax services for individuals, businesses, firms, LLPs, companies and trusts. CA-supervised ITR filing, TDS/TCS returns, audit & scrutiny support.",
    type: "website",
  },
};

export default function IncomeTaxPillarPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <span className="text-white">Income Tax</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                🧾 Income Tax Filing & Compliance
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Complete Income Tax<br />
                <span className="text-[#7ecbf0]">Filing & Compliance</span><br />
                Services in India
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                Whether you are a salaried employee, self-employed professional, business owner, firm, LLP,
                company, or trust — every taxpayer in India has specific income tax obligations under the
                <strong className="text-white"> Income Tax Act, 1961</strong>. Taxvio provides
                end-to-end income tax filing, TDS/TCS return filing, audit support, scrutiny defence,
                and exemption registrations — all CA-supervised, accurate, and on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                >
                  Get Free Tax Consultation →
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                >
                  📞 Talk to a CA
                </Link>
              </div>
            </div>

            {/* quick facts card */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">Key Tax Facts</p>
              <ul className="space-y-4 text-sm text-gray-200">
                {[
                  ["📅", "ITR due date: July 31 each year"],
                  ["💸", "Late filing fee up to ₹5,000"],
                  ["🏢", "11 service categories covered"],
                  ["⚖️", "Governed by Income Tax Act, 1961"],
                  ["🔍", "Scrutiny notices handled end-to-end"],
                  ["✅", "CA-supervised & penalty-free filing"],
                ].map(([icon, text]) => (
                  <li key={text as string} className="flex items-start gap-3">
                    <span className="text-base">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-50 py-14 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "1000+", label: "Returns Filed Successfully", icon: "📊" },
            { number: "100%", label: "Accuracy & Compliance", icon: "✅" },
            { number: "7+ Years", label: "Tax Practice Experience", icon: "📅" },
            { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-2xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
          {[
            "✔ CA-Supervised All Filings",
            "✔ Zero Penalty Commitment",
            "✔ Data Confidentiality Assured",
            "✔ Timely Filing Guarantee",
          ].map((t) => (
            <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* INTRO */}
        <section id="what-is-income-tax">
          <SectionLabel text="Overview" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
            Income Tax in India — What Every Taxpayer Must Know
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                The <strong>Income Tax Act, 1961</strong> governs all direct tax obligations in India. Every individual,
                Hindu Undivided Family (HUF), firm, LLP, company, trust, or association of persons with taxable income
                is required to file an <strong>Income Tax Return (ITR)</strong> with the Income Tax Department each
                financial year. Beyond ITR filing, businesses and employers are required to deduct and deposit
                <strong> Tax Deducted at Source (TDS)</strong> and file quarterly TDS/TCS returns throughout the year.
              </p>
              <p>
                Non-compliance with income tax obligations — whether missing the ITR due date, failing to deduct TDS,
                or not responding to a scrutiny notice — attracts significant financial penalties, interest charges,
                and in serious cases, prosecution. The Income Tax Department has significantly strengthened its
                enforcement through the <strong>Annual Information Statement (AIS)</strong> and automated scrutiny
                mechanisms, making voluntary and accurate compliance more critical than ever before.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Income tax compliance is not one-size-fits-all. A <strong>salaried employee</strong> filing ITR-1
                has entirely different obligations compared to a <strong>proprietor</strong> filing ITR-3,
                a <strong>firm or LLP</strong> filing ITR-5, or a <strong>company or trust</strong> filing ITR-6 or
                ITR-7. Each entity type has specific income heads, deduction eligibilities, tax rates,
                audit thresholds, and compliance timelines that must be correctly applied.
              </p>
              <p>
                <strong>Taxvio</strong> provides comprehensive income tax services across all taxpayer categories —
                from basic salaried returns to complex corporate tax filings, TDS/TCS compliance, tax audit
                reports, scrutiny assessments, and exemption registrations under Sections 12A and 80G.
                Our CA-supervised process ensures every return is filed accurately, on time, and with maximum
                legitimate tax savings.
              </p>
            </div>
          </div>
        </section>

        {/* WHO NEEDS */}
        <section id="who-needs-income-tax">
          <SectionLabel text="Applicability" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
            Who Must File Income Tax Returns in India?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "👔", title: "Salaried Employees", desc: "Individuals earning salary income above the basic exemption limit must file ITR-1 or ITR-2 annually." },
              { icon: "🏪", title: "Proprietors & Self-Employed", desc: "Business owners, freelancers, doctors, and consultants file ITR-3 or ITR-4 declaring business income." },
              { icon: "🤝", title: "Partnership Firms", desc: "All registered and unregistered partnership firms must file ITR-5 regardless of profit or loss." },
              { icon: "🏢", title: "LLPs", desc: "Limited Liability Partnerships file ITR-5 and also undergo mandatory audit if turnover crosses ₹40 lakhs." },
              { icon: "🏭", title: "Private & Public Companies", desc: "All companies registered under the Companies Act must file ITR-6 each year, irrespective of income." },
              { icon: "🕌", title: "Trusts & NGOs", desc: "Charitable trusts, religious institutions, and Section 8 companies file ITR-7 and need 12A/80G registration for exemptions." },
              { icon: "👨‍👩‍👧", title: "HUF (Hindu Undivided Family)", desc: "HUFs with any taxable income are required to file separate income tax returns each financial year." },
              { icon: "🌍", title: "NRIs with Indian Income", desc: "Non-Resident Indians with income sourced from India — rental, interest, or business — must file ITR." },
              { icon: "💼", title: "High-Value Transaction Holders", desc: "Individuals making large deposits, investments, or property transactions may need to file even below the exemption limit." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition group">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="our-services">
          <SectionLabel text="What We Offer" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Complete Income Tax Services by Taxvio
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            From filing your first ITR to defending a tax scrutiny notice — Taxvio covers every stage
            of your income tax compliance lifecycle with expert precision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "👔",
                title: "ITR Filing — Salaried",
                link: "/serviceslist/income-tax/itr-salaried",
                tag: "Most Popular",
                desc: "ITR-1 and ITR-2 filing for salaried individuals. We maximize deductions under Sections 80C, 80D, HRA, and LTA to reduce your tax liability legally.",
              },
              {
                icon: "🏪",
                title: "ITR Filing — Proprietor",
                link: "/serviceslist/income-tax/itr-proprietor",
                tag: "Business Owners",
                desc: "ITR-3 and ITR-4 filing for sole proprietors and self-employed professionals. Covers business income, presumptive taxation, and profit & loss preparation.",
              },
              {
                icon: "🤝",
                title: "ITR Filing — Firm & LLP",
                link: "/serviceslist/income-tax/itr-firm-llp",
                tag: "Partnerships",
                desc: "ITR-5 filing for partnership firms and LLPs. Includes partner remuneration, interest on capital, and compliance with audit requirements under Section 44AB.",
              },
              {
                icon: "🕌",
                title: "ITR Filing — Trust & Company",
                link: "/serviceslist/income-tax/itr-trust-company",
                tag: "Entities",
                desc: "ITR-6 for companies and ITR-7 for trusts, NGOs, and Section 8 companies. We handle complex entity-level compliance including MAT calculations.",
              },
              {
                icon: "📋",
                title: "Quarterly TDS Return Filing",
                link: "/serviceslist/income-tax/quarterly-tds",
                tag: "Employer Compliance",
                desc: "Form 24Q, 26Q, and 27Q TDS return filing for employers, businesses, and individuals making TDS-applicable payments. Quarterly deadlines met without exception.",
              },
              {
                icon: "🧾",
                title: "Quarterly TCS Return Filing",
                link: "/serviceslist/income-tax/quarterly-tcs",
                tag: "Seller Compliance",
                desc: "Form 27EQ TCS return filing for sellers of specified goods and services. Covers TCS on sale of goods, alcohol, forest produce, and other notified categories.",
              },
              {
                icon: "🔍",
                title: "Income Tax Audit",
                link: "/serviceslist/income-tax/income-tax-audit",
                tag: "Section 44AB",
                desc: "Tax audit report preparation (Form 3CA/3CB/3CD) under Section 44AB for businesses and professionals crossing prescribed turnover thresholds.",
              },
              {
                icon: "⚖️",
                title: "Income Tax Scrutiny",
                link: "/serviceslist/income-tax/income-tax-scrutiny",
                tag: "Notice Defence",
                desc: "Expert representation and documentation support for income tax scrutiny notices under Sections 143(2) and 148. We handle the full assessment defence process.",
              },
              {
                icon: "🏛️",
                title: "12A Registration",
                link: "/serviceslist/income-tax/12a-application",
                tag: "NGO / Trust",
                desc: "Section 12A registration for trusts, societies, and Section 8 companies to claim income tax exemption on receipts used for charitable or religious purposes.",
              },
              {
                icon: "💝",
                title: "80G Registration",
                link: "/serviceslist/income-tax/80g-application",
                tag: "Donor Benefits",
                desc: "Section 80G registration enabling donors to claim deduction on their contributions to your NGO or trust. Essential for fundraising and institutional donations.",
              },
              {
                icon: "📄",
                title: "Form 15G / 15H Filing",
                link: "/serviceslist/income-tax/15g-15h",
                tag: "TDS Exemption",
                desc: "Form 15G (for individuals below 60) and Form 15H (for senior citizens) declaration filing to prevent TDS deduction on interest income below the taxable threshold.",
              },
            ].map((s) => (
              <div key={s.title} className="relative border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white flex flex-col">
                <span className="absolute top-4 right-4 text-xs bg-[#00416a]/10 text-[#00416a] font-semibold px-3 py-1 rounded-full">{s.tag}</span>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#00416a] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                <Link
                  href={s.link}
                  className="mt-5 inline-flex items-center gap-2 text-[#00416a] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ITR FORMS COMPARISON */}
        <section id="itr-forms">
          <SectionLabel text="ITR Form Guide" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Which ITR Form Should You File? Complete Guide
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Filing the wrong ITR form is a common mistake that triggers defective return notices from the
            Income Tax Department. Here is the correct form for each taxpayer category.
          </p>
          <div className="overflow-x-auto rounded-2xl border shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-[#00416a] text-white">
                <tr>
                  {["ITR Form", "Applicable For", "Key Income Sources", "Tax Audit Required"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["ITR-1 (Sahaj)", "Resident individuals", "Salary, one house property, other sources up to ₹50L", "No"],
                  ["ITR-2", "Individuals & HUF", "Capital gains, multiple properties, foreign income", "No"],
                  ["ITR-3", "Individuals & HUF", "Business or profession income (non-presumptive)", "If turnover > ₹1 Cr"],
                  ["ITR-4 (Sugam)", "Individuals, HUF, Firms", "Presumptive income under 44AD, 44ADA, 44AE", "No"],
                  ["ITR-5", "Firms, LLPs, AOP, BOI", "Business income, partner remuneration", "If turnover > ₹1 Cr"],
                  ["ITR-6", "Companies", "All income except exempted under Section 11", "Mandatory"],
                  ["ITR-7", "Trusts, NGOs, Political parties", "Charitable/religious income, Section 11 exemptions", "If income > ₹2.5L"],
                ].map(([form, applicable, sources, audit], i) => (
                  <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-bold text-[#00416a]">{form}</td>
                    <td className="px-5 py-4 text-gray-700">{applicable}</td>
                    <td className="px-5 py-4 text-gray-700">{sources}</td>
                    <td className="px-5 py-4 text-gray-700">{audit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* KEY DEADLINES */}
        <section id="tax-deadlines">
          <SectionLabel text="Important Deadlines" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Income Tax Compliance Deadlines You Must Not Miss
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Missing income tax deadlines triggers automatic penalties, interest charges, and in some cases,
            loss of carry-forward benefits. Taxvio tracks all deadlines and files proactively.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { deadline: "July 31", event: "ITR Filing (Non-Audit Cases)", penalty: "Up to ₹5,000 late fee", icon: "📅", color: "border-blue-400 bg-blue-50" },
              { deadline: "October 31", event: "ITR Filing (Audit Cases)", penalty: "Interest u/s 234A", icon: "📅", color: "border-indigo-400 bg-indigo-50" },
              { deadline: "Quarterly", event: "TDS / TCS Return Filing", penalty: "₹200/day late fee", icon: "🗓️", color: "border-yellow-400 bg-yellow-50" },
              { deadline: "Sept 30", event: "Tax Audit Report (Form 3CA/3CD)", penalty: "0.5% of turnover penalty", icon: "🔍", color: "border-orange-400 bg-orange-50" },
              { deadline: "Within 30 days", event: "Reply to Scrutiny Notice", penalty: "Ex-parte assessment", icon: "⚖️", color: "border-red-400 bg-red-50" },
              { deadline: "March 31", event: "Advance Tax Payment (Final)", penalty: "Interest u/s 234B & 234C", icon: "💰", color: "border-green-400 bg-green-50" },
            ].map((d) => (
              <div key={d.event} className={`border-l-4 ${d.color} rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{d.icon}</span>
                  <span className="text-lg font-extrabold text-[#00416a]">{d.deadline}</span>
                </div>
                <p className="font-semibold text-gray-800 mb-2">{d.event}</p>
                <p className="text-sm text-red-600 font-medium">⚠️ Penalty: {d.penalty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PENALTIES */}
        <section id="penalties" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12">
          <SectionLabel text="Compliance Risk" />
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            Penalties for Income Tax Non-Compliance
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            The Income Tax Department has automated penalty and interest systems. Non-compliance is detected
            quickly and results in immediate financial consequences beyond just paying the tax due.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { offence: "Late ITR filing (income up to ₹5L)", penalty: "₹1,000 late fee u/s 234F" },
              { offence: "Late ITR filing (income above ₹5L)", penalty: "₹5,000 late fee u/s 234F" },
              { offence: "Non-filing of TDS return", penalty: "₹200 per day u/s 234E" },
              { offence: "Tax Audit not conducted", penalty: "0.5% of turnover, max ₹1.5L" },
              { offence: "Concealment of income", penalty: "100%–300% of tax evaded" },
              { offence: "Non-response to scrutiny notice", penalty: "Best judgement assessment" },
            ].map((p) => (
              <div key={p.offence} className="bg-white border border-red-100 rounded-xl p-5">
                <p className="text-sm text-gray-700 mb-2">{p.offence}</p>
                <p className="font-bold text-red-600 text-base">{p.penalty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="our-process">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Taxvio's Income Tax Filing Process — Simple & Transparent
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Our structured process ensures accurate tax computation, maximum deductions, on-time filing,
            and zero compliance gaps for every client.
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "Initial Consultation & Taxpayer Category Assessment",
                  desc: "We begin with a free consultation to understand your income sources, business type, and financial profile. Based on this, we determine the correct ITR form, applicable tax regime (old vs new), and full list of compliance obligations for the financial year.",
                },
                {
                  step: "02",
                  title: "Document Collection & Income Computation",
                  desc: "Our team provides a tailored document checklist covering Form 16, bank statements, investment proofs, business accounts, TDS certificates, and any other relevant financial records. We then compute your total income, applicable deductions, and final tax liability.",
                },
                {
                  step: "03",
                  title: "Tax Planning & Deduction Optimisation",
                  desc: "Before filing, our CA team reviews all eligible deductions — Sections 80C, 80D, 80G, HRA, LTA, home loan interest, business expenses, and depreciation — to legally minimise your tax liability and maximise your refund, where applicable.",
                },
                {
                  step: "04",
                  title: "Accurate ITR Preparation & Client Review",
                  desc: "We prepare the complete ITR with all schedules, income heads, and supporting computations. A draft is shared with you for review and approval before any submission — ensuring complete transparency in what is being filed on your behalf.",
                },
                {
                  step: "05",
                  title: "E-Filing on Income Tax Portal & Verification",
                  desc: "The approved return is filed electronically on the official Income Tax e-filing portal with digital verification (Aadhaar OTP or EVC). Filing acknowledgement (ITR-V) is provided to you immediately upon successful submission.",
                },
                {
                  step: "06",
                  title: "Post-Filing Support & Refund Tracking",
                  desc: "After filing, we track your refund status, respond to any e-verification requests or defective return notices, assist with revised returns if needed, and provide ongoing advisory for the next financial year's tax planning.",
                },
              ].map((step, i) => (
                <div key={step.step} className="relative md:pl-16 flex gap-6 items-start">
                  <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                    <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TAXVIO */}
        <section id="why-taxvio">
          <SectionLabel text="Our Advantage" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Why Taxpayers Choose Taxvio for Income Tax Filing
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Over 1,000 returns filed. Zero penalties for timely clients. Here is what makes Taxvio different.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "🎓", title: "CA-Supervised Every Filing", desc: "All ITR filings, TDS returns, and audit reports are reviewed and supervised by our qualified Chartered Accountants — not just assistants or software." },
              { icon: "📉", title: "Maximum Legitimate Tax Savings", desc: "Our proactive deduction review identifies every applicable exemption and deduction your situation qualifies for, reducing your tax outflow legally." },
              { icon: "⏰", title: "Never Miss a Deadline", desc: "We maintain a compliance calendar for every client and initiate document collection well in advance — ensuring zero late filing fees or interest charges." },
              { icon: "🔒", title: "Complete Data Security", desc: "All income, financial, and personal data is handled with bank-grade confidentiality. We never share client information with third parties." },
              { icon: "📞", title: "Dedicated Relationship Manager", desc: "Every client gets a dedicated point of contact who handles all queries, provides status updates, and ensures personalised service." },
              { icon: "🌐", title: "All Taxpayer Categories Covered", desc: "From a first-time salaried filer to a complex multi-entity corporate group — Taxvio handles income tax for every type of taxpayer under one roof." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border bg-white hover:shadow-md transition">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#00416a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SEO */}
        <section id="cities-served">
          <SectionLabel text="Our Reach" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Income Tax Services Across India — Local Experts, National Reach
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Taxvio has a strong on-ground presence in <strong>Khatauli</strong> and <strong>Muzaffarnagar</strong>,
            serving individuals and businesses with income tax filing and compliance services for over 7 years.
            We also serve clients in <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>,
            <strong> Meerut</strong>, and <strong>Mumbai</strong>. Our CA team is well-versed in region-specific
            industries — sugarcane, textiles, trading, and manufacturing businesses common in Western UP — and
            provides tax advisory tailored to local business realities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"].map((city) => (
              <div key={city} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
                📍 {city}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <SectionLabel text="FAQs" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
            Frequently Asked Questions — Income Tax Filing
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Who is required to file an Income Tax Return in India?",
                a: "Any individual, HUF, firm, LLP, company, or trust whose gross total income exceeds the basic exemption limit (₹2.5 lakhs for individuals below 60 years) must file an ITR. Additionally, even individuals below this threshold must file if they have foreign assets, made high-value transactions, or wish to claim a refund on TDS deducted.",
              },
              {
                q: "What is the due date for filing income tax return?",
                a: "For non-audit cases (individuals, HUFs, proprietors without tax audit), the due date is July 31 of the assessment year. For audit cases (companies, firms requiring tax audit), the due date is October 31. Missing these dates attracts a late filing fee under Section 234F and interest under Section 234A.",
              },
              {
                q: "What is the difference between the old and new tax regime?",
                a: "The old tax regime allows claiming deductions like 80C (investments), 80D (health insurance), HRA, and home loan interest, resulting in lower taxable income. The new tax regime (default from FY 2023-24) offers lower slab rates but disallows most deductions. Taxvio evaluates both regimes and recommends the one that minimizes your actual tax outflow.",
              },
              {
                q: "What is TDS and who is required to deduct it?",
                a: "Tax Deducted at Source (TDS) is tax deducted at the point of payment for specified transactions — salary, rent, professional fees, contract payments, etc. Any employer, business, or individual making payments above prescribed thresholds must deduct TDS, deposit it with the government, and file quarterly TDS returns (Form 24Q, 26Q, 27Q).",
              },
              {
                q: "What happens if I receive an income tax scrutiny notice?",
                a: "A scrutiny notice under Section 143(2) means the Income Tax Department has selected your return for detailed examination. You must respond within the specified time with supporting documents for all income, deductions, and transactions claimed. Taxvio handles the complete scrutiny response process, compiling documentation and representing your case before the assessing officer.",
              },
              {
                q: "What are 12A and 80G registrations and who needs them?",
                a: "Section 12A registration allows trusts, NGOs, and Section 8 companies to claim income tax exemption on income used for charitable purposes. Section 80G registration enables donors to claim a deduction on their donations to your organisation. Both registrations are now mandatory through the online Form 10AB process and are handled end-to-end by Taxvio.",
              },
              {
                q: "What is Form 15G and Form 15H?",
                a: "Form 15G is a self-declaration filed by individuals below 60 years of age to prevent TDS deduction on interest income, provided their total income is below the taxable threshold. Form 15H is the equivalent declaration for senior citizens (above 60). These forms must be submitted to the bank or institution at the beginning of each financial year.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                  <span>{faq.q}</span>
                  <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">{faq.a}</div>
              </details>
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
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">File Before the Deadline</p>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  File Your Income Tax Return<br />Accurately & On Time
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Avoid penalties, interest, and scrutiny. Get your ITR filed by Taxvio's CA-supervised
                  team — trusted by 1,000+ taxpayers across India for accurate, on-time, maximum-refund filing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                >
                  📞 Call a CA Now
                </Link>
              </div>
            </div>
          </div>
        </section>

      </article>

      <Footar />

      {/* ── SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is required to file an Income Tax Return in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any individual, HUF, firm, LLP, company, or trust with gross total income exceeding the basic exemption limit must file an ITR. High-value transaction holders and refund claimants must also file.",
                },
              },
              {
                "@type": "Question",
                name: "What is the due date for filing income tax return?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "July 31 for non-audit cases and October 31 for audit cases. Missing these dates attracts late fees under Section 234F and interest under Section 234A.",
                },
              },
              {
                "@type": "Question",
                name: "What is TDS and who is required to deduct it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TDS is tax deducted at source on specified payments like salary, rent, and professional fees. Employers and businesses making such payments must deduct TDS and file quarterly returns.",
                },
              },
              {
                "@type": "Question",
                name: "What are 12A and 80G registrations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Section 12A allows trusts and NGOs to claim income tax exemption. Section 80G enables donors to claim deductions on donations. Both are obtained through the ITBA portal via Form 10AB.",
                },
              },
              {
                "@type": "Question",
                name: "What is Form 15G and Form 15H?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Form 15G prevents TDS on interest income for individuals below 60 years. Form 15H is the equivalent for senior citizens. Both are self-declarations submitted to banks at the start of each financial year.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Taxvio – Income Tax Filing & Compliance Services",
            description:
              "Complete income tax services including ITR filing, TDS/TCS returns, tax audit, scrutiny defence, 12A, 80G, and Form 15G/15H across India.",
            url: "https://taxvio.in/serviceslist/income-tax",
            areaServed: ["Khatauli", "Muzaffarnagar", "Noida", "Delhi", "Meerut", "Mumbai", "India"],
            serviceType: "Income Tax Filing & Compliance Services",
          }),
        }}
      />
    </main>
  );
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}