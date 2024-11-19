import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next'; // Импорт хука useTranslation для локализации

import styles from './footer.module.scss';
import logo from '../image/logo2.png';
import whatsappIcon from '../image/whatsapp-icon.png';
import telegramIcon from '../image/telegram-icon.png';
import visaIcon from '../image/visa-icon.png';
import mastercardIcon from '../image/mastercard-icon.png';
import downloadIcon from '../image/download-icon.png';

const Footer = () => {
  const { t } = useTranslation(); // Использование хука для перевода

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <Image src={logo} alt="СУЛТАН" />
            {t('footer.companyName')}
          </a>
          <p>{t('footer.companyDescription')}</p>
          <form className={styles.subscribeForm}>
            <label>
              {t('footer.subscribePrompt')}
              <input type="email" placeholder={t('footer.emailPlaceholder')} />
            </label>
            <button type="submit">→</button>
          </form>
        </div>
        <div className={styles.menu}>
          <h4>{t('footer.menuTitle')}</h4>
          <ul>
            <li><a href="#">{t('footer.menu.about')}</a></li>
            <li><a href="#">{t('footer.menu.delivery')}</a></li>
            <li><a href="#">{t('footer.menu.return')}</a></li>
            <li><a href="#">{t('footer.menu.contacts')}</a></li>
          </ul>
        </div>
        <div className={styles.categories}>
          <h4>{t('footer.categoriesTitle')}</h4>
          <ul>
            <li><a href="#">{t('footer.categories.householdChemicals')}</a></li>
            <li><a href="#">{t('footer.categories.cosmetics')}</a></li>
            <li><a href="#">{t('footer.categories.householdGoods')}</a></li>
            <li><a href="#">{t('footer.categories.childrenGoods')}</a></li>
            <li><a href="#">{t('footer.categories.dishes')}</a></li>
          </ul>
        </div>
        <div className={styles.download}>
          <h4>{t('footer.downloadPriceList')}</h4>
          <a href="/path/to/price-list.pdf" download className={styles.downloadButton}>
            {t('footer.priceList')} <span><Image src={downloadIcon} alt={t('footer.download')} /></span>
          </a>
          <h4>{t('footer.messengers')}</h4>
          <div className={styles.messengers}>
            <a href="#"><Image src={whatsappIcon} alt="WhatsApp" /></a>
            <a href="#"><Image src={telegramIcon} alt="Telegram" /></a>
          </div>
        </div>
        <div className={styles.contacts}>
          <h4>{t('footer.contactsTitle')}</h4>
          <p>{t('footer.phone')}</p>
          <p>{t('footer.workingHours')}</p>
          <a href="tel:+77774900091">{t('footer.orderCall')}</a>
          <a href="mailto:opt.sultan@mail.ru">{t('footer.email')}</a>
          <p>{t('footer.available')}</p>
          <div className={styles.paymentMethods}>
            <Image src={visaIcon} alt="Visa" />
            <Image src={mastercardIcon} alt="MasterCard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
