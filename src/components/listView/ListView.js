import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";

const ListView = () => {
  const { t } = useTranslation();
  const { data, searchResults } = useContext(SearchContext);

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
      </div>
      {searchResults.map((result) => (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>{result.recyclingCategory.label}</h6>
              <p>{result.address}</p>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
};
export default ListView;


