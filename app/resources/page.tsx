// app/resources/page.tsx
import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Free Tax & Compliance Resources | Taxvio",
  description:
    "Free GST, Income Tax, ROC/MCA, and FSSAI resources — a compliance due-date calendar, document checklists, official government portal links, and a plain-language glossary of common compliance terms.",
  keywords: [
    "tax compliance resources India",
    "GST due date calendar",
    "income tax due dates",
    "ROC compliance calendar",
    "FSSAI due dates",
    "GST registration checklist",
    "ITR filing checklist",
    "company incorporation checklist",
    "government portal links India",
    "GST TDS glossary",
    "compliance glossary India",
    "Taxvio resources",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/resources",
  },
  openGraph: {
    title: "Free Tax & Compliance Resources | Taxvio",
    description:
      "A compliance due-date calendar, document checklists, government portal links, and a glossary — free resources for GST, Income Tax, ROC/MCA, and FSSAI compliance.",
    url: "https://www.taxvio.in/resources",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/resources.jpg",
        width: 1200,
        height: 630,
        alt: "Taxvio Tax & Compliance Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tax & Compliance Resources | Taxvio",
    description:
      "Compliance calendar, checklists, government portal links & glossary — free for GST, Income Tax, ROC/MCA, and FSSAI compliance.",
    images: ["https://www.taxvio.in/og/resources.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}