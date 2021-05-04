import React from "react";
import Card from "./Card";
import { Row, Col } from "../../common/RowColStyle";
const Cards = () => {
  return (
    <Row>
      <Col width="50%">
        <Card />
      </Col>
      <Col  width="50%">
        <Card />
      </Col>
      <Col  width="50%">
        <Card />
      </Col>
      <Col  width="50%">
        <Card />
      </Col>
    </Row>
  );
};

export default Cards;
