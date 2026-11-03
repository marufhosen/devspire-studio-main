import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Restrict remote optimization to the Unsplash CDN used for marketing imagery.
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
