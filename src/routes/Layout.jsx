import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AvailabilityForm from "../components/availability/AvailabilityForm";
import Home from "../components/home/Home"

const Layout = () => {
  return (
    <>
      <Switch>
        <Route path="/add-availability" render={(props) => <AvailabilityForm {...props} />} />
      </Switch>
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </>
  );
};

export default Layout;
