import React from 'react';
import { useEffect, useState } from 'react';

import Spinner from '../components/Spinner';
import Form from '../feature/products/Form';
import Products from '../feature/products/Products';

const Home = ({
  searchProducts,
  clearProducts,
  products,
  setProducts,
  loading,
  getCategories,
  categories,
  getCarts,
  error
}: any) => {
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    setFilteredList(products);
  }, [products]);
  return (
    <>
      <div className=" max-w-8xl py-16 px-2 sm:pt-10 sm:pb-24 sm:px-6 lg:px-8">
        <Form
          searchProducts={searchProducts}
          getCategories={getCategories}
          categories={categories}
          clearProducts={clearProducts}
          products={products}
          setProducts={setProducts}
          filteredList={filteredList}
          setFilteredList={setFilteredList}
          loading={loading}
        />

        {loading && <Spinner />}
        {!loading && (
          <Products products={filteredList} getCarts={getCarts} error={error} />
        )}
      </div>
    </>
  );
};

export default Home;
