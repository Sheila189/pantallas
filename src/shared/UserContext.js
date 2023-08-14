import React, { createContext, useEffect, useState } from 'react';

// Creamos el contexto del usuario
export const UserContext = createContext();

// Creamos el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: 'METALINTS',
    avatar: '',
  });
  const isLoggedIn = async () => {
    try {
      let userInfo = localStorage.getItem('user');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserData(userInfo);
      } else {
        setUserData({});
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };
  const logout = () => {
    setUserData({});
    localStorage.removeItem('user');
    alert('Sesión cerrada');
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <UserContext.Provider value={{ userData, setUserData , logout}}>
      {children}
    </UserContext.Provider>
  );
};


