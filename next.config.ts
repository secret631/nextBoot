import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'cdn.dummyjson.com',
      port: '',
      pathname: '/products/**',
      search: ''

    }]
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
