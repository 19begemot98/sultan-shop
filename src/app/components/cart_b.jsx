import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './cart.module.scss';
import iconBasket from '../image/icons_basket.png';

export default function Cart({ itemCount = 0, totalAmount = 0 }) {
  return (
    <Link href="/cart" passHref>
      <div className={styles.cart}>
        <span className={styles.icon}>
          <Image src={iconBasket} alt="basket Icon" width={20} height={20} />
        </span>
        <span className={styles.itemCount}>{itemCount}</span>
        <span className={styles.totalAmount}>{totalAmount} ₸</span>
      </div>
    </Link>
  );
}

