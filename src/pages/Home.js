import React from "react";
import logo from "../Trash-tracker.png";
import LanguageOption from "../components/languageOption/LanguageOption";
import RecyclingSearch from "../components/RecyclingSearch/RecyclingSearch";
import { useState } from "react";
import TypesOfMaterials from "../components/typesOfMaterials/TypesOfMaterials";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Data from "../services/db";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(t("Choose material"));
  // const [searchText, setSearchText] = React.useState("");
  const [search, setSearch] = useState("");

  // lang option
  // input
  // types of materials

  const { setSearchQuery } = useSearch();

  const handleSubmit = (e) => {
    if (search === "") {
      return;
    } else {
      e.preventDefault();
      setSearchQuery(search);
      navigate("/map");
    }
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={handleSubmit}
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
