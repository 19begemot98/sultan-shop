// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../public/locales/en';
import ruTranslation from '../../public/locales/ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    lng: 'ru', 
    fallbackLng: 'ru', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
