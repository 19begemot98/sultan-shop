import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cartIcon from '../../../../public/image/icon.png';
import styles from './ProductSlider.module.scss';

const ProductSlider = ({ productCategories }) => {
  if (!productCategories || productCategories.length === 0) {
    return <p>Нет данных для отображения</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 4,  
    customPaging: i => (
      <div className={styles.customDot}></div>
    ),
    appendDots: dots => (
      <div>
        <ul className={styles.dotsContainer}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 3,  
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <h2><span>Похожие</span> <span>товары</span></h2>
      <Slider {...settings}>
        {productCategories[0].products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <div className={styles.productInfo}>
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
              <h3>{product.name}</h3>
              <div className={styles.productInfo}>
                <p>Штрихкод: {product.barcode}</p>
                <p>Производитель: {product.manufacturer}</p>
                <p>Бренд: {product.brand}</p>
              </div>
              <div className={styles.price}>
                <p>{product.price} ₸</p>
                <button className={styles.addToCartButton}>
                    в корзину
                    <Image 
                        src={cartIcon} 
                        alt="Cart Icon" 
                        className={styles.cartIcon} 
                        width={20} 
                        height={16} 
                    />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
