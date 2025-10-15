import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ijarogroup.com',
        port: '',
        pathname: '/public/imgs/**',
      },
    ],
  },
};

export default nextConfig;
