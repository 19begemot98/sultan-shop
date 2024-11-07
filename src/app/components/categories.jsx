"use client"; // Mark the component as a Client Component

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import './Categories.scss';

import chemicals from "../image/chemicals.png";
import cosmetics from "../image/cosmetics.png";
import items from "../image/items.png";
import kids from "../image/kids.png";
import dishes from "../image/dishes.png";

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
    <section className="categories">
      <h1 className="categories__title">КАТЕГОРИИ ТОВАРОВ</h1>
      <p className="categories__subtitle">10 000+ ходовых позиций по специальным ценам</p>
      <div className="categories__list">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => router.push('/catalog')}
          >
            <Image 
              src={category.image} 
              alt={category.title} 
              width={60} 
              height={60} 
              className="category-item__image" 
            />
            <h2 className="category-item__title">{category.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;