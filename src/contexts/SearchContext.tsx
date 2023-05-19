// React
import React, { SetStateAction, createContext, useState } from "react";
// Interfaces
import { IProviderProps } from "../interfaces/Contexts/IContexts";

interface ISearchContext{
    searchTerm: string,
    setSearchTerm: React.Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<ISearchContext>({
  searchTerm: '',
  setSearchTerm: () => {},
});

const SearchProvider: React.FC<IProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
