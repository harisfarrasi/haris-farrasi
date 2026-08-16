/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/thought/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/skripsi',
        destination: '/thesis',
        permanent: true,
      },
      {
        source: '/skripsi',
        destination: '/thesis',
        permanent: true,
      },
      {
        source: '/works/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/beliefs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/belief',
        destination: '/',
        permanent: true,
      },
      {
        source: '/principle',
        destination: '/',
        permanent: true,
      },
      {
        source: '/people',
        destination: '/',
        permanent: true,
      },
      {
        source: '/read',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
