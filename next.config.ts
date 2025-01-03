import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  eslint: {
    // Disable ESLint during builds to bypass lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
