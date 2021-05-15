import React, { useState, useEffect } from 'react';
import './App.css';
import Route from './routes/index';
import GeoModal from './components/home/geoLocationModal/GeoModal';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <>
      {state.fetchedUserLocation ? (
        <Route />
      ) : (
        <GeoModal enableRedirect={enableRedirect} />
      )}
    </>
  );
}

export default App;
