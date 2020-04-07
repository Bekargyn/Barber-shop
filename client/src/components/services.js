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
          <div className="col-1">01.</div>
          <div className="col-6">
            <h2 className="nameOfServise">HAIR CUT</h2>
            <h6 className="includes">INCLUDES</h6>
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
            <h6 className="includes">INCLUDES</h6>
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
            <h6 className="includes">INCLUDES</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              veritatis cupiditate. Eaque explicabo vel excepturi assumenda
              numquam voluptate tempora alias?
            </p>
          </div>
          <div className="col-4">- - - - - - - - - </div>
          <div className="col-1">$ 45</div>
        </div>
        <div className="btn">
          <button id="btn">Reserve Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
