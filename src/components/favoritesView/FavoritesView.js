import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";

const FavoritesView = () => {
  const { t } = useTranslation();
  const { favorites, removeFromFavorites } = useContext(SearchContext);

  return (
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
      <div className="container">
        <h6 className="pt-5">{t("Favorites")}</h6>
        <hr />
        {favorites.length > 0 ? (
          favorites.map((data, index) => (
            <div className="card my-2" key={index}>
              <h5 className="card-header">{`${data.city} ${data.postCode}`}</h5>
              <div className="card-body">
                <h5 className="card-title">{data.address}</h5>
                <h6>{data.name}</h6>
                {data.collectedItems.map((item, itemIndex) => (
                  <p className="card-text" key={itemIndex}>
                    {item.label}
                  </p>
                ))}
                <ul>
                  <li>
                    <strong>{t("Opening hours")}</strong>
                    <p>{data.openingTimes}</p>
                  </li>
                  <li>
                    <strong>{t("Phone")}</strong>
                    <p>{data.phone}</p>
                  </li>
                </ul>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromFavorites(index)}
                >
                  {t("Remove from favorites")}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="d-inline-flex p-3 bg-light w-25 rounded">
            <p className="p-3 text-muted rounded">{t("FavoriteView")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesView;
