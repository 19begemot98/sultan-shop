import React from 'react';
import Image from "next/image";
import Photo_banner from '../image/banner.png';
import styles from './banner.module.scss';
import Button from '../components/button';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <h1>Бытовая химия, косметика и хозтовары</h1>
        <p>Оптом по Кокшетау и области</p>
        <Button />
      </div>

     
      <div className={styles.banner__features}>
        <div className={styles.feature}>
          <div className={styles.plusCircle}>+</div>
          <div className={styles.featureText}>
            <p>Только самые</p>
            <p>выгодные предложения</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.plusCircle}>+</div>
          <div className={styles.featureText}>
            <p>Бесплатная доставка</p>
            <p>по Кокчетау от 10 тыс ₸</p>
          </div>
        </div>
      </div>

      <div className={styles.banner__image}>
        <Image src={Photo_banner} alt="Cleaning Supplies" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Banner;
