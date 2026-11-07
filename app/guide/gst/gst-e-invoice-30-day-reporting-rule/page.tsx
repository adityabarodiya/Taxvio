// // app/guide/gst/gst-e-invoice-30-day-reporting-rule/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Footar from "@/components/Footar"; // ← adjust path

/* ═════════ CONTENT ═════════ */

const DATA: Post = {
  "published": "2026-10-24",
  "modified": "2026-10-24",
  "dateLabel": "24 October 2026",
  "slug": "gst-e-invoice",
  "url": "https://www.taxvio.in/guide/gst/gst-e-invoice-30-day-reporting-rule",
  "readMin": 11,
  "metaTitle": "GST E-Invoice 2026: ₹5 Crore Threshold & 30-Day IRN Reporting Rule Explained | Taxvio",
  "metaDesc": "Who must issue GST e-invoices, how the ₹5 crore threshold works across all GSTINs of a PAN, the 30-day IRN reporting limit for ₹10 crore taxpayers, exemptions, ITC impact and a practical compliance checklist for 2026.",
  "keywords": [
    "GST e-invoice",
    "e-invoicing threshold 5 crore",
    "e-invoice 30 day rule",
    "IRN reporting time limit",
    "e-invoice rejected after 30 days",
    "e-invoice exemptions",
    "e-invoice applicability",
    "Rule 48(5) e-invoice",
    "IRP invoice registration portal",
    "e-invoice and ITC",
    "e-invoice Khatauli",
    "GST e-invoice CA Muzaffarnagar"
  ],
  "ogTitle": "GST E-Invoice: ₹5 Crore Threshold & 30-Day Reporting Rule | Taxvio",
  "ogDesc": "Who needs an e-invoice, what the 30-day IRN window means and how to stay compliant.",
  "badge": "📰 GST Update · E-Invoicing",
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
  "h1a": "GST E-Invoice in 2026:",
  "h1b": "₹5 Crore Threshold & the 30-Day IRN Reporting Rule",
  "lede": "E-invoicing now reaches businesses with turnover above ₹5 crore, and larger taxpayers can no longer report old invoices to the portal after 30 days. Here is who is covered, what happens if you miss the window and how to stay safe.",
  "facts": [
    [
      "Mandate threshold",
      "Aggregate turnover above ₹5 crore (since 1 Aug 2023)"
    ],
    [
      "30-day reporting limit",
      "Taxpayers with turnover ₹10 crore or more (from 1 Apr 2025)"
    ],
    [
      "Test",
      "PAN-wide turnover, any year since FY 2017-18"
    ],
    [
      "Late invoice",
      "IRN generation rejected by the portal"
    ]
  ],
  "alert": "The 30-day limit is applied by the Invoice Registration Portal, so a document dated 1 October 2026 would have to be reported by 30 October 2026. Do not backdate or regenerate documents to get around it.",
  "sections": [
    {
      "id": "what-is",
      "h": "What is GST e-invoicing?",
      "blocks": [
        {
          "t": "p",
          "x": "E-invoicing is not a new kind of invoice. It is a system in which a business that is covered by the rules must **report each business-to-business invoice, debit note and credit note** to the government’s Invoice Registration Portal (IRP). The portal validates the data, generates a unique **Invoice Reference Number (IRN)** and returns a digitally signed document with a **QR code**. Only then is the document treated as a valid invoice for GST purposes."
        },
        {
          "t": "p",
          "x": "The data then flows automatically to the GST system, which is why e-invoicing helps with auto-population of GSTR-1, faster availability of credit to buyers in GSTR-2B and fewer mismatches. In return, suppliers lose the flexibility to issue invoices first and report them whenever convenient."
        }
      ]
    },
    {
      "id": "threshold",
      "h": "Who must issue e-invoices? The ₹5 crore rule",
      "blocks": [
        {
          "t": "p",
          "x": "A registered person must issue e-invoices if their **aggregate turnover exceeds ₹5 crore** in any financial year from FY 2017-18 onwards. This threshold was reduced to ₹5 crore by Notification No. 10/2023-Central Tax dated 10 May 2023, effective **1 August 2023**."
        },
        {
          "t": "ul",
          "items": [
            "**Any year since FY 2017-18 counts.** A fall in this year’s turnover does not automatically remove the obligation once you have crossed the limit in an earlier year.",
            "**Turnover is measured PAN-wide.** If you hold several GSTINs under one PAN, all of them are added together, not tested branch by branch.",
            "**“Exceeding” is the test.** Turnover of exactly ₹5 crore is not above the limit, so read the wording of the notification carefully."
          ]
        },
        {
          "t": "callout",
          "tone": "info",
          "x": "**Example:** a trader with three GSTINs, one in each of three states, each with turnover of ₹2 crore, has aggregate turnover of ₹6 crore under the same PAN. E-invoicing applies to all three GSTINs even though none crosses ₹5 crore individually."
        }
      ]
    },
    {
      "id": "30-day",
      "h": "The 30-day IRN reporting rule",
      "blocks": [
        {
          "t": "p",
          "x": "From **1 April 2025**, taxpayers with aggregate annual turnover of **₹10 crore or more** have a time limit for reporting documents to the IRP: invoices, debit notes and credit notes must be reported **within 30 days of the document date**. This followed a GSTN advisory dated 5 November 2024."
        },
        {
          "t": "table",
          "head": [
            "Question",
            "Answer"
          ],
          "rows": [
            [
              "Who is covered by the 30-day block?",
              "Taxpayers with aggregate annual turnover of ₹10 crore or more"
            ],
            [
              "Is e-invoicing mandatory between ₹5 crore and ₹10 crore?",
              "Yes, e-invoicing applies above ₹5 crore, but the 30-day block is described for ₹10 crore and above. Taxpayers in between should still report promptly."
            ],
            [
              "Which documents?",
              "Invoices, debit notes and credit notes covered by e-invoicing"
            ],
            [
              "What if reported on day 31?",
              "The portal rejects IRN generation"
            ],
            [
              "Example",
              "A document dated 1 October 2026 should be reported by 30 October 2026"
            ]
          ]
        },
        {
          "t": "p",
          "x": "The practical meaning is that **a delayed invoice cannot simply be reported later**. If you miss the window, you cannot generate a valid IRN for that document through the usual route. That puts a premium on billing discipline."
        }
      ]
    },
    {
      "id": "consequences",
      "h": "What happens if you miss the e-invoice rules?",
      "blocks": [
        {
          "t": "p",
          "x": "The consequences are not limited to a portal error."
        },
        {
          "t": "ul",
          "items": [
            "**The document may not count as an invoice.** Under Rule 48(5) of the CGST Rules, an invoice not issued in the prescribed manner is not treated as an invoice for the purposes of the rules.",
            "**Your buyer’s ITC can be affected.** Because of the above, the recipient may face difficulty claiming credit under section 16 of the CGST Act. This is not an automatic denial in every case, but it is a serious commercial risk, since buyers dislike vendors who create credit problems.",
            "**Penalty proceedings are possible.** A missing or defective e-invoice may expose the supplier to penalty proceedings, including section 122 where its conditions are met. No fixed amount applies, and a portal rejection by itself is not a penalty.",
            "**E-way bill complications.** E-way bills and e-invoices are separate requirements, but cancelling an IRN can affect an e-way bill already generated against the document, so check both."
          ]
        }
      ]
    },
    {
      "id": "exemptions",
      "h": "Exemptions: who is outside e-invoicing?",
      "blocks": [
        {
          "t": "h3",
          "x": "Exempt entities"
        },
        {
          "t": "p",
          "x": "Under Notification No. 13/2020-Central Tax, as amended, certain classes of suppliers are exempt, including:"
        },
        {
          "t": "ul",
          "items": [
            "Banking companies and certain financial institutions, including NBFCs.",
            "Insurers.",
            "Goods transport agencies providing road freight services.",
            "Suppliers of passenger transport services.",
            "Suppliers of cinema admission services (specified).",
            "Units in Special Economic Zones (SEZ). SEZ developers are **not** exempt."
          ]
        },
        {
          "t": "h3",
          "x": "Documents that do not need an IRN"
        },
        {
          "t": "ul",
          "items": [
            "Ordinary **B2C** invoices (sales to consumers), though a QR code rule may apply to some large taxpayers.",
            "Bills of supply for exempt supplies.",
            "Credit notes that are not related to GST.",
            "Import documents.",
            "Pure job-work movement documents.",
            "Reverse-charge entries do not automatically need an IRN."
          ]
        },
        {
          "t": "p",
          "x": "Exemptions are narrow and conditional. If you are not sure whether your business or a particular transaction is covered, ask before you assume."
        }
      ]
    },
    {
      "id": "data-flow",
      "h": "How e-invoice data flows into your GST returns",
      "blocks": [
        {
          "t": "p",
          "x": "Once an IRN is generated, the invoice details are transmitted to the GST system. For the supplier, they auto-populate GSTR-1, which cuts data entry and reduces the chance of a mismatch between the invoice register and the return. For the buyer, the invoice becomes visible in the auto-drafted statement GSTR-2B for the period, subject to the supplier’s filing, which makes it easier to reconcile and claim credit."
        },
        {
          "t": "p",
          "x": "That is why late reporting hurts twice. The supplier loses the ability to generate an IRN, and the buyer may find the invoice missing from the statement they use to claim credit. A business that bills on time but reports to the portal late is, in practical terms, billing late."
        },
        {
          "t": "h3",
          "x": "A worked example"
        },
        {
          "t": "p",
          "x": "A manufacturer with turnover above ₹10 crore raises an invoice for ₹5 lakh plus GST on 1 October 2026 but forgets to report it. On 31 October the billing software shows an error because the window has closed. The customer, who needs the credit for the month, now asks for a replacement document, and the manufacturer faces a tangle: the original has no IRN, a fresh invoice has a different date and the two cannot be treated casually. A simple internal alert at day 20 would have avoided all of this."
        }
      ]
    },
    {
      "id": "checklist",
      "h": "A practical e-invoice compliance checklist",
      "blocks": [
        {
          "t": "ol",
          "items": [
            [
              "Test turnover correctly",
              "Add up aggregate turnover under your PAN for every financial year from FY 2017-18, across all GSTINs, and note whether you have crossed ₹5 crore and ₹10 crore."
            ],
            [
              "Check for an exemption",
              "Confirm whether you fall in an exempt class, and whether specific transactions are excluded."
            ],
            [
              "Classify every document type",
              "B2B invoices, debit notes and credit notes need an IRN. B2C, exempt bills of supply and imports generally do not."
            ],
            [
              "Set a reporting rule inside your billing software",
              "Generate the IRN at the time of invoicing. For large taxpayers, add an alert at day 20 or 25 for any unreported document."
            ],
            [
              "Check GSTR-1 auto-population",
              "Confirm that authenticated invoice data flows correctly into your sales register and GSTR-1, and fix mismatches the same month."
            ],
            [
              "Run a backlog scan",
              "Look for any covered documents without an IRN and escalate before the 30-day window closes."
            ],
            [
              "Never backdate or regenerate to dodge the limit",
              "If the window has already passed, preserve records and get case-specific advice instead of creating workarounds."
            ]
          ]
        }
      ]
    },
    {
      "id": "common-mistakes",
      "h": "Mistakes businesses make with e-invoicing",
      "blocks": [
        {
          "t": "ul",
          "items": [
            "**Testing each GSTIN separately** instead of adding up the turnover for the whole PAN.",
            "**Assuming a small drop in turnover cancels the obligation.** The test looks at all earlier years.",
            "**Issuing a manual invoice first and reporting later.** For covered suppliers, the IRN must exist before the invoice is considered valid.",
            "**Mixing up e-way bills and e-invoices.** They are separate requirements with separate portals and rules.",
            "**Ignoring credit notes.** Credit notes and debit notes are also covered and also subject to the 30-day limit for larger taxpayers.",
            "**Letting different branches use different billing software** with no common check on the 30-day window."
          ]
        }
      ]
    },
    {
      "id": "reforms",
      "h": "How the new GST reforms connect to e-invoicing",
      "blocks": [
        {
          "t": "p",
          "x": "The October 2026 GST Council recommendations aim to align return due dates with the ITC time limit and to build a correction mechanism around GSTR-1, GSTR-1A and GSTR-2B. Clean, IRN-backed invoice data will be the foundation for all of that. If your e-invoice process is tidy today, you will be well placed to benefit from the reforms when they arrive. See our explainers on the [GST Council 57th meeting](/guide/gst/gst-council-57th-meeting-october-2026) and the [GSTR-3B correction facility](/guide/gst/gstr-3b-correction-facility-rule-61)."
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is the turnover limit for e-invoicing?",
      "a": "E-invoicing is mandatory for registered persons whose aggregate turnover exceeds ₹5 crore in any financial year from FY 2017-18 onwards, effective 1 August 2023 under Notification No. 10/2023-Central Tax."
    },
    {
      "q": "Is turnover tested per GSTIN or per PAN?",
      "a": "Aggregate turnover is assessed PAN-wide, across all GSTINs held under the same PAN."
    },
    {
      "q": "What is the 30-day rule for e-invoices?",
      "a": "From 1 April 2025, taxpayers with aggregate annual turnover of ₹10 crore or more cannot report invoices, debit notes and credit notes to the IRP after 30 days from the document date. The portal rejects such reporting."
    },
    {
      "q": "Do taxpayers with turnover between ₹5 crore and ₹10 crore need e-invoices?",
      "a": "Yes, e-invoicing applies above ₹5 crore. The 30-day portal block is described for ₹10 crore and above, but smaller covered taxpayers should still report promptly to avoid compliance and ITC problems."
    },
    {
      "q": "What if I miss the 30-day window?",
      "a": "The IRP will not generate an IRN for the document. Without a valid IRN, the document may not be treated as an invoice under the rules, which can affect the buyer’s ITC and expose you to proceedings. Do not backdate or recreate documents, and seek case-specific advice."
    },
    {
      "q": "Are B2C invoices covered?",
      "a": "Ordinary B2C invoices generally do not need an IRN. Some large taxpayers have a dynamic QR code requirement for B2C invoices, so check the rules applicable to you."
    },
    {
      "q": "Are SEZ units exempt from e-invoicing?",
      "a": "SEZ units are exempt, but SEZ developers are not."
    },
    {
      "q": "Does e-invoicing replace the e-way bill?",
      "a": "No. E-way bills are a separate requirement for the movement of goods. They are linked in practice, since an IRN cancellation can affect an e-way bill already generated for the document."
    }
  ],
  "sources": [
  
    {
      "label": "E-Invoice Portal (IRP), NIC",
      "url": "https://einvoice1.gst.gov.in"
    },
    {
      "label": "CBIC, Government of India",
      "url": "https://www.cbic.gov.in"
    }
  ],
  "cta": {
    "h": "Not sure whether your business needs e-invoicing?",
    "p": "Taxvio’s CA team checks your PAN-wide turnover, exemptions and billing set-up, and keeps your returns in line with your IRN data.",
    "label": "Talk About GST Compliance",
    "href": "/serviceslist/gst/gst-return"
  },
  "related": [
    {
      "label": "GST Council 57th meeting: 8 key changes",
      "href": "/guide/gst/gst-council-57th-meeting-october-2026"
    },
    {
      "label": "GSTR-3B correction facility explained",
      "href": "/guide/gst/gstr-3b-correction-facility-rule-61"
    },
    {
      "label": "GST registration",
      "href": "/serviceslist/gst/gst-registration"
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