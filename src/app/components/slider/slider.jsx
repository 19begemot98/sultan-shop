'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import sliderData from '../../../../public/products.json';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Левая стрелка */}
      <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={handlePrev}>
        <span className={styles.arrowSymbol}>&lt;</span>
      </div>

      {/* Слайд */}
      <div className={styles.slide}>
        <Image
          src={sliderData.sliderData[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.slideImage}
          width={1366}
          height={500}
        />
        <div className={styles.slideContent}>
          <div className={styles.textWrapper}>
            <p className={styles.promoDate}>
              *Акция действует до {sliderData.sliderData[currentIndex].date}
            </p>
            <h2 className={styles.title}>{sliderData.sliderData[currentIndex].title}</h2>
            <p className={styles.description}>{sliderData.sliderData[currentIndex].description}</p>
          </div>
          <button className={styles.slideButton}>
            {sliderData.sliderData[currentIndex].buttonText}
          </button>
        </div>
      </div>

      {/* Правая стрелка */}
      <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={handleNext}>
        <span className={styles.arrowSymbol}>&gt;</span>
      </div>
    </div>
  );
};

export default Slider;
