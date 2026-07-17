import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

// ─── SEO Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Income from Salary – Meaning, Tax & Calculation FY 2025-26",
  description:
    "Learn how income from salary is taxed in India. Understand salary components, deductions under Section 16, HRA, perquisites, old vs new tax regime & ITR filing.",
  alternates: {
    canonical: "https://taxvio.in/guides/income-from-salary",
  },
  openGraph: {
    title: "Income from Salary – Meaning, Taxability & Calculation FY 2025-26",
    description:
      "Complete guide on salary income taxation in India. Covers components, deductions, exemptions, old vs new regime & tax saving tips for salaried employees.",
    url: "https://taxvio.in/guides/income-from-salary",
    siteName: "Taxvio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income from Salary – Tax Guide FY 2025-26 | Taxvio",
    description:
      "Everything salaried employees must know about salary taxation — components, deductions, exemptions, regime comparison & ITR filing. Read on Taxvio.",
  },
};

// ─── Schema Data ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Income from Salary – Meaning, Taxability, Calculation, Deductions & Examples (FY 2025-26)",
  description:
    "A comprehensive guide on income from salary covering components, taxability, deductions under Section 16, regime comparison, and tax saving strategies.",
  author: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://taxvio.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Taxvio",
    url: "https://taxvio.in",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://taxvio.in/guides/income-from-salary",
  },
  datePublished: "2025-01-01",
  dateModified: "2025-06-01",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://taxvio.in/guides" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Income from Salary",
      item: "https://taxvio.in/guides/income-from-salary",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is income from salary under the Income Tax Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Income from salary refers to any remuneration received by an individual from their employer in exchange for services rendered. It includes basic salary, allowances, perquisites, bonuses, commissions, and retirement benefits as defined under Section 17 of the Income Tax Act, 1961.",
      },
    },
    {
      "@type": "Question",
      name: "Is basic salary fully taxable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, basic salary is fully taxable. It forms the foundation of your salary structure and is added to your gross total income without any exemption.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard deduction for salaried employees in FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For FY 2025-26, the standard deduction under Section 16(ia) is ₹75,000 for salaried individuals under the new tax regime and ₹50,000 under the old tax regime.",
      },
    },
    {
      "@type": "Question",
      name: "Which ITR form should salaried employees use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salaried employees should file ITR-1 (Sahaj) if their total income is up to ₹50 lakh and income is from salary, one house property, and other sources. For income above ₹50 lakh or multiple properties, ITR-2 is applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Is HRA fully exempt from tax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, HRA is not fully exempt. The exempt portion is the least of: actual HRA received, 50% of salary (metro) or 40% (non-metro), and actual rent paid minus 10% of salary. The balance is taxable.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between CTC, gross salary, and in-hand salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CTC (Cost to Company) is the total annual expenditure by the employer including all benefits. Gross Salary is CTC minus employer contributions to PF and gratuity. In-hand salary is gross salary minus income tax (TDS), professional tax, and employee PF contribution.",
      },
    },
    {
      "@type": "Question",
      name: "Are perquisites taxable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most perquisites are taxable. Examples include rent-free accommodation, car facility, interest-free loans above ₹20,000, and ESOPs. Some perquisites like medical reimbursement up to ₹15,000 and laptop provided for official use are tax-free.",
      },
    },
    {
      "@type": "Question",
      name: "What is Section 17 of the Income Tax Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 17 defines 'salary' for income tax purposes. It includes wages, annuity, pension, gratuity, fees, commissions, perquisites, profits in lieu of salary, advance salary, and leave encashment as part of taxable salary.",
      },
    },
    {
      "@type": "Question",
      name: "What deductions are available under Section 16?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 16 allows three deductions: (1) Standard Deduction of ₹75,000 (new regime) or ₹50,000 (old regime), (2) Professional Tax paid by the employee, and (3) Entertainment Allowance for government employees only.",
      },
    },
    {
      "@type": "Question",
      name: "Is Dearness Allowance taxable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Dearness Allowance (DA) is fully taxable for most employees. However, DA that forms part of retirement benefits calculation is considered 'salary' for HRA and gratuity calculations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I claim both HRA and home loan interest deductions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can claim both HRA exemption and home loan interest deduction under Section 24(b) simultaneously, provided your rented house and owned house are in different cities, or there are valid reasons for not living in the owned property.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 16 and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 16 is a TDS certificate issued by your employer showing details of salary paid and tax deducted during the financial year. It is essential for filing your ITR and serves as proof of income for loan applications.",
      },
    },
    {
      "@type": "Question",
      name: "Is leave encashment taxable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leave encashment received during service is fully taxable. However, leave encashment received at the time of retirement is exempt up to ₹25 lakh (for non-government employees) under Section 10(10AA).",
      },
    },
    {
      "@type": "Question",
      name: "Which tax regime is better for salaried employees in FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The new tax regime is better if your deductions are less than ₹3.75 lakh. The old regime benefits those with significant deductions like 80C (₹1.5L), 80D, HRA, and home loan interest. Compare both before deciding.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum tax-free salary in FY 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the new tax regime, income up to ₹12 lakh is effectively tax-free due to the rebate under Section 87A (for income up to ₹12 lakh) plus the standard deduction of ₹75,000, making income up to ₹12.75 lakh tax-free for salaried employees.",
      },
    },
  ],
};

