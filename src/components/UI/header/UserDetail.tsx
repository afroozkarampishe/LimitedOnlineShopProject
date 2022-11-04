import React from 'react';
const UserDetail = ({ user }: any) => {
  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0 w-full">
        <div className="relative mr-2">
          <div className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img
              className="h-10 w-10 rounded-full"
              src="./images/avatar.png"
              alt=""
            />
          </div>
        </div>
        <label className="rounded-full p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span>Hi, {user.username}</span>
        </label>
      </div>
    </>
  );
};

export default UserDetail;
