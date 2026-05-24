import type { Metadata } from "next";
import Script from "next/script";
import Section8Client from "./Section8Client";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Section 8 Company Registration in India — NGO / Non-Profit, Starting ₹9,999 | Taxvio",
  description:
    "Register your Section 8 Company (non-profit) online in 15–20 working days. Taxvio's CA & CS-assisted service covers name approval, MOA/AOA drafting, MCA licence under Section 8, Certificate of Incorporation, PAN/TAN & 12A/80G eligibility guidance. Starting ₹9,999. Pan-India.",
  keywords: [
    "section 8 company registration India",
    "ngo registration section 8",
    "non profit company registration India",
    "section 8 company vs trust vs society",
    "section 8 company 12a 80g registration",
    "section 8 company FCRA registration",
    "how to register section 8 company India",
    "section 8 company MCA licence",
    "section 8 company CSR funding eligibility",
    "section 8 company MOA AOA drafting",
    "section 8 company annual compliance India",
    "CA assisted NGO registration India",
    "Taxvio section 8 company registration",
    "non profit organisation registration India",
    "section 8 company registration Muzaffarnagar",
    "section 8 company registration Delhi NCR",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc/section-8-company" },
  openGraph: {
    title: "Section 8 Company Registration — NGO / Non-Profit | Taxvio",
    description:
      "CA-assisted Section 8 Company registration online — MCA licence, MOA/AOA, 12A/80G eligibility, CSR funding ready. Starting ₹9,999.",
    url: "https://www.taxvio.in/serviceslist/roc/section-8-company",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og/section-8-company.jpg", width: 1200, height: 630, alt: "Section 8 Company Registration India — Taxvio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Section 8 Company Registration | Taxvio",
    description: "Online Section 8 NGO registration — CA & CS-assisted, starting ₹9,999. 15–20 working days.",
    images: ["https://www.taxvio.in/og/section-8-company.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Section 8 Company Registration (NGO / Non-Profit)",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    url: "https://www.taxvio.in",
    telephone: "+918937980366",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  serviceType: "Section 8 Company Registration",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Complete Section 8 Company (NGO / Non-Profit) registration — name approval, MOA & AOA drafting for non-profit objects, MCA licence application under Section 8, Certificate of Incorporation, PAN/TAN, and 12A/80G eligibility guidance. CA & CS-assisted, 100% online.",
  offers: {
    "@type": "Offer",
    price: "9999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "186",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
    { "@type": "ListItem", position: 4, name: "Section 8 Company Registration", item: "https://www.taxvio.in/serviceslist/roc/section-8-company" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Section 8 Company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Section 8 Company is a non-profit organisation incorporated under Section 8 of the Companies Act 2013. It is formed for promoting charitable objects such as education, art, science, sports, social welfare, religion, or environmental protection. Profits must be applied only towards the company's stated objectives — they cannot be distributed to members as dividends.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Section 8 Company registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 8 Company registration typically takes 15–20 working days with all documents in order. The process involves name approval, MOA/AOA drafting for non-profit objects, MCA licence application under Section 8, and issuance of the Certificate of Incorporation. The additional MCA licence step (not required for regular companies) adds 5–7 days compared to a standard Pvt Ltd or OPC registration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a Section 8 Company, a Trust, and a Society?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Section 8 Company is incorporated under the Companies Act 2013 and regulated by MCA — making it the most structured, credible, and transparent non-profit form. Trusts are governed by the Indian Trusts Act 1882 or state trust laws, while Societies are governed by the Societies Registration Act 1860 or equivalent state laws. Section 8 Companies are preferred for FCRA registration, CSR funding from corporates, and 12A/80G exemptions because of higher accountability standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Section 8 Company receive CSR funds from corporates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Section 8 Company registered under Section 80G is eligible to receive CSR funds from corporates under Section 135 of the Companies Act 2013. Companies spending on CSR can claim tax deduction only when donating to 80G-registered entities. A Section 8 Company is the most trusted and auditable vehicle for receiving corporate CSR donations.",
      },
    },
    {
      "@type": "Question",
      name: "What is 12A and 80G registration for a Section 8 Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "12A registration under the Income Tax Act gives the Section 8 Company itself exemption from income tax on its income applied towards charitable purposes. 80G registration allows donors to claim a tax deduction of 50% or 100% on their donations — which is a powerful fundraising tool. Both registrations are applied with the Income Tax Department after the Section 8 Company is incorporated.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum number of directors required for a Section 8 Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Section 8 Company requires a minimum of 2 directors (same as a Private Limited Company). There is no minimum paid-up capital requirement. However, the MCA will scrutinise the proposed objects and the credentials of the promoters — the objects must genuinely be charitable, and the promoters should ideally have demonstrated commitment to the cause.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Section 8 Company pay salary to its directors or employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Section 8 Company can pay reasonable salaries to its directors and employees for work done in furtherance of the company's objectives. What is prohibited is the distribution of profits as dividends to members. Salary paid for genuine services is legitimate — excessive or disguised profit distributions are not. The Income Tax Department scrutinises related-party payments carefully during 12A/80G renewals.",
      },
    },
    {
      "@type": "Question",
      name: "What annual compliance is required for a Section 8 Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Section 8 Company must file AOC-4 (financial statements) within 30 days of AGM, MGT-7 (annual return) within 60 days of AGM, hold an AGM within 6 months of financial year end, conduct statutory audit annually, file ITR-7 (for non-profits) under Section 139(4A), and renew 12A/80G registrations periodically. CSR donation receipts must be issued under 80G within specified formats.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function Section8CompanyPage() {
  return (
    <>
      <Script id="s8-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="s8-bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="s8-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Section8Client />
    </>
  );
}