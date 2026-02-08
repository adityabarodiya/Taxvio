/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ REQUIRED for static hosting
  },
};

module.exports = nextConfig;
