// data/site-config.ts
// Shared constants for the location pages.

export const SITE_URL = "https://taxvio.in";

// TODO: put your WhatsApp number here (country code first, digits only, e.g. "919876543210")
export const WHATSAPP_NUMBER = "918937980366";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;