'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cartIcon from '../../../../public/image/icon.png'; 
import styles from './ProductCard.module.scss';

import productData from '../../../../public/products.json';

const ProductList = () => {
  return (
    <section className={styles.productList}>
      {productData.productCategories.map((category) => (
        <div key={category.title}>
          <div className={styles.categoryTitle}>
            <span className={styles.promoText}>{category.title.split(' ')[0]}</span> <span className={styles.productsText}>{category.title.split(' ')[1]}</span>
          </div>
          <div className={styles.products}>
            {category.products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className={styles.productCard}>
                <div>
                  <div className={styles.productLabel}>Популярное</div>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.productImage} 
                    width={92} 
                    height={194} 
                  />                  
                  
                  <div className={styles.productVolumeRow}>
                    <Image 
                      src={product.smallimage} 
                      alt="Small Image" 
                      className={styles.smallImage} 
                      width={20} 
                      height={16} 
                    />
                    <span className={styles.productVolume}>{product.volume}</span>
                  </div>

                  <div className={styles.productDetails}>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <div className={styles.productInfo}>
                      <p>Штрихкод: {product.barcode}</p>
                      <p>Производитель: {product.manufacturer}</p>
                      <p>Бренд: {product.brand}</p>
                    </div>
                    <div className={styles.productFooter}>
                      <span className={styles.productPrice}>{product.price} ₸</span>
                      <button className={styles.addToCartButton}>
                         в корзину
                        <Image 
                          src={cartIcon} 
                          alt="Cart Icon" 
                          className={styles.cartIcon} 
                          width={26} 
                          height={26} 
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
