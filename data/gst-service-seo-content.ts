// data/gst-service-seo-content.ts
// 300+ words of SEO body content for every GST service (keyed by service slug).
//
// - Use "{location}" inside text: call getServiceSeoContent(slug, "Muzaffarnagar") to fill it in.
// - Each service has 4 sections (heading + paragraph). Render heading as <h2>/<h3>, paragraph as <p>.
// - Legal limits and due dates change over time, so keep the on-page disclaimer in the footer.

export interface SeoSection {
  heading: string;
  body: string;
}

export interface ServiceSeoContent {
  slug: string;
  sections: SeoSection[];
}

export const gstServiceSeoContent: Record<string, ServiceSeoContent> = {
  /* ───────────────────────── 1. GST Registration ───────────────────────── */
  "gst-registration": {
    slug: "gst-registration",
    sections: [
      {
        heading: "What is GST registration and why does it matter?",
        body: "GST registration is the process of enrolling your business with the Goods and Services Tax system to receive a unique 15-digit GSTIN. Once you are registered, you can charge GST on your sales, claim input tax credit on your purchases and issue valid tax invoices that your customers can use to claim their own credit. The GST portal does not charge any government fee for registration, but a small mistake in the application or documents can lead to queries, delays or rejection. For businesses in {location}, a clean application is the quickest way to get your GSTIN and start billing legally.",
      },
      {
        heading: "Who needs to register under GST?",
        body: "Registration becomes mandatory once your aggregate annual turnover crosses ₹40 lakh for suppliers of goods or ₹20 lakh for suppliers of services, with lower limits in some states and special category states. Some businesses must register regardless of turnover, including those making inter-state supplies of goods, e-commerce operators and many marketplace sellers, casual and non-resident taxable persons, and persons liable to pay tax under reverse charge. Others register voluntarily to claim input tax credit, sell to GST-registered buyers or build credibility with banks and large customers. Running a business that should be registered without a GSTIN can attract a penalty of 10% of the tax due or ₹10,000, whichever is higher.",
      },
      {
        heading: "How Taxvio handles your GST registration in {location}",
        body: "Our CA-assisted team begins with a short eligibility consultation to choose the right constitution, business activities and HSN or SAC codes. We then prepare the documents, fill Part A and Part B of the application, complete Aadhaar authentication and submit the form. If the officer raises a query or notice, we draft and file the reply on time so your file keeps moving. After the application reference number is generated we track the status until your GSTIN and registration certificate are issued. When the application is complete and no physical verification is required, approval usually comes in about seven working days.",
      },
      {
        heading: "Documents required and what to do after you get your GSTIN",
        body: "You will typically need the PAN and Aadhaar of the proprietor or partners, a photograph, proof of your business address such as an electricity bill, rent agreement with a no-objection letter or ownership papers, and bank account details. Companies and LLPs also need incorporation documents and authorisation letters. After registration, you must issue proper tax invoices, display your GSTIN on your name board, file GSTR-1 and GSTR-3B on time and maintain your records. We guide you on invoice formats, your first returns and whether schemes like composition or QRMP suit you, so your first few months stay fully compliant.",
      },
    ],
  },

  /* ───────────────────────── 2. GST Return Filing ───────────────────────── */
  "gst-return": {
    slug: "gst-return",
    sections: [
      {
        heading: "Why timely GST return filing is essential",
        body: "Every GST-registered business must report its sales, purchases and tax payments to the government through periodic returns, even when there is no business activity in a month. Filing on time keeps your registration active, protects your input tax credit and ensures your customers can claim credit on the invoices you issued. Delays lead to late fees, interest on unpaid tax and, if returns stay pending for long, cancellation of your registration. For businesses in {location}, a reliable return filing partner removes the stress of due dates and portal errors.",
      },
      {
        heading: "GSTR-1, GSTR-3B and other returns we file",
        body: "GSTR-1 records your outward supplies, while GSTR-3B is the summary return in which you declare your tax liability, adjust input tax credit and pay the balance. Regular taxpayers file both monthly, and eligible small taxpayers can choose the QRMP scheme with quarterly returns and monthly payment of tax. Our team prepares and files these returns after checking invoices, HSN or SAC codes, tax rates and place of supply, so the figures in both returns are consistent and match what the department sees in your customers' and suppliers' records.",
      },
      {
        heading: "Reconciliation, late fees and interest guidance",
        body: "Many GST notices arise from mismatches between GSTR-1, GSTR-3B and the auto-drafted GSTR-2B. We reconcile your sales and purchase invoices with the portal data every period, flag missing supplier invoices and advise on ineligible or blocked credits before you file. If a return is already late, we explain the late fee and interest you are likely to face, help you file at the earliest and suggest steps to avoid repeating the delay. Interest on delayed tax payment is charged at a prescribed annual rate, so paying the correct amount early matters.",
      },
      {
        heading: "What you need to share and how the process works in {location}",
        body: "Send us your GSTIN, sales and purchase invoices, credit and debit notes and, where relevant, bank statements or marketplace reports. We prepare the draft returns, share a summary of tax payable and credit available for your approval, and file only after you confirm. You receive acknowledgements for every return along with a simple compliance calendar, so you always know what is due next. This approach suits traders, manufacturers and service providers who want accurate returns without maintaining an in-house accountant.",
      },
    ],
  },

  /* ───────────────────────── 3. GST Refund ───────────────────────── */
  "gst-refund": {
    slug: "gst-refund",
    sections: [
      {
        heading: "When can you claim a GST refund?",
        body: "A GST refund is the money the government returns when you have paid more tax than you owe or when your business is allowed to recover tax that has accumulated as credit. Common situations include exports of goods or services with payment of IGST, exports under a Letter of Undertaking leading to accumulated input tax credit, an inverted duty structure where the tax on inputs is higher than on outputs, excess tax paid by mistake, and refunds arising from appeals or orders. Many businesses in {location} lose cash flow simply because they never file a claim or file it incorrectly.",
      },
      {
        heading: "Time limits, forms and the refund process",
        body: "Refund applications are made on the GST portal in Form RFD-01 and, in general, must be filed within two years from the relevant date. The department is expected to process a complete application within a prescribed period, and interest is payable if a refund sanctioned is delayed beyond it. Deficiency memos, mismatches between returns and missing documents are the usual reasons for delay. A refund also depends on the correct filing of GSTR-1 and GSTR-3B, so errors in earlier returns often need to be fixed before the claim moves forward.",
      },
      {
        heading: "How Taxvio supports your refund claim",
        body: "We begin with a refund eligibility analysis and work out the correct amount using the prescribed formula for your category of claim. Our team then prepares the application and supporting statements, assembles invoices, shipping bills, bank realisation proofs and returns, and files the claim on the portal. If the officer issues a deficiency memo or a notice, we draft the reply and follow up with the department. We also track the application status and the credit of the refund to your bank account, so you are updated at every step.",
      },
      {
        heading: "Documents required and who should apply",
        body: "You will normally need your filed GST returns, export invoices and shipping bills where applicable, bank realisation certificates for export of services, details of your bank account and statements showing the credit or tax involved. Exporters, businesses with excess input tax credit and taxpayers who paid tax wrongly can all benefit from a structured refund application. Sharing your data early helps us check eligibility within a day or two, avoid claims that are likely to be rejected and focus on those that can release real working capital for your business.",
      },
    ],
  },

  /* ───────────────────────── 4. GST Cancellation ───────────────────────── */
  "gst-cancellation": {
    slug: "gst-cancellation",
    sections: [
      {
        heading: "When should you cancel your GST registration?",
        body: "A GST registration should be cancelled when the business is closed, transferred, merged, converted into another constitution or when the turnover falls below the threshold and you no longer wish to remain registered. Keeping an unused GSTIN active is risky because the filing obligations continue, and missed returns attract late fees and notices. If returns are not filed for a continuous period, the department can also cancel the registration on its own, which leaves a negative record. Business owners in {location} who have stopped operations should apply for cancellation as early as possible.",
      },
      {
        heading: "The cancellation process step by step",
        body: "The application for cancellation is made on the GST portal in Form REG-16, along with the reason, the effective date and details of stock and input tax credit on hand. The officer may ask for clarification before passing an order of cancellation in Form REG-19. Before cancellation, all pending returns must be filed, and the tax liability, including reversal of input tax credit on closing stock and capital goods, has to be paid. After the order, a final return in Form GSTR-10 must be filed within the prescribed time, otherwise penalties may apply.",
      },
      {
        heading: "How Taxvio helps with GST cancellation in {location}",
        body: "Our CA-assisted team first checks whether you are eligible to cancel and whether any returns or demands are pending. We calculate the credit reversal on closing stock, prepare the application with the correct reason and effective date, and file it online. We then respond to any query raised by the officer and follow up until the cancellation order is issued. Once the order is received, we guide you on the final return so that your compliance record is fully closed and you are not chased for returns later.",
      },
      {
        heading: "Documents required for GST cancellation",
        body: "You will need your GSTIN and login details, the reason for cancellation and, where available, proof of business closure such as a closure letter, partnership dissolution deed, transfer agreement or incorporation change documents. A stock statement and details of pending returns also help. Keep in mind that cancellation does not remove past liabilities, so any tax or interest relating to earlier periods can still be demanded. A careful, well-documented application protects you from future notices and lets you start a new venture with a clean compliance history.",
      },
    ],
  },

  /* ───────────────────────── 5. GST Amendment ───────────────────────── */
  "gst-amendment": {
    slug: "gst-amendment",
    sections: [
      {
        heading: "Why you must keep your GST registration details updated",
        body: "Your GST registration records your business name, address, constitution, partners or directors, bank details and contact information. When any of these change, the law requires you to update the registration within a limited time, generally fifteen days from the change. Outdated details can lead to rejected invoices, notices that never reach you, mismatches with other departments and difficulty in claiming refunds. Business owners in {location} who move premises, add a branch or change partners should amend the registration before it becomes a compliance problem.",
      },
      {
        heading: "Core fields and non-core fields explained",
        body: "GST amendments are divided into core and non-core fields. Core fields include the legal name of the business, the principal place of business, additional places of business and details of partners, directors or karta. A change in core fields is submitted in Form REG-14 and is approved by the tax officer after verification. Non-core fields such as email address, mobile number, authorised signatory details and bank accounts can usually be updated without officer approval. Knowing which route applies saves time and avoids rejections because of wrong documents.",
      },
      {
        heading: "How Taxvio manages your GST amendment",
        body: "We start by reviewing what has changed and whether the update falls under core or non-core fields. Our team prepares the correct supporting documents, such as a rent agreement, ownership proof, partnership deed amendment or board resolution, and uploads them in the required format. After filing, we monitor the application, reply to any clarification sought by the officer and confirm the updated certificate once the amendment is approved. We also advise whether a change in address in another state requires a fresh registration instead of an amendment.",
      },
      {
        heading: "Documents required and common mistakes to avoid",
        body: "Typical documents include your GSTIN, PAN or Aadhaar of the persons concerned, updated address proof with a no-objection certificate from the owner if the premises are rented, and the deed or resolution that supports the change. The most common mistakes are mismatched names across PAN, Aadhaar and bank records, unreadable scans, and delaying the application beyond the permitted period. A timely and accurate amendment keeps your GSTIN trustworthy for customers and suppliers in {location} and prevents avoidable notices from the department.",
      },
    ],
  },

  /* ───────────────────────── 6. GSTIN Search & Verification ───────────────────────── */
  "gst-search": {
    slug: "gst-search",
    sections: [
      {
        heading: "What is GSTIN search and verification?",
        body: "GSTIN search is the process of checking whether a GST number is valid and whether the business behind it is actively registered. Every GSTIN has 15 characters: the first two digits show the state code, the next ten are the PAN of the taxpayer, then come an entity number, the letter Z and a check character. A quick verification reveals the legal and trade name, registration date, taxpayer type, status and jurisdiction. For buyers and accountants in {location}, this is the first line of defence against fake or cancelled registrations.",
      },
      {
        heading: "Why you should verify a GST number before you transact",
        body: "If you buy from a supplier whose registration is cancelled or who does not file returns, the input tax credit you claim on that purchase may be denied and recovered later with interest. Verification also protects you from invoices issued by fake or non-existent firms, helps you confirm the name printed on an invoice matches the registered name, and supports vendor due diligence before a large order. Regular checks of your key suppliers, especially before claiming credit each month, can prevent costly mismatches and notices.",
      },
      {
        heading: "What details our GST search shows you",
        body: "With a valid 15-digit GSTIN, you can see the legal name and trade name, the current registration status, the date of registration, the type of taxpayer such as regular or composition, the constitution of business and the tax jurisdiction. Format validation helps catch typing errors instantly, while the status check shows whether the registration is active, suspended or cancelled. These details let you compare what a supplier tells you with what is on record before you accept an invoice or release a payment.",
      },
      {
        heading: "Who uses GSTIN verification in {location}",
        body: "Business owners verifying new vendors, accountants and tax professionals reconciling purchase registers, buyers claiming input tax credit, and companies completing due diligence on partners all rely on GSTIN verification. It is also useful for sellers who want to confirm that a customer's GST details are correct before issuing a B2B invoice, since a wrong GSTIN on an invoice causes credit mismatches for the buyer. Our team can also review your supplier list and flag risky registrations so you act before filing your return.",
      },
    ],
  },

  /* ───────────────────────── 7. GST LUT Filing ───────────────────────── */
  "gst-lut": {
    slug: "gst-lut",
    sections: [
      {
        heading: "What is a Letter of Undertaking (LUT) under GST?",
        body: "A Letter of Undertaking is a declaration, filed online in Form RFD-11, that allows an exporter to supply goods or services outside India without paying IGST. Exports are zero-rated under GST, which means you have two options: pay IGST and claim a refund later, or export under LUT and avoid blocking money in tax. Most exporters prefer LUT because it protects cash flow. For exporters and freelancers in {location}, filing the LUT before the first export of the financial year is a basic compliance step.",
      },
      {
        heading: "Who can file an LUT and for how long is it valid?",
        body: "Any registered person who exports goods or services, or supplies to a special economic zone unit or developer, can apply for an LUT, provided they have not been prosecuted for tax evasion above the prescribed amount. An LUT is valid for one financial year, so it must be renewed every year, ideally in April, before any export invoice is raised without IGST. If an export is made without a valid LUT, IGST becomes payable on that invoice, along with interest if it is paid late, which can create an avoidable cost.",
      },
      {
        heading: "Conditions and consequences you should know",
        body: "Exports under LUT must meet the conditions of the law. For goods, the export is expected to be completed within the prescribed period from the invoice date, and for services the payment must be received in convertible foreign exchange or in Indian rupees where permitted by the Reserve Bank of India. If the conditions are not satisfied, the exporter becomes liable to pay the IGST with interest. Maintaining shipping bills, bank realisation records and FIRC or FIRA documents is therefore important for every LUT holder.",
      },
      {
        heading: "How Taxvio files your LUT in {location}",
        body: "Our CA-assisted team checks your eligibility, prepares the LUT with the correct financial year and details of the authorised signatory, and files it on the GST portal. We then download the acknowledgement for your records and explain how to show the LUT reference on your export invoices. If you already have a previous LUT, we handle the renewal in time. We also guide you on zero-rated invoice formats and the next steps for refunds, so your export business keeps running smoothly without unnecessary tax outflow.",
      },
    ],
  },

  /* ───────────────────────── 8. GSTR-9 ───────────────────────── */
  "gstr-9": {
    slug: "gstr-9",
    sections: [
      {
        heading: "What is the GST annual return (GSTR-9)?",
        body: "GSTR-9 is the annual return in which a regular taxpayer consolidates all outward supplies, inward supplies, input tax credit, tax paid and adjustments made during a financial year. It is meant to reconcile what you reported in your monthly or quarterly returns with your books of accounts. The due date is generally in December following the end of the financial year. Business owners in {location} often discover mistakes in earlier returns only when preparing this annual return, so it is also a valuable correction opportunity.",
      },
      {
        heading: "Who must file GSTR-9 and GSTR-9C?",
        body: "Regular taxpayers are required to file GSTR-9, although filing is optional for taxpayers whose aggregate turnover is below the exemption limit notified by the government. Taxpayers above the prescribed turnover must also furnish the reconciliation statement in Form GSTR-9C, which compares the annual return with the audited financial statements. Composition taxpayers file a different annual return, GSTR-4, and certain categories such as casual taxable persons and input service distributors are outside the scope of GSTR-9.",
      },
      {
        heading: "How we prepare your GSTR-9 accurately",
        body: "We begin by downloading your GSTR-1, GSTR-3B and GSTR-2B data for the year and comparing it with your books. Our team identifies differences in turnover, tax paid and input tax credit, explains each variance and tells you whether it needs to be corrected in the annual return or declared with tax. We then prepare the return, share the summary for your approval and file it. For taxpayers who need GSTR-9C, we prepare the reconciliation statement with the required explanations.",
      },
      {
        heading: "Documents required and risks of getting it wrong",
        body: "You will need your GST returns for the year, sales and purchase registers, books of accounts, financial statements and details of credit notes and debit notes. Errors in the annual return can result in notices for short payment of tax, wrong credit claims and late fees if filing is delayed. Because there is limited scope to revise the return after filing, accuracy matters. A careful review before filing protects your business in {location} from later scrutiny and keeps your annual compliance record clean.",
      },
    ],
  },

  /* ───────────────────────── 9. GST Notice Reply ───────────────────────── */
  "gst-notice-reply": {
    slug: "gst-notice-reply",
    sections: [
      {
        heading: "Why GST notices should never be ignored",
        body: "A GST notice is a formal communication from the department asking you to explain, correct or pay something. Notices can arise from mismatches between GSTR-1 and GSTR-3B, excess input tax credit, non-filing of returns, wrong classification or a routine scrutiny of returns. Ignoring a notice is risky because the officer can pass an order on the available information, raise a demand with interest and penalty, or even cancel your registration. Business owners in {location} who receive a notice should act within the time mentioned on it.",
      },
      {
        heading: "Common types of GST notices and orders",
        body: "Scrutiny notices ask for an explanation of discrepancies found in returns, and your reply is filed on the portal within the period allowed. Show cause notices are issued under the demand provisions of the Act when the department believes tax was short paid or credit was wrongly claimed, and they give you a chance to respond before an order is passed. There are also notices for non-filing of returns, registration-related queries and audit or inquiry notices. Each type has its own form, time limit and legal approach, so a generic reply is rarely enough.",
      },
      {
        heading: "How Taxvio drafts and files your reply",
        body: "We start by analysing the notice, the sections invoked, the period involved and the amount demanded. Our team then collects your returns, invoices and reconciliations, identifies the real cause of the discrepancy and drafts a clear, point-wise reply supported by documents. We file the reply on the portal, submit the annexures and track the case. If a personal hearing is fixed, we help you prepare for it. Where tax is genuinely payable, we advise on paying it with interest to limit penalty exposure.",
      },
      {
        heading: "Documents you should keep ready",
        body: "Share a copy of the notice, your GST returns for the period, purchase and sales registers, GSTR-2B statements, e-way bills, bank statements and any other proof that supports your position. The faster you send these documents, the more time we have to build a strong response before the deadline. Consistent record keeping is the best protection against future notices, and we also suggest corrective steps to your accounting and filing routine so that similar issues do not repeat in {location}.",
      },
    ],
  },

  /* ───────────────────────── 10. GST Audit ───────────────────────── */
  "gst-audit": {
    slug: "gst-audit",
    sections: [
      {
        heading: "What is a GST audit?",
        body: "A GST audit is an examination of your records, returns and other documents to verify the turnover declared, the tax paid, the refund claimed and the input tax credit availed. The department can conduct an audit of a registered person under the Act, and a taxpayer may also carry out an internal review to prepare for scrutiny. Since the earlier requirement of a mandatory audit by a professional was replaced by a self-certified reconciliation statement for higher turnover taxpayers, preparing your data with care has become even more important for businesses in {location}.",
      },
      {
        heading: "How a departmental audit works",
        body: "When the department selects a taxpayer for audit, it issues a prior intimation, usually at least fifteen working days before the audit begins, and asks you to make records available at your place of business. The audit is expected to be completed within a prescribed period. At the end, the officer may issue audit observations, and if tax short paid or credit wrongly claimed is found, a notice may follow. Being prepared with reconciled data and complete documents can sharply reduce the chance of adverse findings.",
      },
      {
        heading: "What Taxvio does in your GST audit assistance",
        body: "Our CA-assisted team first checks whether an audit or reconciliation requirement applies to you. We then reconcile your returns with books of accounts, check input tax credit eligibility, verify the rate and classification used in your invoices and identify errors that need correction. We prepare working papers and the audit reports and coordinate with the officers by answering queries and submitting documents. Where an observation needs a technical explanation, we draft the reply and represent your interests during discussions.",
      },
      {
        heading: "Documents required and who needs this service",
        body: "Keep your GST returns, sales and purchase registers, books of accounts, financial statements, e-way bills, e-invoicing data and bank statements ready. Large businesses, entities that have received an audit notice and companies that want an internal check before the annual return or reconciliation statement benefit most from this service. A structured pre-audit review in {location} often reveals small mismatches and credit risks that are far easier and cheaper to fix before the department raises them.",
      },
    ],
  },

  /* ───────────────────────── 11. GST E-Invoicing ───────────────────────── */
  "gst-e-invoicing": {
    slug: "gst-e-invoicing",
    sections: [
      {
        heading: "What is GST e-invoicing?",
        body: "E-invoicing is a system in which business-to-business invoices are reported to the Invoice Registration Portal, which returns a unique Invoice Reference Number and a QR code. The invoice you give your customer must carry these details to be valid. The data flows automatically to the GST portal and the e-way bill system, which reduces manual entry and mismatches. E-invoicing applies to taxpayers whose aggregate turnover crosses the limit notified by the government, so growing businesses in {location} should check their status regularly.",
      },
      {
        heading: "Who is required to follow e-invoicing rules?",
        body: "The turnover threshold has been reduced in stages, and taxpayers above the notified limit must generate e-invoices for supplies to registered businesses, exports and certain other transactions. Some categories such as insurers, banks, goods transport agencies and certain others are exempt. Once the threshold is crossed, the requirement continues even if turnover later falls. Larger taxpayers are also expected to report invoices within a prescribed number of days, and invoices that are not reported on time may not be treated as valid.",
      },
      {
        heading: "How Taxvio sets up and supports your e-invoicing",
        body: "We start with an applicability check and then register your GSTIN on the e-invoice portal and create the required API credentials where needed. Our team helps you choose between the free offline tools and integration with your accounting or ERP software, maps your invoice fields and tests IRN generation on sample invoices. After go-live, we monitor rejected invoices, help you cancel or amend within the permitted time and reconcile e-invoice data with your GSTR-1 so that your returns remain consistent.",
      },
      {
        heading: "Documents required and benefits for your business",
        body: "You will need your GSTIN, access to the e-invoice portal and access to your accounting software so that we can configure the integration. Benefits include auto-populated returns, fewer errors, faster generation of e-way bills and better acceptance of your invoices for your buyers' input tax credit. For high-volume businesses in {location}, a properly configured system saves hours of manual work every month and protects you from the risk of invalid invoices and penalties.",
      },
    ],
  },

  /* ───────────────────────── 12. GST for E-Commerce ───────────────────────── */
  "gst-for-e-commerce": {
    slug: "gst-for-e-commerce",
    sections: [
      {
        heading: "GST rules every online seller must know",
        body: "Selling on Amazon, Flipkart, Meesho, Shopify, ONDC or your own website brings specific GST obligations. Most sellers who supply goods through an e-commerce operator must register for GST, with limited exemptions for certain small intra-state suppliers, and sellers who ship to other states need a registration in the relevant states where they keep stock. You must charge the correct rate, issue valid invoices and file GSTR-1 and GSTR-3B on time. Online sellers in {location} often struggle because marketplace reports and tax returns do not match without proper reconciliation.",
      },
      {
        heading: "TCS under Section 52, GSTR-8 and Section 9(5)",
        body: "E-commerce operators collect tax at source from the payments made to sellers at the notified rate, which is currently 0.5% of the net taxable value, and report it in GSTR-8. As a seller, the amount collected appears in your electronic cash ledger and must be matched with your own sales data before you use it to pay tax. For restaurant services supplied through platforms such as Zomato and Swiggy, the operator is liable to pay the tax under Section 9(5), and your returns must reflect this correctly to avoid double payment.",
      },
      {
        heading: "How Taxvio supports e-commerce sellers",
        body: "Our CA-assisted team handles GST registration, including the marketplace-specific GSTIN setup, and files monthly GSTR-1 and GSTR-3B. We reconcile settlement reports, sales and return data from each marketplace with your returns, match TCS credits shown in your ledger and identify differences caused by cancellations, returns and commission invoices. We also advise on input tax credit on commission, shipping and advertising invoices. If you receive a notice or a mismatch alert, we prepare the reply and the reconciliation that supports it.",
      },
      {
        heading: "Documents required and who should use this service in {location}",
        body: "Provide your PAN, Aadhaar, business address proof and bank details for registration, and your settlement reports, sales and return reports and commission invoices for ongoing compliance. This service suits Amazon, Flipkart and Meesho sellers, Shopify and direct-to-consumer brands, restaurants listed on food delivery platforms, ONDC and multi-platform sellers, and operators that collect tax at source. Plans start from ₹1,499, and a quick review of your reports helps us suggest the right level of support for your sales volume.",
      },
    ],
  },

  /* ───────────────────────── 13. GST for Freelancers ───────────────────────── */
  "gst-for-freelancers": {
    slug: "gst-for-freelancers",
    sections: [
      {
        heading: "Do freelancers and professionals need GST registration?",
        body: "Freelancers who provide services such as software development, design, writing, consulting or marketing must register for GST when their aggregate turnover crosses the threshold for services, which is generally ₹20 lakh, with a lower limit in some special category states. Some freelancers register earlier because clients insist on a GST invoice or because they want to claim input tax credit on laptops, software and tools. Freelancers in {location} serving clients in other states or countries should understand how place of supply affects their invoices before they start billing.",
      },
      {
        heading: "Billing foreign clients: exports, LUT and zero-rated invoices",
        body: "Export of services is treated as a zero-rated supply when the conditions of the law are met, including that the recipient is outside India, the place of supply is outside India and payment is received in convertible foreign exchange. To invoice without charging IGST, a freelancer files a Letter of Undertaking in Form RFD-11 every financial year. Your invoice should carry the correct SAC code, the LUT reference and a clear description of the service. Keeping FIRC or FIRA records from your bank is essential proof of payment.",
      },
      {
        heading: "Returns, input tax credit and reverse charge",
        body: "Registered freelancers file GSTR-1 and GSTR-3B, monthly or quarterly under the QRMP scheme if eligible. You can claim input tax credit on business purchases such as a laptop, software subscriptions, co-working space and professional services, subject to the credit conditions in the law. Payments to foreign providers for services such as subscriptions and tools may attract reverse charge, so each such payment needs a review. We also help you choose the correct SAC code for each type of service you offer.",
      },
      {
        heading: "How Taxvio helps freelancers",
        body: "Our team handles registration, LUT filing, invoice format setup, return filing and notice support in one place, so you can focus on your clients. We explain the rules in plain language, set up a simple monthly routine for sharing invoices and bank statements, and review your invoices for common errors in SAC codes and place of supply. Plans start from ₹1,499, and we can suggest the right plan after a short call about your clients, turnover and payment method.",
      },
    ],
  },

  /* ───────────────────────── 14. GST Composition Scheme ───────────────────────── */
  "gst-composition-scheme": {
    slug: "gst-composition-scheme",
    sections: [
      {
        heading: "What is the GST Composition Scheme?",
        body: "The Composition Scheme is a simplified option for small taxpayers who prefer paying tax at a low fixed rate on turnover instead of calculating tax on every invoice. Eligible taxpayers file a quarterly statement for payment of tax and one annual return, which greatly reduces the compliance burden. Manufacturers and traders pay a lower rate, restaurants pay a higher fixed rate and eligible service providers pay a separate rate. Small businesses in {location} that sell mainly to consumers often find this scheme convenient.",
      },
      {
        heading: "Eligibility, limits and restrictions",
        body: "A taxpayer dealing in goods can opt for the scheme if the aggregate turnover in the previous financial year is within the limit, which is generally ₹1.5 crore and lower in some special category states, while eligible service providers have a lower limit. Composition dealers cannot collect tax from customers, cannot claim input tax credit and generally cannot make inter-state supplies of goods or supply through e-commerce operators except in limited cases. Their invoices must be bills of supply that carry the required declaration, so the scheme is not suitable for every business.",
      },
      {
        heading: "Filings under the scheme: CMP-02, CMP-08 and GSTR-4",
        body: "An existing taxpayer opts in by filing Form CMP-02 before the beginning of the financial year, while a new business can choose composition at the time of registration. Tax is paid every quarter through Form CMP-08, usually by the eighteenth day after the quarter, and an annual return in Form GSTR-4 is filed after the year ends. Missing these deadlines attracts late fees and interest and may lead to a loss of the scheme, so a calendar is helpful for every composition dealer.",
      },
      {
        heading: "How Taxvio guides your decision in {location}",
        body: "Composition is not always cheaper. We compare your expected tax cost under the scheme with the regular scheme after considering your purchases, input tax credit, customer type and growth plans. If the scheme fits, we prepare and file the opt-in, set up the quarterly payment routine, correct your invoice format and file the annual return. If your business grows beyond the limit, we also help you move to the regular scheme smoothly, so you remain compliant at every stage.",
      },
    ],
  },

  /* ───────────────────────── 15. GST ITC Reconciliation ───────────────────────── */
  "gst-itc-reconciliation": {
    slug: "gst-itc-reconciliation",
    sections: [
      {
        heading: "What is input tax credit reconciliation?",
        body: "Input tax credit allows you to reduce the GST you pay by the GST already paid on business purchases. Because credit depends on what your suppliers report, the law ties your claim to the auto-drafted statement GSTR-2B. ITC reconciliation is the process of matching your purchase register and books with GSTR-2B, finding differences and resolving them before you file your return. Businesses in {location} that skip this step often claim credit they are not entitled to or miss credit they could legally take.",
      },
      {
        heading: "Why mismatches happen and why they are costly",
        body: "Mismatches arise when a supplier has not filed a return or has filed it late, entered a wrong GSTIN or invoice number, reported an invoice in a different period, or issued an invoice that is not eligible for credit. Credit claimed without support in GSTR-2B can be reversed with interest, and repeated mismatches can trigger notices. Time limits also apply to claiming credit, which is generally linked to a date after the end of the financial year, so delayed claims may be lost forever.",
      },
      {
        heading: "How our monthly ITC reconciliation works",
        body: "Each month we compare your purchase invoices with the GSTR-2B statement, identify missing and extra invoices and prepare a vendor-wise mismatch report. Our CA-assisted team reviews eligibility, flagging blocked credits such as certain personal or restricted purchases and suggesting reversals where needed. We also track reclaim opportunities when suppliers correct their filings. You receive a clear summary showing credit available, credit at risk and the follow-up needed with each supplier, so you can act before the due date.",
      },
      {
        heading: "Documents required and who benefits",
        body: "Share your GSTIN, purchase invoices, GSTR-2B statements and books of accounts or purchase register exports. Manufacturers and traders with large purchase volumes, companies that have faced credit mismatch notices and growing businesses that want to maximise legitimate credit benefit the most. A consistent reconciliation routine also improves supplier discipline because you can reach out early to vendors who do not file on time, which protects your credit and your relationships in {location}.",
      },
    ],
  },

  /* ───────────────────────── 16. GST Revocation ───────────────────────── */
  "gst-revocation": {
    slug: "gst-revocation",
    sections: [
      {
        heading: "What is revocation of GST cancellation?",
        body: "If the tax officer cancels your GST registration on their own, usually because returns were not filed for a continuous period, the law gives you a chance to apply for revocation. A successful revocation restores your GSTIN so that you can issue tax invoices, claim input tax credit and continue your business. Without an active registration, your customers cannot claim credit on your invoices and you may lose business. Taxpayers in {location} whose GST was cancelled should check the order date immediately because strict time limits apply.",
      },
      {
        heading: "Time limit and conditions for revocation",
        body: "An application for revocation in Form REG-21 is generally to be filed within thirty days from the date of the cancellation order, and the period can be extended on request by the competent authority for limited additional periods. The officer examines your application and may ask for clarification in Form REG-23 before either revoking the cancellation or rejecting the application. In practice, you will usually be expected to file the pending returns and pay the tax, interest and late fees due, so preparing these in advance strengthens your case.",
      },
      {
        heading: "How Taxvio helps you restore your registration",
        body: "We first review the cancellation order to understand the reason and the date, and we check which returns are pending. Our team prepares and files the missing returns, calculates the amounts due and drafts the revocation application with a clear explanation of the reason for the default. We respond to any request for clarification and follow up with the department until the order is passed. If the time limit has expired, we advise on the available options, including a request for extension or other remedies.",
      },
      {
        heading: "Documents required and what to expect",
        body: "You will need your GSTIN, a copy of the cancellation order, details of pending returns, proof of payment of dues and an explanation of why the returns were not filed. After revocation, filing discipline becomes even more important, because a second default can lead to the same outcome. We set up a compliance calendar and monthly document routine for your business in {location} so you do not face another cancellation, and we help you check the position of your input tax credit after reinstatement.",
      },
    ],
  },

  /* ───────────────────────── 17. GSTR-10 ───────────────────────── */
  "gstr-10-final-return": {
    slug: "gstr-10-final-return",
    sections: [
      {
        heading: "What is the GSTR-10 final return?",
        body: "GSTR-10 is the final return that a taxpayer must file after the GST registration is cancelled or surrendered. It reports the stock of inputs, semi-finished goods, finished goods and capital goods held on the date of cancellation, and the tax payable on them. Filing this return closes your GST compliance cycle. Many business owners in {location} assume that cancellation ends all responsibilities, but the final return is mandatory, and skipping it can lead to notices, late fees and difficulties if you apply for a new registration later.",
      },
      {
        heading: "Who must file it and the time limit",
        body: "Every person whose registration has been cancelled, whether on their own application or by an officer, is required to file GSTR-10, with exceptions for certain categories such as input service distributors and non-resident taxable persons. The return is due within three months from the date of the cancellation or the date of the cancellation order, whichever is later. A late fee applies per day of delay up to a limit, and the department can also assess your liability on its own if the return is not filed.",
      },
      {
        heading: "Stock valuation and ITC reversal explained",
        body: "On cancellation, you must reverse the input tax credit on stock held and on capital goods, with the credit on capital goods calculated after reducing a specified percentage for every quarter of use. The amount payable is the higher of the credit reversed or the tax on the sale value of those goods. A careful stock valuation using purchase invoices and the correct reversal calculation can help you avoid overpaying and reduces the risk of a demand during any later review.",
      },
      {
        heading: "How Taxvio files your GSTR-10",
        body: "Our CA-assisted team reviews your cancellation order, prepares the stock statement and works out the credit reversal and tax payable. We help you pay the amount through the electronic cash or credit ledger, fill the return on the GST portal and obtain the acknowledgement. Documents you need are your GSTIN, the cancellation order, the closing stock details and books of accounts. For closed proprietorships and firms in {location}, completing this return properly gives peace of mind and a clean record.",
      },
    ],
  },

  /* ───────────────────────── 18. GST TDS ───────────────────────── */
  "gst-tds-compliance": {
    slug: "gst-tds-compliance",
    sections: [
      {
        heading: "What is GST TDS under Section 51?",
        body: "GST TDS is a mechanism under which specified entities deduct a small percentage of the payment made to a supplier of taxable goods or services and deposit it with the government. The deduction is generally 2% of the value of supply, split equally between central and state tax or collected as integrated tax for inter-state supplies, when the total value of a contract exceeds the prescribed limit of ₹2.5 lakh. The deductor deposits the tax, and the supplier receives it as credit in the electronic cash ledger. Departments and public bodies in {location} must follow this carefully.",
      },
      {
        heading: "Who is required to deduct GST TDS?",
        body: "The provision applies to departments or establishments of the central or state government, local authorities, governmental agencies, and certain other notified persons such as public sector undertakings and specified societies. These entities must obtain a registration as a deductor, which is separate from a normal GST registration. The deduction applies on payments to suppliers for taxable supplies, and tax is not deducted on supplies on which tax is payable under reverse charge, nor where the location of the supplier and the place of supply are in a State different from the one in which the deductor is registered.",
      },
      {
        heading: "Returns and certificates: GSTR-7 and GSTR-7A",
        body: "A deductor files the monthly return GSTR-7 by the tenth day of the following month, even when no deduction is made in some cases, and reports the details of each deductee along with the amount deducted. The supplier can view and accept the credit in the cash ledger, and the deductor issues the TDS certificate in Form GSTR-7A. Late filing attracts a per-day late fee, and failure to deduct or deposit the tax can result in interest and penalty, so a clean process for every payment is required.",
      },
      {
        heading: "How Taxvio supports GST TDS compliance",
        body: "We check whether your entity is covered by the provision, assist with deductor registration and set up a simple process for identifying payments that attract deduction. Our team reconciles contract and payment records with deductee GSTIN details, computes the correct TDS, files GSTR-7 each month and ensures that certificates are generated for suppliers. You can share your payment records and contract details monthly, and we manage the portal work and keep a record that is ready for audit.",
      },
    ],
  },

  /* ───────────────────────── 19. E-Way Bill ───────────────────────── */
  "gst-eway-bill": {
    slug: "gst-eway-bill",
    sections: [
      {
        heading: "What is an e-way bill?",
        body: "An e-way bill is an electronic document generated on the e-way bill portal for the movement of goods whose value exceeds the prescribed limit, which is ₹50,000 for inter-state movement, with state-specific limits for intra-state movement. It has two parts: Part A with details of the goods and invoice, and Part B with the vehicle number. Without a valid e-way bill, goods in transit can be detained and a penalty can be levied. Traders, manufacturers and transporters in {location} need a smooth e-way bill process to avoid delays on the road.",
      },
      {
        heading: "Who must generate it and when",
        body: "The supplier, the recipient or the transporter can generate the e-way bill, usually before the movement begins, and the transporter can also generate it on the basis of the invoice. Registered persons must generate it for movement of goods in a consignment above the prescribed value, whether the movement is for sale, return, job work, stock transfer or other reasons. Certain goods and situations are exempt, and some states have additional rules. A valid e-way bill must be carried by the person in charge of the conveyance, in electronic form.",
      },
      {
        heading: "Validity, extension and common problems",
        body: "The validity depends on the distance, generally one day for every 200 kilometres for regular cargo, and the transporter can extend it within the prescribed window before or after expiry when the goods cannot reach on time due to genuine reasons. Common problems include wrong HSN code, mismatch of the GSTIN and place of dispatch, expired validity, wrong vehicle number and frequent changes of vehicle. We help you correct Part B details, update vehicle changes, cancel e-way bills within the permitted time and handle consolidated e-way bills for multiple consignments.",
      },
      {
        heading: "How Taxvio helps with e-way bill compliance",
        body: "Our team sets up your e-way bill access, trains your staff on correct entries, generates bills for your dispatches when needed and reviews your records for transporters. We reconcile e-way bills with invoices and returns, since mismatches between them can attract queries. Documents required are your GSTIN, invoice or delivery challan, transporter ID and the vehicle number. If your consignment is detained, we help you prepare the reply and documentation for the officers so you can clear the goods quickly in {location}.",
      },
    ],
  },

  /* ───────────────────────── 20. GST Appeal ───────────────────────── */
  "gst-appeal-filing": {
    slug: "gst-appeal-filing",
    sections: [
      {
        heading: "What is a GST appeal?",
        body: "A GST appeal is a legal remedy available when you disagree with an order passed by a tax officer, such as an order creating a tax demand, rejecting a refund, cancelling your registration or imposing a penalty. The first appeal is filed before the Appellate Authority in Form APL-01, and further appeals can go to the Appellate Tribunal and higher courts depending on the case. For business owners in {location} facing a heavy demand, a well-drafted appeal can reduce or remove a liability that might be incorrect.",
      },
      {
        heading: "Time limit and pre-deposit requirements",
        body: "An appeal must be filed within three months from the date on which the order is communicated to you, and the Appellate Authority can condone a further delay of one month if you give a sufficient reason. To file the appeal, you must pay the full amount of tax, interest, fine, fee and penalty that you admit to be payable, along with a percentage of the disputed tax amount as pre-deposit, subject to the upper limits fixed by the law. Missing the time limit can close the door to the appeal, so act quickly after receiving the order.",
      },
      {
        heading: "How Taxvio prepares and files your appeal",
        body: "Our team begins by studying the impugned order, the show cause notice and your earlier replies to identify legal and factual grounds for appeal. We prepare a detailed statement of facts and grounds, compute the pre-deposit and prepare the appeal with annexures. After filing, we track the case, respond to notices for hearing and help you prepare submissions with supporting case law and evidence. Where authorised, representatives can also appear on your behalf at the hearing.",
      },
      {
        heading: "Documents required and what happens next",
        body: "Keep a copy of the order, the original notice and reply, your GST returns for the relevant period, invoices and records that support your case and proof of payment of the pre-deposit. After the hearing, the Appellate Authority passes an order that can confirm, modify or set aside the original decision. If the outcome is not satisfactory, we explain the next step and the time limit for further appeal. Early professional help is the best way for taxpayers in {location} to protect their rights.",
      },
    ],
  },

  /* ───────────────────────── 21. GST Advance Ruling ───────────────────────── */
  "gst-advance-ruling": {
    slug: "gst-advance-ruling",
    sections: [
      {
        heading: "What is a GST advance ruling?",
        body: "An advance ruling is a written decision from the Authority for Advance Ruling on a question relating to a supply that you are planning to undertake or have undertaken. It gives certainty before you commit to a contract, launch a product or restructure a transaction. The ruling is binding on the applicant and on the tax officers who deal with that applicant for that specific transaction. For businesses in {location} operating in areas where the GST rate or treatment is unclear, an advance ruling can prevent expensive disputes later.",
      },
      {
        heading: "What questions can be asked?",
        body: "You can seek a ruling on matters such as the classification of goods or services, the applicable rate of tax, the time and value of supply, eligibility of input tax credit, whether an activity amounts to a supply, the liability to register and whether a particular activity qualifies as a taxable supply or an exempt one. A ruling cannot be sought on matters that are already pending or decided in proceedings against the applicant under the Act, so timing and the question you ask are important.",
      },
      {
        heading: "Application procedure, fees and timeline",
        body: "The application is made in Form ARA-01 on the GST portal along with the prescribed fee, which is paid in equal parts under the central and state laws, and it must state the question clearly with supporting facts and legal interpretation. After a hearing, the Authority is expected to pronounce its ruling within a prescribed time. If you or the department disagree, an appeal can be made to the Appellate Authority for Advance Ruling in Form ARA-02 within the time limit, so a well-framed application is your best start.",
      },
      {
        heading: "How Taxvio supports your application",
        body: "Our CA-assisted team analyses your transaction, studies the relevant notifications and past rulings and helps you frame the question precisely. We prepare the application, the statement of facts and the legal grounds, collect contracts and agreements and file on the portal. We also prepare you for the hearing and help with the follow-up. Businesses planning new product lines, facing classification doubts or structuring new transactions in {location} benefit from the clarity this process provides.",
      },
    ],
  },

  /* ───────────────────────── 22. GST Job Work ───────────────────────── */
  "gst-job-work": {
    slug: "gst-job-work",
    sections: [
      {
        heading: "What is job work under GST?",
        body: "Job work means any treatment or process undertaken by one person on goods that belong to another registered person, and the goods are usually sent by the principal to the job worker for processing and returned afterwards. GST provides a special framework so that tax is not charged when goods move to the job worker and back within the prescribed time, while the job worker charges GST on the job work service. Manufacturers, textile units and engineering firms in {location} that outsource processing rely on this system every day.",
      },
      {
        heading: "Time limits, challans and ITC rules",
        body: "The principal can claim input tax credit on inputs sent to the job worker, provided the inputs are received back or supplied from the job worker's place within one year, and on capital goods within three years, with exceptions for moulds, dies and tools. If the goods are not returned within these limits, the movement is treated as a supply and tax becomes payable with interest. Every movement must be supported by a delivery challan, and the principal must track the goods sent, received and balance lying with each job worker.",
      },
      {
        heading: "ITC-04 filing and reconciliation",
        body: "The principal files a statement in Form ITC-04 giving details of the inputs and capital goods sent to and received from job workers. The frequency of filing depends on the turnover of the taxpayer, and the form should be filed within the due date to avoid late fee. A challan-wise reconciliation of goods sent, goods received and scrap or waste returned helps detect delay in return of goods before the limit expires. Incorrect ITC-04 can also invite questions about stock and credit during assessments.",
      },
      {
        heading: "How Taxvio supports your job work compliance",
        body: "We set up a challan tracking sheet for your business, review the movement of goods to each job worker and prepare ITC-04 on the basis of verified records. Our team monitors the time limits and alerts you about goods approaching the deadline, so that you can bring them back or plan the tax payment. Documents needed are your GSTIN, job work challans, goods movement records and job worker details. This service is especially useful for businesses with several job worker relationships in {location}.",
      },
    ],
  },

  /* ───────────────────────── 23. Composition to Regular ───────────────────────── */
  "gst-composition-to-regular": {
    slug: "gst-composition-to-regular",
    sections: [
      {
        heading: "Why composition dealers move to the regular scheme",
        body: "Many businesses begin under the Composition Scheme for its simple compliance and then outgrow it. A composition dealer must leave the scheme when turnover crosses the limit, when it starts making inter-state supplies or supplies through e-commerce operators in a way the scheme does not allow, or when it wants to pass on input tax credit to its customers. Some dealers move voluntarily because a regular GST registration allows them to claim credit on purchases and sell to larger business buyers. Growing businesses in {location} should plan this change carefully.",
      },
      {
        heading: "The process: CMP-04 and ITC-01",
        body: "A taxpayer who wants to withdraw from the scheme files an application in Form CMP-04 on the GST portal, and the officer processes the withdrawal. Once the person becomes a regular taxpayer, the law allows a claim of input tax credit on the stock of inputs, semi-finished goods, finished goods and capital goods held on the date of the switch, by filing Form ITC-01 within the prescribed time. Eligible credit depends on valid tax invoices and the goods being on hand, so the correct stock statement and purchase records are essential.",
      },
      {
        heading: "Return transition and invoicing changes",
        body: "After the switch, you must start charging GST on your sales, issue tax invoices instead of bills of supply and file GSTR-1 and GSTR-3B instead of the quarterly composition statement. Tax payable on the sales made after the date of change is calculated under the regular rules. Errors in the transition, such as continuing to issue bills of supply or missing the ITC-01 filing, can lead to tax demands and loss of credit, so the timing of the first regular returns must be handled with care.",
      },
      {
        heading: "How Taxvio helps with the transition",
        body: "We review whether you are required to move or can do so voluntarily and plan the date that works best for your business. Our CA-assisted team prepares the CMP-04 filing, the stock statement and the ITC-01 claim, corrects your invoice formats and sets up the new monthly or quarterly filing routine. We also explain the impact on pricing and cash flow, since you now pay tax at the regular rates and receive credit on purchases. Share your GSTIN, scheme details, stock statement and purchase invoices to begin in {location}.",
      },
    ],
  },

  /* ───────────────────────── 24. HSN/SAC ───────────────────────── */
  "gst-hsn-sac-classification": {
    slug: "gst-hsn-sac-classification",
    sections: [
      {
        heading: "What are HSN and SAC codes?",
        body: "The Harmonised System of Nomenclature, or HSN, is an international system for classifying goods, while the Services Accounting Code, or SAC, is used for services in India. Every supply under GST must be classified under the correct code because the code decides the tax rate, the eligibility for exemptions and the details to be shown on invoices and in returns. A wrong classification can lead to a short payment of tax, a notice and a demand with interest and penalty. Businesses in {location} with new or complex products should treat classification as a business decision.",
      },
      {
        heading: "Why correct classification matters",
        body: "Rates differ widely between similar-looking products, and a small difference in composition, use or description can change the chapter and rate. Wrong classification also causes mismatches between your invoice, e-way bill and e-invoice data and the details reported by your customers. For services, the SAC determines whether a supply qualifies for a concessional rate or exemption. Disputes with the department often arise from classification, and the outcome depends on the product description, the trade parlance and the explanatory notes of the tariff, which makes expert review valuable.",
      },
      {
        heading: "Digits required on invoices and returns",
        body: "The number of digits to be shown depends on the aggregate turnover of the taxpayer, with a smaller number of digits required for smaller taxpayers and a higher number for larger ones, and the details of HSN summary have to be reported in the GST returns. Using a code with the wrong number of digits, or one that does not match the product, can result in portal errors or notices. We check the rules that apply to your turnover and format your invoices so that they carry the correct code and description.",
      },
      {
        heading: "How Taxvio supports your classification",
        body: "Share your product or service description, existing invoices and catalogue or specification sheets, and our CA-assisted team will study the technical details, compare them with the tariff and notifications, and recommend the applicable code and GST rate with reasons. We also review your past invoices for errors and advise on corrections. If you are facing a classification dispute, we prepare a written opinion and support your reply to the department. This is helpful for manufacturers, traders and new product launches in {location}.",
      },
    ],
  },

  /* ───────────────────────── 25. Restaurants ───────────────────────── */
  "gst-for-restaurants": {
    slug: "gst-for-restaurants",
    sections: [
      {
        heading: "GST for restaurants, cafes and cloud kitchens",
        body: "Restaurants, cafes, cloud kitchens and hotels face a special GST structure that differs from ordinary trading businesses. The rate depends on the type of service and the conditions attached to it, and many restaurant services are taxed at a concessional rate with restrictions on input tax credit. Because the same outlet may sell dine-in, takeaway, delivery through platforms and banquet services, each stream can be treated differently. Restaurant owners in {location} should settle their registration and rate structure before the billing system is finalised.",
      },
      {
        heading: "Composition scheme or regular scheme?",
        body: "Small restaurants can consider the Composition Scheme, which allows them to pay a fixed percentage of turnover with quarterly payment and simpler filing, but they cannot collect tax separately from customers or claim input tax credit. The regular scheme allows more flexibility, including supplies through platforms and inter-state activities, although it requires monthly returns. We compare both options using your sales, expenses and growth plans, and recommend the better path, remembering that eligibility limits, restrictions and conditions apply to the scheme.",
      },
      {
        heading: "Section 9(5) and aggregator settlements",
        body: "For restaurant services supplied through electronic commerce operators such as Zomato and Swiggy, the operator is liable to pay the tax under Section 9(5), so the restaurant does not pay tax again on those supplies but must report them properly in its returns. Settlement reports contain commissions, delivery charges, discounts, refunds and tax details, and they need to be reconciled with the data in GSTR-1 and GSTR-3B. We prepare this reconciliation each month so that your returns are consistent with the platform reports.",
      },
      {
        heading: "How Taxvio helps and what you need to share",
        body: "Our team handles GST registration, scheme advice, monthly return filing, platform settlement reconciliation and a review of input tax credit on eligible purchases. For hotels and banquets, we review room tariffs and other services for the correct rate. Please share your PAN, Aadhaar, FSSAI licence, business address proof and platform settlement reports. Restaurants, cafes, cloud kitchens, hotels and banquet halls in {location} can get a clear compliance routine and fewer notices.",
      },
    ],
  },

  /* ───────────────────────── 26. Manufacturers ───────────────────────── */
  "gst-for-manufacturers": {
    slug: "gst-for-manufacturers",
    sections: [
      {
        heading: "GST challenges for manufacturing units",
        body: "Manufacturers deal with a long chain of purchases of raw materials, packing, capital goods and services, which means that input tax credit management is central to their cash flow. They also face job work arrangements, stock transfers between plants and branches, inter-state sales, e-way bills and e-invoicing requirements once their turnover grows. A weak process can leave credit unclaimed or lead to notices on credit eligibility. Manufacturing units in {location} benefit from a compliance system that matches their production and dispatch cycle.",
      },
      {
        heading: "Registration across multiple states",
        body: "GST registration is state-wise, so a manufacturer with factories, warehouses or branches in different states needs separate registrations for each state from where taxable supplies are made, all under one PAN. Stock transfers between these registrations are treated as supplies and need tax invoices and proper valuation. Taking additional registrations at the right time and choosing the right principal and additional places of business inside one state prevents tax and compliance issues and supports a smooth movement of goods.",
      },
      {
        heading: "ITC optimisation, job work and e-way bill compliance",
        body: "We review the credit available on raw materials, packing material and capital goods, and flag restricted or blocked credits that should not be claimed. For production sent out for processing, we track challans and file ITC-04 to follow the job work rules. We also support e-way bill generation and reconciliation for dispatches and stock transfers and ensure e-invoicing is followed where applicable. Regular reconciliation of GSTR-2B and your purchase register keeps credit claims safe from mismatch notices.",
      },
      {
        heading: "Returns, documents and support from Taxvio",
        body: "Our CA-assisted team files GSTR-1 and GSTR-3B each period, prepares the annual return and handles departmental queries. You will need to share your PAN, factory address proof, previous GST returns, purchase and sales registers and job work challans. We provide a monthly summary of tax liability and credit position so that you can plan your cash requirement ahead. Manufacturing units, textile and engineering firms and businesses with multi-state factories in {location} can use this service for a simple and complete GST routine.",
      },
    ],
  },

  /* ───────────────────────── 27. Real Estate ───────────────────────── */
  "gst-for-real-estate": {
    slug: "gst-for-real-estate",
    sections: [
      {
        heading: "GST on real estate and construction",
        body: "GST for real estate is complicated because the rate depends on the type of project, the stage of construction, the nature of the buyer and the conditions that apply to the project. Residential projects have concessional rates for affordable and other housing, usually without input tax credit, while commercial projects follow a different structure. Contractors who provide works contract services have their own rates and credit rules. Builders and contractors in {location} should plan their GST position before launching a project or signing a contract.",
      },
      {
        heading: "Rates, credit restrictions and RERA-linked filings",
        body: "The applicable rate depends on whether the project qualifies as affordable housing or other residential housing, and on whether the project is ongoing or new. Input tax credit is restricted for many residential projects, and conditions such as procurement from registered suppliers and tax payment on shortfalls apply. Since a RERA-registered project has its own accounts and timelines, GST filing must be consistent with the information in the RERA records. We map your project against these rules and prepare the working for correct tax payment.",
      },
      {
        heading: "Joint development agreements and works contracts",
        body: "In a joint development agreement, a landowner transfers development rights to a developer in exchange for a share in constructed area or revenue, and the GST treatment, time of supply and valuation need careful structuring. Reverse charge can apply on certain supplies from unregistered persons and on specified services. For works contracts, the correct classification, the place of supply and the credit rules matter, since they affect whether the tax cost can be absorbed into your pricing.",
      },
      {
        heading: "How Taxvio supports builders and contractors",
        body: "We handle registration, project-wise tax computation, GSTR-1 and GSTR-3B filing, credit review and reverse charge compliance. Please share your PAN, RERA registration, project cost sheet, sale agreements and purchase invoices. We prepare a monthly report that shows tax payable and credit position project by project, which supports your pricing and cash planning. Real estate developers, building contractors and works contract service providers in {location} can use this service to avoid disputes and notices.",
      },
    ],
  },

  /* ───────────────────────── 28. Importers & Exporters ───────────────────────── */
  "gst-for-importers-exporters": {
    slug: "gst-for-importers-exporters",
    sections: [
      {
        heading: "GST for import-export businesses",
        body: "Import and export businesses must manage GST alongside customs, foreign exchange and shipping documentation, and mistakes in any of these areas can block refunds or credits. Imports of goods attract IGST at the time of import along with customs duty, while exports are zero-rated, meaning no tax is charged but the exporter can claim a refund or export under a Letter of Undertaking. Traders, merchant exporters and manufacturers in {location} who deal with foreign buyers or suppliers need a clear process for every shipment.",
      },
      {
        heading: "IGST on imports and Bill of Entry reconciliation",
        body: "IGST paid on imported goods is shown in the Bill of Entry, and the importer can claim it as input tax credit, subject to the conditions in the law. The credit appears on the GST portal on the basis of customs data, so the Bill of Entry details must be correct and match your purchase records. Imports of services may also attract reverse charge, which means the importer pays IGST directly and claims credit if eligible. We reconcile every Bill of Entry with your books and returns so that credit is not lost or overstated.",
      },
      {
        heading: "Export invoices, shipping bills and refunds",
        body: "For exports of goods, details of the invoice and shipping bill must match with the information in GSTR-1 so that the refund of IGST, where tax has been paid on exports, is processed smoothly. If you export under LUT, the credit that accumulates because of zero-rated supplies can be claimed as a refund subject to the rules. We match export invoices, shipping bills and bank realisation details, prepare refund applications and help you respond to portal errors and department queries.",
      },
      {
        heading: "How Taxvio helps and what you need to share",
        body: "Our CA-assisted team provides registration, LUT filing, monthly returns, import and export reconciliation and refund coordination in one place. Please share your IEC code, GSTIN, Bills of Entry, shipping bills and import and export invoices. We guide you on choosing between paying IGST and exporting under LUT, depending on your cash flow and credit position. Import-export businesses, trading companies and merchant exporters in {location} get a dependable compliance process that supports growth in international trade.",
      },
    ],
  },
};

/* ───────────────────────── Helpers ───────────────────────── */

const fill = (text: string, location: string) => text.replace(/\{location\}/g, location);

/**
 * Returns the SEO sections of a service with "{location}" replaced.
 * Example: getServiceSeoContent("gst-registration", "Muzaffarnagar")
 */
export function getServiceSeoContent(slug: string, location = "India"): SeoSection[] {
  const entry = gstServiceSeoContent[slug];
  if (!entry) return [];
  return entry.sections.map((s) => ({
    heading: fill(s.heading, location),
    body: fill(s.body, location),
  }));
}

/** Plain text of the whole SEO block (useful for meta description or word counts). */
export const getServiceSeoText = (slug: string, location = "India") =>
  getServiceSeoContent(slug, location)
    .map((s) => `${s.heading}. ${s.body}`)
    .join(" ");