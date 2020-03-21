import React from "react";
import "./style.css";

export const Form = () => {
  return (
    <div id="form">
      <header>
        <div className="row">
          <div className="col-12">
            <img id="logo" src="../../images/logo.png" alt="logo"></img>
            <h6>
              229 Skokie Valley road. Highland Park, Illinois 888-888-8888
            </h6>
          </div>
        </div>
      </header>
      <div className="container" id="container">
        <div className="row">
          <div className="col-12">
            <h2>Drop Us A Message</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="col-6">
            <input type="text" id="phone" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="button">
          <button id="btn">Send</button>
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
          {/* <a href="https://www.facebook.com/bootsnipp">
            <i
              id="social-fb"
              className="fa fa-facebook-square fa-3x social"
            ></i>
          </a>
          <a href="https://twitter.com/bootsnipp">
            <i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
          </a>
          <a href="https://plus.google.com/+Bootsnipp-page">
            <i
              id="social-gp"
              className="fa fa-google-plus-square fa-3x social"
            ></i>
          </a> */}
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
