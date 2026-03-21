import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["cheerio"],
  outputFileTracingIncludes: {
    "/api/download/openclaw-guide": ["./private-assets/**/*"],
  },
};

export default nextConfig;
