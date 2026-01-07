export type ServiceSEO = {
  title: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  shortDescription: string;

  features: string[];
  documentsRequired: string[];
  idealFor: string[];

  seo: ServiceSEO;
};

export type ServiceCategory = {
  id: string;
  category: string;
  description: string;
  services: ServiceItem[];
};
