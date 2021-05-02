import React, { Component } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const API_KEY = process.env.REACT_APP_GMAPS_KEY;

export default class MapAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.autocomplete = null;

    this.onLoad = this.onLoad.bind(this);
    this.onPlaceChanged = this.onPlaceChanged.bind(this);
  }

  onLoad(autocomplete) {
    console.log("autocomplete: ", autocomplete);

    this.autocomplete = autocomplete;
  }

  onPlaceChanged() {
    if (this.autocomplete !== null) {
      console.log(this.autocomplete.getPlace());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }

  render() {
    return <GooglePlacesAutocomplete apiKey={API_KEY} />;
  }
}
