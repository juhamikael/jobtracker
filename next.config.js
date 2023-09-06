/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["pg", "sqlite3"],
  },
};

module.exports = nextConfig;
