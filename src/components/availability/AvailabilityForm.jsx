import React, { useEffect, useState } from "react";
import "./style.css";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import MapAutoComplete from "../common/MapAutoComplete";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const AvailabilityForm = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [value, setValue] = useState();

  const dropdownStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      // height: "42px",
      // borderRadius: "4px",
      // fontSize: "12px",
    }),
    // option: (style) => ({
    //   ...style,
    //   heigth: "1rem !important",
    // }),
  };

  return (
    <>
      <div className="form">
        <MapAutoComplete styles={dropdownStyles}/>
        <br />
        <Creatable
          options={options}
          placeholder="Select type"
          styles={dropdownStyles}
        />
        <br />
        <Creatable
          options={options}
          placeholder="Select sub-type"
          styles={dropdownStyles}
        />
        <br />
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          // country="IND"
          onChange={setValue}
          styles={dropdownStyles}
        />
        <br />
        <button type="submit">Submit</button>
      </div>
    </>
  );
};

export default AvailabilityForm;
