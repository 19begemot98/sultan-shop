'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './Slider.module.scss';
import { Button } from '../button'; 
import promotion from '../image/promotion.png';

const sliderData = [
  {
    image: promotion,
    titleKey: 'promoTitle1',
    descriptionKey: 'promoDescription1',
    buttonTextKey: 'promoButtonText1',
  },
  {
    image: promotion,
    titleKey: 'promoTitle2',
    descriptionKey: 'promoDescription2',
    buttonTextKey: 'promoButtonText2',
  },
];

const Slider = () => {
  const { t } = useTranslation('common');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.sliderButton} onClick={handlePrev}>&lt;</button>
      <div className={styles.slide}>
        <Image src={sliderData[currentIndex].image} alt={t(sliderData[currentIndex].titleKey)} className={styles.slideImage} />
        <div className={styles.slideContent}>
          <p className={styles.promoDate}>{t('promoDate')}</p>
          <h2>{t(sliderData[currentIndex].titleKey)}</h2>
          <p>{t(sliderData[currentIndex].descriptionKey)}</p>
          <Button>{t(sliderData[currentIndex].buttonTextKey)}</Button>
        </div>
      </div>
      <button className={styles.sliderButton} onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Slider;
