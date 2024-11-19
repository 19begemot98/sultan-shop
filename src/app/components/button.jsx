import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

const CatalogButton = () => {
  const { t } = useTranslation('common');

  return (
    <Link href="/catalog">
      <div className={styles.catalogButton}>
        {t('catalog_button')}
      </div>
    </Link>
  );
};

export { Button, CatalogButton };
