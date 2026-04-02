import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/School_Website",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
