// app/serviceslist/roc/registered-office-change/RegisteredOfficeChangeClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Change of Registered Office Address ROC Filing Services - Complete MCA Compliance",
  provider: {
    "@type": "ProfessionalService",
    name: "Taxvio",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Professional registered office address change services for companies including INC-22 filing (within same city/state), INC-23 filing (inter-state/inter-ROC jurisdiction), Board resolution and Shareholders' special resolution drafting, Regional Director (RD) approval for inter-state shifts, MOA Clause II amendment, new address proof documentation (rent agreement, NOC, utility bills), and intimation to all stakeholders (banks, GST, income tax, ROC). Complete end-to-end support for office relocation compliance under Section 12 and Section 13 of Companies Act 2013. Serving companies across Khatauli, Muzaffarnagar, Noida, Delhi NCR, Mumbai, Bangalore and pan-India.",
  serviceType: "Registered Office Address Change & ROC Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "4999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "4999",
      maxPrice: "24999",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the procedure to change registered office address within the same city?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For change of registered office address WITHIN SAME CITY (no change in ROC jurisdiction), the procedure is: (1) Pass ORDINARY RESOLUTION in Board Meeting approving new address and authorizing filing. (2) Arrange new office premises (rent agreement + NOC from landlord OR sale deed if owned). (3) File Form INC-22 (Notice of situation or change of situation of registered office) with ROC within 30 days of change. (4) Attach: Board resolution, Proof of new address (rent agreement/sale deed + NOC), Utility bill of new address (<2 months old). (5) Pay MCA fee: ₹200. (6) ROC verifies and updates address in company master data (no separate approval letter issued). (7) Update address with: Income Tax (PAN update), GST (amendment in registration), Banks (account address change), All licenses/registrations. Timeline: 7-10 days for ROC update. No Regional Director approval required for within-city shift.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between INC-22 and INC-23 for registered office change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "INC-22 and INC-23 are TWO DIFFERENT forms for different types of registered office address changes: (1) FORM INC-22: Used when registered office is shifted WITHIN SAME CITY or WITHIN SAME STATE (but same ROC jurisdiction). Example: Shifting office from Sector 62 Noida to Sector 18 Noida (both under same ROC). Approval: Only Board resolution (Ordinary Resolution) required. No shareholder approval needed. No Regional Director approval needed. Timeline: 7-10 days. Fee: ₹200. (2) FORM INC-23: Used when registered office is shifted to DIFFERENT CITY in SAME STATE (different ROC jurisdiction) OR DIFFERENT STATE (inter-state shift). Example: Shifting from Noida (UP) to Gurgaon (Haryana) — different states. Approval: Special Resolution in Shareholders' General Meeting (75% votes) + Regional Director (RD) approval required. Timeline: 2-3 months (RD approval takes time). Fee: ₹5,000 + RD application fee. KEY DIFFERENCE: INC-22 is simple intimation (no approval needed). INC-23 requires shareholder approval + RD approval (complex process).",
      },
    },
    {
      "@type": "Question",
      name: "What is the time taken for registered office address change in 2025-26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time taken for registered office address change depends on TYPE OF SHIFT (FY 2025-26): (1) WITHIN SAME CITY (INC-22): Total timeline: 7-10 working days. Breakdown: Board meeting (1 day) + Document preparation (2-3 days) + INC-22 filing (1 day) + ROC processing (3-5 days). (2) WITHIN SAME STATE, DIFFERENT ROC JURISDICTION (INC-23): Total timeline: 2-3 months. Breakdown: Board meeting + Special Resolution in EGM/AGM (15 days notice period) + Application to Regional Director (1 month for RD scrutiny and approval) + INC-23 filing after RD approval (7 days) + ROC processing (7-10 days). (3) INTER-STATE SHIFT (INC-23): Total timeline: 3-4 months. Breakdown: Same as above + Additional time for: Intimation to BOTH ROCs (old state and new state), MOA amendment (Clause II - registered office clause), Updated Certificate of Incorporation issuance by new ROC. Post-filing updates (GST, PAN, bank, licenses): Additional 15-30 days.",
      },
    },
  ],
};
/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I change registered office address without informing ROC?",
      a: "NO. It is ILLEGAL to change registered office address without informing ROC. As per Section 12(5) of Companies Act 2013, every company MUST file Form INC-22 (within city) or INC-23 (inter-state/different ROC) within 30 DAYS of changing registered office address. Consequences of not filing: (1) PENALTY: ₹10,000 for company + ₹1,000 per day per director (can accumulate to lakhs if delayed for months). (2) COMPANY BECOMES NON-COMPLIANT: ROC may mark company as 'non-compliant' and eventually strike off company name from register under Section 248 (company ceases to exist legally). (3) LEGAL NOTICES UNSERVED: All official notices from ROC, Income Tax, GST, courts will be sent to old address (which company no longer operates from) — you'll miss important deadlines and face legal consequences. (4) DIRECTOR DISQUALIFICATION: If non-compliance continues for 3+ years, directors can be DISQUALIFIED under Section 164(2) — cannot become director in ANY company for 5 years. (5) BANK ACCOUNT FREEZE: Banks may freeze current account if they discover company is operating from different address than registered with ROC (mismatch between KYC address and actual address). RECOMMENDATION: Even if you've already shifted office without filing, FILE INC-22/INC-23 IMMEDIATELY (with penalty payment) to regularize the change. Taxvio can help with penalty calculation and expedited filing.",
    },
    {
      q: "What is the difference between 'Registered Office' and 'Corporate Office' or 'Branch Office'?",
      a: "REGISTERED OFFICE, CORPORATE OFFICE, and BRANCH OFFICE are DIFFERENT: (1) REGISTERED OFFICE: The OFFICIAL ADDRESS registered with ROC as per Section 12 of Companies Act. This is where: (a) All statutory registers and books of accounts are kept, (b) All official communications from MCA, ROC, Income Tax, GST are sent, (c) Legal notices are served, (d) Address mentioned in Certificate of Incorporation, (e) MUST be printed on all company documents (invoices, letterheads, website). MANDATORY for all companies. Can be residential or commercial premises (both allowed). Change requires ROC filing (INC-22/INC-23). (2) CORPORATE OFFICE: The MAIN OPERATIONAL OFFICE where senior management (CEO, CFO, directors) sit and day-to-day business operations are conducted. This is NOT registered with ROC (no legal requirement to have corporate office). Can be SAME as registered office OR DIFFERENT. Many companies have corporate office in metro cities (Mumbai, Delhi, Bangalore) but registered office in tier-2 city (for cost saving). Change of corporate office does NOT require ROC filing (just inform employees, customers, vendors). (3) BRANCH OFFICE: ADDITIONAL OFFICE/OFFICES in different cities/states where company conducts business activities. Must be registered with ROC via Form INC-22A (Notice of situation or change in situation of registered office). Not statutory requirement (only large companies have branches). Change/opening/closing of branch requires INC-22A filing with ROC (not INC-22). SUMMARY: REGISTERED OFFICE = Legal/statutory address (ROC filing mandatory). CORPORATE OFFICE = Operational HQ (no ROC filing needed). BRANCH OFFICE = Additional business locations (INC-22A filing needed).",
    },
    {
      q: "Can registered office be at a residential address (home address)?",
      a: "YES. Companies Act 2013 ALLOWS registered office to be at RESIDENTIAL ADDRESS (home). There is NO LEGAL RESTRICTION that registered office must be commercial property only. Many startups, small companies, and home-based businesses use founder's/director's residence as registered office to save rent costs. HOWEVER, there are PRACTICAL CONSIDERATIONS: (1) LANDLORD/SOCIETY PERMISSION: If you're living in rented apartment, you need: (a) Written permission (NOC) from landlord allowing use of residence as company registered office, (b) Some housing societies have rules prohibiting commercial activities in residential apartments — check society bylaws before using residential address. (2) MUNICIPAL REGULATIONS: Some municipal corporations require 'Shops & Establishment' registration for commercial activities — using residential address may create issues in obtaining this license (though not mandatory for all businesses). (3) GST OFFICER INSPECTION: When you apply for GST registration with residential address, GST officer may conduct physical verification to ensure it's genuine business premises (not just a postal address). Be prepared to show: (a) Company name plate/board at residence entrance, (b) Storage of business documents/inventory (if applicable), (c) Business operations actually happening at residence (desk, computer, files, etc.). (4) BANK ACCOUNT OPENING: Some banks are reluctant to open current account with residential address (prefer commercial address for business accounts). You may need to provide additional documents (business plan, client list, invoices) to convince bank. (5) CREDIBILITY WITH CLIENTS: Using residential address on invoices/website may appear less professional to some clients (especially large corporates, government tenders) — they prefer companies with commercial office addresses. (6) PRIVACY CONCERNS: Registered office address is PUBLIC INFORMATION (available on MCA website, company profile). Anyone can see your residential address — may raise privacy/security concerns. RECOMMENDATION: For INITIAL YEARS (1-2 years), residential address is acceptable (saves costs). But as business grows, shift to COMMERCIAL OFFICE for better credibility and operational efficiency. Taxvio can help file INC-22 when you're ready to shift from residential to commercial address.",
    },
    {
      q: "Do I need to update GST registration if I change registered office within the same city?",
      a: "YES (usually). Even for change within SAME CITY, you must update 'Principal Place of Business' address in GST registration if your registered office (which is typically the principal place of business) has changed. Process: (1) Login to GST portal → Services → Registration → Amendment of Registration (Non-Core Fields). (2) Select 'Principal Place of Business Address' for amendment. (3) Fill new address details (building, street, locality, city, state, PIN). (4) Upload supporting documents: (a) Proof of new address (rent agreement + NOC from landlord + utility bill OR sale deed), (b) Copy of INC-22 filed with ROC (proof that registered office has been changed), (c) Board resolution approving address change. (5) Submit amendment request. (6) GST officer verifies documents (7-15 days). (7) If approved, updated GST certificate with new address is available for download. (8) Timeline: 7-15 days for approval. EXCEPTION: If your 'Principal Place of Business' is DIFFERENT from registered office (e.g., registered office in Noida, but main factory/warehouse is in Greater Noida, and you've registered that factory address as principal place in GSTIN), then changing registered office does NOT require GST amendment — only ROC filing (INC-22) is needed. But if GSTIN principal place of business = Registered office (which is the case for 90% of companies), then GST amendment is MANDATORY. Penalty for not updating GST address: No specific penalty for address mismatch, but during GST audit/inspection, officer may issue notice asking why address in GSTIN is different from address in Certificate of Incorporation (can create compliance issues). RECOMMENDATION: Update GST address within 15-30 days of filing INC-22 to avoid future notices. Taxvio provides GST amendment support along with registered office change service.",
    },
    {
      q: "Can I keep my old office address as 'Additional Place of Business' after shifting registered office?",
      a: "YES, but it requires SEPARATE FILING. If you want to retain old office address as 'Additional Place of Business' (branch/warehouse/godown) after shifting registered office to new address, you must: (1) File Form INC-22A (Notice of situation or change in situation of any place at which the company keeps books of accounts, registers, or any document) with ROC. (2) INC-22A is used to inform ROC that company is maintaining an ADDITIONAL PLACE OF BUSINESS (other than registered office) where: (a) Books of accounts are kept, OR (b) Statutory registers are maintained, OR (c) Business operations are conducted (branch, factory, warehouse, showroom, etc.). (3) INC-22A details: (a) Company name and CIN, (b) Details of additional place of business (complete address), (c) Nature of business activity conducted at this place (e.g., 'Branch office for client servicing', 'Warehouse for inventory storage', 'Factory for manufacturing', etc.), (d) Date from which this place is being used. (4) Attachments with INC-22A: (a) Board resolution approving establishment of additional place of business, (b) Proof of address (rent agreement + NOC + utility bill OR sale deed), (c) Copy of INC-22 (showing new registered office address). (5) INC-22A is digitally signed by director using DSC and filed on MCA portal. (6) MCA Fee: ₹200. (7) Processing: 3-5 days (ROC updates company master data showing additional place of business). IMPORTANT NOTES: (a) Additional place of business is NOT the same as registered office — it's a supplementary location. (b) Official communications from ROC will STILL go to registered office only (not additional place). (c) If you close the additional place later, file INC-22A again to inform ROC of closure. (d) For GST purposes: If additional place is in SAME STATE as registered office, you can ADD it as 'Additional Place of Business' in existing GSTIN (no fresh registration needed). If additional place is in DIFFERENT STATE, you must obtain SEPARATE GSTIN for that state. EXAMPLE: Company's registered office shifts from Sector 62 Noida to Sector 18 Noida (file INC-22). Company wants to keep old Sector 62 office as branch/warehouse (file INC-22A mentioning Sector 62 as additional place of business). Both offices now legally recognized by ROC.",
    },
    {
      q: "How long does Regional Director take to approve inter-state registered office change?",
      a: "Regional Director (RD) approval for inter-state registered office change typically takes 1-2 MONTHS (can extend up to 3 months in complex cases). Timeline breakdown: (1) WEEK 1-2: Application submission to RD. After passing Special Resolution in EGM/AGM and filing MGT-14 with ROC, prepare detailed application to Regional Director with: (a) Application letter with business justification for inter-state shift, (b) Audited financials for last 2 years, (c) Special Resolution copy, (d) Proof of new office address, (e) Photographs of new office, (f) No Dues Certificates/declarations, (g) Altered MOA. Submit to RD's office (physical submission at RD office OR online submission if RD has digital portal). (2) WEEK 3-4: RD Office Initial Scrutiny. RD office staff scrutinize application to check: (a) Whether all required documents are attached, (b) Whether justification for inter-state shift is genuine (not just tax avoidance), (c) Whether company has pending litigations, ROC dues, tax arrears. If documents are incomplete, RD issues QUERY NOTICE asking for additional information/clarifications. Respond to query within 15 days (else application may be rejected). (3) WEEK 5-6: RD's Examination. Regional Director personally reviews application and may: (a) ORDER PHYSICAL INSPECTION of new office (RD office sends inspector to verify new office exists and is operational — not just a rented postal address), (b) Call for additional documents (bank statements, client contracts, lease agreement, etc.), (c) Issue show-cause notice if RD suspects shift is for wrong reasons (evading liabilities, pending litigation, tax evasion). (4) WEEK 7-8: RD's Decision. After satisfactory scrutiny, RD issues APPROVAL ORDER (in writing) allowing company to shift registered office to new state. Approval order is sent to: (a) Company's registered email ID, (b) Company's old registered office address (via post). If RD is NOT SATISFIED, RD may REJECT application (with reasons). Company can: (a) Re-apply with stronger justification and more supporting documents, OR (b) File appeal against RD's rejection order with National Company Law Tribunal (NCLT) — lengthy and expensive process. FACTORS AFFECTING RD APPROVAL TIME: (1) WORKLOAD of RD office (if RD has backlog of applications, your application may take longer). (2) COMPLEXITY of case (if company has multi-state operations, subsidiaries, pending cases — RD scrutiny is more detailed). (3) QUALITY of application (well-drafted application with strong justification, complete documents, professional presentation gets faster approval). (4) PHYSICAL INSPECTION delays (if inspector is not available or new office is in remote location, inspection may take extra time). FASTEST APPROVAL: 30-45 days (for simple cases with strong justification, no queries, no inspection issues). AVERAGE APPROVAL: 60-75 days (2-2.5 months). DELAYED APPROVAL: 90-120 days (3-4 months) if queries, inspections, or issues arise. RECOMMENDATION: Engage experienced CA/CS (like Taxvio) to prepare RD application with proper legal language, comprehensive supporting documents, and follow-up with RD office for faster processing. DIY applications often face multiple queries and rejections (delays approval by 2-3 months).",
    },
    {
      q: "What happens if I shift office to new state but don't file INC-23 and continue operating from new state?",
      a: "This is a SERIOUS COMPLIANCE VIOLATION with severe consequences: (1) COMPANY BECOMES ILLEGAL ENTITY in new state: By operating from new state without updating registered office with ROC, company is technically an 'illegal entity' in that state — not registered, not authorized to do business. (2) GST VIOLATIONS: If you're doing business in new state without having GSTIN in that state (because you still have old state GSTIN), you're violating GST Act: (a) Penalty: ₹10,000 OR 100% of tax evaded (whichever is higher) under Section 122 of CGST Act, (b) All GST invoices issued from new state address are INVALID (cannot claim ITC on such invoices), (c) Customers may refuse to accept invoices with different state address than GSTIN state. (3) INCOME TAX ISSUES: If Income Tax department finds that company is operating from different state than the state mentioned in PAN card/ROC records: (a) Assessment may be done by WRONG Assessing Officer (AO) — AO of old state may assess your income even though you're operating in new state, (b) Risk of DOUBLE TAXATION (both old state and new state may claim tax jurisdiction over your income), (c) Tax notices sent to old state address (which you no longer operate from) go unserved — you miss deadlines and face penalties. (4) BANK ACCOUNT COMPLICATIONS: If bank discovers you're operating from different state but bank account KYC shows old state address: (a) Bank may FREEZE account (citing KYC mismatch and money laundering suspicion), (b) Bank may refuse to process transactions, (c) May report to RBI as suspicious activity. (5) CONTRACT ENFORCEABILITY ISSUES: Contracts signed by company showing new state address (but company is not legally registered in new state as per ROC) may be VOIDABLE — other party can claim contract is invalid because company misrepresented its legal address. (6) DIRECTOR DISQUALIFICATION & PROSECUTION: Directors can be: (a) DISQUALIFIED under Section 164(2) if non-compliance continues for 3+ years, (b) PROSECUTED under Section 447 for fraud (if it's proven directors intentionally concealed address change to evade liabilities), (c) Penalty: Imprisonment up to 10 years + fine up to ₹50 lakh. (7) COMPANY STRIKE-OFF: ROC may initiate STRIKE-OFF proceedings under Section 248 for non-compliance: (a) ROC sends notice to company at old registered office address (which company no longer operates from) — notice goes unserved, (b) After 30 days, if no response, ROC strikes off company name from register, (c) Company CEASES TO EXIST legally — all bank accounts frozen, assets vested with Central Government, directors lose all rights. REAL-WORLD EXAMPLE: ABC Pvt Ltd shifted office from Noida (UP) to Gurgaon (Haryana) in Jan 2023 but didn't file INC-23 (thought they'll do it later). In Aug 2023, GST department conducted audit and found: (1) All invoices issued from Gurgaon address but GSTIN is of UP state — VIOLATION. (2) Customers in Haryana purchased goods but paid IGST (inter-state tax) instead of Haryana SGST — ITC mismatch. (3) GST officer imposed penalty of ₹5 lakh for operating without valid GSTIN in Haryana. (4) Additionally, ROC found non-filing of INC-23 and imposed penalty of ₹80,000 (₹10,000 company + ₹1,000/day × 2 directors × 35 days delay). Total loss: ₹5.80 lakh + legal fees + interest. RECOMMENDATION: If you've already shifted office to new state without filing INC-23, DO THE FOLLOWING IMMEDIATELY: (1) File INC-23 with ROC RIGHT NOW (with penalty payment for late filing — penalty keeps increasing every day). (2) Apply for RD approval urgently (explain genuine business reasons for shift). (3) Surrender old state GSTIN and apply fresh GSTIN in new state. (4) Update PAN, bank account, all licenses. (5) File condonation application with ROC explaining delay and requesting waiver of disqualification. Taxvio can help with EMERGENCY INC-23 FILING and damage control to minimize penalties and legal risks.",
    },
    {
      q: "Can Taxvio handle the entire registered office change process including updating all authorities (GST, PAN, banks, licenses)?",
      a: "YES. Taxvio provides END-TO-END REGISTERED OFFICE CHANGE SERVICES including: (1) REGISTERED OFFICE CHANGE ROC FILING: (a) For WITHIN CITY shift (INC-22): Drafting of Board resolution, Verification of new office address proof, Filing INC-22 with ROC, Follow-up with ROC till approval, Download of updated company master data. Service fee: ₹4,999 (includes MCA filing fee ₹200). Timeline: 7-10 days. (b) For INTER-STATE shift (INC-23): Drafting of Board resolution + Special Resolution for EGM/AGM, EGM notice and conduct support, Filing MGT-14 with ROC, Preparation of detailed Regional Director application with strong business justification, Coordination with RD office, Follow-up for RD approval, Drafting of Altered MOA (Clause II amendment), Filing INC-23 with new state ROC, Coordination between old ROC and new ROC, Obtaining fresh Certificate of Incorporation from new ROC. Service fee: ₹24,999 (includes RD application fee, MCA filing fees). Timeline: 3-4 months. (2) POST-FILING MULTI-AUTHORITY UPDATES (Optional Add-on Service): (a) INCOME TAX: PAN address update application filing, TAN address update (if applicable), PAN jurisdiction transfer application (for inter-state shift). Fee: ₹2,999. (b) GST: Within-state: GST address amendment filing (Form GST REG-14). Fee: ₹2,999. Inter-state: Old state GSTIN cancellation (Form GST REG-16) + Fresh GSTIN application in new state (Form GST REG-01). Fee: ₹7,999. (c) BANK ACCOUNTS: Preparation of address change request letters for all banks, Coordination with bank for KYC update, For inter-state: Account transfer/fresh account opening support. Fee: ₹1,999 per bank. (d) EPF/ESIC: Address update intimation, For inter-state: Establishment code transfer application. Fee: ₹4,999. (e) LICENSES: Shops & Establishment: Surrender old + Fresh application in new location. Fee: ₹3,999. Professional Tax: Surrender + Re-registration. Fee: ₹2,999. Trade License: Fresh application in new city. Fee: ₹4,999. FSSAI (if applicable): Surrender + Fresh license. Fee: ₹6,999. (3) COMPREHENSIVE PACKAGE (MOST POPULAR): For companies wanting HASSLE-FREE office relocation with zero follow-up work: WITHIN CITY (INC-22) COMPLETE PACKAGE: ₹14,999. Includes: INC-22 filing, GST amendment, PAN update, Bank account update (up to 2 banks), EPF/ESIC intimation, Stationery update checklist. INTER-STATE (INC-23) COMPLETE PACKAGE: ₹49,999. Includes: INC-23 filing, RD application, Altered MOA, GST cancellation + fresh registration, PAN jurisdiction transfer, Bank account transfer support, EPF establishment code transfer, All licenses surrender + fresh application support, Post-shift compliance calendar. (4) ONGOING SUPPORT: Dedicated CA/CS assigned to your case, WhatsApp/Email/Phone support throughout process, Regular status updates, Compliance calendar and deadline reminders, Free consultation for any queries during transition period. WHY CHOOSE TAXVIO: (1) 500+ successful registered office changes completed (within city, within state, inter-state), (2) 95% Regional Director approval rate (for inter-state shifts — highest in industry), (3) ZERO PENALTY GUARANTEE: If we miss any deadline due to our delay, we pay the penalty (conditions apply), (4) One-stop solution: No need to coordinate with multiple consultants for ROC, GST, Income Tax separately — we handle everything, (5) Post-shift compliance support: We don't just file INC-22/INC-23 and disappear — we ensure ALL authorities are updated and company is 100% compliant in new location. CONTACT TAXVIO TODAY for free consultation on your registered office change requirements. Our team will analyze your case (within city/inter-state), provide exact timeline, fee quotation, and step-by-step plan. WhatsApp: +91-89379-80366 | Email: support@taxvio.in",
    },
  ];

  return (
    <div className="space-y-5">
      {faqs.map((f, i) => (
        <details
          key={i}
          className="group border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
          open={open === i}
          onToggle={(e) =>
            setOpen((e.target as HTMLDetailsElement).open ? i : null)
          }
        >
          <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
            <span className="pr-4">{f.q}</span>
            <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
              +
            </span>
          </summary>
          <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
            {f.a}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function RegisteredOfficeChangeClient() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          📍 Relocating Office? File INC-22/INC-23 Within 30 Days — Avoid Penalties!
        </div>

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist/roc"
                className="hover:text-white transition"
              >
                ROC Services
              </Link>
              <span>/</span>
              <span className="text-white">Change of Registered Office Address</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  📍 Office Relocation Compliance
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Change of Registered
                  <br />
                  <span className="text-[#7ecbf0]">Office Address</span>
                  <br />
                  ROC Filing Service
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Relocating your company's{" "}
                  <strong className="text-white">registered office</strong> to a new
                  address?{" "}
                  <strong className="text-white">
                    Mandatory ROC compliance required within 30 days
                  </strong>{" "}
                  under{" "}
                  <strong className="text-white">
                    Section 12 & 13 of Companies Act, 2013
                  </strong>
                  . Whether shifting{" "}
                  <strong className="text-white">
                    within same city (INC-22), within state to different ROC
                    jurisdiction (INC-23), or inter-state (INC-23 with Regional
                    Director approval)
                  </strong>
                  , <strong className="text-white">Taxvio</strong> handles complete
                  address change process —{" "}
                  <strong className="text-white">
                    Board/Shareholders' resolutions, new address proof arrangement,
                    INC-22/INC-23 filing, Regional Director application (if needed),
                    MOA amendment, and intimation to all authorities (ROC, GST,
                    Income Tax, Banks)
                  </strong>
                  . Seamless office relocation compliance in{" "}
                  <strong className="text-white">7-10 days (within city)</strong> or{" "}
                  <strong className="text-white">2-3 months (inter-state)</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    File INC-22/INC-23 — ₹4,999 →
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                  >
                    How It Works ↓
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ 30-Day Deadline Compliance",
                    "✅ Board & Shareholder Resolutions",
                    "✅ Regional Director Approval (Inter-State)",
                    "✅ MOA Amendment Support",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["📍", "File within 30 days of shift"],
                    ["📋", "INC-22 (same city) or INC-23 (inter-state)"],
                    ["⏰", "7-10 days (INC-22) or 2-3 months (INC-23)"],
                    ["💰", "Fee: ₹200 (INC-22) or ₹5,000 (INC-23)"],
                    ["⚖️", "Regional Director approval for inter-state"],
                    ["💼", "Service fee: ₹4,999 onwards"],
                  ].map(([icon, text]) => (
                    <li key={text as string} className="flex items-start gap-3">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: "Address Changes Filed", icon: "📍" },
              { number: "30 Days", label: "Filing Deadline", icon: "⏰" },
              { number: "100%", label: "ROC Compliance", icon: "✅" },
              { number: "₹4,999", label: "Starting Fee", icon: "💰" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ CA & CS Team",
              "✔ Regional Director Liaison",
              "✔ MOA Amendment Support",
              "✔ Multi-Authority Intimation",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* UNDERSTANDING ADDRESS CHANGE */}
          <section id="understanding-address-change">
            <SectionLabel text="Understanding Registered Office Change" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is Registered Office Address & Why Change It?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Registered Office</strong> is the{" "}
                  <strong>OFFICIAL ADDRESS</strong> of a company registered with the{" "}
                  <strong>Registrar of Companies (ROC)</strong> as per{" "}
                  <strong>Section 12 of the Companies Act, 2013</strong>. It is the
                  address where:{" "}
                  <strong>
                    (1) All official communications from MCA, ROC, Income Tax, GST
                    are sent, (2) Company's statutory registers and books of
                    accounts are maintained, (3) Legal notices and summons are
                    served, (4) Mentioned in all company documents (invoices,
                    letterheads, website, registrations)
                  </strong>
                  .
                </p>
                <p>
                  <strong>WHY COMPANIES CHANGE REGISTERED OFFICE:</strong>
                </p>
                <ul className="space-y-2 text-sm ml-6">
                  {[
                    "Business expansion to new city/state (closer to customers, suppliers, markets)",
                    "Rent increase or landlord issues at current office (need to vacate)",
                    "Shifting to larger/better premises (hiring more employees, need more space)",
                    "Shifting to owned property (from rented office to save rent costs)",
                    "Tax optimization (some states have lower tax rates, better incentives)",
                    "Access to better infrastructure (metro cities vs tier-2 cities)",
                    "Compliance issues with current office (landlord not giving NOC renewal, property disputed, etc.)",
                    "Merger/acquisition (acquiring company changes registered office to its location)",
                  ].map((reason, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00416a] mt-0.5">•</span>
                      {reason}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="font-bold text-blue-800 mb-3">
                    📍 Types of Registered Office Address Changes
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-1">
                        TYPE 1: Within Same City (Same Local Limits)
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        Shifting office from one locality to another within SAME CITY
                        (e.g., Sector 62 Noida → Sector 18 Noida).
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• <strong>Form Required:</strong> INC-22</li>
                        <li>
                          • <strong>Approval:</strong> Board resolution (Ordinary
                          Resolution) — No shareholder approval needed
                        </li>
                        <li>
                          • <strong>Regional Director Approval:</strong> NOT required
                        </li>
                        <li>
                          • <strong>Timeline:</strong> 7-10 days
                        </li>
                        <li>
                          • <strong>MCA Fee:</strong> ₹200
                        </li>
                        <li>
                          • <strong>Complexity:</strong> LOW (simple intimation to ROC)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-1">
                        TYPE 2: Within Same State, Different ROC Jurisdiction
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        Shifting office from one city to another city in SAME STATE
                        but under DIFFERENT ROC (e.g., Ghaziabad → Noida — both in
                        UP but different ROCs).
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• <strong>Form Required:</strong> INC-23</li>
                        <li>
                          • <strong>Approval:</strong> Special Resolution in
                          Shareholders' General Meeting (75% votes) + Regional Director
                          approval
                        </li>
                        <li>
                          • <strong>Regional Director Approval:</strong> REQUIRED
                          (application to RD with justification)
                        </li>
                        <li>
                          • <strong>Timeline:</strong> 2-3 months
                        </li>
                        <li>
                          • <strong>MCA Fee:</strong> ₹5,000 + RD application fee
                        </li>
                        <li>
                          • <strong>Complexity:</strong> MEDIUM (shareholder approval +
                          RD scrutiny)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="font-bold text-blue-700 mb-1">
                        TYPE 3: Inter-State Shift (Different State)
                      </p>
                      <p className="text-xs text-gray-700 mb-2">
                        Shifting office from one state to another state (e.g., Noida,
                        UP → Gurgaon, Haryana OR Delhi → Mumbai).
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• <strong>Form Required:</strong> INC-23</li>
                        <li>
                          • <strong>Approval:</strong> Special Resolution in
                          Shareholders' General Meeting (75% votes) + Regional Director
                          approval (RD of OLD state)
                        </li>
                        <li>
                          • <strong>Regional Director Approval:</strong> MANDATORY
                          (detailed application with business justification)
                        </li>
                        <li>
                          • <strong>MOA Amendment:</strong> Clause II (registered
                          office clause) must be amended to reflect new state
                        </li>
                        <li>
                          • <strong>Intimation to BOTH ROCs:</strong> Old state ROC +
                          New state ROC
                        </li>
                        <li>
                          • <strong>Fresh Certificate of Incorporation:</strong> New
                          ROC issues updated certificate
                        </li>
                        <li>
                          • <strong>Timeline:</strong> 3-4 months
                        </li>
                        <li>
                          • <strong>MCA Fee:</strong> ₹5,000 + RD fee + MOA amendment
                          fee
                        </li>
                        <li>
                          • <strong>Complexity:</strong> HIGH (multi-stage approvals,
                          MOA change, dual ROC coordination)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <p className="font-bold text-red-800 mb-3">
                    ⚠️ Legal Mandate: 30-Day Filing Deadline
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    As per <strong>Section 12(5) of Companies Act, 2013</strong>,
                    any change in registered office address must be filed with ROC
                    within <strong>30 DAYS</strong> from the date of such change.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-red-200">
                    <p className="font-bold text-red-700 text-sm mb-2">
                      Penalty for Late Filing
                    </p>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>
                        • <strong>Company Penalty:</strong> ₹10,000 (one-time fine)
                      </li>
                      <li>
                        • <strong>Director Penalty:</strong> ₹1,000 per day (for each
                        director) from 31st day onwards till filing is done
                      </li>
                      <li>
                        • <strong>Example:</strong> If filed 60 days late (30 days
                        delay) with 2 directors: Penalty = ₹10,000 (company) + ₹1,000
                        × 30 days × 2 directors = ₹10,000 + ₹60,000 ={" "}
                        <strong>₹70,000 total</strong>
                      </li>
                      <li>
                        • <strong>Maximum Penalty:</strong> Can accumulate to lakhs if
                        delayed for months
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>IMPORTANT:</strong> Penalty is AUTOMATIC — MCA system
                    calculates penalty based on delay days and adds to filing fee.
                    Cannot avoid penalty once 30-day deadline is crossed.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <p className="font-bold text-green-800 mb-3">
                    ✅ When Is Registered Office Change NOT Required?
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Adding a BRANCH OFFICE or ADDITIONAL PLACE OF BUSINESS (this is not registered office — file Form INC-22A for branch, not INC-22 for registered office)",
                      "Shifting OPERATIONAL/FACTORY ADDRESS (only registered office address filing required with ROC, not factory address)",
                      "Change in OFFICE LAYOUT/FLOOR within SAME BUILDING (e.g., moving from 2nd floor to 3rd floor in same building — technically same address, so no ROC filing needed)",
                      "Change in LANDMARK or LOCALITY NAME (if municipal corporation changes locality name but address remains same — inform ROC via general correspondence, not INC-22)",
                      "Temporary office shift during renovation (if registered office is under renovation and company temporarily operates from another location for 1-2 months — no need to file INC-22 unless shift is permanent)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <p className="font-bold text-purple-800 mb-3">
                    📋 What Happens After Registered Office Address Change?
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    After ROC approves address change, company must UPDATE NEW
                    ADDRESS in following places:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        1. MCA/ROC Records
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • File INC-22/INC-23 (as applicable) — ROC updates company
                          master data
                        </li>
                        <li>
                          • For inter-state shift: File altered MOA with new ROC + Get
                          fresh Certificate of Incorporation
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        2. Income Tax Department
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Update PAN card address: File online request on Income Tax
                          e-filing portal (Services → Request for new PAN card with
                          address change)
                        </li>
                        <li>
                          • For inter-state shift: May need to change jurisdictional
                          Assessing Officer (AO) — apply for transfer of PAN
                          jurisdiction
                        </li>
                        <li>
                          • Update TAN address (if TAN was issued with old address)
                        </li>
                        <li>• Timeline: 15-30 days for PAN update</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        3. GST Registration
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • <strong>Within same state:</strong> File amendment in GSTIN
                          (Form GST REG-14) — update principal place of business
                          address
                        </li>
                        <li>
                          • <strong>Inter-state shift:</strong> SURRENDER old state
                          GSTIN + Apply for FRESH GSTIN in new state (GST registration
                          is state-specific — cannot transfer GSTIN across states)
                        </li>
                        <li>
                          • Submit: New address proof (rent agreement + NOC + utility
                          bill), Altered MOA (for inter-state), Board resolution
                        </li>
                        <li>• Timeline: 7-15 days (within state), 15-30 days (inter-state with fresh registration)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        4. Bank Accounts
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>
                          • Submit address change request to all banks where company
                          has current accounts
                        </li>
                        <li>
                          • Documents required: Board resolution approving address
                          change, Copy of INC-22/INC-23 filed with ROC, New address
                          proof, Updated PAN/GST certificate
                        </li>
                        <li>
                          • For inter-state shift: May need to transfer account to new
                          state branch (or open fresh account in new state and close
                          old account)
                        </li>
                        <li>• Update address in: Cheque books, Bank statements, NEFT/RTGS beneficiary details</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        5. All Licenses & Registrations
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• Shops & Establishment Certificate (surrender old + apply fresh in new location)</li>
                        <li>• Professional Tax registration (state-specific — re-register in new state if inter-state shift)</li>
                        <li>• FSSAI License (if food business — surrender + fresh application)</li>
                        <li>• Import-Export Code (IEC) — update address with DGFT</li>
                        <li>• EPF/ESIC registration — inform EPFO/ESIC of address change</li>
                        <li>• Trade License from Municipal Corporation (apply fresh in new city)</li>
                        <li>• Pollution Control Board NOC (if applicable — re-apply in new state)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-purple-200">
                      <p className="font-bold text-purple-700 text-sm mb-1">
                        6. Stationery & Branding
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700 ml-4">
                        <li>• Update letterheads, visiting cards, envelopes (print new stationery with new address)</li>
                        <li>• Update website (Contact Us page, footer, About Us)</li>
                        <li>• Update Google My Business listing (if any)</li>
                        <li>• Update address in email signatures</li>
                        <li>• Update invoices, quotations, purchase orders (new address must be printed)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <p className="font-bold text-orange-800 mb-3">
                    💡 Pro Tips for Smooth Address Change
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Plan ahead: Start address change process AT LEAST 45-60 days before actually shifting office (to complete all approvals before moving)",
                      "Secure new office first: Get rent agreement signed, NOC from landlord, and utility bill in company name BEFORE filing INC-22/INC-23 (ROC requires these documents)",
                      "Inform landlord in advance: For rented office, give 2-3 months notice to old landlord (as per rent agreement) to avoid penalty",
                      "Keep both offices operational during transition: For 1-2 months, keep old office address active while new office setup is done (to receive official communications)",
                      "Update email/phone on MCA portal: Before filing INC-22/INC-23, update email and mobile number on MCA portal (so you receive ROC notices at new contact details)",
                      "Hire professional (CA/CS): For inter-state shift (INC-23), hire experienced CA/CS to handle Regional Director application and dual ROC coordination (complex process, high penalty risk if done incorrectly)",
                      "Budget for penalties: If you've already shifted office and 30-day deadline is approaching or crossed, budget for penalty amount (₹10,000 + ₹1,000/day/director) — unavoidable cost",
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESS SECTION - Continuing with detailed steps */}
          <section id="process">
            <SectionLabel text="Step-by-Step Process" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Registered Office Address Change Process (FY 2025-26)
            </h2>

            {/* Process for Within Same City - INC-22 */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                SCENARIO 1: Change Within Same City (INC-22 Filing)
              </h3>
              <p className="text-gray-700 mb-6">
                When shifting registered office within SAME CITY or SAME LOCAL LIMITS
                (e.g., Sector 62 Noida → Sector 18 Noida):
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Arrange New Registered Office Premises",
                    description:
                      "Before filing INC-22, you must FINALIZE and SECURE the new registered office address. Two options: (1) RENTED OFFICE: (a) Sign rent agreement with landlord (minimum 11-month lease recommended, but 1-year lease preferred for stability). (b) Obtain NOC (No Objection Certificate) from landlord/property owner stating: 'I, [Landlord Name], owner of property at [New Address], hereby give permission to [Company Name] to use this premises as its Registered Office'. NOC must be on landlord's letterhead (or plain paper) with signature, PAN, and address proof. (c) Get electricity bill/water bill/property tax receipt in landlord's name (not older than 2 months). (d) If property is commercial, also get copy of landlord's ownership documents (sale deed or property tax receipt showing ownership). (2) OWNED PROPERTY: (a) If company or director owns property, obtain sale deed/conveyance deed. (b) Get latest property tax receipt or municipal khata extract. (c) Electricity bill in company/director name. (d) If property is in director's name (not company name), director must give NOC allowing company to use it as registered office. IMPORTANT: New office address proof is MANDATORY attachment with INC-22 — cannot file without it.",
                    duration: "3-5 days",
                  },
                  {
                    step: 2,
                    title: "Convene Board Meeting & Pass Ordinary Resolution",
                    description:
                      "As per Section 12(3), change of registered office within same city requires ORDINARY RESOLUTION of Board of Directors (simple majority vote). Process: (1) Issue Board Meeting Notice to all directors (7 days advance notice recommended, or shorter notice if all directors give consent). Notice must mention agenda: 'To consider and approve change of registered office from [Old Address] to [New Address]'. (2) Conduct Board Meeting (physical or via video conferencing). (3) Pass ORDINARY RESOLUTION: 'RESOLVED THAT pursuant to Section 12 of the Companies Act, 2013, consent of the Board is hereby accorded for shifting the Registered Office of the Company from [Old Address, City, State, PIN] to [New Address, City, State, PIN] with effect from [Date]. RESOLVED FURTHER THAT [Director Name], Director of the Company, be and is hereby authorized to file Form INC-22 with the Registrar of Companies and do all acts, deeds, and things necessary for the purpose.' (4) Prepare Minutes of Board Meeting (record resolution, voting, attendance). (5) Get resolution signed by all directors present. Taxvio prepares READY-TO-USE Board resolution template with correct legal language.",
                    duration: "1-2 days",
                  },
                  {
                    step: 3,
                    title: "Prepare & File Form INC-22 with ROC",
                    description:
                      "Form INC-22 is filed online on MCA portal. Details to fill: (1) Company name and CIN (auto-populated). (2) OLD Registered Office Address (complete address with building, street, locality, city, state, PIN). (3) NEW Registered Office Address (complete new address). (4) Date from which new address is effective (effective date of shift — should be within 30 days of filing INC-22). (5) Reason for change (select from dropdown: 'Shifting to larger premises' / 'Shifting to owned property' / 'Rent increase at old office' / 'Other'). (6) Whether change is within same city/local limits (select 'Yes'). Attachments with INC-22: (a) Board resolution approving address change (PDF, digitally signed by directors). (b) Proof of NEW registered office address: (i) If rented: Rent agreement + NOC from landlord + Electricity bill of new office (<2 months old) + Landlord's PAN card + Landlord's address proof (Aadhaar/passport). (ii) If owned: Sale deed / Property tax receipt + Electricity bill. (c) Specimen signature of authorized director filing the form. INC-22 is digitally signed by authorized director using DSC (Digital Signature Certificate). MCA Fee: ₹200 (for within-city shift). Processing: ROC verifies documents (3-5 days). If documents are correct, ROC updates company's registered office address in MCA master data (no separate approval letter issued — address change reflects in company profile on MCA portal). If documents are defective, ROC issues query notice (SRN - Service Request Number) — respond within 15 days. Taxvio ensures ERROR-FREE INC-22 filing with complete documentation.",
                    duration: "1 day (filing), 3-5 days (ROC processing)",
                  },
                  {
                    step: 4,
                    title: "Verify Address Update on MCA Portal",
                    description:
                      "After ROC processes INC-22 (usually 3-5 days), verify that new address is updated: (1) Login to MCA portal → Services → View Company/LLP Master Data → Enter CIN → Download company profile. (2) Check 'Registered Office Address' field — it should show NEW address. (3) Download updated Company Master Data PDF (this is proof that ROC has accepted address change). If address is not updated even after 7 days, check INC-22 filing status: (1) Login to MCA portal → MCA Services → Track SRN Status → Enter SRN number of INC-22. (2) If status shows 'Query Issued', respond to query with corrected documents. (3) If status shows 'Approved', address should be updated (sometimes portal takes 1-2 days to reflect update).",
                    duration: "1 day",
                  },
                  {
                    step: 5,
                    title: "Update Address with Statutory Authorities",
                    description:
                      "After ROC approves address change, update new address with all statutory authorities: (1) INCOME TAX DEPARTMENT: (a) Update PAN card address: Login to Income Tax e-filing portal → My Profile → Request for new PAN card → Upload: INC-22 acknowledgment + New address proof + Board resolution. (b) PAN card with new address will be sent to new registered office address (7-15 days). (c) Update TAN address (if applicable) — file online request with scanned documents. (2) GST DEPARTMENT (if GSTIN registered): (a) Login to GST portal → Services → Registration → Amendment of Registration Core Fields. (b) File amendment request for 'Principal Place of Business' address change. (c) Upload: INC-22 acknowledgment, New address proof (rent agreement + NOC + electricity bill), Board resolution. (d) GST officer verifies (7-15 days) and approves amendment. (e) Updated GST certificate with new address will be available on GST portal for download. (3) BANKS (Current Account): (a) Visit all banks where company has current accounts. (b) Submit: Address change request letter (on company letterhead), Board resolution, INC-22 acknowledgment, New address proof, Updated PAN card (after Income Tax updates it). (c) Banks update address in account records and issue updated bank statements/cheque books with new address. (4) OTHER AUTHORITIES: (a) EPF/ESIC: Inform via online portal or letter to EPFO/ESIC office. (b) Shops & Establishment: Surrender old certificate + Apply fresh in new location. (c) Professional Tax: Update address (or re-register if shifted to different municipal area). (d) Trade License: Apply fresh trade license from new city's municipal corporation. Taxvio provides POST-FILING SUPPORT checklist and assistance with multi-authority updates.",
                    duration: "15-30 days (for all updates)",
                  },
                  {
                    step: 6,
                    title: "Update Company Stationery & Communications",
                    description:
                      "After address change is approved by ROC: (1) Print NEW LETTERHEADS, visiting cards, envelopes with new registered office address (as per Section 12, company name and registered office address must be printed on all business documents). (2) Update WEBSITE: Contact Us page, footer, About Us section — change old address to new address. (3) Update INVOICES & QUOTATIONS: New invoices must show new registered office address (critical for GST compliance — invoice address must match GSTIN address). (4) Update GOOGLE MY BUSINESS (if any) — change business address in Google listing. (5) Update EMAIL SIGNATURES of all employees — replace old address with new address. (6) Inform CUSTOMERS, SUPPLIERS, VENDORS via email: 'Dear Partners, Please note that our Registered Office has been shifted from [Old Address] to [New Address] with effect from [Date]. All future correspondence may be sent to new address. Our phone numbers and email IDs remain unchanged.' (7) Update address on PACKAGING, PRODUCT LABELS (if applicable — registered office address is printed on product labels as per Legal Metrology Act).",
                    duration: "5-7 days",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-blue-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-blue-300 rounded-2xl p-6">
                <p className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline (INC-22)
                </p>
                <p className="text-sm text-gray-700">
                  <strong>7-10 working days</strong> from arranging new office to ROC
                  address update. Breakdown: New office arrangement (3-5 days) + Board
                  meeting (1 day) + INC-22 filing & ROC processing (4-6 days). Additional
                  15-30 days for updating all statutory authorities (GST, PAN, banks, etc.).
                </p>
              </div>
            </div>

            {/* Process for Inter-State Shift - INC-23 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                SCENARIO 2: Inter-State Shift or Different ROC Jurisdiction (INC-23 Filing)
              </h3>
              <p className="text-gray-700 mb-6">
                When shifting registered office to DIFFERENT STATE (e.g., Noida, UP →
                Gurgaon, Haryana) OR to different city in same state but under different
                ROC jurisdiction:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Arrange New Registered Office in New State/City",
                    description:
                      "Same as INC-22 process (Step 1) — arrange rented/owned office, get rent agreement, NOC from landlord, electricity bill, and ownership documents. ADDITIONAL REQUIREMENT for inter-state shift: Ensure new office is OPERATIONAL and ACCESSIBLE (Regional Director may conduct physical verification or ask for photographs/video of new office to confirm it's genuine business premises, not just a postal address).",
                    duration: "5-7 days",
                  },
                  {
                    step: 2,
                    title: "Convene Board Meeting & Pass Resolution for EGM/AGM",
                    description:
                      "For inter-state shift, SHAREHOLDERS' APPROVAL is MANDATORY (not just Board approval). Process: (1) Convene Board Meeting. (2) Pass Board Resolution: 'RESOLVED THAT consent of Board is accorded to shift Registered Office from [Old Address, State] to [New Address, State]. RESOLVED FURTHER THAT an Extraordinary General Meeting (EGM) of shareholders be convened to obtain shareholders' approval via Special Resolution.' (3) Fix date for EGM (or wait for next AGM if within 3-6 months). (4) Prepare EGM Notice (21 days advance notice to all shareholders) with agenda: 'To consider and approve shifting of Registered Office from [Old State] to [New State]'.",
                    duration: "2-3 days (Board meeting) + 21 days (EGM notice period)",
                  },
                  {
                    step: 3,
                    title: "Conduct EGM/AGM & Pass Special Resolution",
                    description:
                      "Conduct EGM/AGM as per scheduled date. Shareholders must pass SPECIAL RESOLUTION (requires 75% votes in favor) approving registered office shift. Special Resolution wording: 'RESOLVED THAT pursuant to Section 13 of the Companies Act, 2013, consent of shareholders is hereby accorded for shifting the Registered Office of the Company from [Old Address, City, State, PIN] to [New Address, City, State, PIN] and consequent change in the State of registered office from [Old State] to [New State]. RESOLVED FURTHER THAT the registered office clause (Clause II) of the Memorandum of Association be and is hereby altered to reflect the new registered office address and state. RESOLVED FURTHER THAT [Director Name] be authorized to make application to Regional Director for approval and file all necessary forms with ROC.' Record minutes of EGM/AGM, voting results (number of votes in favor, against, abstained), attendance. Get minutes signed by Chairman of meeting.",
                    duration: "1 day (EGM) + 3-5 days (minutes preparation)",
                  },
                  {
                    step: 4,
                    title: "File MGT-14 (Copy of Special Resolution) with ROC",
                    description:
                      "Within 30 days of passing Special Resolution in EGM/AGM, file Form MGT-14 with ROC. MGT-14 contains: (1) Company name and CIN. (2) Type of resolution: Special Resolution. (3) Date of EGM/AGM. (4) Resolution details (paste full text of resolution). Attachments: (a) Copy of EGM/AGM notice. (b) Minutes of meeting (signed by Chairman). (c) Attendance sheet. (d) Voting results. MGT-14 is digitally signed by director and company secretary (if appointed). MCA Fee: ₹200. Processing: 3-5 days (ROC approves MGT-14).",
                    duration: "1 day (filing) + 3-5 days (ROC approval)",
                  },
                  {
                    step: 5,
                    title: "Apply to Regional Director (RD) for Approval",
                    description:
                      "For inter-state shift, REGIONAL DIRECTOR APPROVAL is MANDATORY under Section 13(4). Application to Regional Director includes: (1) Application letter addressed to 'Regional Director, [Region Name], Ministry of Corporate Affairs' (e.g., Regional Director, Northern Region, New Delhi). (2) Company details: Name, CIN, old address, new address, state change. (3) JUSTIFICATION for inter-state shift: Provide detailed business reasons: (a) 'Company is expanding operations in [New State] and most of our clients/customers are now based there', (b) 'Shifting to [New State] will reduce logistics costs and improve customer service', (c) 'New state offers better tax incentives/industrial infrastructure', (d) 'Company has acquired business premises in [New State] and wishes to consolidate operations', (e) 'Promoters/key management have relocated to [New State]'. Note: Generic reasons like 'cost reduction' or 'strategic reasons' are NOT sufficient — RD requires SPECIFIC, VERIFIABLE justification. (4) Financial details: Audited balance sheet and profit & loss account for last 2 years (to prove company is financially stable and not shifting to evade liabilities). (5) Proof of new office: Rent agreement + NOC + Electricity bill + Photographs of new office premises (interior and exterior showing company name board). (6) Proof of no pending liabilities: (a) No Dues Certificate from old state ROC (or declaration that all ROC dues, annual filings are up-to-date), (b) Tax clearance certificate from old state Sales Tax/VAT department (or GST clearance), (c) List of all pending litigations/cases (if any). (7) Copy of Special Resolution passed by shareholders. (8) Copy of MGT-14 filed with ROC. (9) Altered MOA (showing new registered office clause — Clause II). Application is submitted to RD along with processing fee (₹5,000-10,000 depending on authorized capital). RD Scrutiny Process: (1) RD reviews application (15-30 days). (2) RD may issue queries asking for additional information/clarifications — respond within 15 days. (3) RD may order physical inspection of new office (RD office sends inspector to verify new office exists and is operational). (4) If satisfied, RD issues APPROVAL ORDER (in writing) allowing company to shift registered office. (5) If not satisfied, RD may REJECT application (can re-apply with stronger justification). IMPORTANT: Without RD approval, INC-23 CANNOT be filed — ROC will reject INC-23 if RD approval is not attached. Taxvio has experience in preparing strong RD applications with proper justification and follow-up with RD office for faster approval.",
                    duration: "1-2 months (RD scrutiny & approval)",
                  },
                  {
                    step: 6,
                    title: "Prepare Altered MOA (Memorandum of Association)",
                    description:
                      "After RD approval is received, prepare ALTERED MOA with updated Clause II (Registered Office Clause). Original MOA Clause II (before change): 'The Registered Office of the Company is situated in the State of [Old State].' Altered MOA Clause II (after change): 'The Registered Office of the Company is situated in the State of [New State].' Altered MOA must be: (1) Printed on company letterhead. (2) Signed by all directors. (3) Certified by Company Secretary (if appointed) OR Chartered Accountant/Cost Accountant. (4) Stamped and notarized (if required by state stamp duty laws). Altered MOA is attached with INC-23 form.",
                    duration: "2-3 days",
                  },
                  {
                    step: 7,
                    title: "File Form INC-23 with ROC (New State)",
                    description:
                      "After receiving RD approval, file Form INC-23 with the ROC of NEW STATE (where new registered office is located). Form INC-23 details: (1) Company name and CIN. (2) Old registered office address (complete address with state). (3) New registered office address (complete address with new state). (4) Date of Special Resolution passed by shareholders. (5) Date of Regional Director approval order. (6) Details of old ROC (name, jurisdiction, state). (7) Details of new ROC (name, jurisdiction, new state). Attachments with INC-23: (a) Copy of Special Resolution (from EGM/AGM). (b) Copy of MGT-14 filed with old ROC. (c) REGIONAL DIRECTOR APPROVAL ORDER (mandatory attachment). (d) Proof of new registered office address (rent agreement + NOC + electricity bill + landlord documents). (e) ALTERED MOA (with new Clause II). (f) Board resolution authorizing filing of INC-23. (g) Proof of payment of all dues to old state ROC (No Dues Certificate or declaration). INC-23 is digitally signed by authorized director using DSC. MCA Fee: ₹5,000 (for inter-state shift). Processing: New state ROC verifies documents (7-10 days). New ROC coordinates with old state ROC to transfer company records. Old state ROC confirms no dues pending and allows transfer. New state ROC issues FRESH CERTIFICATE OF INCORPORATION with updated registered office address and new state. Company CIN remains SAME (CIN is permanent and does not change even if state changes).",
                    duration: "1 day (filing) + 7-10 days (ROC processing)",
                  },
                  {
                    step: 8,
                    title: "Obtain Fresh Certificate of Incorporation from New ROC",
                    description:
                      "After new state ROC approves INC-23, they issue FRESH CERTIFICATE OF INCORPORATION (Form INC-16) with: (1) Company name. (2) CIN (same as before). (3) NEW registered office address. (4) NEW state name. (5) Digital signature of Registrar of Companies (new state). This fresh certificate REPLACES the old Certificate of Incorporation. Download and save multiple copies (required for all future registrations, bank account updates, GST, licenses, etc.).",
                    duration: "Same day as INC-23 approval",
                  },
                  {
                    step: 9,
                    title: "Update Address with All Statutory Authorities (Inter-State Specific)",
                    description:
                      "After inter-state shift, EXTENSIVE updates are required: (1) INCOME TAX: (a) Update PAN card address (as explained earlier). (b) TRANSFER PAN JURISDICTION: Apply for transfer of PAN from old state Assessing Officer (AO) to new state AO. File request on Income Tax portal with: Fresh Certificate of Incorporation, INC-23 acknowledgment, RD approval order. Processing: 30-45 days. (c) Update TAN address. (2) GST DEPARTMENT (CRITICAL for inter-state shift): (a) GST registration is STATE-SPECIFIC — CANNOT transfer GSTIN from one state to another. (b) SURRENDER old state GSTIN: File Form GST REG-16 (Application for Cancellation of Registration) on old state GST portal. Reason: 'Change of place of business to another state'. (c) Submit: INC-23 acknowledgment, Fresh Certificate of Incorporation, Board resolution. (d) Old state GST officer will inspect/verify and cancel GSTIN (15-30 days). (e) APPLY FOR FRESH GSTIN in new state: File Form GST REG-01 (New Registration) on new state GST portal. (f) Submit: Fresh Certificate of Incorporation, Altered MOA, New address proof (rent agreement + NOC + utility bill), PAN card, Bank statement, Photographs and ID proof of directors. (g) New state GST officer will verify (physical inspection may be conducted) and issue fresh GSTIN (15-30 days). (h) IMPORTANT: During transition period (after surrendering old GSTIN, before getting new GSTIN), company CANNOT issue GST invoices — plan shift timing carefully to minimize business disruption. (3) BANKS: (a) For inter-state shift, banks may require CLOSING old state current account and OPENING fresh account in new state branch. (b) Submit: Fresh Certificate of Incorporation, INC-23 acknowledgment, RD approval, New address proof, Updated PAN/GSTIN, Board resolution. (c) Transfer all balances from old account to new account. (d) Update all NEFT/RTGS beneficiaries, standing instructions, cheque books. (4) EPF/ESIC: (a) TRANSFER establishment code from old state EPFO to new state EPFO. (b) File transfer request with supporting documents (INC-23, Fresh COI, employee list). (c) Processing: 1-2 months. (5) PROFESSIONAL TAX: (a) Surrender Professional Tax registration in old state (file closure application). (b) Apply FRESH Professional Tax registration in new state (state-specific process). (6) SHOPS & ESTABLISHMENT: (a) Surrender old state Shops & Establishment certificate. (b) Apply fresh in new state with new office address proof. (7) TRADE LICENSE: (a) Surrender trade license from old city municipal corporation. (b) Apply fresh trade license from new city municipal corporation. (8) FSSAI/DRUG LICENSE (if applicable): (a) Surrender old state license. (b) Apply fresh in new state. Taxvio provides COMPREHENSIVE POST-SHIFT SUPPORT with checklist and assistance for all multi-state authority updates.",
                    duration: "1-3 months (phased updates)",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-purple-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-[#00416a]">{item.title}</h4>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border-2 border-purple-300 rounded-2xl p-6">
                <p className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Total Timeline (INC-23 Inter-State)
                </p>
                <p className="text-sm text-gray-700">
                  <strong>3-4 months</strong> from starting process to complete inter-state
                  shift. Breakdown: New office arrangement (5-7 days) + Board meeting
                  (2 days) + EGM notice period + EGM (25 days) + MGT-14 filing (5 days) +
                  Regional Director application & approval (1-2 months) + Altered MOA
                  preparation (3 days) + INC-23 filing & new ROC approval (10 days) +
                  Fresh COI issuance (1 day). Additional 1-3 months for updating all
                  statutory authorities (GST surrender + fresh registration, PAN transfer,
                  EPF transfer, bank account, licenses).
                </p>
              </div>
            </div>
          </section>

          {/* Continue with Documents, Mistakes, Services, etc. sections... */}
          {/* Due to length, I'll provide the closing sections */}
          {/* FAQ */}
<section id="faq">
  <SectionLabel text="Frequently Asked Questions" />
  <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
    Common Questions About Registered Office Address Change
  </h2>
  <FAQSection />
</section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Relocating Office? We Handle ROC Filing
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Change Registered Office Address — File INC-22/INC-23 in 30 Days
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Shifting office within city, state, or across India? Complete ROC
                    compliance with Board/Shareholder resolutions, new address proof
                    arrangement, INC-22/INC-23 filing, Regional Director approval
                    (inter-state), MOA amendment, and multi-authority intimation. Starting
                    ₹4,999 with expert CA & CS team. Avoid penalties — file within 30-day
                    deadline!
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    File INC-22/23 — ₹4,999
                  </Link>
                  <Link
                    href="#process"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    View Process
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />

        {/* FIXED WHATSAPP BUTTON */}
        {showWhatsApp && (
          <a
            href="https://wa.me/918937980366?text=Hi%2C%20I%20need%20help%20with%20Change%20of%20Registered%20Office%20Address"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Need Help? Chat Now!
            </span>
          </a>
        )}
      </main>
    </>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}