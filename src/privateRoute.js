import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userState = useSelector((state) => state.user.isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        userState ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
