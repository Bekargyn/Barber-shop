import React from "react";
import "./style.css";
import { Jumbotron as Jumbo } from "react-bootstrap";
import Background from "../../images/Rectangle115.jpg";
import styled from "styled-components";

// const Styles = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// };

const Styles = styled.div`
  .jumbotron {
    background: url(${Background}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -3;
  }
`;

export const Services = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
      </Jumbo>
    </Styles>
  );
};
