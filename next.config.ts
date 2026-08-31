import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the Turbopack root to this project so Next.js ignores the stray
  // package-lock.json in the home directory and stops warning about it.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
