/** @type {import('next').NextConfig} */
/* https://github.com/vercel/next.js/issues/44430 */
const path = require("path");
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    googleClientId: process.env.googleClientId,
    googleClientSecret: process.env.googleClientSecret,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  images: {
    domains: ["flagcdn.com"],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
};

module.exports = nextConfig;
