import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_GMAPS_KEY;

const MapAutoComplete = (props) => {
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
          setState((prevState) => ({
            ...prevState,
            lat: lat.toString(),
            lng: lng.toString(),
          }));
        });
    }
  }, [value]);

  useEffect(() => {
    if (state.lat.length > 0 || state.lng.length > 0) {
      props.getCoordinates(state.lat, state.lng);
    }
  }, [state]);

  return (
    <>
      <br />
      <GooglePlacesAutocomplete
        style={{ backgroundColor: "red" }}
        apiKey={API_KEY}
        selectProps={{
          value,
          onChange: setValue,
          placeholder: (
            <>
              <FontAwesomeIcon icon={faSearchLocation} /> &nbsp;Search a
              location...
            </>
          ),
          styles: {
            input: (provided) => ({
              ...provided,
              color: "#bbbfc8",
            }),
            // option: (provided) => ({
            //   ...provided,
            //   color: "red",
            // }),
            singleValue: (provided) => ({
              ...provided,
              color: "#bbbfc8",
            }),
            control: (provided) => ({
              ...provided,
              background: "#2c3942",
              
              
            }),
          },
        }}
      />
    </>
  );
};

export default MapAutoComplete;
