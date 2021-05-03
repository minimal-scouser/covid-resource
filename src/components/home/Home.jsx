import React, { Component } from "react";
import Cards from "./cardView/Cards";
import MapAutoComplete from "../common/MapAutoComplete";
import style from "./cardView/style.css";

export default class Home extends Component {
  render() {
    return (
      <div style={{marginLeft:"8%"}}>
        <div class="row">
          <div class="column">
            <MapAutoComplete />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}
