/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'lorempixel.com.br'
      }
    ]
  }
};

module.exports = nextConfig;
