/** @type {import('next').NextConfig} */
const nextConfig = {
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