export default function IncomefromSalaryPage() {
  return (
    <>
      {/* ─── Schema Scripts ─────────────────────────────────────────────── */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-gray-800">

        {/* ─── Breadcrumb ─────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-4xl mx-auto px-6 pt-6 pb-2 text-sm text-gray-500"
        >
          <ol className="flex flex-wrap gap-1 items-center">
            <li><Link href="/" className="hover:text-[#00416a] transition">Home</Link></li>
            <li className="mx-1 text-gray-300">/</li>
            <li><Link href="/guides" className="hover:text-[#00416a] transition">Guides</Link></li>
            <li className="mx-1 text-gray-300">/</li>
            <li className="text-[#00416a] font-medium">Income from Salary</li>
          </ol>
        </nav>

        {/* ─── Article ────────────────────────────────────────────────────── */}
        <article className="max-w-4xl mx-auto px-6 py-10">

          {/* ── Quick Meta ── */}
          <div className="flex flex-wrap gap-3 mb-6 text-xs text-gray-500">
            <span className="bg-blue-50 text-[#00416a] px-3 py-1 rounded-full font-medium">FY 2025-26</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Updated: June 2025</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">By Taxvio CA Team</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">~18 min read</span>
          </div>

          {/* ── H1 ── */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#00416a] leading-tight mb-6">
            Income from Salary – Meaning, Taxability, Calculation, Deductions &amp; Examples (FY 2025-26)
          </h1>

          {/* ── Introduction ── */}
          <div className="bg-blue-50 border-l-4 border-[#00416a] rounded-xl p-5 mb-8 text-sm leading-relaxed text-gray-700">
            <p className="font-semibold text-[#00416a] mb-2">Quick Summary</p>
            <p>
              <strong>Income from salary</strong> is one of the five heads of income under the Income Tax Act, 1961. If you work for an employer and receive a regular pay cheque, almost everything you earn — including allowances, bonuses, and certain employer-provided benefits — falls under this head. Understanding how your salary income is calculated, what is exempt, and how to reduce your tax liability legally can save you thousands of rupees every year. This guide covers everything from the basic definition to a step-by-step salary tax calculation for FY 2025-26.
            </p>
          </div>

          {/* ── Table of Contents ── */}
          <nav aria-label="Table of Contents" className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
            <h2 className="text-base font-bold text-[#00416a] mb-4">Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              {[
                ["#what-is-income-from-salary", "What is Income from Salary?"],
                ["#when-is-salary-taxable", "When is Salary Income Taxable?"],
                ["#section-17-definition", "Section 17 – Salary Definition"],
                ["#components-of-salary", "Components of Salary"],
                ["#taxable-vs-exempt", "Taxable vs Exempt Salary Components"],
                ["#section-16-deductions", "Deductions under Section 16"],
                ["#gross-vs-taxable-salary", "Gross Salary vs Taxable Salary"],
                ["#ctc-gross-inhand", "CTC vs Gross Salary vs In-Hand Salary"],
                ["#salary-calculation-example", "Salary Calculation Example"],
                ["#old-vs-new-regime", "Old vs New Tax Regime for Salary"],
                ["#tax-saving-tips", "Tax Saving Tips for Salaried Employees"],
                ["#common-mistakes", "Common Mistakes While Filing Salary Income"],
                ["#itr-form", "Which ITR Form to Use?"],
                ["#documents-required", "Documents Required"],
                ["#faqs", "Frequently Asked Questions"],
                ["#conclusion", "Conclusion & CTA"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#00416a] hover:underline transition">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 1: WHAT IS INCOME FROM SALARY
          ══════════════════════════════════════════════════════════════════ */}
          <section id="what-is-income-from-salary" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              What is Income from Salary?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In simple terms, income from salary is the total remuneration you receive from your employer against the services you provide. Under the Income Tax Act, 1961, &quot;Salaries&quot; is one of five heads of income — the others being house property, business or profession, capital gains, and other sources.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes salary income unique is that it is only taxable when there is a clear employer-employee relationship. Payments received for independent services or contracts do not fall under this head.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Meaning under Income Tax Act</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Income Tax Act does not give a single narrow definition of salary. Instead, it is broadly defined under <strong>Section 17(1)</strong> to include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-2">
              <li>Wages</li>
              <li>Annuity or pension</li>
              <li>Gratuity</li>
              <li>Fees, commissions, perquisites, and profits in lieu of salary</li>
              <li>Advance salary</li>
              <li>Leave encashment during service</li>
              <li>Contributions made by the employer to a recognised provident fund in excess of the prescribed limit</li>
              <li>Interest credited to a recognised provident fund in excess of the notified rate</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This definition is deliberately wide so that no form of employment compensation escapes tax.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 2: WHEN IS SALARY TAXABLE
          ══════════════════════════════════════════════════════════════════ */}
          <section id="when-is-salary-taxable" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              When is Salary Income Taxable?
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">Employer-Employee Relationship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Salary is taxable only when two conditions are met. First, there must be an employer-employee relationship — meaning the payer has control over how, when, and where the work is done. Second, payment must be received as consideration for services rendered.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 mb-6 text-sm text-gray-700">
              <p><strong>⚠ Important:</strong> Salary from a former employer (e.g., arrears) and salary paid in advance are both taxable in the year they are received, not the year they relate to — unless relief under <strong>Section 89</strong> is claimed.</p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">Section 15 of Income Tax Act</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Section 15</strong> lays down when salary income is charged to tax. Salary is taxable on a <em>due basis</em> (when it becomes due) or a <em>receipt basis</em> (when actually received), whichever is earlier. This means even if your employer has not paid your January salary, it is taxable in January because it became due in that month.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3" id="section-17-definition">
              Section 17 – Salary Definition
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Section 17 breaks down the definition of salary into three sub-sections:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Sub-section</th>
                    <th className="px-4 py-3 text-left font-semibold">What It Covers</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Section 17(1)", "Core salary — wages, pension, gratuity, leave encashment, advance salary, annuity, fees, commission"],
                    ["Section 17(2)", "Perquisites — non-cash benefits provided by employer such as accommodation, car, club membership"],
                    ["Section 17(3)", "Profits in lieu of salary — compensation for termination, payment from unrecognised provident fund, keyman insurance policy"],
                  ].map(([sec, desc], i) => (
                    <tr key={sec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-[#00416a]">{sec}</td>
                      <td className="px-4 py-3 text-gray-700">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 3: COMPONENTS OF SALARY
          ══════════════════════════════════════════════════════════════════ */}
          <section id="components-of-salary" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Components of Salary – Explained
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A salary structure in India typically contains several components. Each component has its own tax treatment. Here is what you need to know:
            </p>

            <div className="space-y-6">

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">1. Basic Salary</h3>
                <p className="text-gray-700 text-sm leading-relaxed">The fixed core pay before any allowances or benefits. It is <strong>100% taxable</strong>. Basic salary forms the base for calculating HRA, PF contributions, and gratuity. Typically 40–50% of CTC.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">2. Dearness Allowance (DA)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">DA is paid to compensate employees for the rising cost of living. It is <strong>fully taxable</strong>. DA forms part of salary for HRA, gratuity, and PF calculation purposes.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">3. House Rent Allowance (HRA)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">HRA is provided to help employees meet rental expenses. It is <strong>partially exempt</strong> under Section 10(13A) — only for those living in rented accommodation. If you live in your own house, HRA is fully taxable. <Link href="/guides/hra-exemption" className="text-[#00416a] underline hover:text-blue-800">See our HRA Exemption Guide →</Link></p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">4. Leave Travel Allowance (LTA)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">LTA covers travel costs for you and your family within India. It is <strong>exempt twice in a block of 4 years</strong> (current block: 2022–2025) subject to actual travel. International travel is not covered. Available only under the old tax regime.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">5. Bonus &amp; Commission</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Performance bonuses, annual bonuses, and sales commissions are <strong>fully taxable</strong> as salary income in the year of receipt.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">6. Special Allowances</h3>
                <p className="text-gray-700 text-sm leading-relaxed">These include city compensatory allowance, transport allowance, children education allowance (partially exempt at ₹100/month per child, max 2 children), and others. Most special allowances are <strong>taxable unless specifically exempt</strong> under Section 10(14).</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">7. Perquisites</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Perquisites are non-cash benefits — such as a company car, rent-free accommodation, or interest-free loans. They are valued as per rules in Rule 3 of the Income Tax Rules and added to your taxable salary.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">8. Pension</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Commuted pension (lump sum) received by government employees is <strong>fully exempt</strong>. For private sector employees, one-third is exempt. Uncommuted pension (regular monthly pension) is <strong>fully taxable</strong>.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">9. Advance Salary</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Taxable in the year of receipt. Section 89 relief can be claimed if advance salary pushes you into a higher bracket in the year of receipt.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">10. Arrears of Salary</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Arrears received in the current year but relating to past years are taxable in the year of receipt. Claim Section 89 relief to spread the tax burden across the relevant years.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">11. Gratuity</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Gratuity at retirement is exempt up to <strong>₹20 lakh</strong> for employees covered under the Payment of Gratuity Act. For others, exemption is computed under a formula. For government employees, it is fully exempt.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">12. Leave Encashment</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Leave encashment during service is fully taxable. At retirement, it is exempt up to <strong>₹25 lakh</strong> for non-government employees under Section 10(10AA).</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">13. Provident Fund (PF)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Employee contribution to EPF is eligible for deduction under Section 80C. Employer&apos;s PF contribution exceeding <strong>12% of salary</strong> (basic + DA) is taxable. Interest credited above <strong>8.5%</strong> or on employee contributions exceeding ₹2.5 lakh per year is taxable from FY 2021-22 onwards.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">14. ESOPs (Employee Stock Option Plans)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">ESOPs are taxable at two stages. First, as a perquisite when you exercise the option (difference between fair market value and exercise price). Second, as capital gains when you sell the shares.</p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 4: TAXABLE VS EXEMPT
          ══════════════════════════════════════════════════════════════════ */}
          <section id="taxable-vs-exempt" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Salary Components: Taxable vs Exempt
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Component</th>
                    <th className="px-4 py-3 text-left font-semibold">Taxability</th>
                    <th className="px-4 py-3 text-left font-semibold">Conditions / Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Basic Salary", "Fully Taxable", "No exemption"],
                    ["DA", "Fully Taxable", "No exemption"],
                    ["HRA", "Partially Exempt", "Section 10(13A) — least of three conditions"],
                    ["LTA", "Partially Exempt", "Twice in 4-year block, actual travel within India"],
                    ["Bonus / Commission", "Fully Taxable", "No exemption"],
                    ["Children Education Allowance", "Partially Exempt", "₹100/month per child, max 2 children"],
                    ["Children Hostel Allowance", "Partially Exempt", "₹300/month per child, max 2 children"],
                    ["Transport Allowance (Disabled)", "Exempt", "₹3,200/month for specially abled employees"],
                    ["Medical Reimbursement (Perquisite)", "Exempt", "Up to ₹15,000/year (old regime only)"],
                    ["Gratuity", "Partially Exempt", "Up to ₹20 lakh at retirement"],
                    ["Leave Encashment at Retirement", "Partially Exempt", "Up to ₹25 lakh for private sector"],
                    ["Provident Fund (EPF)", "Partially Exempt", "Employee contribution: 80C; excess employer contribution taxable"],
                    ["Commuted Pension", "Partially/Fully Exempt", "Full exemption for govt. employees; 1/3rd for private"],
                    ["VRS Compensation", "Exempt", "Up to ₹5 lakh under Section 10(10C)"],
                    ["Laptop / Computer for official use", "Exempt", "No monetary limit"],
                  ].map(([comp, tax, cond], i) => (
                    <tr key={comp} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{comp}</td>
                      <td className={`px-4 py-3 font-semibold ${tax === "Fully Taxable" ? "text-red-600" : tax === "Exempt" ? "text-green-600" : "text-yellow-600"}`}>{tax}</td>
                      <td className="px-4 py-3 text-gray-600">{cond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 5: SECTION 16 DEDUCTIONS
          ══════════════════════════════════════════════════════════════════ */}
          <section id="section-16-deductions" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Deductions under Section 16 – Reducing Your Taxable Salary
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              After computing gross salary, the Income Tax Act allows certain deductions under Section 16 before arriving at your net taxable salary. These deductions are straightforward and available to all salaried individuals.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">1. Standard Deduction — Section 16(ia)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The standard deduction is a flat deduction available to all salaried employees without the need for any proof or documentation. For <strong>FY 2025-26</strong>:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-600 mb-1">New Tax Regime</p>
                <p className="text-3xl font-extrabold text-[#00416a]">₹75,000</p>
                <p className="text-xs text-gray-500 mt-1">Increased from ₹50,000 in Budget 2024</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center">
                <p className="text-sm text-gray-600 mb-1">Old Tax Regime</p>
                <p className="text-3xl font-extrabold text-gray-700">₹50,000</p>
                <p className="text-xs text-gray-500 mt-1">Unchanged</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">2. Professional Tax — Section 16(iii)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Professional tax is a state-level tax deducted by your employer and deposited with the state government. The maximum professional tax is <strong>₹2,500 per year</strong>. The entire amount deducted is allowed as a deduction from your gross salary.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-3">3. Entertainment Allowance — Section 16(ii)</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              This deduction is available <strong>only to government employees</strong>. The deduction is the least of:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 ml-2 text-sm">
              <li>₹5,000</li>
              <li>20% of basic salary</li>
              <li>Actual entertainment allowance received</li>
            </ul>
            <p className="text-gray-700 text-sm">Private sector employees do not get this deduction.</p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 6: GROSS vs TAXABLE
          ══════════════════════════════════════════════════════════════════ */}
          <section id="gross-vs-taxable-salary" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Gross Salary vs Taxable Salary — What&apos;s the Difference?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              People often confuse these two terms. Here is the key distinction:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Gross Salary</span>
                  <span className="text-gray-600">All salary components before any exemptions</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-red-600">( – ) Exempt Allowances</span>
                  <span className="text-gray-600">HRA, LTA, etc. as applicable</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-700">= Net Salary</span>
                  <span className="text-gray-600">After exemptions</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-red-600">( – ) Section 16 Deductions</span>
                  <span className="text-gray-600">Standard deduction + Professional tax</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between bg-[#00416a] text-white px-4 py-2 rounded-xl">
                  <span className="font-bold">= Taxable Salary</span>
                  <span className="font-bold">Amount on which tax is computed</span>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 7: CTC vs GROSS vs IN-HAND
          ══════════════════════════════════════════════════════════════════ */}
          <section id="ctc-gross-inhand" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              CTC vs Gross Salary vs In-Hand Salary
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These three terms are frequently misunderstood — especially by those starting their first job. Here is a clear breakdown:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Term</th>
                    <th className="px-4 py-3 text-left font-semibold">What it Includes</th>
                    <th className="px-4 py-3 text-left font-semibold">Who Uses It</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["CTC", "Basic + DA + HRA + all allowances + Employer PF + Gratuity provision + any other benefits", "HR / Offer letters"],
                    ["Gross Salary", "CTC minus Employer PF contribution and Gratuity provision", "Payslips, Form 16"],
                    ["In-Hand / Take-Home Salary", "Gross Salary minus Employee PF + Professional Tax + TDS (income tax)", "Your bank account"],
                  ].map(([term, incl, who], i) => (
                    <tr key={term} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-bold text-[#00416a]">{term}</td>
                      <td className="px-4 py-3 text-gray-700">{incl}</td>
                      <td className="px-4 py-3 text-gray-600">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border-l-4 border-[#00416a] rounded-xl p-4 mt-6 text-sm text-gray-700">
              <p><strong>💡 Tip:</strong> When evaluating a job offer, always ask for a detailed salary breakup. A high CTC can be misleading if a large portion is gratuity or variable pay.</p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 8: SALARY CALCULATION EXAMPLE
          ══════════════════════════════════════════════════════════════════ */}
          <section id="salary-calculation-example" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Salary Calculation Example — FY 2025-26
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let us take a practical example to understand how taxable salary is calculated.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-2 mb-6">
              <div className="bg-[#00416a] text-white rounded-xl px-5 py-3 mb-4">
                <p className="font-bold">Example: Rahul, Software Engineer, Bengaluru (Metro)</p>
                <p className="text-sm text-white/70">Annual CTC: ₹12,00,000 | Pays rent: ₹15,000/month</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-200 text-gray-800">
                      <th className="px-4 py-2 text-left font-semibold">Component</th>
                      <th className="px-4 py-2 text-right font-semibold">Annual Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      ["Basic Salary", "5,40,000", false],
                      ["DA", "54,000", false],
                      ["HRA (50% of Basic+DA for metro)", "2,97,000", false],
                      ["Special Allowance", "1,50,000", false],
                      ["Performance Bonus", "60,000", false],
                      ["Employer PF Contribution (12% of Basic)", "64,800", false],
                      ["Gratuity Provision", "34,200", false],
                      ["TOTAL CTC", "12,00,000", true],
                    ] as const).map(([label, amt, isTotal]) => (
                      <tr key={label} className={isTotal ? "bg-[#00416a] text-white font-bold" : "border-t border-gray-200 bg-white"}>
                        <td className="px-4 py-2">{label}</td>
                        <td className="px-4 py-2 text-right">{amt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">Step-by-Step Taxable Salary Calculation</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-2">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-200 text-gray-800">
                      <th className="px-4 py-2 text-left font-semibold">Particulars</th>
                      <th className="px-4 py-2 text-right font-semibold">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Basic Salary", amount: "5,40,000", type: "normal" },
                      { label: "DA", amount: "54,000", type: "normal" },
                      { label: "HRA Received", amount: "2,97,000", type: "normal" },
                      { label: "Special Allowance", amount: "1,50,000", type: "normal" },
                      { label: "Performance Bonus", amount: "60,000", type: "normal" },
                      { label: "GROSS SALARY", amount: "10,01,000", type: "subtotal" },
                      { label: "Less: HRA Exemption (Section 10(13A))*", amount: "(1,76,400)", type: "deduction" },
                      { label: "NET SALARY after exemptions", amount: "8,24,600", type: "subtotal" },
                      { label: "Less: Standard Deduction (Old Regime)", amount: "(50,000)", type: "deduction" },
                      { label: "Less: Professional Tax", amount: "(2,400)", type: "deduction" },
                      { label: "TAXABLE SALARY (Old Regime)", amount: "7,72,200", type: "total" },
                    ].map(({ label, amount, type }) => (
                      <tr key={label}
                        className={
                          type === "total" ? "bg-[#00416a] text-white font-bold"
                          : type === "subtotal" ? "bg-blue-50 font-semibold text-[#00416a]"
                          : type === "deduction" ? "border-t border-gray-200 bg-red-50 text-red-700"
                          : "border-t border-gray-200 bg-white"
                        }>
                        <td className="px-4 py-2">{label}</td>
                        <td className="px-4 py-2 text-right">{amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 px-4 py-3">
                *HRA Exemption = Least of: (a) HRA received ₹2,97,000 | (b) 50% of (Basic+DA) = ₹2,97,000 | (c) Actual rent – 10% of (Basic+DA) = ₹1,80,000 – ₹59,400 = ₹1,20,600. <strong>Least = ₹1,20,600.</strong> (Values simplified for illustration. Consult a CA for exact figures.)
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 9: OLD VS NEW REGIME
          ══════════════════════════════════════════════════════════════════ */}
          <section id="old-vs-new-regime" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Salary Income under Old vs New Tax Regime – FY 2025-26
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since FY 2023-24, the new tax regime is the default regime. However, you can still opt for the old regime if it gives you a better outcome. Here is what changes for salaried employees:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="px-4 py-3 text-center font-semibold">Old Tax Regime</th>
                    <th className="px-4 py-3 text-center font-semibold">New Tax Regime (Default)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Standard Deduction", "₹50,000", "₹75,000"],
                    ["HRA Exemption", "✅ Available", "❌ Not Available"],
                    ["LTA Exemption", "✅ Available", "❌ Not Available"],
                    ["Section 80C (₹1.5L)", "✅ Available", "❌ Not Available"],
                    ["Section 80D (Mediclaim)", "✅ Available", "❌ Not Available"],
                    ["Home Loan Interest (Sec 24b)", "✅ Available", "❌ Not Available"],
                    ["NPS Deduction (80CCD)", "✅ 80CCD(1B): ₹50k extra", "❌ Not Available"],
                    ["Professional Tax", "✅ Deductible", "✅ Deductible"],
                    ["Rebate under 87A", "Up to ₹5L (₹12,500)", "Up to ₹12L (₹60,000)"],
                    ["Tax Slabs", "Higher rate slabs", "Lower rate slabs"],
                    ["Best For", "High deductions (>₹3.75L)", "Low or no deductions"],
                  ].map(([feature, old, newR], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium text-gray-800">{feature}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{old}</td>
                      <td className="px-4 py-3 text-center text-gray-700">{newR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">New Regime Tax Slabs (FY 2025-26)</h3>
                <table className="w-full text-sm">
                  <thead><tr className="text-gray-500 text-xs"><th className="text-left pb-2">Income Slab</th><th className="text-right pb-2">Tax Rate</th></tr></thead>
                  <tbody>
                    {[
                      ["Up to ₹4,00,000", "Nil"],
                      ["₹4,00,001 – ₹8,00,000", "5%"],
                      ["₹8,00,001 – ₹12,00,000", "10%"],
                      ["₹12,00,001 – ₹16,00,000", "15%"],
                      ["₹16,00,001 – ₹20,00,000", "20%"],
                      ["₹20,00,001 – ₹24,00,000", "25%"],
                      ["Above ₹24,00,000", "30%"],
                    ].map(([slab, rate]) => (
                      <tr key={slab} className="border-t border-gray-100">
                        <td className="py-1.5 text-gray-700">{slab}</td>
                        <td className="py-1.5 text-right font-semibold text-[#00416a]">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-3">Old Regime Tax Slabs (FY 2025-26)</h3>
                <table className="w-full text-sm">
                  <thead><tr className="text-gray-500 text-xs"><th className="text-left pb-2">Income Slab</th><th className="text-right pb-2">Tax Rate</th></tr></thead>
                  <tbody>
                    {[
                      ["Up to ₹2,50,000", "Nil"],
                      ["₹2,50,001 – ₹5,00,000", "5%"],
                      ["₹5,00,001 – ₹10,00,000", "20%"],
                      ["Above ₹10,00,000", "30%"],
                    ].map(([slab, rate]) => (
                      <tr key={slab} className="border-t border-gray-100">
                        <td className="py-1.5 text-gray-700">{slab}</td>
                        <td className="py-1.5 text-right font-semibold text-gray-700">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-3">Rebate under 87A: Tax fully nil for income up to ₹5,00,000.</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-sm text-gray-700">
              <p className="font-bold text-green-800 mb-2">💡 Which regime should you choose?</p>
              <p>Under the <strong>new regime</strong>, income up to ₹12 lakh is fully tax-free for salaried individuals (rebate under Section 87A + ₹75,000 standard deduction). If your total deductions — HRA + 80C + 80D + home loan + NPS — exceed approximately ₹3.75 lakh, the old regime may still save more tax. Use our <Link href="/tools/salary-calculator" className="text-[#00416a] underline">Salary Tax Calculator</Link> to compare both regimes instantly.</p>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 10: TAX SAVING TIPS
          ══════════════════════════════════════════════════════════════════ */}
          <section id="tax-saving-tips" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Tax Saving Tips for Salaried Employees (Old Regime)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you opt for the old tax regime, here are the best legal ways to reduce your salary tax liability in FY 2025-26:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "1. Maximise HRA Exemption",
                  content: "If you live on rent, ensure your employer correctly structures your HRA. Submit rent receipts for rent above ₹1 lakh annually (landlord's PAN needed). If your employer does not give HRA, you can still claim deduction under Section 80GG.",
                  link: { href: "/guides/hra-exemption", label: "HRA Exemption Guide →" },
                },
                {
                  title: "2. Invest Under Section 80C (Up to ₹1.5 Lakh)",
                  content: "This is the most widely used deduction. Eligible investments include EPF, PPF, ELSS mutual funds, NSC, 5-year FD, life insurance premiums, tuition fees for children, and home loan principal repayment.",
                  link: { href: "/guides/section-80c", label: "Section 80C Investments →" },
                },
                {
                  title: "3. NPS — Additional ₹50,000 under Section 80CCD(1B)",
                  content: "Invest in the National Pension Scheme (NPS) and claim an additional deduction of ₹50,000 per year over and above the ₹1.5 lakh 80C limit. This is one of the most underutilised deductions.",
                },
                {
                  title: "4. Medical Insurance — Section 80D",
                  content: "Health insurance premium paid for yourself, spouse, children: up to ₹25,000. For parents below 60: additional ₹25,000. For senior citizen parents: up to ₹50,000. Total maximum deduction: ₹1 lakh.",
                },
                {
                  title: "5. Home Loan Interest — Section 24(b)",
                  content: "Interest on home loan for a self-occupied property is deductible up to ₹2 lakh per year. For let-out property, actual interest is deductible subject to overall loss set-off rules.",
                },
                {
                  title: "6. Leave Travel Allowance (LTA)",
                  content: "Claim LTA for domestic travel within a 4-year block. Only economy class airfare or AC-1 rail fare qualifies. Claim it for 2 trips in one block. Always keep travel tickets and boarding passes.",
                },
              ].map(({ title, content, link }) => (
                <div key={title} className="border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{content}</p>
                  {link && (
                    <Link href={link.href} className="text-[#00416a] text-sm underline mt-2 inline-block hover:text-blue-800">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 11: COMMON MISTAKES
          ══════════════════════════════════════════════════════════════════ */}
          <section id="common-mistakes" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Common Mistakes While Filing Salary Income in ITR
            </h2>
            <div className="space-y-3">
              {[
                { mistake: "Not reporting income from multiple employers", fix: "If you changed jobs, combine Form 16 from both employers. Report total salary — not just the current employer's." },
                { mistake: "Skipping interest income on savings accounts", fix: "Interest from savings accounts is taxable beyond ₹10,000 (or ₹50,000 for senior citizens) under Section 80TTA. Report it under 'Other Sources'." },
                { mistake: "Claiming HRA without paying rent", fix: "Falsely claiming HRA exemption is a tax offence. Always have valid rent receipts. For rent above ₹1 lakh, landlord's PAN is mandatory." },
                { mistake: "Not checking Form 26AS before filing", fix: "TDS deducted by your employer should match Form 26AS and AIS. Any mismatch can trigger a notice." },
                { mistake: "Filing wrong ITR form", fix: "Use ITR-1 for income up to ₹50 lakh. Use ITR-2 if you have capital gains, foreign income, or income above ₹50 lakh." },
                { mistake: "Missing the deadline without filing", fix: "The due date for salaried ITR is 31 July. Late filing attracts a fee under Section 234F of ₹1,000 (income up to ₹5L) or ₹5,000 (above ₹5L)." },
                { mistake: "Not claiming Section 89 relief on arrears", fix: "If you received salary arrears in FY 2025-26 relating to past years, file Form 10E before your ITR to claim Section 89 relief." },
              ].map(({ mistake, fix }) => (
                <div key={mistake} className="flex gap-4 bg-red-50 border border-red-100 rounded-2xl p-4">
                  <span className="text-red-500 font-bold text-lg shrink-0">✗</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{mistake}</p>
                    <p className="text-gray-600 text-sm mt-1"><strong className="text-green-600">Fix:</strong> {fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 12: ITR FORM
          ══════════════════════════════════════════════════════════════════ */}
          <section id="itr-form" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Which ITR Form Should Salaried Employees Use?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#00416a] text-white">
                    <th className="px-4 py-3 text-left font-semibold">ITR Form</th>
                    <th className="px-4 py-3 text-left font-semibold">Who Should Use It</th>
                    <th className="px-4 py-3 text-left font-semibold">Applicable When</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ITR-1 (Sahaj)", "Resident individuals", "Total income ≤ ₹50 lakh from salary, one house property, and other sources (interest, etc.)"],
                    ["ITR-2", "Individuals & HUFs without business income", "Capital gains, two or more house properties, foreign income/assets, or total income > ₹50 lakh"],
                    ["ITR-3", "Individuals with business/profession income", "If you have freelance income in addition to salary"],
                    ["ITR-4 (Sugam)", "Presumptive income filers", "Business income under 44AD/44ADA plus salary"],
                  ].map(([form, who, when], i) => (
                    <tr key={form} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-bold text-[#00416a]">{form}</td>
                      <td className="px-4 py-3 text-gray-700">{who}</td>
                      <td className="px-4 py-3 text-gray-600">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <strong>💡 Note:</strong> Most salaried employees with no other income file <strong>ITR-1</strong>. If you have mutual fund redemptions, stocks sold, or more than one house property — switch to <strong>ITR-2</strong>. <Link href="/services/income-tax/itr-salaried" className="text-[#00416a] underline">Our CA team can help you file the right ITR →</Link>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 13: DOCUMENTS REQUIRED
          ══════════════════════════════════════════════════════════════════ */}
          <section id="documents-required" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">
              Documents Required for Salary ITR Filing
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { cat: "From Employer", items: ["Form 16 (Part A + Part B)", "Monthly payslips for the year", "Salary certificate (if Form 16 not issued)"] },
                { cat: "Personal Documents", items: ["PAN card", "Aadhaar card", "Bank account details (IFSC code)", "Bank statements for all accounts"] },
                { cat: "Investment Proofs", items: ["80C investment receipts (PPF, ELSS, LIC)", "Home loan certificate (interest & principal)", "Health insurance premium receipts", "NPS contribution statements"] },
                { cat: "Rental & Other", items: ["Rent receipts & rental agreement (for HRA)", "Landlord's PAN (if rent > ₹1 lakh p.a.)", "Form 26AS and Annual Information Statement (AIS)", "Capital gains statements (if any)"] },
              ].map(({ cat, items }) => (
                <div key={cat} className="border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-[#00416a] mb-3 text-sm uppercase tracking-wide">{cat}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircleIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              SECTION 14: FAQs
          ══════════════════════════════════════════════════════════════════ */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-6">
              Frequently Asked Questions — Income from Salary
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-2xl overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <div className="bg-gray-50 px-5 py-4">
                    <h3 className="font-bold text-gray-800 text-sm" itemProp="name">
                      Q{i + 1}. {faq.name}
                    </h3>
                  </div>
                  <div
                    className="px-5 py-4"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-700 text-sm leading-relaxed" itemProp="text">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              CONCLUSION
          ══════════════════════════════════════════════════════════════════ */}
          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl font-extrabold text-[#00416a] mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Income from salary is more than just your monthly take-home. It encompasses a wide range of components — from basic pay and allowances to perquisites and retirement benefits. The good news is that the Indian tax law provides several exemptions and deductions that, when used wisely, can significantly reduce your tax burden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For FY 2025-26, the new tax regime makes income up to ₹12.75 lakh effectively tax-free for salaried employees — an important milestone for middle-income earners. However, whether the old or new regime works for you depends entirely on your specific salary structure, investments, and deductions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The most important step is to understand your salary slip, collect the right documents, and file your ITR accurately before 31 July 2025. A small mistake can lead to a tax notice; the right tax planning can save you lakhs.
            </p>
          </section>

          {/* ══════════════════════════════════════════════════════════════════
              CTA
          ══════════════════════════════════════════════════════════════════ */}
          <section
            className="rounded-3xl overflow-hidden mb-8"
            style={{ background: "linear-gradient(135deg, #00416a 0%, #003257 55%, #001e36 100%)" }}
          >
            <div className="px-8 py-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-4 text-white"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                CA team available now
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Need Help Filing Your ITR?
              </h2>
              <p className="text-white/75 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                Let our CA team handle your salary ITR accurately — with maximum deductions, zero errors, and same-day filing. Starting at just ₹499.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-7 text-left">
                {[
                  "✔ ITR Filing (All Forms)",
                  "✔ Salary Tax Planning",
                  "✔ Form 16 Review & Verification",
                  "✔ Old vs New Regime Analysis",
                  "✔ Tax Notice Assistance",
                  "✔ 100% Online — No Office Visit",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-gray-50 hover:scale-105 transition-all shadow-lg"
                >
                  Get Free Consultation
                  <span>→</span>
                </Link>
                <Link
                  href="/services/income-tax/itr-salaried"
                  className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  View ITR Filing Plans
                </Link>
              </div>
            </div>
          </section>

          {/* Internal Links Footer */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Guides</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/guides/hra-exemption", label: "HRA Exemption – Complete Guide" },
                { href: "/guides/old-vs-new-tax-regime", label: "Old vs New Tax Regime Comparison" },
                { href: "/guides/section-80c", label: "Section 80C Investments Guide" },
                { href: "/guides/form-16", label: "Form 16 – What it Is & How to Read It" },
                { href: "/tools/salary-calculator", label: "Free Salary Tax Calculator" },
                { href: "/services/income-tax/itr-salaried", label: "ITR Filing for Salaried Employees" },
              ].map(({ href, label }) => (
                <Link key={href} href={href}
                  className="flex items-center gap-2 text-sm text-[#00416a] hover:underline">
                  <span className="text-gray-400">›</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </article>
        <Footar />
      </main>
    </>
  );
}

// Small inline icon component to avoid importing lucide in a server component context
function CheckCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-green-500 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    
  );
}