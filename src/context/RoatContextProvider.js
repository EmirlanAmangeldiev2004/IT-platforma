import React, { createContext, useContext, useState } from "react";

export const roatContext = createContext();
export function useRoat() {
  return useContext(roatContext);
}

const RoatContextProvider = ({ children }) => {
  const [messi, setMessi] = useState("");
  let values = {
    messi,
    setMessi,
  };
  return <roatContext.Provider value={values}>{children}</roatContext.Provider>;
};

export default RoatContextProvider;
