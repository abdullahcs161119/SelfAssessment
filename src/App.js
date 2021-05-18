import React from "react";
import LoginSignup from "./components/login-signup";
import SignUp from "./components/reusableComponent/signup/signup";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import DashboardLayout from "./components/reusableComponent/dashboard/dashboardLayout";
import PrivateRoute from "./privateRoute";

function App() {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <PrivateRoute
        component={DashboardLayout}
        path="/dashboard/home/:name"
        exact
      />
      <Route exact path="/login" component={LoginSignup} />
      <Redirect from="/" to="/login"></Redirect>
    </Switch>
  );
}

export default App;
