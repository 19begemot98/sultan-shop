import React from 'react';
import Link from 'next/link';
import styles from './button.module.scss';


export default function CatalogButton() {
  return (
    <Link href="/catalog">
      <div className={styles.catalogButton}>
        В каталог
      </div>
    </Link>
  );
}