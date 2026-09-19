import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["121.137.1.26"],
  output: "export",
  basePath: "/New_portfolios",
  assetPrefix: "/New_portfolios",  
  images: { unoptimized: true }
};

export default nextConfig;
