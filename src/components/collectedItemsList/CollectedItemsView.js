import React from "react";
import { options } from "../typesOfMaterials/Options";
import { useTranslation } from "react-i18next";

const ListItem = ({ label, icon }) => {
  const { t } = useTranslation();
  return (
    <div className="item">
      <a className="text-black text-decoration-none" href="https://example.com">
        {icon && (
          <img
            src={`../icon/${icon}.svg`}
            style={{ height: "35px", width: "35px", margin: "5px" }}
            alt={label}
            className="item-icon"
          />
        )}
        <span>{t(label)}</span>
      </a>
      <hr />
    </div>
  );
};

const CollectedItemsView = () => {
  const { t } = useTranslation();
  return (
    <div className="list">
      {options.map(({ label, icon }) => (
        <ListItem key={label} label={label} icon={icon} />
      ))}
    </div>
  );
};

export default CollectedItemsView;
