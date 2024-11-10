"use client";

import React from 'react';
import styles from './map.module.scss';

const Map = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Контакты</h2>
        <p>Оптовый поставщик «Султан»</p>
        <div className={styles.contactDetails}>
          <div className={styles.contactAddress}>
            <strong>Адрес:</strong>
            <p>г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</p>
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
        <img src="/src/app/images/map.jpg" alt="Map" />
      </div>
    </div>
  );
};

export default Map;
