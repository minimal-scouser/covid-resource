import React, { useEffect, useState, useContext } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Layout from "./Layout";
import Header from "../common/Header";

const Routes = () => {
  return (
    <HashRouter>
      <div className="App">
          <Header/>
        <Switch className="App-content">
          <Route
            path="/logout"
            component={() => {
              window.location.href = "/logout";
              return null;
            }}
          />
          <Route path="/" render={(props) => <Layout {...props} />} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
