'use client';

import React from 'react';
import styles from './map.module.scss';
const Mape = dynamic(() => import('./components/map'), { ssr: false });

const Map = () => {
  return (
    <div className={styles['contact-container']}>
      <div className={styles['contact-info']}>
        <h2>Контакты</h2>
        <p>Оптовый поставщик «Султан»</p>
        <div className={styles['contact-details']}>
          <div className={styles['contact-address']}>
            <strong>Адрес:</strong>
            <p>г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</p>
          </div>
          <div className={styles['contact-sales']}>
            <strong>Отдел продаж:</strong>
            <p>+7 (777) 490-00-91</p>
            <p>opt.sultan@mail.ru</p>
          </div>
        </div>
        <div className={styles['contact-tax']}>
          <strong>Данные налогоплательщика:</strong>
          <p>ИП Катран Д.С.</p>
          <p>ИИН: 860113450858</p>
        </div>
      </div>
      <div className={styles['contact-map']}>
        <img src="/images/map-image.jpg" alt="Mape" />
      </div>
    </div>
  );
};

export default Map;
