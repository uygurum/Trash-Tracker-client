import React, { useState } from "react";
import "./typesOfMaterials.css";
import { options } from "./Options";
import { useTranslation } from "react-i18next";
import { useSearch } from "../../contexts/SearchContext";

const TypesOfMaterials = ({ label }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const { categoryQuery, setCategoryQuery, veri } = useSearch();

  console.log(label);
  const handleOptionClick = (option) => {
    // setSelected(option);
    setCategoryQuery(option.label);
    setIsActive(false)
    console.log(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {categoryQuery}
        <span className="fas fa-caret-down" />
      </div>
      {isActive && (
        <div className="dropdown-content ">
          {options.map((option) => (
            <div
              key={option.label}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.icon && (
                <img
                  src={`icon/${option.icon}.svg`}
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                  alt={option.label}
                />
              )}
              {!option.icon && t(option.label)}
              {option.icon && t(option.label)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypesOfMaterials;
