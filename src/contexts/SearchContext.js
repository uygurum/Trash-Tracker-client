import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import recycling from "../services/recycling";
import { useTranslation } from "react-i18next";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState(t("Choose material"));
  const [data, setData] = useState([]);
  const [recyclingData, setRecyclingData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  console.log("searchQuery", searchQuery);
  console.log("categoryQuery", categoryQuery);

  const veri = (kanton, category) => {
    const results = recycling.filter(
      (data) =>
        data.kanton.toLocaleLowerCase() === kanton.toLocaleLowerCase() ||
        data.post_code === kanton
    );

    const collectedItems = [];
    results.forEach((result) => {
      result.recycling.forEach((recyclingObj) => {
        recyclingObj.collectedItems.forEach((item) => {
          if (item.label.toLocaleLowerCase() === category.toLocaleLowerCase()) {
            collectedItems.push({
              address: recyclingObj.address,
              city: recyclingObj.city,
              name: recyclingObj.name,
              phone: recyclingObj.phone,
              openingTimes: recyclingObj.openingTimes,
              postCode: recyclingObj.postCode,
              latitude: recyclingObj.latitude,
              longitude: recyclingObj.longitude,
              collectedItems: [item],
            });
          }
        });
        collectedItems.push(recyclingObj);
      });
    });
    console.log("collectedItems =>", collectedItems);
    setSearchResults(collectedItems);
    return collectedItems;
  };

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    veri(searchQuery, categoryQuery);
  }, [searchQuery, categoryQuery]);

  console.log("searchResults =>", searchResults);

  const values = {
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
    categoryQuery,
    setCategoryQuery,
    data,
    veri,
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <SearchContext.Provider value={values}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
