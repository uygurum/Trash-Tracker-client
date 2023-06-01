import React, { useContext, useState } from "react";
import "./RecyclingSearch.css";
import "./RecyclingSearch.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useSearch } from "../../contexts/SearchContext";

const RecyclingSearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");


  const { t } = useTranslation();
  const {
    searchQuery,
    setSearchQuery,
    filterDataByCityAndPostCode,
  } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  return (
    <>
      <InputGroup onSubmit={() => handleSubmit()} className="mb-3">
        <Form.Control
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder={t("post code or town")}
          aria-label="Postcode or town"
          aria-describedby="basic-addon2"
        />
        <button type="submit" onClick={handleSubmit}>
          <span>
            <BsSearch />
          </span>
        </button>
      </InputGroup>
    </>
  );
};

export default RecyclingSearch;
