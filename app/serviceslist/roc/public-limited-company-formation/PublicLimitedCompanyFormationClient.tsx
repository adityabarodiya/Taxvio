// app/serviceslist/roc/public-limited-company-formation/PublicLimitedCompanyFormationClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Public Limited Company Formation Services - Complete MCA Registration & IPO Ready Structure",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Professional public limited company registration services including name approval (RUN), INC-33 & INC-34 form filing, MOA & AOA drafting for minimum 7 directors and 7 shareholders, registered office documentation, DSC and DIN procurement, Certificate of Incorporation, PAN and TAN application, minimum paid-up capital compliance (₹5 lakh), statutory auditor appointment, and post-incorporation ROC compliance setup. Complete end-to-end incorporation assistance for large-scale businesses, companies planning IPO/public fundraising, and enterprises requiring public shareholding under the Companies Act, 2013. Expert MCA filing, SEBI compliance readiness, and ongoing ROC support. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Bangalore and pan-India.",
  serviceType: "Public Limited Company Registration & MCA Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "49999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "49999",
      maxPrice: "199999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Public Limited Company and how is it different from Private Limited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Public Limited Company is a corporate entity registered under the Companies Act, 2013 that can raise capital from the GENERAL PUBLIC by issuing shares through IPO (Initial Public Offering) or stock exchanges. Key differences from Private Limited Company: (1) Minimum Members: Public Ltd requires minimum 7 shareholders vs 2 for Private Ltd. (2) Minimum Directors: Public Ltd requires minimum 3 directors vs 2 for Private Ltd. (3) Minimum Paid-up Capital: Public Ltd requires ₹5 lakh vs no minimum for Private Ltd. (4) Share Transferability: Shares are FREELY TRANSFERABLE in Public Ltd (can be traded on stock exchanges) vs restricted transferability in Private Ltd. (5) Public Offering: Public Ltd can raise funds from public via IPO, FPO, Rights Issue vs Private Ltd cannot. (6) Name Suffix: Company name ends with 'Limited' vs 'Private Limited'. (7) Compliance: Higher disclosure and compliance requirements including quarterly financial reporting, independent directors, audit committee, etc. (8) SEBI Regulations: Public Ltd (if listed) is regulated by SEBI in addition to MCA.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum capital requirement for Public Limited Company in 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As per Section 2(71) of Companies Act 2013 (amended up to FY 2025-26): (1) Minimum AUTHORIZED CAPITAL: ₹5 lakh (this is the maximum share capital company can issue as per MOA). (2) Minimum PAID-UP CAPITAL: ₹5 lakh (this is the actual capital that must be received from shareholders and deposited in company bank account BEFORE incorporation). Example: If authorized capital is ₹10 lakh (1,00,000 shares of ₹10 each), then at least ₹5 lakh (50,000 shares) must be SUBSCRIBED and PAID by shareholders before registration. Important: This ₹5 lakh paid-up capital must be deposited in a SCHEDULED BANK account opened in the name of the proposed company BEFORE filing incorporation forms. Bank issues a 'Certificate of Deposit' which is submitted to MCA as proof of capital infusion.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time taken for Public Limited Company registration in 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Complete Public Limited Company registration timeline (FY 2025-26): (1) DSC Procurement for 3+ directors - 3-5 days. (2) DIN Application for all directors - 2-3 days (can be done parallelly with DSC). (3) Name Reservation via RUN (INC-1) - 2-3 days if unique name. (4) Capital Deposit & Bank Certificate - 3-5 days (open proposed company bank account, deposit ₹5 lakh minimum, obtain certificate). (5) MOA & AOA Drafting - 3-5 days (complex document with regulatory clauses for public offering). (6) INC-33 & INC-34 Filing (Public Company Incorporation) - 10-15 days MCA processing after submission. (7) Certificate of Incorporation Issuance - Same day as approval. (8) PAN & TAN Auto-generation - 7-10 days for physical cards. TOTAL TIMELINE: 20-30 working days from document submission to Certificate of Incorporation (if all documents are correct, no MCA queries, and capital is deposited on time). Additional 7-10 days for post-incorporation compliances (first Board meeting, share certificate issuance, statutory registers setup).",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function PublicLimitedCompanyFormationClient() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <InquiryFormButton />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🚀 Planning IPO or Public Fundraising? Register Public Limited Company — IPO Ready Structure!
        </div>

        {/* ── HERO ── */}
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
                href="/serviceslist/roc"
                className="hover:text-white transition"
              >
                ROC Services
              </Link>
              <span>/</span>
              <span className="text-white">Public Limited Company Formation</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🏛️ Large-Scale Business Entity
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Public Limited
                  <br />
                  <span className="text-[#7ecbf0]">Company Formation</span>
                  <br />
                  IPO Ready
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Ready to scale your business to{" "}
                  <strong className="text-white">
                    stock market listing and public fundraising
                  </strong>
                  ? Register your{" "}
                  <strong className="text-white">
                    Public Limited Company (Ltd)
                  </strong>{" "}
                  under the{" "}
                  <strong className="text-white">Companies Act, 2013</strong> and
                  unlock{" "}
                  <strong className="text-white">
                    unlimited capital raising potential via IPO, QIP, Rights Issue,
                    and stock exchange trading
                  </strong>
                  . <strong className="text-white">Taxvio</strong> provides
                  end-to-end public company incorporation —{" "}
                  <strong className="text-white">
                    name approval (RUN), INC-33 & INC-34 filing, MOA & AOA with
                    public offering clauses, ₹5 lakh minimum capital compliance,
                    DSC & DIN for 3+ directors, Certificate of Incorporation, and
                    SEBI readiness documentation
                  </strong>
                  . Build your{" "}
                  <strong className="text-white">large-scale enterprise</strong>{" "}
                  with full MCA and regulatory compliance in{" "}
                  <strong className="text-white">20-30 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Register Now — ₹49,999 →
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    How It Works ↓
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 20-30 Days Registration",
                    "✅ IPO/Stock Market Ready",
                    "✅ Unlimited Fundraising",
                    "✅ SEBI Compliance Support",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🏛️", "Public capital raising via IPO"],
                    ["👥", "Min 3 directors, 7 shareholders"],
                    ["💰", "Min paid-up capital: ₹5 lakh"],
                    ["⏰", "Registration time: 20-30 days"],
                    ["📊", "Stock exchange listing eligible"],
                    ["💼", "Starting fee: ₹49,999"],
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
              { number: "100+", label: "Public Ltd Companies Registered", icon: "🏛️" },
              { number: "20-30 Days", label: "Average Timeline", icon: "⏰" },
              { number: "₹5 Lakh", label: "Minimum Capital", icon: "💰" },
              { number: "₹49,999", label: "Starting Fee", icon: "💼" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ MCA & SEBI Expertise",
              "✔ IPO Documentation Support",
              "✔ CS & CA Team",
              "✔ Ongoing ROC Compliance",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS PUBLIC LTD COMPANY */}
          <section id="what-is-public-ltd">
            <SectionLabel text="Understanding Public Company Structure" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is a Public Limited Company?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  A <strong>Public Limited Company (Public Ltd or Ltd)</strong> is
                  a type of corporate entity registered under the{" "}
                  <strong>Companies Act, 2013</strong> that has the legal right to{" "}
                  <strong>
                    raise capital from the GENERAL PUBLIC by issuing shares,
                    debentures, or other securities
                  </strong>
                  . Unlike Private Limited Companies, Public Ltd companies can list
                  their shares on{" "}
                  <strong>
                    stock exchanges (BSE, NSE) and allow unrestricted trading
                  </strong>
                  .
                </p>
                <p>
                  Public Limited Companies are the <strong>ONLY</strong> corporate
                  structure in India that can conduct{" "}
                  <strong>Initial Public Offering (IPO)</strong> and become a{" "}
                  <strong>publicly traded company</strong>. Examples: Reliance
                  Industries Ltd, Tata Consultancy Services Ltd, Infosys Ltd, HDFC
                  Bank Ltd.
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    🏛️ Key Features of Public Limited Company
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Public Capital Raising",
                        desc: "Can raise funds from general public by issuing shares/debentures via IPO (Initial Public Offering), FPO (Follow-on Public Offering), Rights Issue, QIP (Qualified Institutional Placement), etc. No limit on number of shareholders.",
                      },
                      {
                        title: "Stock Exchange Listing",
                        desc: "Eligible to list shares on recognized stock exchanges (BSE, NSE) subject to SEBI regulations and listing requirements (minimum networth, profitability, public float, etc.).",
                      },
                      {
                        title: "Free Share Transferability",
                        desc: "Shares are FREELY TRANSFERABLE without restrictions. Shareholders can sell shares on stock exchange or off-market without company approval (unlike Private Ltd where Board approval is needed).",
                      },
                      {
                        title: "Separate Legal Entity",
                        desc: "Company has its own legal identity independent of directors/shareholders. Can own property, enter contracts, sue and be sued in its own name.",
                      },
                      {
                        title: "Limited Liability",
                        desc: "Shareholders are liable only up to their shareholding amount. Personal assets are protected even if company incurs losses or debt.",
                      },
                      {
                        title: "Perpetual Succession",
                        desc: "Company continues to exist irrespective of changes in directors, shareholders, or management. Death/resignation of directors does not affect company's existence.",
                      },
                      {
                        title: "Higher Credibility & Trust",
                        desc: "Public Ltd companies are perceived as more credible, transparent, and professionally managed compared to Private Ltd or partnerships. Easier to attract investors, customers, and business partners.",
                      },
                      {
                        title: "Regulatory Oversight",
                        desc: "Regulated by both MCA (Ministry of Corporate Affairs) and SEBI (Securities and Exchange Board of India) if listed. Mandatory quarterly financial reporting, independent directors, audit committee, vigil mechanism, etc.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-blue-700 text-sm mb-1">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ Eligibility & Requirements (FY 2025-26)
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Minimum Requirements
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Minimum 3 Directors</strong> (no maximum limit;
                          listed companies typically have 6-15 directors)
                        </li>
                        <li>
                          • <strong>Minimum 7 Shareholders</strong> (no maximum
                          limit; can have lakhs of shareholders post-IPO)
                        </li>
                        <li>
                          • <strong>Minimum 2 directors must be residents of India</strong>{" "}
                          (stayed in India for 182+ days in previous year)
                        </li>
                        <li>
                          • <strong>Minimum Authorized Capital: ₹5 lakh</strong> (as
                          per MOA)
                        </li>
                        <li>
                          • <strong>Minimum Paid-up Capital: ₹5 lakh</strong> (must
                          be deposited in bank BEFORE incorporation)
                        </li>
                        <li>
                          • <strong>Registered Office Address</strong> in India
                          (can be residential or commercial)
                        </li>
                        <li>
                          • <strong>Company name must end with "Limited"</strong>{" "}
                          (not "Private Limited")
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Who Can Be a Director?
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• Indian citizens or foreign nationals (OCI/PIO allowed)</li>
                        <li>• Age 18+ years</li>
                        <li>• Not disqualified under Section 164 of Companies Act</li>
                        <li>• Must obtain DIN (Director Identification Number)</li>
                        <li>• Must have DSC (Digital Signature Certificate)</li>
                        <li>
                          • At least ONE woman director mandatory (Section 149(1)) if
                          listed or paid-up capital ≥ ₹100 crore or turnover ≥ ₹300
                          crore
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Public Ltd vs Private Ltd — Key Differences
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Feature</th>
                          <th className="p-2 text-left">Public Ltd</th>
                          <th className="p-2 text-left">Private Ltd</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Min Directors",
                            public: "3",
                            private: "2",
                          },
                          {
                            feature: "Min Shareholders",
                            public: "7",
                            private: "2",
                          },
                          {
                            feature: "Max Shareholders",
                            public: "Unlimited",
                            private: "200",
                          },
                          {
                            feature: "Min Paid-up Capital",
                            public: "₹5 lakh",
                            private: "No minimum",
                          },
                          {
                            feature: "Name Suffix",
                            public: "Limited",
                            private: "Private Limited",
                          },
                          {
                            feature: "Share Transferability",
                            public: "Freely transferable",
                            private: "Restricted (Board approval)",
                          },
                          {
                            feature: "Public Offering",
                            public: "Allowed (IPO/FPO)",
                            private: "Not allowed",
                          },
                          {
                            feature: "Stock Exchange Listing",
                            public: "Eligible",
                            private: "Not eligible",
                          },
                          {
                            feature: "SEBI Regulations",
                            public: "Applicable (if listed)",
                            private: "Not applicable",
                          },
                          {
                            feature: "Compliance Burden",
                            public: "Very High",
                            private: "Moderate",
                          },
                          {
                            feature: "Incorporation Forms",
                            public: "INC-33, INC-34",
                            private: "SPICe+ (INC-32)",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.feature}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.public}
                            </td>
                            <td className="p-2 text-gray-600">{row.private}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Advantages of Public Limited Company
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "Unlimited Capital Raising",
                        desc: "Can raise hundreds or thousands of crores from public via IPO, FPO, Rights Issue. No cap on fundraising amount.",
                      },
                      {
                        title: "Stock Market Liquidity",
                        desc: "Shares can be easily bought/sold on stock exchanges, providing liquidity to investors and founders.",
                      },
                      {
                        title: "Brand Credibility & Visibility",
                        desc: "Listed companies get massive brand visibility, media coverage, and customer trust. 'Ltd' suffix commands respect.",
                      },
                      {
                        title: "Employee ESOPs & Retention",
                        desc: "Can issue ESOPs (Employee Stock Options) with stock market liquidity — powerful tool to attract and retain talent.",
                      },
                      {
                        title: "Easy Exit for Investors",
                        desc: "Investors (VCs, PEs) can exit via open market sale post-IPO instead of negotiating buybacks.",
                      },
                      {
                        title: "Acquisition & M&A Opportunities",
                        desc: "Listed companies can use their shares as currency to acquire other companies (stock swap mergers).",
                      },
                      {
                        title: "Lower Borrowing Costs",
                        desc: "Banks offer cheaper loans to listed companies due to transparency and SEBI oversight.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="bg-white rounded-lg p-3">
                        <p className="font-bold text-orange-700 text-sm mb-1">
                          ✓ {item.title}
                        </p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Disadvantages & Challenges
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Complex & Expensive Compliance: Quarterly reporting, independent directors, audit committees, vigil mechanism, related party disclosures, corporate governance norms. Annual compliance cost: ₹5-25 lakh depending on size.",
                      "Loss of Control: Founders/promoters lose majority control as shares are diluted to public. Hostile takeovers possible if public shareholding increases significantly.",
                      "Market Volatility Risk: Share price fluctuates based on market sentiment, competitor actions, economic conditions — can impact company valuation and fundraising.",
                      "Higher Incorporation & IPO Costs: Public Ltd registration costs ₹50,000-2 lakh. IPO costs (merchant banker, legal, SEBI fees) can be ₹2-10 crore.",
                      "Public Scrutiny & Disclosure: Financial performance, director salaries, related party transactions must be disclosed publicly — loss of privacy.",
                      "Strict SEBI Regulations: Listing requirements (minimum networth ₹10 crore, 3 years profitability, 25% public float) are stringent. Non-compliance can lead to delisting.",
                      "Shareholder Activism: Minority shareholders can question management decisions, demand higher dividends, file derivative suits.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <p className="font-bold text-yellow-800 mb-3">
                    🎯 When to Choose Public Ltd Company?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Public Limited Company is ideal if you plan to:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "Raise large-scale capital (₹100+ crore) from public investors",
                      "List on stock exchanges (BSE/NSE) for brand visibility and liquidity",
                      "Scale business to national/international level with institutional funding",
                      "Provide exit route to early investors (VCs/PEs) via IPO",
                      "Build a professionally managed, high-governance corporate structure",
                      "Offer ESOPs to employees with stock market liquidity",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Not Recommended if:</strong> You are a small business,
                    startup with under ₹50 crore valuation, or want to avoid public
                    scrutiny and compliance costs. In such cases, Private Limited
                    Company is more suitable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* REGISTRATION PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Public Limited Company Registration Process (FY 2025-26)
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Complete MCA registration process for Public Limited Company — from
                capital deposit to Certificate of Incorporation:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Obtain Digital Signature Certificate (DSC) for All Directors",
                    description:
                      "DSC is mandatory for all directors to digitally sign MCA forms. Since Public Ltd requires MINIMUM 3 DIRECTORS, obtain Class 2 or Class 3 DSC for at least 3 directors from licensed Certifying Authorities (eMudhra, Sify, nCode). Documents required: PAN card, Aadhaar card, passport-size photograph, email ID, mobile number. DSC is issued on USB token and valid for 1-2 years. Cost: ₹1,000-2,000 per director. If you have more than 3 directors (e.g., 5-7 directors for large-scale business), obtain DSC for all directors to avoid delays during filing. Taxvio coordinates bulk DSC procurement at discounted rates.",
                    duration: "3-5 days",
                  },
                  {
                    step: 2,
                    title: "Apply for Director Identification Number (DIN) for All Directors",
                    description:
                      "DIN is a unique 8-digit identification number required for every director. Apply via Form DIR-3 on MCA portal using DSC. Documents required: PAN, Aadhaar, address proof (bank statement/utility bill <2 months), photograph, email, mobile. DIN is auto-approved within 1-2 days if documents are correct. Important: For Public Ltd, ensure at least 2 directors are RESIDENT DIRECTORS (stayed in India for 182+ days in previous year) — this is mandatory as per Section 149(3). If any director already has DIN from previous directorship, same DIN can be reused. Taxvio handles DIN applications for all directors simultaneously to save time.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Name Reservation via RUN (INC-1) — Reserve Unique Name",
                    description:
                      "Apply for name approval via Form INC-1 (RUN - Reserve Unique Name) on MCA portal. Public Ltd company name MUST end with 'Limited' (not 'Private Limited' or 'Pvt Ltd'). Example: 'ABC Technologies Limited' or 'XYZ Industries Limited'. Name guidelines: (1) Must be unique (not identical/similar to existing companies/trademarks), (2) Cannot use restricted words (Bank, Insurance, Government, etc.) without approval, (3) Should reflect main business activity, (4) Can have up to 2 proposed names in order of preference. MCA checks name against existing companies and trademark database. If approved: Name is reserved for 20 days (must file incorporation within 20 days, extendable by 20 more days on payment). If rejected: Reapply with different names (no extra fee). Taxvio conducts comprehensive name search (MCA database + Trademark registry + Google) and suggests 5+ unique names before filing RUN to avoid rejection.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "Deposit Minimum Paid-up Capital (₹5 Lakh) in Bank & Obtain Certificate",
                    description:
                      "Public Ltd companies MUST have minimum ₹5 lakh PAID-UP CAPITAL deposited in bank BEFORE incorporation. Process: (1) Open a CURRENT ACCOUNT in the name of 'PROPOSED [Company Name] Limited' in any scheduled bank (HDFC, ICICI, SBI, etc.). (2) Deposit ₹5 lakh (or more, as per shareholding pattern) via NEFT/RTGS/Cheque from shareholders' bank accounts. (3) Obtain 'Certificate of Deposit' or 'Banker's Certificate' from bank confirming deposit amount and account opening. This certificate must be uploaded with INC-33 form. Example: If authorized capital is ₹10 lakh (1,00,000 shares of ₹10 each), and 7 shareholders subscribe 50,000 shares (₹5 lakh), then ₹5 lakh must be deposited by shareholders. Important: Each shareholder must deposit their subscribed amount from their OWN bank account — not from founder's account or third party. Bank statement showing individual deposits is required. Note: This capital cannot be withdrawn until Certificate of Incorporation is issued. Taxvio assists with bank account opening documentation and capital infusion compliance.",
                    duration: "3-5 days",
                  },
                  {
                    step: 5,
                    title: "Drafting of MOA (Memorandum of Association) & AOA (Articles of Association)",
                    description:
                      "MOA and AOA are constitutional documents defining company's objects, capital structure, and governance rules. For Public Ltd, these documents are MORE DETAILED than Private Ltd due to regulatory requirements. (1) MOA (Memorandum of Association): Contains: (a) Name clause (company name with 'Limited' suffix), (b) Registered office clause (state where registered office is located), (c) Objects clause (main objects, ancillary objects, other objects — must be comprehensive to cover all future business activities), (d) Liability clause (limited liability of shareholders), (e) Capital clause (authorized capital structure — e.g., ₹10 lakh divided into 1,00,000 equity shares of ₹10 each, details of preference shares if any). (2) AOA (Articles of Association): Contains internal management rules: (a) Share capital and rights (voting rights, dividend rights, preference shareholders' rights), (b) Calls on shares, forfeiture, lien, transfer/transmission of shares (Public Ltd shares are freely transferable — no Board approval needed unlike Private Ltd), (c) Board of Directors — appointment, removal, rotation, powers, remuneration, (d) Board meetings — quorum, notice, voting, resolutions, (e) General meetings — AGM, EGM, notice, quorum, voting (e-voting provisions for listed companies), (f) Dividend distribution, reserves, accounts, audit, (g) Borrowing powers, issue of debentures, charges, (h) Winding up provisions. Special clauses for Public Ltd: (a) Provisions for issuing shares/debentures to public, (b) Underwriting clauses (for IPO), (c) Compliance with SEBI regulations (if planning to list), (d) Independent directors and audit committee (mandatory for listed companies), (e) Vigil mechanism, related party transactions policy. Taxvio prepares customized MOA & AOA with PUBLIC OFFERING CLAUSES and IPO-READY GOVERNANCE STRUCTURE suitable for future stock exchange listing.",
                    duration: "5-7 days",
                  },
                  {
                    step: 6,
                    title: "Filing of INC-33 & INC-34 — Public Company Incorporation Application",
                    description:
                      "Unlike Private Ltd (which uses SPICe+ form), Public Ltd incorporation requires TWO SEPARATE FORMS: (1) Form INC-33 (Application for Incorporation of a Company): This is the main incorporation application containing: (a) Company name (approved via RUN), (b) Category of company (Public Company Limited by Shares), (c) Sub-category (if applicable — Section 8 company, OPC, etc. — usually 'NA' for standard Public Ltd), (d) Registered office address (complete address with pincode, state), (e) Authorized capital and shareholding pattern (equity shares, preference shares, share value, number of shares), (f) Details of subscribers (initial 7+ shareholders) — name, father's name, address, PAN, Aadhaar, nationality, occupation, email, mobile, number of shares subscribed, amount paid, (g) Details of first directors (minimum 3) — name, DIN, address, appointment date, consent, (h) Details of proposed business (main objects from MOA). Attachments with INC-33: (i) MOA (signed by all 7 subscribers), (ii) AOA (signed by all 7 subscribers), (iii) Proof of registered office (rent agreement + NOC / sale deed + electricity bill), (iv) Utility bill of registered office (not older than 2 months), (v) Specimen signature of directors, (vi) Declaration by first subscribers and directors (INC-9 — declaration that all documents are correct), (vii) Affidavit from directors (INC-10 — affidavit for not being convicted/disqualified), (viii) PAN, Aadhaar, address proof, photographs of all directors and subscribers, (ix) Consent to act as first director (DIR-2 — consent and declaration form), (x) BANKER'S CERTIFICATE confirming ₹5 lakh paid-up capital deposit. (2) Form INC-34 (AGILE-PRO — for integrated post-incorporation registrations): This optional form is filed simultaneously with INC-33 for: (a) PAN application (auto-linked), (b) TAN application (auto-linked), (c) EPFO registration (auto-linked), (d) ESIC registration (if applicable), (e) Professional Tax registration (state-wise), (f) Shops & Establishment registration (state portal link). INC-33 & INC-34 are digitally signed by ALL DIRECTORS and ALL SUBSCRIBERS using DSC and filed on MCA portal. MCA Fee: Depends on authorized capital (e.g., ₹5-10 lakh capital = ₹5,600 fee; ₹10-50 lakh = ₹11,200). Processing: MCA scrutinizes all documents (10-15 days). If any defects/queries, MCA issues query notice — must respond within 7 days. Taxvio ensures ERROR-FREE filing with complete documentation to avoid MCA queries and delays.",
                    duration: "10-15 days (MCA processing)",
                  },
                  {
                    step: 7,
                    title: "Certificate of Incorporation (CIN) Issued",
                    description:
                      "Upon approval of INC-33, MCA issues Certificate of Incorporation (COI) in Form INC-11. The certificate contains: (1) Company name (ending with 'Limited'), (2) CIN (Corporate Identity Number - 21-digit unique ID starting with 'L' for Public Ltd), (3) Date of incorporation (company's legal birth date), (4) Registered office address, (5) Authorized capital, (6) Digital signature of Registrar of Companies (ROC). Certificate of Incorporation is the LEGAL PROOF that your company now exists as a PUBLIC LIMITED COMPANY under the Companies Act, 2013. Download COI from MCA portal (Services → View Company/LLP Master Data → Download Certificate). IMPORTANT: Public Ltd company CANNOT COMMENCE BUSINESS immediately after incorporation. You must obtain CERTIFICATE OF COMMENCEMENT OF BUSINESS (INC-20A) first (see Step 9). Attempting to do business before INC-20A attracts penalty and director disqualification.",
                    duration: "Same day as INC-33 approval",
                  },
                  {
                    step: 8,
                    title: "PAN & TAN Auto-Generation",
                    description:
                      "PAN (Permanent Account Number) and TAN (Tax Deduction Account Number) are auto-generated by Income Tax Department upon incorporation (if INC-34 was filed with INC-33). PAN card is sent to company's registered office address via India Post (within 7-15 days). TAN is sent via email to registered email ID. If PAN/TAN cards are not received within 15 days, download e-PAN from Income Tax e-filing portal: Login → Services → Download e-PAN → Enter CIN/TAN → OTP verification → Download. PAN is required for: Bank account opening, GST registration, Income tax return filing, TDS compliance, Vendor payments. TAN is required for: TDS deduction and deposit, Quarterly TDS returns (24Q, 26Q, 27Q), Form 16/16A issuance.",
                    duration: "Auto-generated (7-15 days for physical card)",
                  },
                  {
                    step: 9,
                    title: "Certificate of Commencement of Business (INC-20A) — MANDATORY for Public Ltd",
                    description:
                      "This is a UNIQUE requirement for Public Limited Companies that does NOT apply to Private Ltd. Under Section 11 of Companies Act, Public Ltd company CANNOT COMMENCE ANY BUSINESS OR EXERCISE BORROWING POWERS until it obtains 'Certificate of Commencement of Business' from ROC by filing Form INC-20A. Requirements to file INC-20A: (1) Minimum paid-up capital (₹5 lakh) must be deposited and share certificates issued to subscribers. (2) Every subscriber must have PAID THE FULL VALUE of shares they subscribed (no calls in arrear). (3) Declaration must be filed by a director and company secretary (if appointed) or two directors if no CS. Process: File Form INC-20A with ROC containing: (a) Declaration that subscribers have paid for shares in full, (b) Declaration that no part of application money has been refunded, (c) Details of preliminary expenses (expenses incurred before incorporation — legal fees, registration fees, printing, etc.), (d) Verification by director(s). ROC verifies and issues INC-20A (Certificate of Commencement of Business) within 1-2 days. Without this certificate: (1) Company CANNOT open bank current account (most banks ask for INC-20A for Public Ltd), (2) Company CANNOT enter into contracts, (3) Company CANNOT commence operations, (4) Directors can be held personally LIABLE for any transactions done before INC-20A. Taxvio ensures INC-20A is filed IMMEDIATELY after incorporation (within 3-5 days) so you can start business without delay.",
                    duration: "1-2 days (ROC processing)",
                  },
                  {
                    step: 10,
                    title: "Post-Incorporation Compliances (Immediate)",
                    description:
                      "After obtaining Certificate of Commencement of Business, following immediate compliances are required: (1) First Board Meeting (within 30 days): Convene first Board meeting to: (a) Appoint first statutory auditor (Chartered Accountant) — mandatory for ALL companies, (b) Appoint Company Secretary if paid-up capital ≥ ₹5 crore (mandatory as per Section 203), (c) Appoint CFO if paid-up capital ≥ ₹5 crore, (d) Approve common seal (company stamp), (e) Approve opening of bank current account, (f) Ratify registered office address, (g) Approve preliminary expenses. Prepare Minutes of Board Meeting and file Form MGT-14 with ROC within 30 days. (2) Open Current Bank Account: Submit to bank: Certificate of Incorporation, PAN card, Certificate of Commencement of Business (INC-20A), Board resolution for account opening, KYC of directors (PAN, Aadhaar, photograph), Specimen signature of authorized signatories, Registered office address proof. Banks conduct KYC verification and open account within 5-7 days. (3) Issue Share Certificates: Allot shares to subscribers (initial 7 shareholders) and issue physical share certificates OR dematerialize shares (convert to demat form with NSDL/CDSL for future trading). Share certificates must be issued within 60 days of incorporation. (4) Maintain Statutory Registers: Purchase and maintain following registers: (a) Register of Members (shareholders), (b) Register of Directors and Key Managerial Personnel, (c) Register of Charges (if any loans/mortgages taken), (d) Minutes Book (Board meetings, General meetings), (e) Register of Contracts (related party transactions). (5) Obtain DIN-KYC for Directors: All directors must file DIN-KYC (Form DIR-3 KYC) annually by 30th September every year. Penalty for non-filing: ₹5,000 per director + DIN deactivation. Taxvio provides POST-INCORPORATION COMPLIANCE KIT with statutory registers, share certificates, Board meeting minutes, and filing checklist.",
                    duration: "Within 30-60 days",
                  },
                  {
                    step: 11,
                    title: "Apply for GST Registration (if applicable)",
                    description:
                      "GST registration is MANDATORY if: (1) Turnover exceeds ₹40 lakh (₹20 lakh for services in special category states), (2) Interstate supply (even if turnover <₹40 lakh), (3) E-commerce sales via Amazon/Flipkart, (4) Reverse charge mechanism applicable. Even if turnover is below threshold, VOLUNTARY GST registration is recommended for Public Ltd companies to: (a) Claim input tax credit (ITC), (b) Issue GST invoices to corporate clients (most B2B clients prefer GST-registered vendors), (c) Build credibility. Documents for GST: Certificate of Incorporation, PAN card, Registered office proof, Bank statement/cancelled cheque, Photographs and ID proof of directors, Board resolution authorizing GST application. File GST REG-01 on GST portal. Approval within 3-7 days if documents correct. Taxvio offers COMBINED Public Ltd + GST registration package.",
                    duration: "3-7 days for GST approval",
                  },
                  {
                    step: 12,
                    title: "Ongoing Annual Compliances (ROC Filings)",
                    description:
                      "Public Limited Companies have STRINGENT annual compliance requirements compared to Private Ltd: (1) Annual Return (Form MGT-7): Due within 60 days of Annual General Meeting (AGM). Must be certified by Company Secretary. (2) Financial Statements (Form AOC-4): Balance sheet, profit & loss account, cash flow statement, auditor's report, Board report. Due within 30 days of AGM. Must be digitally signed by directors and auditor. (3) Annual General Meeting (AGM): MANDATORY within 6 months of financial year end (for FY 2024-25 ending 31st March 2025, AGM must be held by 30th September 2025). All shareholders must be invited via notice (21 days before AGM). Minutes of AGM must be filed with ROC. (4) Board Meetings: Minimum 4 Board meetings per year (one every quarter) with gap of not more than 120 days between two meetings. Minutes must be recorded and signed. (5) Income Tax Return (ITR-6): Due by 31st October every year (for companies requiring audit). (6) Auditor's Report: Statutory audit by Chartered Accountant mandatory for ALL companies. Auditor must be appointed at AGM and reappointed every 5 years (individual auditor) or 10 years (audit firm). File Form ADT-1 within 15 days of AGM. (7) Director Disclosures: (a) DIR-8 (declaration of interest in other entities) — within 30 days of appointment or change, (b) DIR-3 KYC (annual KYC by 30th September), (c) MBP-1 (disclosure of shareholding in other companies) — annually. (8) Related Party Transactions Disclosure: All transactions with related parties (directors, relatives, group companies) must be disclosed in Board meetings and noted in financial statements. If transaction value exceeds limits, shareholder approval required. (9) ADDITIONAL COMPLIANCES FOR LISTED PUBLIC LTD COMPANIES (if listed on BSE/NSE): (a) Quarterly financial results filing with stock exchanges (within 45 days of quarter end), (b) Annual Report to shareholders (detailed 150+ page report), (c) Corporate Governance Report, (d) Related Party Transactions approval by shareholders, (e) Independent Directors appointment (minimum 1/3rd of Board), (f) Audit Committee, Nomination & Remuneration Committee, Stakeholder Relationship Committee, (g) Vigil Mechanism/Whistle Blower Policy, (h) CSR Committee (if net worth ≥ ₹500 crore or turnover ≥ ₹1,000 crore or net profit ≥ ₹5 crore), (i) Internal Financial Controls certification. Penalties for non-compliance: ₹100-500 per day (company) + ₹100-500 per day (each director) depending on violation. Can accumulate to lakhs if delayed. Taxvio offers ANNUAL COMPLIANCE PACKAGE (₹49,999/year) covering all ROC filings, audit coordination, Board/AGM support, and compliance calendar.",
                    duration: "Ongoing (yearly)",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-green-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline
                </p>
                <p className="text-sm text-gray-700">
                  <strong>20-30 working days</strong> from document submission to
                  Certificate of Commencement of Business (INC-20A) — ready to
                  start operations. Breakdown: DSC (3-5 days) + DIN (1-2 days) +
                  RUN (2-3 days) + Capital deposit (3-5 days) + MOA/AOA drafting
                  (5-7 days) + INC-33/INC-34 approval (10-15 days) + INC-20A (1-2
                  days). Post-incorporation compliances (bank account, share
                  certificates, statutory registers) take additional 7-15 days.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Public Ltd Company Registration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For All Directors (Minimum 3)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory for all directors)",
                    "Aadhaar Card (for identity and address verification)",
                    "Passport (mandatory for foreign directors, if applicable)",
                    "Passport-size photograph (recent, white background, scanned)",
                    "Bank statement or utility bill (not older than 2 months — address proof)",
                    "Email ID and mobile number (for MCA OTP verification)",
                    "Specimen signature (scanned on white paper)",
                    "Proof of residential status (at least 2 directors must be resident of India — stayed 182+ days in previous year): Valid passport with India entry/exit stamps OR Bank statement showing India address OR Aadhaar card",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-gray-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-gray-100 text-gray-700">
                  For All Subscribers/Shareholders (Minimum 7)
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN Card (mandatory for all 7 subscribers)",
                    "Aadhaar Card (for KYC and identity proof)",
                    "Passport-size photograph (recent, scanned)",
                    "Address proof (bank statement/utility bill <2 months OR Aadhaar)",
                    "Email ID and mobile number",
                    "Specimen signature",
                    "Passport (if foreign shareholder/NRI)",
                    "PROOF OF CAPITAL CONTRIBUTION: Bank statement showing transfer of subscribed amount to proposed company's bank account (each shareholder must transfer from THEIR OWN account)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-gray-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-purple-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-purple-100 text-purple-700">
                  For Registered Office Address
                </p>
                <ul className="space-y-3">
                  {[
                    {
                      title: "If Owned Property:",
                      items: [
                        "Sale deed or property title deed (proof of ownership)",
                        "Latest property tax receipt or municipal khata extract",
                        "Electricity bill (not older than 2 months)",
                        "NOC from owner (if property is in director's name but used as company office)",
                      ],
                    },
                    {
                      title: "If Rented Property:",
                      items: [
                        "Rent agreement (notarized, minimum 11-month lease, preferably 3 years for Public Ltd)",
                        "NOC from landlord (on letterhead with full signature, PAN, address proof)",
                        "Electricity bill in landlord's name (not older than 2 months)",
                        "Landlord's PAN card (mandatory)",
                        "Landlord's Aadhaar card or passport (address proof)",
                        "Landlord's property ownership proof (sale deed/tax receipt)",
                      ],
                    },
                  ].map((section) => (
                    <li key={section.title} className="space-y-2">
                      <p className="font-bold text-purple-700 text-sm">
                        {section.title}
                      </p>
                      <ul className="ml-4 space-y-1">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <span className="text-purple-500 mt-0.5">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-orange-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-orange-100 text-orange-700">
                  Capital & Financial Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "Proposed company current account opening documents (most banks require: INC-33 acknowledgment, PAN application acknowledgment, Board resolution draft)",
                    "BANKER'S CERTIFICATE confirming deposit of ₹5 lakh minimum paid-up capital (issued by bank after capital deposit)",
                    "Details of authorized capital structure (e.g., ₹10 lakh authorized capital divided into 1,00,000 equity shares of ₹10 each)",
                    "Shareholding pattern (how shares are distributed among 7 subscribers — who gets how many shares and at what price)",
                    "Details of share classes (if planning preference shares, redeemable shares, etc. — specify rights, dividend rate, redemption period)",
                    "Bank statements of all 7 subscribers showing capital contribution transfer",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-orange-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Additional Information Required
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Proposed company name (3-5 options in order of preference, must end with 'Limited')",
                  "Main business activity/object clause (detailed description of what company will do — manufacturing, trading, services, etc.)",
                  "Authorized capital (recommended ₹10-50 lakh for Public Ltd companies planning IPO in 3-5 years)",
                  "Paid-up capital (minimum ₹5 lakh, recommended ₹10-25 lakh for operational cushion)",
                  "Shareholding pattern among 7 subscribers (name, shares allotted, amount paid)",
                  "Details of 3 directors (name, father's name, DOB, nationality, occupation, DIN if existing)",
                  "Registered office address (complete with building name/number, locality, city, pincode, state)",
                  "Future IPO/listing plans (if yes, Taxvio will include SEBI-compliant clauses in MOA/AOA)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Critical Errors to Avoid" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Mistakes in Public Ltd Company Registration
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Public Ltd registration is complex — avoid these critical errors
                that can delay incorporation or lead to rejection:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Depositing ₹5 Lakh Paid-up Capital Before Filing",
                    icon: "💰",
                    problem:
                      "Attempting to file INC-33 without first depositing ₹5 lakh minimum paid-up capital in proposed company's bank account. MCA MANDATORILY requires Banker's Certificate with INC-33 — without this, application is rejected. Or depositing capital AFTER filing INC-33 — certificate is issued but company cannot obtain INC-20A (Commencement of Business certificate), making company non-operational.",
                    solution:
                      "SEQUENCE MUST BE: (1) Open current account in proposed company name, (2) All 7 subscribers transfer their subscribed amount (minimum ₹5 lakh total) from THEIR OWN bank accounts to this account, (3) Obtain Banker's Certificate from bank confirming deposit, (4) THEN file INC-33 with Banker's Certificate attachment. Taxvio coordinates with bank to ensure capital is deposited correctly and certificate is issued in MCA-acceptable format BEFORE INC-33 filing.",
                  },
                  {
                    mistake: "Having Less Than 7 Subscribers or 3 Directors",
                    icon: "👥",
                    problem:
                      "Filing INC-33 with only 5 subscribers or 2 directors (thinking Private Ltd requirements apply). MCA system auto-rejects form if minimum requirements not met. Or having 7 subscribers but only 1-2 are 'real' (rest are dummy/benami shareholders) — this is illegal and can lead to prosecution under Section 447 (punishment: imprisonment up to 10 years + fine).",
                    solution:
                      "Ensure GENUINE 7 SUBSCRIBERS and 3 DIRECTORS: (1) All 7 subscribers must be real individuals/entities who are actually investing in company (not paper subscribers), (2) Each subscriber must sign MOA/AOA and deposit capital from their own bank account, (3) At least 3 directors must be appointed (can overlap with subscribers — e.g., 3 out of 7 subscribers can be directors). For Public Ltd, it's better to have 5-7 directors for stronger governance. If you cannot find 7 genuine investors initially, consider registering as PRIVATE LIMITED first and converting to PUBLIC LIMITED later when you have more investors/partners.",
                  },
                  {
                    mistake: "Using 'Private Limited' or 'Pvt Ltd' Suffix in Name",
                    icon: "🏢",
                    problem:
                      "Applying for name approval (RUN) with company name ending in 'Private Limited' or 'Pvt Ltd' instead of just 'Limited'. MCA rejects name application for Public Ltd companies with incorrect suffix. Even if somehow approved by mistake, ROC will reject INC-33 during scrutiny.",
                    solution:
                      "Public Limited Company name MUST end with 'Limited' ONLY (not 'Private Limited'). Example: CORRECT — 'ABC Technologies Limited', 'XYZ Industries Limited'. INCORRECT — 'ABC Technologies Private Limited', 'XYZ Industries Pvt Ltd'. Double-check name suffix before filing RUN (INC-1). Taxvio ensures correct name suffix during RUN application.",
                  },
                  {
                    mistake: "Not Including Public Offering Clauses in MOA/AOA",
                    icon: "📜",
                    problem:
                      "Using standard Private Ltd MOA/AOA templates for Public Ltd company. These templates: (1) Have restrictive share transfer clauses (Board approval required), which contradict Public Ltd's free transferability, (2) Do not have clauses for issuing shares to public, underwriting, IPO, stock exchange listing, (3) Do not comply with SEBI regulations for listed companies (independent directors, audit committee, etc.). If you plan IPO later, entire MOA/AOA must be amended (costly and time-consuming).",
                    solution:
                      "Use PUBLIC LIMITED COMPANY-SPECIFIC MOA/AOA templates with: (1) Objects clause covering FUTURE BUSINESS EXPANSION and public capital raising, (2) Share transferability clause stating 'shares are freely transferable subject to provisions of Companies Act and SEBI regulations', (3) Clauses for issuing shares/debentures to public via IPO/FPO, (4) Provisions for underwriting agreements, (5) Clauses for independent directors, audit committee (mandatory for listed companies), (6) Related party transaction approval mechanism, (7) Dividend distribution policy, (8) Borrowing powers (Public Ltd can borrow up to 2x paid-up capital + free reserves without shareholder approval vs 1x for Private Ltd). Taxvio prepares IPO-READY MOA/AOA for Public Ltd companies with all regulatory clauses.",
                  },
                  {
                    mistake: "Not Filing INC-20A After Incorporation",
                    icon: "📋",
                    problem:
                      "Obtaining Certificate of Incorporation and immediately starting business operations without filing INC-20A (Certificate of Commencement of Business). This is ILLEGAL under Section 11. Any contracts/transactions done before INC-20A are VOID and unenforceable. Directors can be held PERSONALLY LIABLE for losses. Penalty: Fine up to ₹50,000 + ₹1,000 per day of delay. In extreme cases, company can be WOUND UP by Tribunal for operating without INC-20A.",
                    solution:
                      "IMMEDIATELY after receiving Certificate of Incorporation, file Form INC-20A (within 1-2 days) with declaration that: (1) All subscribers have paid their subscribed capital in full, (2) No application money has been refunded, (3) Preliminary expenses are within limits. ROC issues INC-20A certificate same day/next day. ONLY AFTER receiving INC-20A, start business operations, open bank account, enter contracts, etc. Taxvio files INC-20A as part of standard Public Ltd incorporation service — you receive BOTH Certificate of Incorporation AND Certificate of Commencement of Business before starting operations.",
                  },
                  {
                    mistake: "Ignoring Resident Director Requirement",
                    icon: "🌍",
                    problem:
                      "Appointing 3 foreign directors (all non-residents) thinking it's allowed since Public Ltd allows foreign directors. Section 149(3) MANDATORILY requires at least ONE director to be RESIDENT OF INDIA (stayed in India for 182+ days in previous year). MCA rejects INC-33 if this requirement is not met. Or falsely declaring foreign director as resident without proof — MCA can verify and penalize later.",
                    solution:
                      "Ensure AT LEAST 2 OUT OF 3 DIRECTORS are RESIDENT OF INDIA (recommended for safety, though law requires minimum 1). Proof of residency: (1) Valid Indian passport with recent India entry/exit stamps showing 182+ days stay, OR (2) Aadhaar card (indicates India residence), OR (3) Bank statement/utility bill showing India address for last 1 year. If all founders/promoters are NRIs/foreigners, appoint at least one professional director (CA/CS/Lawyer) who is resident of India as nominee director. Taxvio assists with resident director appointment if needed.",
                  },
                ].map((item) => (
                  <div
                    key={item.mistake}
                    className="bg-white rounded-2xl p-6 border border-red-200"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="font-bold text-red-700 text-lg">
                        {item.mistake}
                      </h3>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-3">
                      <p className="font-bold text-red-600 text-xs mb-2">
                        ⚠️ Problem
                      </p>
                      <p className="text-xs text-gray-700">{item.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <p className="font-bold text-green-700 text-xs mb-2">
                        ✅ Solution
                      </p>
                      <p className="text-xs text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="Our Packages" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Public Limited Company Formation Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive incorporation packages tailored for large-scale
              businesses and IPO aspirants:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic",
                  price: "₹49,999",
                  popular: false,
                  features: [
                    "Name search & RUN filing (INC-1) — 3 name options",
                    "DSC for 3 directors (₹6,000 value)",
                    "DIN for 3 directors",
                    "Bank account opening coordination for capital deposit",
                    "Banker's Certificate procurement (₹5 lakh capital)",
                    "Standard MOA & AOA drafting for Public Ltd",
                    "INC-33 & INC-34 form filing",
                    "Certificate of Incorporation (CIN)",
                    "PAN & TAN application",
                    "INC-20A (Commencement of Business) filing",
                    "Email & phone support",
                  ],
                  limitations: [
                    "No customized IPO-ready MOA/AOA",
                    "No GST registration",
                    "No post-incorporation compliance support",
                    "No statutory registers or share certificates",
                  ],
                  ideal:
                    "Standard businesses, manufacturing companies, trading firms (not planning IPO immediately)",
                },
                {
                  name: "Premium",
                  price: "₹99,999",
                  popular: true,
                  features: [
                    "Everything in Basic",
                    "Customized IPO-ready MOA & AOA with SEBI clauses",
                    "Name search with 5 options + trademark availability check",
                    "DSC for up to 5 directors",
                    "DIN for up to 5 directors",
                    "First Board meeting minutes & resolutions",
                    "Share certificate printing & issuance (physical + demat-ready)",
                    "Statutory registers (physical + digital) — 5 registers",
                    "Current account opening assistance (HDFC/ICICI priority banking)",
                    "GST registration included",
                    "Professional Tax & ESIC registration (state-wise)",
                    "1-year compliance calendar with email reminders",
                    "Priority support (WhatsApp + email + phone)",
                  ],
                  limitations: ["No annual compliance package"],
                  ideal:
                    "Growing businesses, companies planning IPO in 3-5 years, startups backed by VCs/PEs",
                },
                {
                  name: "IPO Ready",
                  price: "₹1,99,999",
                  popular: false,
                  features: [
                    "Everything in Premium",
                    "IPO-READY documentation with SEBI Listing Regulations clauses",
                    "Independent Director appointment assistance",
                    "Audit Committee, Nomination & Remuneration Committee setup",
                    "Related Party Transaction Policy drafting",
                    "Vigil Mechanism/Whistle Blower Policy",
                    "ESOP scheme drafting & implementation",
                    "Company Secretary (CS) appointment coordination",
                    "CFO appointment (if required)",
                    "Shareholders' Agreement drafting (for 7 subscribers)",
                    "Trademark registration (1 class)",
                    "Import-Export Code (IEC) registration",
                    "MSME/Udyam registration",
                    "First year annual compliance (MGT-7, AOC-4, ITR-6) included",
                    "Merchant Banker introduction (for future IPO)",
                    "Dedicated CA + CS team with monthly compliance review calls",
                  ],
                  limitations: [],
                  ideal:
                    "Companies planning IPO within 2-3 years, PE/VC funded startups, high-growth enterprises requiring institutional governance",
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative border-2 rounded-3xl p-8 ${
                    pkg.popular
                      ? "border-[#00416a] shadow-2xl scale-105"
                      : "border-gray-200 shadow-lg"
                  } bg-white`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00416a] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#00416a] mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-4xl font-extrabold text-gray-800 mb-1">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-gray-500">One-time fee</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">
                      Included Services
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.limitations.length > 0 && (
                    <div className="mb-6 bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                        Not Included
                      </p>
                      <ul className="space-y-1">
                        {pkg.limitations.map((limit) => (
                          <li
                            key={limit}
                            className="flex items-start gap-2 text-xs text-gray-500"
                          >
                            <span className="text-red-400 mt-0.5">✗</span>
                            {limit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6 bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-700 mb-1">
                      Ideal For
                    </p>
                    <p className="text-xs text-gray-600">{pkg.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-bold transition ${
                      pkg.popular
                        ? "bg-[#00416a] text-white hover:bg-[#002b45]"
                        : "bg-gray-100 text-[#00416a] hover:bg-gray-200"
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
              <p className="font-bold text-purple-800 mb-4">
                💼 Add-On Services (Optional)
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    service: "Additional DSC (4th director onwards)",
                    price: "₹1,500/director",
                    desc: "For companies with 5+ directors",
                  },
                  {
                    service: "Annual ROC Compliance Package",
                    price: "₹49,999/year",
                    desc: "MGT-7, AOC-4, ITR-6, Board meetings",
                  },
                  {
                    service: "Quarterly Compliance (Listed Companies)",
                    price: "₹99,999/year",
                    desc: "Quarterly results, stock exchange filings",
                  },
                  {
                    service: "Company Secretary Retainer",
                    price: "₹25,000/month",
                    desc: "Dedicated CS for all compliances",
                  },
                  {
                    service: "Increase in Authorized Capital",
                    price: "₹14,999",
                    desc: "MGT-14, SH-7, altered MOA filing",
                  },
                  {
                    service: "SEBI Listing Consultation",
                    price: "₹2,99,999",
                    desc: "IPO readiness audit, SEBI filings",
                  },
                ].map((addon) => (
                  <div
                    key={addon.service}
                    className="bg-white rounded-xl p-4 border border-purple-200"
                  >
                    <p className="font-bold text-purple-700 text-sm mb-1">
                      {addon.service}
                    </p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-2">
                      {addon.price}
                    </p>
                    <p className="text-xs text-gray-600">{addon.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kapoor, Founder & MD",
                  company: "GreenTech Innovations Limited",
                  location: "Bangalore",
                  text: "We were planning IPO within 3 years, so needed Public Ltd from day one. Taxvio handled entire incorporation — from capital deposit to INC-20A — in just 25 days. Their IPO-ready MOA/AOA saved us lakhs in legal amendments later. Highly professional team, especially their CS support for Board meetings and statutory registers.",
                },
                {
                  name: "Priya Mehta, Director",
                  company: "Sunrise Exports Limited",
                  location: "Mumbai",
                  text: "Switching from Private Ltd to Public Ltd seemed daunting with 7 shareholders and ₹5 lakh capital requirement. Taxvio simplified everything — coordinated with all 7 investors, managed capital deposit, and got us incorporated in 22 days. Their Premium package was worth every rupee. Now we're ready for institutional funding!",
                },
                {
                  name: "Amit Shah, CEO",
                  company: "TechVenture Systems Limited",
                  location: "Delhi NCR",
                  text: "We chose Public Ltd for credibility and future IPO plans. Taxvio not only registered our company but also set up independent directors, audit committee, and ESOP framework — all IPO prerequisites. Their IPO Ready package (₹1.99 lakh) is a steal considering merchant bankers quote ₹10+ lakh for same services post-incorporation!",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-[#00416a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Pan-India Service" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Public Limited Company Registration Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online Public Limited Company registration services for
              large-scale businesses across{" "}
              <strong>
                Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad
              </strong>
              , and all cities in India. Complete remote incorporation with
              doorstep DSC delivery, capital deposit coordination, and MCA filing
              support.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Mumbai",
                "Delhi NCR",
                "Bangalore",
                "Hyderabad",
                "Chennai",
                "Pune",
                "Ahmedabad",
                "Kolkata",
                "Noida",
                "Gurgaon",
                "Khatauli",
                "Muzaffarnagar",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                >
                  📍 {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Related Services" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Other ROC & Business Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Private Limited Company",
                  icon: "🏢",
                  link: "/serviceslist/business-registration/private-limited-formation",
                  desc: "Private Ltd company registration",
                },
                {
                  title: "LLP Registration",
                  icon: "🤝",
                  link: "/serviceslist/business-registration/llp-registration",
                  desc: "Limited Liability Partnership",
                },
                {
                  title: "ROC Annual Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4, ITR compliance",
                },
                {
                  title: "Share Transfer",
                  icon: "📜",
                  link: "/serviceslist/roc/share-transfer",
                  desc: "Share transfer & SH-4 filing",
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
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
                    Build Your IPO-Ready Enterprise
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Register Public Limited Company — Raise Unlimited Capital
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get stock market listing eligibility, unlimited fundraising
                    potential, and institutional credibility. Complete MCA
                    registration with INC-33/INC-34 filing, ₹5 lakh capital
                    compliance, MOA/AOA with SEBI clauses, Certificate of
                    Incorporation, and INC-20A (Commencement of Business).
                    Starting ₹49,999 with expert CA, CS & legal team. Turn your
                    vision into a publicly traded giant!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Register Now — ₹49,999
                  </Link>
                  <Link
                    href="#our-services"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    View Packages
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

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I convert my existing Private Limited Company to Public Limited Company?",
      a: "Yes, conversion from Private Limited to Public Limited is allowed under Section 18 of Companies Act 2013. Process: (1) Pass Special Resolution in Shareholders' General Meeting approving conversion, (2) Alter MOA & AOA (change name suffix from 'Private Limited' to 'Limited', remove restrictive share transfer clauses, add minimum 7 shareholders, etc.), (3) Ensure minimum 3 directors and 7 shareholders (add new directors/shareholders if needed), (4) Deposit minimum ₹5 lakh paid-up capital if current paid-up is less, (5) File Form MGT-14 (copy of special resolution + altered MOA/AOA) with ROC, (6) File Form INC-27 (conversion application) with ROC, (7) ROC verifies and issues fresh Certificate of Incorporation reflecting 'Limited' status. Timeline: 30-45 days. Cost: ₹29,999 (Taxvio service fee) + ROC filing fees. Important: After conversion, you must comply with ALL Public Ltd regulations (INC-20A, higher compliance, etc.). Conversion is IRREVERSIBLE — Public Ltd cannot convert back to Private Ltd easily.",
    },
    {
      q: "What are the annual compliance costs for a Public Limited Company (unlisted)?",
      a: "Annual compliance costs for UNLISTED Public Ltd company (FY 2025-26 estimate): (1) Statutory Audit: ₹25,000-75,000 (CA fees, depends on turnover and complexity), (2) ROC Annual Filing (MGT-7 + AOC-4): ₹15,000-30,000 (CA/CS fees), (3) Income Tax Return (ITR-6): ₹10,000-25,000 (CA fees), (4) GST Returns (if registered): ₹3,000-7,000/month = ₹36,000-84,000/year, (5) TDS Returns (quarterly): ₹2,000-5,000/quarter = ₹8,000-20,000/year, (6) MCA Annual Filing Fee: ₹4,800-9,600 (paid during MGT-7/AOC-4 filing), (7) DIN-KYC for all directors: ₹500 x number of directors, (8) Board Meeting Expenses: ₹10,000-25,000/year (if hiring professional CS for minutes), (9) Company Secretary Retainer (if appointed): ₹15,000-40,000/month = ₹1,80,000-4,80,000/year (mandatory if paid-up capital ≥ ₹5 crore). TOTAL ANNUAL COST: ₹1,00,000-7,00,000 depending on company size, turnover, and whether CS is appointed. Taxvio Annual Compliance Package: ₹49,999/year (covers ROC filings, audit coordination, Board meetings, compliance calendar) — save 40-60% vs hiring full-time CS.",
    },
    {
      q: "Do I need a Company Secretary (CS) for Public Limited Company?",
      a: "CS appointment is MANDATORY for Public Ltd company if PAID-UP SHARE CAPITAL is ₹5 CRORE OR MORE (as per Section 203 of Companies Act). If your paid-up capital is <₹5 crore (e.g., you started with ₹5 lakh minimum and haven't raised more capital yet), CS is NOT mandatory — but HIGHLY RECOMMENDED for compliance management. CS responsibilities: (1) ROC compliance (annual filings, event-based filings), (2) Board meeting and General meeting coordination (notice, agenda, minutes), (3) Statutory registers maintenance, (4) SEBI compliance (if company is listed), (5) Share transfer and transmission, (6) Legal opinion on corporate matters. CS Cost: ₹15,000-40,000/month (full-time) OR ₹2,000-5,000/meeting (part-time/retainer basis). If you cannot afford full-time CS, Taxvio offers CS-on-retainer service (₹25,000/month) where our CS handles all compliances remotely.",
    },
    {
      q: "What is the difference between INC-32 (SPICe+) and INC-33 for company incorporation?",
      a: "INC-32 (SPICe+) and INC-33 are TWO DIFFERENT incorporation forms for different company types: (1) INC-32 (SPICe+): Used for PRIVATE LIMITED COMPANY, ONE PERSON COMPANY (OPC), and SECTION 8 COMPANY (NGO). It is a SIMPLIFIED, INTEGRATED form that combines incorporation + DIN + PAN + TAN + EPFO + ESIC + GST/Prof Tax (via AGILE). Single-page submission. (2) INC-33: Used for PUBLIC LIMITED COMPANY incorporation. It is a MORE DETAILED form requiring separate attachments for MOA, AOA, Banker's Certificate, subscriber details, director details, etc. Must be filed along with INC-34 (AGILE-PRO) for PAN/TAN/EPFO. WHY DIFFERENT FORMS? Public Ltd has stricter requirements (minimum 7 shareholders, ₹5 lakh paid-up capital, INC-20A certificate) — hence needs detailed scrutiny via INC-33. Private Ltd is simpler — hence SPICe+ (one-click form). NOTE: If you mistakenly file SPICe+ for Public Ltd company, MCA will REJECT the form. Always use INC-33 for Public Ltd.",
    },
    {
      q: "Can a Public Limited Company have foreign directors or shareholders?",
      a: "Yes, Public Ltd can have BOTH foreign directors and foreign shareholders, but with certain conditions: (1) FOREIGN DIRECTORS: Allowed without restriction. However, at least ONE director (recommended TWO) must be RESIDENT OF INDIA (stayed in India for 182+ days in previous year) as per Section 149(3). Foreign director must obtain DIN and DSC. No Aadhaar required — passport is sufficient. (2) FOREIGN SHAREHOLDERS: Allowed, but subject to FDI (Foreign Direct Investment) regulations: (a) AUTOMATIC ROUTE: 100% foreign shareholding allowed in most sectors (manufacturing, IT, e-commerce, pharma, etc.) without government approval. (b) GOVERNMENT APPROVAL ROUTE: Some sectors have FDI caps or require FIPB/RBI approval — e.g., Defense (74% cap), Print Media (26% cap), Retail (51% cap), Real Estate (100% but conditions apply). (c) DOWNSTREAM INVESTMENT: If foreign shareholding >10%, company becomes 'downstream investment company' and must follow stricter FDI reporting. (3) REPORTING: If foreign investment >10% of paid-up capital, company must file FC-GPR (Foreign Currency - Gross Provisional Return) with RBI annually. Taxvio assists with FDI structuring, RBI reporting, and foreign director/shareholder KYC.",
    },
    {
      q: "What happens if Public Ltd company does not file INC-20A and starts business?",
      a: "If Public Ltd company commences business or exercises borrowing powers WITHOUT obtaining Certificate of Commencement of Business (INC-20A), it attracts SEVERE PENALTIES under Section 11(2): (1) COMPANY PENALTY: Fine of ₹50,000 (one-time), (2) DIRECTOR PENALTY: Fine of ₹1,000 PER DAY (for each director) from the date of commencement till INC-20A is filed. Example: If company operates for 30 days without INC-20A and has 3 directors, penalty = ₹50,000 (company) + ₹1,000 x 30 days x 3 directors = ₹50,000 + ₹90,000 = ₹1,40,000 total. (3) CONTRACT VALIDITY: Any contracts entered before INC-20A are VOIDABLE at the option of other party — they can refuse to honor the contract. (4) DIRECTOR LIABILITY: Directors can be held PERSONALLY LIABLE for losses incurred due to contracts entered before INC-20A. (5) WINDING UP: In extreme cases, Tribunal can order COMPULSORY WINDING UP of company for operating without INC-20A (Section 271(c)). RECOMMENDATION: File INC-20A IMMEDIATELY after receiving Certificate of Incorporation (within 1-2 days). Do NOT start business, open bank account, or enter contracts until INC-20A is issued. Taxvio ensures INC-20A is filed same day/next day after incorporation as part of standard service.",
    },
    {
      q: "Can Public Limited Company issue preference shares or debentures?",
      a: "Yes, Public Ltd company can issue BOTH preference shares and debentures (debt instruments) subject to compliance: (1) PREFERENCE SHARES: Can be issued with special rights (fixed dividend rate, redemption priority, etc.). Types: (a) Redeemable Preference Shares (must be redeemed within 20 years), (b) Irredeemable Preference Shares (NOT allowed as per Companies Act amendment), (c) Cumulative or Non-Cumulative (dividend accumulation), (d) Participating or Non-Participating (in surplus profits). Requirements: (a) MOA/AOA must authorize preference share issuance, (b) Pass Special Resolution in General Meeting, (c) File Form PAS-3 with ROC within 30 days, (d) Issue share certificates within 60 days. (2) DEBENTURES: Can be issued to raise debt capital (secured or unsecured). Types: (a) Convertible Debentures (can be converted to equity shares later), (b) Non-Convertible Debentures (NCDs — remain as debt), (c) Secured Debentures (backed by company assets), (d) Unsecured Debentures. Requirements: (a) MOA/AOA must authorize debenture issuance, (b) Pass Board Resolution, (c) Create Debenture Trust Deed (if secured), (d) File Form CHG-9 with ROC (for charge creation), (e) Appoint Debenture Trustee (mandatory for public issue >₹10 lakh). Public Ltd CAN OFFER debentures to PUBLIC via public issue (subject to SEBI regulations if listed). Taxvio assists with preference share and debenture issuance documentation and ROC filings.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Public Ltd Company Registration
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
          >
            <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
              <span>{f.q}</span>
              <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}