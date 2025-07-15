/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Avisa sobre problemas ESLint, mas não impede o build de completar
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 