import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return isAuthenticated ? (
    <div className="my-auto mx-1">
      <span className="text-light my-4">
        Welcome{" "}
        <small>
          <sub>
            <i>{user.nickname}</i>
          </sub>
        </small>
      </span>
    </div>
  ) : (
    <>{null}</>
  );
};

export default Profile;
