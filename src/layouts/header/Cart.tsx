import React from 'react';
// import { useEffect } from 'react';
const Cart = ({ cart }: any) => {
  // useEffect(() => {
  //   getCarts();
  // }, []);
  return (
    <>
      <div className=" row-start-2  md:row-start-1 row-end-2 md:row-end-1 col-span-4 md:col-span-1 row-span-3 md:row-span-1 inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:pr-0 w-full">
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
                {cart.length}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
