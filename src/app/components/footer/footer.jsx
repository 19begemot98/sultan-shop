import React from 'react';
import Image from 'next/image';
// import { useTranslation } from 'react-i18next'; 
import styles from './footer.module.scss';
import logo from '../../../../public/image/logo2.png';
import whatsappIcon from '../../../../public/image/whatsapp-icon.png';
import telegramIcon from '../../../../public/image/telegram-icon.png';
import visaIcon from '../../../../public/image/visa-icon.png';
import mastercardIcon from '../../../../public/image/mastercard-icon.png';
import downloadIcon from '../../../../public/image/download-icon.png';
import Vector from '../../../../public/image/Vector.png';

const Footer = () => {
  // const { t } = useTranslation(); 

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <Image src={logo} alt="СУЛТАН" />
            {/* {t('footer.companyName')} */}
          </a>
          {/* <p>{t('footer.companyDescription')}</p> */}
          <p>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
          <form className={styles.subscribeForm}>
            <label>
              {/* {t('footer.subscribePrompt')} */}
              Подпишись на скидки и акции
              <div className={styles.inputContainer}>
                <input 
                  type="email" 
                  placeholder="Введите ваш E-mail"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitButton}>
                <span>
                  <Image 
                   src={Vector} 
                    alt="Скачать" 
                  />
                </span>
                </button>
              </div>
            </label>
          </form>
        </div>
        <div className={styles.menu}>
          <h4>Меню сайта:</h4>
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Возврат</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div className={styles.categories}>
          <h4>Категории:</h4>
          <ul>
            <li><a href="#">Бытовая химия</a></li>
            <li><a href="#">Косметика и гигиена</a></li>
            <li><a href="#">Товары для дома</a></li>
            <li><a href="#">Товары для детей и мам</a></li>
            <li><a href="#">Посуда</a></li>
          </ul>
        </div>
        <div className={styles.download}>
          <h4>Скачать прайс-лист:</h4>
          <a href="/path/to/price-list.pdf" download className={styles.downloadButton}>
            Прайс-лист <span>
            <Image 
              src={downloadIcon} 
              alt="Скачать" 
            />
            </span>
          </a>
          <h4>Связь в мессенджерах:</h4>
          <div className={styles.messengers}>
            <a href="#">
            <Image 
              src={whatsappIcon} 
              alt="WhatsApp" 
              width={40} 
              height={40} 
            />
            </a>
            <a href="#">
            <Image 
              src={telegramIcon} 
              alt="Telegram" 
              width={40} 
              height={40} 
            />
            </a>
          </div>
        </div>
        <div className={styles.contacts}>
          <h4>Контакты:</h4>
          <p>+7 (777) 490-00-91</p>
          <p>время работы: 9:00-20:00</p>
          <a href="tel:+77774900091">Заказать звонок</a>
          <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
          <p>На связи в любое время</p>
          <div className={styles.paymentMethods}>
            <Image 
              src={visaIcon} 
              alt="Visa" 
            />
            <Image 
              src={mastercardIcon} 
              alt="MasterCard" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
