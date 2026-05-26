import type { Metadata } from "next";
import Script from "next/script";
import AnnualROCClient from "./AnnualROCClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Annual ROC Compliance for Companies & LLPs in India — Starting ₹3,999 | Taxvio",
  description:
    "File your Annual ROC Returns on time — AOC-4, MGT-7/MGT-7A for Private Limited Companies & OPCs, Form 11 & Form 8 for LLPs. CA-assisted, 100% online. Avoid ₹100/day late penalties & director disqualification. Starting ₹3,999. Pan-India.",
  keywords: [
    "annual ROC compliance India",
    "AOC-4 filing India",
    "MGT-7 annual return filing",
    "LLP Form 11 Form 8 filing",
    "annual return private limited company",
    "ROC filing due date India",
    "director disqualification Section 164",
    "annual ROC compliance CA assisted",
    "ROC annual filing penalty India",
    "company annual compliance service India",
    "MGT-7A OPC annual return",
    "Taxvio annual ROC compliance",
    "annual compliance private limited company cost",
    "ROC compliance Muzaffarnagar Meerut Delhi NCR",
    "company annual filing service India",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc/annual-roc-compliance" },
  openGraph: {
    title: "Annual ROC Compliance — Companies & LLPs | Taxvio",
    description:
      "AOC-4, MGT-7, Form 11 & Form 8 — CA-assisted annual ROC filing for Pvt Ltd, OPC & LLPs. Starting ₹3,999. Zero penalties.",
    url: "https://www.taxvio.in/serviceslist/roc/annual-roc-compliance",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og/annual-roc-compliance.jpg", width: 1200, height: 630, alt: "Annual ROC Compliance Services India — Taxvio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual ROC Compliance | Taxvio",
    description: "AOC-4, MGT-7, Form 11, Form 8 — timely annual ROC filing. Starting ₹3,999.",
    images: ["https://www.taxvio.in/og/annual-roc-compliance.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual ROC Compliance — Companies & LLPs",
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
  serviceType: "Annual ROC Compliance Filing",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Annual ROC compliance filing for Private Limited Companies, OPCs, and LLPs — AOC-4, MGT-7/MGT-7A, Form 11, Form 8, ADT-1, board meeting minutes, and director's report. CA-assisted, 100% online, zero-penalty guaranteed.",
  offers: [
    {
      "@type": "Offer",
      name: "Annual ROC Compliance — Private Limited Company",
      price: "3999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Annual ROC Compliance — LLP",
      price: "2499",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1240",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
    { "@type": "ListItem", position: 4, name: "Annual ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc/annual-roc-compliance" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the due date for AOC-4 filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AOC-4 (financial statements) must be filed within 30 days of the Annual General Meeting (AGM). Since the AGM must be held by 30 September (within 6 months of financial year end i.e. 31 March), the effective deadline for AOC-4 is typically 29 October. For OPCs, AOC-4 must be filed within 180 days of the financial year end — by 27 September.",
      },
    },
    {
      "@type": "Question",
      name: "What is the due date for MGT-7 annual return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MGT-7 (annual return for Private Limited Companies) must be filed within 60 days of the AGM — typically by 28 November. OPCs and small companies file the simplified MGT-7A instead of MGT-7, also within 60 days of the financial year end.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late ROC filing in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The penalty for late filing of AOC-4 and MGT-7 is ₹100 per day per form, with no upper cap. A company that delays filing both forms for 6 months faces ₹36,000 in penalties (₹100 × 180 days × 2 forms). Directors of companies that fail to file annual returns for 3 consecutive years are disqualified under Section 164(2) and cannot be appointed as a director in any company for 5 years.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 11 and Form 8 for LLPs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 11 is the annual return of an LLP — filed by 30 May each year. It discloses designated partners, total partners, and capital contributions. Form 8 is the Statement of Accounts and Solvency — filed by 30 October each year. Both forms are mandatory for all LLPs regardless of turnover or activity. Late filing penalty: ₹100 per day per form, no upper cap.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a company misses its annual ROC filings for 3 years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 164(2) of the Companies Act 2013, if a company fails to file annual returns (AOC-4 or MGT-7) for 3 consecutive financial years, all its directors are automatically disqualified. Disqualified directors cannot be appointed to the board of any other company for 5 years. The ROC also marks the company as 'defaulting' and may initiate strike-off proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "Is annual ROC compliance mandatory even if the company had no business activity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Annual ROC compliance is mandatory for all registered companies and LLPs regardless of whether they conducted any business during the year. Even dormant companies with nil transactions must file AOC-4 and MGT-7 with nil financial statements. The only relief is that such companies can apply for 'Dormant Company' status under Section 455, which reduces compliance to a single annual return.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are needed for annual ROC compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For annual ROC compliance, you need: audited financial statements (balance sheet, P&L, cash flow statement), board meeting minutes for the year, AGM notice and minutes, directors' DSCs, list of directors and shareholders, and any changes in capital or directorship during the year. Taxvio coordinates with your statutory auditor and prepares all ROC documents from the audit package.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file overdue or pending ROC returns after the due date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pending or overdue ROC returns can be filed at any time — but with accumulated late fees of ₹100 per day per form. MCA also periodically announces CFSS (Companies Fresh Start Scheme) or LLP Settlement Schemes that allow filing of pending forms with waived or reduced penalties. Taxvio assists in clearing all pending ROC backlogs and advises on any available amnesty windows.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function AnnualROCCompliancePage() {
  return (
    <>
      <Script id="roc-annual-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="roc-annual-bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="roc-annual-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AnnualROCClient />
    </>
  );
}