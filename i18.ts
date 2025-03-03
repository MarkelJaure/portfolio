import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './public/locales/en.json';
import es from './public/locales/es.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'es'],
        fallbackLng: 'es', // Idioma por defecto
        debug: true, // Activar solo en desarrollo
        interpolation: {
            escapeValue: false, // No escapar valores de traducción
        },
        react: {
            transSupportBasicHtmlNodes: true, // Permite etiquetas HTML básicas
            transKeepBasicHtmlNodesFor: ['strong', 'em', 'br', 'highlight', 'flag', 'link', 'green'],

        },
        backend: {
            loadPath: '/locales/{{lng}}.json', // Ruta de los archivos de traducción
        },
        resources: {
            en: {
                translation: en,
            },
            es: {
                translation: es,
            },
        },
    });

export default i18n;