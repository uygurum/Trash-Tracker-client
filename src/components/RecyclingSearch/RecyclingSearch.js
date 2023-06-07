import React, { useContext, useState } from "react";
import "./RecyclingSearch.css";
import "./RecyclingSearch.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useSearch } from "../../contexts/SearchContext";

const RecyclingSearch = ({ value, onChange, onClick }) => {
  const [search, setSearch] = useState("");


  const { t } = useTranslation();
  // const {
  //   setSearchQuery,
  // } = useSearch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSearchQuery(search);
  // };

  return (
    <>
      <InputGroup className="mb-3">
        {/* search on */}
        <Form.Control
          type="text"
          value={value}
          onChange={onChange}
          placeholder={t("post code or town")}
          aria-label="Postcode or town"
          aria-describedby="basic-addon2"
        />
        <button type="submit" onClick={onClick}>
          <span>
            <BsSearch />
          </span>
        </button>
      </InputGroup>
    </>
  );
};

export default RecyclingSearch;
