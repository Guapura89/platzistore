/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  mode: "production",
  disable: process.env.NODE_ENV === "development",
  sw: "service-worker.js",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fastly.picsum.photos", "picsum.photos"],
  },
};

module.exports = withPWA(nextConfig);
