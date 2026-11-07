// // app/guide/income-tax/tax-audit-itr-due-date-ay-2026-27/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Footar from "@/components/Footar"; // ← adjust path

/* ═════════ CONTENT ═════════ */

const DATA: Post = {
  "slug": "itr-tax-audit-due-date-2026",
  "url": "https://www.taxvio.in/guide/income-tax/tax-audit-itr-due-date-ay-2026-27",
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "dateLabel": "24 October 2026",
  "readMin": 10,
  "metaTitle": "Tax Audit & ITR Due Date Extended AY 2026-27: 21 Oct & 21 Nov 2026 Explained | Taxvio",
  "metaDesc": "CBDT Circular 07/2026 extends the tax audit report due date to 21 October 2026 and the ITR due date for audit cases to 21 November 2026. Who benefits, what does not change, penalty under section 271B and what to do now.",
  "keywords": [
    "tax audit due date extended",
    "tax audit report due date 2026",
    "ITR due date audit cases 21 November 2026",
    "CBDT Circular 07/2026",
    "AY 2026-27 tax audit extension",
    "section 44AB due date",
    "section 271B penalty",
    "ITR 5 due date LLP",
    "ITR 6 due date 2026",
    "tax audit for LLP",
    "tax audit CA Khatauli",
    "ITR filing Muzaffarnagar"
  ],
  "ogTitle": "Tax Audit & ITR Due Dates Extended for AY 2026-27 | Taxvio",
  "ogDesc": "Audit report: 21 Oct 2026. ITR for audit cases: 21 Nov 2026. Who benefits, what does not change and what to do now.",
  "badge": "📰 Income Tax Update · AY 2026-27",
  "crumbs": [
    {
      "name": "Guides",
      "href": "/guide"
    },
    {
      "name": "Income Tax",
      "href": "/guide/income-tax"
    }
  ],
  "h1a": "Tax Audit & ITR Due Date Extended for AY 2026-27:",
  "h1b": "21 October and 21 November 2026 Explained",
  "lede": "CBDT has pushed back the tax audit report date and the ITR date for audited taxpayers. Here is exactly what changed, who benefits, what stays the same and what to do if you have not filed yet.",
  "facts": [
    [
      "Circular",
      "CBDT Circular 07/2026, dated 28 September 2026"
    ],
    [
      "Tax audit report",
      "30 Sep → 21 October 2026"
    ],
    [
      "ITR (audit cases)",
      "31 Oct → 21 November 2026"
    ],
    [
      "Transfer pricing cases",
      "No change (report 31 Oct, ITR 30 Nov)"
    ]
  ],
  "alert": "The extended audit-report date (21 October) has already passed. If your report is still pending, treat the ITR date of 21 November 2026 as a hard stop and finish the audit now.",
  "sections": [
    {
      "id": "what-changed",
      "h": "What has changed?",
      "blocks": [
        {
          "t": "p",
          "x": "On 28 September 2026, the Central Board of Direct Taxes (CBDT) issued **Circular No. 07/2026** extending two important dates for assessment year (AY) 2026-27, which covers income earned in financial year (FY) 2025-26. The circular is issued under section 119 of the Income-tax Act, 1961, read with section 536 of the new Income-tax Act, 2025."
        },
        {
          "t": "p",
          "x": "The headline is simple. The due date for furnishing the **tax audit report** moves from 30 September 2026 to **21 October 2026**, and the due date for filing the **income tax return (ITR) of audited taxpayers** moves from 31 October 2026 to **21 November 2026**. Taxpayers who needed a few more weeks to finalise books, close audit queries and obtain signatures get that time."
        },
        {
          "t": "callout",
          "tone": "info",
          "x": "**Why it matters:** the tax audit report must be uploaded before the return is filed. A delay in the audit report can therefore push back the return, and both carry their own consequences."
        },
        {
          "t": "table",
          "head": [
            "Item",
            "Original date",
            "Extended date"
          ],
          "hl": 0,
          "rows": [
            [
              "Tax audit report (section 44AB)",
              "30 September 2026",
              "**21 October 2026**"
            ],
            [
              "ITR for taxpayers whose accounts are audited",
              "31 October 2026",
              "**21 November 2026**"
            ],
            [
              "Transfer pricing cases: audit and section 92E report",
              "31 October 2026",
              "No change"
            ],
            [
              "Transfer pricing cases: ITR",
              "30 November 2026",
              "No change"
            ]
          ]
        },
        {
          "t": "p",
          "x": "These dates come from published summaries of the circular. Please read the circular itself on the Income Tax Department’s website, or ask your CA, before you rely on a date for a high-stakes filing."
        }
      ]
    },
    {
      "id": "who-benefits",
      "h": "Who benefits from the extension?",
      "blocks": [
        {
          "t": "p",
          "x": "The relief applies to the category of taxpayers whose ITR is normally due on 31 October. In the language used by the due-date table, these are companies and non-company taxpayers whose accounts are required to be audited under the Income-tax Act or under any other law, together with partners of such firms, where the transfer pricing provisions do not apply."
        },
        {
          "t": "ul",
          "items": [
            "**Companies** (private limited companies, OPCs and others) filing ITR-6.",
            "**Firms and LLPs** whose accounts are audited, filing ITR-5. This includes LLPs whose accounts must be audited under the LLP Act (see our [LLP Form 8 guide](/guide/roc/llp-form-8) for the audit limits).",
            "**Proprietors and professionals** whose books are subject to a tax audit under section 44AB.",
            "**Partners of audited firms** whose returns are due on the same date as the firm.",
            "**Persons required to get accounts audited under another law**, such as certain cooperative societies and trusts."
          ]
        },
        {
          "t": "p",
          "x": "Published analysis also suggests that reports which depend on the audit date, such as the report for minimum alternate tax (MAT) under section 115JB, certain reports for trusts and deductions under sections 80-IA and 80JJAA, and the slump sale report under section 50B, move in line with the audit date. That is an interpretation, not a quoted line, so confirm it for your specific report."
        }
      ]
    },
    {
      "id": "what-stays-same",
      "h": "What does not change?",
      "blocks": [
        {
          "t": "p",
          "x": "It is just as important to know what the circular does **not** do."
        },
        {
          "t": "ul",
          "items": [
            "**Transfer pricing cases.** Taxpayers who must furnish a section 92E report keep their existing dates: report by 31 October 2026 and ITR by 30 November 2026.",
            "**Non-audit taxpayers.** The circular is about audited taxpayers. Salaried individuals and others with no audit have separate due dates, and this circular does not move them.",
            "**Advance tax.** Instalments of advance tax follow their own calendar and are not extended by this circular.",
            "**Tax payment.** An extension of the filing date does not by itself extend the date for paying tax. Check the circular’s wording on interest under section 234A and the treatment of self-assessment tax before assuming interest relief."
          ]
        },
        {
          "t": "callout",
          "tone": "warn",
          "x": "**Do not assume interest relief.** Whether interest runs from the original or the extended date depends on how the circular is worded and on how the department computes it. If you have a large tax balance, pay it on time and let your CA confirm the interest position."
        }
      ]
    },
    {
      "id": "tax-audit-basics",
      "h": "Quick refresher: who needs a tax audit under section 44AB?",
      "blocks": [
        {
          "t": "p",
          "x": "A tax audit is an examination of your books by a Chartered Accountant, who then furnishes a report in the prescribed form (Form 3CA or 3CB along with Form 3CD). The commonly applied thresholds are as follows. Limits can be changed by the Finance Act, so verify them for the year."
        },
        {
          "t": "table",
          "head": [
            "Taxpayer",
            "When a tax audit applies (general rule)"
          ],
          "rows": [
            [
              "Business, regular books",
              "Total sales, turnover or gross receipts above ₹1 crore"
            ],
            [
              "Business with mostly digital transactions",
              "Limit raised to ₹10 crore if cash receipts and cash payments are each within the prescribed small percentage of the total"
            ],
            [
              "Professional",
              "Gross receipts above ₹50 lakh"
            ],
            [
              "Business under presumptive scheme (section 44AD) who opts out",
              "Audit may apply if income is below the presumptive rate and total income exceeds the basic exemption limit"
            ],
            [
              "Any taxpayer whose accounts are required to be audited by another law",
              "Audit under that law, such as a company audit or a limited liability partnership audit"
            ]
          ]
        },
        {
          "t": "p",
          "x": "If you are a trader, shopkeeper or small business owner who is near the ₹1 crore or ₹10 crore line, check your cash percentages carefully. A small miss on the cash condition can flip you into a mandatory audit."
        }
      ]
    },
    {
      "id": "penalty",
      "h": "Penalty and consequences of delay",
      "blocks": [
        {
          "t": "p",
          "x": "If a tax audit is required and the report is not furnished by the due date, section 271B of the Income-tax Act, 1961 provides for a penalty of **0.5% of turnover or gross receipts, subject to a maximum of ₹1,50,000**. FY 2025-26 is still governed by the 1961 Act, since the new Income-tax Act, 2025 applies from 1 April 2026 for later years."
        },
        {
          "t": "p",
          "x": "The penalty is not automatic in every case. A taxpayer can show a reasonable cause for the delay, for example a genuine technical failure or the auditor’s illness, but the department decides whether the cause is acceptable. Because the new 21 October date has already passed, the sensible course is to complete the report immediately rather than rely on a reasonable-cause argument."
        },
        {
          "t": "p",
          "x": "Delays also have knock-on effects. A late return can mean interest under section 234A, loss of the right to carry forward certain losses, and limits on claiming some deductions. For companies and LLPs, an unfiled return can also complicate loans, tenders and due-diligence checks."
        }
      ]
    },
    {
      "id": "what-to-do",
      "h": "What to do now: a practical checklist",
      "blocks": [
        {
          "t": "ol",
          "items": [
            [
              "Check whether your audit report has been uploaded",
              "Log in to the e-filing portal and confirm that the Form 3CA/3CB and 3CD are uploaded and accepted. If your CA has not yet uploaded it, ask for a firm date."
            ],
            [
              "Close the books and finalise the numbers",
              "Complete bank reconciliations, stock valuation, depreciation and partner or director accounts. Differences found now are easier to fix than after filing."
            ],
            [
              "Collect supporting documents",
              "Keep GST returns and reconciliations, TDS statements, loan confirmations, fixed asset details and the previous year’s return ready."
            ],
            [
              "Prepare the ITR in the right form",
              "Companies file ITR-6, firms and LLPs ITR-5, and proprietors with audited books usually ITR-3. Choose carefully, since a wrong form makes the return defective."
            ],
            [
              "Reconcile with GST and TDS",
              "Mismatches between turnover in GST returns, books and the ITR are a common trigger for notices."
            ],
            [
              "File and verify before 21 November 2026",
              "Complete the return, pay any balance tax and e-verify promptly. A return that is not verified is treated as not filed."
            ]
          ]
        }
      ]
    },
    {
      "id": "new-act",
      "h": "What about the new Income-tax Act, 2025?",
      "blocks": [
        {
          "t": "p",
          "x": "The Income-tax Act, 2025 replaces the 1961 Act from **1 April 2026**, and it replaces the familiar “assessment year” and “previous year” with a single concept, the **tax year**. That change affects income earned from FY 2026-27 onwards, so the returns you are filing now, for FY 2025-26, are still governed by the 1961 Act. This is why the circular is issued under the old Act while also referring to the new one."
        },
        {
          "t": "p",
          "x": "The first tax audits under the new Act will therefore fall in the next cycle. Use the next few months to tidy your accounting systems, because the same documentation habits, clear ledgers, reconciled returns and timely audits, will serve you well under either law."
        }
      ]
    },
    {
      "id": "mistakes",
      "h": "Common mistakes to avoid",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "**Assuming the extension covers everyone.** Taxpayers with transfer pricing reports and taxpayers without an audit follow different dates.",
            "**Filing the return before the audit report is uploaded.** The report must be on the portal first.",
            "**Waiting for the last day.** Portals slow down near deadlines, and a last-minute error leaves no time to fix it.",
            "**Ignoring the cash conditions for the ₹10 crore limit.** Cash receipts and payments decide which limit applies.",
            "**Not e-verifying.** An unverified return does not count as filed.",
            "**Relying on social-media dates.** Always check the circular or your CA."
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the new due date for the tax audit report for AY 2026-27?",
      "a": "As per CBDT Circular 07/2026 dated 28 September 2026, the due date has been extended from 30 September 2026 to 21 October 2026 for the affected category of taxpayers."
    },
    {
      "q": "What is the new ITR due date for taxpayers whose accounts are audited?",
      "a": "The due date has been extended from 31 October 2026 to 21 November 2026 for AY 2026-27, for taxpayers covered by the circular."
    },
    {
      "q": "Has the due date for transfer pricing cases been extended?",
      "a": "No. Published summaries of the circular say the dates for taxpayers who must furnish a section 92E report remain unchanged, with the report due on 31 October 2026 and the return on 30 November 2026."
    },
    {
      "q": "I missed the 21 October audit report date. What now?",
      "a": "Get the report finalised and uploaded as soon as possible, and in any case before you file the return by 21 November 2026. Late furnishing can attract a penalty under section 271B, subject to any reasonable cause, so speak to your CA immediately."
    },
    {
      "q": "What is the penalty under section 271B?",
      "a": "For FY 2025-26, the penalty is 0.5% of turnover or gross receipts, subject to a maximum of ₹1,50,000, where a required tax audit report is not furnished on time and there is no reasonable cause."
    },
    {
      "q": "Does the extension apply to LLPs?",
      "a": "It applies to non-company taxpayers whose accounts are required to be audited under the Income-tax Act or any other law, which can include LLPs whose accounts are audited. LLPs with audited accounts typically file ITR-5. Confirm your position with your CA."
    },
    {
      "q": "Is the extension also applicable to advance tax and interest?",
      "a": "The circular concerns filing dates. Advance tax follows its own schedule, and the interest position under section 234A depends on the wording of the circular and the department’s computation. Check with your CA before assuming relief."
    },
    {
      "q": "Which ITR form should an audited LLP, firm or company use?",
      "a": "Companies generally use ITR-6, and firms and LLPs use ITR-5. Proprietors and certain others with audited accounts typically use ITR-3. The right form depends on the type of income and the status of the taxpayer."
    }
  ],
  "sources": [
    {
      "label": "TaxUpdate: Tax Audit Due Date Extended to 21 October 2026, CBDT Circular 07/2026",
      "url": "https://taxupdate.in/income-tax/981/tax-audit-due-date-extended-21-october-2026-cbdt-circular-07-2026/"
    },
    {
      "label": "Income Tax Department, Government of India",
      "url": "https://www.incometax.gov.in"
    }
  ],
  "cta": {
    "h": "Need your tax audit or ITR completed before 21 November?",
    "p": "Taxvio’s CA-assisted team handles tax audits and ITR-3, ITR-5 and ITR-6 filings for businesses, LLPs and companies, with a written quote before we start.",
    "label": "Explore Income Tax Services",
    "href": "/serviceslist#income-tax"
  },
  "related": [
    {
      "label": "LLP Form 8: Statement of Account & Solvency (2026 guide)",
      "href": "/guide/roc/llp-form-8"
    },
    {
      "label": "Annual ROC compliance services",
      "href": "/serviceslist/roc/annual-roc-compliance"
    },
    {
      "label": "GST return filing",
      "href": "/serviceslist/gst/gst-return"
    }
  ]
};

