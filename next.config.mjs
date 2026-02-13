import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    // Note: Static export requires unoptimized: true
    // Run 'npm run optimize-images' before build to pre-optimize source images
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
}

export default withBundleAnalyzer(nextConfig);
