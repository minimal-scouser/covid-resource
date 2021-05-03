import React from "react";
import { Button, Text } from "./RowColStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLungs, faProcedures, faUtensils, faUserMd, faPills} from "@fortawesome/free-solid-svg-icons";

const BadgeButtons = () => {
  return (
    <>
      <Button><FontAwesomeIcon icon={faLungs} /> &nbsp;Oxygen</Button>
      &nbsp; &nbsp;
      <Button><FontAwesomeIcon icon={faProcedures} /> &nbsp;Beds</Button>
      &nbsp; &nbsp;
      <Button><FontAwesomeIcon icon={faUtensils} /> &nbsp;Food</Button>
      &nbsp; &nbsp;
      <Button><FontAwesomeIcon icon={faPills} /> &nbsp;Medicine</Button>
      &nbsp; &nbsp;
      <Button><FontAwesomeIcon icon={faUserMd} /> &nbsp;Doctor</Button>
      &nbsp; &nbsp;
      {/* <Button>Button 2</Button> */}
    </>
  );
};

export default BadgeButtons;
