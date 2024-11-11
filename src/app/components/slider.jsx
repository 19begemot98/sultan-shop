'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import { Button } from './button'; 
import promotion from '../images/promotion.png';

const sliderData = [
  {
    image: promotion,
    title: 'Название Акции',
    description: 'Условия акции в пару строк. Условия акции в пару строк.',
    buttonText: 'ПРИНЯТЬ УЧАСТИЕ',
  },
  {
    image: promotion,
    title: 'Каталог Товаров',
    description: 'Описание каталога в пару строк. Описание каталога в пару строк.',
    buttonText: 'ПОСМОТРЕТЬ КАТАЛОГ',
  },
];

const Slider = () => {
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
        <Image src={sliderData[currentIndex].image} alt={sliderData[currentIndex].title} className={styles.slideImage} />
        <div className={styles.slideContent}>
          <p className={styles.promoDate}>*АКЦИЯ ДЕЙСТВУЕТ ДО 04/09/22</p>
          <h2>{sliderData[currentIndex].title}</h2>
          <p>{sliderData[currentIndex].description}</p>
          <Button>{sliderData[currentIndex].buttonText}</Button>
        </div>
      </div>
      <button className={styles.sliderButton} onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Slider;
