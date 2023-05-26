import React, { createContext, useState } from "react";
import db from "../services/db";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [data, setData] = useState({ db });
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        data,
        setData,
        searchValue,
        setSearchValue,
        searchResults,
        setSearchResults,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