/* ═════════ TYPES ═════════ */

type Block =
  | { t: "p"; x: string }
  | { t: "h3"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: [string, string][] }
  | { t: "table"; head: string[]; rows: string[][]; hl?: number }
  | { t: "callout"; tone: "warn" | "info"; x: string };

type Post = {
  slug: string;
  url: string;
  published: string;
  modified: string;
  dateLabel: string;
  readMin: number;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  ogTitle: string;
  ogDesc: string;
  badge: string;
  crumbs: { name: string; href: string }[];
  h1a: string;
  h1b: string;
  lede: string;
  facts: [string, string][];
  alert: string;
  sections: { id: string; h: string; blocks: Block[] }[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  cta: { h: string; p: string; label: string; href: string };
  related: { label: string; href: string }[];
};

/* ═════════ METADATA ═════════ */

export const metadata: Metadata = {
  title: DATA.metaTitle,
  description: DATA.metaDesc,
  keywords: DATA.keywords,
  alternates: { canonical: DATA.url },
  openGraph: {
    title: DATA.ogTitle,
    description: DATA.ogDesc,
    url: DATA.url,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "article",
    publishedTime: DATA.published,
    modifiedTime: DATA.modified,
  },
  twitter: { card: "summary_large_image", title: DATA.ogTitle, description: DATA.ogDesc },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

/* ═════════ HELPERS ═════════ */

/** Tiny inline parser: **bold** and [label](/internal-or-https-link) */
function inline(s: string) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++}>{m[1]}</strong>);
    else if (m[3].startsWith("/"))
      out.push(<Link key={k++} href={m[3]} className="text-[#00416a] font-semibold hover:underline">{m[2]}</Link>);
    else
      out.push(<a key={k++} href={m[3]} target="_blank" rel="noopener noreferrer nofollow" className="text-[#00416a] font-semibold hover:underline">{m[2]}</a>);
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

