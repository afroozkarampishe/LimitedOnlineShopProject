import React from 'react';

import Cart from './Cart';
import UserDetail from './UserDetail';
const Header = ({ getUser, user, getCarts, carts }: any) => {
  return (
    <>
      <nav className="bg-zinc-300">
        <div className="mx-auto max-w-8xl px-2 py-2 lg:py-0 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-16">
            <UserDetail />
            <div className="grid-in-header sm:block w-full logoClass">
              <div className="flex space-x-4 pt-3 pb-3 pr-16 pl-16 sm:pl-2 sm:pr-2">
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
