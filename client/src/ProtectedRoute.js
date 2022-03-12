import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children, authRole, ...rest }) => {
  const profile = JSON.parse(window.localStorage.getItem("profile"));

  // if (!profile) {
  //   toast.warn("Login to continue");
  //   // return <Redirect to="/" />
  //   // , Please login with other user to access this page
  // }

  // if (profile   && !authRole.includes(profile.role)) {
  //   toast.warn("Unauthorized Access");
  //   // return <Redirect to="/" />
  //   // , Please login with other user to access this page
  // }
  return (
    <Route
      {...rest}
      render={() => {
        // console.log(authRole);
        if(!profile){
          toast.warn("Login to continue")
          return <Redirect to="/" />
        }


        return profile && authRole.includes(profile.role) ? (
          children
        ) : (
          <Redirect to={`/`} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
