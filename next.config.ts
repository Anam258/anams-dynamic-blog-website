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
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: true,
    cpus: 1,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  output: "standalone", // For optimized deployment output
  compress: true,
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
      splitChunks: {
        chunks: "all",
      },
    };
    config.parallelism = 2;
    return config;
  },
  env: {
    NODE_OPTIONS: "--max-old-space-size=4096",
  },
  trailingSlash: true, // Optional: Useful for consistent routing
};

export default nextConfig;
