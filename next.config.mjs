/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      {
        pathname: '/schematics/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
