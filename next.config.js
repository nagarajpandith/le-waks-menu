/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: ['unsplash.it'],
  },
};

module.exports = nextConfig;
