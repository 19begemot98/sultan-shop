import React from 'react';
import styles from './search.module.scss';
import Image from 'next/image';
import iconSearch from '../image/icons_search.png';

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Поиск..." className={styles.searchInput} />
      <button className={styles.searchButton}>
        <Image src={iconSearch} alt="Search Icon" width={20} height={20} />
      </button>
    </div>
  );
}
