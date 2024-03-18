// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({ currentUser: null });

export function useAuth() {
  return useContext(AuthContext); //you get access to the current user data and the login/logout functions.
}

export const AuthProvider = ({ children }) => {
  //pass down the authentication state (the current user) and functions (login and logout) to any child components. Inside AuthProvider,
  const [currentUser, setCurrentUser] = useState(null); //no user is logged in by default.

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const login = (userData) => {
    console.log("Logging in user:", userData);
    setCurrentUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    console.log("Logging out");
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
