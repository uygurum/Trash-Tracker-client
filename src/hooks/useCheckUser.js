// import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import userService from "../services/userSevice";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const useCheckUser = () => {
//   const { user, isAuthenticated } = useAuth0();
//   const [users, setUsers] = useState(user);
//   const navigate = useNavigate();
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {}, [user]);
//   const checkUser = async () => {
//     if (isAuthenticated && user) {
//       console.log("user", user.email);
//       const remoteUser = await axios.get(
//         `http://localhost:8000/api/v2/users/profile/${user.email}`
//       );
//       console.log("remoteUser", remoteUser.data);

//       // const remoteUser = await userService.getUser(user.email);
//       // if (remoteUser) {
//       //   setCurrentUser({
//       //     ...user,
//       //     role: remoteUser.role,
//       //     id: remoteUser.id
//       //   });
//       //   navigate("/dashboard");
//       // } else {
//       //   navigate("/welcome");
//       // }
//     }
//   };

//   useEffect(() => {
//     checkUser();
//   }, [isAuthenticated, user]);

//   if (!isAuthenticated || !user) {
//     return <div>Loading...</div>;
//   }

//   return currentUser;
// };

// export default useCheckUser;

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import userService from "../services/userSevice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useCheckUser = () => {
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      if (isAuthenticated && user) {
        console.log("user", user.email);

        try {
          const remoteUser = await axios.get(
            `http://localhost:8000/api/v2/users/profile/${user.email}`
          );
          console.log("remoteUser", remoteUser.data);

          const userFromService = await userService.getUser(user.email);
          if (userFromService) {
            setCurrentUser({
              ...user,
              role: userFromService.role,
              id: userFromService.id,
            });
            navigate("/dashboard");
          } else {
            navigate("/welcome");
          }
        } catch (error) {
          console.log("Error fetching remote user:", error);
          // Handle error appropriately
        }
      }
    };

    checkUser();
  }, [isAuthenticated, user, navigate]);

  if (!isAuthenticated || !user) {
    return <div>Loading...</div>;
  }

  return currentUser;
};

export default useCheckUser;
