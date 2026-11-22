import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/config"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
