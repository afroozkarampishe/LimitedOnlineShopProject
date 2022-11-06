import React from 'react';

import Spinner from '../components/Spinner';
import Form from '../feature/products/Form';
import Products from '../feature/products/Products';
const Home = ({
  searchProducts,
  clearProducts,
  products,
  loading,
  getCategories,
  categories,
  getCarts,
  error
}: any) => {
  return (
    <>
      <div className=" max-w-8xl py-16 px-2 sm:pt-10 sm:pb-24 sm:px-6 lg:px-8">
        <Form
          searchProducts={searchProducts}
          getCategories={getCategories}
          categories={categories}
          clearProducts={clearProducts}
          products={products}
          loading={loading}
        />

        {loading && <Spinner />}
        {!loading && (
          <Products products={products} getCarts={getCarts} error={error} />
        )}
      </div>
    </>
  );
};

export default Home;
