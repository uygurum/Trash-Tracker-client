import React, { useContext } from "react";
import "./RecyclingSearch.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";

const RecyclingSearch = ({ onSearch }) => {
  const { t } = useTranslation();
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };
  return (
    <>
      <InputGroup onSubmit={handleSubmit} className="mb-3">
        <Form.Control
          placeholder={t("post code or town")}
          value={searchValue}
          onChange={handleInputChange}
          aria-label="Postcode or town"
          aria-describedby="basic-addon2"
        />
        <button type="submit">
          <span>
            <BsSearch />
          </span>
        </button>
      </InputGroup>
    </>
  );
};

export default RecyclingSearch;
