import React from "react";
import "./style.css";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import MapAutoComplete from "../common/MapAutoComplete";

const AvailabilityForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <form className="form-inline" action="/action_page.php">
        <MapAutoComplete />
        <br />
        <Creatable options={options} placeholder="Select type" />
        <br />
        <Creatable options={options} placeholder="Select sub-type" />
        <input
          type="email"
          id="email"
          placeholder="Enter Contact Info"
          name="email"
        />
        <label>
          <input type="checkbox" name="remember" /> Verified by me
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AvailabilityForm;
