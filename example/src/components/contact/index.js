import React from "react";
import "./style.css";

export const Contact = () => {
  return (
    <div id="contact">
      <header>
        <div className="row">
          <div className="col-12">
            <img id="logo" src="../../images/logo.png" alt="logo"></img>
            <h6>
              <span className="icon"></span>
              229 Skokie Valley road. Highland Park, Illinois
              <i src="../../icons/phone.png" alt="phone"></i>888-888-8888
            </h6>
          </div>
        </div>
      </header>
      <div className="container" id="container">
        <div className="row">
          <div className="col-12">
            <h2>Visit Us</h2>
          </div>
        </div>
        <div className="row">
          <img
            src="../../images/Layer37.jpg"
            alt="location-img"
            id="layer37"
          ></img>
          <img src="../../images/Layer38.png" alt="check" id="layer38"></img>
          <button className="btn">Get Direction</button>
        </div>
      </div>
      <footer>
        <div className="row" id="adres">
          <div className="col-12">
            <h5>229 Skokie Valley Road. Highland Park, IL 60035 / suite 24</h5>
            <br />
            <div className="phone">Phone: (847) 777-0274</div>
            <br />
          </div>
        </div>
        <div className="icons">
          <a href="mailto:#">
            <i
              id="social-em"
              className="fa fa-envelope-square fa-3x social"
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
};
