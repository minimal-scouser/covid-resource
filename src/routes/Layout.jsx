import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AvailabilityForm from "../components/availability/AvailabilityForm";

const Layout = () => {
  return (
    <>
      <Switch>
        <Route path="/" render={(props) => <AvailabilityForm {...props} />} />
      </Switch>
    </>
  );
};

export default Layout;
