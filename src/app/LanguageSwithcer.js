
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <a href="#" onClick={() => changeLanguage('ru')}>Русский</a> | 
      <a href="#" onClick={() => changeLanguage('en')}> English</a>
    </div>
  );
};

export default LanguageSwitcher;
