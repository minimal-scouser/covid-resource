import styled, { css } from "styled-components";

const Row = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-flow: ${(props) => props.flexFlow || null};
  width: 100%;
  margin-top: 6px;
`;

const Col = styled.div`
  display: flex;
  flex-flow: column;
  width: ${(props) => props.width || "40%"};
  justify-content: center;
  margin-right: ${(props) => props.marginRight || null};
  border: ${(props) => (props.border ? "1px solid #ddd" : null)};
  border-radius: ${(props) => (props.border ? "4px" : null)};
  padding-left: ${(props) => (props.border ? "5%" : null)};
  /* padding-right: ${(props) => (props.border ? "5%" : null)}; */
  /* margin-top: ${(props) => (props.border ? "7%" : null)}; */
  transition: ${(props) => (props.border ? "box-shadow .3s" : null)};
  &:hover {
    background-color:  ${(props) => (props.border ? "rgba(33,33,33,.2)" : null)};
    /* color: white; */
  }
`;

const Text = styled.p`
  font-size: ${(props) => (props.sub ? "10px" : "20px")};
  font-weight: ${(props) =>
    props.bold ? "bold" : props.sub ? "light" : "none"};
  float: left;
  display: block;
  ${(props) =>
    props.sub && {
      marginRight: "50%",
      marginTop: "-1%",
      color: "#696969",
    }}
`;

const Button = styled.button`
  
    padding: "10px 20px";
    background-color:${(props) => props.color || "dodgerblue"};
    border: 1px solid #ddd;
    border-radius:20px ;
    color: white;
    height: 10px;

    &:hover {
      background-color:${(props) => props.color || "dodgerblue"};
    /* color: white; */
  }
 
`;

export { Row, Col, Text, Button };