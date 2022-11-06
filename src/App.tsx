import './assets/css/App.css';

import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import { fetchProducts } from './api/productsApi';
import Header from './layouts/header/Header';
import Home from './pages/Home';

const App = () => {
  const [carts, setCarts] = useState({});
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCarts = async() => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/carts/user/1');
      setCarts(data);
    } catch (e) {
      console.error(e);
    }
  };

  const searchProducts = (category: any) => {
    setLoading(true);
    fetchProducts(category)
      .then((payload: any) => {
        if (payload) {
          setProducts(payload);
          setLoading(false);
        }
      })
      .catch((reason: any) => {
        if (reason) setError(reason);
        setLoading(false);
      });
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
          getCarts={getCarts}
          error={error}
        />
      </div>
    </>
  );
};

export default App;
