// app/serviceslist/income-tax/cryptocurrency-tax/CryptocurrencyTaxClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cryptocurrency Tax Filing - Virtual Digital Asset (VDA) Tax Compliance India",
  provider: {
    "@type": "AccountingService",
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
    "Specialized tax filing services for cryptocurrency and virtual digital assets (VDA) under Section 115BBH. 30% tax on crypto gains, 1% TDS compliance under Section 194S, ITR-2 filing with Schedule VDA, transaction reporting, loss computation (non-deductible), NFT taxation. Expert support for crypto traders and investors. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Cryptocurrency & VDA Tax Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "3999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "3999",
      maxPrice: "14999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the tax rate on cryptocurrency in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 115BBH (introduced in Finance Act 2022), income from transfer of Virtual Digital Assets (VDA) including cryptocurrency is taxed at a flat rate of 30% plus applicable surcharge and 4% cess — irrespective of your income slab. No deduction is allowed except the cost of acquisition. Losses from VDA cannot be set off against any other income or carried forward.",
      },
    },
    {
      "@type": "Question",
      name: "What is 1% TDS on cryptocurrency transactions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 194S mandates 1% TDS (Tax Deducted at Source) on payment for transfer of VDA where the value of consideration exceeds ₹10,000 in a financial year (or ₹50,000 for specified persons). This TDS is deducted by the crypto exchange (buyer) at the time of each transaction. The deducted amount can be claimed as credit while filing your Income Tax Return.",
      },
    },
    {
      "@type": "Question",
      name: "Can I set off crypto losses against gains or carry forward losses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Section 115BBH explicitly prohibits set-off of VDA losses against any other income (including other VDA gains in the same year) and also prohibits carry forward of losses to future years. Each profitable transaction is taxed at 30% individually, and losses are simply disallowed.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function CryptocurrencyTaxClient() {
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

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          ⚠️ Crypto Traders: 30% Tax + 1% TDS Applies — File ITR Correctly or Face Notices & Penalties
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
                href="/serviceslist/income-tax"
                className="hover:text-white transition"
              >
                Income Tax
              </Link>
              <span>/</span>
              <span className="text-white">Cryptocurrency Tax</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  ₿ Virtual Digital Asset (VDA) Tax
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Cryptocurrency
                  <br />
                  <span className="text-[#7ecbf0]">Tax Filing</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Traded <strong className="text-white">Bitcoin</strong>,{" "}
                  <strong className="text-white">Ethereum</strong>,{" "}
                  <strong className="text-white">altcoins</strong>, or{" "}
                  <strong className="text-white">NFTs</strong>? From 1 April 2022,
                  crypto gains are taxed at a flat{" "}
                  <strong className="text-white">30%</strong> under Section 115BBH —
                  with <strong className="text-white">NO loss set-off</strong>, NO
                  deductions except cost, and{" "}
                  <strong className="text-white">1% TDS</strong> on every
                  transaction. Ignoring this or filing incorrectly triggers AIS
                  mismatch notices. <strong className="text-white">Taxvio</strong>{" "}
                  provides specialized crypto tax computation, TDS reconciliation,
                  Schedule VDA preparation, and compliant ITR-2 filing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File Crypto Tax — ₹3,999 →
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20Cryptocurrency%20Tax%20Filing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Support
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 30% Tax Computation",
                    "✅ 1% TDS Reconciliation",
                    "✅ Schedule VDA Filing",
                    "✅ NFT & DeFi Included",
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
                    ["💰", "Flat 30% tax on all crypto gains (Sec 115BBH)"],
                    ["🔻", "1% TDS on transfer value >₹10,000 (Sec 194S)"],
                    ["❌", "NO loss set-off or carry forward allowed"],
                    ["📊", "Schedule VDA mandatory in ITR-2"],
                    ["🎨", "NFTs, staking rewards, airdrops all taxable"],
                    ["🚀", "Filing fee: ₹3,999 onwards"],
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
              { number: "500+", label: "Crypto ITRs Filed", icon: "✅" },
              { number: "30%", label: "Flat Tax Rate", icon: "💰" },
              { number: "1%", label: "TDS on Transfers", icon: "🔻" },
              { number: "₹3,999", label: "Starting Fee", icon: "₿" },
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
              "✔ Section 115BBH Experts",
              "✔ 1% TDS Compliance",
              "✔ Schedule VDA Filing",
              "✔ DeFi & NFT Taxation",
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
          {/* WHAT IS VDA */}
          <section id="what-is-vda">
            <SectionLabel text="Understanding VDA Tax" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Virtual Digital Asset (VDA) & How Is It Taxed?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Virtual Digital Asset (VDA)</strong> is defined under
                  Section 2(47A) of the Income Tax Act as any information, code,
                  number, or token (not being Indian or foreign currency)
                  generated through cryptographic means or otherwise, providing a
                  digital representation of value which can be transferred, stored,
                  or traded electronically.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    ₿ VDA Includes
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Cryptocurrencies (Bitcoin, Ethereum, Litecoin, Ripple, Dogecoin, etc.)",
                      "Altcoins and stablecoins (USDT, USDC, etc.)",
                      "NFTs (Non-Fungible Tokens) — digital art, collectibles, metaverse assets",
                      "Tokens issued via ICO, IEO, or token sales",
                      "DeFi tokens (Uniswap, Aave, Compound, etc.)",
                      "Any other digital asset NOT expressly excluded",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">❌ VDA Excludes</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Central Bank Digital Currency (CBDC) — digital rupee issued by RBI",
                      "Indian rupee or any foreign currency",
                      "Gift vouchers, loyalty points, coupons (if redeemable only for goods/services)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-[#00416a]">
                  Section 115BBH — The VDA Tax Regime
                </p>
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Tax Rate: Flat 30%
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Income from transfer of any VDA is taxed at a{" "}
                    <strong>flat 30%</strong> (plus applicable surcharge and 4%
                    cess), irrespective of your income slab or residential status.
                    This is the HIGHEST tax rate in the Income Tax Act.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200">
                    <p className="font-bold text-orange-800 text-xs mb-2">
                      🧮 Computation Formula
                    </p>
                    <div className="font-mono text-xs text-gray-800 space-y-1">
                      <p>Sale Consideration (in INR)</p>
                      <p className="text-red-600">(–) Cost of Acquisition</p>
                      <p className="border-t pt-1">= VDA Income</p>
                      <p className="text-orange-700 font-bold">
                        Tax @ 30% + Surcharge + Cess
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                  <p className="font-bold text-yellow-800 mb-3">
                    ⚠️ Critical Restrictions
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "NO deduction allowed except the cost of acquisition (no transaction fees, no electricity for mining, no platform charges)",
                      "NO set-off of VDA losses against VDA gains or any other income",
                      "NO carry forward of VDA losses to future years",
                      "NO indexation benefit on long-term holdings",
                      "Gift of VDA is taxable in the hands of the recipient under Section 56(2)(x)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  provides specialized cryptocurrency tax computation, TDS
                  reconciliation, and ITR-2 filing for crypto traders and investors
                  across Uttar Pradesh, Noida, Delhi NCR, and pan-India.
                </p>
              </div>
            </div>
          </section>

          {/* TDS SECTION 194S */}
          <section id="tds-section">
            <SectionLabel text="1% TDS Rule" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Section 194S — 1% TDS on Cryptocurrency Transactions
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                From <strong>1 July 2022</strong>, every person (exchange,
                individual buyer, or platform) making payment for transfer of VDA
                must deduct <strong>1% TDS</strong> if the aggregate value of
                consideration in a financial year exceeds certain thresholds.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    📊 TDS Deduction Thresholds
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        category: "General Case (Exchange to User)",
                        threshold: "₹50,000 per FY",
                        rate: "1%",
                        desc: "If you are selling crypto on an exchange and the total sale value in the financial year exceeds ₹50,000, the exchange will deduct 1% TDS on each transaction.",
                      },
                      {
                        category: "Peer-to-Peer / Other Cases",
                        threshold: "₹10,000 per FY",
                        rate: "1%",
                        desc: "If an individual or entity buys crypto from you (not via exchange) and the aggregate payment exceeds ₹10,000 in the FY, they must deduct 1% TDS.",
                      },
                    ].map((item) => (
                      <div
                        key={item.category}
                        className="bg-purple-50 rounded-xl p-4 border border-purple-300"
                      >
                        <p className="font-bold text-purple-800 text-sm mb-2">
                          {item.category}
                        </p>
                        <div className="space-y-1 text-xs text-gray-700">
                          <p>
                            <strong>Threshold:</strong> {item.threshold}
                          </p>
                          <p>
                            <strong>TDS Rate:</strong> {item.rate}
                          </p>
                          <p className="mt-2">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    ✅ How TDS Works — Example
                  </h3>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Mr. Sharma</strong> sells Bitcoin worth ₹5,00,000 on
                      WazirX in FY 2024-25.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Sale value: ₹5,00,000</li>
                      <li>• 1% TDS deducted by WazirX: ₹5,000</li>
                      <li>• Amount credited to Mr. Sharma: ₹4,95,000</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-3">
                      The ₹5,000 TDS is deposited with the government and shown in
                      Form 26AS. Mr. Sharma must report this VDA income in ITR-2
                      and claim the ₹5,000 as TDS credit. If his actual tax
                      liability (30% on profit) is ₹1,50,000, he must pay ₹1,45,000
                      as balance tax.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-800 mb-3">
                    ⚠️ Important TDS Notes
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "TDS is on SALE VALUE, not on profit. Even if you made a loss, 1% TDS is still deducted.",
                      "TDS is deducted by the buyer/exchange at the time of payment, not at year-end.",
                      "Lower TDS Certificate under Section 197 is NOT available for VDA transactions.",
                      "If the exchange is outside India and does not deduct TDS, you are still liable to report and pay 30% tax on gains.",
                      "TDS certificate (Form 16A) is issued by the exchange quarterly — download from their platform or check Form 26AS.",
                    ].map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">→</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TAXABLE SCENARIOS */}
          <section id="taxable-scenarios">
            <SectionLabel text="What's Taxable" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxable Cryptocurrency Transactions
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              The following transactions trigger VDA income taxable at 30% under
              Section 115BBH:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  scenario: "Sale of Crypto for INR",
                  icon: "💱",
                  desc: "You sell Bitcoin, Ethereum, or any crypto on an exchange (WazirX, CoinDCX, Binance, etc.) and receive Indian rupees. The difference between sale price and purchase price is taxable at 30%.",
                  example:
                    "Bought 0.1 BTC for ₹2,00,000 → Sold for ₹3,00,000 → Profit ₹1,00,000 → Tax @ 30% = ₹30,000",
                },
                {
                  scenario: "Crypto-to-Crypto Exchange",
                  icon: "🔄",
                  desc: "Exchanging one cryptocurrency for another (e.g., Bitcoin for Ethereum) is treated as a transfer. You must compute the INR value of both cryptos at the time of exchange and calculate profit.",
                  example:
                    "Swapped 1 ETH (value ₹1,50,000) for 0.05 BTC (value ₹1,80,000) → Gain ₹30,000 → Tax ₹9,000",
                },
                {
                  scenario: "Sale/Transfer of NFTs",
                  icon: "🎨",
                  desc: "Sale of NFTs (digital art, collectibles, metaverse land, in-game assets) is taxable under VDA. If you are the creator, the entire sale price minus minting cost is taxable.",
                  example:
                    "Created NFT (minting cost ₹5,000) → Sold for ₹50,000 → Income ₹45,000 → Tax ₹13,500",
                },
                {
                  scenario: "Staking Rewards & Interest from Crypto",
                  icon: "🏦",
                  desc: "Rewards earned from staking (Proof of Stake), yield farming, or interest on crypto deposits are taxable as VDA income at fair market value on the date of receipt.",
                  example:
                    "Staked Ethereum and received 0.1 ETH as reward (value ₹15,000) → Taxable income ₹15,000 → Tax ₹4,500",
                },
                {
                  scenario: "Airdrops & Hard Forks",
                  icon: "🎁",
                  desc: "Free tokens received via airdrops or as a result of hard forks (e.g., Bitcoin Cash from Bitcoin) are taxable at FMV on date of receipt. Later sale triggers additional 30% tax on sale profit.",
                  example:
                    "Received 10 tokens via airdrop (FMV ₹1,000 each) → Income ₹10,000 → Tax ₹3,000. Sold later for ₹15,000 → Additional profit ₹5,000 → Tax ₹1,500",
                },
                {
                  scenario: "Mining Rewards",
                  icon: "⛏️",
                  desc: "Cryptocurrency received as mining reward is taxable at FMV on the date mined. Later sale of mined crypto is taxed again on the profit from mining value to sale value.",
                  example:
                    "Mined 1 BTC (value ₹25,00,000 on mining date) → Income ₹25 lakh → Tax ₹7.5 lakh. Sold later for ₹30 lakh → Profit ₹5 lakh → Tax ₹1.5 lakh",
                },
                {
                  scenario: "Payment via Crypto for Goods/Services",
                  icon: "🛒",
                  desc: "Using crypto to pay for goods or services is treated as a barter transaction — disposal of crypto. You must compute gain based on crypto's FMV at payment time vs. acquisition cost.",
                  example:
                    "Paid 0.05 BTC (purchased for ₹1,00,000, current value ₹1,50,000) for a laptop → Gain ₹50,000 → Tax ₹15,000",
                },
                {
                  scenario: "Gift of Crypto (Received by Recipient)",
                  icon: "🎁",
                  desc: "If you receive crypto as a gift (not from relatives), it is taxable under Section 56(2)(x) at FMV on date of receipt in the hands of the recipient at 30%. Gifting is not taxable for the giver.",
                  example:
                    "Received 0.1 ETH as gift from a friend (value ₹15,000) → Taxable in recipient's hands @ 30% = ₹4,500",
                },
              ].map((item) => (
                <div
                  key={item.scenario}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        {item.scenario}
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-200">
                    <p className="font-bold text-blue-800 text-xs mb-2">
                      💡 Example
                    </p>
                    <p className="text-xs text-gray-600">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NON-TAXABLE */}
          <section id="non-taxable">
            <SectionLabel text="What's NOT Taxable" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Non-Taxable Cryptocurrency Events
            </h2>
            <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                The following actions do NOT trigger immediate tax liability
                (though future disposal will):
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    event: "Buying & Holding Crypto",
                    desc: "Simply purchasing crypto and holding it in your wallet is not taxable. Tax arises only when you transfer/sell it.",
                  },
                  {
                    event: "Transferring Between Your Own Wallets",
                    desc: "Moving crypto from one wallet to another that you own (e.g., exchange to hardware wallet) is not a transfer for tax purposes.",
                  },
                  {
                    event: "Receiving Crypto as Gift from Relatives",
                    desc: "Gift from specified relatives (as defined in Section 56) is not taxable. However, sale of such gifted crypto later will be taxable.",
                  },
                  {
                    event: "Unrealized Gains",
                    desc: "If your crypto portfolio value increases but you haven't sold, it's an unrealized gain — not taxable until you actually dispose of the asset.",
                  },
                ].map((item) => (
                  <div
                    key={item.event}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 text-sm mb-2">
                      ✅ {item.event}
                    </p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMPUTATION PROCESS */}
          <section id="process">
            <SectionLabel text="Our Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How Taxvio Computes Your Crypto Tax
            </h2>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Transaction Data Collection",
                    description:
                      "We collect transaction history from all exchanges you used (WazirX, CoinDCX, Binance, Coinbase, etc.) — trade history, deposit/withdrawal logs, wallet addresses. We also gather DeFi transaction records, NFT marketplace data (OpenSea, Rarible), and staking/mining reward details.",
                    duration: "2-3 days",
                  },
                  {
                    step: 2,
                    title: "Transaction Classification",
                    description:
                      "We classify each transaction as: Buy, Sell, Crypto-to-Crypto swap, Airdrop, Staking reward, Mining reward, NFT mint/sale, Gift received, Transfer between wallets. Non-taxable events are excluded. Taxable events are flagged for computation.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Cost Basis Determination (FIFO Method)",
                    description:
                      "We apply First-In-First-Out (FIFO) accounting to determine cost of acquisition for each sale. If you bought crypto in multiple tranches, we match each sale to the earliest purchase to compute profit. For airdrops/mining, FMV on receipt date becomes cost basis.",
                    duration: "2-3 days",
                  },
                  {
                    step: 4,
                    title: "INR Conversion & Profit Computation",
                    description:
                      "All crypto values are converted to INR using exchange rates at transaction time (as per exchange data or CoinMarketCap/CoinGecko historical rates). We compute profit: Sale Value (INR) – Cost of Acquisition (INR) = VDA Income. Transaction fees and platform charges are NOT deductible.",
                    duration: "2 days",
                  },
                  {
                    step: 5,
                    title: "Loss Identification (Non-Deductible)",
                    description:
                      "We identify all loss-making transactions. Since VDA losses cannot be set off or carried forward, we document them separately for record-keeping and to show they are being disregarded in tax computation.",
                    duration: "1 day",
                  },
                  {
                    step: 6,
                    title: "1% TDS Reconciliation",
                    description:
                      "We download Form 26AS to verify 1% TDS deducted by exchanges under Section 194S. We reconcile exchange-wise TDS with your transaction data. Any mismatch is flagged and resolved by contacting the exchange or filing TDS correction requests.",
                    duration: "1-2 days",
                  },
                  {
                    step: 7,
                    title: "30% Tax Computation on Total VDA Income",
                    description:
                      "We sum up all profitable VDA transactions to arrive at total VDA income. Tax is computed at flat 30% + applicable surcharge (if total income >₹50 lakh/₹1 crore/₹2 crore) + 4% cess. We compute advance tax liability and interest under Section 234B/234C.",
                    duration: "1 day",
                  },
                  {
                    step: 8,
                    title: "Schedule VDA Preparation & ITR-2 Filing",
                    description:
                      "We prepare Schedule VDA (detailed disclosure of VDA transactions and income) and file ITR-2 with complete reporting. We attach supporting documents (transaction statements, cost basis workings, TDS certificates). E-verification is completed within 30 days.",
                    duration: "2-3 days",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-orange-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-orange-300 rounded-2xl p-6">
                <p className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Turnaround
                </p>
                <p className="text-sm text-gray-700">
                  <strong>10-15 working days</strong> from receipt of complete
                  transaction data to final ITR-2 filing and verification. Express
                  service available for urgent deadlines.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Crypto Tax Filing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  Mandatory Documents
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card (copy)",
                    "Aadhaar card (if available)",
                    "Complete transaction history from ALL exchanges used (WazirX, CoinDCX, Binance, etc.)",
                    "Wallet addresses (for tracking on-chain transfers)",
                    "Form 26AS (showing 1% TDS deducted by exchanges)",
                    "Purchase records for each crypto (date, quantity, price in INR)",
                    "Sale records (date, quantity, sale price in INR)",
                    "Previous year ITR (if filed)",
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
                  Additional Documents (If Applicable)
                </p>
                <ul className="space-y-3">
                  {[
                    "NFT transaction records (OpenSea, Rarible, Foundation, etc.)",
                    "Staking rewards statement (from staking platforms)",
                    "Mining pool payouts (date, quantity, FMV in INR)",
                    "Airdrop receipts (date, quantity, FMV)",
                    "DeFi transaction logs (Uniswap, PancakeSwap, Aave, etc.)",
                    "Hard fork receipts (if you received new coins from forks)",
                    "Gift documents (if crypto was gifted to you — donor's name, relationship)",
                    "Crypto loan/lending records (if you took/gave crypto loans)",
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
          </section>

          {/* COMMON MISTAKES */}
          <section id="mistakes">
            <SectionLabel text="Avoid These Errors" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common Crypto Tax Filing Mistakes
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              These mistakes trigger AIS mismatch notices under Section 143(1)(a) or
              notices for under-reporting of income.
            </p>
            <div className="space-y-5">
              {[
                {
                  error: "Not Reporting Crypto Income at All",
                  causes: [
                    "Belief that crypto is not taxable or unregulated in India",
                    "Using foreign exchanges and thinking transactions are not tracked",
                    "Small profits that seem insignificant",
                  ],
                  solutions: [
                    "ALL crypto income is taxable at 30% from FY 2022-23 onwards — no exception",
                    "Even foreign exchange transactions are tracked via AIS (Annual Information Statement) if linked to your PAN",
                    "Ignoring crypto income can lead to notices under Section 148 (reopening of assessment) with penalty up to 200% of tax",
                  ],
                },
                {
                  error: "Deducting Transaction Fees or Expenses",
                  causes: [
                    "Assuming transaction fees can be deducted like in regular capital gains",
                    "Deducting exchange fees, withdrawal charges, gas fees",
                  ],
                  solutions: [
                    "Section 115BBH allows ONLY cost of acquisition as deduction — nothing else",
                    "Transaction fees, exchange charges, mining electricity costs, hardware depreciation — ALL are disallowed",
                    "Even if you incurred ₹10,000 in fees, you cannot deduct it from VDA income",
                  ],
                },
                {
                  error: "Setting Off Crypto Losses Against Gains",
                  causes: [
                    "Applying normal capital gains loss set-off logic to crypto",
                    "Assuming loss from one coin can offset profit from another",
                  ],
                  solutions: [
                    "VDA losses CANNOT be set off against VDA gains in the same year or any other income",
                    "VDA losses CANNOT be carried forward to future years",
                    "Each profitable transaction is taxed individually at 30% — losses are simply ignored",
                  ],
                },
                {
                  error: "Not Reporting 1% TDS in ITR",
                  causes: [
                    "Forgetting to download Form 26AS or check AIS",
                    "Not claiming TDS credit in ITR-2 Schedule TDS2",
                  ],
                  solutions: [
                    "All TDS deducted by exchanges under Section 194S is available as credit in Form 26AS",
                    "Download Form 26AS from e-filing portal and verify TDS entries",
                    "Claim TDS credit in ITR-2 under Schedule TDS2 to reduce final tax payable",
                    "If TDS is not appearing in 26AS, contact the exchange for TDS certificate (Form 16A) and file correction request",
                  ],
                },
                {
                  error: "Using Wrong Valuation for Crypto-to-Crypto Swaps",
                  causes: [
                    "Not converting crypto-to-crypto swap value to INR at transaction time",
                    "Using current market price instead of transaction-date price",
                  ],
                  solutions: [
                    "For crypto-to-crypto swaps (e.g., BTC to ETH), both coins must be valued in INR at transaction timestamp",
                    "Use exchange rate at the exact time of swap from exchange data or historical price APIs (CoinMarketCap, CoinGecko)",
                    "Difference in INR value = taxable VDA income",
                  ],
                },
                {
                  error: "Not Reporting Staking Rewards or Airdrops",
                  causes: [
                    "Thinking 'free coins' are not taxable",
                    "Not tracking the date and value of receipt",
                  ],
                  solutions: [
                    "Staking rewards, airdrops, mining rewards are taxable at FMV on date of receipt",
                    "Later sale of those coins triggers additional 30% tax on profit from receipt value to sale value",
                    "Maintain record of receipt date, quantity, and FMV in INR for every airdrop/reward",
                  ],
                },
                {
                  error: "Filing ITR-1 Instead of ITR-2",
                  causes: [
                    "Thinking crypto is just another form of capital gains",
                    "Using online portals that auto-select ITR-1 for salaried individuals",
                  ],
                  solutions: [
                    "ITR-1 (Sahaj) does NOT have Schedule VDA — it cannot be used for reporting crypto income",
                    "You MUST file ITR-2 (for individuals with capital gains and VDA income)",
                    "Failure to use correct form leads to defective return and notice under Section 139(9)",
                  ],
                },
              ].map((item) => (
                <details
                  key={item.error}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      {item.error}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="grid md:grid-cols-2 gap-6 pt-5">
                      <div>
                        <p className="font-bold text-red-700 mb-3 text-sm">
                          🔍 Why It Happens
                        </p>
                        <ul className="space-y-2">
                          {item.causes.map((cause, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-red-500 mt-0.5">•</span>
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-3 text-sm">
                          ✅ Correct Treatment
                        </p>
                        <ul className="space-y-2">
                          {item.solutions.map((solution, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-green-600 mt-0.5">→</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* SERVICES & PRICING */}
          <section id="our-services">
            <SectionLabel text="How We Help" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Taxvio's Cryptocurrency Tax Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              From simple buy-sell transactions to complex DeFi, NFT, and staking
              scenarios — we handle every crypto tax situation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "₿",
                  title: "Basic Crypto Tax Filing (Buy-Sell Only)",
                  desc: "For simple crypto investors with buy-sell transactions on 1-2 exchanges. Includes transaction reconciliation, FIFO computation, 1% TDS credit, and ITR-2 filing with Schedule VDA.",
                  price: "₹3,999",
                },
                {
                  icon: "🔄",
                  title: "Advanced (Multi-Exchange + Crypto-to-Crypto)",
                  desc: "For traders using multiple exchanges (3+) with crypto-to-crypto swaps, P2P trades, and wallet transfers. Includes INR conversion at transaction timestamps and complete audit trail.",
                  price: "₹7,999",
                },
                {
                  icon: "🎨",
                  title: "NFT Taxation & Reporting",
                  desc: "Complete tax computation for NFT creators and collectors — minting costs, royalty income, marketplace sales (OpenSea, Rarible, Foundation). Includes Schedule VDA for NFT transactions.",
                  price: "₹5,999",
                },
                {
                  icon: "🏦",
                  title: "Staking, Yield Farming & DeFi Taxation",
                  desc: "Specialized handling of staking rewards, liquidity pool rewards, yield farming income, DeFi lending/borrowing. FMV determination at receipt, subsequent sale tracking, and dual taxation handling.",
                  price: "₹8,999",
                },
                {
                  icon: "⛏️",
                  title: "Mining Reward Taxation",
                  desc: "Tax computation for crypto mining rewards — FMV on mining date, cost basis for subsequent sale, treatment of mining expenses (disallowed), pool payout reconciliation.",
                  price: "₹6,999",
                },
                {
                  icon: "🎁",
                  title: "Airdrop & Hard Fork Taxation",
                  desc: "Reporting of free tokens received via airdrops, bounty programs, or hard forks. FMV determination, Section 56(2)(x) analysis for gifts, and dual taxation on receipt + sale.",
                  price: "₹4,999",
                },
                {
                  icon: "📊",
                  title: "1% TDS Reconciliation & Correction",
                  desc: "Download and verify Form 26AS, reconcile TDS with exchange statements, identify missing TDS entries, file TDS correction requests (Form 26QB rectification), and claim TDS credit.",
                  price: "₹2,999",
                },
                {
                  icon: "📋",
                  title: "Schedule VDA Preparation (Detailed Disclosure)",
                  desc: "Complete Schedule VDA preparation with transaction-wise details — date, type, quantity, cost, sale price, gain/loss. Attached to ITR-2 for full transparency and compliance.",
                  price: "₹1,999",
                },
                {
                  icon: "📨",
                  title: "Crypto Tax Notice Response",
                  desc: "Drafting responses to AIS mismatch notices, Section 143(1)(a) intimations, or 148 reopening notices related to unreported crypto income. Includes supporting computation and evidence.",
                  price: "₹9,999",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <p className="text-lg font-bold text-[#00416a]">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <p className="font-bold text-green-800 mb-3">
                📦 Complete Package Pricing
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    package: "Basic Trader",
                    price: "₹3,999",
                    includes: [
                      "Buy-sell transactions only",
                      "1-2 exchanges",
                      "FIFO computation",
                      "1% TDS reconciliation",
                      "ITR-2 filing + Schedule VDA",
                    ],
                  },
                  {
                    package: "Advanced Trader",
                    price: "₹9,999",
                    includes: [
                      "Everything in Basic",
                      "3+ exchanges + wallets",
                      "Crypto-to-crypto swaps",
                      "Staking/airdrop income",
                      "Complete audit trail",
                    ],
                  },
                  {
                    package: "Premium (DeFi/NFT)",
                    price: "₹14,999",
                    includes: [
                      "Everything in Advanced",
                      "NFT minting & sales",
                      "DeFi yield farming",
                      "Mining rewards",
                      "1 year notice support",
                    ],
                  },
                ].map((pkg) => (
                  <div
                    key={pkg.package}
                    className="bg-white rounded-xl p-5 border border-green-300"
                  >
                    <p className="font-bold text-green-800 mb-1">{pkg.package}</p>
                    <p className="text-2xl font-extrabold text-[#00416a] mb-3">
                      {pkg.price}
                    </p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-green-600 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Crypto Traders
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Arjun Verma",
                  location: "Noida",
                  text: "I had over 200 crypto transactions across WazirX, Binance, and Uniswap — total chaos. Taxvio pulled all data, applied FIFO, computed gains coin-by-coin, and filed my ITR. My tax was ₹8.2 lakh but they saved me from a potential notice by getting everything documented perfectly.",
                },
                {
                  name: "Sneha Kapoor",
                  location: "Mumbai",
                  text: "I created and sold NFTs on OpenSea and didn't know how to report it. Taxvio explained that both minting income and sale profit are taxable at 30%. They computed everything, filed Schedule VDA, and I'm fully compliant now. Great crypto tax experts!",
                },
                {
                  name: "Vikram Singh",
                  location: "Delhi",
                  text: "Got a 143(1)(a) notice for unreported crypto income of ₹12 lakh detected in AIS. Taxvio prepared the full computation, showed my cost basis, reconciled 1% TDS, and filed rectification. The demand was corrected to ₹1.8 lakh and I paid via Challan 280. Saved me ₹3 lakh!",
                },
              ].map((r, i) => (
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
                    "{r.text}"
                  </p>
                  <p className="font-bold text-[#00416a]">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Our Reach" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Cryptocurrency Tax Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides cryptocurrency tax filing for traders, investors, NFT
              creators, and DeFi users across <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Mumbai</strong>,{" "}
              <strong>Bangalore</strong>, and pan-India online.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Bangalore",
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
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related Income Tax Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Capital Gains Tax",
                  icon: "📈",
                  link: "/serviceslist/income-tax/capital-gains-computation",
                  desc: "Stock & property gains computation.",
                },
                {
                  title: "ITR Filing — Business",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-business",
                  desc: "ITR-3 for trading as business.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to crypto AIS mismatch.",
                },
                {
                  title: "Tax Planning",
                  icon: "📊",
                  link: "/serviceslist/income-tax/tax-planning",
                  desc: "Strategic crypto tax planning.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
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
                    File Your Crypto Tax Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Complete Cryptocurrency Tax Compliance
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Expert tax filing for Bitcoin, Ethereum, NFTs, DeFi, and all
                    crypto transactions. 30% tax computation, 1% TDS reconciliation,
                    Schedule VDA preparation, and ITR-2 filing. Starting ₹3,999.
                    Avoid AIS mismatch notices and penalties.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File Now — ₹3,999
                  </Link>
                  <a
                    href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20Cryptocurrency%20Tax%20Filing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">💬</span> WhatsApp Us
                  </a>
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
      q: "Is cryptocurrency trading considered business or investment in India?",
      a: "The Income Tax Act does not explicitly classify crypto trading as business or investment. However, for most retail traders and investors, crypto gains are taxed as 'income from transfer of VDA' under Section 115BBH at a flat 30% — regardless of whether it's business or investment. If you are a professional day-trader conducting high-frequency trading with significant turnover, you MAY be able to argue that it's business income under Section 28, allowing you to deduct business expenses. However, this is a grey area and requires expert analysis. Taxvio recommends Section 115BBH treatment for compliance safety unless you meet specific criteria for business classification.",
    },
    {
      q: "Can I claim transaction fees paid to exchanges as a deduction?",
      a: "No. Section 115BBH explicitly states that NO deduction is allowed except the cost of acquisition. This means brokerage, exchange fees, transaction charges, withdrawal fees, network gas fees, wallet fees — NOTHING can be deducted from VDA income. Only the original purchase price of the crypto can be deducted from the sale price to arrive at the taxable gain.",
    },
    {
      q: "What happens if I forget to report crypto income and receive a notice later?",
      a: "The Income Tax Department receives transaction data from exchanges under Section 285BA (Annual Information Statement — AIS). If you don't report crypto income and it appears in AIS, you will receive a notice under Section 143(1)(a) for income mismatch or under Section 148 for escaped income assessment. Consequences include: (1) Tax at 30% on unreported income, (2) Interest under Section 234A/234B/234C (up to 1% per month), (3) Penalty under Section 270A (50% to 200% of tax), (4) Prosecution under Section 276C for willful tax evasion (imprisonment up to 7 years). Taxvio provides notice response and rectification services to minimize penalties.",
    },
    {
      q: "Is crypto-to-crypto exchange (e.g., BTC to ETH) taxable?",
      a: "Yes, absolutely. The Income Tax Act treats crypto-to-crypto exchange as a 'transfer' of VDA. You must convert both cryptocurrencies to INR value at the exact time of swap and compute the gain. For example: You swap 1 BTC (value ₹25,00,000) for 10 ETH (value ₹28,00,000) → Your gain is ₹3,00,000 (₹28L – ₹25L) → Tax @ 30% = ₹90,000. This is taxable even though you didn't receive any INR.",
    },
    {
      q: "Do I need to pay advance tax on cryptocurrency gains?",
      a: "Yes, if your total tax liability (including crypto tax) exceeds ₹10,000 after TDS, you must pay advance tax in four instalments during the financial year (15% by Jun 15, 45% by Sep 15, 75% by Dec 15, 100% by Mar 15). However, since crypto gains cannot be estimated in advance, the law provides relief under the proviso to Section 211(1) — you can pay the entire tax on crypto gains by 31 March of the FY, and no Section 234C interest will be charged for the earlier quarters on that specific income. Section 234B interest may still apply if the total tax paid by year-end is less than 90% of assessed tax.",
    },
    {
      q: "Can I gift cryptocurrency to avoid tax?",
      a: "Gifting crypto does NOT help you avoid tax. Here's what happens: (1) For the giver (you): Gifting is NOT a taxable event for you — you don't pay tax on the act of gifting. (2) For the recipient: If the recipient is NOT a specified relative under Section 56, the FMV of the gifted crypto is taxable in the recipient's hands under Section 56(2)(x) at 30%. (3) When the recipient later sells: The cost of acquisition for the recipient is the FMV on the date of gift (same value on which they paid tax). So there's no cumulative tax benefit — the gain is simply split between gift receipt tax and sale gain tax.",
    },
    {
      q: "What if the exchange I used is shut down or I lost transaction records?",
      a: "If the exchange is shut down or you cannot access transaction history: (1) Try to recover data from exchange emails, account statements, or screenshots, (2) Check blockchain explorers (Etherscan, Blockchain.com) using your wallet addresses to reconstruct transactions, (3) Use crypto tax software (Koinly, CoinTracking) that can import on-chain data, (4) If cost of acquisition cannot be proven, the ENTIRE sale value may be treated as income (no cost deduction) — leading to maximum tax. Taxvio helps reconstruct transaction history using all available sources and provides written justification to minimize tax impact.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Cryptocurrency Tax
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