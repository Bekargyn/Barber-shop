import React from "react";
import "./style.css";

export const Hours = () => {
  return (
    <div id="hours">
      <header>
        <div className="row">
          <div className="col-12">
            <img src="../../images/logo.png" alt="logo"></img>
            <h6>
              229 Skokie Valley road. Highland Park, Illinois 888-888-8888
            </h6>
          </div>
        </div>
      </header>
      <div className="container" id="container">
        <div className="row">
          <div className="col-12">
            <h2>Operating Hours</h2>
          </div>
          <br />
          <div className="row">
            <div className="col-12" id="table">
              <table>
                <tr>
                  <td>MONDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <br />
                <tr>
                  <td>TUESDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <br />
                <tr>
                  <td>WEDNESDAY</td>
                  <td>8:30AM-8PM</td>
                </tr>
                <br />
                <tr>
                  <td>THURSDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <br />
                <tr>
                  <td>FRIDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <br />
                <tr>
                  <td>SATURDAY</td>
                  <td>8:00AM-5PM</td>
                </tr>
                <br />
                <tr>
                  <td>SUNDAY</td>
                  <td>CLOSED</td>
                </tr>
              </table>
              <br />
            </div>
          </div>
        </div>
        <div className="button">
          <button id="btn">Send Us A Message</button>
        </div>
      </div>
      <footer>
        <div className="row" id="adres">
          <div className="col-12">
            <h5>229 Skokie Valley Road. Highland Park, IL 60035 / suite 24 </h5>
            <br />
            <div className="phone">Phone: (847) 777-0274</div>
            <br />
          </div>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/bootsnipp">
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
          </a>
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
