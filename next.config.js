/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'lorempixel.com.br'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  },
  async redirects() {
    return [{ source: '/', destination: '/signin', permanent: true }];
  }
};

module.exports = nextConfig;
