import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import { FileText, Shield, AlertCircle, ArrowRight, CheckCircle, Scale, Clock, Mail, Phone } from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Terms & Conditions | Taxvio — GST, Income Tax & Compliance Services India",
  description:
    "Read Taxvio's Terms and Conditions governing the use of our website and GST registration, income tax filing, company registration, TDS compliance, FSSAI license, and ROC compliance services across India.",
  alternates: { canonical: "https://www.taxvio.in/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions | Taxvio",
    description: "Terms governing the use of Taxvio's GST, income tax, company registration, and compliance services across India.",
    url: "https://www.taxvio.in/terms",
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
    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://www.taxvio.in/terms" },
  ],
};

const LAST_UPDATED = "1 June 2025";

/* ─── Table of Contents ─────────────────────────────────────────────────────── */
const TOC = [
  { id: "acceptance",          label: "Acceptance of Terms" },
  { id: "services",            label: "Services Provided" },
  { id: "client-obligations",  label: "Client Obligations" },
  { id: "fees-payment",        label: "Fees & Payment" },
  { id: "professional-limits", label: "Scope & Professional Limits" },
  { id: "confidentiality",     label: "Confidentiality" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "disclaimer",          label: "Disclaimer of Warranties" },
  { id: "liability",           label: "Limitation of Liability" },
  { id: "indemnification",     label: "Indemnification" },
  { id: "termination",         label: "Termination" },
  { id: "governing-law",       label: "Governing Law & Disputes" },
  { id: "amendments",          label: "Amendments" },
  { id: "contact",             label: "Contact Us" },
];

