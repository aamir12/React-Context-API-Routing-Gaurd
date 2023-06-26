import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectPage = (props) => {
  const authContext = useContext(AuthContext);

  if (!authContext.isLoggedIn) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return props.children;
};

export default ProtectPage;
