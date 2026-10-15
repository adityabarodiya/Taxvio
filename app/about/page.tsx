// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Taxvio - CA-Assisted Compliance Platform",
  description:
    "Learn about Taxvio, a CA-assisted tax and compliance platform offering FSSAI, GST, Income Tax, and ROC/MCA services for businesses across India. Transparent pricing, expert CA & CS support, and a fully digital process. Based in Khatauli, Muzaffarnagar, UP.",
  keywords: [
    "about Taxvio",
    "Taxvio compliance platform",
    "CA assisted tax filing India",
    "FSSAI GST income tax ROC services",
    "tax compliance platform India",
    "Chartered Accountant compliance services",
    "Company Secretary compliance services",
    "Taxvio Khatauli Muzaffarnagar",
    "business compliance platform India",
    "online tax filing services India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/about",
  },
  openGraph: {
    title: "About Us | Taxvio - CA-Assisted Compliance Platform",
    description:
      "Taxvio brings FSSAI, GST, Income Tax, and ROC/MCA compliance together under one platform, backed by a real team of CAs and Company Secretaries.",
    url: "https://www.taxvio.in/about",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "About Taxvio — CA-Assisted Compliance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Taxvio",
    description:
      "A CA-assisted compliance platform for FSSAI, GST, Income Tax, and ROC/MCA services across India.",
    images: ["https://www.taxvio.in/og/about.jpg"],
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

export default function AboutPage() {
  return <AboutClient />;
}