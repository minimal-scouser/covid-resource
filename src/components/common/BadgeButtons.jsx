import React from "react";
import { Button, Text, Row, Col } from "./RowColStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLungs,
  faProcedures,
  faUtensils,
  faUserMd,
  faPills,
  faAmbulance
} from "@fortawesome/free-solid-svg-icons";

const BadgeButtons = () => {
  return (
    <>
      <Row style={{ margin: '20px 0' }}>
        <Text sub1={true}>Filters</Text>
      </Row>
      <Row  mTop="-20px">
        <Button color="#2c3942">
          <FontAwesomeIcon icon={faLungs} /> &nbsp;Oxygen
        </Button>
        &nbsp; &nbsp;
        <Button color="#2c3942">
          <FontAwesomeIcon icon={faProcedures} /> &nbsp;Beds
        </Button>
        &nbsp; &nbsp;
        <Button color="#2c3942">
          <FontAwesomeIcon icon={faUtensils} /> &nbsp;Food
        </Button>
        &nbsp; &nbsp;
        <Button color="#2c3942">
          <FontAwesomeIcon icon={faPills} /> &nbsp;Medicine
        </Button>
        &nbsp; &nbsp;
        <Button color="#2c3942">
          <FontAwesomeIcon icon={faUserMd} /> &nbsp;Doctor
        </Button>
        &nbsp; &nbsp;
        <Button color="#2c3942">
          <FontAwesomeIcon icon={faAmbulance} /> &nbsp;Ambulance
        </Button>
        &nbsp; &nbsp;
        {/* <Button>Button 2</Button> */}
      </Row>
    </>
  );
};

export default BadgeButtons;
