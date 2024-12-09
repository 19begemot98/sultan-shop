import React from 'react';
import ProductCard from '../../src/app/components/productdescription/description';
import Header from '../../src/app/components/header/header';
import Footer from '../../src/app/components/footer/footer';
import productData from '../../public/products.json';
import Crumbs from '../../src/app/components/crumbs/crumbs';
import ProductSlider from '../../src/app/components/productslider/productslider';

const ProductPage = ({ product, productCategories }) => {
  return (
    <div>
      <Header />
      <Crumbs productCategories={productCategories} />
      <ProductCard product={product} />
      <ProductSlider productCategories={productCategories} />
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const products = productData.productCategories.flatMap((category) => category.products);
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const products = productData.productCategories.flatMap((category) => category.products);
  const product = products.find((prod) => prod.id.toString() === params.id);
  return { props: { product, productCategories: productData.productCategories } };
}

export default ProductPage;
