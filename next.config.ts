import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server starts as localhost. Viewing it at 127.0.0.1 is a
  // different origin, and Next blocks the page assets unless this is set.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
