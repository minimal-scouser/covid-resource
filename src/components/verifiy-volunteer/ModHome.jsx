import React, { Component, lazy, Suspense } from "react";
import { Button } from "../common/RowColStyle";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timer from  "./Timer"
const Cards = lazy(() => import("../home/cardView/Cards"));
const MapAutoComplete = lazy(() => import("../common/MapAutoComplete"));
const BadgeButtons = lazy(() => import("../common/BadgeButtons"));
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';



const ModHome = () => {
  return (
    <>
      <div>
        <div class="row">
        <div class="timer">
          <Timer />
          </div>
        </div>
        {/* <div class="row">
          <div class="column">
            <Suspense fallback={<></>}>
              <BadgeButtons />
            </Suspense>
          </div>
        </div> */}
        {/* <div class="row" style={{ float: "right" }}>
          <div class="column" style={{ marginBottom: "-1%" }}>
            <Suspense fallback={<></>}>
              <Button color="#2c3942">
                <FontAwesomeIcon icon={faSort} /> &nbsp;Sort
              </Button>
            </Suspense>
          </div>
        </div> */}
        <div class="row mb-0">
          <div class="column">
            <Suspense fallback={<></>}>
              <Cards mod={true}/>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModHome;
