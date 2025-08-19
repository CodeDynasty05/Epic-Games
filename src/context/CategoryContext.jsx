import React, { createContext, useState } from "react";

export const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const category = useState("All");
  return (
    <categoryContext.Provider value={category}>
      {children}
    </categoryContext.Provider>
  );
};

export default CategoryProvider;
