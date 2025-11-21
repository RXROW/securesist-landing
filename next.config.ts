import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimize bundle size
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion/react'],
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
