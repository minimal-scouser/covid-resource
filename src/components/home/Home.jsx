import React, { Component, lazy, Suspense } from "react";

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
