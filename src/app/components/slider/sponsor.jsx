import React from 'react';
import Image from 'next/image';
import styles from './Sponsor.module.scss';

const Sponsor = ({ image, name }) => {
  return (
    <div className={styles.sponsor}>
      <Image 
      src={image} 
      alt={name} 
      className={styles.image} 
      width={100} 
      height={100} 
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Sponsor;
