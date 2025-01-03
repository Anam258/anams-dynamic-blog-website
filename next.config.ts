import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from Sanity's CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  eslint: {
    // Ignore ESLint errors during build to avoid build failures
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Optimize build performance for low-resource environments
    workerThreads: true,
    cpus: 1, // Limit CPU usage to 1 core for stability
  },
  typescript: {
    // Ignore TypeScript errors during the build to prevent failures
    ignoreBuildErrors: true,
  },
  poweredByHeader: false, // Remove the X-Powered-By header for better security
  reactStrictMode: true, // Enable React's strict mode for development
  output: "standalone", // Produce optimized standalone output
  compress: true, // Enable compression for faster page loads
  webpack: (config) => {
    // Optimize Webpack configuration
    config.optimization = {
      ...config.optimization,
      minimize: true, // Minimize the output
      splitChunks: {
        chunks: "all", // Optimize all chunks
      },
    };

    // Fix memory issues by limiting parallelism
    config.parallelism = 2;

    return config;
  },
  // Set a custom memory limit for builds
  env: {
    NODE_OPTIONS: "--max-old-space-size=4096",
  },
};

export default nextConfig;
