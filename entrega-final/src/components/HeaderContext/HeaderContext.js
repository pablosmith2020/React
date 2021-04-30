import React, { useState, createContext, useEffect } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = (props) => {
  const [viewMenu, SetviewMenu] = useState(true);

  useEffect(() => {
    SetviewMenu(true);
  }, []);

  const setViewSearch = () => {
    SetviewMenu(false);
  };
  const setMenu = () => {
    SetviewMenu(true);
  };

  return (
    <HeaderContext.Provider
      value={{
        viewMenu,
        setViewSearch,
        setMenu,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};
