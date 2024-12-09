'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './categories.module.scss';
import products from '../../../../public/products.json'; 

const Categories = () => {
  const router = useRouter();
  const { categories } = products;

  return (
    <section className={styles.categories}>
      <h1 className={styles.categories__title}><span>КАТЕГОРИИ</span> ТОВАРОВ</h1>
      <p className={styles.categories__subtitle}>10,000+ популярных товаров по специальным ценам</p>
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
