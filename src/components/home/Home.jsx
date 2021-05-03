import React, { Component } from "react";
import Cards from "./cardView/Cards";

export default class Home extends Component {
  render() {
    return (
      <div style={{width:"80%", paddingLeft: "12%"}}>
        <Cards />
      </div>
    );
  }
}
