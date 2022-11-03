import './App.css';

import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import Home from './components/pages/Home';
import Header from './components/UI/header/Header';

const App = () => {
  const [user, setUser] = useState({});
  const getUser = async() => {
    const { data } = await axios.get('https://fakestoreapi.com/users/1');
    setUser(data);
  };
  return (
    <>
      <div className="md:container md:mx-auto">
        <Header getUser={getUser} user={user} />
        <Home />
      </div>
    </>
  );
};

export default App;
