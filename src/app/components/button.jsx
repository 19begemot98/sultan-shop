// src/components/Button.jsx
import React from 'react';
import styles from './button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;


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