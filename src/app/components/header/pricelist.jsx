import React from 'react';
import Image from 'next/image';
import styles from './pricelist.module.scss';
import { useTranslation } from 'react-i18next';
import iconDownload from '../image/download.png';

export default function PriceListButton() {
  const { t } = useTranslation('common');

  return (
    <a href="/path/to/price-list.pdf" download className={styles.priceListButton}>
      <span>{t('priceList')}</span>
      <span className={styles.icon}>
        <Image src={iconDownload} alt={t('downloadIconAlt')} width={20} height={20} />
      </span> 
    </a>
  );
}
