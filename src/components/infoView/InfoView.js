import React from "react";
import { useTranslation } from "react-i18next";

const InfoView = () => {
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
          <h6 className="pt-5">{t("About")} Trash Tracker</h6>
          <hr />
          <div className="d-inline-flex p-3 bg-light rounded">
            <p className="p-3 text-muted rounded">{t("InfoView")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoView;
