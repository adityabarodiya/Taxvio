/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://taxvio.in";

const services = [
  "gst-registration",
  "fssai-license",
  "trademark-registration",
];

const cities = [
  "delhi",
  "meerut",
  "muzaffarnagar",
];

module.exports = {
  siteUrl,

  generateRobotsTxt: true,

  sitemapSize: 5000,

  additionalPaths: async (config) => {
    const paths = [];

    services.forEach((service) => {
      paths.push({
        loc: `/services/${service}`,
        lastmod: new Date().toISOString(),
      });
    });

    cities.forEach((city) => {
      services.forEach((service) => {
        paths.push({
          loc: `/${city}/${service}`,
          lastmod: new Date().toISOString(),
        });
      });
    });

    return paths;
  },
};