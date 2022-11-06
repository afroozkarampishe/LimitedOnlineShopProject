import React from 'react';
import { useEffect, useState } from 'react';
import useIsMounted from 'react-is-mounted-hook';

import { fetchUser } from '../../api/usersApi';
const UserDetail = () => {
  const isMounted = useIsMounted();

  const [user, setUser] = useState({ username: '' });
  const [error, setError] = useState(null);
  const [IsFetching, setIsFetching] = React.useState(false);

  const getUser = () => {
    if (IsFetching) return undefined;
    setIsFetching(true);
    fetchUser(1)
      .then((payload: any) => {
        if (isMounted() && payload) {
          setUser(payload);
        }
      })
      .catch((reason: any) => {
        if (isMounted() && reason) setError(reason);
      })
      .finally(() => {
        if (isMounted()) setIsFetching(false);
      });
  };
  useEffect(() => {
    getUser();
  }, [isMounted()]);
  if (error) {
    return <div>Error: {error}</div>;
  } else
    return (
      <>
        <div
          className={
            'inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0 w-full row-start-2  md:row-start-1 row-end-2 md:row-end-1 col-span-1 md:col-span-1 row-span-2 md:row-span-1'
          }
        >
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
