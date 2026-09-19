import { ServiceCategory } from "@/types/serviceTypes";

export const serviceCategories: ServiceCategory[] = [

  /* ================= FSSAI ================= */
  {
    slug: "fssai",
    category: "FSSAI Services",
    description:
      "FSSAI registration, license renewal, modification, annual return filing and food compliance support for restaurants, manufacturers and food businesses across India.",
    services: [
      {
        slug: "fssai-registration",
        title: "FSSAI Registration (Basic / State / Central)",
        shortDescription:
          "Complete assistance in obtaining FSSAI food license including Basic, State and Central registration with documentation and approval support.",
        features: [
          "Eligibility assessment",
          "Basic FSSAI registration",
          "State license filing",
          "Central license filing",
          "Document preparation",
          "Approval tracking",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Business address proof",
          "Food business details",
          "Product list",
        ],
        idealFor: [
          "Restaurants & cafes",
          "Cloud kitchens",
          "Food manufacturers",
          "Food importers/exporters",
          "Grocery stores",
        ],
        seo: {
          title: "FSSAI Registration Services | Basic, State & Central License",
          description:
            "Apply for FSSAI registration online with expert support. Get Basic, State or Central food license with complete documentation assistance.",
        },
      },

      {
        slug: "fssai-renewal",
        title: "FSSAI License Renewal",
        shortDescription:
          "Timely renewal of FSSAI license to avoid penalties and business interruption.",
        features: [
          "Renewal eligibility check",
          "Document update",
          "Online filing",
          "Validity extension",
        ],
        documentsRequired: [
          "Existing FSSAI license",
          "Updated business details",
        ],
        idealFor: ["Existing food businesses"],
        seo: {
          title: "FSSAI Renewal Services | Renew Food License Online",
          description:
            "Renew your FSSAI food license easily and avoid penalties with professional support.",
        },
      },

      {
        slug: "fssai-modification",
        title: "FSSAI License Modification",
        shortDescription:
          "Update FSSAI license details such as address, product category, or business structure.",
        features: [
          "Core field modification",
          "Non-core field update",
          "Document upload",
          "Approval tracking",
        ],
        documentsRequired: ["Existing FSSAI license", "Updated business proof"],
        idealFor: ["Food businesses with changed details"],
        seo: {
          title: "FSSAI License Modification Services",
          description:
            "Modify or update your FSSAI license details with expert compliance support.",
        },
      },

      {
        slug: "fssai-annual-return",
        title: "FSSAI Annual Return Filing",
        shortDescription:
          "Preparation and filing of FSSAI annual return for manufacturers and importers as per FSSAI regulations.",
        features: [
          "Return preparation",
          "Online filing",
          "Compliance verification",
          "Penalty guidance",
        ],
        documentsRequired: ["FSSAI license", "Production & sales data"],
        idealFor: ["Food manufacturers", "Food importers"],
        seo: {
          title: "FSSAI Annual Return Filing Services",
          description:
            "Professional FSSAI annual return filing services for manufacturers and importers.",
        },
      },

      {
        slug: "fssai-notice-reply",
        title: "FSSAI Notice Reply & Compliance",
        shortDescription:
          "Expert drafting and response filing for FSSAI notices and departmental queries.",
        features: [
          "Notice analysis",
          "Reply drafting",
          "Supporting document submission",
          "Department coordination",
        ],
        documentsRequired: [
          "FSSAI notice",
          "License copy",
          "Supporting records",
        ],
        idealFor: ["Food businesses receiving FSSAI notices"],
        seo: {
          title: "FSSAI Notice Reply Services",
          description:
            "Professional assistance in replying to FSSAI notices and handling compliance matters.",
        },
      },

      {
        slug: "fssai-search",
        title: "FSSAI License Search & Verification",
        shortDescription:
          "Verify FSSAI license number and check food business registration details instantly.",
        features: [
          "License number verification",
          "Business name check",
          "License validity status",
          "Fraud prevention support",
        ],
        documentsRequired: ["FSSAI license number"],
        idealFor: ["Businesses verifying vendors", "Distributors", "Consumers"],
        seo: {
          title: "FSSAI License Search Online",
          description:
            "Verify FSSAI license number online and check registration details instantly.",
        },
      },
    ],
  },
  /* ================= GST ================= */
  {
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
  },

  /* ================= INCOME TAX ================= */
  {
    slug: "income-tax",
    category: "Income Tax",
    description:
      "Complete income tax services for individuals, firms, and corporates",
    services: [
      {
        slug: "pan-card",
        title: "PAN Card",
        shortDescription:
          "Complete assistance for new PAN card application, correction, reissue, and demographic updates with proper compliance support.",
        features: [
          "New PAN card application",
          "PAN correction & reprint",
          "Name, DOB & address update",
          "PAN status tracking support",
        ],
        documentsRequired: [
          "Aadhaar card",
          "Address proof",
          "Date of birth proof",
          "Passport size photograph",
        ],
        idealFor: [
          "Individuals applying for PAN for the first time",
          "Students & salaried employees",
          "Business owners & professionals",
        ],
        seo: {
          title: "PAN Card Services in India | Taxvio",
          description:
            "Apply for new PAN card, correction, reissue, and PAN-related services with expert support.",
        },
      },

      {
        slug: "tan-application",
        title: "TAN Application",
        shortDescription:
          "End-to-end support for TAN application for businesses and professionals liable to deduct or collect tax at source.",
        features: [
          "New TAN application",
          "Correction in existing TAN",
          "TAN allotment tracking",
          "Compliance guidance for TDS/TCS",
        ],
        documentsRequired: [
          "PAN of deductor",
          "Proof of business registration",
          "Address proof",
          "Authorized signatory ID proof",
        ],
        idealFor: [
          "Employers",
          "Businesses deducting TDS",
          "Companies & firms",
        ],
        seo: {
          title: "TAN Application Services | Taxvio",
          description:
            "Professional assistance for TAN registration and compliance in India.",
        },
      },

      {
        slug: "efiling-login-assistance",
        title: "E-Filing Login & Portal Assistance",
        shortDescription:
          "Complete support for income tax e-filing portal registration, login issues, password reset, and portal navigation.",
        features: [
          "E-filing portal registration",
          "Login credential recovery",
          "Password reset assistance",
          "Portal navigation guidance",
          "Profile update support",
          "EVC generation help",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Mobile number & email ID",
          "Bank account details",
        ],
        idealFor: [
          "First-time tax filers",
          "Individuals facing login issues",
          "Senior citizens needing technical support",
        ],
        seo: {
          title: "E-Filing Login & Portal Assistance | Taxvio",
          description:
            "Expert help for income tax e-filing portal registration, login, and navigation.",
        },
      },

      {
        slug: "itr-salaried",
        title: "Income Tax Return – Individual (Salaried)",
        shortDescription:
          "Accurate income tax return filing for salaried individuals ensuring maximum deductions, compliance, and timely submission.",
        features: [
          "ITR filing with tax computation",
          "Deduction & exemption optimization",
          "Form 16 verification",
          "E-filing with acknowledgement",
        ],
        documentsRequired: [
          "Form 16",
          "Salary slips",
          "Investment proofs",
          "Bank statement",
          "Aadhaar & PAN",
        ],
        idealFor: [
          "Salaried employees",
          "Private & government job holders",
          "Individuals with multiple Form 16s",
        ],
        seo: {
          title: "ITR Filing for Salaried Individuals",
          description:
            "Professional income tax return filing services for salaried employees in India.",
        },
      },

      {
        slug: "itr-proprietor",
        title: "Income Tax Return – Individual Proprietor",
        shortDescription:
          "ITR filing services for proprietors with business income, including balance sheet and profit & loss preparation.",
        features: [
          "Business income computation",
          "P&L and balance sheet preparation",
          "Tax saving advisory",
          "ITR filing & verification",
        ],
        documentsRequired: [
          "PAN & Aadhaar",
          "Business bank statements",
          "Sales & expense records",
          "Previous ITR (if any)",
        ],
        idealFor: ["Shop owners", "Freelancers", "Small business proprietors"],
        seo: {
          title: "ITR Filing for Proprietors",
          description:
            "Professional income tax return filing for proprietors and small businesses.",
        },
      },

      {
        slug: "itr-firm-llp",
        title: "Income Tax Return – Firm / LLP",
        shortDescription:
          "Comprehensive ITR filing for partnership firms and LLPs ensuring statutory compliance and timely submissions.",
        features: [
          "Firm/LLP income computation",
          "Partner capital & profit sharing",
          "Tax audit coordination",
          "ITR filing & verification",
        ],
        documentsRequired: [
          "PAN of firm/LLP",
          "Partnership/LLP agreement",
          "Financial statements",
          "Bank statements",
        ],
        idealFor: ["Partnership firms", "LLPs", "Professional firms"],
        seo: {
          title: "ITR Filing for Firm & LLP",
          description:
            "Expert income tax return filing for firms and LLPs in India.",
        },
      },

      {
        slug: "itr-trust-company",
        title: "Income Tax Return – Trust / Pvt Ltd / Public Ltd",
        shortDescription:
          "Specialized income tax return filing for trusts and companies with complete compliance and audit coordination.",
        features: [
          "Corporate & trust ITR filing",
          "Compliance with applicable sections",
          "Audit coordination support",
          "Notice handling assistance",
        ],
        documentsRequired: [
          "PAN of entity",
          "Incorporation/Trust deed",
          "Audited financial statements",
          "Bank statements",
        ],
        idealFor: [
          "Private limited companies",
          "Public limited companies",
          "Trusts & NGOs",
        ],
        seo: {
          title: "ITR Filing for Trusts & Companies",
          description:
            "Reliable ITR filing services for trusts and corporate entities.",
        },
      },

      {
        slug: "revised-itr",
        title: "Revised Income Tax Return",
        shortDescription:
          "File revised ITR to correct errors or omissions in originally filed returns with expert guidance.",
        features: [
          "Error identification & correction",
          "Additional income reporting",
          "Deduction claim revision",
          "Updated return filing",
        ],
        documentsRequired: [
          "Original ITR acknowledgement",
          "Corrected documents",
          "Additional income proofs",
          "PAN & Aadhaar",
        ],
        idealFor: [
          "Individuals who made filing errors",
          "Those who missed income disclosure",
          "Taxpayers wanting to claim additional deductions",
        ],
        seo: {
          title: "Revised ITR Filing Services | Taxvio",
          description:
            "Expert assistance for filing revised income tax returns in India.",
        },
      },

      {
        slug: "belated-itr",
        title: "Belated Income Tax Return",
        shortDescription:
          "File belated ITR after the due date with penalty calculation and compliance support.",
        features: [
          "Late fee calculation",
          "Belated return preparation",
          "Interest computation",
          "Filing & verification support",
        ],
        documentsRequired: [
          "PAN & Aadhaar",
          "Income documents",
          "Investment proofs",
          "Bank statements",
        ],
        idealFor: [
          "Individuals who missed the deadline",
          "First-time late filers",
          "Business owners",
        ],
        seo: {
          title: "Belated ITR Filing Services | Taxvio",
          description:
            "Professional support for filing belated income tax returns.",
        },
      },

      {
        slug: "itr-verification",
        title: "ITR Verification (EVC/Aadhaar OTP)",
        shortDescription:
          "Complete assistance for ITR verification through EVC, Aadhaar OTP, or physical method.",
        features: [
          "EVC generation support",
          "Aadhaar OTP verification",
          "Bank account verification",
          "Physical ITR-V guidance",
        ],
        documentsRequired: [
          "Filed ITR acknowledgement",
          "Aadhaar card",
          "Registered mobile number",
          "Active email ID",
        ],
        idealFor: [
          "All ITR filers",
          "Individuals facing verification issues",
          "Senior citizens",
        ],
        seo: {
          title: "ITR Verification Services | Taxvio",
          description:
            "Expert help for income tax return verification through all methods.",
        },
      },

      {
        slug: "quarterly-tds",
        title: "Quarterly TDS Return",
        shortDescription:
          "Preparation and filing of quarterly TDS returns with accurate reconciliation and timely compliance.",
        features: [
          "TDS computation",
          "Return filing (24Q, 26Q, 27Q)",
          "Challan reconciliation",
          "TDS certificate guidance",
        ],
        documentsRequired: [
          "TAN",
          "Challan details",
          "Deductee details",
          "Salary/payment records",
        ],
        idealFor: ["Employers", "Businesses", "Companies & firms"],
        seo: {
          title: "Quarterly TDS Return Filing",
          description:
            "Professional TDS return filing services for businesses and employers.",
        },
      },

      {
        slug: "quarterly-tcs",
        title: "Quarterly TCS Return",
        shortDescription:
          "Assistance in quarterly TCS return filing ensuring correct reporting and statutory adherence.",
        features: [
          "TCS computation",
          "Return filing",
          "Challan reconciliation",
          "Compliance support",
        ],
        documentsRequired: [
          "TAN",
          "TCS challan details",
          "Collector & collectee details",
        ],
        idealFor: [
          "Scrap dealers",
          "Liquor traders",
          "Specified goods sellers",
        ],
        seo: {
          title: "Quarterly TCS Return Filing",
          description: "Accurate and timely TCS return filing services.",
        },
      },

      {
        slug: "tds-certificate",
        title: "TDS Certificate (Form 16/16A)",
        shortDescription:
          "Generation and issuance of TDS certificates for employees and vendors with proper compliance.",
        features: [
          "Form 16 generation",
          "Form 16A preparation",
          "Certificate validation",
          "Bulk certificate generation",
        ],
        documentsRequired: [
          "TAN",
          "Filed TDS returns",
          "Deductee PAN details",
          "Challan proofs",
        ],
        idealFor: [
          "Employers",
          "Companies",
          "Businesses making TDS payments",
        ],
        seo: {
          title: "TDS Certificate Generation Services | Taxvio",
          description:
            "Professional TDS certificate preparation and issuance services.",
        },
      },

      {
        slug: "form-26as",
        title: "Form 26AS Download & Analysis",
        shortDescription:
          "Assistance in downloading and analyzing Form 26AS to verify tax credits and TDS claims.",
        features: [
          "26AS download support",
          "TDS/TCS verification",
          "Mismatch identification",
          "Reconciliation guidance",
        ],
        documentsRequired: [
          "PAN card",
          "E-filing login credentials",
          "ITR details",
        ],
        idealFor: [
          "All taxpayers",
          "Businesses verifying TDS credits",
          "Individuals facing TDS issues",
        ],
        seo: {
          title: "Form 26AS Services | Taxvio",
          description:
            "Expert assistance for Form 26AS download and tax credit verification.",
        },
      },

      {
        slug: "advance-tax-calculation",
        title: "Advance Tax Calculation & Payment",
        shortDescription:
          "Professional calculation and payment assistance for advance tax to avoid interest penalties.",
        features: [
          "Tax liability estimation",
          "Installment calculation",
          "Payment challan generation",
          "Due date reminders",
        ],
        documentsRequired: [
          "PAN card",
          "Income estimates",
          "Previous year ITR",
          "Investment proofs",
        ],
        idealFor: [
          "Self-employed individuals",
          "Business owners",
          "Professionals with non-salary income",
        ],
        seo: {
          title: "Advance Tax Calculation Services | Taxvio",
          description:
            "Expert advance tax calculation and payment support in India.",
        },
      },

      {
        slug: "income-tax-refund",
        title: "Income Tax Refund Status & Processing",
        shortDescription:
          "Track and expedite income tax refund processing with expert follow-up support.",
        features: [
          "Refund status tracking",
          "Refund claim assistance",
          "Defective return rectification",
          "Reissue request support",
        ],
        documentsRequired: [
          "ITR acknowledgement",
          "PAN card",
          "Bank account details",
          "Assessment order (if any)",
        ],
        idealFor: [
          "Taxpayers awaiting refunds",
          "Individuals with defective returns",
          "Long-pending refund cases",
        ],
        seo: {
          title: "Income Tax Refund Services | Taxvio",
          description:
            "Professional assistance for income tax refund tracking and processing.",
        },
      },

      {
        slug: "income-tax-notice",
        title: "Income Tax Notice Response & Resolution",
        shortDescription:
          "Expert handling of all types of income tax notices with proper documentation and representation.",
        features: [
          "Notice analysis & interpretation",
          "Response drafting",
          "Document preparation",
          "Online/offline representation",
        ],
        documentsRequired: [
          "Notice copy",
          "ITR & supporting documents",
          "PAN card",
          "Relevant financial records",
        ],
        idealFor: [
          "Individuals receiving notices",
          "Businesses under scrutiny",
          "Cases with demand notices",
        ],
        seo: {
          title: "Income Tax Notice Response Services | Taxvio",
          description:
            "Expert assistance for handling income tax notices and demands.",
        },
      },

      {
        slug: "income-tax-audit",
        title: "Income Tax Audit Compliance Assistance",
        shortDescription:
          "Complete support for income tax audit compliance including documentation, coordination, and reporting.",
        features: [
          "Audit applicability assessment",
          "Document preparation",
          "Audit coordination",
          "Report submission support",
        ],
        documentsRequired: [
          "Books of accounts",
          "Bank statements",
          "Invoices & vouchers",
          "Previous audit reports",
        ],
        idealFor: [
          "Businesses under audit",
          "Professionals",
          "Companies & firms",
        ],
        seo: {
          title: "Income Tax Audit Assistance",
          description:
            "Expert assistance for income tax audit compliance and documentation.",
        },
      },

      {
        slug: "income-tax-scrutiny",
        title: "Income Tax Scrutiny & Financial Assessment",
        shortDescription:
          "Professional representation and support during income tax scrutiny, notices, and financial assessments.",
        features: [
          "Notice analysis",
          "Reply drafting",
          "Online/offline representation",
          "Assessment closure support",
        ],
        documentsRequired: [
          "Scrutiny notice",
          "ITR & computation",
          "Supporting financial documents",
        ],
        idealFor: [
          "Individual taxpayers",
          "Businesses",
          "Companies under assessment",
        ],
        seo: {
          title: "Income Tax Scrutiny Services",
          description:
            "Reliable assistance for income tax scrutiny and assessment proceedings.",
        },
      },

      {
        slug: "tax-appeal-filing",
        title: "Tax Appeal Filing (CIT-A/ITAT/HC)",
        shortDescription:
          "Professional representation for filing appeals before CIT(A), ITAT, and High Court against adverse orders.",
        features: [
          "Grounds of appeal drafting",
          "Legal documentation",
          "Hearing representation",
          "Follow-up till disposal",
        ],
        documentsRequired: [
          "Assessment order",
          "ITR & supporting documents",
          "Previous correspondence",
          "PAN card",
        ],
        idealFor: [
          "Taxpayers with adverse orders",
          "High-value disputes",
          "Complex tax cases",
        ],
        seo: {
          title: "Tax Appeal Filing Services | Taxvio",
          description:
            "Expert legal assistance for income tax appeals in India.",
        },
      },

      {
        slug: "rectification-request",
        title: "Rectification Request (Section 154)",
        shortDescription:
          "File rectification requests for apparent errors or mistakes in assessment orders.",
        features: [
          "Error identification",
          "Rectification application drafting",
          "Supporting document compilation",
          "Follow-up with department",
        ],
        documentsRequired: [
          "Assessment order",
          "Error proof documents",
          "ITR copy",
          "PAN card",
        ],
        idealFor: [
          "Taxpayers with clerical errors",
          "Cases with calculation mistakes",
          "Wrong credit claims",
        ],
        seo: {
          title: "Rectification Request Services | Taxvio",
          description:
            "Professional assistance for filing rectification requests under Section 154.",
        },
      },

      {
        slug: "tax-planning",
        title: "Tax Planning & Optimization",
        shortDescription:
          "Comprehensive tax planning services to minimize tax liability through legal investment and expenditure strategies.",
        features: [
          "Investment planning under 80C, 80D",
          "HRA & other deduction optimization",
          "Capital gains tax planning",
          "Business expense structuring",
        ],
        documentsRequired: [
          "Previous ITR",
          "Income details",
          "Investment portfolio",
          "Financial goals",
        ],
        idealFor: [
          "High net worth individuals",
          "Business owners",
          "Salaried professionals",
        ],
        seo: {
          title: "Tax Planning Services | Taxvio",
          description:
            "Expert tax planning and optimization services for individuals and businesses.",
        },
      },

      {
        slug: "12a-application",
        title: "12A Application",
        shortDescription:
          "Registration services under Section 12A for trusts and NGOs to claim income tax exemptions.",
        features: [
          "Eligibility evaluation",
          "Document preparation",
          "Online application filing",
          "Registration follow-up",
        ],
        documentsRequired: [
          "Trust deed",
          "PAN of trust",
          "Activity details",
          "Financial statements",
        ],
        idealFor: ["Charitable trusts", "NGOs", "Non-profit organizations"],
        seo: {
          title: "12A Registration Services",
          description: "Apply for 12A registration with expert guidance.",
        },
      },

      {
        slug: "80g-application",
        title: "80G Application",
        shortDescription:
          "End-to-end assistance for 80G registration enabling donors to claim tax deductions.",
        features: [
          "Eligibility assessment",
          "Application preparation",
          "Online filing",
          "Approval follow-up",
        ],
        documentsRequired: [
          "12A certificate",
          "Trust deed",
          "PAN of trust",
          "Activity & donation details",
        ],
        idealFor: ["Charitable trusts", "NGOs"],
        seo: {
          title: "80G Registration Services",
          description:
            "Professional support for 80G registration for trusts and NGOs.",
        },
      },

      {
        slug: "15g-15h",
        title: "15G & 15H",
        shortDescription:
          "Preparation and submission of Form 15G and 15H to avoid excess TDS deduction on eligible income.",
        features: [
          "Eligibility verification",
          "Form preparation",
          "Submission guidance",
          "Compliance confirmation",
        ],
        documentsRequired: [
          "PAN card",
          "Income proof",
          "Bank interest details",
        ],
        idealFor: ["Senior citizens", "Individuals with low taxable income"],
        seo: {
          title: "Form 15G & 15H Services",
          description: "Assistance in filing Form 15G and 15H accurately.",
        },
      },

      {
        slug: "lower-tds-certificate",
        title: "Lower TDS Certificate (Section 197)",
        shortDescription:
          "Application for certificate to deduct tax at lower rate or nil rate to improve cash flow.",
        features: [
          "Eligibility assessment",
          "Application preparation",
          "Supporting calculation",
          "Certificate follow-up",
        ],
        documentsRequired: [
          "PAN card",
          "Income estimation",
          "Previous ITR",
          "Deductor details",
        ],
        idealFor: [
          "Individuals with lower tax liability",
          "Contractors",
          "Professional service providers",
        ],
        seo: {
          title: "Lower TDS Certificate Application | Taxvio",
          description:
            "Apply for lower or nil TDS certificate under Section 197.",
        },
      },

      {
        slug: "tax-residency-certificate",
        title: "Tax Residency Certificate (TRC)",
        shortDescription:
          "Obtain Tax Residency Certificate for availing benefits under Double Taxation Avoidance Agreement (DTAA).",
        features: [
          "TRC application filing",
          "Supporting document preparation",
          "DTAA benefit guidance",
          "Certificate tracking",
        ],
        documentsRequired: [
          "PAN card",
          "Passport",
          "Previous ITR",
          "Foreign income details",
        ],
        idealFor: [
          "NRIs",
          "Individuals with foreign income",
          "Expatriates working in India",
        ],
        seo: {
          title: "Tax Residency Certificate Services | Taxvio",
          description:
            "Professional assistance for Tax Residency Certificate application.",
        },
      },

      {
        slug: "nri-tax-filing",
        title: "NRI Tax Filing & Compliance",
        shortDescription:
          "Specialized tax filing and compliance services for Non-Resident Indians with Indian-source income.",
        features: [
          "NRI ITR filing",
          "TDS refund claims",
          "DTAA benefit application",
          "Foreign income reporting",
        ],
        documentsRequired: [
          "PAN & passport",
          "Form 16A/TDS certificates",
          "Foreign income proof",
          "Bank statements",
        ],
        idealFor: [
          "NRIs with salary in India",
          "Property rental income holders",
          "NRIs with capital gains",
        ],
        seo: {
          title: "NRI Tax Filing Services | Taxvio",
          description:
            "Expert NRI income tax filing and compliance services in India.",
        },
      },

      {
        slug: "capital-gains-computation",
        title: "Capital Gains Tax Computation",
        shortDescription:
          "Accurate calculation of short-term and long-term capital gains on sale of property, stocks, and other assets.",
        features: [
          "STCG & LTCG calculation",
          "Indexation benefit computation",
          "Exemption analysis (54/54F/54EC)",
          "Tax liability estimation",
        ],
        documentsRequired: [
          "Sale deed/transaction proof",
          "Purchase documents",
          "Improvement cost details",
          "PAN card",
        ],
        idealFor: [
          "Property sellers",
          "Stock market investors",
          "Asset sellers",
        ],
        seo: {
          title: "Capital Gains Tax Services | Taxvio",
          description:
            "Professional capital gains tax computation and filing services.",
        },
      },

      {
        slug: "cryptocurrency-tax",
        title: "Cryptocurrency Tax Filing",
        shortDescription:
          "Specialized tax filing services for cryptocurrency transactions and virtual digital assets as per new tax provisions.",
        features: [
          "Crypto transaction reporting",
          "30% tax computation on gains",
          "1% TDS compliance",
          "ITR filing with VDA income",
        ],
        documentsRequired: [
          "Transaction statements from exchanges",
          "Wallet addresses",
          "Purchase & sale records",
          "PAN card",
        ],
        idealFor: [
          "Crypto traders",
          "Crypto investors",
          "NFT holders",
        ],
        seo: {
          title: "Cryptocurrency Tax Filing Services | Taxvio",
          description:
            "Expert tax filing for cryptocurrency and virtual digital assets in India.",
        },
      },
    ],
  },

  /* ================= ROC ================= */
  {
    slug: "roc",
    category: "Registrar of Companies (ROC)",
    description:
      "Company formation, statutory compliance, and ROC-related services for businesses",
    services: [
      {
        slug: "private-limited-formation",
        title: "Private Limited Company Formation",
        shortDescription:
          "Complete incorporation services for private limited companies including documentation and MCA filing.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Certificate of Incorporation",
          "PAN & TAN application",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
        ],
        idealFor: ["Startups", "Growing businesses"],
        seo: {
          title: "Private Limited Company Registration",
          description:
            "Start your private limited company with expert assistance.",
        },
      },

      {
        slug: "llp-formation",
        title: "LLP Registration",
        shortDescription:
          "Professional LLP registration services with MCA compliance and documentation support.",
        features: [
          "Name reservation",
          "LLP agreement drafting",
          "Incorporation certificate",
        ],
        documentsRequired: [
          "PAN & Aadhaar of partners",
          "Registered office proof",
        ],
        idealFor: ["Professionals", "Small businesses"],
        seo: {
          title: "LLP Registration Services",
          description:
            "Register your LLP with complete ROC compliance and expert support.",
        },
      },

      {
        slug: "opc-formation",
        title: "One Person Company (OPC) Registration",
        shortDescription:
          "OPC registration services for solo entrepreneurs with complete MCA compliance.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Incorporation certificate",
        ],
        documentsRequired: [
          "PAN & Aadhaar of director",
          "Registered office proof",
        ],
        idealFor: ["Solo entrepreneurs"],
        seo: {
          title: "OPC Registration Services",
          description:
            "Register your One Person Company easily with expert assistance.",
        },
      },

      {
        slug: "section-8-company",
        title: "Section 8 Company Registration",
        shortDescription:
          "Formation of non-profit Section 8 companies for charitable and social objectives.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "License under Section 8",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
        ],
        idealFor: ["NGOs", "Charitable institutions"],
        seo: {
          title: "Section 8 Company Registration",
          description:
            "Professional Section 8 company registration services in India.",
        },
      },

      {
        slug: "annual-roc-compliance",
        title: "Annual ROC Compliance",
        shortDescription:
          "Filing of annual ROC returns and compliance documents for companies and LLPs.",
        features: ["AOC-4 filing", "MGT-7 filing", "LLP Form 11 & 8"],
        documentsRequired: ["Balance sheet", "Profit & loss account"],
        idealFor: ["Private limited companies", "LLPs"],
        seo: {
          title: "Annual ROC Compliance Services",
          description:
            "Ensure timely ROC annual return filing with expert support.",
        },
      },

      {
        slug: "director-appointment-resignation",
        title: "Director Appointment / Resignation",
        shortDescription:
          "ROC filing services for appointment and resignation of company directors.",
        features: [
          "DIR-12 filing",
          "Board resolution drafting",
          "MCA approval tracking",
        ],
        documentsRequired: ["PAN & Aadhaar of director", "DSC"],
        idealFor: ["Private limited companies"],
        seo: {
          title: "Director Appointment & Resignation ROC Filing",
          description:
            "Professional assistance for director appointment and resignation ROC filings.",
        },
      },

      {
        slug: "company-name-change",
        title: "Company Name Change",
        shortDescription:
          "ROC compliance support for changing company name with MCA approval.",
        features: [
          "Name availability check",
          "RUN form filing",
          "MOA & AOA alteration",
        ],
        documentsRequired: ["Certificate of incorporation", "Board resolution"],
        idealFor: ["Companies rebranding"],
        seo: {
          title: "Company Name Change ROC Filing",
          description:
            "Change your company name legally with ROC compliance support.",
        },
      },

      {
        slug: "authorized-capital-increase",
        title: "Increase in Authorized Share Capital",
        shortDescription:
          "ROC filing for increasing authorized share capital of a company.",
        features: ["SH-7 filing", "MOA alteration", "Capital structure update"],
        documentsRequired: ["MOA", "Board resolution"],
        idealFor: ["Growing companies"],
        seo: {
          title: "Increase Authorized Capital ROC Filing",
          description:
            "Increase your company's authorized capital with expert ROC compliance.",
        },
      },

      {
        slug: "company-closure",
        title: "Company Closure / Strike Off",
        shortDescription:
          "Professional assistance for company closure and strike-off under ROC.",
        features: [
          "STK-2 filing",
          "Document preparation",
          "Closure certificate",
        ],
        documentsRequired: ["PAN of company", "Financial statements"],
        idealFor: ["Inactive companies"],
        seo: {
          title: "Company Closure & Strike Off",
          description:
            "Close your inactive company legally with ROC strike-off services.",
        },
      },
      /**
 * New ROC services — paste these objects into the `services` array
 * of the `roc` category, right after "company-closure".
 */

      {
        slug: "public-limited-company-formation",
        title: "Public Limited Company Formation",
        shortDescription:
          "Complete incorporation services for public limited companies, including documentation, MCA filing, and compliance with minimum member and director requirements.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Certificate of Incorporation",
          "PAN & TAN application",
          "Statutory compliance setup",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
          "Director Identification Numbers (DIN)",
        ],
        idealFor: [
          "Large-scale businesses",
          "Companies planning to raise public capital",
        ],
        seo: {
          title: "Public Limited Company Registration Services | Taxvio",
          description:
            "Incorporate your public limited company with expert MCA filing and complete documentation support.",
        },
      },

      {
        slug: "nidhi-company-registration",
        title: "Nidhi Company Registration",
        shortDescription:
          "Formation of Nidhi companies for member-based lending and borrowing activities, with complete MCA and NDH compliance support.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Incorporation certificate",
          "NDH-4 declaration filing",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors",
          "Registered office proof",
          "Minimum member details",
        ],
        idealFor: ["Mutual benefit societies", "Community lending groups"],
        seo: {
          title: "Nidhi Company Registration Services | Taxvio",
          description:
            "Register your Nidhi company with expert guidance on incorporation and NDH compliance requirements.",
        },
      },

      {
        slug: "producer-company-registration",
        title: "Producer Company Registration",
        shortDescription:
          "Incorporation of producer companies for farmers, artisans, and primary producers seeking collective business benefits.",
        features: [
          "Name approval",
          "MOA & AOA drafting",
          "Incorporation certificate",
          "Member share structuring",
        ],
        documentsRequired: [
          "PAN & Aadhaar of directors/members",
          "Registered office proof",
          "Proof of producer activity",
        ],
        idealFor: [
          "Farmer producer organizations",
          "Artisan collectives",
          "Agri-based businesses",
        ],
        seo: {
          title: "Producer Company Registration Services | Taxvio",
          description:
            "Register a producer company for farmers and primary producers with complete MCA incorporation support.",
        },
      },

      {
        slug: "registered-office-change",
        title: "Change in Registered Office Address",
        shortDescription:
          "ROC filing support for shifting a company's registered office within the same city, state, or to a different state.",
        features: [
          "INC-22 filing",
          "Board & shareholder resolution drafting",
          "Regional Director approval (inter-state shift)",
          "MOA address update",
        ],
        documentsRequired: [
          "New address proof",
          "NOC from property owner",
          "Board resolution",
        ],
        idealFor: [
          "Companies relocating offices",
          "Businesses expanding to new states",
        ],
        seo: {
          title: "Change of Registered Office Address ROC Filing | Taxvio",
          description:
            "Shift your company's registered office with proper ROC filing, resolution drafting, and approval support.",
        },
      },

      {
        slug: "dir-3-kyc",
        title: "DIN KYC (DIR-3 KYC) Filing",
        shortDescription:
          "Annual KYC filing for directors to keep DIN active and avoid deactivation, covering FY 2025-26 compliance deadlines.",
        features: [
          "DIR-3 KYC / KYC-Web filing",
          "DIN status verification",
          "Late fee avoidance guidance",
          "Deactivated DIN reactivation support",
        ],
        documentsRequired: [
          "PAN card",
          "Aadhaar card",
          "Personal mobile number & email (OTP verification)",
        ],
        idealFor: [
          "All company & LLP directors",
          "Directors renewing DIN for FY 2025-26",
        ],
        seo: {
          title: "DIR-3 KYC Filing Services FY 2025-26 | Taxvio",
          description:
            "File your DIR-3 KYC for FY 2025-26 before the deadline to keep your DIN active. Expert filing and reactivation support for deactivated DINs.",
        },
      },

      {
        slug: "dpt-3-filing",
        title: "Return of Deposits (DPT-3) Filing",
        shortDescription:
          "Annual filing of DPT-3 disclosing outstanding loans and deposits not classified as deposits, applicable for FY 2025-26.",
        features: [
          "Applicability assessment",
          "Loan & deposit data compilation",
          "DPT-3 preparation & filing",
          "Auditor certificate coordination",
        ],
        documentsRequired: [
          "Audited financial statements",
          "Loan & deposit ledgers",
          "Auditor's certificate",
        ],
        idealFor: [
          "Private & public limited companies",
          "Companies with outstanding loans from directors/shareholders",
        ],
        seo: {
          title: "DPT-3 Filing Services FY 2025-26 | Taxvio",
          description:
            "File your DPT-3 return of deposits for FY 2025-26 accurately and on time with expert compilation and filing support.",
        },
      },

      {
        slug: "charge-registration-satisfaction",
        title: "Charge Creation & Satisfaction (CHG-1/CHG-4)",
        shortDescription:
          "ROC filing for registering charges on company assets against loans, and filing satisfaction once the loan is repaid.",
        features: [
          "CHG-1 charge creation filing",
          "CHG-4 satisfaction of charge filing",
          "Charge register maintenance",
          "Lender coordination",
        ],
        documentsRequired: [
          "Loan agreement",
          "Sanction letter",
          "Board resolution",
          "No-dues certificate (for satisfaction)",
        ],
        idealFor: [
          "Companies availing secured loans",
          "Companies closing secured loans",
        ],
        seo: {
          title: "Charge Creation & Satisfaction ROC Filing | Taxvio",
          description:
            "Register or satisfy charges on company assets with expert CHG-1 and CHG-4 filing support.",
        },
      },

      {
        slug: "share-transfer",
        title: "Share Transfer & Transmission",
        shortDescription:
          "Documentation and ROC compliance support for transferring or transmitting shares between shareholders.",
        features: [
          "Share transfer deed (SH-4) preparation",
          "Board approval processing",
          "Share certificate endorsement",
          "Register of members update",
        ],
        documentsRequired: [
          "Share certificates",
          "Transfer deed",
          "PAN of transferor & transferee",
        ],
        idealFor: [
          "Companies with shareholding changes",
          "Family-owned businesses transferring shares",
        ],
        seo: {
          title: "Share Transfer & Transmission Services | Taxvio",
          description:
            "Complete share transfer and transmission compliance including transfer deed drafting and register updates.",
        },
      },

      {
        slug: "company-conversion-private-to-public",
        title: "Private to Public Company Conversion",
        shortDescription:
          "Conversion of a private limited company into a public limited company with MOA/AOA alteration and MCA approval.",
        features: [
          "Eligibility & structure review",
          "MOA & AOA alteration",
          "MGT-14 filing",
          "INC-27 conversion filing",
        ],
        documentsRequired: [
          "Special resolution copy",
          "Altered MOA & AOA",
          "Board resolution",
        ],
        idealFor: [
          "Growing private companies",
          "Companies planning to raise public funds",
        ],
        seo: {
          title: "Private to Public Company Conversion Services | Taxvio",
          description:
            "Convert your private limited company to a public limited company with expert MOA/AOA alteration and MCA filing support.",
        },
      },

      {
        slug: "llp-to-company-conversion",
        title: "LLP to Private Limited Company Conversion",
        shortDescription:
          "Conversion of an LLP into a private limited company to enable equity fundraising and corporate structuring.",
        features: [
          "Eligibility assessment",
          "Name approval",
          "URC-1 filing",
          "MOA & AOA drafting",
          "Incorporation certificate",
        ],
        documentsRequired: [
          "LLP agreement",
          "Partner consent",
          "PAN & Aadhaar of partners/directors",
          "Financial statements",
        ],
        idealFor: [
          "LLPs planning to raise equity funding",
          "Growing partnership businesses",
        ],
        seo: {
          title: "LLP to Private Limited Company Conversion | Taxvio",
          description:
            "Convert your LLP into a private limited company with complete MCA filing and incorporation support.",
        },
      },

      {
        slug: "adt-1-auditor-appointment",
        title: "Statutory Auditor Appointment (ADT-1)",
        shortDescription:
          "Filing of ADT-1 for appointment or reappointment of statutory auditors, applicable for FY 2025-26 annual compliance.",
        features: [
          "Auditor consent & eligibility letter",
          "Board/AGM resolution drafting",
          "ADT-1 preparation & filing",
          "Auditor tenure tracking",
        ],
        documentsRequired: [
          "Auditor consent letter",
          "Eligibility certificate",
          "Board or AGM resolution",
        ],
        idealFor: [
          "Newly incorporated companies",
          "Companies reappointing auditors for FY 2025-26",
        ],
        seo: {
          title: "ADT-1 Auditor Appointment Filing FY 2025-26 | Taxvio",
          description:
            "File ADT-1 for statutory auditor appointment or reappointment for FY 2025-26 with complete documentation support.",
        },
      },

      {
        slug: "sbo-ben-2-filing",
        title: "Significant Beneficial Owner (SBO) Declaration & BEN-2 Filing",
        shortDescription:
          "Identification of significant beneficial owners and filing of BEN-2 to comply with beneficial ownership disclosure norms.",
        features: [
          "SBO identification & threshold analysis",
          "BEN-1 declaration collection",
          "BEN-2 preparation & filing",
          "Register of SBOs maintenance",
        ],
        documentsRequired: [
          "Shareholding pattern",
          "BEN-1 declarations from SBOs",
          "Company ownership structure",
        ],
        idealFor: [
          "Companies with layered shareholding",
          "Companies with indirect beneficial owners",
        ],
        seo: {
          title: "SBO Declaration & BEN-2 Filing Services | Taxvio",
          description:
            "Identify significant beneficial owners and file BEN-2 with expert compliance support for beneficial ownership disclosure norms.",
        },
      },

      {
        slug: "msme-1-filing",
        title: "MSME-1 Half-Yearly Return Filing",
        shortDescription:
          "Half-yearly filing of MSME-1 disclosing outstanding payments to micro and small enterprise suppliers beyond 45 days, for FY 2025-26.",
        features: [
          "Vendor MSME status verification",
          "Outstanding payment compilation",
          "MSME-1 preparation & filing",
          "Half-yearly deadline tracking",
        ],
        documentsRequired: [
          "Vendor MSME registration certificates",
          "Purchase & payment records",
          "Outstanding dues ledger",
        ],
        idealFor: [
          "Companies purchasing from MSME vendors",
          "Companies with delayed vendor payments",
        ],
        seo: {
          title: "MSME-1 Filing Services FY 2025-26 | Taxvio",
          description:
            "File your half-yearly MSME-1 return for FY 2025-26 disclosing overdue payments to micro and small enterprises.",
        },
      },

      {
        slug: "agm-compliance",
        title: "Annual General Meeting (AGM) Compliance",
        shortDescription:
          "End-to-end support for conducting a company's Annual General Meeting in compliance with the Companies Act, including notice, minutes, and MGT-15 filing.",
        features: [
          "AGM notice drafting",
          "Agenda & resolution preparation",
          "Minutes drafting",
          "MGT-15 filing (listed companies)",
          "Extension application (if required)",
        ],
        documentsRequired: [
          "Financial statements",
          "Director's report",
          "Auditor's report",
        ],
        idealFor: [
          "Private & public limited companies",
          "Companies due for annual shareholder approval",
        ],
        seo: {
          title: "AGM Compliance Services | Taxvio",
          description:
            "Conduct your company's Annual General Meeting with expert notice drafting, minutes preparation, and MCA compliance support.",
        },
      },

      {
        slug: "company-revival-restoration",
        title: "Revival / Restoration of Struck-Off Company",
        shortDescription:
          "Assistance in restoring a company or LLP struck off by the ROC through NCLT application, enabling resumption of business operations.",
        features: [
          "Strike-off order review",
          "NCLT restoration application (Form NCLT-9)",
          "Pending return clearance",
          "Restoration order follow-up",
        ],
        documentsRequired: [
          "Strike-off order copy",
          "Certificate of incorporation",
          "Pending financial statements & returns",
        ],
        idealFor: [
          "Companies struck off by ROC",
          "Businesses needing to reactivate a closed entity",
        ],
        seo: {
          title: "Company Revival & Restoration Services | Taxvio",
          description:
            "Restore your struck-off company through NCLT application with expert documentation and follow-up support.",
        },
      },

      {
        slug: "llp-closure",
        title: "LLP Closure / Strike Off",
        shortDescription:
          "Professional assistance for winding up and striking off an inactive or non-operational LLP from the MCA register.",
        features: [
          "Form 24 preparation & filing",
          "Partner consent documentation",
          "Pending return clearance",
          "Closure confirmation follow-up",
        ],
        documentsRequired: [
          "PAN of LLP",
          "Partner consent letters",
          "Statement of accounts",
        ],
        idealFor: ["Inactive LLPs", "Non-operational partnerships"],
        seo: {
          title: "LLP Closure & Strike Off Services | Taxvio",
          description:
            "Close your inactive LLP legally with expert Form 24 filing and MCA strike-off support.",
        },
      },

      {
        slug: "csr-1-registration",
        title: "CSR-1 Registration",
        shortDescription:
          "Registration of NGOs, Section 8 companies, and trusts on the MCA CSR-1 portal to become eligible for receiving corporate CSR funding.",
        features: [
          "Eligibility verification",
          "CSR-1 form preparation & filing",
          "Digital signature coordination",
          "Registration acknowledgement support",
        ],
        documentsRequired: [
          "Trust deed / Section 8 license",
          "PAN of entity",
          "Governing body details",
        ],
        idealFor: [
          "NGOs & trusts seeking CSR funding",
          "Section 8 companies",
        ],
        seo: {
          title: "CSR-1 Registration Services | Taxvio",
          description:
            "Register your NGO or Section 8 company on the MCA CSR-1 portal to become eligible for corporate CSR funding.",
        },
      },

      {
        slug: "fc-gpr-fdi-compliance",
        title: "Foreign Investment (FC-GPR) Compliance",
        shortDescription:
          "RBI and MCA compliance support for companies receiving foreign direct investment, including FC-GPR filing on the FIRMS portal.",
        features: [
          "FDI structure & pricing guideline review",
          "FC-GPR filing on FIRMS portal",
          "KYC & valuation report coordination",
          "Share allotment ROC filing (PAS-3)",
        ],
        documentsRequired: [
          "FIRC (Foreign Inward Remittance Certificate)",
          "Valuation report",
          "Board & shareholder resolutions",
          "KYC of foreign investor",
        ],
        idealFor: [
          "Companies receiving foreign investment",
          "Startups with overseas investors",
        ],
        seo: {
          title: "FC-GPR Filing & FDI Compliance Services | Taxvio",
          description:
            "Complete FDI compliance for companies receiving foreign investment, including FC-GPR filing on the RBI FIRMS portal.",
        },
      },
    ],
  },

];
