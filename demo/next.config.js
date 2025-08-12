/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Untuk transpile local package
    transpilePackages: ["w-ui"],
  },
};

module.exports = nextConfig;
