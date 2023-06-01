import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";

const ListView = () => {
  const { t } = useTranslation();
  const { searchResults } = useContext(SearchContext);

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
        {searchResults.length === 0 ? (
          <div className="d-inline-flex p-3 bg-light rounded">
            <p className="p-3 text-muted rounded">{t("ListView")}</p>
          </div>
        ) : (
          searchResults.map((data, index) => (
            <div key={index}>
              <h5>
                {data.post_code} {data.kanton}
              </h5>
              {data.recycling.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <p>
                    {item.name} - {item.address}
                  </p>
                  <ul>
                    {uniqueItems.map((uniqueItem, uniqueItemIndex) => {
                      if (
                        uniqueItem.name === item.name &&
                        uniqueItem.address === item.address
                      ) {
                        return (
                          <li key={uniqueItemIndex}>{uniqueItem.label}</li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                  <hr />
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListView;
