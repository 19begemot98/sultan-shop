// src/components/Button.jsx
import React from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

const CatalogButton = () => {
  return (
    <Link href="/catalog"> 
      <div className={styles.catalogButton}>
        В каталог
      </div>
    </Link>
  );
};


export { Button, CatalogButton };