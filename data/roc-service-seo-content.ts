// data/roc-service-seo-content.ts
// 300+ words of SEO body content for every ROC service (keyed by service slug).
//
// - "{location}" in the text is replaced by the place name:
//   getRocServiceSeoContent("dir-3-kyc", "Muzaffarnagar")
// - Each service has 4 sections (heading + paragraph).
// - Filing forms, due dates and fees change over time, so keep the on-page disclaimer and
//   have a professional review this copy now and then.

export interface RocSeoSection {
  heading: string;
  body: string;
}

export interface RocServiceSeoContent {
  slug: string;
  sections: RocSeoSection[];
}

export const rocServiceSeoContent: Record<string, RocServiceSeoContent> = {
  /* ───────────── 1. Private Limited Company Formation ───────────── */
  "private-limited-formation": {
    slug: "private-limited-formation",
    sections: [
      {
        heading: "Why entrepreneurs choose a private limited company",
        body: "A private limited company is a separate legal entity, which means it can own property, sign contracts, borrow money and sue or be sued in its own name. The liability of shareholders is limited to the unpaid amount on their shares, so personal assets are generally protected from business debts. The company continues even if a shareholder leaves or dies, and its structure is the one most investors, banks and large customers are comfortable with. For founders in {location}, incorporation is often the step that turns a small business into a fundable startup.",
      },
      {
        heading: "Requirements to incorporate",
        body: "You need at least two directors and two shareholders, and a director can also be a shareholder. At least one director must be resident in India, which means staying in the country for 182 days or more in the previous year. There is no minimum paid-up capital requirement, and the company can have up to 200 members. A unique name must be approved, and the company needs a registered office address in India with proof such as a utility bill and, for rented premises, a rent agreement with a no-objection letter from the owner.",
      },
      {
        heading: "How the incorporation process works",
        body: "Incorporation is filed online with the Ministry of Corporate Affairs through the integrated SPICe+ form, which covers name reservation, DIN allotment, PAN, TAN and registrations such as EPFO, ESIC and GST in one application. We prepare the Memorandum and Articles of Association, obtain digital signatures for the directors, upload the documents and answer any query raised by the Registrar. On approval you receive a Certificate of Incorporation with the company's CIN, and we guide you on opening the bank account and depositing the initial capital.",
      },
      {
        heading: "What happens after registration in {location}",
        body: "A new company has duties from the first month. The first auditor must be appointed within thirty days of incorporation, shareholders need to bring in their subscription money, and a declaration of commencement of business has to be filed within one hundred and eighty days. From then on, the company must hold board meetings, maintain statutory registers and file annual returns with the Registrar. Taxvio's CA-assisted team sets up these routines so that your company in {location} stays compliant from day one and avoids late fees.",
      },
    ],
  },

  /* ───────────────────────── 2. LLP Registration ───────────────────────── */
  "llp-formation": {
    slug: "llp-formation",
    sections: [
      {
        heading: "What makes an LLP different from a partnership firm",
        body: "A Limited Liability Partnership combines the flexibility of a partnership with the protection of limited liability. It is a separate legal entity registered under the LLP Act, 2008, and each partner's liability is limited to the contribution agreed in the LLP agreement, apart from cases of fraud. Unlike an ordinary partnership firm, the LLP has perpetual succession, can hold property in its own name and carries more credibility with banks and customers. Professionals and small businesses in {location} often prefer it for its lower compliance cost.",
      },
      {
        heading: "Who can form an LLP and what is required",
        body: "An LLP needs at least two partners, and at least two of them must be designated partners, of whom one must be resident in India. There is no upper limit on the number of partners and no minimum capital. Partners can be individuals or companies. A unique name must be approved, and the LLP needs a registered office address with ownership or rent proof. The LLP agreement, which sets out profit sharing, duties and exit terms, must be drafted carefully because it governs the relationship between the partners.",
      },
      {
        heading: "How Taxvio handles LLP registration",
        body: "We reserve the name, prepare the incorporation documents in the FiLLiP form, obtain digital signatures and DPINs for the designated partners, and file with the Registrar of Companies. After the certificate is issued, the LLP agreement must be filed in the prescribed form within thirty days of incorporation, and we draft and file it for you. We also assist with PAN and TAN, bank account opening and registrations such as GST, so that your LLP can start billing quickly.",
      },
      {
        heading: "Annual compliance and when an LLP audit applies",
        body: "Every LLP files two annual forms: the statement of account and solvency, and the annual return of partners and contribution. Audit is required only if the contribution exceeds twenty-five lakh rupees or the annual turnover exceeds forty lakh rupees. Missing these filings attracts an additional fee for every day of delay, with no upper limit, so even a dormant LLP in {location} must keep filing until it is formally closed. We track the due dates and prepare the forms, so you do not accumulate penalties.",
      },
    ],
  },

  /* ───────────────────────── 3. OPC Registration ───────────────────────── */
  "opc-formation": {
    slug: "opc-formation",
    sections: [
      {
        heading: "What is a One Person Company?",
        body: "A One Person Company allows a single individual to run a business as a company with limited liability. Before this structure was introduced, a company needed at least two members, so solo founders had to operate as sole proprietors with unlimited personal liability. An OPC has a separate legal identity, perpetual succession and a name that shows the words One Person Company or the letters OPC in brackets. Solo entrepreneurs in {location} use it to build credibility with banks, vendors and customers without needing a partner.",
      },
      {
        heading: "Eligibility, nominee and restrictions",
        body: "Only a natural person who is an Indian citizen can incorporate an OPC, and a person can be the sole member of only one such company at a time. The member must appoint a nominee who takes over in case of death or incapacity, and the nominee's written consent is filed with the incorporation papers. An OPC cannot carry on non-banking financial activities, including investment in securities, and cannot be converted into a Section 8 company. At least one director must be resident in India.",
      },
      {
        heading: "Incorporation process with Taxvio",
        body: "We check the eligibility of the founder and the nominee, reserve a suitable name, draft the Memorandum and Articles of Association and prepare the integrated incorporation form with the nominee declaration. After obtaining the digital signature and the Director Identification Number, we file the application with the Ministry of Corporate Affairs and respond to any query raised. Once approved, you receive the Certificate of Incorporation, PAN and TAN, and we help you open the current account and start operations.",
      },
      {
        heading: "Compliance, benefits and conversion options",
        body: "An OPC is not required to hold an annual general meeting and has lighter requirements for board meetings, yet it must get its accounts audited and file annual financial statements and the annual return with the Registrar. Many founders start with an OPC and later convert it into a private limited company when they want investors or additional shareholders. Our team in {location} can guide you on the right timing for that conversion and handle the filing, so your compliance record stays clean throughout.",
      },
    ],
  },

  /* ───────────────────── 4. Public Limited Company Formation ───────────────────── */
  "public-limited-company-formation": {
    slug: "public-limited-company-formation",
    sections: [
      {
        heading: "When a public limited company makes sense",
        body: "A public limited company is a company whose shares can be offered to the public and are freely transferable, subject to the law. It suits businesses that plan large-scale operations, need substantial capital or intend to list their shares on a stock exchange in future. Because it is open to a wider group of shareholders, it carries stronger disclosure and governance requirements than a private company. Ambitious businesses in {location} choose it when private funding alone will not support their growth.",
      },
      {
        heading: "Minimum requirements",
        body: "A public company must have at least seven members and at least three directors, and there is no upper limit on the number of members. At least one director must be resident in India. The name must end with the word Limited, and the company needs a registered office with valid proof. Depending on its size, it may also need to appoint independent directors, a woman director and a company secretary. There is no minimum paid-up capital, but the authorised capital must be set in the Memorandum.",
      },
      {
        heading: "How we incorporate your public company",
        body: "Our CA-assisted team prepares the name application, drafts the Memorandum and Articles of Association suited to a public company, collects the director documents and DINs, and files the integrated incorporation form on the MCA portal. After approval you receive the Certificate of Incorporation along with PAN and TAN. We also set up statutory registers, appoint the first auditor within the prescribed time and prepare the declaration of commencement of business that must be filed after the shareholders pay their subscription amounts.",
      },
      {
        heading: "Ongoing compliance and choosing between company types",
        body: "A public company must hold board and general meetings, maintain detailed records and file annual financial statements and returns on time. Rules on related party transactions, director appointments and disclosures are stricter than for a private company. If your plan does not involve raising money from the public, a private limited company in {location} may be cheaper to run, and we will tell you honestly which structure fits. If you choose a public company, we continue with the annual filings.",
      },
    ],
  },

  /* ───────────────────────── 5. Section 8 Company ───────────────────────── */
  "section-8-company": {
    slug: "section-8-company",
    sections: [
      {
        heading: "What is a Section 8 company?",
        body: "A Section 8 company is a non-profit company formed to promote objects such as commerce, art, science, sports, education, research, social welfare, religion, charity or the protection of the environment. Its profits and income must be applied only towards its objects, and it cannot pay dividends to its members. Because it is registered as a company, it enjoys limited liability, a separate legal identity and a structure that donors and institutions trust. NGOs and social initiatives in {location} often prefer it to a trust or society for its clear governance.",
      },
      {
        heading: "Licence and name requirements",
        body: "A Section 8 company needs a licence from the Central Government, which is applied for through the integrated incorporation form along with a licence application. The applicant must show that the objects are charitable in nature and that the income will not be distributed. The company name must end with words such as Foundation, Forum, Association, Federation, Chamber, Confederation or Council, and the words Private Limited are dropped. At least two directors are needed for a private Section 8 company.",
      },
      {
        heading: "How Taxvio prepares your application",
        body: "We study your mission and draft objects that are clear and wide enough for future activities. We then prepare the Memorandum and Articles of Association, the declarations by the directors, a plan of how the income will be used and the estimated income and expenditure for the first three years. The application is filed online with digital signatures, and we respond to any query from the Registrar until the licence and the Certificate of Incorporation are issued.",
      },
      {
        heading: "Tax registrations and funding eligibility",
        body: "After incorporation, a Section 8 company usually applies for income tax registration under Section 12A and approval under Section 80G, which allow it to claim exemption on its income and to offer deductions to donors. Companies that want to receive corporate funding for social work must also register on the CSR portal. We guide you on these steps so that your organisation in {location} can start raising funds with the right approvals, and we file the annual returns and financial statements the law requires.",
      },
    ],
  },

  /* ───────────────────────── 6. Nidhi Company ───────────────────────── */
  "nidhi-company-registration": {
    slug: "nidhi-company-registration",
    sections: [
      {
        heading: "What is a Nidhi company?",
        body: "A Nidhi company is a mutual benefit company whose main business is to encourage the habit of thrift and savings among its members and to lend to them. It accepts deposits only from its members and gives loans only to its members, which sets it apart from banks and other finance companies. The activity is regulated under the Companies Act and the Nidhi Rules, 2014, so the structure must follow strict conditions on membership, funds and deposits. Community groups in {location} sometimes use this model to create a trusted savings circle.",
      },
      {
        heading: "Conditions every Nidhi company must satisfy",
        body: "At the time of incorporation, a Nidhi company needs at least seven members and three directors. Within one year, it must have at least two hundred members and net owned funds of ten lakh rupees, and the ratio of net owned funds to deposits must be maintained within the limit set by the Rules. A part of the deposits must be kept in unencumbered term deposits with banks. The name must end with the words Nidhi Limited, and the company cannot run chit funds, leasing, hire purchase or insurance businesses.",
      },
      {
        heading: "Incorporation and the NDH filings",
        body: "We incorporate the company in the usual manner, with Memorandum and Articles that carry the required Nidhi objects, and then guide you through the special forms. A statutory declaration in Form NDH-4 is filed to seek the status of a Nidhi company after the conditions are met, and Form NDH-1 reports compliance with the membership and fund requirements. Half-yearly returns must also be filed with the Registrar. If you need more time to meet the conditions, an extension application is available, and we prepare it with supporting reasons.",
      },
      {
        heading: "Who should consider this structure",
        body: "A Nidhi company suits a genuine mutual benefit group with a defined membership base, for example a community, a profession or a neighbourhood. It is not suited to a business that wants to lend widely to the public or to raise money from outsiders. We examine your plan in {location}, tell you whether the Nidhi route fits and, if it does, prepare the documents, the member register and the compliance calendar. Share the details of directors, members and the registered office, and we will take it from there.",
      },
    ],
  },

  /* ───────────────────────── 7. Producer Company ───────────────────────── */
  "producer-company-registration": {
    slug: "producer-company-registration",
    sections: [
      {
        heading: "What is a producer company?",
        body: "A producer company is a special kind of company owned by primary producers such as farmers, dairy producers, fishermen and artisans. It allows them to carry out activities like production, harvesting, procurement, grading, processing, marketing and export of their produce together, and to share the profits among members in proportion to their use of the company. It combines the limited liability and legal status of a company with the cooperative spirit of collective business. Farmer groups in {location} use it to reach better markets.",
      },
      {
        heading: "Membership and director requirements",
        body: "A producer company can be formed by ten or more individual producers, or by two or more producer institutions, or by a combination of both. It must have at least five directors and at most fifteen, and the members elect them. The name must end with the words Producer Company Limited. Only active producers can be members, and the voting is generally one member one vote, which keeps control with the producers rather than with large capital holders.",
      },
      {
        heading: "How Taxvio prepares the registration",
        body: "We help you collect proof of the producer activity, such as land records or membership details, and draft the Memorandum and Articles of Association with objects that suit your produce. The incorporation form is filed on the MCA portal with digital signatures and director identification numbers. We also structure the member shares so that each producer's stake is documented clearly, and we respond to any query from the Registrar until the Certificate of Incorporation is issued.",
      },
      {
        heading: "Benefits, compliance and funding access",
        body: "A producer company can access institutional credit, government schemes for farmer producer organisations and better contract terms with buyers because it speaks for many producers at once. It must hold annual meetings, maintain member records, build a reserve from its profits and file annual financial statements and returns with the Registrar. We set up the compliance calendar for your organisation in {location}, and we can also help with GST, income tax and other registrations that the business needs in order to trade.",
      },
    ],
  },

  /* ───────────────────────── 8. Annual ROC Compliance ───────────────────────── */
  "annual-roc-compliance": {
    slug: "annual-roc-compliance",
    sections: [
      {
        heading: "What annual ROC compliance involves",
        body: "Every company and LLP registered in India must file annual documents with the Registrar of Companies, even if it has made no profit or done no business during the year. A company files its financial statements in Form AOC-4 and its annual return in Form MGT-7, while small companies and One Person Companies file the shorter MGT-7A. An LLP files Form 8 for the statement of account and solvency and Form 11 for the annual return. Businesses in {location} should treat these as fixed dates in the calendar.",
      },
      {
        heading: "Due dates and consequences of delay",
        body: "A company must hold its annual general meeting within six months of the end of the financial year, then file AOC-4 within thirty days of the meeting and MGT-7 within sixty days. An LLP files Form 11 by the end of May and Form 8 by the end of October. Late filing attracts an additional fee, which has generally been one hundred rupees per day with no upper cap (check the current schedule on the MCA portal), and the officers can also be penalised. If returns remain unfiled for three years, directors may be disqualified and the entity may be struck off.",
      },
      {
        heading: "How Taxvio prepares and files your returns",
        body: "We collect your balance sheet, profit and loss account, auditor's report and director's report, check them for completeness and prepare the forms with the required attachments. Our team coordinates the digital signatures of the directors and the auditor, files the forms on the MCA portal and sends you the acknowledgement with the Service Request Number. If a form is rejected or marked for resubmission, we correct it quickly so that no extra fee accrues.",
      },
      {
        heading: "Documents required and related filings",
        body: "Keep the audited financial statements, the notice and minutes of the general meeting, the list of shareholders and directors, and details of any change during the year ready. Annual filing is closely linked with other tasks such as the appointment of the auditor, director KYC and the return of deposits, and we bundle them into one calendar for companies in {location}. A complete annual compliance package keeps your company active on the MCA register and protects the directors from avoidable penalties.",
      },
    ],
  },

  /* ───────────────────────── 9. AGM Compliance ───────────────────────── */
  "agm-compliance": {
    slug: "agm-compliance",
    sections: [
      {
        heading: "Why the annual general meeting matters",
        body: "The annual general meeting is the yearly occasion at which the shareholders of a company review the accounts, approve the financial statements, appoint or reappoint the auditor, declare any dividend and elect directors retiring by rotation. It is a legal requirement for every company other than a One Person Company, and the filings with the Registrar depend on the date of the meeting. Companies in {location} that skip the AGM or hold it late face penalties and delays in all later filings.",
      },
      {
        heading: "Timelines and notice rules",
        body: "An AGM must be held within six months from the end of the financial year, and no more than fifteen months can pass between two meetings. The first AGM of a company can be held within nine months of the close of its first financial year. Shareholders, directors and the auditor must receive a notice of at least twenty-one clear days, although a shorter notice is allowed if members holding at least ninety-five percent of the voting power consent. The meeting should be held at the registered office or within the same city during working hours.",
      },
      {
        heading: "What Taxvio prepares for you",
        body: "We draft the notice with a clear agenda and explanatory statement, prepare the resolutions for adoption of accounts, auditor appointment and director retirement, and draft the attendance register, proxy forms and minutes. After the meeting, the minutes must be recorded within thirty days, and we maintain them in the proper format. If the meeting cannot be held on time, we prepare the application to the Registrar for an extension of up to three months, which is allowed in genuine cases.",
      },
      {
        heading: "Special cases and penalties",
        body: "Listed companies must also report the proceedings of the meeting in the prescribed form, and some companies hold the AGM through video conferencing where the rules permit. A company that fails to hold the AGM can be fined along with its officers, and the fine continues for every day of default. We keep you ahead of these dates and give a short summary of your obligations. Share your financial statements, the director's report and the auditor's report, and your AGM paperwork in {location} will be ready.",
      },
    ],
  },

  /* ───────────────────────── 10. ADT-1 ───────────────────────── */
  "adt-1-auditor-appointment": {
    slug: "adt-1-auditor-appointment",
    sections: [
      {
        heading: "What is Form ADT-1?",
        body: "Form ADT-1 is the notice a company files with the Registrar of Companies to inform it about the appointment or reappointment of its statutory auditor. Every company has to get its accounts audited by an independent chartered accountant or firm, and the appointment is not complete in the eyes of the law until this form is filed. Companies in {location} that forget it often face notices and additional fees during later annual filings.",
      },
      {
        heading: "When to file and for whom",
        body: "The first auditor of a new company is appointed by the board within thirty days of incorporation and holds office until the first annual general meeting. After that, the shareholders appoint an auditor at an AGM for a term of five consecutive years. The form must be filed within fifteen days of the appointment. It is also required when a casual vacancy is filled after the auditor resigns, and when the shareholders appoint a new auditor in place of the retiring one.",
      },
      {
        heading: "Consent, eligibility and rotation",
        body: "The proposed auditor must give a written consent and a certificate that the appointment is within the limits of the Act and that none of the disqualifications applies. The company's records should also show that the auditor is not an officer, an employee or a connected person and does not hold interest above the limit. For listed companies and certain larger companies, the law also limits the number of consecutive terms and requires rotation, so tenure tracking is important to avoid an invalid appointment.",
      },
      {
        heading: "How Taxvio completes your ADT-1 filing",
        body: "We obtain the consent and eligibility letters, draft the board or AGM resolution, prepare the form with the details of the auditor and the term, and file it with the digital signature of an authorised director. We then keep a record of the tenure and remind you before the next AGM, so that reappointment or rotation is planned in advance. Companies in {location} get a complete audit appointment file, which is useful during bank reviews, due diligence and any inspection.",
      },
    ],
  },

  /* ───────────────────────── 11. DIR-3 KYC ───────────────────────── */
  "dir-3-kyc": {
    slug: "dir-3-kyc",
    sections: [
      {
        heading: "What is DIR-3 KYC and who must file it?",
        body: "Every individual who holds a Director Identification Number must complete a KYC process so that the Ministry of Corporate Affairs has current personal details of directors on record. The filing confirms the director's name, PAN, Aadhaar, mobile number and email address, and the mobile number and email are verified through one-time passwords. It applies to all directors of companies and designated partners of LLPs. Directors in {location} should treat it as a personal compliance that continues even when the company is dormant.",
      },
      {
        heading: "Due date and the cost of missing it",
        body: "Directors used to file the KYC every year by the thirtieth of September. Under the amendment that took effect on 31 March 2026, the filing is due once every three years, by the thirtieth of June following the third financial year, and a change in mobile number, email address or residential address has to be reported within thirty days. Because the schedule has changed, each director should confirm their own due date on the MCA portal. A director who misses it sees the DIN marked as deactivated, and the director cannot be appointed or sign filings until it is reactivated. Reactivation has needed a fee of five thousand rupees along with the KYC, so check the current fee on the portal. A deactivated DIN also causes difficulty for the company, because forms signed by that director may be rejected.",
      },
      {
        heading: "Web-based KYC and full KYC forms",
        body: "A director who has already completed the full KYC in an earlier period can use the simpler web-based route, which verifies the existing details through OTP when nothing has changed. A fresh e-form with a digital signature and a professional's certification is needed when the DIN is new or when the details have changed. We check which route applies to each director, prepare the data and complete the filing, including the OTP verification, so the process takes little of your time.",
      },
      {
        heading: "Documents and how Taxvio helps",
        body: "You will need your PAN card, Aadhaar card, a mobile number and an email address that you can access for OTPs. If your DIN is already deactivated, we handle the reactivation and ensure that the company's pending forms are not affected. We also keep a list of every director and designated partner in your company in {location}, with each person's next KYC date and any change of contact details that must be reported, so nothing catches anyone by surprise. Reach out early, because OTP and portal issues are common close to a deadline.",
      },
    ],
  },

  /* ───────────────────────── 12. DPT-3 ───────────────────────── */
  "dpt-3-filing": {
    slug: "dpt-3-filing",
    sections: [
      {
        heading: "What is Form DPT-3?",
        body: "Form DPT-3 is the annual return in which a company reports deposits and also certain receipts of money or loans that are not classified as deposits. It gives the Ministry of Corporate Affairs a picture of how the company is funded. Many companies assume it applies only to firms that accept public deposits, but it also applies to companies that have taken loans from directors, shareholders or other persons. Businesses in {location} that have borrowed informally from their promoters often need to file it.",
      },
      {
        heading: "Who needs to file and by when",
        body: "Companies other than government companies must file the return, with information as on the thirty-first of March, on or before the thirtieth of June every year. The return must be accompanied by the auditor's certificate and the statement of outstanding money received, and it is required even when the amounts are exempt from the definition of deposits, for example a loan from a director who has given a declaration that the money is not borrowed from others. A company that has no such amount may still need to file in some cases, so applicability must be checked.",
      },
      {
        heading: "Common mistakes and consequences",
        body: "The most frequent errors are failing to collect the director's declaration, treating shareholder advances as ordinary payables, ignoring old balances that remain outstanding, and filing without the auditor's certificate. Accepting deposits in violation of the law can lead to heavy penalties and interest, and late filing attracts additional fees every day. A careful review of the ledger heads such as unsecured loans, advances and deposits helps classify each amount correctly before the return is prepared.",
      },
      {
        heading: "How Taxvio prepares your DPT-3",
        body: "We study your financial statements and ledgers, classify each receipt, coordinate the auditor's certificate and prepare the return with the correct attachments. If you have taken money that may count as a deposit, we explain the rules and the options to regularise it. Share the audited financial statements, the loan and deposit ledgers and the declarations from lenders, and our team will prepare and file the return so that your company in {location} stays within the law.",
      },
    ],
  },

  /* ───────────────────────── 13. MSME-1 ───────────────────────── */
  "msme-1-filing": {
    slug: "msme-1-filing",
    sections: [
      {
        heading: "What is the MSME-1 return?",
        body: "MSME Form I is a half-yearly return that companies must file when they owe money to micro or small enterprise suppliers for more than forty-five days from the date of acceptance of the goods or services. It is meant to make delayed payments to small suppliers visible to the government. A company that buys from small vendors in {location} and pays them late should check this requirement every half-year, since the obligation arises from the dues outstanding rather than from the size of the company.",
      },
      {
        heading: "Due dates and what the return contains",
        body: "The return for the months from April to September is due by the thirty-first of October, and the return for October to March is due by the thirtieth of April. It lists each supplier, the amount due, the date from which it is due and the reason for the delay. Companies must therefore know which of their vendors are registered as micro or small enterprises, and must track the dates of acceptance of each invoice, which is difficult without a vendor master and an ageing report.",
      },
      {
        heading: "Why prompt payment also matters for tax",
        body: "The law on payments to micro and small enterprises is strict. Interest on delayed payment is charged at three times the bank rate, compounded monthly, and for income tax a deduction for such payments is allowed only when they are made within the time limits set by the Income Tax Act. A company that pays small vendors late may therefore face higher tax and interest in addition to the compliance filing. Our team explains these links so you can manage vendor payments before they become a problem.",
      },
      {
        heading: "How Taxvio prepares your MSME-1",
        body: "We verify the registration status of your vendors from their Udyam certificates, compile the outstanding payments from your purchase and payment records, prepare the return and file it within the due date. We also set up a simple ageing report that you can use each month to spot invoices approaching the forty-five day limit. Send us the vendor certificates, purchase and payment records and the dues ledger, and your company in {location} will have an accurate half-yearly return and a clearer view of its payables.",
      },
    ],
  },

  /* ───────────────────────── 14. SBO / BEN-2 ───────────────────────── */
  "sbo-ben-2-filing": {
    slug: "sbo-ben-2-filing",
    sections: [
      {
        heading: "What is a significant beneficial owner?",
        body: "A significant beneficial owner is an individual who ultimately holds at least ten percent of the shares or voting rights of a company, or who has the right to receive or participate in at least ten percent of its distributable dividend, or who exercises significant influence or control in some other way. The ownership may be direct or through other companies, trusts or partnerships. The rules exist to reveal the real persons behind layered shareholding. Companies in {location} with holding companies, trusts or family entities among their shareholders should check this carefully.",
      },
      {
        heading: "Declaration and filing requirements",
        body: "A person who becomes a significant beneficial owner must file a declaration in Form BEN-1 with the company within thirty days. The company, after receiving it, must file Form BEN-2 with the Registrar within thirty days and record the details in its register of significant beneficial owners. The company must also write to members whom it suspects of holding shares on behalf of others to seek their declarations, and the Registrar can ask the company for information at any time.",
      },
      {
        heading: "Risks of non-compliance",
        body: "A company that does not comply faces penalties, and its officers in default may be penalised too. If a person fails to make the declaration, the company can apply to the Tribunal to restrict rights attached to the shares, which can freeze dividends and voting rights. These are serious consequences for investors and promoters, particularly when the company is preparing for a funding round, since investors usually ask for proof of compliance during due diligence.",
      },
      {
        heading: "How Taxvio supports your SBO compliance",
        body: "We study your shareholding pattern and ownership chain, apply the thresholds to identify who qualifies, issue the notices and collect the BEN-1 declarations. We then prepare and file BEN-2 and set up the register in the required format. If your structure has several layers or a foreign shareholder, we map each level and document the reasoning. Share the shareholding pattern, structure chart and any existing declarations, and your company in {location} will have a clean record ready for audits and investors.",
      },
    ],
  },

  /* ───────────── 15. Director Appointment / Resignation ───────────── */
  "director-appointment-resignation": {
    slug: "director-appointment-resignation",
    sections: [
      {
        heading: "Why director changes must be filed with the ROC",
        body: "Directors are the persons who manage a company, and the public record at the Ministry of Corporate Affairs must show who they are at any given time. When a director joins or leaves, the company has to file Form DIR-12 within thirty days of the appointment or cessation. Banks, buyers and regulators rely on this record, and an unfiled change can cause trouble in loan applications and contract signings. Companies in {location} that change their boards without filing often find the old directors still shown as active.",
      },
      {
        heading: "How an appointment is made",
        body: "A new director needs a Director Identification Number, a digital signature and a written consent to act in Form DIR-2, along with a declaration that he or she is not disqualified. The board can appoint an additional director if the Articles permit, and the shareholders approve the appointment at the next general meeting. Every company must also keep at least one director who is resident in India, and public companies must follow additional rules on the number and qualifications of directors.",
      },
      {
        heading: "How a resignation works",
        body: "A director who wants to leave gives a written notice to the company, and the resignation takes effect from the date the company receives it or from the date mentioned in the notice, whichever is later. The company files Form DIR-12 and the director can also file Form DIR-11 directly with the Registrar, which protects the director if the company delays. Before leaving, a director should check that all pending annual returns are filed, because a director of a company that has not filed for three years can be disqualified.",
      },
      {
        heading: "How Taxvio handles the filing",
        body: "We draft the board resolution, the consent and declaration forms and the notice of resignation, and we obtain the digital signatures. Our team files Form DIR-12, tracks approval and updates the statutory registers. If a director needs a new DIN or a change of details, we handle that too. Share the director's PAN, Aadhaar and digital signature, and the company's incorporation details, and your board changes in {location} will be recorded correctly on the MCA portal without delay.",
      },
    ],
  },

  /* ───────────────────────── 16. Company Name Change ───────────────────────── */
  "company-name-change": {
    slug: "company-name-change",
    sections: [
      {
        heading: "When companies change their name",
        body: "Companies change their name for many reasons: rebranding after growth, a merger or a change of business, or a dispute over a similar name. The change must follow the Companies Act, and the new name should be approved by the Ministry of Corporate Affairs before it is used. A name that is too similar to an existing company or a registered trademark can be rejected. Businesses in {location} that plan a rebrand should check the availability of the new name before they print stationery or register a domain.",
      },
      {
        heading: "Steps in the legal process",
        body: "The process begins with a name availability check and a reservation of the proposed name through the MCA portal. The board then passes a resolution and calls a general meeting, where the shareholders approve the change by a special resolution and the Memorandum and Articles of Association are altered. The company then files the application in Form INC-24, along with the special resolution in Form MGT-14, within thirty days of passing the resolution. After approval, the Registrar issues a fresh Certificate of Incorporation under the new name.",
      },
      {
        heading: "Updating your other records",
        body: "A change of name does not change the company's identity or its PAN, but every other record has to be updated. These include the bank accounts, GST registration, income tax records, TAN, licences, contracts, letterheads, invoices and the website. Customers and suppliers should be informed in writing. If invoices and returns carry the old name for too long, you may face mismatches, so planning the date of switchover and coordinating the updates is as important as the ROC filing itself.",
      },
      {
        heading: "How Taxvio manages your name change",
        body: "Our CA-assisted team checks the availability of the name, prepares the resolutions and notice, alters the Memorandum and Articles, files the forms and follows up on the approval. After the new certificate is issued, we assist with the follow-up changes in tax registrations. Share the certificate of incorporation, the proposed names in order of preference and the board resolution, and we will guide your company in {location} through each step so that the rebrand happens without legal gaps.",
      },
    ],
  },

  /* ───────────────────── 17. Increase in Authorized Capital ───────────────────── */
  "authorized-capital-increase": {
    slug: "authorized-capital-increase",
    sections: [
      {
        heading: "What is authorised share capital?",
        body: "Authorised share capital is the maximum amount of share capital that a company may issue to its shareholders, as stated in its Memorandum of Association. A company cannot allot shares beyond this limit, however much money investors are willing to bring in. When a business grows, needs to take in a new investor or wants to issue bonus or rights shares, the limit often has to be increased first. Companies in {location} planning fundraising should raise the authorised capital before the money arrives.",
      },
      {
        heading: "Resolutions and approvals required",
        body: "The company's Articles of Association must permit an increase in capital. If they do not, the Articles have to be altered first by a special resolution. The increase is then approved by a resolution of the shareholders at a general meeting, and the capital clause of the Memorandum is altered accordingly. The board must call the meeting with proper notice, and the resolutions must be filed with the Registrar. A mistake in the sequence can make later allotments of shares invalid.",
      },
      {
        heading: "Forms, fees and timeline",
        body: "Form SH-7 is filed with the Registrar within thirty days of passing the resolution, together with the altered Memorandum, and a copy of the resolution is filed in Form MGT-14 when required. The Registrar charges a fee that depends on the amount of increase, and stamp duty may also be payable in some states on the altered Memorandum, so the total cost should be estimated in advance. After the Registrar registers the change, the new authorised capital appears on the MCA record and the company can proceed with the allotment.",
      },
      {
        heading: "How Taxvio supports the increase",
        body: "We review your Articles, compute the fee and stamp duty, draft the notice, resolutions and altered Memorandum, and file the forms. We also coordinate the next steps such as the allotment of shares to new investors and the filing of the return of allotment. If you are working to a closing date with an investor, we prepare the timeline backwards from that date so that your company in {location} has the capital in place before the funds are received.",
      },
    ],
  },

  /* ───────────────────── 18. Registered Office Change ───────────────────── */
  "registered-office-change": {
    slug: "registered-office-change",
    sections: [
      {
        heading: "Why the registered office matters",
        body: "The registered office is the official address of a company, where notices from the Registrar, tax departments and courts are delivered. It also decides which Registrar of Companies has jurisdiction over the company and, in many cases, the state in which the company pays certain taxes. A company must therefore keep the address current and inform the Ministry of every change. Businesses in {location} that move to a new premises should plan the legal filing along with the physical shift.",
      },
      {
        heading: "Types of shifts and approvals",
        body: "Shifting within the same city, town or village needs a board resolution and a filing of Form INC-22 within thirty days. A shift outside the city but within the same state needs a special resolution of the shareholders, and if it moves the company to the jurisdiction of another Registrar, the approval of the Regional Director is needed. A shift from one state to another is more complex. It needs an alteration of the Memorandum, a special resolution, newspaper notices and the confirmation of the Regional Director.",
      },
      {
        heading: "Documents and verification",
        body: "The new address must be supported by proof such as an electricity or telephone bill not older than two months, along with a rent agreement and a no-objection certificate from the owner if the premises are not owned by the company. The registered office must be a place where the company can actually receive communication, and a verification of the premises may follow. Directors and creditors may need to be informed, and the change must be reflected in other registrations such as GST and income tax.",
      },
      {
        heading: "How Taxvio handles the shift",
        body: "We identify which type of shift applies, prepare the resolutions, notices and affidavits, file Form INC-22 and the forms for Regional Director approval where required, and follow up until the Registrar updates the record. We then help you update the address in GST, PAN, bank and licence records so that the new address is consistent across all departments. Share the new address proof, the owner's no-objection letter and the board resolution, and the shift of your company in {location} will be recorded in good order.",
      },
    ],
  },

  /* ───────────────────────── 19. Share Transfer ───────────────────────── */
  "share-transfer": {
    slug: "share-transfer",
    sections: [
      {
        heading: "How share transfers work in a private company",
        body: "A shareholder who wants to sell or gift shares in a private company must follow the procedure in the Companies Act and in the company's Articles of Association. The Articles of a private company usually restrict the right to transfer and may require the board's approval or give existing shareholders a right of first refusal. Family-owned businesses in {location} often transfer shares between relatives, and a casual agreement without the proper documents can cause disputes years later.",
      },
      {
        heading: "Documents and steps involved",
        body: "For physical shares, the transferor and transferee sign a share transfer deed in Form SH-4 and attach the original share certificate. Stamp duty is payable on the instrument. The deed is presented to the company, the board approves it, the register of members is updated and a new share certificate is issued to the transferee. The company must complete the process and deliver the certificate within the time set by the Act, which is normally one month from the date of receipt of the transfer deed.",
      },
      {
        heading: "Transmission, gifts and foreign shareholders",
        body: "A transmission happens when shares pass by law, for example on the death of a shareholder, and the legal heirs or nominee must provide a death certificate and proof of succession. A gift of shares needs a gift deed and appropriate stamp duty. When shares are transferred between a resident and a non-resident, foreign exchange rules also apply and a separate reporting may be required to the Reserve Bank. A change in shareholding can also affect the disclosures about significant beneficial owners, so each transfer needs a short compliance check.",
      },
      {
        heading: "How Taxvio supports your transfer",
        body: "We draft the transfer deed and the board resolution, check the restrictions in the Articles, compute the stamp duty, update the register of members and prepare the new share certificates. We also advise on the effect of the transfer on the annual return and on other filings. Share the existing share certificates, the PAN of the transferor and transferee and the agreed terms, and your share transfer in {location} will be documented in a way that stands up to a later audit, a bank review or an investor's due diligence.",
      },
    ],
  },

  /* ───────────────────── 20. Charge Creation & Satisfaction ───────────────────── */
  "charge-registration-satisfaction": {
    slug: "charge-registration-satisfaction",
    sections: [
      {
        heading: "What is a charge on company assets?",
        body: "When a company borrows money from a bank or financial institution, the lender usually takes security over the company's assets such as land, machinery, stock or receivables. This security interest is called a charge. The law requires the company to register it with the Registrar of Companies so that other creditors and the public can see which assets are already pledged. Companies in {location} that take a secured loan must file within the time allowed, or the charge may not be recognised in a dispute.",
      },
      {
        heading: "Registering the charge: Form CHG-1",
        body: "Form CHG-1 is used to register the creation or modification of a charge and must be filed within thirty days of the date of creation. A late filing is accepted for a longer period on payment of additional fees, but after that period the Registrar's permission or the intervention of the Central Government may be needed. The form is accompanied by the charge instrument, such as the loan agreement or deed of hypothecation, and is signed with a digital signature. On approval, the Registrar issues a certificate of registration of charge.",
      },
      {
        heading: "Satisfaction of charge: Form CHG-4",
        body: "When the loan is repaid, the charge should be removed from the register by filing Form CHG-4 within thirty days of payment or satisfaction. A no-dues certificate or a letter from the lender is usually the supporting document. Many companies forget this step, and the old charge continues to appear against their assets, which can block new borrowing and delay due diligence. Cleaning up the register after repayment is as important as registering the charge at the beginning.",
      },
      {
        heading: "How Taxvio manages the process",
        body: "We study the sanction letter and loan documents, identify the assets and the lender details and prepare Form CHG-1 for filing within the due date. We keep a register of charges for your company, track repayment and file Form CHG-4 when the loan is closed. Share the loan agreement, the sanction letter, the board resolution and the no-dues certificate, and we will make sure that your charge record in {location} is accurate, so that your lenders and investors see a clean position.",
      },
    ],
  },

  /* ───────────────── 21. Private to Public Company Conversion ───────────────── */
  "company-conversion-private-to-public": {
    slug: "company-conversion-private-to-public",
    sections: [
      {
        heading: "Why a private company converts to a public company",
        body: "A private limited company can restrict transfer of its shares and can have at most two hundred members. When it plans to raise money from the public, list on a stock exchange or bring in a wide base of shareholders, it must become a public company. Conversion changes the way the company is governed and the way it is seen by investors and regulators. Growing businesses in {location} usually take this step after a period of planning, since it involves more disclosures and a different board structure.",
      },
      {
        heading: "Requirements before conversion",
        body: "The company must have at least seven members and at least three directors, since these are the minimum numbers for a public company. The Articles of Association must be altered to remove the restrictions that apply to private companies, and the name must drop the word Private. The shareholders approve the conversion and the changes in the Articles by a special resolution. If the company has taken loans or has outstanding agreements, the lenders' consent may also be needed under the terms of those contracts.",
      },
      {
        heading: "Filing and approval",
        body: "After the special resolution, the company files it in Form MGT-14 and then files the application for conversion in Form INC-27, together with the altered Memorandum and Articles, within thirty days. The Registrar examines the application and, on approval, issues a fresh Certificate of Incorporation that shows the company as a public company. Without this certificate the company cannot claim the status of a public company, so filing and follow-up must be done carefully.",
      },
      {
        heading: "After conversion and how Taxvio helps",
        body: "A public company must follow additional rules on the appointment of directors, independent directors, board committees and related party transactions, depending on its size. We help you plan the board, update the statutory registers and align your tax and bank records with the new name. Our team prepares the resolutions, the altered documents and the forms, and guides you through the Registrar's queries. If you are not sure conversion is right for your company in {location}, we review the alternatives first.",
      },
    ],
  },

  /* ───────────────────── 22. LLP to Private Company Conversion ───────────────────── */
  "llp-to-company-conversion": {
    slug: "llp-to-company-conversion",
    sections: [
      {
        heading: "Why an LLP converts into a company",
        body: "An LLP is easy to run, but it has limits when a business wants to raise equity capital. Venture investors and many institutional funds invest by buying shares, and they find it difficult to hold a stake in an LLP. A private limited company can issue shares, offer employee stock options and grant equity to new investors. Growing partnership businesses in {location} often convert to a company when they plan to raise outside funding or want a structure that suits larger contracts.",
      },
      {
        heading: "The legal route and eligibility",
        body: "The Companies Act allows an LLP to register as a company under the provisions on registration of companies, with the application filed in Form URC-1. The partners become the shareholders, and the conversion needs the consent of all partners and the approval of the proposed name. The LLP should have its filings up to date, since pending returns can hold up the process. A list of partners and a statement of the LLP's accounts are submitted with the application.",
      },
      {
        heading: "What the process involves",
        body: "We confirm eligibility, draft the Memorandum and Articles of Association for the new company, and decide on the share capital in proportion to the partners' contributions. We then file the application with the Registrar along with the required declarations, the partner consents and the financial statements. After the Registrar is satisfied, a Certificate of Incorporation as a company is issued. The company then takes over the assets and liabilities of the LLP, and contracts need to be assigned or updated.",
      },
      {
        heading: "After conversion: tax and registrations",
        body: "A conversion has consequences for tax, GST, bank accounts, licences and contracts. Registrations in the name of the LLP must be updated or transferred, and there are income tax conditions that must be satisfied to avoid a tax charge on the transfer. Our CA-assisted team reviews these points before the conversion begins, so your business in {location} does not face surprises. Share the LLP agreement, the partner consents, the financial statements and PAN details, and we will plan the move step by step.",
      },
    ],
  },

  /* ───────────────────── 23. FC-GPR / FDI Compliance ───────────────────── */
  "fc-gpr-fdi-compliance": {
    slug: "fc-gpr-fdi-compliance",
    sections: [
      {
        heading: "What FDI compliance means for an Indian company",
        body: "When an Indian company receives investment from a person outside India in exchange for shares, the transaction is governed by the foreign exchange law and the rules on non-debt instruments. The investment must be in a sector and within a limit permitted for foreign investment, and the price of the shares must follow the pricing guidelines. Startups in {location} with overseas investors need to get these steps right, since mistakes can be costly to correct later and can complicate future funding rounds.",
      },
      {
        heading: "Allotment, reporting and timelines",
        body: "The company must allot the shares within sixty days of receiving the funds, or else refund the money. After allotment, it reports the issue to the Reserve Bank of India through the FIRMS portal by filing the FC-GPR within thirty days. Banks provide the Foreign Inward Remittance Certificate and the KYC of the investor, which are needed for the filing. A valuation report from a chartered accountant or a merchant banker, based on an accepted method, supports the price of the shares.",
      },
      {
        heading: "ROC filings that go with it",
        body: "Along with the reporting to the RBI, the company has to file a return of allotment in Form PAS-3 with the Registrar of Companies within thirty days of the allotment, and it must have the board and shareholder resolutions in place. The authorised capital must be sufficient and the Articles must permit the issue. The company also files the annual Foreign Liabilities and Assets return with the RBI. Missing these steps may require a compounding application, with penalties.",
      },
      {
        heading: "How Taxvio supports foreign investment compliance",
        body: "We review your sector and the entry route, examine the pricing, coordinate the valuation report and prepare the resolutions and the return of allotment. We then complete the FC-GPR on the FIRMS portal with the supporting documents and track any queries from the authorised dealer bank. Share the FIRC, the valuation report, the resolutions and the investor's KYC, and your company in {location} will have the investment recorded correctly with both the RBI and the Registrar.",
      },
    ],
  },

  /* ───────────────────────── 24. CSR-1 Registration ───────────────────────── */
  "csr-1-registration": {
    slug: "csr-1-registration",
    sections: [
      {
        heading: "What is CSR-1 registration?",
        body: "Large companies that meet the thresholds in the Companies Act must spend a part of their profit on corporate social responsibility activities. They often do this by funding other organisations such as NGOs, trusts and Section 8 companies that carry out the work. Such an implementing agency must register with the Ministry of Corporate Affairs by filing Form CSR-1, and the registration gives it a unique CSR Registration Number. Organisations in {location} that want corporate funding should treat it as the entry ticket.",
      },
      {
        heading: "Who is eligible to register",
        body: "Registered public trusts, registered societies and Section 8 companies can apply. The organisation should hold valid registrations under Section 12A and Section 80G of the Income Tax Act where they apply, and it must have a PAN and a valid constitution document such as a trust deed, society memorandum or Section 8 licence. The applicant should also be able to show its governing body details and its activities. An organisation that does not have these approvals should first obtain them, since the portal checks them.",
      },
      {
        heading: "How the form is filed",
        body: "Form CSR-1 is filed online with the digital signature of an authorised person, and it must be certified by a practising chartered accountant, company secretary or cost accountant. The form contains details of the organisation, its registration numbers, its past experience, and its directors or trustees. After the form is processed, the Ministry issues the CSR Registration Number, which the funding company quotes in its own filings. Errors or missing certificates are the most common reasons for delay.",
      },
      {
        heading: "How Taxvio helps NGOs and trusts",
        body: "We verify eligibility, collect the documents, prepare the form and arrange the professional certification and digital signature. After filing, we follow up on the registration and guide you on keeping the organisation's records, annual returns and utilisation certificates in order, since corporate donors ask for them. If your organisation in {location} does not yet have the 12A or 80G approvals, we can also plan those steps so that the full funding eligibility is in place.",
      },
    ],
  },

  /* ───────────────────────── 25. Company Closure ───────────────────────── */
  "company-closure": {
    slug: "company-closure",
    sections: [
      {
        heading: "Why an inactive company should be closed properly",
        body: "A company that has stopped trading does not disappear from the record by itself. The annual filings, auditor's fees, director KYC and tax returns continue to fall due, and a missed filing brings penalties and possible disqualification of the directors. If the Registrar finds that a company has not done business or filed returns for a long time, it can strike off the name on its own, which leaves a negative record. Owners in {location} who have stopped a venture should close it in an orderly way.",
      },
      {
        heading: "Conditions for voluntary strike off",
        body: "A company can apply to have its name struck off by filing Form STK-2 if it has not carried on any business or operation for the two preceding financial years and has not applied to be treated as a dormant company. The shareholders must approve the application, with a special resolution or the consent of seventy-five percent of members by paid-up capital. A company with unpaid dues to banks, the tax departments or employees will usually find the application difficult, so liabilities should be settled first.",
      },
      {
        heading: "Documents and steps in the process",
        body: "The application is supported by an indemnity bond from the directors, an affidavit, a statement of accounts for a recent date showing that there are no assets and liabilities, and the board and shareholder resolutions. After the Registrar examines it, a public notice is issued and objections are invited for thirty days. If there are none, the name is struck off, a notice is published in the Official Gazette and the company is dissolved. Before applying, tax registrations such as GST should be surrendered and the bank account closed.",
      },
      {
        heading: "How Taxvio manages the closure",
        body: "We check whether the company is eligible, help you file the pending returns and settle the liabilities, prepare the documents and file Form STK-2. We then follow up on the notice and the final strike-off order. Share the company's PAN, the latest financial statements and the details of directors and shareholders, and we will manage the closure of your company in {location} from start to finish. A clean closure protects you from later notices and lets you move on to a new venture.",
      },
    ],
  },

  /* ───────────────────────── 26. LLP Closure ───────────────────────── */
  "llp-closure": {
    slug: "llp-closure",
    sections: [
      {
        heading: "Closing an LLP in an orderly way",
        body: "An LLP that has no business or has become inactive still has to file its annual forms, and the penalty for late filing runs at one hundred rupees per day with no upper limit, which can exceed the value of the LLP. The partners remain responsible for these filings until the Registrar strikes off the name of the LLP. Partnerships in {location} that have wound down should therefore apply for closure promptly rather than let the penalties accumulate.",
      },
      {
        heading: "Eligibility and the application in Form 24",
        body: "An LLP can apply to the Registrar to strike off its name by filing Form 24 if it has not carried on any business or operation for a year and has no liabilities, or if it has settled its affairs. The application must be supported by a statement of accounts, an indemnity bond, an affidavit and the consent of the partners. If the LLP has income tax or GST dues, or any pending litigation, these have to be resolved first since they can stop the closure.",
      },
      {
        heading: "Pending returns and tax steps",
        body: "Before applying, the LLP should file all its pending annual returns, pay the additional fees, file the income tax return and surrender its GST registration, and close the bank account. The Registrar can reject the application if the records are incomplete. After the application is accepted, a notice is published, and if no objection is received the name is struck off and notified in the Official Gazette. The LLP then ceases to exist and its registration is cancelled.",
      },
      {
        heading: "How Taxvio supports your LLP closure",
        body: "Our CA-assisted team reviews the LLP's compliance status, prepares the pending filings, drafts the partner consent and the closure documents and files Form 24. We keep track of the notice and the final order and provide a closing file for your records. Share the LLP's PAN, the partner consent letters and the statement of accounts, and your LLP in {location} will be closed in a way that leaves no pending filings behind. If you may want to restart in future, we can also suggest a better structure.",
      },
    ],
  },

  /* ───────────────────── 27. Revival / Restoration of Struck-Off Company ───────────────────── */
  "company-revival-restoration": {
    slug: "company-revival-restoration",
    sections: [
      {
        heading: "What happens when a company is struck off",
        body: "The Registrar can strike off a company from the register if it has not filed its returns for a long time or has stopped doing business. After the strike-off, the company loses its legal existence, the bank account may be frozen, its assets can vest in the government and the directors may face consequences. Many owners discover the problem only when a bank rejects a transaction or a buyer finds the company missing from the register. Businesses in {location} that find themselves in this situation can ask for restoration.",
      },
      {
        heading: "How restoration works",
        body: "A person who is aggrieved, such as a creditor, member, director or employee, can appeal to the National Company Law Tribunal against the strike-off. The appeal must be filed within three years from the date of the order published in the Official Gazette. The Tribunal can order the company to be restored if it is satisfied that the company was carrying on business at the time or that it is just to restore it, and it often imposes conditions such as filing pending returns and paying costs.",
      },
      {
        heading: "Documents and preparation",
        body: "The appeal needs a copy of the strike-off order, the certificate of incorporation, the financial statements and proof of business activity, such as bank statements, invoices and tax records. The applicant must explain why the returns were not filed. We prepare the pending financial statements and returns in advance, since the Tribunal looks at whether the company is ready to resume compliance. A well-prepared petition improves the chances of an order restoring the company.",
      },
      {
        heading: "After the order and how Taxvio helps",
        body: "Once the Tribunal passes the order, a copy must be filed with the Registrar within thirty days, and the Registrar restores the name of the company to the register. The company must then clear the pending filings and update its bank, tax and GST records. Our team assists with the petition, the documentation, hearing follow-up and the filings after restoration. Share the strike-off order and the company's records, and we will tell you honestly whether restoration is likely and what it will take for your company in {location}.",
      },
    ],
  },
};

/* ───────────────────────── Helpers ───────────────────────── */

const fill = (text: string, location: string) => text.replace(/\{location\}/g, location);

/** SEO sections of a service with "{location}" replaced. */
export function getRocServiceSeoContent(slug: string, location = "India"): RocSeoSection[] {
  const entry = rocServiceSeoContent[slug];
  if (!entry) return [];
  return entry.sections.map((s) => ({
    heading: fill(s.heading, location),
    body: fill(s.body, location),
  }));
}

/** Plain text of the whole SEO block (useful for word counts). */
export const getRocServiceSeoText = (slug: string, location = "India") =>
  getRocServiceSeoContent(slug, location)
    .map((s) => `${s.heading}. ${s.body}`)
    .join(" ");