const pCls = "text-gray-700 leading-[1.85] mb-5";
const thCls = "px-4 py-3 text-left font-bold text-white bg-[#00416a] whitespace-nowrap";
const tdCls = "px-4 py-3 border-t border-gray-100 text-gray-700 align-top";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p":
            return <p key={i} className={pCls}>{inline(b.x)}</p>;
          case "h3":
            return <h3 key={i} className="text-xl font-bold text-[#00416a] mt-6 mb-2">{b.x}</h3>;
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-5">
                {b.items.map((it, j) => <li key={j}>{inline(it)}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3 mb-5">
                {b.items.map(([t, d], j) => (
                  <li key={j} className="flex gap-4 bg-white border border-gray-200 rounded-2xl p-5">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white font-extrabold flex items-center justify-center">{j + 1}</span>
                    <div>
                      <p className="font-bold text-[#00416a] mb-1">{t}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{inline(d)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm mb-5">
                <table className="min-w-[520px] w-full text-sm">
                  <thead><tr>{b.head.map((h) => <th key={h} className={thCls}>{h}</th>)}</tr></thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className={b.hl === j ? "bg-sky-50/70" : ""}>
                        {r.map((c, k) => <td key={k} className={`${tdCls} ${k === 0 ? "font-semibold" : ""}`}>{inline(c)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <div key={i} className={`rounded-2xl border px-5 py-4 mb-5 text-sm leading-relaxed ${b.tone === "warn" ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-sky-50 border-sky-100 text-[#00416a]"}`}>
                {inline(b.x)}
              </div>
            );
        }
      })}
    </>
  );
}

/* ═════════ PAGE ═════════ */

export default function Page() {
  const d = DATA;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: d.metaTitle.replace(/ \| Taxvio$/, ""),
      description: d.metaDesc,
      datePublished: d.published,
      dateModified: d.modified,
      mainEntityOfPage: d.url,
      inLanguage: "en-IN",
      author: { "@type": "Organization", name: "Taxvio", url: "https://www.taxvio.in" },
      publisher: { "@type": "Organization", name: "Taxvio", url: "https://www.taxvio.in" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
        ...d.crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 2, name: c.name, item: `https://www.taxvio.in${c.href}` })),
        { "@type": "ListItem", position: d.crumbs.length + 2, name: d.h1a.replace(/:$/, ""), item: d.url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  const toc = [...d.sections.map((s) => ({ id: s.id, label: s.h })), { id: "faqs", label: "FAQs" }];

  return (
    <main className="bg-slate-50 text-gray-800 overflow-x-clip">
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      <header className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 pt-12 pb-20 md:pt-16 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {d.crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2"><span>/</span><Link href={c.href} className="hover:text-white transition">{c.name}</Link></span>
            ))}
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            {d.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight mb-5">
            {d.h1a}{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">{d.h1b}</span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-3xl mb-6">{d.lede}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-sky-100/80">
            <span>By <b className="text-white">Taxvio CA Team</b></span>
            <span>Updated: <time dateTime={d.modified}>{d.dateLabel}</time></span>
            <span>⏱ {d.readMin} min read</span>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-10 text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
        </svg>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid lg:grid-cols-[1fr_300px] gap-10">
        <article className="min-w-0 max-w-3xl">
          <div className="rounded-3xl bg-white border border-[#00416a]/15 shadow-sm p-6 mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3">Quick answer</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {d.facts.map(([k, v]) => (
                <li key={k} className="rounded-xl bg-sky-50 border border-sky-100 px-4 py-3"><b className="text-[#00416a]">{k}:</b> {v}</li>
              ))}
            </ul>
            <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mt-4">⚠️ {d.alert}</p>
          </div>

          <details className="lg:hidden rounded-2xl bg-white border border-gray-200 p-4 mb-10">
            <summary className="font-bold text-[#00416a] cursor-pointer">In this guide</summary>
            <ol className="mt-3 space-y-2 text-sm list-decimal list-inside text-gray-600">
              {toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`} className="hover:text-[#00416a] hover:underline">{t.label}</a></li>
              ))}
            </ol>
          </details>

          {d.sections.map((s) => (
            <section key={s.id} id={s.id} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00416a] leading-tight mb-4 scroll-mt-40">{s.h}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white px-6 py-10 sm:px-10 mb-14 shadow-xl">
            <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">{d.cta.h}</h2>
              <p className="text-sky-100/90 leading-relaxed mb-6 max-w-xl">{d.cta.p}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={d.cta.href} className="bg-white text-[#00416a] px-7 py-3.5 rounded-xl font-bold shadow-lg hover:scale-105 transition text-center">{d.cta.label} →</Link>
                <Link href="/contact" className="border-2 border-white/50 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition text-center">Talk to a CA</Link>
              </div>
            </div>
          </div>

          <section id="faqs" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00416a] leading-tight mb-4 scroll-mt-40">Frequently asked questions</h2>
            <div className="space-y-3">
              {d.faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white open:border-[#00416a]/40 open:shadow-lg open:shadow-[#00416a]/10 transition">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 font-bold text-gray-800 group-open:text-[#00416a]">
                    {f.q}
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00416a]/10 text-[#00416a] flex items-center justify-center text-lg font-bold group-open:rotate-45 group-open:bg-[#00416a] group-open:text-white transition">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white border border-gray-200 p-5 text-sm text-gray-600 leading-relaxed mb-8">
            <p className="font-bold text-[#00416a] mb-2">Related guides &amp; services</p>
            <ul className="list-disc pl-5 space-y-1 mb-5">
              {d.related.map((r) => (
                <li key={r.href}><Link href={r.href} className="text-[#00416a] hover:underline">{r.label}</Link></li>
              ))}
            </ul>
            <p className="font-bold text-[#00416a] mb-2">Sources &amp; disclaimer</p>
            <p className="mb-3">Compiled on {d.dateLabel} from the following public references. Verify against the official notification or circular before acting.</p>
            <ul className="list-disc pl-5 space-y-1">
              {d.sources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#00416a] hover:underline">{s.label}</a></li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-gray-400">
              General information only, not legal or professional advice. Tax law and due dates change by notification. Please consult a Chartered Accountant for your specific case.
            </p>
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <nav aria-label="Table of contents" className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="font-bold text-[#00416a] mb-3 text-sm">In this guide</p>
              <ol className="space-y-1.5">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-sm text-gray-600 hover:text-[#00416a] hover:translate-x-1 inline-block transition">{t.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="rounded-2xl bg-gradient-to-br from-[#00416a] to-[#002b45] text-white p-5 shadow-lg">
              <p className="font-extrabold mb-1">Need expert help?</p>
              <p className="text-sm text-sky-100/85 mb-4">A Taxvio CA will review your case and give a clear plan.</p>
              <Link href="/contact" className="block text-center bg-white text-[#00416a] font-bold py-2.5 rounded-lg hover:scale-[1.02] transition">Get a Free Quote →</Link>
            </div>
          </div>
        </aside>
      </div>

      <Footar />
    </main>
  );
}