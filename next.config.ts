import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    // add other domains here if needed
    domains: ["cloud.appwrite.io", "img.freepik.com"],
  },
};

export default nextConfig;
// 67359043000ff97f57a0 attribute "bucketField" keys /// old one "67344d1b000b81a185de" 