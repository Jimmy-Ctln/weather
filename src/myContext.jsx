import { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  
  const [isClicked, setIsClicked] = useState(false);

  const toggleValueSearch = () => {
    setIsClicked(!isClicked);
  };

  return (
    <MyContext.Provider value={{ isClicked, toggleValueSearch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
