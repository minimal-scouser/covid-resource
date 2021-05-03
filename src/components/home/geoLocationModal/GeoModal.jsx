import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import MapAutoComplete from "../../common/MapAutoComplete";
import Geocode from "react-geocode";
import { Button, Row, Col, Text } from "../../common/RowColStyle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const GeoModal = (props) => {
  const [state, setState] = useState({
    latitude: "",
    longitude: "",
    placeName: "",
    fetchedUserLocation: false,
  });

  Geocode.setApiKey(process.env.REACT_APP_GMAPS_KEY);
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const enableRedirect = (bool) => {
    if (state.fetchedUserLocation) {
      props.enableRedirect(state.fetchedUserLocation);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setState((prevState) => ({
        ...prevState,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));

      Geocode.fromLatLng(
        position.coords.latitude.toString(),
        position.coords.longitude.toString()
      ).then(
        (response) => {
          let address = response.results[0].formatted_address;

          setState((prevState) => ({
            ...prevState,
            placeName: address,
            fetchedUserLocation: true,
          }));
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {state.placeName.length > 0 ? (
          <>
            <Row>
              <Text>Your current location is</Text>
            </Row>
            <Row>
              <Text>{state.placeName}</Text>
            </Row>
            <br />
          </>
        ) : (
          <Row>
            <Text>Fetching Current Location</Text>
          </Row>
        )}
        <>
          <Row>
            <Text>or</Text>
          </Row>
          <Row>
            <Text sub={true}>Search your location manually</Text>
          </Row>
        </>

        <MapAutoComplete />

        <Row>
          <Button
            disabled={!state.fetchedUserLocation}
            onClick={() => enableRedirect()}
          >
            Continue
          </Button>
        </Row>
      </Modal>
    </>
  );
};

export default GeoModal;
