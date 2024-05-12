import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const MyContext = createContext();

// Step 2: Create a Provider component
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState({
    user:"",
    email:"example@gnail.com",
    role:"Asha"
  });

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Consume the context using useContext hook
export const useMyContext = () => useContext(MyContext);