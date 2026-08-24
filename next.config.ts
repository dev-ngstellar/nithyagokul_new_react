import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.0.113", "192.168.1.15", "localhost"],
};

export default nextConfig;