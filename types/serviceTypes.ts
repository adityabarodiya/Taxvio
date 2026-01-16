export type ServiceSEO = {
  title: string;
  description: string;
};

export type ServiceItem = {
 
   slug: string;
  title: string;
  shortDescription: string;

  features: string[];
  documentsRequired: string[];
  idealFor: string[];

  seo: ServiceSEO;
};

export type ServiceCategory = {
  slug: string;
  category: string;
  description: string;
  services: ServiceItem[];
};
