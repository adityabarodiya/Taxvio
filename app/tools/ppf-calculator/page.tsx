// app/tools/ppf-calculator/page.tsx
import type { Metadata } from "next";
import PPFClient from "./client";

export const metadata: Metadata = {
  title: "PPF Calculator 2024-25 – Calculate PPF Maturity, Interest & Returns | Taxvio",
  description:
    "Use Taxvio's free PPF Calculator to calculate your Public Provident Fund maturity amount, total interest earned, year-wise balance, loan eligibility and partial withdrawal amount. Current PPF rate 7.1% p.a. Updated FY 2024-25. 100% free & accurate.",
  keywords: [
    "PPF calculator",
    "PPF calculator 2024",
    "public provident fund calculator",
    "PPF maturity calculator",
    "PPF interest calculator",
    "PPF return calculator India",
    "PPF 15 year calculator",
    "PPF loan calculator",
    "PPF partial withdrawal calculator",
    "taxvio PPF calculator",
  ],
  openGraph: {
    title: "Free PPF Calculator — Maturity, Interest & Loan | Taxvio",
    description:
      "Calculate PPF maturity value, interest earned, year-wise growth, loan eligibility and partial withdrawal. Current PPF rate 7.1% p.a. FY 2024-25.",
    url: "https://taxvio.in/tools/ppf-calculator",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: { canonical: "https://taxvio.in/tools/ppf-calculator" },
};

export default function PPFCalculatorPage() {
  return <PPFClient />;
}