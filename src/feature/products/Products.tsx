import React from 'react';

import Product from './Product';
const Products = ({ products, getCarts }: any) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
      {products.map((product: any) => (
        <Product key={product.id} product={product} getCarts={getCarts} />
      ))}
    </div>
  );
};

export default Products;
