'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import aos from "../image/aos_crystal.png";
import ariel from "../image/ariel_capsules.png";
import bimax from "../image/bimax_power.png";
import asort from "../image/sort_apelsin.png";
import cartIcon from '../image/icon.png'; 
import styles from './ProductCard.module.scss';

const productCategories = [
  {
    title: 'Акционные товары',
    products: [
      {
        id: 1,
        image: aos,
        name: 'AOS Ср-во для мытья посуды Апельсин+мята',
        volume: '450 мл',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 2,
        image: asort,
        name: 'AOS средство для мытья посуды Crystal',
        volume: '450 мл',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 3,
        image: ariel,
        name: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        volume: '450 мл',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
      {
        id: 4,
        image: bimax,
        name: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        volume: '450 мл',
        barcode: '4604040907548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76'
      },
    ]
  }
];

const ProductList = () => {
  const { t } = useTranslation('common');

  return (
    <section className={styles.productList}>
      {productCategories.map((category) => (
        <div key={category.title}>
          <div className={styles.categoryTitle}>
            <span className={styles.promoText}>{t('promotionalProducts').split(' ')[0]}</span> <span className={styles.productsText}>{t('promotionalProducts').split(' ')[1]}</span>
          </div>
          <div className={styles.products}>
            {category.products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productLabel}>{t('popular')}</div>
                <Image src={product.image} alt={product.name} className={styles.productImage} width={92} height={194} />
                <div className={styles.productVolume}>{product.volume}</div>
                <div className={styles.productDetails}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <div className={styles.productInfo}>
                    <p>{t('barcode')}: {product.barcode}</p>
                    <p>{t('manufacturer')}: {product.manufacturer}</p>
                    <p>{t('brand')}: {product.brand}</p>
                  </div>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price} {t('currency')}</span>
                    <button className={styles.addToCartButton}>
                      {t('addToCart')}
                      <Image src={cartIcon} alt="Cart Icon" className={styles.cartIcon} width={26} height={26} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
