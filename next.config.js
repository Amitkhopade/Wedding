/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    domains: ['via.placeholder.com', 'api.placeholder.com'],
  },
  compress: true,
};

module.exports = nextConfig;
