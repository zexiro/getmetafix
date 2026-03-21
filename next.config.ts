import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["cheerio"],
  experimental: {
    outputFileTracingIncludes: {
      "/api/download/openclaw-guide": ["./private-assets/**/*"],
    },
  },
};

export default nextConfig;
