import React, { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeHttpService } from "../services/httpService";
import useCheckUser from "../hooks/useCheckUser";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  initializeHttpService(
    getAccessTokenSilently,
    "http://localhost:8000/api/v2/"
  );
  let user = useCheckUser();
  console.log("user", user)

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
