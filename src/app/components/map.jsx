"use client";

import React from 'react';
import styles from './map.module.scss';
import Image from 'next/image';
import Mappng from '../images/map.jpg';

const Map = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Контакты</h2>
        <p>Оптовый поставщик «Султан»</p>
        <div className={styles.contactDetails}>
          <div className={styles.contactAddress}>
            <strong>Адрес:</strong>
            <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
            <p>(Рынок Восточный)</p>
          </div>
          <div className={styles.contactSales}>
            <strong>Отдел продаж:</strong>
            <p>+7 (777) 490-00-91</p>
            <p>opt.sultan@mail.ru</p>
          </div>
        </div>
        <div className={styles.contactTax}>
          <strong>Данные налогоплательщика:</strong>
          <p>ИП Катран Д.С.</p>
          <p>ИИН: 860113450858</p>
        </div>
      </div>
      <div className={styles.contactMap}>
        <Image src={Mappng} alt="Map" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Map;
