import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(0);

  function toggleNav(e) {
    e.preventDefault();
    setOpenMenu(!openMenu);
  }

  return (
    <div className="menu">
      <span id="open-menu" onClick={toggleNav}>
        &#9776;
      </span>
      <div className={openMenu ? "overlay toggled" : "overlay"}>
        <span className="closebtn" onClick={toggleNav}>
          &times;
        </span>
        <div className="overlay-content">
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
