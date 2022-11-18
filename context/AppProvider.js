import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [BottomBarShown, setBottomBarShown] = useState(true);

  const showBottomBar = () => {
    setBottomBarShown(true);
  };
  const hideBottomBar = () => {
    setBottomBarShown(false);
  };
  return (
    <AppContext.Provider
      value={{ BottomBarShown, showBottomBar, hideBottomBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
