import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <img className="img-fluid" src="../../images/logo.png" alt="logo" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6 ">
          <div className="dropdown">
            <button className="dropbtn">MENU </button>
            <div className="content">
              <Link to={"/"} className={"links"}>
                HOME PAGE
              </Link>
              <Link to={"/hours"} className={"links"}>
                OPERATING HOURS
              </Link>
              <Link to={"/about"} className={"links"}>
                WE ARE THE BARBERS
              </Link>
              <Link to={"/contact"} className={"links"}>
                VISIT US
              </Link>
              <Link to={"/services"} className={"links"}>
                SERVICES
              </Link>
              <Link to={"/products"} className={"links"}>
                PRODUCT LINE
              </Link>
              <Link to={"/form"} className={"links"}>
                DROP US A MESSAGE
              </Link>
              <Link to={"/gallery"} className={"links"}>
                GALLERY
              </Link>
            </div>
          </div>
          <div id="info">
            <div id="address">
              <a
                href="http://maps.google.com/?q=229%20Skokie%20Valley%20Road%20suite%2024.%20Highland%20Park,%20Illinois"
                target="_blank"
                rel="noopener noreferrer"
                className="address"
              >
                <img src="../../icons/location.png" alt="" />
                229 Skokie Valley road. Highland Park, Illinois
              </a>
            </div>
            <a
              href="http://test.acc4action.com/products/tel:847-777-0274"
              target="_blank"
              rel="noopener noreferrer"
              className="phone"
            >
              <img src="../../icons/phone.png" alt="" />
              847-777-0274
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
