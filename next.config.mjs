/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      {
        source: '/mexsteam',
        destination: '/products#mexsteam',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
