import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es', // Idioma por defecto
        debug: true, // Activar solo en desarrollo
        interpolation: {
            escapeValue: false, // No escapar valores de traducción
        },
        react: {
            transSupportBasicHtmlNodes: true, // Permite etiquetas HTML básicas
            transKeepBasicHtmlNodesFor: ['strong', 'em', 'br', 'highlight', 'flag', 'link'],

        },
        backend: {
            loadPath: '/locales/{{lng}}.json', // Ruta de los archivos de traducción
        },
    });

export default i18n;