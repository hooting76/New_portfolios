import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["121.137.1.26"],
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/New_portfolios" : "",
  images: { unoptimized: true }
};

export default nextConfig;
