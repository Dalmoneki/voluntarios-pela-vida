import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  assetPrefix: "/voluntarios-pela-vida/",
  basePath: "/voluntarios-pela-vida",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
