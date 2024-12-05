import React from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './search.module.scss';
import Image from 'next/image';
import iconSearch from '../../../../public/image/icons-search.png';

export default function SearchBar() {
  // const { t } = useTranslation('common'); 

  return (
    <div className={styles.searchBar}>
      <input 
        type="text" 
        // placeholder={t('searchPlaceholder')} 
        placeholder="Поиск..." 
        className={styles.searchInput} 
      />
      <button className={styles.searchButton}>
        <Image 
          src={iconSearch} 
          alt="Search Icon" 
          width={20} 
          height={20} 
        />
      </button>
    </div>
  );
}
