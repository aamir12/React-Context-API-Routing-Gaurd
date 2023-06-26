import React, { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
const Users = () => {
  const userContext = useContext(UserContext);
  const { userList, status, error, fetchUser } = userContext;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <h1>Users</h1>
      {status === 'loading' && <div>Loading...</div>}

      {status === 'idle' && userList.length > 0 && (
        <div>{JSON.stringify(userList)}</div>
      )}

      {status === 'idle' && error && <h3>Error: {error}</h3>}
    </>
  );
};

export default Users;
