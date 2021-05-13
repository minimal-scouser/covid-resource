import React, { lazy, Suspense } from "react";
// import Card from "./Card";
import { Row, Col } from "../../common/RowColStyle";
const Card = lazy(() => import("./Card"));

function Cards(props) {
  return (
    <Row>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card mod={props.mod} />
        </Suspense>
      </Col>
    </Row>
  );
}

export default Cards;
