import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Contact = () => {
  return (
    <div className="contact page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Visit Us</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="row outside">
          <img
            src="../../images/Layer37.jpg"
            alt="location-img"
            id="layer37"
          ></img>
          <img src="../../images/Layer38.png" alt="check" id="layer38"></img>
          <button className="btn">Get Direction</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
