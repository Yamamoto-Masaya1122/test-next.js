import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [new URL("https://placehold.jp/**")],
  },
};

export default nextConfig;
