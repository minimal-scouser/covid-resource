import React, { useEffect, useState } from "react";
import "./style.css";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import MapAutoComplete from "../common/MapAutoComplete";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Text, Row, Col } from "../common/RowColStyle";

const AvailabilityForm = () => {
  const options = [
    { value: "1", label: "Chocolate" },
    { value: "2", label: "Strawberry" },
    { value: "3", label: "Vanilla" },
  ];

  const optionsSub = [
    { value: "1", label: "Apples" },
    { value: "2", label: "Oranges" },
    { value: "3", label: "PineApple" },
  ];

  const [value, setValue] = useState({
    type: { value: "", label: "Select Type of Resource" },
    subType: { value: "", label: "Select sub-type" },
  });

  const [state, setState] = useState({
    lat: "",
    lng: "",
    phone: "",
    resource_type_id: "",
    resource_subType_id: "",
  });

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

  const getCoordinates = (lat, lng) => {
    setState((prevState) => ({
      ...prevState,
      lat: lat,
      lng: lng,
    }));
  };

  const onPhoneChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const onTypeChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      resource_type_id: value.value,
      resource_subType_id: "",
    }));
    setValue((prevState) => ({
      ...prevState,
      type: value,
      subType: { value: "", label: "Select sub-type" },
    }));
  };

  const onSubTypeChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      resource_subType_id: value.value,
    }));
    setValue((prevState) => ({
      ...prevState,
      subType: value,
    }));
  };

  return (
    <>
      <div className="form">
        <Row>
          <Text>Add your Resource</Text>
        </Row>
        <MapAutoComplete
          styles={dropdownStyles}
          getCoordinates={getCoordinates}
        />
        <br />
        <Creatable
          options={options}
          placeholder="Select type"
          styles={dropdownStyles}
          onChange={(val) => onTypeChange(val)}
          value={value.type}
        />
        <br />
        <Creatable
          options={optionsSub}
          placeholder="Select sub-type"
          styles={dropdownStyles}
          onChange={(val) => onSubTypeChange(val)}
          value={value.subType}
        />
        <br />
        <PhoneInput
          placeholder="Enter phone number"
          value={state.phone}
          country="IND"
          onChange={(val) => onPhoneChange(val)}
          styles={dropdownStyles}
        />
        <br />
        <button type="submit">Submit</button>
      </div>
    </>
  );
};

export default AvailabilityForm;
