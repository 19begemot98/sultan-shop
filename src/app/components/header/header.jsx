import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './logo';
import CatalogButton from './catalogbutton';
import SearchBar from './search';
import CallButton from './Callbutton';
import PriceListButton from './pricelist';
import Cart from './cart';
import styles from './header.module.scss';
import iconLocate from '../../../../public/image/location.png';
import iconEmail from '../../../../public/image/mail.png';
import Woman from '../../../../public/image/woman.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.header_row}>
          <div className={styles.header_left_part}>
            <div className={styles.header_icon}>
              <Image 
              height={20} 
              width={20} 
              src={iconLocate} 
              alt="location icon" 
              />
            </div>
            <div>
              <div className={styles.header_text}>
                <span>Адрес: г.Кокчетав, ул. Ж. Ташенова 129Б</span>
              </div>
              <div className={styles.header_textt}>
                <span>(Рынок Восточный)</span>
              </div>
            </div>
          </div>

          <div className={styles.header_vertical}></div>

          <div className={styles.header_left_part}>
            <div className={styles.header_icon}>
              <Image 
              height={20} 
              width={20} 
              src={iconEmail} 
              alt="email icon" 
              />
            </div>
            <div>
              <div className={styles.header_text}>
                <Link href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
              </div>
              <div className={styles.header_text2}>
                <span>На связи в любое время</span>
              </div>
            </div>
          </div>

          <div className={styles.header_nav_container}>
          <nav className={styles.header_nav}>
            <Link href="#" className={styles.header_nav__link}>О компании</Link>
            <div className={styles.header_vertical}></div>
            <Link href="#" className={styles.header_nav__link}>Доставка</Link>
            <div className={styles.header_vertical}></div>
            <Link href="#" className={styles.header_nav__link}>Возврат</Link>
            <div className={styles.header_vertical}></div>
            <Link href="#" className={styles.header_nav__link}>Контакты</Link>
            </nav>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.headerBottom}>
        <Logo />
        <CatalogButton />
        <SearchBar />
        <div className={styles.contactInfo}>
          <div className={styles.text}>
            <span>+7 (777) 490-00-91</span>
            <p>время работы: 9:00-20:00</p>
            <CallButton />
          </div>
          <Image 
          src={Woman} 
          alt="contact woman" 
          width={80} 
          height={80} 
          />
        </div>
        <div className={styles.vertical}></div>
        <PriceListButton />
        <Cart itemCount={0} totalAmount={0} />
      </div>
    </header>
  );
}
