// app/serviceslist/gst/gst-notice-reply/page.tsx

import type { Metadata } from "next";
import GSTNoticeReplyClient from "./GSTNoticeReplyClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-notice-reply";

export const metadata: Metadata = {
  title: "GST Notice Reply Services — ASMT-10, SCN, DRC-01 & More | Taxvio",
  description:
    "Professional GST notice reply and compliance services: notice analysis, reply drafting, document submission and case follow-up for ASMT-10, show cause notices, DRC-01 and other notices. CA-led, quote upfront.",
  keywords: [
    "GST notice reply","GST notice reply services","GST notice reply online","ASMT-10 reply","GST show cause notice reply",
    "DRC-01 reply","GST scrutiny notice","GST ITC mismatch notice reply","GST registration cancellation notice reply",
    "REG-03 reply","GST notice Khatauli","GST notice Muzaffarnagar","GST notice Uttar Pradesh","CA assisted GST notice reply",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST Notice Reply & Compliance | Taxvio",
    description: "Notice analysis, reply drafting, document submission and case follow-up by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST Notice Reply Services | Taxvio", description: "Professional GST notice reply and compliance services." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What should I do first when I receive a GST notice?", a: "Do not ignore it. Read the form number, section, period and the reply date, then share it with a professional straight away. The reply deadline is the most important detail." },
  { q: "How long do I have to reply to a GST notice?", a: "It depends on the notice and is stated in it. Some give about a week, many give fifteen or thirty days, and some give more. Always follow the date on your notice. Extensions can sometimes be requested." },
  { q: "What happens if I do not reply?", a: "The officer may pass an order on the basis of the available information, which can include a demand of tax with interest and penalty. In some cases registration may be cancelled. It is far better to reply, even if only to ask for time." },
  { q: "What is an ASMT-10 notice?", a: "It is a notice issued after scrutiny of returns, pointing out discrepancies and asking for an explanation. The reply is filed in the prescribed form within the time stated, and a well-reconciled reply often closes the matter." },
  { q: "What is a show cause notice?", a: "A show cause notice proposes to demand tax, interest and penalty and asks why it should not be confirmed. A reasoned reply with evidence, and sometimes timely payment, can reduce or avoid penalty." },
  { q: "Can the penalty be reduced?", a: "In certain cases, paying the tax and interest within the period allowed can reduce or avoid penalty. Whether this applies depends on the section invoked, so check with our CA before paying." },
  { q: "Can you reply to the notice on my behalf?", a: "Yes, with your authorisation. We draft and file the reply, upload documents and attend to follow-up queries and hearings on your behalf." },
  { q: "What documents are needed for the reply?", a: "The notice itself, returns and ledgers for the period, and supporting invoices, bank statements and reconciliations. Our checklist on this page lists the main items." },
  { q: "My notice is about an ITC mismatch. Can you help?", a: "Yes. We reconcile your credit with the auto-drafted statement and your books and show what is correct, what needs correction and what should be paid. See our ITC reconciliation page for the regular process." },
  { q: "Can a cancelled registration be revived?", a: "In some cases, a registration cancelled by the department can be revoked if an application is made within the time allowed, with the pending returns filed. Please contact us quickly." },
  { q: "Will I have to appear before the officer?", a: "Some cases involve a personal hearing, which may be held online. We prepare you and, where permitted, appear on your behalf." },
];

export default function GSTNoticeReplyPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST Notice Reply & Compliance",
      serviceType: "GST notice reply and compliance",
      description:
        "Expert assistance in drafting and filing replies to GST notices and departmental queries.",
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
        { "@type": "ListItem", position: 4, name: "GST Notice Reply & Compliance", item: URL },
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
      <GSTNoticeReplyClient faqs={FAQS} />
    </>
  );
}