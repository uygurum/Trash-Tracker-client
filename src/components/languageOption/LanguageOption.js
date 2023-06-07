import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./languageOption.css";
import { useTranslation } from "react-i18next";

function LanguageOption() {
  const [language, setLanguage] = useState("EN");
  const { t, i18n } = useTranslation();

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div className="paren">
      <Dropdown className="custom-dropdown bg-slate-500">
        <div className="space"></div>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {i18n.language}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => clickHandle("DE")}>DE</Dropdown.Item>
          <Dropdown.Item onClick={() => clickHandle("FR")}>FR</Dropdown.Item>
          <Dropdown.Item onClick={() => clickHandle("IT")}>IT</Dropdown.Item>
          <Dropdown.Item onClick={() => clickHandle("EN")}>EN</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default LanguageOption;
