"use client";

import React from 'react';
import styles from './map.module.scss';
import Image from 'next/image';
// import { useTranslation } from 'react-i18next'; 
import Mappng from '../../../../public/image/map.jpg';

const Map = () => {
  // const { t } = useTranslation('common'); 

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Контакты</h2> {/* t('contact.title') */}
        <p>Оптовый поставщик «Султан»</p> {/* t('contact.supplier') */}
        <div className={styles.contactDetails}>
          <div className={styles.contactAddress}>
            <strong>Адрес:</strong> {/* t('contact.addressTitle') */}
            <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p> {/* t('contact.address') */}
            <p>(Рынок Восточный)</p> {/* t('contact.market') */}
          </div>
          <div className={styles.contactSales}>
            <strong>Отдел продаж:</strong> {/* t('contact.salesDepartment') */}
            <p>+7 (777) 490-00-91</p> {/* t('contact.phone') */}
            <p>opt.sultan@mail.ru</p> {/* t('contact.email') */}
          </div>
        </div>
        <div className={styles.contactTax}>
          <strong>Данные налогоплательщика:</strong> {/* t('contact.taxpayerData') */}
          <p>ИП Катран Д.С.</p> {/* t('contact.taxpayerName') */}
          <p>ИИН: 860113450858</p> {/* t('contact.taxpayerID') */}
        </div>
      </div>
      <div className={styles.contactMap}>
        <Image 
          src={Mappng} 
          alt="Карта" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  );
};

export default Map;
