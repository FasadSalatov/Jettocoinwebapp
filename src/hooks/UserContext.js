// src/context/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || 'default-avatar.png');
  const [username, setUsername] = useState(localStorage.getItem('username') || 'Loading...');

  useEffect(() => {
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('username', username);
  }, [avatar, username]);

  return (
    <UserContext.Provider value={{ avatar, setAvatar, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
