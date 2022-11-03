import React from 'react';
import { useEffect } from 'react';

import Product from './Product';
const Products = ({ getProducts, products }: any) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
      {products.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
