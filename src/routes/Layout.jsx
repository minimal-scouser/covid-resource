import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AvailabilityForm from "../components/availability/AvailabilityForm";
import Home from "../components/home/Home";
import {VerifyVolunteer} from "../components/verifiy-volunteer/VerifyVolunteer";

const Layout = () => {
  return (
    <>
      <Switch>
        <Route path="/add-availability" render={(props) => <AvailabilityForm {...props} />} />
      </Switch>
      <Switch>
        <Route path="/verify-volunteer" render={(props) => <VerifyVolunteer {...props} />} />
      </Switch>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} mod={false}/>} />
      </Switch>
    </>
  );
};

export default Layout;
