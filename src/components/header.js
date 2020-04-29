import React from "react";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <Menu />
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <img className="img-fluid" src="../../images/logo.png" alt="logo" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
          <div className="info">
            <div className="address">
              <a
                href="http://maps.google.com/?q=229%20Skokie%20Valley%20Road%20suite%2024.%20Highland%20Park,%20Illinois"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../icons/location.png" alt="" />
                229 Skokie Valley road. Highland Park, Illinois
              </a>
            </div>
            <div className="phone">
              <a
                href="http://test.acc4action.com/products/tel:847-777-0274"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../../icons/phone.png" alt="" />
                847-777-0274
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
