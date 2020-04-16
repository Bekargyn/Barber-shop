import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
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
    </div>
  );
};
