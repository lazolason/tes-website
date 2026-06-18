import bundleAnalyzer from '@next/bundle-analyzer';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export for Afrihost deployment
  outputFileTracingRoot: projectRoot,
  trailingSlash: true, // Add trailing slashes for Apache compatibility
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

export default withBundleAnalyzer(nextConfig);
