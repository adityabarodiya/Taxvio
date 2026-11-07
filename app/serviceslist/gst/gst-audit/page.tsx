
// app/serviceslist/gst/gst-audit/page.tsx

import type { Metadata } from "next";
import GSTAuditClient from "./GSTAuditClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-audit";

export const metadata: Metadata = {
  title: "GST Audit Services — Audit Assistance, Reconciliation & Department Coordination | Taxvio",
  description:
    "Expert GST audit assistance: audit applicability check, data reconciliation, audit report preparation and department coordination. CA-led support for notices and audits. Fixed quote upfront, pan-India.",
  keywords: [
    "GST audit","GST audit services","GST audit assistance","GST audit notice reply","GST departmental audit",
    "GST scrutiny notice reply","GST reconciliation","GST audit applicability","GST special audit","GST audit report",
    "GST audit Khatauli","GST audit Muzaffarnagar","GST audit Uttar Pradesh","CA assisted GST audit",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST Audit Assistance | Taxvio",
    description: "Reconciliation, documentation, audit reports and department coordination by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST Audit Services | Taxvio", description: "Expert GST audit assistance and compliance services." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What is a GST audit?", a: "A GST audit is an examination of your records, returns, tax payments and input tax credit to check that they are correct and in line with the law. It can be carried out by the tax department or by an accountant appointed for a special audit." },
  { q: "Who can be audited under GST?", a: "Any registered taxpayer can be selected for audit by the department. Larger businesses and those with discrepancies, mismatched credit or unusual filing patterns may be more likely to be selected." },
  { q: "Is a GST audit by a chartered accountant mandatory for every business?", a: "Earlier rules required certain taxpayers to get an audit report, but this requirement has been relaxed over time and replaced by a self-certified reconciliation statement for higher-turnover taxpayers. Our CA confirms what applies to your turnover and year." },
  { q: "What is the difference between audit and scrutiny?", a: "Scrutiny is the officer's review of your filed returns, usually through a notice pointing out discrepancies, while a departmental audit is a deeper verification of your records, normally with prior intimation and a request to produce documents." },
  { q: "How much notice does the department give?", a: "The department generally gives advance intimation before an audit and states the records to be produced. The exact period is in your notice, so please share it with us immediately." },
  { q: "What documents will be needed?", a: "GST returns, sales and purchase registers, books of accounts, bank statements and supporting invoices for the audit period. Our checklist on this page lists the main items." },
  { q: "What happens if differences are found?", a: "The officer may ask for an explanation and may issue a notice for tax, interest and penalty if the differences are not resolved. We help you explain, correct and, where needed, contest the findings." },
  { q: "Can you reply to the notice on my behalf?", a: "Yes. We prepare a reasoned reply with supporting working papers, submit it on the portal or as directed and attend to follow-up queries, subject to your authorisation." },
  { q: "What if I missed the reply date?", a: "Contact us at once. Depending on the stage, you may be able to request more time or file a late reply, and the earlier you act, the better the options." },
  { q: "Should I get a voluntary GST review?", a: "A voluntary review is useful for larger or fast-growing businesses. It finds mismatches and wrongly claimed credit while they can still be corrected, usually at lower cost than after a notice." },
  { q: "Can you also help with the annual return and reconciliation?", a: "Yes. We prepare the annual return and, where applicable, the reconciliation statement, so your yearly filings and any audit position are consistent." },
];

export default function GSTAuditPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST Audit Assistance",
      serviceType: "GST audit assistance",
      description:
        "Complete support for GST audit including reconciliation, documentation, and departmental coordination.",
      url: URL,
      areaServed: { "@type": "Country", name: "India" },
      provider: {
        "@type": "ProfessionalService",
        name: "Taxvio",
        url: "https://www.taxvio.in",
        address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
        { "@type": "ListItem", position: 3, name: "GST Services", item: "https://www.taxvio.in/serviceslist#gst" },
        { "@type": "ListItem", position: 4, name: "GST Audit Assistance", item: URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <GSTAuditClient faqs={FAQS} />
    </>
  );
}