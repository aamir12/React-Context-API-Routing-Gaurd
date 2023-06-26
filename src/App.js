import React, { useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import Home from './components/Home';
import AuthContext from './context/AuthContext';
import ProtectPage from './guard/ProtectPage';

import './style.css';

export default function App() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <div className="nav-bar">
        <h3>Logo</h3>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/users"> Users </Link>
          </li>
          {!authContext.isLoggedIn ? (
            <li>
              <Link to="/login"> Login </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={authContext.onLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/users"
            element={
              <ProtectPage>
                <Users />
              </ProtectPage>
            }
          />
        </Routes>
      </div>
    </>
  );
}
