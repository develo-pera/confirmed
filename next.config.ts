import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This is the wildcard that allows all hostnames
      },
      // You can add another entry for 'http' if necessary, but HTTPS is recommended
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
