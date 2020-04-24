import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Contact = () => {
  return (
    <div className="contact page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Visit Us</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="content">
          <img
            className="img-fluid"
            src="../../images/Layer37.jpg"
            alt=""
          ></img>
          <div className="centerBox">
            <img
              className="img-fluid check"
              src="../../images/Layer38.png"
              alt=""
            ></img>
            <div>
              <form
                action="http://maps.google.com/?q=229%20Skokie%20Valley%20Road%20suite%2024.%20Highland%20Park,%20Illinois"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn" type="submit" value="Google direction">
                  Get Direction
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
