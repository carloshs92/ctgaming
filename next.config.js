/** @type {import('next').NextConfig} */

const nextConfig = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
