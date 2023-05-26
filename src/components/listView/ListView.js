import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../../contexts/SearchContext";

const ListView = () => {
  const { t } = useTranslation();
  const { searchResults } = useContext(SearchContext);
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
          <h6 className="pt-5">{t("List")}</h6>
          <hr />
          <div className="d-inline-flex p-3 bg-light rounded">
            <p className="p-3 text-muted rounded">{t("ListView")}</p>
          </div>
        </div>
        {/* deneme */}
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
              {result.name}
              <ul>
                {result.collectedItems
                  .filter((item) => item.type)
                  .map((item, itemIndex) => (
                    <li key={itemIndex}>{item.label}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListView;
