import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './catalogbutton.module.scss';
import iconCatalog from '../../../../public/image/catalog.png';

export default function CatalogButton() {
  return (
    <Link href="/catalog">
      <div className={styles.catalogButton}>
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
    </Link>
  );
}
