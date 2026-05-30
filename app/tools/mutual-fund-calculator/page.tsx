// app/tools/mutual-fund-calculator/page.tsx
import type { Metadata } from "next";
import MutualFundClient from "./client";

export const metadata: Metadata = {
  title: "Mutual Fund Calculator 2024-25 – SIP, Lump Sum, SWP & Step-Up SIP | Taxvio",
  description:
    "Use Taxvio's free Mutual Fund Calculator to calculate returns for SIP, Lump Sum, SWP, and Step-Up SIP investments. Get projected corpus, wealth gained, and year-wise growth schedule. 100% free & accurate.",
  keywords: [
    "mutual fund calculator",
    "SIP calculator",
    "lump sum calculator",
    "SWP calculator",
    "step up SIP calculator",
    "mutual fund return calculator India",
    "SIP return calculator",
    "XIRR calculator",
    "taxvio mutual fund calculator",
  ],
  openGraph: {
    title: "Free Mutual Fund Calculator – SIP, Lump Sum, SWP | Taxvio",
    description:
      "Calculate your mutual fund returns for SIP, Lump Sum, SWP, and Step-Up SIP. Year-wise growth schedule, wealth gained breakdown & projected corpus.",
    url: "https://taxvio.in/tools/mutual-fund-calculator",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: {
    canonical: "https://taxvio.in/tools/mutual-fund-calculator",
  },
};

export default function MutualFundCalculatorPage() {
  return <MutualFundClient />;
}