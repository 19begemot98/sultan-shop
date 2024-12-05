'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import { Button } from '../button'; 
import sliderData from '../../../../public/products.json'; 

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.sliderData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderData.sliderData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <button 
      className={styles.sliderButton} 
      onClick={handlePrev}>
        &lt;
      </button>

    
      <div className={styles.slide}>
        <Image 
          src={sliderData.sliderData[currentIndex].image} 
          alt="Promo Image" 
          className={styles.slideImage} 
          width={1366} 
          height={500} 
        />
        <div className={styles.slideContent}>
          <p className={styles.promoDate}>*Акция действует до 04/09/22</p>
          <h2>{sliderData.sliderData[currentIndex].title}</h2>
          <p>{sliderData.sliderData[currentIndex].description}</p>
          <button className={styles.slideButton}>{sliderData.sliderData[currentIndex].buttonText}</button>
        </div>
      </div>


      <button 
      className={styles.sliderButton} 
      onClick={handleNext}>
        &gt;
      </button>

      <div className={styles.indicatorContainer}>
        {sliderData.sliderData.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
          ></span>
        ))}
      </div>
   </div>
  );
};

export default Slider;