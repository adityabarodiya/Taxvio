// data/gst-services.ts
// The GST category and its services, exactly as you supplied them.
// If you already export this object from your main services file, delete this file and
// point the `gstCategory` import in app/city/gst-services/[city]/page.tsx at yours.

export interface GstService {
  slug: string;
  title: string;
  shortDescription: string;
  features: string[];
  documentsRequired: string[];
  idealFor: string[];
  seo: { title: string; description: string };
}

export interface GstCategory {
  slug: string;
  category: string;
  description: string;
  services: GstService[];
}

export const gstCategory: GstCategory = {
    slug: "gst",
    category: "GST Services",
    description: "Comprehensive GST registration, return filing, and advisory",
    services: [
      {
        slug: "gst-registration",
        title: "GST Registration",
        shortDescription:
          "End-to-end GST registration services including eligibility assessment, documentation, and approval support.",
        features: [
          "GST eligibility consultation",
          "Document preparation & filing",
          "GSTIN allotment support",
          "Post-registration guidance",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Business address proof",
          "Bank account details",
          "Photograph of proprietor/partners",
        ],
        idealFor: [
          "Small & medium businesses",
          "Startups & entrepreneurs",
          "Traders & service providers",
        ],
        seo: {
          title: "GST Registration Services | Taxvio",
          description:
            "Quick and hassle-free GST registration services with expert guidance.",
        },
      },

      {
        slug: "gst-return",
        title: "GST Return Filing",
        shortDescription:
          "Monthly and quarterly GST return filing with reconciliation and compliance checks.",
        features: [
          "GSTR-1, GSTR-3B filing",
          "Invoice reconciliation",
          "Late fee & interest guidance",
          "Compliance monitoring",
        ],
        documentsRequired: [
          "GSTIN",
          "Sales & purchase invoices",
          "Bank statements",
        ],
        idealFor: [
          "Registered GST businesses",
          "Traders & manufacturers",
          "Service providers",
        ],
        seo: {
          title: "GST Return Filing Services",
          description: "Accurate GST return filing for businesses.",
        },
      },

      {
        slug: "gst-refund",
        title: "GST Refund Application",
        shortDescription:
          "Assistance in GST refund applications with proper documentation and follow-ups.",
        features: [
          "Refund eligibility analysis",
          "Application preparation",
          "Department follow-up",
          "Refund tracking",
        ],
        documentsRequired: [
          "GST returns",
          "Export invoices (if applicable)",
          "Bank account details",
        ],
        idealFor: ["Exporters", "Businesses with excess ITC"],
        seo: {
          title: "GST Refund Services",
          description: "Professional support for GST refund claims.",
        },
      },

      {
        slug: "gst-cancellation",
        title: "GST Cancellation",
        shortDescription:
          "Professional assistance for GST cancellation application with proper documentation and closure compliance.",
        features: [
          "Eligibility check",
          "Application filing",
          "Final return guidance",
          "Cancellation order follow-up",
        ],
        documentsRequired: [
          "GSTIN",
          "Reason for cancellation",
          "Business closure proof (if any)",
        ],
        idealFor: ["Closed businesses", "Non-operational GST holders"],
        seo: {
          title: "GST Cancellation Services",
          description:
            "Apply for GST cancellation with expert support and compliance assistance.",
        },
      },

      {
        slug: "gst-amendment",
        title: "GST Amendment / Update",
        shortDescription:
          "Update GST registration details such as address, business name, and contact details with proper filing support.",
        features: [
          "Core field amendment",
          "Non-core field update",
          "Document upload",
          "Approval tracking",
        ],
        documentsRequired: ["GSTIN", "Updated address proof", "PAN / Aadhaar"],
        idealFor: ["Businesses with changed details"],
        seo: {
          title: "GST Amendment Services",
          description:
            "Make changes in GST registration details with professional support.",
        },
      },

      {
        slug: "gst-search",
        title: "GSTIN Search & Verification",
        shortDescription:
          "Instant GSTIN verification to check business legal name, registration status, taxpayer type and jurisdiction details.",
        features: [
          "GSTIN format validation",
          "Real-time GST status check",
          "Legal & trade name verification",
          "Jurisdiction & registration date details",
          "Fraud prevention support",
        ],
        documentsRequired: ["Valid 15-digit GSTIN number"],
        idealFor: [
          "Businesses verifying vendors",
          "Accountants & tax professionals",
          "Buyers claiming Input Tax Credit",
          "Due diligence checks",
        ],
        seo: {
          title: "GSTIN Search & Verification Tool | Check GST Number Online",
          description:
            "Verify GSTIN online instantly. Check GST registration status, legal name, taxpayer type and jurisdiction details with our GST search tool.",
        },
      },

      {
        slug: "gst-lut",
        title: "GST LUT Filing",
        shortDescription:
          "Filing of Letter of Undertaking (LUT) for exporters to supply goods or services without payment of IGST.",
        features: [
          "Eligibility check",
          "LUT preparation",
          "Online filing",
          "Acknowledgement support",
        ],
        documentsRequired: ["GSTIN", "PAN", "Previous LUT (if any)"],
        idealFor: ["Exporters", "Service exporters"],
        seo: {
          title: "GST LUT Filing Services",
          description: "Professional LUT filing services for GST exporters.",
        },
      },

      {
        slug: "gstr-9",
        title: "GST Annual Return (GSTR-9)",
        shortDescription:
          "Preparation and filing of GST annual return with reconciliation and compliance review.",
        features: [
          "Annual data reconciliation",
          "GSTR-9 filing",
          "Error identification",
          "Compliance verification",
        ],
        documentsRequired: [
          "GST returns",
          "Books of accounts",
          "Sales & purchase data",
        ],
        idealFor: ["All GST registered businesses"],
        seo: {
          title: "GSTR-9 Filing Services",
          description:
            "Accurate GST annual return filing with professional assistance.",
        },
      },

      {
        slug: "gst-notice-reply",
        title: "GST Notice Reply & Compliance",
        shortDescription:
          "Expert assistance in drafting and filing replies to GST notices and departmental queries.",
        features: [
          "Notice analysis",
          "Reply drafting",
          "Document submission",
          "Case follow-up",
        ],
        documentsRequired: [
          "GST notice",
          "GST returns",
          "Supporting documents",
        ],
        idealFor: ["Businesses receiving GST notices"],
        seo: {
          title: "GST Notice Reply Services",
          description: "Professional GST notice reply and compliance services.",
        },
      },

      {
        slug: "gst-audit",
        title: "GST Audit Assistance",
        shortDescription:
          "Complete support for GST audit including reconciliation, documentation, and departmental coordination.",
        features: [
          "Audit applicability check",
          "Data reconciliation",
          "Audit report preparation",
          "Department coordination",
        ],
        documentsRequired: [
          "GST returns",
          "Sales & purchase registers",
          "Books of accounts",
        ],
        idealFor: ["Large businesses", "Entities under GST audit"],
        seo: {
          title: "GST Audit Services",
          description: "Expert GST audit assistance and compliance services.",
        },
      },

      {
        slug: "gst-e-invoicing",
        title: "GST E-Invoicing Setup & Compliance",
        shortDescription:
          "Implementation and compliance support for GST e-invoicing including IRN generation and system setup.",
        features: [
          "E-invoice registration",
          "IRN generation support",
          "System integration",
          "Compliance monitoring",
        ],
        documentsRequired: ["GSTIN", "Accounting software access"],
        idealFor: ["Large businesses", "High turnover entities"],
        seo: {
          title: "GST E-Invoicing Services",
          description:
            "Professional e-invoicing compliance support for GST registered businesses.",
        },
      },

      /* ── NEW ── */
      {
        slug: "gst-for-e-commerce",
        title: "GST for E-Commerce Sellers & Operators",
        shortDescription:
          "Complete GST compliance for Amazon, Flipkart, Meesho, Shopify and D2C sellers — registration, marketplace reconciliation, TCS credit matching, GSTR-8 and GST notice support.",
        features: [
          "GST registration & marketplace GSTIN setup",
          "Monthly GSTR-1 & GSTR-3B filing",
          "Marketplace settlement reconciliation",
          "GST TCS credit matching (Section 52)",
          "GSTR-8 compliance for ECOs",
          "Section 9(5) advisory — Zomato, Swiggy",
          "GST notice & mismatch support",
        ],
        documentsRequired: [
          "PAN card of proprietor / firm / company",
          "Aadhaar card (mobile-linked)",
          "Business address proof",
          "Bank account details",
          "Amazon / Flipkart / Meesho settlement reports",
          "Marketplace sales and return reports",
          "Commission and shipping fee invoices",
        ],
        idealFor: [
          "Amazon, Flipkart and Meesho sellers",
          "Shopify and D2C brands",
          "Restaurants on Zomato / Swiggy",
          "ONDC and multi-platform sellers",
          "E-commerce operators collecting TCS",
        ],
        seo: {
          title:
            "GST for E-Commerce Sellers & Operators — Amazon, Flipkart, Meesho | Taxvio",
          description:
            "GST registration, GSTR-1, GSTR-3B, GSTR-8, marketplace settlement reconciliation, TCS credit matching and GST notice support for Amazon, Flipkart, Meesho, Shopify and D2C sellers. Starting ₹1,499.",
        },
      },

      /* ── NEW ── */
      {
        slug: "gst-for-freelancers",
        title: "GST for Freelancers & Independent Professionals",
        shortDescription:
          "End-to-end GST setup for developers, designers, consultants and content creators — registration, LUT for zero-rated foreign client billing, SAC code mapping, GSTR-1, GSTR-3B, ITC on business tools and RCM compliance.",
        features: [
          "GST registration for freelancers",
          "LUT filing (Form RFD-11) for foreign clients",
          "Zero-rated export invoice setup",
          "SAC code identification & invoice format",
          "Monthly GSTR-1 & GSTR-3B filing",
          "ITC on laptop, software & business tools",
          "QRMP scheme advisory",
          "RCM review for foreign subscriptions",
          "GST notice & mismatch support",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card (mobile-linked)",
          "Business address proof",
          "Bank account details",
          "Photograph of proprietor",
          "Previous LUT acknowledgement (if renewal)",
          "FIRC / FIRA for past export invoices (if any)",
        ],
        idealFor: [
          "IT & software developers",
          "Graphic designers & UI/UX professionals",
          "Content writers & copywriters",
          "Management & business consultants",
          "Digital marketers & SEO specialists",
          "Chartered accountants & lawyers",
          "Freelancers billing foreign clients",
        ],
        seo: {
          title:
            "GST for Freelancers India — Registration, LUT, Returns & Foreign Client Billing | Taxvio",
          description:
            "GST registration, LUT for zero-rated foreign billing, SAC code setup, GSTR-1, GSTR-3B, ITC on business tools and RCM compliance for freelancers and independent professionals. Starting ₹1,499.",
        },
      },
      /**
 * New GST services — paste these objects into the `services` array
 * of the `gst` category, right after "gst-for-freelancers".
 */

      {
        slug: "gst-composition-scheme",
        title: "GST Composition Scheme Registration & Advisory",
        shortDescription:
          "Registration and advisory for the GST Composition Scheme, helping small businesses reduce compliance burden with lower tax rates and simplified quarterly filing.",
        features: [
          "Composition scheme eligibility check",
          "CMP-02 application filing",
          "Quarterly CMP-08 payment support",
          "Annual GSTR-4 filing",
          "Rate applicability advisory",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Business address proof",
          "Turnover details",
          "Bank account details",
        ],
        idealFor: [
          "Small traders & manufacturers",
          "Restaurants & small eateries",
          "Businesses with turnover under ₹1.5 crore",
          "First-time GST registrants",
        ],
        seo: {
          title: "GST Composition Scheme Registration Services | Taxvio",
          description:
            "Register under the GST Composition Scheme for lower tax rates and simplified quarterly compliance. Expert eligibility check and CMP-08/GSTR-4 filing support.",
        },
      },

      {
        slug: "gst-itc-reconciliation",
        title: "GST Input Tax Credit (ITC) Reconciliation",
        shortDescription:
          "Systematic reconciliation of GSTR-2B and purchase books to identify ITC mismatches, ensure maximum eligible credit claim, and prevent notices.",
        features: [
          "GSTR-2B vs purchase register matching",
          "Vendor-wise mismatch identification",
          "ITC eligibility review",
          "Reversal & reclaim advisory",
          "Monthly reconciliation reports",
        ],
        documentsRequired: [
          "GSTIN",
          "Purchase invoices",
          "GSTR-2B statements",
          "Books of accounts",
        ],
        idealFor: [
          "Businesses with high purchase volumes",
          "Manufacturers & traders",
          "Companies facing ITC mismatches",
        ],
        seo: {
          title: "GST ITC Reconciliation Services | Taxvio",
          description:
            "Accurate GSTR-2B vs books reconciliation to maximize eligible input tax credit and avoid GST notices. Monthly ITC matching for businesses.",
        },
      },

      {
        slug: "gst-revocation",
        title: "GST Registration Revocation",
        shortDescription:
          "Assistance in filing revocation applications to restore cancelled GST registrations and resume normal business operations.",
        features: [
          "Cancellation order review",
          "Revocation application (REG-21) filing",
          "Pending return clearance support",
          "Department follow-up",
        ],
        documentsRequired: [
          "GSTIN",
          "Cancellation order copy",
          "Pending returns",
          "Reason for revocation",
        ],
        idealFor: [
          "Businesses with suo-moto cancelled GST",
          "Entities seeking to resume operations",
        ],
        seo: {
          title: "GST Registration Revocation Services | Taxvio",
          description:
            "Restore your cancelled GST registration with expert revocation application filing and department follow-up support.",
        },
      },

      {
        slug: "gstr-10-final-return",
        title: "GSTR-10 Final Return Filing",
        shortDescription:
          "Filing of the mandatory final return after GST cancellation, including stock and liability reconciliation to close compliance obligations.",
        features: [
          "Closing stock valuation",
          "ITC reversal computation",
          "GSTR-10 preparation & filing",
          "Acknowledgement support",
        ],
        documentsRequired: [
          "GSTIN",
          "Cancellation order",
          "Closing stock details",
          "Books of accounts",
        ],
        idealFor: [
          "Businesses that have cancelled GST registration",
          "Closed proprietorships & firms",
        ],
        seo: {
          title: "GSTR-10 Final Return Filing Services | Taxvio",
          description:
            "File your mandatory GSTR-10 final return after GST cancellation with accurate stock and liability reconciliation.",
        },
      },

      {
        slug: "gst-tds-compliance",
        title: "GST TDS Compliance (Section 51)",
        shortDescription:
          "Compliance support for entities required to deduct GST TDS, including GSTR-7 filing and TDS certificate issuance.",
        features: [
          "TDS applicability check",
          "GSTR-7 monthly filing",
          "TDS certificate (GSTR-7A) generation",
          "Deductee reconciliation",
        ],
        documentsRequired: [
          "GSTIN",
          "TDS deduction records",
          "Contract/payment details",
          "Deductee GSTIN details",
        ],
        idealFor: [
          "Government departments & PSUs",
          "Local authorities",
          "Notified entities under Section 51",
        ],
        seo: {
          title: "GST TDS Compliance & GSTR-7 Filing Services | Taxvio",
          description:
            "GST TDS deduction compliance for government departments and notified entities, including GSTR-7 filing and certificate issuance.",
        },
      },

      {
        slug: "gst-eway-bill",
        title: "GST E-Way Bill Generation & Compliance",
        shortDescription:
          "End-to-end e-way bill generation, validation, and compliance support for smooth movement of goods without transit delays.",
        features: [
          "E-way bill generation & updation",
          "Vehicle & transporter detail management",
          "Validity extension support",
          "Compliance audit for transporters",
        ],
        documentsRequired: [
          "GSTIN",
          "Invoice/delivery challan",
          "Transporter ID",
          "Vehicle number",
        ],
        idealFor: [
          "Manufacturers & transporters",
          "Businesses dispatching goods interstate",
          "Logistics & distribution companies",
        ],
        seo: {
          title: "GST E-Way Bill Generation Services | Taxvio",
          description:
            "Fast and accurate e-way bill generation and compliance support for smooth movement of goods across states.",
        },
      },

      {
        slug: "gst-appeal-filing",
        title: "GST Appeal Filing",
        shortDescription:
          "Drafting and filing of appeals before the GST Appellate Authority against adverse orders, with representation support.",
        features: [
          "Order analysis & grounds preparation",
          "Appeal (APL-01) drafting & filing",
          "Pre-deposit computation",
          "Hearing representation support",
        ],
        documentsRequired: [
          "Impugned order copy",
          "GST returns",
          "Supporting evidence",
          "Payment proof of pre-deposit",
        ],
        idealFor: [
          "Businesses contesting GST demand orders",
          "Entities facing adverse assessment orders",
        ],
        seo: {
          title: "GST Appeal Filing Services | Taxvio",
          description:
            "Expert drafting and filing of GST appeals before the Appellate Authority, with grounds preparation and hearing support.",
        },
      },

      {
        slug: "gst-advance-ruling",
        title: "GST Advance Ruling Application (AAR)",
        shortDescription:
          "Preparation and filing of advance ruling applications to obtain clarity on GST rate, classification, or applicability before undertaking a transaction.",
        features: [
          "Applicability & classification analysis",
          "Application (ARA-01) drafting",
          "Supporting documentation",
          "Hearing representation support",
        ],
        documentsRequired: [
          "PAN",
          "GSTIN",
          "Transaction details",
          "Relevant contracts/agreements",
        ],
        idealFor: [
          "Businesses planning new product lines",
          "Entities with classification ambiguity",
          "Companies structuring new transactions",
        ],
        seo: {
          title: "GST Advance Ruling Application Services | Taxvio",
          description:
            "Get clarity on GST rate, classification, or applicability before your transaction with expert advance ruling application support.",
        },
      },

      {
        slug: "gst-job-work",
        title: "GST Job Work Compliance (ITC-04)",
        shortDescription:
          "Compliance support for principal manufacturers sending goods for job work, including ITC-04 filing and challan reconciliation.",
        features: [
          "Job work challan tracking",
          "ITC-04 preparation & filing",
          "Input/capital goods reconciliation",
          "Time-limit compliance monitoring",
        ],
        documentsRequired: [
          "GSTIN",
          "Job work challans",
          "Goods movement records",
          "Job worker details",
        ],
        idealFor: [
          "Manufacturers outsourcing production",
          "Textile & engineering units",
          "Businesses with job worker networks",
        ],
        seo: {
          title: "GST Job Work Compliance & ITC-04 Filing | Taxvio",
          description:
            "ITC-04 filing and job work challan reconciliation for manufacturers sending goods to job workers under GST.",
        },
      },

      {
        slug: "gst-composition-to-regular",
        title: "Composition to Regular Scheme Transition",
        shortDescription:
          "Support for businesses moving from the Composition Scheme to the regular GST scheme, including stock ITC claims and return transition.",
        features: [
          "Transition eligibility review",
          "ITC-01 stock credit claim",
          "CMP-04 withdrawal filing",
          "Regular return transition support",
        ],
        documentsRequired: [
          "GSTIN",
          "Composition scheme details",
          "Stock statement",
          "Purchase invoices for ITC claim",
        ],
        idealFor: [
          "Growing businesses crossing turnover limits",
          "Composition dealers opting for regular scheme",
        ],
        seo: {
          title: "GST Composition to Regular Scheme Transition Services | Taxvio",
          description:
            "Move from GST Composition Scheme to regular scheme with expert support for stock ITC claims and return transition.",
        },
      },

      {
        slug: "gst-hsn-sac-classification",
        title: "HSN/SAC Code Classification Advisory",
        shortDescription:
          "Expert advisory on correct HSN and SAC code classification for goods and services to ensure accurate tax rates and invoice compliance.",
        features: [
          "Product & service classification review",
          "Applicable GST rate determination",
          "Invoice format correction",
          "Classification dispute advisory",
        ],
        documentsRequired: [
          "Product/service description",
          "Existing invoices",
          "Catalogue or specification sheets",
        ],
        idealFor: [
          "Manufacturers & traders",
          "New product launches",
          "Businesses facing classification disputes",
        ],
        seo: {
          title: "GST HSN/SAC Code Classification Advisory | Taxvio",
          description:
            "Accurate HSN and SAC code classification advisory to ensure correct GST rates and compliant invoicing for your goods and services.",
        },
      },

      {
        slug: "gst-for-restaurants",
        title: "GST for Restaurants & Hospitality",
        shortDescription:
          "GST compliance tailored for restaurants, cafes, cloud kitchens and hotels — registration, composition scheme advisory, and platform reconciliation for Zomato/Swiggy sellers.",
        features: [
          "GST registration & composition advisory",
          "Section 9(5) compliance for aggregator platforms",
          "Monthly GSTR-1 & GSTR-3B filing",
          "Zomato/Swiggy settlement reconciliation",
          "Input tax credit review on inputs",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "FSSAI license",
          "Business address proof",
          "Platform settlement reports",
        ],
        idealFor: [
          "Restaurants & cafes",
          "Cloud kitchens",
          "Hotels & banquet halls",
          "Zomato/Swiggy-listed outlets",
        ],
        seo: {
          title: "GST for Restaurants & Hospitality Businesses | Taxvio",
          description:
            "GST registration, composition scheme advisory, Section 9(5) compliance and platform reconciliation for restaurants, cloud kitchens and hotels.",
        },
      },

      {
        slug: "gst-for-manufacturers",
        title: "GST for Manufacturers & Job Workers",
        shortDescription:
          "Comprehensive GST compliance for manufacturing units, covering input credit optimization, job work tracking, and multi-state registration support.",
        features: [
          "GST registration across multiple states",
          "ITC optimization on raw materials & capital goods",
          "Job work (ITC-04) tracking",
          "GSTR-1 & GSTR-3B filing",
          "E-way bill & stock transfer compliance",
        ],
        documentsRequired: [
          "PAN card",
          "Factory address proof",
          "GST returns",
          "Purchase & sales registers",
          "Job work challans",
        ],
        idealFor: [
          "Manufacturing units",
          "Textile & engineering firms",
          "Businesses with multi-state factories",
        ],
        seo: {
          title: "GST for Manufacturers & Job Workers | Taxvio",
          description:
            "End-to-end GST compliance for manufacturing units including ITC optimization, job work tracking, multi-state registration and e-way bill support.",
        },
      },

      {
        slug: "gst-for-real-estate",
        title: "GST for Real Estate & Construction",
        shortDescription:
          "GST advisory and compliance for builders, developers and contractors, covering rate applicability, ITC restrictions, and RERA-linked filings.",
        features: [
          "GST rate applicability (affordable vs regular housing)",
          "ITC eligibility & reversal advisory",
          "Joint development agreement structuring",
          "GSTR-1 & GSTR-3B filing",
          "RCM compliance on works contracts",
        ],
        documentsRequired: [
          "PAN card",
          "RERA registration",
          "Project cost sheet",
          "Sale agreements",
          "Purchase invoices",
        ],
        idealFor: [
          "Real estate developers",
          "Building contractors",
          "Works contract service providers",
        ],
        seo: {
          title: "GST for Real Estate & Construction Businesses | Taxvio",
          description:
            "GST compliance for builders, developers and contractors including rate applicability, ITC advisory and works contract RCM support.",
        },
      },

      {
        slug: "gst-for-importers-exporters",
        title: "GST for Importers & Exporters",
        shortDescription:
          "Specialized GST compliance for import-export businesses, covering IGST on imports, export documentation, and refund coordination.",
        features: [
          "IGST payment advisory on imports",
          "Bill of Entry to GST reconciliation",
          "Export invoice & shipping bill matching",
          "LUT and refund coordination",
          "RCM compliance on import of services",
        ],
        documentsRequired: [
          "IEC code",
          "Bill of Entry",
          "Shipping bills",
          "GSTIN",
          "Import/export invoices",
        ],
        idealFor: [
          "Import-export businesses",
          "Trading companies",
          "Merchant exporters",
        ],
        seo: {
          title: "GST for Importers & Exporters | Taxvio",
          description:
            "GST compliance for import-export businesses including IGST advisory, Bill of Entry reconciliation, export documentation and refund coordination.",
        },
      },

    ],
  };