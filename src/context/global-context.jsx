import React from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const bodyElement = document.querySelector("body");
    isActive
      ? bodyElement.classList.add("active")
      : bodyElement.classList.remove("active");
  }, [isActive]);
  return (
    <AppContext.Provider value={{ toggleMenu, isActive }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
