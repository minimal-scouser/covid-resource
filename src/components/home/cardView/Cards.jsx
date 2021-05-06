import React, { lazy, Suspense } from "react";
// import Card from "./Card";
import { Row, Col } from "../../common/RowColStyle";
const Card = lazy(() => import("./Card"));

function Cards() {
  return (
    <Row>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
        <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
      <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
      <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
      <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
      <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
      <Col width="50%">
      <Suspense fallback={<></>}>
          <Card />
        </Suspense>
      </Col>
    </Row>
  );
}

export default Cards;
