"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footar from "@/components/Footar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function GSTKhatauliClient() {
  return (
    <main className="py-24 bg-gray-50">
      <motion.div
        className="max-w-5xl mx-auto px-6 space-y-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-4xl font-bold text-[#00416a]">
          GST Registration in Khatauli
        </h1>

        <p className="text-gray-700">
          If you are running a business in Khatauli and looking for reliable GST
          registration services, Taxvio provides professional and hassle-free
          GST registration support for traders, shopkeepers, manufacturers,
          service providers, startups and professionals. We help businesses in
          Khatauli complete GST registration smoothly with proper documentation
          and full compliance with GST laws.
        </p>

        <p className="text-gray-700">
          GST registration is a legal requirement for many businesses operating
          in Khatauli. Once registered under GST, a business becomes eligible
          to collect tax, issue GST invoices and claim Input Tax Credit (ITC).
          Whether you run a retail shop, manufacturing unit, transport business,
          restaurant, online store or service-based business, GST registration
          is a crucial step for lawful operations.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          Professional GST Registration Services in Khatauli
        </h2>

        <p className="text-gray-700">
          Taxvio offers end-to-end GST registration services in Khatauli. Our
          experienced GST consultants handle your application process, verify
          documents, file GST registration forms and assist with approval
          follow-ups. We ensure that your GST registration is completed without
          errors or unnecessary delays.
        </p>

        <p className="text-gray-700">
          Many businesses face rejection due to incorrect documentation or
          improper filing. With Taxvio’s expert guidance, your GST application
          is prepared accurately to reduce chances of rejection and queries
          from the GST department. We simplify the entire GST registration
          process so you can focus on your business growth.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          Our GST Services in Khatauli
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>New GST Registration</li>
          <li>GST Amendment and Profile Update</li>
          <li>GST Return Filing (GSTR-1, GSTR-3B)</li>
          <li>GST Cancellation</li>
          <li>GST Notice Reply and Compliance</li>
          <li>GST Refund and LUT Filing</li>
          <li>GST Annual Return (GSTR-9)</li>
          <li>GST Audit Assistance</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          Who Needs GST Registration in Khatauli?
        </h2>

        <p className="text-gray-700">
          Businesses in Khatauli must register under GST if their turnover
          exceeds the prescribed limit or if they fall under compulsory
          registration categories. Traders, wholesalers, manufacturers,
          transporters, online sellers and service providers must obtain GST
          registration to operate legally.
        </p>

        <p className="text-gray-700">
          If you are supplying goods outside Uttar Pradesh or operating through
          online platforms, GST registration becomes mandatory regardless of
          turnover. Restaurants, contractors, freelancers, commission agents
          and professionals in Khatauli also benefit from GST registration by
          gaining legal recognition and tax benefits.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          Documents Required for GST Registration in Khatauli
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>PAN Card of proprietor, partner or company</li>
          <li>Aadhaar Card</li>
          <li>Business Address Proof</li>
          <li>Bank Account Details</li>
          <li>Passport Size Photograph</li>
          <li>Electricity Bill or Rent Agreement</li>
          <li>Business Registration Certificate (if any)</li>
        </ul>

        <p className="text-gray-700">
          Our GST consultants in Khatauli guide you through the document
          preparation process and ensure that all required proofs are uploaded
          correctly on the GST portal. Proper documentation is essential for
          quick GST approval and future compliance.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          Benefits of GST Registration in Khatauli
        </h2>

        <p className="text-gray-700">
          GST registration provides several advantages to businesses operating
          in Khatauli. Registered businesses can issue tax invoices, claim input
          tax credit, expand their business across India and improve market
          credibility. GST registration also enables participation in tenders
          and large contracts.
        </p>

        <p className="text-gray-700">
          Customers and vendors prefer GST registered businesses as it builds
          trust and transparency. GST registration also ensures that your
          business complies with tax laws and avoids penalties for non-
          compliance.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          Why Choose Taxvio for GST Registration in Khatauli?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Local compliance expertise</li>
          <li>Affordable pricing</li>
          <li>Quick processing</li>
          <li>Dedicated GST consultants</li>
          <li>Online and offline support</li>
          <li>Error-free documentation</li>
          <li>Post-registration compliance guidance</li>
          <li>Trusted by businesses in Khatauli</li>
        </ul>

        <p className="text-gray-700">
          Our team understands the local business environment in Khatauli and
          provides personalized GST solutions according to your business type.
          Whether you are starting a new business or converting from
          unregistered status, Taxvio ensures smooth GST registration.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          GST Registration Process in Khatauli
        </h2>

        <p className="text-gray-700">
          The GST registration process involves application filing on the GST
          portal, document verification and OTP-based authentication. After
          successful submission, the GST department reviews your application
          and may ask for clarification. Once approved, GSTIN is issued and you
          can start issuing GST invoices.
        </p>

        <p className="text-gray-700">
          Taxvio handles the entire registration workflow for you. We assist in
          application filing, respond to department queries and track approval
          status until your GST number is issued.
        </p>

        <h2 className="text-2xl font-semibold text-[#00416a]">
          GST Compliance Support After Registration
        </h2>

        <p className="text-gray-700">
          GST registration is just the first step. Businesses must file monthly
          or quarterly GST returns, maintain records and respond to notices if
          issued. Taxvio provides full GST compliance support to businesses in
          Khatauli including return filing, reconciliation, notice replies and
          audit assistance.
        </p>

        <p className="text-gray-700">
          Our aim is to help Khatauli businesses remain compliant and avoid
          penalties while maximizing tax benefits. With Taxvio, you get long-
          term compliance support beyond registration.
        </p>

        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-block bg-[#00416a] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#003354]"
          >
            Apply for GST Registration in Khatauli
          </Link>
        </div>
        <Footar/>
      </motion.div>
    </main>
  );
}
