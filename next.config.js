/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ip-management',
        destination: '/',
        statusCode: 301,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/content/blog/:path*',
        destination: '/api/static/blog/:path*',
      },
    ]
  },
}

module.exports = nextConfig