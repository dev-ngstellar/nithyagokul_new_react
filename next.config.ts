import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // IMPORTANT
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.0.113"],
};

export default nextConfig;