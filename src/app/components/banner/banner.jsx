import React from 'react';
import Image from "next/image";
// import { useTranslation } from 'react-i18next';
import Photo_banner from '../../../../public/image/banner.png';
import styles from './banner.module.scss';
import { CatalogButton } from '../button';

const Banner = () => {
  // const { t } = useTranslation('common'); 

  return (
    <div className={styles.banner}>
      <div className={styles.banner__overlay}>
        <div className={styles.banner__content}>
          {/* <h1>{t('banner.title')}</h1> */}
          <h1>Бытовая химия, косметика и хозтовары</h1>
          {/* <p>{t('banner.subtitle')}</p> */}
          <p>Оптом по Кокшетау и области</p>
          <CatalogButton className={styles.catalogButton} />
        </div>

        <div className={styles.banner__features}>
          <div className={styles.feature}>
            <div className={styles.plusCircle}>+</div>
            <div className={styles.featureText}>
              {/* <p>{t('banner.feature1.line1')}</p>
              <p>{t('banner.feature1.line2')}</p> */}
              <p>Только самые</p>
              <p>выгодные предложения</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.plusCircle}>+</div>
            <div className={styles.featureText}>
              {/* <p>{t('banner.feature2.line1')}</p>
              <p>{t('banner.feature2.line2')}</p> */}
              <p>Бесплатная доставка</p>
              <p>по Кокшетау от 10 тыс ₸</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.banner__image}>
        <Image 
          src={Photo_banner} 
          alt="Чистящие средства" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  );
};

export default Banner;
