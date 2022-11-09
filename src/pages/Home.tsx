import React from 'react';
import { useEffect, useState } from 'react';

import Spinner from '../components/Spinner';
import Form from '../feature/products/Form';
import Products from '../feature/products/Products';

const Home = ({
  searchProducts,
  getAllProducts,
  products,
  loading,
  setCart,
  cart,
  error
}: any) => {
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    setFilteredList(products);
  }, [products]);
  return (
    <>
      <div className=" max-w-8xl py-16 px-2 sm:pt-10 sm:pb-24 sm:px-6 lg:px-8">
        <Form
          searchProducts={searchProducts}
          products={products}
          setFilteredList={setFilteredList}
          loading={loading}
          getAllProducts={getAllProducts}
        />

        {loading && <Spinner />}
        {!loading && (
          <Products
            products={filteredList}
            cart={cart}
            setCart={setCart}
            error={error}
          />
        )}
      </div>
    </>
  );
};

export default Home;
