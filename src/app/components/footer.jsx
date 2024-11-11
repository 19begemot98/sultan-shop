import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';
import logo from '../images/logo.png';
import whatsappIcon from '../images/whatsapp-icon.png';
import telegramIcon from '../images/telegram-icon.png';
import visaIcon from '../images/visa-icon.png';
import mastercardIcon from '../images/mastercard-icon.png';
import downloadIcon from '../images/download-icon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <Image src={logo} alt="СУЛТАН" />
            СУЛТАН
          </a>
          <p>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
          <form className={styles.subscribeForm}>
            <label>
              Подпишись на скидки и акции
              <input type="email" placeholder="Введите ваш E-mail" />
            </label>
            <button type="submit">→</button>
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
            Прайс-лист <span><img src={downloadIcon} alt="Download" /></span>
          </a>
          <h4>Связь в мессенджерах:</h4>
          <div className={styles.messengers}>
            <a href="#"><img src={whatsappIcon} alt="WhatsApp" /></a>
            <a href="#"><img src={telegramIcon} alt="Telegram" /></a>
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
            <Image src={visaIcon} alt="Visa" />
            <Image src={mastercardIcon} alt="MasterCard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
