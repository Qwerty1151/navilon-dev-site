/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en','ru','de','fr','es','pl','zh'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};
module.exports = nextConfig;
