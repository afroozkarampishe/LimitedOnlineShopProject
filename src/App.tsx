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
  const getUser = async() => {
    const { data } = await axios.get('https://fakestoreapi.com/users/1');
    setUser(data);
  };
  const getCarts = async() => {
    const { data } = await axios.get('https://fakestoreapi.com/carts/user/1');
    setCarts(data);
  };
  const getProducts = async() => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
  };
  return (
    <>
      <div className="md:container md:mx-auto">
        <Header
          getUser={getUser}
          user={user}
          getCarts={getCarts}
          carts={carts}
        />
        <Home getProducts={getProducts} products={products} />
      </div>
    </>
  );
};

export default App;
