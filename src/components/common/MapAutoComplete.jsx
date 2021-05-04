import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const API_KEY = process.env.REACT_APP_GMAPS_KEY;

const Map1 = () => {
  const [value, setValue] = useState(null);
  const [state, setState] = useState({
    lat: "",
    lng: "",
  });

  useEffect(() => {
    if (value) {
      geocodeByAddress(value.value.description)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log("Successfully got latitude and longitude", { lat, lng });
          setState((prevState) => ({
            ...prevState,
            lat: lat.toString(),
            lng: lng.toString(),
          }));
        });
    }
  }, [value]);

  return (
    <>
      {console.log("state", state)}
      <GooglePlacesAutocomplete
        apiKey={API_KEY}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </>
  );
};

export default Map1;
