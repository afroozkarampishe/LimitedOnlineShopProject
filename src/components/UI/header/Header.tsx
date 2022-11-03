import React from 'react';
import { useEffect } from 'react';

import UserDetail from './UserDetail';
const Header = ({ getUser, user }: any) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <nav className="bg-zinc-300">
        <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 h-full">
          <div className="relative flex items-center justify-between h-full">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start columns-3">
              <UserDetail user={user} />
              <div className="hidden sm:ml-6 sm:block w-full ">
                <div className="flex space-x-4 pt-3 pb-3 pr-16 pl-16">
                  <img
                    className="rounded-full w-full h-14"
                    src="./images/natgeologo.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative ml-3"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
