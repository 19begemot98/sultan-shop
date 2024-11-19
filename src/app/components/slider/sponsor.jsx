import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './Sponsor.module.scss';

const Sponsor = ({ image, nameKey }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.sponsor}>
      <Image src={image} alt={t(nameKey)} className={styles.image} width={100} height={100} />
      <p className={styles.name}>{t(nameKey)}</p>
    </div>
  );
};

export default Sponsor;