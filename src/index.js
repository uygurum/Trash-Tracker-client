import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import List from "./pages/List";
import CollectedItems from "./pages/CollectedItems";
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";
import "./components/languageOption/i18n";
import { Auth0Provider } from "@auth0/auth0-react";
import { SearchProvider } from "./contexts/SearchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "collectedItems",
        element: <CollectedItems />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "info",
        element: <Info />,
      },
    ],
  },
]);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
