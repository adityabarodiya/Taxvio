import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import { Shield, Lock, Eye, FileText, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Privacy Policy | Taxvio — GST, Income Tax & Compliance Services",
  description:
    "Read Taxvio's Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our GST registration, income tax filing, and compliance services across India.",
  alternates: { canonical: "https://www.taxvio.in/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Taxvio",
    description: "How Taxvio collects, uses, and protects your personal data across all our GST and tax compliance services.",
    url: "https://www.taxvio.in/privacy-policy",
    siteName: "Taxvio",
    type: "website",
  },
};

/* ─── Schema ───────────────────────────────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.taxvio.in/privacy-policy" },
  ],
};

const LAST_UPDATED = "1 June 2025";

/* ─── Section data ─────────────────────────────────────────────────────────── */
const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "sharing", label: "Sharing of Information" },
  { id: "data-security", label: "Data Security" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function PrivacyPolicy() {
  return (
    <>
      <Script id="bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ════════ HERO ════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "26px 26px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: "linear-gradient(to bottom right,transparent 49.9%,#f9fafb 50%)" }} />

          <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex items-center gap-2 text-xs text-white/45">
                <li><Link href="/" className="hover:text-white/80 transition">Home</Link></li>
                <span className="text-white/25">›</span>
                <li className="text-white/75 font-medium">Privacy Policy</li>
              </ol>
            </nav>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Shield size={26} className="text-sky-300" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Last updated: {LAST_UPDATED}
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                  Privacy Policy
                </h1>
                <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                  This Privacy Policy explains how <strong className="text-white">Taxvio</strong> collects, uses, stores, and protects your personal information when you use our website and GST, income tax, company registration, and compliance services across India.
                </p>
              </div>
            </div>

            {/* Quick trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Lock, text: "Encrypted Data Storage" },
                { icon: Eye, text: "No Data Selling" },
                { icon: Shield, text: "DPDP Act Compliant" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-4 py-2"
                  style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                  <Icon size={13} className="text-sky-400 shrink-0" /> {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ MAIN CONTENT ════════ */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[240px_1fr] gap-10 items-start">

            {/* ── Table of Contents (sticky sidebar) ── */}
            <aside className="hidden lg:block sticky top-24 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#00416a] px-5 py-4">
                <p className="text-white font-bold text-sm flex items-center gap-2">
                  <FileText size={15} /> Table of Contents
                </p>
              </div>
              <nav className="p-3">
                <ul className="space-y-0.5">
                  {TOC.map(({ id, label }) => (
                    <li key={id}>
                      <a href={`#${id}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-blue-50 transition-all duration-150 group">
                        <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── Policy Content ── */}
            <article className="space-y-10">

              {/* Introduction */}
              <div id="introduction" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">1</span>
                  Introduction
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Welcome to <strong>Taxvio</strong> ("we", "our", or "us"). Taxvio is a professional online tax and compliance consultancy headquartered at Khatauli, Muzaffarnagar, Uttar Pradesh, India (PIN: 251201), providing GST registration, income tax return filing, company registration, TDS compliance, FSSAI license, and ROC compliance services to individuals and businesses across India.
                  </p>
                  <p>
                    This Privacy Policy is published in accordance with the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India. By accessing our website at <Link href="/" className="text-[#00416a] font-semibold hover:underline">www.taxvio.in</Link> or using any of our services, you consent to the collection, storage, and use of your information as described in this Privacy Policy.
                  </p>
                  <p>
                    This policy applies to all users of the Taxvio website, including visitors, registered clients, and any person who contacts us through WhatsApp, phone, email, or any other communication channel for the purpose of availing our tax and compliance services.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div id="information-we-collect" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">2</span>
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <p>We collect the following categories of information when you use our website or services:</p>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">2.1 Personal Identification Information</h3>
                    <ul className="space-y-1.5 pl-1">
                      {[
                        "Full name and date of birth",
                        "PAN card number and Aadhaar number (for tax filing and KYC purposes)",
                        "Mobile number and email address",
                        "Residential and business address",
                        "Passport-size photographs (where required for regulatory filings)",
                        "Bank account details (account number, IFSC code — for GST refund and TDS credit applications)",
                      ].map(item => (
                        <li key={item} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle size={13} className="text-green-500 shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">2.2 Business & Financial Information</h3>
                    <ul className="space-y-1.5 pl-1">
                      {[
                        "GSTIN, business registration number, and CIN/LLPIN",
                        "Financial statements, profit & loss accounts, and balance sheets",
                        "GST return data — GSTR-1, GSTR-3B, GSTR-9 filings",
                        "Income tax return data and Form 16 / Form 26AS",
                        "Sales and purchase invoices, e-way bills, and ITC records",
                        "Bank statements and transaction details required for compliance filings",
                      ].map(item => (
                        <li key={item} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle size={13} className="text-green-500 shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">2.3 Technical & Usage Information</h3>
                    <p className="text-gray-600">When you visit our website, we automatically collect certain technical information including your IP address, browser type, device type, operating system, pages visited, time spent on pages, referring URLs, and other usage analytics. This data is collected using cookies and similar tracking technologies solely to improve website performance and user experience.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">2.4 Communication Records</h3>
                    <p className="text-gray-600">When you contact us via WhatsApp, phone, email, or the contact form on our website, we retain records of those communications — including messages, documents shared, and call notes — to provide continuity of service and maintain accurate compliance records for your engagement with Taxvio.</p>
                  </div>
                </div>
              </div>

              {/* How We Use */}
              <div id="how-we-use" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">3</span>
                  How We Use Your Information
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>Taxvio uses the information we collect solely for legitimate professional and operational purposes, including:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "Processing your GST registration, GST return filings, income tax return (ITR) submissions, TDS returns, company registration, FSSAI license applications, and all other compliance services you engage us for",
                      "Verifying your identity and conducting KYC checks as required under Indian tax and corporate law",
                      "Communicating with you regarding the status of your filings, compliance deadlines, government notices, and service updates",
                      "Sending deadline reminders for GST returns (GSTR-1, GSTR-3B, GSTR-9), income tax return filing, TDS return due dates, ROC annual compliance filings, and FSSAI renewal dates",
                      "Generating and storing official documents such as GSTIN certificates, incorporation certificates, tax computation sheets, and audit reports",
                      "Responding to your queries, complaints, and consultation requests through WhatsApp, phone, or email",
                      "Improving our website functionality, service quality, and user experience based on aggregated usage analytics",
                      "Complying with our own legal, regulatory, and professional obligations as a tax and compliance service provider",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={13} className="text-[#00416a] shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    We do <strong>not</strong> use your personal or financial information for any purpose unrelated to the direct provision of our services. We do not use your data for advertising profiling, selling to data brokers, or any form of unsolicited commercial communication unrelated to your Taxvio engagement.
                  </p>
                </div>
              </div>

              {/* Sharing */}
              <div id="sharing" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">4</span>
                  Sharing of Information
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    <strong>Taxvio does not sell, rent, trade, or otherwise transfer your personal or financial information to third parties for commercial purposes.</strong> We share your information only in the following limited and necessary circumstances:
                  </p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "Government portals and regulatory bodies — GSTN portal (GST Network), Income Tax Department's e-filing portal, Ministry of Corporate Affairs (MCA21) portal, FSSAI Food Licensing and Registration System (FLRS), and other statutory authorities — strictly for the purpose of filing your compliance documents and obtaining registrations on your behalf",
                      "Authorised professional partners — practising Chartered Accountants, Company Secretaries, or legal professionals engaged by Taxvio to handle specific aspects of your compliance work, who are bound by professional confidentiality obligations",
                      "Technology and cloud service providers — secure cloud storage providers and document management platforms used internally to store and process your files, subject to strict data processing agreements",
                      "Law enforcement and regulatory authorities — where we are legally required to disclose information under a court order, statutory obligation, or lawful request from a government authority under Indian law",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={13} className="text-[#00416a] shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p>In every case where we share your information, we take reasonable steps to ensure that the recipient handles your data with the same level of confidentiality and security that we apply internally.</p>
                </div>
              </div>

              {/* Data Security */}
              <div id="data-security" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">5</span>
                  Data Security
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Taxvio implements reasonable technical and organisational security measures to protect your personal and financial data against unauthorised access, disclosure, alteration, or destruction. Our security practices include:
                  </p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "HTTPS encryption for all data transmitted through our website",
                      "Secure, access-controlled document storage with restricted internal access",
                      "Password-protected and encrypted file sharing for sensitive documents",
                      "Staff training on data confidentiality and professional secrecy obligations",
                      "No storage of sensitive data (such as Aadhaar, PAN, bank details) on unencrypted local devices",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={13} className="text-green-500 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    While we take reasonable precautions, no method of electronic storage or internet transmission is 100% secure. In the event of a data breach that is likely to result in risk to your rights, we will notify you and the relevant authorities as required under applicable Indian law.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div id="cookies" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">6</span>
                  Cookies &amp; Tracking Technologies
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Our website uses cookies — small text files stored on your device — and similar tracking technologies for the following purposes:
                  </p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "Essential cookies — required for the website to function correctly, including form submissions and session management",
                      "Analytics cookies — to understand how visitors use our website (pages visited, time on site, traffic sources) using tools such as Google Analytics. This data is aggregated and anonymised",
                      "Preference cookies — to remember your choices and improve your browsing experience on return visits",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={13} className="text-[#00416a] shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionality of the website. We do not use cookies for behavioural advertising or third-party tracking beyond standard analytics.
                  </p>
                </div>
              </div>

              {/* Third Party */}
              <div id="third-party" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">7</span>
                  Third-Party Links
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our website may contain links to third-party websites including government portals (GSTN, MCA, Income Tax e-filing portal, FSSAI FLRS), WhatsApp, and other external resources. These links are provided for your convenience. Taxvio has no control over the content, privacy practices, or security of third-party websites and is not responsible for their privacy policies. We encourage you to review the privacy policy of any external site you visit through links on our website.
                </p>
              </div>

              {/* Retention */}
              <div id="retention" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">8</span>
                  Data Retention
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Taxvio retains your personal and financial data for as long as necessary to fulfil the purpose for which it was collected and to comply with applicable legal obligations. Specifically:
                  </p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "GST-related records and documents — retained for a minimum of 72 months (6 years) from the due date of the relevant annual return, as required under Section 35 of the CGST Act, 2017",
                      "Income tax records and ITR-related documents — retained for a minimum of 6 assessment years from the end of the relevant financial year, consistent with income tax limitation periods",
                      "Company registration and ROC compliance records — retained for the duration of the company's existence and for a minimum of 8 years after cessation, as required under the Companies Act, 2013",
                      "General client communication records — retained for 3 years from the last date of service interaction, after which they are securely deleted or anonymised",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={13} className="text-[#00416a] shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">9</span>
                  Your Rights
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>Under the Digital Personal Data Protection Act, 2023 and applicable Indian law, you have the following rights in relation to your personal data held by Taxvio:</p>
                  <ul className="space-y-2 pl-1">
                    {[
                      "Right to access — you may request a summary of the personal data we hold about you",
                      "Right to correction — you may request correction of any inaccurate or incomplete personal data",
                      "Right to erasure — you may request deletion of your personal data, subject to our legal retention obligations described above",
                      "Right to grievance redressal — you may raise a complaint or grievance regarding our data handling practices",
                      "Right to nominate — under the DPDP Act, you may nominate another individual to exercise your rights on your behalf in the event of your death or incapacity",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle size={13} className="text-[#00416a] shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at <a href="mailto:support@taxvio.in" className="text-[#00416a] font-semibold hover:underline">support@taxvio.in</a>. We will respond to your request within 30 days, subject to identity verification and applicable legal constraints.
                  </p>
                </div>
              </div>

              {/* Children */}
              <div id="children" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">10</span>
                  Children's Privacy
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Taxvio's services are intended exclusively for individuals who are 18 years of age or older, or for businesses operated by adults. We do not knowingly collect personal data from children under 18 years of age. If we become aware that a child under 18 has provided us with personal information without appropriate parental consent, we will promptly delete such information from our records. If you believe a minor has submitted personal data to us, please contact us immediately at <a href="mailto:info@taxvio.in" className="text-[#00416a] font-semibold hover:underline">support@taxvio.in</a>.
                </p>
              </div>

              {/* Changes */}
              <div id="changes" className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-[#00416a] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a]">11</span>
                  Changes to This Privacy Policy
                </h2>
                <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Taxvio reserves the right to update or revise this Privacy Policy at any time to reflect changes in our services, applicable law, or regulatory requirements. When we make material changes, we will update the "Last Updated" date at the top of this page. For significant changes, we may notify existing clients via email or WhatsApp.
                  </p>
                  <p>
                    Your continued use of our website or services after any changes to this Privacy Policy constitutes your acceptance of the revised policy. We encourage you to review this page periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="bg-gradient-to-br from-[#00416a] to-[#002b45] rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-xs font-black text-white">12</span>
                  Contact Us — Privacy Queries &amp; Grievances
                </h2>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  If you have any questions, concerns, or grievances regarding this Privacy Policy, or if you wish to exercise any of your data rights, please contact our Data Grievance Officer:
                </p>
                <div className="space-y-3">
                  {[
                    { icon: FileText, label: "Business Name", value: "Taxvio" },
                    { icon: FileText, label: "Registered Address", value: "Khatauli, Muzaffarnagar, Uttar Pradesh — 251201, India" },
                    { icon: Mail, label: "Privacy Email", value: "info@taxvio.in", href: "mailto:info@taxvio.in" },
                    { icon: Phone, label: "Phone", value: "+91 89379 80366", href: "tel:+918937980366" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3 text-sm">
                      <Icon size={14} className="text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/50 text-xs">{label}: </span>
                        {href
                          ? <a href={href} className="text-white font-semibold hover:text-sky-300 transition">{value}</a>
                          : <span className="text-white font-medium">{value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-[#00416a] text-sm font-bold hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Contact Us <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </article>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}