// React
import React, { useState, createContext } from "react";
// Interfaces
import { IProviderProps } from "../interfaces/Contexts/IContexts";
import { MenuContextProps } from "../interfaces/Contexts/IMenu";

const MenuContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  toggleMenu: () => {},
});

const MenuProvider: React.FC<IProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
