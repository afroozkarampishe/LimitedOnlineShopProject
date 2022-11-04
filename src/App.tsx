import './App.css';

import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import Home from './components/pages/Home';
import Header from './components/UI/header/Header';

const App = () => {
  const [user, setUser] = useState({});
  const [carts, setCarts] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUser = async() => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/users/1');
      setUser(data);
    } catch (e) {
      console.error(e);
    }
  };
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
      <div className="md:container md:mx-auto">
        <Header
          getUser={getUser}
          user={user}
          getCarts={getCarts}
          carts={carts}
        />
        <Home
          searchProducts={searchProducts}
          clearProducts={clearProducts}
          loading={loading}
          products={products}
          getCategories={getCategories}
          categories={categories}
        />
      </div>
    </>
  );
};

export default App;
