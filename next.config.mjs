import { i18n } from './next-i18next.config.mjs';

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
