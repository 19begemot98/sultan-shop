
import React from 'react';
import Image from 'next/image';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__label">Популярное</div>
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p>Штрихкод: {product.barcode}</p>
        <p>Производитель: {product.manufacturer}</p>
        <p>Бренд: {product.brand}</p>
      </div>
      <div className="product-card__price">
        <span>{product.price} ₸</span>
        <button className="product-card__button">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
