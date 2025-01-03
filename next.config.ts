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
    ignoreDuringBuilds: true, // ESLint errors ignore kare during build
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScript errors ignore kare during build
  },
  poweredByHeader: false, // Security ke liye header hide kare
  reactStrictMode: true, // Development ke liye strict mode enable kare
  output: "standalone", // Standalone output ke liye
  compress: true, // Compression enable kare
  experimental: {
    workerThreads: true, // Low-resource environments ke liye
    cpus: 1, // CPU usage limit kare
  },
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
      splitChunks: {
        chunks: "all", // Code splitting optimize kare
      },
    };
    config.parallelism = 2; // Parallelism control kare
    return config;
  },
};

export default nextConfig;
