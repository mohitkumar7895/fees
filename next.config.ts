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
        source: "/about",
        destination: "/dashboard",
        permanent: false,
      },
      {
        source: "/academics",
        destination: "/dashboard",
        permanent: false,
      },
      {
        source: "/admissions",
        destination: "/dashboard",
        permanent: false,
      },
      {
        source: "/facilities",
        destination: "/dashboard",
        permanent: false,
      },
      {
        source: "/gallery",
        destination: "/dashboard",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/dashboard",
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
