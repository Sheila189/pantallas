import React, { createContext, useState } from 'react';

// Creamos el contexto del usuario
export const UserContext = createContext();

// Creamos el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: 'METALINTS',
    avatar: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};


