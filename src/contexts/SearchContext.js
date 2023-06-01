import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import recycling from "../services/recycling";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recyclingData, setRecyclingData] = useState([]);

  const filterDataByCityAndPostCode = useCallback(
    (searchValue, categoryQuery) => {
      const results = recycling.filter(
        (data) =>
          data.post_code === searchValue ||
          data.kanton.toLocaleLowerCase() === searchValue.toLocaleLowerCase()
      );
      setSearchResults(results);
    },
    [searchResults]
  );

  function getLabel() {
    const labelArray = [];

    recycling.forEach((kantonObj) => {
      kantonObj.recycling.forEach((recyclingObj) => {
        recyclingObj.collectedItems.forEach((item) => {
          if (!labelArray.includes(item.label)) {
            labelArray.push(item.label);
          }
        });
      });
    });
    // in labelArray search "glass" object and console.log
    const results = labelArray.filter((label) => label === "Glass");

    labelArray.push(results);
    return results;
  }

  // Example usage
  const labels = getLabel();
  console.log(labels);

  const veri = () => {
    const results = recycling.filter(
      (data) => data.kanton === "Schaffhausen" && data.post_code === "8200"
    );
    console.log(results);
    const collectedItems = [];
    results.forEach((result) => {
      result.recycling.forEach((recyclingObj) => {
        collectedItems.push(recyclingObj);
        console.log("adress", recyclingObj.address);
        recyclingObj.collectedItems.forEach((item) => {
          if (item.label === "Glass") {
            collectedItems.push({
              address: recyclingObj.address,
              city: recyclingObj.city,
              latitude: recyclingObj.latitude,
              longitude: recyclingObj.longitude,
              collectedItems: [item],
            });
          }
        });
      });
    });
    return collectedItems;
  };

  const veri2 = veri();
  console.log("veri2", veri2);

  useEffect(() => {}, []);

  const values = {
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
    filterDataByCityAndPostCode,
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
