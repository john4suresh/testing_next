/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "",
        pathname: "/randomusers/**",
      },
      {
        protocol: "https",
        hostname: "pluma-docs-dev.s3.amazonaws.com",
        port: "",
        pathname: "/profiles/coach/**",
      },
    ],
  },
};

module.exports = nextConfig;
