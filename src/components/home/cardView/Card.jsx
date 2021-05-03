import React from "react";
import "./style.css";
import { Row, Col, Text } from "../../common/RowColStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDirections, faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <Row>
              <Text bold={true}>Oxygen Dhaba</Text>
            </Row>
            <h3>Card 1</h3>
            <Row>
              <Col border={true}>
                <Text><FontAwesomeIcon icon={faPhoneSquareAlt} /> &nbsp;Call</Text>
              </Col>
              &nbsp;&nbsp;&nbsp;
              <Col border={true}>
                <Text ><FontAwesomeIcon icon={faDirections} /> &nbsp;Direction</Text>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
