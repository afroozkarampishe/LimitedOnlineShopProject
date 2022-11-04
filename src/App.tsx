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
    const { data } = await axios.get('https://fakestoreapi.com/users/1');
    setUser(data);
  };
  const getCarts = async() => {
    const { data } = await axios.get('https://fakestoreapi.com/carts/user/1');
    setCarts(data);
  };
  const getCategories = async() => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    setCategories(data);
  };
  const searchProducts = async(category: any) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(data);
    setLoading(false);

    console.log(products);
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
