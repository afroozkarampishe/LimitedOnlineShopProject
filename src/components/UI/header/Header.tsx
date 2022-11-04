import React from 'react';
import { useEffect } from 'react';

import Cart from './Cart';
import UserDetail from './UserDetail';
const Header = ({ getUser, user, getCarts, carts }: any) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <nav className="bg-zinc-300">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
            <UserDetail user={user} />
            <div className="sm:ml-6 sm:block w-full ">
              <div className="flex space-x-4 pt-3 pb-3 pr-16 pl-16">
                <img
                  className="rounded-full w-full h-14"
                  src="./images/natgeologo.png"
                  alt=""
                />
              </div>
            </div>
            <Cart getCarts={getCarts} carts={carts} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
