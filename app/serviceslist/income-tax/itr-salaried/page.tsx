import Footar from "@/components/Footar";
import { Metadata } from "next";
import ITRSalariedClient from "./ITRSalariedClient";

export const metadata: Metadata = {
  title:
    "ITR Filing for Salaried Individuals in India | Income Tax Return | Taxvio",
  description:
    "Expert ITR filing for salaried individuals in Khatauli & across India.",
};

export default function ITRSalariedPage() {
  return (
    <>
      <ITRSalariedClient />
      <Footar />
    </>
  );
}