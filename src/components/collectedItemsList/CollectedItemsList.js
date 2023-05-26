import React from "react";
import CollectedItemsView from "./CollectedItemsView";
import { useTranslation } from "react-i18next";

const CollectedItemsList = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="container-"
        style={{
          backgroundColor: "#ffffff",
          border: 0,
          width: "100%",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        <div className="container ">
          <h6 className="pt-5">{t("Collected Items")}</h6>
          <hr />
          <CollectedItemsView />
        </div>
      </div>
    </>
  );
};

export default CollectedItemsList;
