import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: false,
  },
};

export default nextConfig;
