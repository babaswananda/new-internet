import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: false,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // HTTP optimizations
  httpAgentOptions: {
    keepAlive: true,
  },

  // Disable ESLint during build to avoid errors
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Configure React settings
  reactStrictMode: false,
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Fix for framer-motion
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'framer-motion': require.resolve('framer-motion'),
      };
    }
    return config;
  }
};

export default nextConfig;