/* ─── Section Card Component ────────────────────────────────────────────────── */
function Section({
  id, num, title, children,
}: {
  id: string; num: string; title: string; children: React.ReactNode;
}) {
  return (
    <div id={id} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm scroll-mt-24">
      <h2 className="text-xl font-extrabold text-[#00416a] mb-5 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-[#00416a]/8 flex items-center justify-center text-xs font-black text-[#00416a] shrink-0">
          {num}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-gray-600">
      <CheckCircle size={13} className="text-[#00416a] shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

function WarnBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-gray-600">
      <AlertCircle size={13} className="text-red-500 shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function TermsPage() {
  return (
    <>
      <Script id="bc-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-white text-gray-800">

        {/* ════════ HERO ════════ */}
        <section
          aria-label="Taxvio Terms and Conditions"
          className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36] text-white"
        >
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
                <li className="text-white/75 font-medium">Terms &amp; Conditions</li>
              </ol>
            </nav>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Scale size={26} className="text-sky-300" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Last updated: {LAST_UPDATED}
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                  Terms &amp; Conditions
                </h1>
                <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
                  These Terms and Conditions govern your use of the <strong className="text-white">Taxvio</strong> website and all GST, income tax, company registration, TDS, FSSAI, and ROC compliance services provided by us. Please read them carefully before using our services.
                </p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Scale,   text: "Governed by Indian Law" },
                { icon: Shield,  text: "Client-First Commitments" },
                { icon: FileText, text: "14 Comprehensive Clauses" },
              ].map(({ icon: Icon, text }) => (
                <div key={text}
                  className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-4 py-2"
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

            {/* ── Sticky Sidebar TOC ── */}
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

            {/* ── Article ── */}
            <article className="space-y-6">

              {/* 1. Acceptance */}
              <Section id="acceptance" num="1" title="Acceptance of Terms">
                <p>
                  By accessing or using the Taxvio website at <Link href="/" className="text-[#00416a] font-semibold hover:underline">www.taxvio.in</Link>, or by engaging Taxvio for any of its professional services — including GST registration, GST return filing, income tax return (ITR) filing, TDS return filing, company registration, ROC compliance, FSSAI license, or any advisory service — you agree to be legally bound by these Terms and Conditions ("Terms") in their entirety.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you ("Client", "you", or "your") and <strong>Taxvio</strong>, a professional tax and compliance consultancy headquartered at Khatauli, Muzaffarnagar, Uttar Pradesh — 251201, India ("Taxvio", "we", "our", or "us"). If you do not agree with any part of these Terms, you must not use our website or engage our services.
                </p>
                <p>
                  These Terms apply to all visitors, prospective clients, and active clients, regardless of whether services are accessed through our website, WhatsApp, phone, email, or any other communication channel. Your continued use of our website or services following any updates to these Terms constitutes acceptance of the revised version.
                </p>
              </Section>

              {/* 2. Services */}
              <Section id="services" num="2" title="Services Provided">
                <p>
                  Taxvio provides the following professional tax and compliance services to individuals and businesses across India, on a 100% online basis:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "GST Registration, GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C), GST Refund, LUT Filing, E-Invoicing setup, and GST Notice/SCN Reply",
                    "Income Tax Return (ITR) Filing for individuals, professionals, proprietors, partnership firms, LLPs, companies, and trusts; TDS Return Filing (Form 24Q, 26Q, 27Q); Income Tax Audit (Section 44AB); and Income Tax Notice Reply",
                    "Private Limited Company Registration, LLP Registration, OPC Registration, Section 8 Company Registration, and Annual ROC Compliance (AOC-4, MGT-7, Form 11, Form 8)",
                    "FSSAI Registration (Basic, State, Central), FSSAI License Renewal, and FSSAI Notice Reply",
                    "12A/80G Registration for NGOs and charitable trusts, MSME Registration, and other regulatory compliance services as listed on our website",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
                <p className="mt-3">
                  Taxvio reserves the right to modify, expand, or discontinue any service at any time without prior notice. The scope of services for each engagement is defined at the time of onboarding and confirmed through our communication channels (WhatsApp, email, or the contact form). Services not explicitly agreed upon at onboarding are not included in the engagement fee and will be quoted separately.
                </p>
              </Section>

              {/* 3. Client Obligations */}
              <Section id="client-obligations" num="3" title="Client Obligations">
                <p>
                  To enable Taxvio to deliver accurate, timely, and legally compliant services, clients are obligated to:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "Provide complete, accurate, and truthful information and documents as requested by Taxvio for the purpose of the engagement — including but not limited to PAN, Aadhaar, GSTIN, financial statements, bank statements, invoices, and prior-year returns",
                    "Respond promptly to information requests, document requirements, and clarifications raised by the Taxvio team — delays in client responses that result in missed filing deadlines are not the responsibility of Taxvio",
                    "Review and approve all draft filings, returns, applications, and documents prepared by Taxvio before submission to government portals — by approving a filing, the client confirms the accuracy of the information contained therein",
                    "Ensure that login credentials, OTPs, and digital signatures required for filing are shared with Taxvio in a timely manner when requested for the purpose of completing agreed services",
                    "Notify Taxvio immediately of any changes in business details, ownership structure, address, contact information, or compliance status that may affect the services being rendered",
                    "Not use Taxvio's services for any unlawful purpose, including but not limited to filing false GST returns, claiming fraudulent Input Tax Credit, income tax evasion, money laundering, or any other activity prohibited under Indian law",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-amber-800 text-xs leading-relaxed">
                    <strong>Important:</strong> Taxvio files returns and documents based entirely on information and documents provided by the client. If incorrect, incomplete, or fraudulent information is provided, the resulting penalties, demands, or legal consequences are solely the client's responsibility. Taxvio shall have no liability arising from client-provided inaccuracies.
                  </p>
                </div>
              </Section>

              {/* 4. Fees & Payment */}
              <Section id="fees-payment" num="4" title="Fees & Payment">
                <p>
                  All fees for Taxvio's services are communicated to the client prior to commencement of the engagement. By proceeding with payment or authorising Taxvio to commence work, the client agrees to the applicable fee. The following payment terms apply:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "Fees are payable in advance (prior to commencement of service) unless otherwise agreed in writing. Taxvio is not obligated to commence any service until the applicable fee has been received",
                    "All fees are quoted in Indian Rupees (INR) and are exclusive of Goods and Services Tax (GST). Applicable GST at the prevailing rate (currently 18%) will be charged additionally where required under law",
                    "Government fees, statutory charges, Digital Signature Certificate (DSC) costs, notarisation fees, stamp duty, and other out-of-pocket expenses are not included in Taxvio's professional fee and will be charged at actuals with prior client intimation",
                    "Taxvio does not offer refunds on professional fees once work has commenced on the engagement, except in cases where Taxvio is unable to deliver the agreed service due to reasons within its control",
                    "In the event of a dispute regarding fees, clients must raise the dispute in writing within 7 days of receiving the invoice. Disputes raised after this period may not be entertained",
                    "Taxvio reserves the right to revise its fee schedule at any time. Revised fees apply to new engagements and are not retroactively applied to ongoing engagements unless agreed by both parties",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
              </Section>

              {/* 5. Scope & Professional Limits */}
              <Section id="professional-limits" num="5" title="Scope & Professional Limits">
                <p>
                  Taxvio's services are limited to the specific compliance and registration tasks agreed upon at the time of onboarding. Clients should note the following important scope limitations:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "Taxvio provides tax compliance and regulatory filing services — we are not a legal representation firm for court proceedings, criminal tax matters, or Income Tax Appellate Tribunal (ITAT) / High Court / Supreme Court litigation, unless specifically agreed in a separate written engagement",
                    "GST return filing, ITR filing, and ROC filing services relate to the preparation and submission of documents based on client-provided data. Taxvio does not conduct independent audits of client books of accounts unless specifically engaged for a tax audit or GST audit assignment",
                    "Advisory opinions provided by Taxvio through WhatsApp, email, or phone are general in nature and based on information shared by the client at the time of query. They should not be relied upon as formal legal opinions without a dedicated advisory engagement",
                    "Taxvio's CA team exercises professional judgment in preparing compliance documents — however, as tax law is subject to frequent amendment, CBIC/CBDT notifications, and court interpretations, clients are advised to seek independent legal counsel for complex or high-stakes transactions",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
              </Section>

              {/* 6. Confidentiality */}
              <Section id="confidentiality" num="6" title="Confidentiality">
                <p>
                  Taxvio treats all client information — including personal details, financial data, business records, GST credentials, income tax login credentials, and corporate documents — as strictly confidential. We will not disclose client information to any third party except:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "To government portals (GSTN, Income Tax Department, MCA, FSSAI, TRACES) for the purpose of completing the agreed filing or registration service",
                    "To authorised professional partners (CAs, CS, legal advisors) engaged by Taxvio to assist with the client's work, who are bound by professional confidentiality obligations",
                    "Where disclosure is required by law, court order, or a competent regulatory or government authority",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
                <p className="mt-3">
                  This confidentiality obligation is mutual. Clients agree not to disclose Taxvio's internal processes, pricing structures, proprietary templates, or communication content to competitors or third parties without prior written consent from Taxvio.
                </p>
              </Section>

              {/* 7. Intellectual Property */}
              <Section id="intellectual-property" num="7" title="Intellectual Property">
                <p>
                  All content on the Taxvio website — including text, articles, blog posts, service descriptions, graphics, logos, icons, and design elements — is the exclusive intellectual property of Taxvio and is protected under the <strong>Copyright Act, 1957</strong> and applicable Indian intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, publish, modify, adapt, transmit, display, or create derivative works from any content on this website without prior written permission from Taxvio. Limited personal, non-commercial use (such as printing a single copy of a blog article for personal reference) is permitted provided Taxvio is clearly attributed as the source.
                </p>
                <p>
                  Compliance documents, tax returns, and regulatory filings prepared by Taxvio on behalf of a client are the client's property and may be retained by the client for their records. However, the proprietary templates, checklists, and processes used by Taxvio to prepare such documents remain Taxvio's intellectual property.
                </p>
              </Section>

              {/* 8. Disclaimer */}
              <Section id="disclaimer" num="8" title="Disclaimer of Warranties">
                <p>
                  Taxvio provides its services on a professional best-efforts basis. However, the following disclaimers apply:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "The Taxvio website and its content are provided 'as is' without any express or implied warranty of accuracy, completeness, fitness for a particular purpose, or non-infringement",
                    "While Taxvio's CA team exercises professional diligence in all filings, government portal downtimes, system errors on GSTN, MCA, Income Tax e-filing portal, or TRACES, and changes in law or CBIC/CBDT notifications after a filing is submitted may affect outcomes — Taxvio does not warrant specific regulatory outcomes",
                    "Tax positions taken in returns prepared by Taxvio are based on the law as it stands at the time of filing and on information provided by the client. Changes in law, subsequent court decisions, or departmental clarifications may affect the validity of such positions",
                    "Blog articles and advisory content on the Taxvio website are for general informational purposes only and do not constitute formal legal or tax advice. Taxvio is not responsible for decisions made by readers based on website content without engaging Taxvio for a specific advisory assignment",
                  ].map(item => <WarnBullet key={item}>{item}</WarnBullet>)}
                </ul>
              </Section>

              {/* 9. Limitation of Liability */}
              <Section id="liability" num="9" title="Limitation of Liability">
                <p>
                  To the fullest extent permitted under applicable Indian law, Taxvio's total liability to any client for any claim arising out of or related to these Terms or the services provided — whether in contract, tort, professional negligence, or otherwise — shall be limited to the professional fee paid by the client to Taxvio for the specific service that gave rise to the claim.
                </p>
                <p>
                  Taxvio shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "Penalties, interest, or demands raised by the GST department, Income Tax Department, MCA, or FSSAI arising from incorrect or incomplete information provided by the client",
                    "Penalties arising from filing delays caused by client's failure to provide required documents, OTPs, or approvals in a timely manner",
                    "Loss of business, loss of revenue, loss of reputation, or any other consequential loss arising from compliance issues",
                    "Technical failures on government portals beyond Taxvio's control that result in delayed or failed filings",
                    "Third-party service failures including payment gateway errors, cloud storage outages, or courier/delivery failures for physical documents",
                  ].map(item => <WarnBullet key={item}>{item}</WarnBullet>)}
                </ul>
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-800 text-xs leading-relaxed">
                    <strong>Note:</strong> Nothing in these Terms excludes Taxvio's liability for gross negligence or wilful misconduct by its CA team. However, liability in such cases remains capped at the fee paid for the affected service.
                  </p>
                </div>
              </Section>

              {/* 10. Indemnification */}
              <Section id="indemnification" num="10" title="Indemnification">
                <p>
                  You agree to indemnify, defend, and hold harmless Taxvio, its directors, Chartered Accountants, employees, agents, and professional partners from and against any claims, demands, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to:
                </p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "Your provision of false, incomplete, or misleading information or documents to Taxvio for the purpose of any filing, registration, or advisory service",
                    "Your violation of any applicable Indian law, including the CGST Act 2017, Income Tax Act 1961, Companies Act 2013, FSSAI Act, Prevention of Money Laundering Act (PMLA), or any other statute",
                    "Your use of Taxvio's services for any unlawful, fraudulent, or prohibited purpose",
                    "Any third-party claim arising from your business operations, tax positions, or regulatory conduct that involves Taxvio in any legal or regulatory proceeding",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
              </Section>

              {/* 11. Termination */}
              <Section id="termination" num="11" title="Termination">
                <p>Either party may terminate an engagement at any time by providing written notice (via email or WhatsApp) to the other party. The following terms apply on termination:</p>
                <ul className="space-y-2 pl-1 mt-3">
                  {[
                    "If the client terminates the engagement after work has commenced but before completion, Taxvio is entitled to retain the portion of the professional fee proportionate to the work completed as of the termination date",
                    "If Taxvio terminates the engagement — for example, due to client non-cooperation, non-payment, or suspected fraudulent intent — Taxvio will provide the client with all documents prepared to date and refund any unearned portion of the fee at Taxvio's sole discretion",
                    "Taxvio reserves the right to immediately suspend or terminate services without notice or refund if the client is found to have provided materially false information, attempted to use Taxvio's services for unlawful purposes, or engaged in abusive or threatening conduct towards Taxvio's team",
                    "Termination does not affect the obligations of either party that have already accrued, including payment of fees for work completed and the confidentiality obligations set out in Section 6",
                  ].map(item => <Bullet key={item}>{item}</Bullet>)}
                </ul>
              </Section>

              {/* 12. Governing Law */}
              <Section id="governing-law" num="12" title="Governing Law & Dispute Resolution">
                <p>
                  These Terms and Conditions, and any dispute or claim arising out of or in connection with them or the services provided by Taxvio, shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>, without regard to its conflict of law provisions.
                </p>
                <p>
                  In the event of any dispute between Taxvio and a client, both parties agree to first attempt resolution through good-faith negotiation and direct communication. If the dispute cannot be resolved amicably within 30 days of written notice, either party may refer the matter to arbitration under the <strong>Arbitration and Conciliation Act, 1996</strong> of India. The arbitration shall be conducted by a sole arbitrator mutually appointed by both parties, and the seat of arbitration shall be <strong>Muzaffarnagar, Uttar Pradesh, India</strong>.
                </p>
                <p>
                  Subject to the arbitration clause above, the courts of competent jurisdiction in <strong>Muzaffarnagar, Uttar Pradesh</strong> shall have exclusive jurisdiction over any legal proceedings arising out of these Terms.
                </p>
              </Section>

              {/* 13. Amendments */}
              <Section id="amendments" num="13" title="Amendments to These Terms">
                <p>
                  Taxvio reserves the right to revise these Terms and Conditions at any time without prior notice. The updated Terms will be published on this page with a revised "Last Updated" date. For material changes affecting ongoing client engagements, Taxvio will make reasonable efforts to notify affected clients via email or WhatsApp.
                </p>
                <p>
                  Your continued use of Taxvio's website or services after any changes to these Terms constitutes your unconditional acceptance of the revised Terms. We encourage you to review this page periodically. If you do not agree with any revised Terms, you should discontinue use of our services and notify us accordingly.
                </p>
              </Section>

              {/* 14. Contact */}
              <div id="contact" className="bg-gradient-to-br from-[#00416a] to-[#002b45] rounded-2xl p-7 shadow-sm scroll-mt-24">
                <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-xs font-black text-white shrink-0">
                    14
                  </span>
                  Contact Us — Legal Queries &amp; Grievances
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, or wish to raise a grievance regarding Taxvio's services, please contact us:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: FileText, label: "Business Name",     value: "Taxvio" },
                    { icon: FileText, label: "Address",           value: "Khatauli, Muzaffarnagar, Uttar Pradesh — 251201, India" },
                    { icon: Mail,     label: "Email",             value: "support@taxvio.in",  href: "mailto:support@taxvio.in" },
                    { icon: Phone,    label: "Phone",             value: "+91 89379 80366",    href: "tel:+918937980366" },
                    { icon: Clock,    label: "Support Hours",     value: "Mon – Sat · 9:00 AM – 7:00 PM IST" },
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
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-[#00416a] text-sm font-bold hover:bg-gray-50 active:scale-[0.97] transition-all">
                    Contact Us <ArrowRight size={14} />
                  </Link>
                  <Link href="/privacy-policy"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-white text-sm font-bold hover:bg-white/20 active:scale-[0.97] transition-all">
                    Read Privacy Policy
                  </Link>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-800 text-sm mb-4">Related Legal & Compliance Pages</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { label: "Privacy Policy",        href: "/privacy-policy" },
                    { label: "Contact Us",            href: "/contact" },
                    { label: "About Taxvio",          href: "/about" },
                    { label: "GST Services",          href: "/serviceslist/gst" },
                    { label: "Income Tax Services",   href: "/serviceslist/income-tax" },
                    { label: "Company Registration",  href: "/serviceslist/roc" },
                  ].map(({ label, href }) => (
                    <Link key={label} href={href}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-blue-50 hover:text-[#00416a] transition-all group">
                      <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] transition-colors shrink-0" />
                      {label}
                    </Link>
                  ))}
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