/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'de', 'fr', 'es', 'pl', 'zh'],
    defaultLocale: 'en'
  }
};
module.exports = nextConfig;
