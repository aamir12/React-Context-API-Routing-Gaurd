import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.isLoggedIn) {
      navigate('/users');
    }
  }, [authContext.isLoggedIn]);
  return (
    <>
      <h1>Login</h1>
      <button onClick={authContext.onLogin}>Login</button>
    </>
  );
};

export default Login;
