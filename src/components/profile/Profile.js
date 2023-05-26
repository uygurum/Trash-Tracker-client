import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  console.log(isAuthenticated, user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return isAuthenticated ? (
    <div className="my-auto mx-1">
      <span className="text-light my-4">{user.email}</span>
    </div>
  ) : (
    <>{null}</>
  );
};

export default Profile;
