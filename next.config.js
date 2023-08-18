/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    googleClientId: process.env.googleClientId,
    googleClientSecret: process.env.googleClientSecret,
  },
};

module.exports = nextConfig;
