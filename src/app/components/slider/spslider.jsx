'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SponsorSlider.module.scss';
import Sponsor from './sponsor';

const sponsors = [
  { image: '/image/Airwick.png', nameKey: 'AirWick' },
  { image: '/image/masterfresh.png', nameKey: 'MasterFresh' },
  { image: '/image/sbiar.png', nameKey: 'Sbiar' },
  { image: '/image/cottonclub.png', nameKey: 'CottonClub' },
  { image: '/image/camay.png', nameKey: 'Camay' },
  { image: '/image/johnson.png', nameKey: 'Johnsons' },
  { image: '/image/colgate.png', nameKey: 'Colgate' },
  { image: '/image/Nivea.png', nameKey: 'Nivea' },
  { image: '/image/ac.png', nameKey: 'AC' },
  { image: '/image/Nefis.png', nameKey: 'Nefis' }
];

const SponsorSlider = () => {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.sponsorSlider}>
      <h2 className={styles.title}>{t('bestProducts')}</h2>
      <p className={styles.subtitle}>{t('leadingBrands')}</p>
      <div className={styles.slider}>
        <button className={styles.prev} onClick={handlePrev}>&lt;</button>
        <div className={styles.sponsorContainer}>
          <Sponsor 
            image={sponsors[currentIndex].image} 
            nameKey={sponsors[currentIndex].nameKey} 
          />
        </div>
        <button className={styles.next} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default SponsorSlider;
