import type { NextConfig } from "next";

import "./src/env";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // SSG用の設定
};

export default nextConfig;
