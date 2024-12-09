'use client';
import React, { useState, useEffect } from 'react';
import styles from './SponsorSlider.module.scss';
import Sponsor from './sponsor'; 
import sponsorData from '../../../../public/products.json';  

const SponsorSlider = () => {
  const [sponsors, setSponsors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sponsorsPerSlide = 10; 

  useEffect(() => {
    setSponsors(sponsorData.sponsors);  
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(sponsors.length - sponsorsPerSlide, 0) : prevIndex - sponsorsPerSlide));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + sponsorsPerSlide >= sponsors.length ? 0 : prevIndex + sponsorsPerSlide));
  };

  return (
    <div className={styles.sponsorSlider}>
      <h2 className={styles.title}>Лучшие товары</h2>
      <p className={styles.subtitle}>От ведущих мировых брендов</p>
      <div className={styles.slider}>
        <button className={styles.prev} onClick={handlePrev}>&lt;</button>
        <div className={styles.sponsorContainer} style={{ transform: `translateX(-${currentIndex * (100 / sponsorsPerSlide)}%)` }}>
          {sponsors.slice(currentIndex, currentIndex + sponsorsPerSlide).map((sponsor, index) => (
            <div key={index} className={styles.sponsor}>
              <img src={sponsor.image} alt={`Sponsor ${index}`} style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
        <button className={styles.next} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default SponsorSlider;
