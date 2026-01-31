import { Metadata } from "next";
import GSTKhatauliClient from "./GSTKhatauliClient";

export const metadata: Metadata = {
  title: "GST Registration in Khatauli | Taxvio",
  description:
    "Looking for GST registration in Khatauli? Taxvio provides professional GST registration services in Khatauli with complete documentation and expert support.",
};

export default function Page() {
  return <GSTKhatauliClient />;
}
