import React from "react";
import "./style.css";

export const Services = () => {
  return (
    <div id="services">
      <header>
        <div className="row">
          <div className="col-12">
            <img id="logo" src="../../images/logo.png" alt="logo"></img>
            <h6>
              <i src="../../icons/location.png" alt="location"></i>
              229 Skokie Valley road. Highland Park, Illinois
              <i src="../../icons/phone.png" alt="phone"></i>888-888-8888
            </h6>
          </div>
        </div>
      </header>
      <div className="container" id="container">
        <div className="row">
          <div className="col-12">
            <h2>How Much Is It</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-1">01.</div>
          <div className="col-6">
            <h2 className="nameOfServise">HAIR CUT</h2>
            <h5 className="includes">includes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-4">- - - - - - - - - </div>
          <div className="col-1">$ 20</div>
        </div>
        <div className="row">
          <div className="col-1">02.</div>
          <div className="col-6">
            <h2 className="nameOfServise">PACKAGE BORODOBREI</h2>
            <h5 className="includes">includes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-4">- - - - - - - - - </div>
          <div className="col-1">$ 30</div>
        </div>
        <div className="row">
          <div className="col-1">01.</div>
          <div className="col-6">
            <h2 className="nameOfServise">PACKAGE NO BORODA JUST USI</h2>
            <h5 className="includes">includes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-4">- - - - - - - - - </div>
          <div className="col-1">$ 45</div>
        </div>
        <div className="button">
          <button id="btn">Reserve Now</button>
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
