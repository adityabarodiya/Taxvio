// app/serviceslist/income-tax/cryptocurrency-tax/page.tsx
import type { Metadata } from "next";
import CryptocurrencyTaxClient from "./CryptocurrencyTaxClient";

export const metadata: Metadata = {
  title: "Cryptocurrency Tax Filing India | VDA Tax (Section 115BBH) | 30% + 1% TDS | Taxvio",
  description:
    "Expert cryptocurrency tax filing services under Section 115BBH. 30% flat tax on crypto gains, 1% TDS compliance (Section 194S), ITR-2 filing with Schedule VDA. Bitcoin, Ethereum, NFT, DeFi, staking tax computation. Starting ₹3,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "cryptocurrency tax India",
    "crypto tax filing",
    "Section 115BBH VDA tax",
    "30% crypto tax rate",
    "1% TDS on cryptocurrency",
    "Section 194S TDS",
    "Bitcoin tax India",
    "Ethereum tax filing",
    "NFT taxation India",
    "DeFi tax compliance",
    "staking rewards tax",
    "crypto mining tax",
    "airdrop taxation",
    "Schedule VDA ITR-2",
    "crypto tax consultant",
    "cryptocurrency ITR filing",
    "crypto loss set off",
    "crypto tax notice response",
    "WazirX CoinDCX tax",
    "virtual digital asset tax",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/income-tax/cryptocurrency-tax",
  },
  openGraph: {
    title: "Cryptocurrency Tax Filing India | 30% VDA Tax + 1% TDS | Taxvio",
    description:
      "Expert crypto tax filing — Section 115BBH (30% tax), Section 194S (1% TDS), Schedule VDA, NFT, DeFi, staking. Starting ₹3,999.",
    url: "https://www.taxvio.in/serviceslist/income-tax/cryptocurrency-tax",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/cryptocurrency-tax.jpg",
        width: 1200,
        height: 630,
        alt: "Cryptocurrency Tax Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptocurrency Tax Filing India | VDA Tax | Taxvio",
    description:
      "Complete crypto tax compliance — 30% tax, 1% TDS, Schedule VDA. Starting ₹3,999.",
    images: ["https://www.taxvio.in/og/cryptocurrency-tax.jpg"],
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

export default function CryptocurrencyTaxPage() {
  return <CryptocurrencyTaxClient />;
}