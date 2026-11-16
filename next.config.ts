import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admissions",
        destination: "/admission",
        permanent: false,
      },
      {
        source: "/academics",
        destination: "/classes",
        permanent: false,
      },
      {
        source: "/facilities",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/fees",
        destination: "/dashboard",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
