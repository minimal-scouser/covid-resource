import React, { Component, lazy, Suspense } from "react";
import { Button } from "../common/RowColStyle";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cards = lazy(() => import("./cardView/Cards"));
const MapAutoComplete = lazy(() => import("../common/MapAutoComplete"));
const BadgeButtons = lazy(() => import("../common/BadgeButtons"));

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="column">
            <Suspense fallback={<></>}>
              <MapAutoComplete />
            </Suspense>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <Suspense fallback={<></>}>
              <BadgeButtons />
            </Suspense>
          </div>
        </div>
        <div class="row">
          <div
            class="column"
            style={{ marginLeft: "38%", marginBottom: "-1%" }}
          >
            <Suspense fallback={<></>}>
              <Button color="#2c3942">
                <FontAwesomeIcon icon={faSort} /> &nbsp;Sort
              </Button>
            </Suspense>
          </div>
        </div>
        <div class="row mb-0">
          <div class="column">
            <Suspense fallback={<></>}>
              <Cards />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
