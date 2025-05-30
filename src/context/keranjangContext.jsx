import { createContext, useEffect, useState } from "react";

export const KeranjangContext = createContext();

export const KeranjangContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem("shoping");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shoping", JSON.stringify(data));
  }, [data]);

  return (
    <KeranjangContext.Provider value={{ data, setData }}>
      {children}
    </KeranjangContext.Provider>
  );
};
