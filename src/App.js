import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </div>
  );
}

export default App;
