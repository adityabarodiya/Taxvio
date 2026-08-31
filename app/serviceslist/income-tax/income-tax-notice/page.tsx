import type { Metadata } from "next";
import IncomeTaxNoticeClient from "./IncomeTaxNoticeClient";

export const metadata: Metadata = {
  title:
    "Income Tax Notice Response & Resolution Services | Expert Representation | Taxvio",
  description:
    "Professional income tax notice handling, response drafting, documentation, online/offline representation and demand resolution. Expert handling of Section 143(1), 143(3), 142(1), 148, 156 and all IT notices. Serving Khatauli, Muzaffarnagar and pan-India.",
  keywords: [
    "income tax notice response India",
    "income tax notice handling service",
    "Section 143(1) notice response",
    "Section 143(3) scrutiny notice",
    "Section 148 reassessment notice",
    "Section 156 demand notice",
    "income tax demand resolution",
    "tax notice expert India",
    "CA for income tax notice",
    "income tax notice Khatauli",
    "income tax notice Muzaffarnagar",
    "professional tax notice service",
    "scrutiny assessment representation",
    "demand notice appeal",
    "income tax notice consultant",
    "tax notice documentation",
    "online hearing representation",
    "income tax penalty notice",
    "defective return notice 139(9)",
    "income tax notice lawyer alternative",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/income-tax-notice",
  },
  openGraph: {
    title:
      "Income Tax Notice Response & Resolution | Expert Representation | Taxvio",
    description:
      "Expert handling of all income tax notices — Section 143(1), 143(3), 148, 156 and demand notices. Professional response, documentation and representation. Starting ₹1,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/income-tax-notice",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/income-tax-notice.jpg",
        width: 1200,
        height: 630,
        alt: "Income Tax Notice Response and Resolution Services by Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Notice Response Services | Taxvio",
    description:
      "Professional handling of all income tax notices with expert response, documentation and representation.",
    images: ["https://www.taxvio.in/og/income-tax-notice.jpg"],
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

export default function IncomeTaxNoticePage() {
  return <IncomeTaxNoticeClient />;
}