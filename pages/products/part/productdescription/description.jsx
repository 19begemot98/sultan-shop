'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cartIcon from '../../../../public/image/icon.png';
import iconDownload from '../../../../public/image/download.png';
import share from '../../../../public/image/share.png'
import styles from './description.module.scss';

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isCharacteristicsOpen, setCharacteristicsOpen] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <section className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            className={styles.productImage}
          />
        </div>

        <div className={styles.rightColumn}>
          {/* Статус наличия */}
          <div className={styles.availability}>
            <span className={styles.inStock}>{product.stock ? 'В наличии' : 'Нет в наличии'}</span>
          </div>

          <h1 className={styles.productName}>{product.name}</h1>
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

          <div className={styles.purchaseRow}>
            <span className={styles.productPrice}>{product.price} ₸</span>
            <div className={styles.quantityControls}>
              <button onClick={decrementQuantity} className={styles.decrement}>-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={incrementQuantity} className={styles.increment}>+</button>
            </div>
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

          <div className={styles.actionRow}>
            <Link href="#" className={styles.shareButton}>
              <Image
                src={share}
                alt="Share Icon"
                width={20}
                height={20}
                className={styles.shareIcon}
              />
            </Link>
            <div className={styles.deliveryText}>
              При покупке от <strong>10 000 т</strong> бесплатная доставка по Кокчетаву и области
            </div>
            <a href="/path/to/price-list.pdf" download className={styles.priceListButton}>
              <span>Прайс-лист</span> 
              <span className={styles.icon}>
                <Image 
                  src={iconDownload} 
                  alt="Иконка загрузки" 
                  width={20} 
                  height={20} 
                />
              </span> 
            </a>
          </div>

          <div className={styles.productInfo}>
            <p>Производитель: <strong>{product.manufacturer || 'Не указан'}</strong></p>
            <p>Бренд: <strong>{product.brand || 'Не указан'}</strong></p>
            <p>Артикул: <strong>{product.barcode || 'Не указан'}</strong></p>
            <p>Кол-во в коробке:<strong> {product.packageQuantity || '6 шт.'}</strong></p>
            <p>Штрихкод: <strong>{product.barcode || 'Не указан'}</strong></p>
            <p>Размеры коробки:<strong> {product.size || '10x10x10'}</strong></p>
            <p>Вес коробки: <strong>{product.weight || '0.5 кг'}</strong></p>
          </div>

          <div className={styles.description}>
            <div
              className={styles.descriptionHeader}
              onClick={() => setDescriptionOpen(!isDescriptionOpen)}
            >
              Описание
              <span className={styles.arrow}>{isDescriptionOpen ? '▲' : '▼'}</span>
            </div>
            {isDescriptionOpen && (
              <p className={styles.descriptionText}>
                {product.description || 'Описание не доступно'}
              </p>
            )}
          </div>

          <div className={styles.characteristics}>
            <div
              className={styles.characteristicsHeader}
              onClick={() => setCharacteristicsOpen(!isCharacteristicsOpen)}
            >
              Характеристики
              <span className={styles.arrow}>{isCharacteristicsOpen ? '▲' : '▼'}</span>
            </div>
            {isCharacteristicsOpen && (
              <ul className={styles.characteristicsList}>
                <li>Назначение: <strong>{product.purpose || 'Не указано'}</strong></li>
                <li>Тип: <strong>{product.type || 'Не указан'}</strong></li>
                <li>Бренд:<strong> {product.brand || 'Не указан'}</strong></li>
                <li>Артикул: <strong>{product.barcode || 'Не указан'}</strong></li>
                <li>Кол-во в коробке:<strong> {product.packageQuantity || 'Не указано'}</strong></li>
                <li>Штрихкод:<strong> {product.barcode || 'Не указан'}</strong></li>
                <li>Вес коробки:<strong> {product.weight || '0.5 кг'}</strong></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
