import React from 'react';

import Products from '../products/Products';
const Home = ({ getProducts, products }: any) => {
  return (
    <>
      <div className="mx-auto max-w-8xl py-16 px-2 sm:py-24 sm:px-6 lg:px-8">
        <h1 style={{ textAlign: 'center', padding: '20px 0' }}>All Posts</h1>
        <Products getProducts={getProducts} products={products} />
      </div>
    </>
  );
};

export default Home;
