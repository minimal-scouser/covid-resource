import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import MapAutoComplete from "../../common/MapAutoComplete";
import Geocode from "react-geocode";
import { Button, Row, Col, Text, Div } from "../../common/RowColStyle";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-28%",
    transform: "translate(-50%, -50%)",
    background: "#2d313a",
    border: "0px",
    width: "80%",
  },
  overlay: {
    backgroundColor: "#1c1f28",
  },
};

const GeoModal = (props) => {
  const [state, setState] = useState({
    lat: "",
    lng: "",
    address: "",
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
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
      Geocode.fromLatLng(
        position.coords.latitude.toString(),
        position.coords.longitude.toString()
      ).then(
        (response) => {
          let address = response.results[0].formatted_address;

          setState((prevState) => ({
            ...prevState,
            address: address,
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


  const getCoordinates = (lat, lng) => {
    setState((prevState) => ({
      ...prevState,
      latitude: lat,
      longitude: lng,
      fetchedUserLocation: true,
    }));
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {state.address.length > 0 ? (
          <>
            <Row>
              <Text sub1={true}>Your current location is</Text>
              <br />
            </Row>
            <Row mTop={"-37px"}>
              <Text>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;
                {state.address}
              </Text>
            </Row>
          </>
        ) : (
          // <Row>
          //   <Text sub1={true}>
          //     <FontAwesomeIcon icon={faLocationArrow} /> &nbsp;Fetching Current
          //     Location...
          //   </Text>
          // </Row>
          <Div flex="all-center">
            <Text fontSize="medium">
              <FontAwesomeIcon icon={faLocationArrow} /> &nbsp;Fetching Current
              Location...
            </Text>
          </Div>
        )}
        <>
          {/* <Row>
            <Text>or</Text>
          </Row> */}
          <div class="fade_rule"></div>
          <Div flex="all-center">
            <Text fontSize="medium">Or Search your location manually</Text>
          </Div>
        </>

        <div style={{ margin: "20px 0" }}>
          <MapAutoComplete getCoordinates={getCoordinates} />
        </div>
        <Div flex="all-center">
          <Button
            disabled={!state.fetchedUserLocation}
            onClick={() => enableRedirect()}
            color={"#6f95ed"}
          >
            Continue
          </Button>
        </Div>
      </Modal>
    </>
  );
};

export default GeoModal;
