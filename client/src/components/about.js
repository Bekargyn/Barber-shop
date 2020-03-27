import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const About = () => {
  return (
    <div>
      <Header />
      <div className="nameTag">We Are The Barbers</div>
      <div className="about">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="flexbox-container">
              <img
                className="sergey"
                src="../../images/seregaSide.png"
                alt=""
              />
              <h1>- - - - - - -SERGEY</h1>
            </div>
            <div className="full-name">FULL NAME:</div>
            <div className="name">Sergey Steglik</div>
            <div className="born">BORN:</div>
            <div className="name">Kharkiv, Ukraine</div>
            <div className="bio">BIO:</div>
            <div className="name">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                veritatis cupiditate. Eaque explicabo vel excepturi assumenda
                numquam voluptate tempora alias? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsam, veritatis cupiditate. Eaque
                explicabo vel excepturi assumenda numquam voluptate tempora
                alias?
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="flexbox-container">
              <h1>NICK - - - - - - - </h1>
              <img className="nick" src="../../images/nickSide.png" alt="" />
            </div>
            <div className="full-name">FULL NAME:</div>
            <div className="name">Nick Pagano</div>
            <div className="born">BORN:</div>
            <div className="name">Wheeling, IL</div>
            <div className="bio">BIO:</div>
            <div className="name">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                veritatis cupiditate. Eaque explicabo vel excepturi assumenda
                numquam voluptate tempora alias? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsam, veritatis cupiditate. Eaque
                explicabo vel excepturi assumenda numquam voluptate tempora
                alias?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="btn1">Location</button>
        <button className="btn2">Contact Us</button>
        <button className="btn3">Services</button>
      </div>

      <Footer />
    </div>
  );
};
