// src/app/components/SponsorSlider.jsx
'use client';

import React, { useState } from 'react';
import styles from './SponsorSlider.module.scss';
import Sponsor from './Sponsor';

const sponsors = [
  { image: '/images/Airwick.png', name: 'Air Wick' },
  { image: '/images/masterfresh.png', name: 'Master Fresh' },
  { image: '/images/sbiar.png', name: 'Sbiar' },
  { image: '/images/cottonclub.png', name: 'Cotton Club' },
  { image: '/images/camay.png', name: 'Camay' },
  { image: '/images/johnson.png', name: 'Johnson\'s' },
  { image: '/images/colgate.png', name: 'Colgate' },
  { image: '/images/Nivea.png', name: 'Nivea' },
  { image: '/images/ac.png', name: 'AC' },
  { image: '/images/Nefis.png', name: 'Nefis' }
];

const SponsorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.sponsorSlider}>
      <h2 className={styles.title}>Лучшие товары</h2>
      <p className={styles.subtitle}>От ведущих мировых брендов</p>
      <div className={styles.slider}>
        <button className={styles.prev} onClick={handlePrev}>&lt;</button>
        <div className={styles.sponsorContainer}>
          <Sponsor image={sponsors[currentIndex].image} name={sponsors[currentIndex].name} />
        </div>
        <button className={styles.next} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default SponsorSlider;
