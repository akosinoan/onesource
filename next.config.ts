import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.PAGES_BASE_PATH,
  output:`export`, /* config options here */
};

export default nextConfig;
