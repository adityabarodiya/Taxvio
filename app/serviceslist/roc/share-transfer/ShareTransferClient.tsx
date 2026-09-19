// app/serviceslist/roc/share-transfer/ShareTransferClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Share Transfer & Transmission Services - ROC Compliance & Documentation",
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
    "Professional share transfer and transmission services including share transfer deed (Form SH-4) preparation, board approval processing, share certificate endorsement, register of members update, NOC from directors, stamp duty payment, succession certificate handling, legal heir verification, and MCA compliance. Complete end-to-end documentation for inter-vivos transfer (sale/gift), transmission on death, share buyback, ESOP allotment, and family succession. Expert handling of physical and demat shares for private limited, public limited, OPC companies. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Pune and pan-India.",
  serviceType: "Share Transfer & Transmission Compliance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
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
      name: "What is the difference between share transfer and share transmission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SHARE TRANSFER vs SHARE TRANSMISSION: (1) SHARE TRANSFER (Inter-Vivos Transfer): Transfer of shares from one living person to another living person by ACT OF PARTIES. Happens during lifetime of shareholder. Types: (a) Sale: Shareholder sells shares to buyer for consideration (money), (b) Gift: Shareholder gifts shares to family member/friend without consideration, (c) Pledge: Shareholder pledges shares to lender as security. VOLUNTARY act requiring consent of both transferor (seller) and transferee (buyer). Requires: Transfer deed (Form SH-4) signed by BOTH parties, Board approval, Consideration/stamp duty payment. (2) SHARE TRANSMISSION (Transfer on Death): Transfer of shares from deceased shareholder to legal heirs/nominees by OPERATION OF LAW (not by act of parties). Happens after death of shareholder. INVOLUNTARY act — legal heirs inherit shares automatically as per law of succession. Requires: Death certificate, Succession certificate/Will/Legal heir certificate, Indemnity bond, Affidavit by legal heirs. NO transfer deed or board approval needed (transmission is automatic by law). Key Difference: Transfer = Voluntary (during lifetime), Transmission = Involuntary (after death).",
      },
    },
    {
      "@type": "Question",
      name: "Is board approval required for share transfer in private limited company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YES, board approval is MANDATORY for share transfer in private limited companies (not required for public limited companies with free transferability). Articles of Association (AOA) of private limited companies typically contain RESTRICTIONS on share transfer: (1) PRE-EMPTION CLAUSE (Right of First Refusal): Existing shareholders have FIRST RIGHT to purchase shares before they can be sold to outsider. Process: Shareholder intending to sell must offer shares to existing shareholders at same price → If existing shareholders refuse (issue NOC), shares can be sold to outsider. (2) BOARD DISCRETION CLAUSE: Board has discretion to APPROVE or REJECT share transfer. Board can refuse transfer WITHOUT assigning any reason (if AOA allows). Process for board approval: (1) Transferor and transferee execute share transfer deed (Form SH-4). (2) Application submitted to board for approval. (3) Board meeting convened (within 30 days of application). (4) Board passes resolution approving/rejecting transfer. (5) If approved: Transfer registered in Register of Members, new share certificates issued. (6) If rejected: Transfer deed returned, shares remain with transferor. IMPORTANT: Board CANNOT refuse transmission (transfer on death) — transmission is automatic by law. Board approval is only for inter-vivos transfer (during lifetime).",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for share transfer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documents Required for Share Transfer: (1) SHARE TRANSFER DEED (Form SH-4): Prescribed format under Companies Act, 2013. Must be signed by BOTH transferor (seller) and transferee (buyer). Must be stamped (stamp duty as per state laws — 0.25% to 0.5% of consideration). (2) ORIGINAL SHARE CERTIFICATES: Physical share certificates issued by company (to be surrendered by transferor). If lost: Execute indemnity bond + advertise in newspaper + issue duplicate certificates. (3) PAN CARD: Of both transferor and transferee (mandatory for KYC). (4) CONSIDERATION PROOF: Bank statement/cheque copy/NEFT screenshot showing payment (if transfer is sale). If gift: Gift deed + affidavit stating no consideration. (5) NOC FROM EXISTING SHAREHOLDERS (if required by AOA): Letter from existing shareholders waiving pre-emption rights. (6) BOARD RESOLUTION: Approving share transfer (passed in board meeting). (7) REGISTER OF MEMBERS: To be updated with transferee details. (8) INDEMNITY BOND (if required): By transferee guaranteeing no third-party claims. (9) ADDHAR CARD: For identity verification of transferee. Taxvio prepares all documents and coordinates stamp duty payment.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function ShareTransferClient() {
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

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          📋 Share Transfer Requires Board Approval & Stamp Duty — Complete Documentation Support!
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
              <span className="text-white">Share Transfer & Transmission</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📄 Shareholding Changes
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Share Transfer &
                  <br />
                  <span className="text-[#7ecbf0]">Transmission Service</span>
                  <br />
                  Complete Documentation
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Transfer or transmit company shares with{" "}
                  <strong className="text-white">
                    Taxvio's expert ROC compliance
                  </strong>{" "}
                  services. Whether you're{" "}
                  <strong className="text-white">
                    selling shares, gifting to family, or transferring after shareholder's death
                  </strong>
                  , we handle complete documentation —{" "}
                  <strong className="text-white">
                    Share Transfer Deed (Form SH-4)
                  </strong>
                  , board approval, stamp duty payment, share certificate endorsement, and{" "}
                  <strong className="text-white">
                    Register of Members update
                  </strong>
                  . Compliant with{" "}
                  <strong className="text-white">
                    Section 56-59 of Companies Act, 2013
                  </strong>{" "}
                  and{" "}
                  <strong className="text-white">
                    Rule 11 of Companies (Share Capital and Debentures) Rules, 2014
                  </strong>
                  .{" "}
                  <strong className="text-white">Taxvio</strong> provides
                  end-to-end support for{" "}
                  <strong className="text-white">
                    inter-vivos transfer (sale/gift), transmission on death, family succession, ESOP allotment, buyback
                  </strong>
                  . Ensure{" "}
                  <strong className="text-white">legally valid ownership</strong>{" "}
                  in <strong className="text-white">7-10 working days</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Transfer Shares — ₹4,999 →
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
                    "✅ 7-10 Days Process",
                    "✅ Board Approval Handled",
                    "✅ Stamp Duty Paid",
                    "✅ Register Updated",
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
                    ["📄", "Transfer deed (SH-4) prepared"],
                    ["✅", "Board approval processed"],
                    ["💰", "Starting fee: ₹4,999"],
                    ["⏰", "Processing time: 7-10 days"],
                    ["📊", "Section 56-59 compliance"],
                    ["💼", "Physical + Demat shares"],
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
              { number: "600+", label: "Share Transfers Completed", icon: "📄" },
              { number: "7-10 Days", label: "Average Processing", icon: "⏰" },
              { number: "₹4,999", label: "Starting Fee", icon: "💼" },
              { number: "100%", label: "Legal Compliance", icon: "✅" },
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
              "✔ CA & CS Team Support",
              "✔ Stamp Duty Coordination",
              "✔ Board Meeting Assistance",
              "✔ Register Maintained",
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
          {/* WHAT IS SHARE TRANSFER */}
          <section id="what-is-transfer">
            <SectionLabel text="Understanding Share Transfer & Transmission" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What is Share Transfer & Transmission?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>SHARE TRANSFER</strong> is the process of{" "}
                  <strong>
                    transferring ownership of shares
                  </strong>{" "}
                  from one person (transferor/seller) to another person (transferee/buyer) by{" "}
                  <strong>ACT OF PARTIES</strong> (voluntary action during lifetime).
                </p>
                <p>
                  <strong>SHARE TRANSMISSION</strong> is the{" "}
                  <strong>
                    automatic transfer of shares
                  </strong>{" "}
                  from a deceased shareholder to their{" "}
                  <strong>legal heirs/nominees</strong> by{" "}
                  <strong>OPERATION OF LAW</strong> (involuntary action after death).
                </p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📋 Types of Share Transfer
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "1. Sale of Shares (For Consideration)",
                        desc: "Shareholder SELLS shares to buyer for MONEY (consideration). Buyer pays agreed price → Shares transferred. Most common type. Requires: Transfer deed, payment proof, board approval, stamp duty (0.25%-0.5% of consideration).",
                      },
                      {
                        title: "2. Gift of Shares (Without Consideration)",
                        desc: "Shareholder GIFTS shares to family member/friend WITHOUT any payment. Common for: Family succession planning, transferring to children/spouse. Requires: Gift deed, affidavit stating no consideration, board approval, minimal stamp duty (₹100-500).",
                      },
                      {
                        title: "3. Transmission on Death (By Law)",
                        desc: "Shares automatically transfer to legal heirs/nominees after shareholder's DEATH. Governed by law of succession (Hindu Succession Act, Indian Succession Act, etc.). Requires: Death certificate, succession certificate/will, legal heir certificate, indemnity bond. NO transfer deed or board approval needed.",
                      },
                      {
                        title: "4. Pledge of Shares (Security Interest)",
                        desc: "Shareholder PLEDGES shares to lender as SECURITY for loan (without transferring ownership). If loan repaid: Pledge released. If default: Lender can invoke pledge and sell shares. Requires: Pledge agreement, endorsement on share certificates, intimation to company.",
                      },
                      {
                        title: "5. Buyback by Company",
                        desc: "Company BUYS BACK its own shares from shareholders (share cancellation). Governed by Section 68 of Companies Act. Requires: Board resolution, special resolution (if buyback >10% of capital), offer letter, payment to shareholders, share cancellation.",
                      },
                      {
                        title: "6. ESOP Allotment (Employee Stock Options)",
                        desc: "Company ALLOTS shares to employees under ESOP scheme. Employees exercise options → Shares allotted. Requires: ESOP policy, board resolution, allotment letter, share certificates.",
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
                    ✅ Legal Framework for Share Transfer
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Companies Act, 2013 Provisions
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Section 56:</strong> Transfer and transmission of shares (power to transfer/restrict).
                        </li>
                        <li>
                          • <strong>Section 58:</strong> Procedure for transfer (Form SH-4, board approval, register update).
                        </li>
                        <li>
                          • <strong>Section 59:</strong> Rectification of register of members (if error in transfer).
                        </li>
                        <li>
                          • <strong>Rule 11:</strong> Form SH-4 prescribed format for transfer deed.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="font-bold text-green-700 mb-1">
                        Articles of Association (AOA) Provisions
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Pre-emption Rights:</strong> Existing shareholders have first right to buy shares before outsider.
                        </li>
                        <li>
                          • <strong>Board Discretion:</strong> Board can approve/reject transfer (in private limited companies).
                        </li>
                        <li>
                          • <strong>Lock-in Period:</strong> Shares cannot be transferred for certain period (e.g., promoter shares locked for 3 years post-IPO).
                        </li>
                        <li>
                          • <strong>Free Transferability:</strong> Public limited companies usually have free transfer (no board approval needed).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    ⚖️ Share Transfer vs Share Transmission
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="p-2 text-left">Aspect</th>
                          <th className="p-2 text-left">Transfer</th>
                          <th className="p-2 text-left">Transmission</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            aspect: "When Happens",
                            transfer: "During lifetime",
                            transmission: "After death",
                          },
                          {
                            aspect: "Nature",
                            transfer: "Voluntary (by act of parties)",
                            transmission: "Involuntary (by law)",
                          },
                          {
                            aspect: "Transfer Deed",
                            transfer: "Required (Form SH-4)",
                            transmission: "Not required",
                          },
                          {
                            aspect: "Board Approval",
                            transfer: "Required (Pvt Ltd)",
                            transmission: "Not required",
                          },
                          {
                            aspect: "Stamp Duty",
                            transfer: "Payable (0.25%-0.5%)",
                            transmission: "Not payable",
                          },
                          {
                            aspect: "Documents",
                            transfer: "Transfer deed, certificates",
                            transmission: "Death cert, succession cert",
                          },
                          {
                            aspect: "Example",
                            transfer: "A sells shares to B",
                            transmission: "A dies, shares to legal heirs",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-t">
                            <td className="p-2 font-semibold">{row.aspect}</td>
                            <td className="p-2 text-green-700 font-bold">
                              {row.transfer}
                            </td>
                            <td className="p-2 text-blue-700 font-bold">
                              {row.transmission}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💰 Stamp Duty on Share Transfer
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      {
                        title: "What is Stamp Duty?",
                        desc: "Tax levied by STATE GOVERNMENT on transfer of shares. Rate varies by state (0.25% to 0.5% of consideration/market value). Payable on TRANSFER DEED (Form SH-4) before submission to company.",
                      },
                      {
                        title: "Stamp Duty Rates (Major States)",
                        desc: "(1) Delhi: 0.25%, (2) Maharashtra: 0.25%, (3) Karnataka: 0.5%, (4) Tamil Nadu: 0.5%, (5) Gujarat: 0.25%, (6) Uttar Pradesh: 0.25%. Calculated on: Higher of (a) Consideration paid, OR (b) Market value of shares.",
                      },
                      {
                        title: "How to Pay Stamp Duty?",
                        desc: "Two methods: (1) PHYSICAL STAMPING: Purchase stamp paper of required value → Print transfer deed on stamp paper. (2) E-STAMPING (SHCIL): Pay stamp duty online at www.shcilestamp.com → Generate e-stamp certificate → Attach with transfer deed. Most states now mandate e-stamping.",
                      },
                      {
                        title: "Stamp Duty on Gift",
                        desc: "If shares are GIFTED (no consideration), stamp duty is MINIMAL (₹100-500 fixed stamp duty, not based on value). Gift to family members (spouse, children, parents) may be EXEMPT in some states. Requires: Gift deed + affidavit stating no consideration.",
                      },
                      {
                        title: "Stamp Duty on Transmission",
                        desc: "Transmission (transfer on death) is EXEMPT from stamp duty. No stamp duty payable. Legal heirs get shares without any duty/tax (only succession certificate/probate costs apply).",
                      },
                      {
                        title: "Penalty for Non-Payment",
                        desc: "If transfer deed not stamped or under-stamped: (1) Transfer is INVALID (company can refuse to register), (2) Transferor/transferee liable for penalty (10x stamp duty + interest), (3) Criminal prosecution possible (under Indian Stamp Act). ALWAYS pay correct stamp duty before submitting transfer deed.",
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
                    ⚠️ Restrictions on Share Transfer
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "PRIVATE LIMITED COMPANIES: AOA contains restrictions — pre-emption rights, board approval required, lock-in period. Board can REFUSE transfer without assigning reason (if AOA allows).",
                      "PUBLIC LIMITED COMPANIES: Generally FREE TRANSFERABILITY (no board approval). But: (a) Listed companies: Shares in demat form only, transfer via depository (NSDL/CDSL), (b) Unlisted: Physical shares can be transferred (with board formalities).",
                      "PROMOTER SHARES: Locked-in for 3 YEARS post-IPO (SEBI regulation). Cannot be transferred/pledged during lock-in period (except to promoter group entities).",
                      "SHARES UNDER PLEDGE: If shares are pledged to lender, cannot be transferred WITHOUT lender's consent (NOC required). Lender has lien on shares.",
                      "PENDING LITIGATION: If shares are subject to court dispute/injunction, transfer is STAYED until court order. Any transfer during stay is VOID.",
                      "DEMAT SHARES: Transfer happens ONLY via depository (off-market transfer or stock exchange). Physical transfer deed NOT applicable for demat shares.",
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
                    🎯 Why Proper Share Transfer Documentation is Critical?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    Proper share transfer ensures:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {[
                      "LEGAL OWNERSHIP: Transferee becomes LEGAL OWNER only after registration in Register of Members. Until registered, transferor remains legal owner (even if consideration paid).",
                      "VOTING RIGHTS: Only registered shareholder can vote in general meetings. Transferee cannot vote until transfer is registered.",
                      "DIVIDEND RIGHTS: Dividends go to registered shareholder. If transfer pending, dividend goes to transferor (not transferee).",
                      "TAX IMPLICATIONS: Capital gains tax liability arises on transferor at time of transfer. Proper documentation (transfer deed with date, consideration) required for tax filing.",
                      "SUCCESSION PLANNING: For family businesses, proper gifting/transfer to next generation ensures smooth succession without legal disputes.",
                      "COMPLIANCE: Unregistered transfers lead to mismatch in company records vs actual ownership — creates issues during audits, due diligence (M&A, fundraising, IPO).",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* TRANSFER PROCESS */}
          <section id="process">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Share Transfer & Transmission Process
            </h2>
            
            {/* SHARE TRANSFER PROCESS */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00416a] mb-4">
                📋 Share Transfer Process (Inter-Vivos)
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
                <p className="text-gray-700 mb-6">
                  Complete process for transferring shares during shareholder's lifetime (sale/gift):
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Agreement Between Transferor & Transferee",
                      description:
                        "Share transfer starts with AGREEMENT between seller (transferor) and buyer (transferee). Key Points: (1) NEGOTIATION: Parties agree on: (a) NUMBER OF SHARES to be transferred, (b) PRICE PER SHARE (consideration), (c) TOTAL CONSIDERATION (number of shares × price), (d) PAYMENT TERMS (advance, balance, installments), (e) TRANSFER DATE. (2) SHARE PURCHASE AGREEMENT (SPA): For significant transfers (majority stake, controlling interest), parties execute detailed SPA containing: (a) Representations and warranties (shares are free from encumbrance, no pending litigation), (b) Conditions precedent (board approval, regulatory approvals), (c) Closing mechanism (payment → transfer), (d) Indemnities (if any misrepresentation). (3) For GIFT: Execute GIFT DEED stating: 'I [Transferor] hereby gift [X] shares to [Transferee] without any consideration out of natural love and affection.' Attach affidavit confirming no consideration. (4) PAYMENT: Transferee pays consideration to transferor (bank transfer/cheque). Keep payment proof (NEFT screenshot, cheque copy, bank statement) — required for: (a) Stamp duty calculation, (b) Capital gains tax filing by transferor, (c) Income tax verification. Taxvio provides SHARE PURCHASE AGREEMENT TEMPLATE and GIFT DEED FORMAT for different scenarios.",
                      duration: "1-2 days",
                    },
                    {
                      step: 2,
                      title: "Verify Pre-emption Rights & Obtain NOC from Existing Shareholders",
                      description:
                        "For PRIVATE LIMITED COMPANIES, check if AOA contains PRE-EMPTION CLAUSE (Right of First Refusal). Pre-emption Process: (1) Transferor must FIRST OFFER shares to EXISTING SHAREHOLDERS at same price. (2) Transferor sends OFFER LETTER to all existing shareholders: 'I intend to sell [X] shares at ₹[Y] per share to [Transferee]. You have RIGHT OF FIRST REFUSAL to purchase these shares at same price within 15 days.' (3) If existing shareholder(s) ACCEPT: Shares must be sold to them (not to original transferee). Process restarts with new buyer. (4) If existing shareholders REFUSE: They issue NO OBJECTION CERTIFICATE (NOC): 'I [Shareholder Name] have no objection to transfer of [X] shares by [Transferor] to [Transferee] at ₹[Y] per share. I waive my pre-emption rights.' (5) After receiving NOC from ALL existing shareholders, transferor can proceed with transfer to original transferee. IMPORTANT: If AOA is SILENT on pre-emption, no NOC required (transfer can proceed directly). PUBLIC LIMITED COMPANIES: No pre-emption (shares are freely transferable). Taxvio reviews AOA, drafts offer letter, coordinates NOC collection from existing shareholders.",
                      duration: "7-15 days (if pre-emption applies)",
                    },
                    {
                      step: 3,
                      title: "Preparation of Share Transfer Deed (Form SH-4)",
                      description:
                        "Prepare SHARE TRANSFER DEED in prescribed format (Form SH-4 under Rule 11). Form SH-4 Contents: (1) PART 1 - Details of Company: CIN, Name, Registered office address. (2) PART 2 - Details of Transferor (Seller): (a) Name, Father's name/Spouse name, (b) Address, (c) PAN, Aadhaar, Email, Mobile, (d) Folio number (shareholder ID in company records), (e) Number of shares held, (f) Distinctive numbers of shares being transferred (e.g., 'Share Nos. 1001 to 1500'), (g) Certificate number(s) of shares being transferred. (3) PART 3 - Details of Transferee (Buyer): (a) Name, Father's name/Spouse name, (b) Address, (c) PAN, Aadhaar, Email, Mobile, (d) Occupation, (e) Whether existing shareholder or new shareholder. (4) PART 4 - Consideration: (a) Total consideration paid (in ₹), (b) Mode of payment (cheque/NEFT/cash), (c) Date of payment. (5) PART 5 - Signatures: (a) TRANSFEROR's signature (with date), (b) TRANSFEREE's signature (with date), (c) Witness signatures (2 witnesses — name, address, signature). (6) STAMP DUTY: Form SH-4 must be STAMPED before submission: (a) Calculate stamp duty: 0.25% to 0.5% of consideration (as per state laws), (b) Pay stamp duty via e-stamping (www.shcilestamp.com), (c) Print Form SH-4 on stamp paper OR attach e-stamp certificate. Example: Transfer of 500 shares at ₹100/share = ₹50,000 consideration. Stamp duty (0.25%) = ₹125. Purchase e-stamp of ₹125 and attach. Taxvio prepares Form SH-4 with accurate details, calculates stamp duty, coordinates e-stamping, and ensures proper execution.",
                      duration: "1-2 days",
                    },
                    {
                      step: 4,
                      title: "Submission of Transfer Application to Company",
                      description:
                        "Submit transfer application to company for BOARD APPROVAL. Documents to Submit: (1) DULY EXECUTED Form SH-4 (stamped, signed by both parties, witnessed). (2) ORIGINAL SHARE CERTIFICATES (physical certificates issued by company) — to be surrendered by transferor. If certificates LOST: Execute INDEMNITY BOND + publish loss advertisement in newspaper + apply for duplicate certificates. (3) CONSIDERATION PROOF: Bank statement/NEFT screenshot/cheque copy showing payment. If GIFT: Gift deed + affidavit stating no consideration. (4) NOC FROM EXISTING SHAREHOLDERS (if pre-emption rights applicable). (5) PAN CARD copies of transferor and transferee (mandatory for KYC). (6) AADHAAR CARD copies (for identity verification). (7) BOARD RESOLUTION (if transferee is a company): Authorizing company to purchase shares. Submission Process: (1) Transferor or transferee submits above documents to company's registered office. (2) Company acknowledges receipt and issues RECEIPT with date stamp. (3) Company places transfer application before BOARD OF DIRECTORS for approval (within 30 days of receipt). Taxvio compiles all documents, coordinates with transferor/transferee, and submits to company on your behalf.",
                      duration: "1 day",
                    },
                    {
                      step: 5,
                      title: "Board Meeting & Approval of Share Transfer",
                      description:
                        "Company convenes BOARD MEETING to approve/reject share transfer. Board Meeting Process: (1) NOTICE: Company secretary issues notice to all directors (minimum 7 days before meeting). (2) AGENDA: 'Approval of share transfer from [Transferor] to [Transferee] — [X] shares at ₹[Y] per share.' (3) BOARD DELIBERATION: Directors review: (a) Whether transfer complies with AOA provisions, (b) Whether transferee is 'fit and proper' person (if AOA allows discretion), (c) Whether pre-emption rights were followed, (d) Whether all documents are in order, (e) Whether stamp duty paid. (4) BOARD RESOLUTION: If directors APPROVE: 'RESOLVED THAT the transfer of [X] equity shares bearing distinctive numbers [XX to YY] from [Transferor] to [Transferee] for a consideration of ₹[ZZ] be and is hereby approved. RESOLVED FURTHER THAT the Register of Members be updated accordingly and new share certificate(s) be issued to [Transferee].' If directors REJECT: Board can reject transfer WITHOUT assigning reason (if AOA allows). Transfer deed returned to applicant. (5) MINUTES: Company secretary prepares MINUTES OF BOARD MEETING documenting approval. IMPORTANT: Board CANNOT delay decision beyond 30 DAYS of application. If board doesn't approve/reject within 30 days, transfer is deemed APPROVED automatically (Section 58(4)). Taxvio provides BOARD RESOLUTION TEMPLATE and assists company secretary with board meeting coordination.",
                      duration: "7-15 days (board meeting)",
                    },
                    {
                      step: 6,
                      title: "Update Register of Members & Issue New Share Certificates",
                      description:
                        "After board approval, company REGISTERS transfer in its records. Registration Process: (1) UPDATE REGISTER OF MEMBERS (Section 88): (a) Strike off transferor's name and shareholding, (b) Add transferee's name and shareholding, (c) Record: Date of transfer, Number of shares transferred, Distinctive numbers, Folio number (new folio for transferee if not existing shareholder). (2) CANCEL OLD SHARE CERTIFICATES: Stamp old certificates (surrendered by transferor) as 'CANCELLED — Shares transferred to [Transferee] on [Date]'. Preserve cancelled certificates in company records (required for audit). (3) ISSUE NEW SHARE CERTIFICATES: Print new share certificates in transferee's name: Certificate No.: [New number], Distinctive Nos.: [XX to YY], Number of shares: [X], Name of shareholder: [Transferee], Date of issue: [Transfer registration date]. Certificates must be signed by: (a) 2 Directors (or 1 Director + Company Secretary), (b) Common seal of company affixed. (4) DELIVER NEW CERTIFICATES: Hand over new certificates to transferee (in person or registered post). Obtain acknowledgment. (5) UPDATE SHARE CAPITAL STATEMENT: No change in total share capital (transfer doesn't create/cancel shares), but update shareholder distribution for compliance reports. Timeline: New certificates must be issued within 30 DAYS of board approval (or 2 months from transfer application date). Taxvio assists with register updates, certificate printing, and delivery to transferee.",
                      duration: "7-10 days",
                    },
                    {
                      step: 7,
                      title: "Intimation to Regulatory Authorities (If Applicable)",
                      description:
                        "For certain types of transfers, intimation to regulatory authorities is required. Regulatory Intimations: (1) FOR LISTED COMPANIES (SEBI regulations): Transfer of shares by promoters/directors/KMP must be intimated to stock exchange within 2 trading days (via disclosure portal). (2) FOR FOREIGN INVESTMENT (FEMA regulations): If transferee is FOREIGN INVESTOR (NRI, FPI, foreign company), transfer must comply with FEMA (Foreign Exchange Management Act). Process: (a) File Form FC-TRS with RBI within 60 days (if transfer results in downstream investment change), (b) Obtain FIRC (Foreign Inward Remittance Certificate) if consideration paid from abroad, (c) Ensure transfer doesn't violate sectoral caps (e.g., retail, agriculture, real estate have FDI restrictions). (3) FOR STARTUPS (DPIIT recognition): Startups must report ownership changes in annual returns to DPIIT (for maintaining recognition benefits). (4) FOR NBFC/BANKING COMPANIES: Transfer of significant stake (>5% or >26%) requires RBI approval (prior permission under Banking Regulation Act/RBI Act). Most PRIVATE LIMITED COMPANIES: No regulatory intimation required (only internal documentation). Taxvio verifies regulatory applicability and handles intimations if required.",
                      duration: "If applicable: 7-15 days",
                    },
                    {
                      step: 8,
                      title: "Post-Transfer Compliances & Record Keeping",
                      description:
                        "After transfer is complete, maintain proper records and file tax returns. Post-Transfer Requirements: (1) TRANSFEROR (Seller) TAX COMPLIANCE: Transfer of shares is CAPITAL ASSET sale → Capital gains tax applicable. (a) If shares held >24 months: LONG-TERM capital gains (LTCG) @ 10% (if gains >₹1 lakh/year). (b) If shares held <24 months: SHORT-TERM capital gains (STCG) @ 15% (for listed) or slab rate (for unlisted). (c) File ITR (Income Tax Return) for the year disclosing capital gains. (d) Provide Form 16A to transferee (TDS certificate if TDS deducted). (2) TRANSFEREE (Buyer) COMPLIANCE: (a) Cost of acquisition = Consideration paid (for future capital gains calculation when transferee sells). (b) Keep transfer deed, payment proof, share certificates safely. (c) If transferee is COMPANY: Disclose investment in balance sheet under 'Investments'. (3) COMPANY COMPLIANCE: (a) Preserve transfer documents for minimum 8 years (as per Companies Act record retention rules), (b) Update annual return (Form MGT-7) with updated shareholding pattern, (c) Update ownership details in income tax portal (if company is startup claiming tax exemptions). (4) REGISTER MAINTENANCE: Keep Register of Members updated at all times (digital or physical). Register is EVIDENCE of ownership — must be accurate. Taxvio provides POST-TRANSFER COMPLIANCE CHECKLIST and reminds transferor about capital gains tax filing deadlines.",
                      duration: "Ongoing",
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
                    Total Timeline (Share Transfer)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>7-10 working days</strong> from application to new
                    certificate issuance (if no pre-emption). Breakdown: Agreement (1-2
                    days) + Pre-emption NOC (7-15 days if applicable) + Transfer deed
                    preparation (1-2 days) + Application submission (1 day) + Board
                    approval (7-15 days) + Register update & certificates (7-10 days).
                    Add 15-30 days if pre-emption rights apply.{" "}
                    <strong>Taxvio handles entire process</strong> — you just provide
                    basic details and signatures.
                  </p>
                </div>
              </div>
            </div>

            {/* SHARE TRANSMISSION PROCESS */}
            <div>
              <h3 className="text-2xl font-bold text-[#00416a] mb-4">
                ⚖️ Share Transmission Process (Transfer on Death)
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
                <p className="text-gray-700 mb-6">
                  Complete process for transmitting shares from deceased shareholder to legal heirs:
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Death of Shareholder & Intimation to Company",
                      description:
                        "Transmission process starts when shareholder DIES. Immediate Actions: (1) OBTAIN DEATH CERTIFICATE: Register death with local municipal corporation/panchayat. Death certificate is PRIMARY DOCUMENT for transmission. (2) CHECK NOMINATION (if any): Deceased shareholder may have filed NOMINATION (Form SH-13) with company. If nomination exists: Shares transmit to NOMINEE automatically (no succession certificate needed). If no nomination: Shares transmit to LEGAL HEIRS as per law of succession. (3) INTIMATE COMPANY: Legal heirs/nominee inform company about shareholder's death: 'This is to inform that [Shareholder Name], holder of [X] shares (Certificate Nos. [Y]), expired on [Date]. Request to freeze shareholding and provide transmission procedure.' Company FREEZES deceased shareholder's account (no corporate actions allowed — no voting, no dividend withdrawal). (4) IDENTIFY LEGAL HEIRS: If no nomination, identify legal heirs as per: (a) HINDU SUCCESSION ACT, 1956 (for Hindus, Buddhists, Jains, Sikhs): Class I heirs — Spouse, Children, Mother (equal share). (b) INDIAN SUCCESSION ACT, 1925 (for Christians, Parsis, Jews): As per will or intestate succession rules. (c) MUSLIM PERSONAL LAW (for Muslims): As per Shariah (specific shares for wife, children, parents). Taxvio assists legal heirs with death intimation letter and legal heir identification.",
                      duration: "Immediate action",
                    },
                    {
                      step: 2,
                      title: "Obtain Succession Certificate / Will Probate / Legal Heir Certificate",
                      description:
                        "Legal heirs must obtain LEGAL DOCUMENT proving their right to inherit shares. Options (any ONE required): (1) SUCCESSION CERTIFICATE (Section 372 of Indian Succession Act): Issued by DISTRICT COURT certifying legal heirs and their share in estate. Process: (a) File petition in district court where deceased resided, (b) Court publishes notice (30-45 days for objections), (c) If no objections, court issues succession certificate after hearing, (d) Timeline: 3-6 months (court dependent). Fee: 2%-3% of estate value + court fees. (2) PROBATE OF WILL (if deceased left valid WILL): If deceased executed valid will nominating heirs, get will PROBATED (validated) by court. Process: (a) File probate petition in district court, (b) Attach original will + death certificate, (c) Court verifies will authenticity, (d) Court issues probate certificate, (e) Timeline: 4-8 months. Fee: 2%-4% of estate value. (3) LEGAL HEIR CERTIFICATE (for small estates): Issued by TEHSILDAR/REVENUE OFFICER certifying legal heirs. Process: (a) Apply to Tehsil office with death certificate + family details, (b) Enquiry conducted by Tehsildar, (c) Legal heir certificate issued within 15-30 days. Fee: Nominal (₹100-500). IMPORTANT: For UNLISTED COMPANIES and share value <₹2 lakh: Legal heir certificate is sufficient. For LISTED COMPANIES or large estates: Succession certificate/probate required. If NOMINATION EXISTS: NO succession certificate needed — nominee can claim with simple transmission application + death certificate. Taxvio coordinates with legal counsel for succession certificate/probate application.",
                      duration: "3-8 months (court process)",
                    },
                    {
                      step: 3,
                      title: "Submission of Transmission Application to Company",
                      description:
                        "Legal heirs submit transmission application to company for registration. Documents to Submit: (1) DEATH CERTIFICATE of deceased shareholder (original + copy for verification). (2) SUCCESSION CERTIFICATE / PROBATE / LEGAL HEIR CERTIFICATE (as applicable). (3) If NOMINATION exists: (a) Copy of nomination (Form SH-13) filed by deceased, (b) ID proof of nominee (PAN, Aadhaar), (c) NO succession certificate needed. (4) TRANSMISSION APPLICATION LETTER: 'We, the legal heirs/nominee of late [Shareholder Name], request transmission of [X] shares held by deceased in your company to our names in the ratio: [Heir 1 - 50%, Heir 2 - 30%, Heir 3 - 20%] as per succession certificate dated [Date].' (5) INDEMNITY BOND: Legal heirs execute indemnity bond indemnifying company against any future claims. Format: 'We undertake to indemnify and hold harmless [Company Name] against any claims/disputes arising from transmission of shares.' (6) AFFIDAVIT: Legal heirs execute affidavit stating: (a) Details of all legal heirs (name, age, relationship with deceased), (b) Share ratio as per succession certificate, (c) No other legal heirs exist, (d) No disputes among heirs. (7) ORIGINAL SHARE CERTIFICATES: Certificates held by deceased (to be surrendered). If lost: Execute indemnity + advertise loss + apply for duplicates. (8) PAN & AADHAAR: Of all legal heirs/nominee. Taxvio prepares transmission application, indemnity bond, affidavit, and compiles all documents.",
                      duration: "2-3 days",
                    },
                    {
                      step: 4,
                      title: "Company Verification & Board Noting",
                      description:
                        "Company verifies transmission documents and notes in board meeting. Verification Process: (1) DOCUMENT VERIFICATION: Company secretary verifies: (a) Death certificate authenticity (cross-check with issuing authority), (b) Succession certificate/probate/legal heir certificate validity, (c) Relationship of legal heirs with deceased (as per certificate), (d) Share ratio among heirs (as per certificate), (e) Signature of legal heirs on transmission documents. (2) LEGAL OPINION (if required): For complex cases (disputes among heirs, large estate, missing documents), company may seek LEGAL OPINION from advocate confirming transmission is valid. (3) BOARD NOTING: Transmission is NOTED (not approved) in board meeting: 'The Board NOTED the death of [Shareholder Name] and transmission of [X] shares to legal heirs/nominee [Names] as per succession certificate/nomination. The company secretary is authorized to register transmission in Register of Members and issue new share certificates.' IMPORTANT: Transmission does NOT require BOARD APPROVAL (unlike inter-vivos transfer). Board only NOTES the transmission as per law. Company CANNOT refuse transmission (it's automatic by law). Company can only verify documents and ensure genuineness. Timeline: Company must process transmission within 30-45 days of receipt of complete documents. Taxvio coordinates with company secretary for verification and board noting.",
                      duration: "15-30 days",
                    },
                    {
                      step: 5,
                      title: "Update Register of Members & Issue New Share Certificates",
                      description:
                        "After verification, company registers transmission and issues new certificates. Registration Process: (1) UPDATE REGISTER OF MEMBERS: (a) Strike off deceased shareholder's name and shareholding, (b) Add legal heirs/nominee as new shareholders with respective shareholding (as per succession certificate/ratio), (c) Record: Date of transmission (date of death or registration date), Number of shares transmitted, Mode of transmission (succession certificate/will/nomination). (2) CANCEL OLD SHARE CERTIFICATES: Stamp old certificates as 'CANCELLED — Shares transmitted to legal heirs on [Date] due to death of shareholder.' (3) ISSUE NEW SHARE CERTIFICATES: Print new share certificates in legal heirs'/nominee's names (separate certificate for each heir if multiple): Certificate No.: [New number], Name of shareholder: [Legal Heir/Nominee], Number of shares: [As per ratio], Distinctive numbers: [XX to YY]. Sign certificates and affix company seal. (4) DELIVER NEW CERTIFICATES: Hand over new certificates to legal heirs/nominee. Obtain acknowledgment. (5) INTIMATION TO LEGAL HEIRS: Company informs legal heirs: 'Transmission of shares has been registered. New share certificates enclosed. You are now registered shareholder and entitled to all rights (voting, dividend, etc.).' Timeline: New certificates issued within 30 DAYS of board noting. NO STAMP DUTY payable on transmission (exempt). Taxvio assists with register updates, certificate issuance, and delivery to legal heirs.",
                      duration: "7-10 days",
                    },
                    {
                      step: 6,
                      title: "Post-Transmission Compliances",
                      description:
                        "After transmission is complete, certain compliances may be required. Post-Transmission Actions: (1) LEGAL HEIRS' TAX COMPLIANCE: Transmission is NOT a 'transfer' under Income Tax Act — NO CAPITAL GAINS TAX on transmission. Legal heirs inherit shares at SAME COST as deceased shareholder (cost of acquisition for future sale). Example: Deceased bought shares at ₹100 each in 2010. Legal heirs inherit in 2025 → Cost of acquisition for heirs = ₹100 (holding period includes deceased's period). When heirs sell in future, capital gains calculated from ₹100. (2) ESTATE DUTY (if applicable): India has NO estate duty/inheritance tax currently (abolished in 1985). Legal heirs receive shares tax-free. (3) WILL REGISTRATION (for future): Legal heirs should execute NOMINATION (Form SH-13) for their shares — ensures smooth transmission to their heirs in future. (4) COMPANY COMPLIANCE: Company updates annual return (Form MGT-7) with new shareholding pattern showing legal heirs as shareholders. (5) DIVIDEND DISTRIBUTION: Any pending dividends in deceased shareholder's account are paid to legal heirs after transmission (in ratio as per succession certificate). (6) VOTING RIGHTS: Legal heirs can vote in general meetings from date of transmission registration. Taxvio provides POST-TRANSMISSION COMPLIANCE CHECKLIST and assists legal heirs with nomination filing.",
                      duration: "Ongoing",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="bg-white rounded-2xl p-6 border border-blue-200 flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
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

                <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Total Timeline (Share Transmission)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>3-8 months</strong> from death to certificate issuance
                    (court-dependent). Breakdown: Death intimation (immediate) +
                    Succession certificate/probate (3-8 months) + Transmission
                    application (2-3 days) + Company verification (15-30 days) +
                    Register update (7-10 days). If NOMINATION exists: 30-45 days only
                    (no court process).{" "}
                    <strong>Taxvio coordinates with legal counsel</strong> for
                    succession certificate and handles company documentation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DOCUMENTS */}
          <section id="documents">
            <SectionLabel text="Documentation Checklist" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for Share Transfer & Transmission
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Share Transfer (Inter-Vivos)
                </p>
                <ul className="space-y-3">
                  {[
                    "Share Transfer Deed (Form SH-4) — stamped and signed by both parties",
                    "Original share certificates (to be surrendered)",
                    "PAN card of transferor and transferee",
                    "Aadhaar card of transferor and transferee",
                    "Consideration proof (bank statement / NEFT screenshot / cheque copy)",
                    "NOC from existing shareholders (if pre-emption rights apply)",
                    "Gift deed + affidavit (if transfer is gift without consideration)",
                    "Board resolution (if transferee is a company)",
                    "Indemnity bond (if required by company AOA)",
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
                  For Share Transmission (On Death)
                </p>
                <ul className="space-y-3">
                  {[
                    "Death certificate of deceased shareholder (original + copy)",
                    "Succession certificate / Probate of Will / Legal heir certificate",
                    "Transmission application letter by legal heirs/nominee",
                    "Indemnity bond executed by legal heirs",
                    "Affidavit by legal heirs (details of all heirs, no disputes)",
                    "Original share certificates (held by deceased)",
                    "PAN & Aadhaar of all legal heirs/nominee",
                    "Copy of nomination (Form SH-13) if filed by deceased",
                    "Relationship proof (birth certificate, family register, etc.)",
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

            <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
              <p className="font-bold text-blue-800 mb-3">
                📝 Additional Information Required
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Company CIN and name",
                  "Folio number of transferor/deceased (shareholder ID in company records)",
                  "Number of shares to be transferred/transmitted",
                  "Distinctive numbers of shares (e.g., 1001 to 1500)",
                  "Certificate number(s) of shares",
                  "Consideration amount (for transfer) or ratio of distribution (for transmission)",
                  "Address and contact details of transferee/legal heirs",
                  "Details of existing shareholders (for pre-emption verification)",
                  "Bank account details for dividend/corporate action",
                  "Whether shares are in physical or demat form",
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
              Common Mistakes in Share Transfer & Transmission
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Share transfer and transmission have specific legal requirements — avoid these critical errors:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    mistake: "Not Paying Stamp Duty on Transfer Deed",
                    icon: "💰",
                    problem:
                      "Executing transfer deed (Form SH-4) WITHOUT paying stamp duty. Reasons: (1) Lack of awareness about stamp duty requirement, (2) Trying to save stamp duty cost (0.25%-0.5% of consideration), (3) Confusion about e-stamping vs physical stamping. Consequences: (1) Transfer deed is INVALID under Indian Stamp Act, (2) Company can REFUSE to register transfer (citing unstamped document), (3) Transferor/transferee liable for PENALTY (10x stamp duty + interest), (4) Transfer can be challenged in court (by company, other shareholders, tax authorities), (5) Criminal prosecution possible (under Section 64 of Indian Stamp Act).",
                    solution:
                      "ALWAYS pay stamp duty BEFORE executing transfer deed. Process: (1) Calculate stamp duty: 0.25% to 0.5% of consideration (check state-specific rates), (2) For ₹50,000 consideration in Delhi (0.25%): Stamp duty = ₹125, (3) Pay via E-STAMPING: Visit www.shcilestamp.com → Select state → Pay ₹125 → Download e-stamp certificate → Print Form SH-4 with e-stamp attached. (4) Alternatively: Purchase physical stamp paper of ₹125 → Print Form SH-4 on stamp paper. (5) Ensure stamp duty is paid BEFORE both parties sign (stamping after signing is invalid). Taxvio calculates exact stamp duty, coordinates e-stamping, and ensures compliance.",
                  },
                  {
                    mistake: "Ignoring Pre-emption Rights in Private Limited Companies",
                    icon: "👥",
                    problem:
                      "Transferring shares to outsider WITHOUT first offering to existing shareholders (violating pre-emption clause in AOA). Reasons: (1) Transferor directly sells to buyer (bypassing existing shareholders), (2) Not reading AOA carefully, (3) Existing shareholders not aware of transfer. Consequences: (1) Existing shareholders can OBJECT to transfer, (2) Board REJECTS transfer application, (3) Transfer is VOID (illegal), (4) Existing shareholders can FILE SUIT for specific performance (court will order transfer to them at same price), (5) Transferor has to REFUND consideration to original buyer and sell to existing shareholders.",
                    solution:
                      "BEFORE initiating transfer, check AOA for PRE-EMPTION CLAUSE. If clause exists: (1) Transferor sends OFFER LETTER to ALL existing shareholders: 'I intend to sell [X] shares at ₹[Y] per share to [Buyer]. You have right to purchase at same price within 15 days.' (2) Send via registered post/email (keep proof). (3) If existing shareholder(s) ACCEPT: Sell to them (not to original buyer). (4) If existing shareholders REFUSE: Obtain written NOC from EACH shareholder: 'I have no objection to transfer of shares to [Buyer]. I waive my pre-emption rights.' (5) Only after receiving NOC from ALL shareholders, proceed with transfer to original buyer. If AOA is SILENT on pre-emption: No NOC required (transfer freely). Taxvio reviews AOA, drafts offer letter, coordinates NOC collection.",
                  },
                  {
                    mistake: "Not Filing Nomination (Form SH-13) for Shares",
                    icon: "📋",
                    problem:
                      "Shareholders not filing NOMINATION with company during lifetime. Reasons: (1) Lack of awareness about nomination facility, (2) Procrastination ('will do later'), (3) Thinking will is sufficient (it's not for shares). Consequences if shareholder dies without nomination: (1) Legal heirs have to obtain SUCCESSION CERTIFICATE from court (3-8 months process + 2%-3% estate value fees), (2) If no will: Family disputes among heirs (court litigation — years to resolve), (3) Shares remain FROZEN (no voting, no dividend) until transmission is completed, (4) Delays in accessing inheritance (financial hardship for family).",
                    solution:
                      "File NOMINATION (Form SH-13) with company IMMEDIATELY after share allotment/purchase. Process: (1) Download Form SH-13 from MCA website or get from company. (2) Fill nominee details: Name, Address, Relationship, Age, Contact. (3) Witness: Get 2 witnesses to sign nomination. (4) Submit to company within 30 days of share allotment (but can be filed anytime during lifetime). (5) Company registers nomination and acknowledges. BENEFITS: If shareholder dies, nominee gets shares AUTOMATICALLY without succession certificate (just death certificate + ID proof). Saves 3-8 months + 2%-3% fees. Taxvio reminds clients to file nomination and provides Form SH-13 templates.",
                  },
                  {
                    mistake: "Assuming Transfer is Complete After Payment (Without Registration)",
                    icon: "📄",
                    problem:
                      "Transferee pays consideration to transferor and assumes ownership has transferred. Transferor hands over share certificates. BUT: Transfer is NOT registered in company's Register of Members. Consequences: (1) Transferee is NOT legal owner (transferor remains legal owner until registration), (2) Transferee CANNOT vote in general meetings, (3) Dividends go to transferor (not transferee), (4) If transferor dies before registration, shares transmit to transferor's heirs (not to transferee who paid money), (5) If company goes into liquidation, transferee has no claim as shareholder (only unsecured creditor claim for consideration paid).",
                    solution:
                      "Transfer is COMPLETE only when: (1) Transfer deed executed, (2) Application submitted to company, (3) Board approves transfer, (4) Company REGISTERS transfer in Register of Members, (5) New share certificates ISSUED in transferee's name. Until Step 5 is complete, transferee is NOT legal owner. Timeline: Complete within 30-60 days of application. Transferee should: (a) Follow up with company for board meeting date, (b) Obtain board resolution copy confirming approval, (c) Collect new share certificates immediately after issuance, (d) Verify name appears in Register of Members (request updated extract from company). Taxvio tracks transfer status and ensures registration is completed.",
                  },
                  {
                    mistake: "Not Obtaining Succession Certificate for High-Value Estates",
                    icon: "⚖️",
                    problem:
                      "Legal heirs trying to claim deceased shareholder's shares using only LEGAL HEIR CERTIFICATE (from Tehsildar) for high-value estates. Reasons: (1) Trying to avoid court process (succession certificate takes 3-8 months), (2) Trying to save fees (succession certificate costs 2%-3% of estate value). Consequences: (1) Company REFUSES transmission (citing insufficient document), (2) If shares are in LISTED company: Registrar mandates succession certificate for estates >₹2 lakh, (3) If disputes among heirs: Legal heir certificate is weak evidence (easily challenged in court), (4) Tax authorities may question inheritance (suspecting tax evasion).",
                    solution:
                      "For high-value estates (shares worth >₹2 lakh) or LISTED companies, obtain SUCCESSION CERTIFICATE from district court. Process: (1) File petition in district court (jurisdiction: where deceased resided), (2) Attach: Death certificate, list of legal heirs, list of assets (shares), details of deceased's family, (3) Court publishes PUBLIC NOTICE (30-45 days for objections — anyone can object if they have claim), (4) If no objections: Court conducts hearing and issues succession certificate, (5) Timeline: 3-8 months (varies by court workload). Fee: 2%-3% of estate value + court fees + advocate fees. BENEFITS: (a) CONCLUSIVE PROOF of legal heirship (cannot be challenged), (b) Protects company from future claims, (c) Required for large estates/listed companies. Alternative: If deceased left valid WILL: Get will PROBATED (court validates will — 4-8 months process). Probate has SAME legal force as succession certificate. Taxvio coordinates with legal counsel for succession certificate/probate filing.",
                  },
                  {
                    mistake: "Not Disclosing Share Transfer for Tax Purposes",
                    icon: "💸",
                    problem:
                      "Transferor (seller) not disclosing capital gains from share sale in income tax return. Reasons: (1) Thinking it's tax-free (it's NOT — shares are capital assets), (2) Sale consideration is in cash (no bank record), (3) Buyer and seller are related parties (thinking tax authorities won't know). Consequences: (1) INCOME TAX NOTICE for concealment of income, (2) PENALTY: 50%-200% of tax + interest, (3) PROSECUTION for tax evasion (imprisonment up to 7 years under Section 276C), (4) Income Tax can ADD capital gains based on fair market value (even if actual sale was at lower price).",
                    solution:
                      "Transferor MUST disclose share sale in ITR (Income Tax Return) for the year. Capital Gains Calculation: (1) Sale consideration = ₹[X], (2) Cost of acquisition = ₹[Y] (original purchase price), (3) Capital gain = ₹[X - Y], (4) If shares held >24 months: LONG-TERM capital gains (LTCG) @ 10% (if gains >₹1 lakh/year) — File in Schedule CG of ITR. (5) If shares held <24 months: SHORT-TERM capital gains (STCG) @ 15% (for listed) or slab rate (for unlisted) — File in Schedule CG. (6) Pay tax via challan (Form 280) before ITR filing. (7) File ITR by due date (31st July for individuals). PROOF: (a) Transfer deed with consideration amount, (b) Bank statement showing payment receipt, (c) Share purchase invoice (original cost), (d) New share certificates in transferee's name. Taxvio provides CAPITAL GAINS TAX FILING SUPPORT and reminds transferor about ITR deadline.",
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
              Share Transfer & Transmission Packages
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Comprehensive share transfer and transmission packages for all shareholding changes:
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic Transfer",
                  price: "₹4,999",
                  popular: false,
                  features: [
                    "Share Transfer Deed (Form SH-4) preparation",
                    "Stamp duty calculation & e-stamping coordination",
                    "Transfer application drafting",
                    "Board resolution template (DIY submission)",
                    "Register of Members update guidance",
                    "Email support",
                  ],
                  limitations: [
                    "Pre-emption NOC NOT handled (client arranges)",
                    "Board meeting NOT coordinated",
                    "Share certificates NOT printed",
                    "No transmission support",
                  ],
                  ideal:
                    "Simple transfers with no pre-emption rights and DIY board process",
                },
                {
                  name: "Standard (Transfer + Transmission)",
                  price: "₹9,999",
                  popular: true,
                  features: [
                    "Everything in Basic Transfer",
                    "Pre-emption offer letter drafting & NOC collection",
                    "Board meeting coordination (agenda, notice, minutes)",
                    "Board approval processing",
                    "Share certificate printing & endorsement",
                    "Register of Members update (done by us)",
                    "Transmission support (death certificate, legal heir verification)",
                    "Indemnity bond & affidavit preparation",
                    "Priority support (WhatsApp + email)",
                  ],
                  limitations: ["Succession certificate filing NOT included (legal counsel charged separately)"],
                  ideal:
                    "Most private limited companies with pre-emption or transmission needs",
                },
                {
                  name: "Complete (Family Succession)",
                  price: "₹19,999",
                  popular: false,
                  features: [
                    "Everything in Standard",
                    "Up to 5 share transfers in one go (family re-organization)",
                    "Gift deed preparation (for tax-free family transfers)",
                    "Succession certificate filing coordination (legal counsel fees extra)",
                    "Will drafting assistance (for future transmission)",
                    "Nomination filing (Form SH-13) for all shareholders",
                    "Capital gains tax filing support",
                    "Family settlement deed (if disputes among heirs)",
                    "Dedicated CA + CS team",
                    "ROC compliance consultation",
                  ],
                  limitations: [],
                  ideal:
                    "Family businesses planning succession or multi-heir transmissions",
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
                    <p className="text-sm text-gray-500">One-time fee per transfer/transmission</p>
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
                    service: "Transmission Only",
                    price: "₹6,999",
                    desc: "If transfer deed not required (death case)",
                  },
                  {
                    service: "Succession Certificate Filing",
                    price: "₹29,999+",
                    desc: "Legal counsel + court fees (2%-3% estate value)",
                  },
                  {
                    service: "Will Drafting",
                    price: "₹9,999",
                    desc: "Comprehensive will with share bequests",
                  },
                  {
                    service: "Gift Deed Preparation",
                    price: "₹2,999",
                    desc: "For tax-free family transfers",
                  },
                  {
                    service: "Capital Gains Tax Filing",
                    price: "₹4,999",
                    desc: "ITR filing with CG schedule",
                  },
                  {
                    service: "Duplicate Share Certificate",
                    price: "₹3,999",
                    desc: "If original lost (indemnity + ad)",
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
              What Our Share Transfer Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sanjay Sharma, Director",
                  company: "Sharma Enterprises Pvt Ltd",
                  location: "Noida, UP",
                  text: "I was selling my 25% stake to co-director. Taxvio handled entire process — transfer deed, stamp duty, pre-emption NOC from other shareholders, board approval. They completed transfer in just 10 days. Very professional and transparent service. Highly recommended for share transfers!",
                },
                {
                  name: "Meera Gupta, Legal Heir",
                  company: "Gupta Industries Ltd",
                  location: "Meerut, UP",
                  text: "My father passed away and we (3 siblings) had to inherit his shares. Taxvio coordinated with our lawyer for succession certificate, prepared all transmission documents, and registered shares in our names. Their Complete package (₹19,999) was worth it — saved us months of confusion and legal hassles.",
                },
                {
                  name: "Rajesh Kumar, Managing Director",
                  company: "Kumar Family Office",
                  location: "Delhi NCR",
                  text: "We were reorganizing family shareholding (gifting shares from parents to children). Taxvio prepared 5 gift deeds, coordinated stamp duty (minimal for gifts), filed 5 transfers simultaneously, and ensured tax-free transfer. Their family succession expertise is excellent. Will use them again for future transfers.",
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
            <SectionLabel text="Service Locations" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Share Transfer & Transmission Services Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides online share transfer and transmission services for companies across{" "}
              <strong>
                Meerut, Noida, Delhi NCR, Mumbai, Pune, Ahmedabad, Surat
              </strong>
              , and all cities in India. Complete remote processing with digital
              document submission, board coordination, and ROC compliance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Meerut",
                "Noida",
                "Delhi NCR",
                "Mumbai",
                "Pune",
                "Ahmedabad",
                "Surat",
                "Ghaziabad",
                "Gurgaon",
                "Lucknow",
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
              Other ROC & Compliance Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Annual ROC Filing",
                  icon: "📊",
                  link: "/serviceslist/roc/annual-filing",
                  desc: "MGT-7, AOC-4, ADT-1 compliance",
                },
                {
                  title: "Company Incorporation",
                  icon: "🏢",
                  link: "/serviceslist/roc/company-registration",
                  desc: "Private/Public Ltd company setup",
                },
                {
                  title: "DPT-3 Filing",
                  icon: "📋",
                  link: "/serviceslist/roc/dpt-3-filing",
                  desc: "Return of deposits filing",
                },
                {
                  title: "Charge Registration",
                  icon: "🔒",
                  link: "/serviceslist/roc/charge-registration-satisfaction",
                  desc: "CHG-1 & CHG-4 filing",
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
                    Transfer Shares Legally
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Complete Share Transfer & Transmission Documentation
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Get expert share transfer and transmission services. Complete
                    compliance with transfer deed, board approval, stamp duty,
                    register update, and share certificates. Starting ₹4,999
                    with dedicated CA & CS team. Ensure legally valid ownership!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Transfer Shares — ₹4,999
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

        {/* FIXED WHATSAPP BUTTON */}
        {showWhatsApp && (
          <a
            href="https://wa.me/918937980366?text=Hi%2C%20I%20want%20to%20transfer%20or%20transmit%20company%20shares"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Need Help? Chat Now!
            </span>
          </a>
        )}
      </main>
    </>
  );
}

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can shares be transferred to anyone, or are there restrictions?",
      a: "Depends on COMPANY TYPE: (1) PRIVATE LIMITED COMPANIES: AOA (Articles of Association) typically contains RESTRICTIONS on share transfer: (a) PRE-EMPTION RIGHTS: Existing shareholders have FIRST RIGHT to buy shares before they can be sold to outsider. (b) BOARD DISCRETION: Board can APPROVE or REJECT transfer (without assigning reason if AOA allows). (c) LOCK-IN PERIOD: Promoter/founder shares may be locked for certain period (e.g., 3 years). Shares CANNOT be transferred to OUTSIDERS (non-shareholders) without: (1) First offering to existing shareholders, (2) Obtaining NOC from existing shareholders, (3) Board approval. (2) PUBLIC LIMITED COMPANIES: Shares are FREELY TRANSFERABLE (no board approval required). BUT: (a) LISTED COMPANIES: Shares in demat form only, transfer via NSDL/CDSL depository. (b) UNLISTED: Physical share transfer allowed. UNIVERSAL RESTRICTIONS: Shares CANNOT be transferred if: (a) Pledged to lender (without lender's NOC), (b) Subject to court injunction/stay, (c) Under investigation by regulatory authorities. Taxvio reviews AOA to determine transferability restrictions and advises accordingly.",
    },
    {
      q: "How much stamp duty is payable on share transfer?",
      a: "Stamp duty is STATE-SUBJECT (varies by state). GENERAL RATES (as of 2025): (1) Delhi: 0.25% of consideration, (2) Maharashtra: 0.25%, (3) Karnataka: 0.5%, (4) Tamil Nadu: 0.5%, (5) Gujarat: 0.25%, (6) Uttar Pradesh: 0.25%, (7) Telangana: 0.3%. Calculation: Stamp duty = Higher of (a) Consideration paid, OR (b) Fair market value of shares × Rate. Example: Transfer of 100 shares at ₹500/share = ₹50,000 consideration in Delhi (0.25% rate). Stamp duty = ₹50,000 × 0.25% = ₹125. EXEMPTIONS: (1) GIFT to family members (spouse, children, parents): Minimal fixed stamp duty (₹100-500 in most states). (2) TRANSMISSION (transfer on death): ZERO stamp duty (exempt). HOW TO PAY: (1) E-STAMPING (recommended): Visit www.shcilestamp.com → Select state → Pay online → Download e-stamp certificate → Attach with Form SH-4. (2) Physical stamp paper: Purchase stamp paper of required value → Print Form SH-4 on it. PENALTY for non-payment: 10x stamp duty + interest + possible criminal prosecution. Taxvio calculates exact stamp duty based on your state and coordinates e-stamping.",
    },
    {
      q: "What is the difference between nomination and will for shares?",
      a: "NOMINATION vs WILL — Both are succession planning tools, but serve different purposes: (1) NOMINATION (Form SH-13): (a) Filed with COMPANY during shareholder's lifetime. (b) Nominee gets CUSTODY of shares after shareholder's death (not ownership). (c) Nominee holds shares IN TRUST for legal heirs (must distribute as per law/will). (d) If no will: Nominee distributes shares to legal heirs as per Hindu/Muslim/Christian succession laws. (e) If will exists: Nominee must follow will's instructions. (f) BENEFIT: Fast transmission (no succession certificate needed — just death certificate). (2) WILL: (a) Legal document executed by shareholder specifying WHO gets shares after death. (b) Can OVERRIDE legal heirs (e.g., can give all shares to one child, excluding others). (c) Must be PROBATED (validated by court) after death (4-8 months process). (d) Legal heirs named in will get OWNERSHIP (not just custody). BEST PRACTICE: File BOTH nomination AND will: (a) Nomination ensures FAST transmission (nominee gets custody immediately with death certificate), (b) Will ensures shares go to DESIRED beneficiaries (as per your wish, not legal heir rules). Example: Shareholder has 3 children. Nominates eldest child (for fast transmission). Will states: 'Shares to be distributed equally among all 3 children' (nominee must follow will). Taxvio provides nomination filing (Form SH-13) and will drafting services.",
    },
    {
      q: "Can I sell shares below market price or gift to non-family members?",
      a: "YES, you can, but TAX IMPLICATIONS arise: (1) SALE BELOW MARKET PRICE (to non-relative): If you sell shares at LESS THAN FAIR MARKET VALUE (FMV): (a) For YOU (seller): Capital gains calculated based on ACTUAL SALE PRICE (not FMV). Example: FMV = ₹100/share. You sell at ₹50/share. Your capital gains = ₹50 - cost (no tax issue if within exemption). (b) For BUYER: Difference between FMV and actual price is treated as INCOME FROM OTHER SOURCES (taxable at slab rate). Example: FMV ₹100, bought at ₹50 → ₹50 deemed income for buyer (must pay tax). (2) GIFT TO FAMILY MEMBERS: Gift to SPECIFIED RELATIVES (spouse, children, parents, siblings, spouse's siblings) is TAX-FREE for both parties. No stamp duty (minimal ₹100-500 fixed duty). Requires: Gift deed + affidavit stating no consideration. (3) GIFT TO NON-FAMILY (friends, distant relatives, employees): Gift is TAX-FREE for you (giver). But: Gift is TAXABLE INCOME for receiver (at slab rate). Receiver must pay tax on FMV of gifted shares. Example: You gift 100 shares (FMV ₹100/share = ₹10,000) to friend. Friend pays income tax on ₹10,000 (30% slab = ₹3,000 tax). Stamp duty: May apply (some states charge stamp duty on gifts to non-family). RECOMMENDATION: For non-family transfers, better to SELL at FMV (instead of gifting) to avoid tax complications for receiver. Taxvio provides gift deed preparation and tax advisory for below-market transfers.",
    },
    {
      q: "What happens if board rejects share transfer?",
      a: "For PRIVATE LIMITED COMPANIES, board has DISCRETION to reject share transfer (if AOA allows). CONSEQUENCES of rejection: (1) Transfer deed is RETURNED to applicant (transferor/transferee). (2) Transfer is NOT registered in Register of Members. (3) Transferor remains legal owner (transferee does not get shares even if consideration paid). (4) If consideration ALREADY PAID: Transferor must REFUND money to transferee (company is not liable). LEGAL REMEDIES for transferee: (1) APPEAL TO NATIONAL COMPANY LAW TRIBUNAL (NCLT): Transferee can file petition under Section 58(3) of Companies Act: 'Board has wrongfully refused transfer'. NCLT can: (a) Order company to register transfer (if rejection was arbitrary/mala fide), (b) Uphold rejection (if valid grounds). Timeline: 6-12 months for NCLT order. (2) SPECIFIC PERFORMANCE SUIT: If transfer was part of larger agreement (e.g., shareholders' agreement), transferee can sue for specific performance (court orders transferor to complete transfer). (3) DAMAGES: If transfer rejection causes financial loss, transferee can claim damages from transferor (breach of contract). GROUNDS for valid rejection (board can reject if): (1) Transfer violates AOA provisions, (2) Stamp duty not paid on transfer deed, (3) Transfer is to competitor/undesirable person (if AOA allows discretion), (4) Pre-emption rights not followed, (5) Transferee is bankrupt/disqualified. PUBLIC LIMITED COMPANIES: Board CANNOT reject transfer (shares are freely transferable). If board rejects, transferee can directly approach NCLT. Taxvio reviews AOA provisions before transfer to minimize rejection risk.",
    },
    {
      q: "How long does share transfer/transmission take?",
      a: "Timeline varies based on complexity: (1) SHARE TRANSFER (Inter-Vivos): (a) SIMPLE CASE (no pre-emption, willing board): 7-10 working days. Breakdown: Transfer deed preparation (1-2 days) + Application submission (1 day) + Board approval (7 days) + Register update (7 days). (b) WITH PRE-EMPTION: 15-30 days (add 7-15 days for offering to existing shareholders and collecting NOCs). (c) COMPLEX CASE (board reluctant, legal issues): 30-60 days (may require follow-up, board persuasion, legal opinions). (2) SHARE TRANSMISSION (On Death): (a) IF NOMINATION EXISTS: 30-45 days. Breakdown: Death intimation (immediate) + Transmission application (2-3 days) + Company verification (15-30 days) + Register update (7-10 days). (b) IF NO NOMINATION (need succession certificate): 3-8 MONTHS. Breakdown: Succession certificate from court (3-8 months) + Transmission application (2-3 days) + Company verification (15-30 days) + Register update (7-10 days). Court process is LONGEST part (depends on court workload, objections, etc.). FACTORS affecting timeline: (1) Company cooperation (responsive company secretary = faster), (2) Document completeness (missing documents cause delays), (3) Board meeting frequency (some companies have monthly meetings, some quarterly), (4) Pre-emption process (if existing shareholders delay NOC), (5) Court process (for succession certificate/probate). Taxvio expedites process by: (a) Ensuring 100% document completeness, (b) Following up with company secretary regularly, (c) Coordinating board meetings, (d) Coordinating legal counsel for succession certificate.",
    },
    {
      q: "Do I need to report share transfer to income tax department?",
      a: "YES, share transfer has TAX REPORTING obligations: (1) FOR TRANSFEROR (Seller): MUST disclose in INCOME TAX RETURN (ITR). Sale of shares = CAPITAL ASSET transfer → CAPITAL GAINS TAX. (a) If shares held >24 months: LONG-TERM capital gains (LTCG) @ 10% (if gains >₹1 lakh/year). (b) If shares held <24 months: SHORT-TERM capital gains (STCG) @ 15% (for listed) or slab rate (for unlisted). (c) File in ITR under SCHEDULE CG (Capital Gains). (d) Details required: Date of purchase, Cost of acquisition, Date of sale, Sale consideration, Capital gain, Tax paid. (e) Attach: Transfer deed, payment proof, share certificates. (f) Deadline: 31st July (for individuals). Penalty for NON-DISCLOSURE: 50%-200% of tax + interest + prosecution (if concealment). (2) FOR TRANSFEREE (Buyer): (a) If transfer is SALE: No immediate tax (just record cost of acquisition for future sale). (b) If transfer is GIFT from non-relative: Gift is TAXABLE INCOME (at slab rate) → Disclose in ITR under 'Income from Other Sources'. (c) If transfer is GIFT from relative: Tax-free (no disclosure needed). (3) FOR COMPANY: Company must report in: (a) FORM 61A (Annual Information Return): If company facilitates share transfers >₹1 lakh. (b) FORM 26AS (Tax Credit Statement): If TDS deducted on any transaction. IMPORTANT: Income Tax can QUESTION transfer if consideration appears too low/high (may invoke anti-avoidance provisions). Keep all documents (transfer deed, valuation report, payment proof) for minimum 8 years. Taxvio provides CAPITAL GAINS TAX FILING SUPPORT and ensures all reporting is compliant.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — Share Transfer & Transmission
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