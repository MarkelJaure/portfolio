import { UserConfig } from 'next-i18next';

const config: UserConfig = {
    i18n: {
        locales: ['es', 'en'], // Idiomas disponibles
        defaultLocale: 'es',   // Idioma por defecto
        localeDetection: false, // Detección automática del idioma
    },
};

export default config;
