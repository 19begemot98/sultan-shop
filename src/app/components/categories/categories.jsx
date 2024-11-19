'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import cosmetics from "../image/cosmetics.png";
import items from "../image/items.png";
import kids from "../image/kids.png";
import dishes from "../image/dishes.png";
import chemicals from "../image/chemicals.png";
import styles from './categories.module.scss';

const Categories = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const categories = [
    { id: 1, title: t('categories.chemicals'), image: chemicals },
    { id: 2, title: t('categories.cosmetics'), image: cosmetics },
    { id: 3, title: t('categories.items'), image: items },
    { id: 4, title: t('categories.kids'), image: kids },
    { id: 5, title: t('categories.dishes'), image: dishes },
  ];

  return (
    <section className={styles.categories}>
      <h1 className={styles.categories__title}><span>{t('categories.title')}</span> {t('categories.subtitle')}</h1>
      <p className={styles.categories__subtitle}>{t('categories.description')}</p>
      <div className={styles.categories__list}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.categoryItem}
            onClick={() => router.push('/catalog')}
          >
            <Image 
              src={category.image} 
              alt={category.title} 
              width={250} 
              height={250} 
              className={styles.categoryImage}
            />
            <h2 className={styles.categoryName}>{category.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
