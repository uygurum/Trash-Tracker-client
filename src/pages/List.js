import React, { useContext } from "react";
import NavigationBar from "../navigation/NavigationBar";
import Footer from "../components/footer/Footer";
import ListView from "../components/listView/ListView";
import db from "../services/db";
import { SearchContext } from "../contexts/SearchContext";

const List = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);

  const handleSearch = (searchValue) => {
    const results = db.filter((data) => {
      return (
        data.kanton.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.post_code.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    const recyclingItems = results.flatMap((data) => {
      return data.recycling.filter((item) =>
        item.collectedItems.some((collectedItem) => collectedItem.type)
      );
    });

    setSearchResults(recyclingItems);
  };

  return (
    <div>
      <NavigationBar onSearch={handleSearch} />
      <ListView searchResults={searchResults} />
      <Footer />
    </div>
  );
};

export default List;
