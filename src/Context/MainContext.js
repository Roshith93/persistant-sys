import { useState, createContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [category, setCategory] = useState("Butterfly");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [opacity, setOpacity] = useState(1);

  return (
    <MainContext.Provider
      value={{
        category,
        setCategory,
        searchKeyword,
        setSearchKeyword,
        opacity,
        setOpacity
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
