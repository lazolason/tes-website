import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export for Afrihost deployment
  trailingSlash: true, // Add trailing slashes for Apache compatibility
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

export default withBundleAnalyzer(nextConfig);
