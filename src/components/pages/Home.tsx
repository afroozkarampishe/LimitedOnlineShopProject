import React from 'react';

import Form from '../products/Form';
import Products from '../products/Products';
import Spinner from '../UI/Spinner';
const Home = ({
  searchProducts,
  clearProducts,
  products,
  loading,
  getCategories,
  categories
}: any) => {
  return (
    <>
      <div className="mx-auto max-w-8xl py-16 px-2 sm:pt-10 sm:pb-24 sm:px-6 lg:px-8">
        <Form
          searchProducts={searchProducts}
          getCategories={getCategories}
          categories={categories}
        />
        {products.length > 0 && (
          <button className="clear" onClick={() => clearProducts()}>
            CLEAR
          </button>
        )}
        {loading && <Spinner />}
        <Products products={products} />
      </div>
    </>
  );
};

export default Home;
