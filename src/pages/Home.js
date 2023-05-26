import React from "react";
import logo from "../Trash-tracker.png";
import LanguageOption from "../components/languageOption/LanguageOption";
import RecyclingSearch from "../components/RecyclingSearch/RecyclingSearch";
import { useState } from "react";
import TypesOfMaterials from "../components/typesOfMaterials/TypesOfMaterials";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Data from "../services/db";

const Home = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(t("Choose material"));
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = () => {
  
    const searchResult = Data.map((item) => console.log(item.name));
    return searchResult
    // Perform further actions with the search result if needed
  };

  return (
    <>
      <div class="d-flex justify-content-end align-items-center">
        <LanguageOption />
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
          <div class="logo-container">
            <img class="App-logo" src={logo} alt="My Logo" />
          </div>
          <h1 class="title">Trash Tracker</h1>
          <hr className="border-white border-5" />
          <RecyclingSearch
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onClick={handleSearch}
          />
          <TypesOfMaterials selected={selected} setSelected={setSelected} />
          <hr className="border-white border-5" />
          <Link className="text-white text-decoration-none " to="/map">
            <h4 className="text-center">{t("Continue to website")}...</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
