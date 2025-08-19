import React, { createContext, useState, useContext } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
