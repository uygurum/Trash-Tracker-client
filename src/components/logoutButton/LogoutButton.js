import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const LogoutButton = () => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-danger"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      {t("Log Out")}
    </button>
  );
};

export default LogoutButton;
