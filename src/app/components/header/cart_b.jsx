import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './cart.module.scss';
import iconBasket from '../image/icons_basket.png';

export default function Cart({ itemCount = 0, totalAmount = 0 }) {
  const { t } = useTranslation('common');

  return (
    <Link href="/cart" passHref>
      <div className={styles.cart}>
        <span className={styles.icon}>
          <Image src={iconBasket} alt="basket Icon" width={40} height={40} />
          <span className={styles.itemCount}>{itemCount}</span>
        </span>
        <span className={styles.label}>{t('cart_label')}</span>
        <span className={styles.totalAmount}>{totalAmount.toLocaleString()} ₸</span>
      </div>
    </Link>
  );
}
