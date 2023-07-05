import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const DashboardView = () => {
  const user = useContext(UserContext);
  console.log("user =>", user);
  if (!user) {
    return null;
  }
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#ffffff",
        border: 0,
        width: "100%",
        height: "100vh",
        overflow: "scroll",
        zIndex: 1,
      }}
    >
      <div className="container mb-5">
        <div className="row align-items-center profile-header mb-5 text-center text-md-left">
          <div className="col-md-2">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md">
            <h1 className="text-light h1">{user.name}</h1>
            <h1 className="lead text-white">{user.email}</h1>
            <h1 className="text-light h1">{user.role}</h1>
          </div>
        </div>
        <div className="row text-white">not working</div>
      </div>
    </div>
  );
};

export default DashboardView;
