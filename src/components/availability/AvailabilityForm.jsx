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
      { value: "1.1", label: "Refill", typeId: "1" },
      { value: "1.2", label: "New Cylinder", typeId: "1" },
    ],
    2: [
      { value: "2.1", label: "Remedisvir", typeId: "2" },
      { value: "2.2", label: "Gelusil", typeId: "2" },
      { value: "2.3", label: "ENO", typeId: "2" },
    ],
    3: [
      { value: "3.1", label: "ICU", typeId: "3" },
      { value: "3.2", label: "ICCU", typeId: "3" },
      { value: "3.3", label: "Oxygen Bed", typeId: "3" },
      { value: "3.4", label: "Normal Bed", typeId: "3" },
    ],
    4: [
      { value: "4.1", label: "General", typeId: "4" },
      { value: "4.2", label: "Haturi", typeId: "4" },
      { value: "4.3", label: "Daami", typeId: "4" },
    ],
    5: [
      { value: "5.1", label: "Veg", typeId: "5" },
      { value: "5.2", label: "Non-Veg", typeId: "5" },
      { value: "5.3", label: "Vegan", typeId: "5" },
      { value: "5.3", label: "Veg/Non-Veg", typeId: "5" },
    ],
  };

  const [subOptions, setSubOptions] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const [value, setValue] = useState({
    type: { value: null, label: null },
    subType: { value: "", label: "Select sub-type" },
  });

  const [state, setState] = useState({
    lat: "",
    lng: "",
    phone: "",
    resources: {},
    name: "",
  });

  const [typeState, setTypeState] = useState({});

  const dropdownStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      background: "#2c3942",
      background: "#2c3942",
      border: "0 !important",
      // This line disable the blue border
      boxShadow: "0 !important",
      "&:hover": {
        border: "0 !important",
      },
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

  const onTypeChange = (arr) => {
    let typeStateCopy = typeState;
    let subOptionsArr = [];
    arr.forEach((elem) => {
      if (!typeStateCopy[elem.value]) {
        typeStateCopy[elem.value] = [];
      }
      subOptionsArr.push(...subType[elem.value]);
    });
    setTypeState(typeStateCopy);
    setSubOptions(subOptionsArr);
  };

  const onSubTypeChange = (arr) => {
    let typeStateCopy = typeState;
    for (let key in typeStateCopy) {
      typeStateCopy[key] = [];
    }
    arr.forEach((elem) => {
      typeStateCopy[elem.typeId].push(elem.value);
    });
    setTypeState(typeStateCopy);
  };

  const onNameChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const validateResource = () => {};

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
    let dataObj = state;
    dataObj.resources = typeState;
    console.log("i am submitting", dataObj);
    //TODO : Clear form on submit
    setDisabled(true);

    notify();
  };

  return (
    <>
      <ToastContainer />
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
          onChange={(e) => onTypeChange(e)}
          defaultValue={null}
          isSearchable={false}
          isMulti={true}
          // isClearable={true}
        />
        <br />
        <Select
          options={subOptions}
          placeholder="Select sub-type"
          styles={dropdownStyles}
          onChange={(e) => onSubTypeChange(e)}
          defaultValue={null}
          isSearchable={false}
          isMulti={true}
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
        <button
          type="submit"
          // disabled={disabled}
          onClick={() => onSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AvailabilityForm;
