/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ip-management',
        destination: '/',
        statusCode: 301,
      },
      // ブログ廃止（2026-11）：/blog と各記事は TOP へ転送
      {
        source: '/blog',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig
