import type { Metadata } from "next";
import Script from "next/script";
import DirectorFilingClient from "./DirectorFilingClient";

/* ─── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Director Appointment & Resignation Filing — DIR-12, DIR-11 | Starting ₹2,999 | Taxvio",
  description:
    "File DIR-12 for director appointment or resignation in your Private Limited Company or OPC. CA & CS-assisted, 100% online. Board resolution drafting, DIN verification, MCA filing & acknowledgement. Starting ₹2,999. Pan-India.",
  keywords: [
    "director appointment ROC filing India",
    "director resignation ROC filing India",
    "DIR-12 filing MCA",
    "DIR-11 director resignation",
    "how to appoint director in private limited company",
    "director resignation procedure India",
    "add director private limited company",
    "remove director company India",
    "director DIN verification",
    "board resolution director appointment",
    "MCA director appointment form",
    "director appointment Muzaffarnagar Meerut Delhi NCR",
    "CA assisted director ROC filing India",
    "Taxvio director filing",
    "director change MCA compliance India",
  ],
  alternates: { canonical: "https://www.taxvio.in/serviceslist/roc/director-appointment-resignation" },
  openGraph: {
    title: "Director Appointment & Resignation Filing — DIR-12 | Taxvio",
    description:
      "CA & CS-assisted DIR-12 filing for director appointment or resignation. Board resolution, DIN verification & MCA acknowledgement. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/roc/director-appointment-resignation",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og/director-filing.jpg", width: 1200, height: 630, alt: "Director Appointment Resignation Filing India — Taxvio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Director Appointment & Resignation Filing | Taxvio",
    description: "DIR-12 ROC filing for director changes — CA & CS-assisted, starting ₹2,999.",
    images: ["https://www.taxvio.in/og/director-filing.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ─── JSON-LD Schemas ─────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Director Appointment & Resignation Filing — DIR-12",
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
  serviceType: "ROC Director Filing",
  areaServed: { "@type": "Country", name: "India" },
  description:
    "Complete DIR-12 filing for director appointment or resignation — board resolution drafting, consent letter (DIR-2), DIN verification, MCA filing, and digital acknowledgement. CA & CS-assisted, 100% online.",
  offers: {
    "@type": "Offer",
    price: "2999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2025-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "634",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
    { "@type": "ListItem", position: 3, name: "ROC Compliance", item: "https://www.taxvio.in/serviceslist/roc" },
    { "@type": "ListItem", position: 4, name: "Director Appointment & Resignation", item: "https://www.taxvio.in/serviceslist/roc/director-appointment-resignation" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DIR-12 and when must it be filed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIR-12 is the MCA form used to notify the Registrar of Companies about changes in the directorship of a company — including appointment, resignation, removal, or change in designation of a director. DIR-12 must be filed within 30 days of the change. Late filing attracts a penalty of ₹100 per day with no upper cap.",
      },
    },
    {
      "@type": "Question",
      name: "What is the procedure to appoint a new director in a Private Limited Company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To appoint a new director: (1) Obtain DIN for the new director if not already held. (2) Obtain the director's written consent in Form DIR-2. (3) Pass a board resolution appointing the director. (4) File DIR-12 with MCA within 30 days of the board resolution. (5) Update the company's Register of Directors. If the appointment is for an Additional Director, it must be regularised at the next AGM.",
      },
    },
    {
      "@type": "Question",
      name: "What is the procedure for a director to resign from a company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A director resigns by submitting a written resignation letter to the company. The company must file DIR-12 with MCA within 30 days of receiving the resignation. The resigning director can also independently file DIR-11 with MCA to protect themselves from liability if the company fails to file DIR-12. The resignation is effective from the date specified in the resignation letter or the date of filing DIR-12, whichever is later.",
      },
    },
    {
      "@type": "Question",
      name: "Can a company have only one director after a resignation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A Private Limited Company must always have a minimum of 2 directors. If a resignation reduces the director count below 2, the resignation cannot take effect until a replacement director is appointed. An OPC requires only 1 director, so a sole director cannot resign without first appointing a new director.",
      },
    },
    {
      "@type": "Question",
      name: "What is DIR-2 and why is it required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIR-2 is the written consent letter that a person gives to act as a director of a company. It must be obtained from the incoming director before their appointment is completed and must be attached to the DIR-12 filing. DIR-2 confirms that the director is not disqualified under Section 164 of the Companies Act 2013 and consents to their appointment.",
      },
    },
    {
      "@type": "Question",
      name: "What is DIR-11 and when should a resigning director file it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIR-11 is a form filed by a resigning director directly with MCA to record their resignation — independent of the company. A director should file DIR-11 when they are concerned that the company may not file DIR-12 timely (e.g., disputes with other directors or promoters). Filing DIR-11 protects the resigning director from being held liable for company actions after their resignation date.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not filing DIR-12 within 30 days?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The penalty for late filing of DIR-12 is ₹100 per day from the date of the director change, with no upper cap. If DIR-12 is not filed at all, the director change is not legally recorded on MCA — the outgoing director continues to appear as an active director in government records, creating significant compliance and liability risks.",
      },
    },
    {
      "@type": "Question",
      name: "Can a disqualified director be appointed in a company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A person disqualified under Section 164 of the Companies Act 2013 cannot be appointed as a director. Disqualifications include: undischarged insolvency, conviction for certain offences, court orders prohibiting directorship, and automatic disqualification under Section 164(2) for being a director in companies that have defaulted in annual ROC filings for 3 consecutive years. Taxvio verifies DIN and disqualification status before processing any appointment.",
      },
    },
  ],
};

/* ─── Page (Server Component) ─────────────────────────────────────────────── */
export default function DirectorAppointmentPage() {
  return (
    <>
      <Script id="dir-service-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="dir-bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="dir-faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DirectorFilingClient />
    </>
  );
}