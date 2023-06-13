/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        'react-icons': {
          transform: 'react-icons/{{member}}',
        },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brightapi.merahitechnologies.com',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
