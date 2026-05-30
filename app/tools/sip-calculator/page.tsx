// app/tools/sip-calculator/page.tsx
import type { Metadata } from "next";
import SIPClient from "./client";

export const metadata: Metadata = {
  title: "SIP Calculator 2024-25 – Calculate SIP Returns & Maturity Value | Taxvio",
  description:
    "Use Taxvio's free SIP Calculator to calculate monthly SIP investment returns, target corpus, inflation-adjusted value and year-wise growth schedule. Plan your wealth with Step-Up SIP and Goal-based planning. 100% free & accurate.",
  keywords: [
    "SIP calculator",
    "SIP return calculator",
    "mutual fund SIP calculator",
    "monthly SIP calculator India",
    "SIP maturity calculator",
    "step up SIP calculator",
    "SIP goal calculator",
    "XIRR SIP calculator",
    "SIP investment planner",
    "taxvio SIP calculator",
  ],
  openGraph: {
    title: "Free SIP Calculator — Returns, Target & Step-Up SIP | Taxvio",
    description:
      "Calculate SIP returns, target corpus amount, and Step-Up SIP with year-wise growth schedule, inflation-adjusted value & visual charts.",
    url: "https://taxvio.in/tools/sip-calculator",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: { canonical: "https://taxvio.in/tools/sip-calculator" },
};

export default function SIPPage() {
  return <SIPClient />;
}