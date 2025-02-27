import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [25, 50, 75, 100],
    formats: ["image/webp", "image/avif"],
    localPatterns: [{ pathname: "/assets/images/**", search: "" }],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tasktrail.blob.core.windows.net",
        port: "",
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
