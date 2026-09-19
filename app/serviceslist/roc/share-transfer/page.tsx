// app/serviceslist/roc/share-transfer/page.tsx
import type { Metadata } from "next";
import ShareTransferClient from "./ShareTransferClient";

export const metadata: Metadata = {
  title:
    "Share Transfer & Transmission Services | Form SH-4 Filing | Taxvio",
  description:
    "Complete share transfer and transmission compliance including transfer deed (Form SH-4) drafting, board approval, register updates, stamp duty, transmission on death. Starting ₹4,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "share transfer India",
    "share transmission",
    "Form SH-4 filing",
    "share transfer deed",
    "board approval share transfer",
    "register of members update",
    "stamp duty share transfer",
    "gift of shares",
    "transmission on death",
    "succession certificate shares",
    "nomination form SH-13",
    "share transfer private limited",
    "share transfer Khatauli",
    "share transfer Muzaffarnagar",
    "share transfer Meerut",
    "share transfer Noida",
    "share transfer Delhi NCR",
    "ROC compliance shares",
    "CA for share transfer",
    "company secretary share transfer",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/share-transfer",
  },
  openGraph: {
    title: "Share Transfer & Transmission Services | Taxvio",
    description:
      "Transfer/transmit shares with expert documentation. Form SH-4, board approval, stamp duty, register update. ₹4,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/share-transfer",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/share-transfer.jpg",
        width: 1200,
        height: 630,
        alt: "Share Transfer & Transmission Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Share Transfer & Transmission | Taxvio",
    description:
      "Complete share transfer/transmission. Form SH-4, board approval, 7-10 days. ₹4,999+.",
    images: ["https://www.taxvio.in/og/share-transfer.jpg"],
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

export default function ShareTransferPage() {
  return <ShareTransferClient />;
}