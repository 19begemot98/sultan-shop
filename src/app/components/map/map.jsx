"use client";

import React from 'react';
import styles from './map.module.scss';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Mappng from '../image/map.jpg';

const Map = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.supplier')}</p>
        <div className={styles.contactDetails}>
          <div className={styles.contactAddress}>
            <strong>{t('contact.addressTitle')}</strong>
            <p>{t('contact.address')}</p>
            <p>{t('contact.market')}</p>
          </div>
          <div className={styles.contactSales}>
            <strong>{t('contact.salesDepartment')}</strong>
            <p>{t('contact.phone')}</p>
            <p>{t('contact.email')}</p>
          </div>
        </div>
        <div className={styles.contactTax}>
          <strong>{t('contact.taxpayerData')}</strong>
          <p>{t('contact.taxpayerName')}</p>
          <p>{t('contact.taxpayerID')}</p>
        </div>
      </div>
      <div className={styles.contactMap}>
        <Image src={Mappng} alt={t('contact.mapAlt')} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Map;
