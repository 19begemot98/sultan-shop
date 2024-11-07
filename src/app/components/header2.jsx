import React from 'react';
import Image from 'next/image';
import Logo from './logotip';
import CatalogButton from './catalog_button';
import SearchBar from './search_b';
import CallButton from './Callbutton';
import PriceListButton from './pricelist';
import Cart from './cart_b';
import styles from './header2.module.scss';
import Woman from '../image/woman.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <CatalogButton />
      <SearchBar />
      <div className={styles.contactInfo}>
        <span>+7 (777) 490-00-91</span>
        <span>время работы: 9:00-20:00</span>
        <CallButton />
        <div>
            <Image src={Woman} alt="contact woman" width={80} height={40} />
        </div>
      </div>
      <div className={styles.vertical}></div>
      <PriceListButton />
      <Cart itemCount={0} totalAmount={0} />
    </header>
  );
}
