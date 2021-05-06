import React, { useEffect, useState } from "react";
import "./style.css";
// import Creatable, { makeCreatableSelect } from "react-select/creatable";
import Select from "react-select/creatable";
import MapAutoComplete from "../common/MapAutoComplete";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Text, Row, Col } from "../common/RowColStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AvailabilityForm = () => {
  const options = [
    { value: "1", label: "Oxygen" },
    { value: "2", label: "Medicine" },
    { value: "3", label: "Beds" },
    { value: "4", label: "Doctor" },
    { value: "5", label: "Food" },
  ];

  const subType = {
    1: [
      { value: "1.1", label: "Refill" },
      { value: "1.2", label: "New Cylinder" },
    ],
    2: [
      { value: "2.1", label: "Remedisvir" },
      { value: "2.2", label: "Gelusil" },
      { value: "2.3", label: "ENO" },
    ],
    3: [
      { value: "3.1", label: "ICU" },
      { value: "3.2", label: "ICCU" },
      { value: "3.3", label: "Oxygen Bed" },
      { value: "3.4", label: "Normal Bed" },
    ],
    4: [
      { value: "4.1", label: "General" },
      { value: "4.2", label: "Haturi" },
      { value: "4.3", label: "Daami" },
    ],
    5: [
      { value: "5.1", label: "Veg" },
      { value: "5.2", label: "Non-Veg" },
      { value: "5.3", label: "Vegan" },
      { value: "5.3", label: "Veg/Non-Veg" },
    ],
  };

  const [subOptions, setSubOptions] = useState([]);
  const [disabled, setDisabled] = useState(true);

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
    name: "",
  });

  const dropdownStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      background: "#2c3942",
    }),
    input: (provided) => ({
      ...provided,
      color: "red",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#bbbfc8",
    }),
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
    console.log("subtype", subType[value.value]);
    setSubOptions(subType[value.value]);
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

  const onNameChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  useEffect(() => {
    if (
      state.lat.length > 0 &&
      state.lng.length > 0 &&
      state.phone.length > 0 &&
      state.resource_type_id.length > 0 &&
      state.resource_subType_id.length > 0 &&
      state.name.length > 0
    ) {
      setDisabled(false);
    }
  }, [state]);

  const notify = () => toast.success("Resource added successfully!");

  const onSubmit = () => {
    const stateObj = {
      lat: "",
      lng: "",
      phone: "",
      resource_type_id: "",
      resource_subType_id: "",
      name: "",
    };

    const valueObj = {
      type: { value: "", label: "Select Type of Resource" },
      subType: { value: "", label: "Select sub-type" },
    };

    setState(stateObj);
    setValue(valueObj);
    setDisabled(true)

    notify();
  };

  return (
    <>
      <ToastContainer />
      {console.log("state form", state)}
      <div className="form">
        <Row>
          <Text>Add your Resource</Text>
        </Row>
        <MapAutoComplete
          styles={dropdownStyles}
          getCoordinates={getCoordinates}
        />
        <br />
        <Select
          options={options}
          placeholder="Select type"
          styles={dropdownStyles}
          onChange={(val) => onTypeChange(val)}
          value={value.type}
          isSearchable={false}
          // isClearable={true}
        />
        <br />
        <Select
          options={subOptions}
          placeholder="Select sub-type"
          styles={dropdownStyles}
          onChange={(val) => onSubTypeChange(val)}
          value={value.subType}
          isSearchable={false}
        />
        <br />
        <PhoneInput
          placeholder="Enter phone number"
          value={state.phone}
          country="IND"
          onChange={(val) => onPhoneChange(val)}
          styles={dropdownStyles}
          // style={{background:"red"}}
        />
        <br />
        <input
          className="contact-name"
          type="name"
          placeholder="Enter Contact Name"
          value={state.name}
          onChange={(e) => onNameChange(e)}
        />
        <br />
        <button type="submit" disabled={disabled} onClick={() => onSubmit()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AvailabilityForm;
