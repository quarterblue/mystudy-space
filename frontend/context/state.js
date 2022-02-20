import React, { useState, createContext } from "react";

export const Context = createContext();

const AppWrapper = (props) => {
  const [auth, setAuth] = useState(5);

  const contextValue = {
    authData: [auth, setAuth],
  };
  return <Context.Provider value={contextValue} {...props} />;
};

export default AppWrapper;
