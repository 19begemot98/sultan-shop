'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './cart.module.scss';
import iconBasket from '../../../../public/image/icons-basket.png';

export default function Cart({ itemCount = 0, totalAmount = 0 }) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/cart');
  };

  return (
    <div className={styles.cart} onClick={handleClick}>
      <span className={styles.icon}>
        <Image 
          src={iconBasket} 
          alt="basket Icon" 
          width={40} 
          height={40} 
        />
        <span className={styles.itemCount}>{itemCount}</span>
      </span>
      <span className={styles.label}>Корзина</span>
      <span className={styles.totalAmount}>{totalAmount.toLocaleString()} ₸</span>
    </div>
  );
}
