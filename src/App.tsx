import './assets/css/tailwind.css';

import React from 'react';
import { useCallback, useState } from 'react';

import { fetchCarts } from './api/cartsApi';
import { fetchProducts } from './api/productsApi';
import Header from './layouts/header/Header';
import Home from './pages/Home';

const App = () => {
  const [carts, setCarts] = useState({});
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCarts = useCallback(() => {
    fetchCarts(1)
      .then((payload: any) => {
        if (payload) {
          setCarts(payload);
        }
      })
      .catch((reason: any) => {
        if (reason) console.error(reason);
      });
  }, [carts]);

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
          setProducts={setProducts}
          products={products}
          getCarts={getCarts}
          error={error}
        />
      </div>
    </>
  );
};

export default App;
