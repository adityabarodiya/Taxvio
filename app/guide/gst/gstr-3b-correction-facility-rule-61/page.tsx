// // app/guide/gst/gstr-3b-correction-facility-rule-61/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Footar from "@/components/Footar"; // ← adjust path

/* ═════════ CONTENT ═════════ */

const DATA: Post = {
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "dateLabel": "24 October 2026",
  "slug": "gstr-3b-correction-facility",
  "url": "https://www.taxvio.in/guide/gst/gstr-3b-correction-facility-rule-61",
  "readMin": 10,
  "metaTitle": "GSTR-3B Correction Facility: Proposed Rule 61(1A) & 61(1B) Explained (2026) | Taxvio",
  "metaDesc": "The GST Council has recommended a facility to correct liability and ITC in GSTR-3B from the April 2027 return period. Understand proposed Rules 61(1A) and 61(1B), IMS, GSTR-1A, what is unknown and how to prepare today.",
  "keywords": [
    "GSTR-3B correction facility",
    "GSTR-3B revision",
    "Rule 61(1A)",
    "Rule 61(1B)",
    "GSTR-3B amendment",
    "GSTR-3B mistake correction",
    "IMS invoice management system",
    "GSTR-1A",
    "GSTR-2B ITC reconciliation",
    "GST 3B error how to correct",
    "GSTR-3B filing Khatauli",
    "GST return CA Muzaffarnagar"
  ],
  "ogTitle": "GSTR-3B Correction Facility Explained: Rules 61(1A) & 61(1B) | Taxvio",
  "ogDesc": "A proposed way to correct GSTR-3B liability and ITC. What is recommended, what is unknown and how to prepare.",
  "badge": "📰 GST Update · Proposed Rules",
  "crumbs": [
    {
      "name": "Guides",
      "href": "/guide"
    },
    {
      "name": "GST",
      "href": "/guide/gst"
    }
  ],
  "h1a": "GSTR-3B Correction Facility:",
  "h1b": "Proposed Rules 61(1A) & 61(1B) Explained",
  "lede": "For years, a filed GSTR-3B could not be revised. The GST Council now wants a structured way to correct tax liability and input tax credit in the return. Here is what is proposed, what is still unknown and how to prepare.",
  "facts": [
    [
      "Status",
      "Recommended by the 57th GST Council meeting (8 Oct 2026); not yet notified"
    ],
    [
      "Proposed start",
      "April 2027 return period, subject to implementation"
    ],
    [
      "Rule 61(1A)",
      "Correct liability, aligned with GSTR-1, GSTR-1A and IFF"
    ],
    [
      "Rule 61(1B)",
      "Correct ITC, aligned with GSTR-2B"
    ]
  ],
  "alert": "This facility is a proposal. Today, a filed GSTR-3B cannot be revised, and corrections are made through later returns. Final rules may differ from the description below.",
  "sections": [
    {
      "id": "problem",
      "h": "The problem: a filed GSTR-3B cannot be revised",
      "blocks": [
        {
          "t": "p",
          "x": "GSTR-3B is the summary return in which a regular taxpayer declares tax liability, claims input tax credit (ITC) and pays tax. It is the return that actually moves money, and it is also the one taxpayers dread getting wrong. Once you submit and offset liability, there is currently **no option to revise** the form."
        },
        {
          "t": "p",
          "x": "So when a mistake happens, such as a sale missed from the return, a wrong tax rate or excess ITC claimed, businesses correct it indirectly. They report the missed liability in a later month, adjust the credit in a subsequent return and sometimes pay interest on the late-paid amount. This works, but it is clumsy, hard to explain to an officer and often creates a mismatch between GSTR-1, GSTR-3B and the annual return."
        },
        {
          "t": "p",
          "x": "The result is a steady flow of notices about differences between GSTR-1 and GSTR-3B, or between ITC claimed and the auto-drafted statement in GSTR-2B. A proper correction route has been a long-standing request from the trade and from professionals."
        }
      ]
    },
    {
      "id": "proposal",
      "h": "What has the GST Council recommended?",
      "blocks": [
        {
          "t": "p",
          "x": "At its 57th meeting on **8 October 2026**, the GST Council recommended changes to the return framework, including two new rule-level mechanisms in Rule 61 of the CGST Rules:"
        },
        {
          "t": "table",
          "head": [
            "Proposed rule",
            "What it covers",
            "Aligned with"
          ],
          "rows": [
            [
              "**Rule 61(1A)**",
              "A mechanism for correct reporting and correction of **liability** in GSTR-3B",
              "Liability in GSTR-1, GSTR-1A and the Invoice Furnishing Facility (IFF)"
            ],
            [
              "**Rule 61(1B)**",
              "A mechanism for correct reporting and correction of **ITC** in GSTR-3B",
              "ITC made available in GSTR-2B"
            ]
          ]
        },
        {
          "t": "p",
          "x": "The idea is to make GSTR-3B **follow** the data already reported elsewhere, instead of being a free-form summary that can drift away from it. On the outward side, under-reported tax would be corrected in a structured way rather than through later-period adjustments. On the inward side, excess or ineligible ITC claims are meant to be corrected within the return framework."
        },
        {
          "t": "callout",
          "tone": "warn",
          "x": "**Status check:** the recommendation is for the mechanism to take effect from the **April 2027 return period**, subject to rule amendments, notifications and the outcome of public consultation. Draft return forms are reported to be put up for public comment, so the final design may change."
        }
      ]
    },
    {
      "id": "related-changes",
      "h": "GSTR-1A, IFF and IMS: the pieces around the correction",
      "blocks": [
        {
          "t": "p",
          "x": "The correction facility does not stand alone. Three related tools matter for how it would work."
        },
        {
          "t": "h3",
          "x": "GSTR-1A"
        },
        {
          "t": "p",
          "x": "GSTR-1A is a facility that lets a taxpayer amend or add details to sales reported in GSTR-1 for the same period before filing GSTR-3B. It is a reference point for the liability side of the proposed correction under Rule 61(1A), because the liability in GSTR-3B is meant to align with it."
        },
        {
          "t": "h3",
          "x": "Invoice Furnishing Facility (IFF)"
        },
        {
          "t": "p",
          "x": "Taxpayers who have opted for the quarterly return scheme (QRMP) can upload limited B2B invoices every month through the IFF so that their buyers can claim ITC in time. The IFF is also named as a source for liability alignment."
        },
        {
          "t": "h3",
          "x": "Invoice Management System (IMS)"
        },
        {
          "t": "p",
          "x": "IMS lets a buyer accept, reject or keep pending the invoices uploaded by suppliers, and those choices shape the ITC shown in GSTR-2B. The Council has also recommended giving IMS a statutory basis through a proposed Rule 60(6A). Since GSTR-2B is the reference for the ITC side of the correction, the actions you take on IMS will matter more than they do today."
        }
      ]
    },
    {
      "id": "unknown",
      "h": "What we do not know yet",
      "blocks": [
        {
          "t": "p",
          "x": "It is important to be honest about the gaps. Published summaries do not yet say:"
        },
        {
          "t": "ul",
          "items": [
            "**Who can correct** and under what conditions, for example whether every taxpayer or only those meeting certain criteria.",
            "**The time limit** within which a correction can be made.",
            "**The exact process**, such as whether corrections are made inside the next return, through a separate form or by a revision window.",
            "**What happens to interest** on the original error. The fact that a correction exists does not remove the obligation to report correctly at first, and interest or other consequences may still apply.",
            "**How it interacts with notices.** Whether a mistake that has already been questioned by an officer can be corrected is not known."
          ]
        },
        {
          "t": "p",
          "x": "Until the draft forms and rules are public, anyone who claims to know exactly how the facility will work is guessing. Our advice is to prepare your data and processes rather than your expectations."
        }
      ]
    },
    {
      "id": "section-16",
      "h": "A related change: aligning return due dates with the ITC time limit",
      "blocks": [
        {
          "t": "p",
          "x": "The Council has also recommended aligning the due dates in **sections 37 and 39** (the dates for filing GSTR-1 and GSTR-3B) with the time limit in **section 16(4)**, the provision that sets the last date to claim ITC on an invoice. At present, these dates are not perfectly aligned, which creates edge cases where credit is claimed but later questioned for being time-barred. The change needs a legal amendment, and its details are awaited."
        }
      ]
    },
    {
      "id": "how-to-correct-today",
      "h": "How to correct a GSTR-3B mistake today",
      "blocks": [
        {
          "t": "p",
          "x": "Since the facility is not yet available, here is how mistakes are handled under the current system."
        },
        {
          "t": "table",
          "head": [
            "Mistake",
            "Current practice"
          ],
          "rows": [
            [
              "Sale missed in GSTR-3B",
              "Report the missed liability in a later month’s return and pay it with interest from the original due date"
            ],
            [
              "Excess ITC claimed",
              "Reverse the credit in a subsequent return and pay interest on the wrongly utilised amount"
            ],
            [
              "ITC not claimed in time",
              "Claim in a later period only within the time limit in section 16(4), otherwise the credit may be lost"
            ],
            [
              "Wrong rate or classification",
              "Adjust through amendment of invoice details in a later GSTR-1 and a corresponding adjustment in GSTR-3B"
            ],
            [
              "Excess tax paid",
              "Adjust against future liability, or claim a refund of excess cash ledger balance where eligible"
            ]
          ]
        },
        {
          "t": "p",
          "x": "Each of these routes leaves a trail across several months, and the later adjustments must be explained if an officer asks. That is why a pre-filing review is cheaper than a post-filing fix, and why our [GST return filing](/serviceslist/gst/gst-return) service includes a reconciliation before every submission."
        }
      ]
    },
    {
      "id": "example",
      "h": "A worked example: how a correction could help",
      "blocks": [
        {
          "t": "p",
          "x": "Suppose a trader reports sales of ₹40 lakh in GSTR-1 for a month, but in GSTR-3B the accountant types ₹36 lakh by mistake and pays tax on that figure. Under today’s rules, the shortfall of ₹4 lakh of sales is added in the next month’s GSTR-3B, with interest from the original due date on the tax that was paid late. Officers who compare the two returns see a mismatch in the first month, and the trader must explain it with a note and working papers."
        },
        {
          "t": "p",
          "x": "If the proposed Rule 61(1A) works as described, GSTR-3B would be aligned with the liability already reported in GSTR-1, so the shortfall would be flagged and corrected in a structured way inside the return framework. The mismatch would not drift into the next month. Interest rules are not yet known, which is why the careful approach is to match the two returns before filing, as our team does."
        },
        {
          "t": "p",
          "x": "The ITC side is similar. If a buyer claims ₹3 lakh of credit in GSTR-3B but GSTR-2B shows only ₹2.6 lakh as available, Rule 61(1B) is meant to bring the claim in line with the statement. Today the excess has to be reversed manually in a later period with interest, and a mismatch can attract a notice. The new system, if implemented as described, would catch the difference earlier. Until the rules are notified, pre-filing reconciliation remains the only reliable protection."
        }
      ]
    },
    {
      "id": "prepare",
      "h": "How to prepare now",
      "blocks": [
        {
          "t": "ol",
          "items": [
            [
              "Reconcile GSTR-1 with books every month",
              "Make sure the sales you report match your ledgers. A clean GSTR-1 will be the anchor for the liability correction."
            ],
            [
              "Reconcile purchases with GSTR-2B before filing",
              "Match your purchase register with the auto-drafted statement and claim only what is available. Our [ITC reconciliation](/serviceslist/gst/gst-itc-reconciliation) service does this month by month."
            ],
            [
              "Start using IMS deliberately",
              "Review invoices on the IMS dashboard, accept the genuine ones, reject the wrong ones and keep doubtful ones pending, rather than ignoring the screen."
            ],
            [
              "Use GSTR-1A when available",
              "If you notice a mistake in GSTR-1 before filing GSTR-3B, amend it first so that the return starts from correct data."
            ],
            [
              "Keep a correction log",
              "Record every mistake, the adjustment you made and the reason. This helps in replies and in future audits."
            ],
            [
              "Watch for the draft forms",
              "Public comments on draft return forms are reported to open soon. Your CA can help you raise practical concerns."
            ]
          ]
        }
      ]
    },
    {
      "id": "impact",
      "h": "Who will benefit most?",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "**High-volume traders and manufacturers** with thousands of purchase invoices, where small ITC errors are common.",
            "**Businesses with multiple GSTINs** that struggle to keep GSTR-1 and GSTR-3B aligned.",
            "**Small taxpayers on the quarterly scheme**, who depend on IFF and want fewer surprises.",
            "**Businesses with a history of GSTR-1 versus GSTR-3B notices**, which should see fewer mismatches if the system works as intended."
          ]
        },
        {
          "t": "p",
          "x": "Even then, a correction facility is a safety net, not a licence to be casual. The obligation to report correctly in the first place remains, and officers will still look at repeated corrections."
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can I revise GSTR-3B after filing today?",
      "a": "No. A filed GSTR-3B cannot be revised under the current system. Mistakes are corrected through adjustments in later returns."
    },
    {
      "q": "What are Rules 61(1A) and 61(1B)?",
      "a": "They are proposed provisions recommended by the GST Council. Rule 61(1A) would provide a mechanism for correcting liability in GSTR-3B, aligned with GSTR-1, GSTR-1A and IFF. Rule 61(1B) would do the same for ITC, aligned with GSTR-2B."
    },
    {
      "q": "When will the GSTR-3B correction facility start?",
      "a": "The recommendation is that it takes effect from the April 2027 return period, subject to notification of rules and implementation. This date may change."
    },
    {
      "q": "Will interest be waived if I correct a mistake?",
      "a": "Not necessarily. Published summaries say correction does not remove the obligation to report correctly at the outset, and interest or other consequences of the original error may still apply, depending on the final rules."
    },
    {
      "q": "What is GSTR-1A?",
      "a": "GSTR-1A is a facility that allows a taxpayer to amend or add details of outward supplies reported in GSTR-1 for the same period before filing GSTR-3B."
    },
    {
      "q": "What is IMS in GST?",
      "a": "The Invoice Management System lets a buyer accept, reject or keep pending the invoices uploaded by suppliers. These actions influence the ITC shown in GSTR-2B."
    },
    {
      "q": "Does this change how I claim ITC today?",
      "a": "No. Until rules are notified, claim ITC under the current conditions, including appearing in GSTR-2B and complying with section 16."
    },
    {
      "q": "How can Taxvio help me avoid GSTR-3B mistakes?",
      "a": "We reconcile your sales and purchases with GSTR-1 and GSTR-2B before every filing and share a short summary for your approval, so most errors are caught before the return is submitted."
    }
  ],
  "sources": [
   
    {
      "label": "GST Portal",
      "url": "https://www.gst.gov.in"
    }
  ],
  "cta": {
    "h": "Want your GSTR-3B right the first time?",
    "p": "Taxvio’s CA-assisted team reconciles GSTR-1, GSTR-2B and your books before every filing, so mistakes are caught before they reach the portal.",
    "label": "GST Return Filing Service",
    "href": "/serviceslist/gst/gst-return"
  },
  "related": [
    {
      "label": "GST Council 57th meeting: 8 key changes",
      "href": "/guide/gst/gst-council-57th-meeting-october-2026"
    },
    {
      "label": "GST ITC reconciliation service",
      "href": "/serviceslist/gst/gst-itc-reconciliation"
    },
    {
      "label": "GST notice reply service",
      "href": "/serviceslist/gst/gst-notice-reply"
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