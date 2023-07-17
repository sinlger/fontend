/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites () {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `http://localhost:1337`,
        },
      ],
    }
  },
}

module.exports = nextConfig
