import React from "react";
import { useTranslation } from "react-i18next";

const FavoritesView = () => {
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
          <h6 className="pt-5">{t("Favorites")}</h6>
          <hr />
          <div className="d-inline-flex p-3 bg-light w-25 rounded">
            <p className="p-3 text-muted rounded">{t("FavoriteView")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesView;
