import React, { useState, useEffect, useCallback } from 'react';

const UserContext = React.createContext({
  status: 'idle',
  userList: [],
  error: null,
});

export const fetchUser = async () => {
  try {
    const responseData = {
      status: false,
    };
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      responseData['error'] = 'Error Message!!';
      return responseData;
    }

    const data = await response.json(); // Parse the response as JSON
    responseData.status = true;
    responseData['data'] = data; // Return the parsed JSON data
    return responseData;
  } catch (error) {
    responseData['error'] = 'Error Message!!';
    return responseData;
  }
};

export const UserContextProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [userStatus, setUserStatus] = useState('idle');
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setUserStatus('loading');
    const response = await fetchUser();
    if (response.status) {
      setUserList(response.data);
    } else {
      setError('Data Fetching Error');
    }
    setUserStatus('idle');
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <UserContext.Provider
      value={{
        status: userStatus,
        userList: userList,
        fetchUser: fetchData,
        error,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
