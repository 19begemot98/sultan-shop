'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './catalogbutton.module.scss';
import iconCatalog from '../../../../public/image/catalog.png';

export default function CatalogButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/catalog');
  };

  return (
    <div className={styles.catalogButton} onClick={handleClick}>
      Каталог
      <span className={styles.icon}>
        <Image 
          src={iconCatalog} 
          alt="Catalog Icon" 
          width={20} 
          height={20} 
        />
      </span>
    </div>
  );
}
