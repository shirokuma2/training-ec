import React from "react";
import { Route, Switch } from "react-router";
import { Login, Home } from "./templates";
// import { LoginContainer } from "./reduccks/containers";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      {/* <Route exact path={"/login"} component={LoginContainer} /> */}
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
