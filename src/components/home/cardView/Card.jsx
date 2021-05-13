import React from "react";
import "./style.css";
import { Row, Col, Text, Button } from "../../common/RowColStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDirections,
  faPhoneAlt,
  faCheckCircle,
  faShareAlt,
  faUserCheck,
  faCheckSquare,
  faPhoneSlash,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Card = (props) => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <Row>
              <Button
                disabled
                color={"#659a62"}
                style={{
                  minHeight: "24px",
                  marginTop: "4px",
                  padding: "5px 10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Oxygen
              </Button>
              &nbsp;&nbsp;
              <Button
                disabled
                color={"#659a62"}
                style={{
                  minHeight: "24px",
                  marginTop: "4px",
                  padding: "5px 10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Beds
              </Button>
              &nbsp;&nbsp;
              <Button
                disabled
                color={"#659a62"}
                style={{
                  minHeight: "24px",
                  marginTop: "4px",
                  padding: "5px 10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Food
              </Button>
              &nbsp;&nbsp;
              <Button
                disabled
                color={"#659a62"}
                style={{
                  minHeight: "24px",
                  marginTop: "4px",
                  padding: "5px 10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Medicine
              </Button>
              &nbsp;&nbsp;
              <Button
                disabled
                color={"#659a62"}
                style={{
                  minHeight: "24px",
                  marginTop: "4px",
                  padding: "5px 10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Doctor
              </Button>
              &nbsp;&nbsp;
              <Button
                disabled
                color={"#659a62"}
                style={{
                  minHeight: "24px",
                  marginTop: "4px",
                  padding: "5px 10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Ambulance
              </Button>
            </Row>
            <Row>
              <Col>
                <Text style={{ margin: "10px 0" }} bold={true}>
                  Sonu Sood
                </Text>
              </Col>
              {props.mod ? null : (
                <Col width="30%">
                  <div style={{ marginLeft: "100%" }}>
                    {" "}
                    <Text
                      sub1={true}
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <a
                        target="_blank"
                        style={{ color: "#779ff0", fontSize: "30px" }}
                        href="http://www.google.com/maps/place/49.46800006494457,17.11514008755796/@49.46800006494457,17.11514008755796,17z"
                      >
                        <FontAwesomeIcon icon={faDirections} />
                      </a>
                    </Text>
                  </div>
                </Col>
              )}
            </Row>
            <Row>
              <Col width="50%">
                <Text style={{ margin: "10px 0" }} sub={true}>
                  32, BN Block, Sector V, Bidhannagar, Kolkata, West Bengal
                  700091, India
                </Text>
              </Col>
            </Row>
            <br />
            <Row style={{ marginTop: "20px" }}>
              <Col width={"20%"}>
                <Text
                  sub1={true}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;{" "}
                  <a href="tel:+62896706255135" style={{ color: "#779ff0" }}>
                    Call
                  </a>
                </Text>
              </Col>
              &nbsp;&nbsp;&nbsp;
              <Col width={"20%"}>
                <Text
                  sub1={true}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <FontAwesomeIcon
                    icon={props.mod ? faUserCheck : faShareAlt}
                  />{" "}
                  &nbsp;{" "}
                  {props.mod ? (
                    <Popup
                      trigger={<a style={{ color: "#779ff0" }}> Verify</a>}
                      position="bottom center"
                    >
                      <div style={{ color: "#779ff0" }}>
                        {" "}
                        <FontAwesomeIcon icon={faCheckSquare} /> &nbsp;Verified
                      </div>
                      <hr></hr>
                      <div style={{ color: "#779ff0" }}>
                        {" "}
                        <FontAwesomeIcon icon={faPhoneSlash} />{" "}
                        &nbsp;Unreachable
                      </div>
                      <hr></hr>
                      <div style={{ color: "#779ff0" }}>
                        <FontAwesomeIcon icon={faFlag} /> &nbsp;Fake
                      </div>
                    </Popup>
                  ) : (
                    <a
                      href={
                        isMobile
                          ? "whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"
                          : "https://web.whatsapp.com://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement"
                      }
                      rel="nofollow noopener"
                      target="_blank"
                      className="share-icon"
                      style={{ color: "#779ff0" }}
                    >
                      Share
                    </a>
                  )}
                </Text>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
