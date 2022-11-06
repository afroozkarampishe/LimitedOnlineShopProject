import React from 'react';
import { useMemo } from 'react';
const Cart = ({ getCarts, carts }: any) => {
  useMemo(() => {
    getCarts();
  }, [carts]);
  return (
    <>
      <div className="cartClass inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:pr-0 w-full">
        <label className="rounded-full p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span>Cart</span>
        </label>
        <div className="relative ml-1 mr-2">
          <div>
            <button
              type="button"
              className="flex rounded-full bg-orange-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <div className="h-6 w-6 rounded-full text-white">
                {carts.length}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
