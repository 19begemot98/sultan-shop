//productcateg.jsx
'use client';
import React from 'react';
import ProductList from './productlist';
import aos from "../image/aos_crystal.png";
import ariel from "../image/ariel_capsules.png";
import bimax from "../image/bimax_power.png";
import asort from "../image/sort_apelsin.png";


const productCategories = [
  {
    title: 'Акционные товары',
    products: [
      {
        id: 1,
        image: aos,
        name: 'AOS Ср-во для мытья посуды Апельсин+мята',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 2,
        image: asort,
        name: 'AOS средство для мытья посуды Crystal',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 3,
        image: ariel,
        name: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 4,
        image: bimax,
        name: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
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
