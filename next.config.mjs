import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes and server features
  reactStrictMode: true,
  images: {
    // Image optimization now enabled (removed unoptimized: true)
    formats: ['image/webp', 'image/avif'],
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
}

export default withBundleAnalyzer(nextConfig);
