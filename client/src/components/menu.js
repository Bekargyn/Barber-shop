import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu page">
      <i class="fas fa-bars">
        <Link to={"/"} className={"menu-box"}>
          HOME PAGE
        </Link>
        <Link to={"/hours"} className={"menu-box"}>
          OPERATING HOURS
        </Link>
        <Link to={"/about"} className={"menu-box"}>
          WE ARE THE BARBERS
        </Link>
        <Link to={"/contact"} className={"menu-box"}>
          VISIT US
        </Link>
        <Link to={"/services"} className={"menu-box"}>
          SERVICES
        </Link>
        <Link to={"/products"} className={"menu-box"}>
          PRODUCT LINE
        </Link>
        <Link to={"/form"} className={"menu-box"}>
          DROP US A MESSAGE
        </Link>
        <Link to={"/gallery"} className={"menu-box"}>
          GALLERY
        </Link>
      </i>
    </div>
  );
};
