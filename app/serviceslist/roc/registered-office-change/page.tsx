// app/serviceslist/roc/registered-office-change/page.tsx
import type { Metadata } from "next";
import RegisteredOfficeChangeClient from "./RegisteredOfficeChangeClient";

export const metadata: Metadata = {
  title:
    "Change of Registered Office Address ROC Filing Services | INC-22/INC-23 | Taxvio",
  description:
    "Professional registered office address change services — INC-22 filing (within city), INC-23 filing (inter-state), Board & Shareholder resolutions, Regional Director approval, MOA amendment. Complete ROC compliance in 7-10 days (within city) or 2-3 months (inter-state). Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Noida, Delhi NCR & pan-India.",
  keywords: [
    "registered office address change India",
    "INC-22 filing",
    "INC-23 filing",
    "change registered office ROC",
    "inter-state office shift",
    "registered office relocation",
    "regional director approval address change",
    "MOA amendment registered office",
    "company address change MCA",
    "registered office change Noida",
    "registered office change Delhi NCR",
    "registered office change Mumbai",
    "CA for address change",
    "CS for office relocation",
    "ROC compliance office shift",
    "30 day deadline registered office",
    "penalty late filing address change",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/registered-office-change",
  },
  openGraph: {
    title: "Change of Registered Office Address | INC-22/INC-23 Filing | Taxvio",
    description:
      "File INC-22/INC-23 for office relocation. Regional Director approval, resolutions, MOA amendment. ₹4,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/registered-office-change",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/registered-office-change.jpg",
        width: 1200,
        height: 630,
        alt: "Change of Registered Office Address Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registered Office Address Change | Taxvio",
    description:
      "File INC-22/23 for office relocation. RD approval, resolutions. 7-10 days. ₹4,999+.",
    images: ["https://www.taxvio.in/og/registered-office-change.jpg"],
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

export default function RegisteredOfficeChangePage() {
  return <RegisteredOfficeChangeClient />;
}