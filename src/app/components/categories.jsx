'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import cosmetics from "../image/cosmetics.png";
import items from "../image/items.png";
import kids from "../image/kids.png";
import dishes from "../image/dishes.png";
import chemicals from "../image/chemicals.png";
import styles from './categories.module.scss';

const Categories = () => {
  const router = useRouter();

  const categories = [
    { id: 1, title: "Бытовая химия", image: chemicals },
    { id: 2, title: "Косметика и гигиена", image: cosmetics },
    { id: 3, title: "Товары для дома", image: items },
    { id: 4, title: "Товары для детей и мам", image: kids },
    { id: 5, title: "Посуда", image: dishes },
  ];

  return (
    <section className={styles.categories}>
      <h1 className={styles.categories__title}><span>КАТЕГОРИИ</span> ТОВАРОВ</h1>
      <p className={styles.categories__subtitle}>10 000+ ходовых позиций по специальным ценам</p>
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
