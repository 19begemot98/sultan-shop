'use client'
import React, { useState } from 'react';
import styles from './Slider.module.scss';
import Button from './Button';
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
    <div className={styles['slider-container']}>
      <div className={styles['slider']}>
        <button className={styles['slider-button']} onClick={handlePrev}>&lt;</button>
        <div className={styles['slide']}>
          <img src={sliderData[currentIndex].image} alt={sliderData[currentIndex].title} />
          <div className={styles['slide-content']}>
            <h2>{sliderData[currentIndex].title}</h2>
            <p>{sliderData[currentIndex].description}</p>
            <Button>{sliderData[currentIndex].buttonText}</Button>
          </div>
        </div>
        <button className={styles['slider-button']} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;
