import './assets/css/App.css';

import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import Header from './layouts/header/Header';
import Home from './pages/Home';

const App = () => {
  const [carts, setCarts] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCarts = async() => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/carts/user/1');
      setCarts(data);
    } catch (e) {
      console.error(e);
    }
  };
  const getCategories = async() => {
    try {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      setCategories(data);
    } catch (e) {
      console.error(e);
    }
  };
  const searchProducts = async(category: any) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(data);
      setLoading(false);

      console.log(products);
    } catch (e) {
      console.error(e);
    }
  };
  const clearProducts = () => setProducts([]);

  return (
    <>
      <div>
        <Header getCarts={getCarts} carts={carts} />
        <Home
          searchProducts={searchProducts}
          clearProducts={clearProducts}
          loading={loading}
          products={products}
          getCategories={getCategories}
          categories={categories}
          getCarts={getCarts}
        />
      </div>
    </>
  );
};

export default App;
