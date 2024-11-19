import React from 'react';
import Link from 'next/link';
//import { useTranslation } from 'react-i18next';
import styles from "./header.module.scss";
import Image from 'next/image';
import iconLocate from '../image/location.png';
import iconEmail from '../image/mail.png';

export default function Header() {
  //const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <div className={styles.header_1}>
        <div className={styles.header_row}>
          <div className={styles.header_left_part}>
            <div className={styles.header_icon}>
              <Image height={20} width={20} src={iconLocate} alt="location icon"/>
            </div>
            <div>
              <div className={styles.header_text1}>
                <span>Адрес: г.Кокчетав, ул. Ж. Ташенова 129Б</span>
              </div>
              <div className={styles.header_text2}>
                <span>(Рынок Восточный)</span>
              </div>
            </div>
          </div>
          
          <div className={styles.header_vertical}></div>

          <div className={styles.header_left_part}>
            <div className={styles.header_icon}>
              <Image height={20} width={20} src={iconEmail} alt="email icon"/>
            </div>
            <div>
              <div className={styles.header_text1}>
                <Link href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
              </div>
              <div className={styles.header_text2}>
                <span>На связи в любое время</span>
              </div>
            </div>
          </div>

          <div className={styles.header_nav_container}>
            <nav className={styles.header_nav}>
              <Link href="#">О компании</Link>
              <div className={styles.header_vertical}></div>
              <Link href="#">Доставка</Link>
              <div className={styles.header_vertical}></div>
              <Link href="#">Возврат</Link>
              <div className={styles.header_vertical}></div>
              <Link href="#">Контакты</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}