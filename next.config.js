/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Avisa sobre problemas ESLint, mas não impede o build de completar
    ignoreDuringBuilds: true,
  },
  i18n: {
    // Suporte a múltiplos idiomas
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
    localeDetection: true
  },
};

module.exports = nextConfig; 