import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Services = () => {
  return (
    <div className="services page">
      <Header />
      <div className="nameTag">How Much Is It</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 number">01.</div>
          <div className="col-lg-6 col-md-6 col-sm-10 haircut">
            <h2 className="nameOfServise">HAIR CUT</h2>
            <h6 className="includes">INCLUDES</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-0 line">
            - - - - - - - - -
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 number">$ 20</div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 number">02.</div>
          <div className="col-lg-6 col-md-6 col-sm-10 haircut">
            <h2 className="nameOfServise">PACKAGE BORODOBREI</h2>
            <h6 className="includes">INCLUDES</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-0 line">
            - - - - - - - - -
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 number">$ 30</div>
        </div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 number">01.</div>
          <div className="col-lg-6 col-md-6 col-sm-10 haircut">
            <h2 className="nameOfServise">PACKAGE NO BORODA JUST USI</h2>
            <h6 className="includes">INCLUDES</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-0 line">
            - - - - - - - - -
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 number">$ 45</div>
        </div>
        <div className="reserve">
          <button className="btn">Reserve Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
