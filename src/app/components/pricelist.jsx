import React from 'react';
import Image from 'next/image';
import styles from './pricelist.module.scss';
import iconDownload from '../image/download.png';

export default function PriceListButton() {
  return (
    <div href="/path/to/price-list.pdf" download className={styles.priceListButton}>
      <span>Прайс-лист</span>
      <span className={styles.icon}>
        <Image src={iconDownload} alt="Search Download" width={20} height={20} />
      </span> 
    </div>
  );
}
