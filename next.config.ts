import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// next.config.js
module.exports = {
  images: {
    // add other domains here if needed
    domains: ["cloud.appwrite.io", "img.freepik.com"],
  },
};

export default nextConfig;
