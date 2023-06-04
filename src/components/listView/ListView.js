import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";

const ListView = () => {
  const { t } = useTranslation();
  const { searchResults } = useContext(SearchContext);




<<<<<<< HEAD
  const uniqueItems = Array.from(
    new Set(
      searchResults.flatMap((data) =>
        data.recycling.flatMap((item) =>
          item.collectedItems.map((collectedItem) =>
            JSON.stringify({
              label: collectedItem.label,
              name: item.name,
              address: item.address,
            })
          )
        )
      )
    )
  ).map((item) => JSON.parse(item));
=======
>>>>>>> d5476d6bccd42a801f30393b6341d54f79c36fda

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
        <h6 className="pt-5">{t("List")}</h6>
        <hr />
        <div>
          {searchResults.map((data, index) => (
            <div class="card my-2">
              <h5 class="card-header">{`${data.city} ${data.postCode}`}</h5>
              <div class="card-body">
                <h5 class="card-title">{data.address}</h5>
                <h6>{data.name}</h6>
                <p class="card-text">
                </p>
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
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
};
export default ListView;


