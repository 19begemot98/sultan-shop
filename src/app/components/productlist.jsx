
import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.scss';

export const ProductsList = ({ productsList }) => {
  return (
    <section className="products-section">
      <h2>АКЦИОННЫЕ ТОВАРЫ</h2>
      <div className="products-list">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
