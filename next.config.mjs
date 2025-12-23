/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
