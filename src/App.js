import React, { useState, useEffect } from "react";
import "./App.css";
import Route from "./routes/index";
import GeoModal from "./components/home/geoLocationModal/GeoModal";

function App() {
  const [state, setState] = useState({
    fetchedUserLocation: false,
  });

  const enableRedirect = (bool) => {
    setState((prevState) => ({
      ...prevState,
      fetchedUserLocation: bool,
    }));
  };

  return (
    <>
      {state.fetchedUserLocation ? (
        <Route />
      ) : (
        <GeoModal enableRedirect={enableRedirect} />
      )}

      {/*  */}
    </>
  );
}

export default App;
