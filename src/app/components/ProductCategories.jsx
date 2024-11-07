'use client';
import React from 'react';
import ProductList from './productlist';


const productCategories = [
  {
    title: 'Акционные товары',
    products: [
      {
        id: 1,
        image: 'image/sort_apelsin.png',
        name: 'AOS Ср-во для мытья посуды Апельсин+мята',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 2,
        image: 'image/aos_crystal.png',
        name: 'AOS средство для мытья посуды Crystal',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 3,
        image: 'image/ariel_capsules.png',
        name: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 4,
        image: 'image/bimax_powder.png',
        name: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      // Repeat products for demo purposes as in the photo
      { /* other repeated products */ }
    ]
  }
];

const ProductCategories = () => {
  return (
    <div>
      {productCategories.map((category, index) => (
        <div key={index}>
          <h2>{category.title}</h2>
          <ProductList productsList={category.products} />
        </div>
      ))}
    </div>
  );
};

export default productCategories;
