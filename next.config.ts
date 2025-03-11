import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lavishverse-us.backendless.app',
      },
    ],
  },
};

export default nextConfig;
