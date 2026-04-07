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
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/works',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/works/:path*',
        destination: '/projects/:path*',
        permanent: true,
      },
      {
        source: '/skripsi',
        destination: '/projects/skripsi',
        permanent: true,
      },
      {
        source: '/beliefs',
        destination: '/principle',
        permanent: true,
      },
      {
        source: '/people',
        destination: '/principle',
        permanent: true,
      },
      {
        source: '/read',
        destination: '/principle',
        permanent: true,
      },
      {
        source: '/belief',
        destination: '/principle',
        permanent: true,
      },
      {
        source: '/subject',
        destination: '/bio',
        permanent: true,
      },
      {
        source: '/belief',
        destination: '/beliefs',
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
