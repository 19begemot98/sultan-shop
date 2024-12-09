import React from 'react';
import Image from 'next/image';
import styles from './pricelist.module.scss';
//import { useTranslation } from 'react-i18next';
import iconDownload from '../../../../public/image/download.png';

export default function PriceListButton() {
  //const { t } = useTranslation('common');

  return (
    <a href="/path/to/price-list.pdf" download className={styles.priceListButton}>
      <span>Прайс-лист</span> 
      <span className={styles.icon}>
        <Image 
        src={iconDownload} 
        alt="Иконка загрузки" 
        width={20} 
        height={20} 
        />
      </span> 
    </a>
  );
}
