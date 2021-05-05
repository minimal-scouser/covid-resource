import React from "react";
import "./style.css";
import { Row, Col, Text, Button } from "../../common/RowColStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDirections,
  faPhoneSquareAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <Row>
              <Text bold={true}>Oxygen Dhaba</Text>
            </Row>
            <Button disabled color={"green"}>
              <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Available
            </Button>
            <br/>
            <br/>
            <Row>
              <Col border={true} width={"10%"}>
                <Text sub1={true}>
                <FontAwesomeIcon icon={faPhoneSquareAlt} /> &nbsp; Call
                </Text>
              </Col>
              &nbsp;&nbsp;&nbsp;
              <Col border={true} width={"30%"}>
                <Text sub1={true}>
                <FontAwesomeIcon icon={faDirections} /> &nbsp; Go
                </Text>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
