// app/serviceslist/gst/gst-lut/page.tsx

import type { Metadata } from "next";
import GSTLUTClient from "./GSTLUTClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-lut";

export const metadata: Metadata = {
  title: "GST LUT Filing Services — Export Without Paying IGST | Taxvio",
  description:
    "Professional GST LUT filing for exporters: eligibility check, LUT preparation, online filing and acknowledgement support. Export goods or services without paying IGST. CA-led, fixed quote upfront, pan-India.",
  keywords: [
    "GST LUT filing","LUT filing online","letter of undertaking GST","LUT for export of services","LUT for export of goods",
    "export without payment of IGST","GST LUT renewal","LUT vs bond GST","LUT form RFD-11","LUT acknowledgement",
    "GST LUT Khatauli","GST LUT Muzaffarnagar","GST LUT Uttar Pradesh","CA assisted LUT filing",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST LUT Filing for Exporters | Taxvio",
    description: "Export without paying IGST. Eligibility check, LUT preparation, online filing and acknowledgement by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST LUT Filing Services | Taxvio", description: "Professional LUT filing for goods and service exporters." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What is a GST LUT?", a: "A Letter of Undertaking (LUT) is a declaration furnished on the GST portal by an exporter, stating that the person will fulfil the conditions of export. Once accepted, exports of goods or services can be made without paying IGST." },
  { q: "Who can file an LUT?", a: "Generally any registered person who supplies goods or services for export, or supplies to an SEZ, can furnish an LUT, unless they are barred by the conditions in the law, such as certain past prosecution for tax evasion above a prescribed amount." },
  { q: "Is an LUT mandatory for exports?", a: "No. An exporter may instead pay IGST on the export and claim a refund. But paying and waiting for a refund blocks working capital, so most exporters furnish an LUT." },
  { q: "What is the difference between an LUT and a bond?", a: "An LUT is a simple undertaking, while a bond is a security-backed commitment which may be required where an LUT is not available. Eligible exporters generally prefer an LUT because it needs no bank guarantee." },
  { q: "How long is an LUT valid?", a: "An LUT is generally furnished for a financial year, so you need to submit a fresh one every year before making exports under it. Our team tracks the renewal and confirms current rules for you." },
  { q: "When should I file the LUT?", a: "Before you issue the first export invoice without IGST in the financial year. Filing after the export means IGST was not payable under a valid LUT at the time, which can create liability." },
  { q: "Can I claim a refund if I export under LUT?", a: "Yes. Exporting without paying IGST does not stop you from claiming a refund of unutilised input tax credit, subject to the conditions and limits in the law." },
  { q: "Which documents are needed?", a: "Your GSTIN, PAN and details of any previous LUT, plus authorised signatory details. Goods exporters generally need an IEC as well. Our checklist on this page lists what applies to you." },
  { q: "What if my LUT is rejected?", a: "A rejection usually relates to eligibility or a detail mismatch. We find the reason, correct it and re-file, or advise on the alternative route of paying IGST or furnishing a bond." },
  { q: "Do I need to mention the LUT on my invoices?", a: "Yes. Export invoices issued without IGST should carry the LUT reference as per the rules. We guide you on the wording and details to include." },
  { q: "Can you also help with export refunds and returns?", a: "Yes. We can handle GST returns and refund applications for exporters, so your LUT, invoices and refunds all line up." },
];

export default function GSTLUTPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST LUT Filing",
      serviceType: "GST LUT filing",
      description:
        "Filing of Letter of Undertaking (LUT) for exporters to supply goods or services without payment of IGST.",
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
        { "@type": "ListItem", position: 4, name: "GST LUT Filing", item: URL },
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
      <GSTLUTClient faqs={FAQS} />
    </>
  );
}