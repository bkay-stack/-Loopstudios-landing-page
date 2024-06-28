import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <AppContext.Provider value={{ toggleMenu, isActive }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
