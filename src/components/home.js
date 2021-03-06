import React from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "./menu";

export const Home = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/about");
  }

  return (
    <div className="homepage">
      <div className="homepage-menu">
        <Menu />
      </div>
      <div className="top">
        <div className="logo">
          <img src="../../images/logo.png" alt="logo" />
        </div>
        <div id="nameTag">
          <img
            className="img-fluid"
            src="http://test.acc4action.com/wp-content/uploads/2018/07/Not-your-Head.png"
            alt=""
          />
        </div>
        <button type="button" onClick={handleClick} className="btn">
          More About Us
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 left">
            <div className="sergey guy" id="sergey">
              <img
                className="img-fluid"
                id="front"
                src="../../images/serega.png"
                alt=""
              />
              <div className="side-image">
                <div className="side-serega">
                  <img
                    className="img-fluid"
                    src="../../images/seregaSide.png"
                    alt=""
                  />
                  <div className="side-name">
                    <span> meet</span>
                    <h1>SERGEY</h1>
                  </div>
                </div>
                <button type="button" onClick={handleClick} className="btn">
                  More
                </button>
              </div>
            </div>
            <div className="fixed"></div>
            <div className="image">
              <img
                className="img-fluid"
                id="chair"
                src="../images/chair_red.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 middle">
            <img className="logo" src="../../images/logo.png" alt="logo" />
            <div id="nameTag">
              <img
                className="img-fluid"
                src="http://test.acc4action.com/wp-content/uploads/2018/07/Not-your-Head.png"
                alt=""
              />
              <div className="button">
                <button type="button" onClick={handleClick} className="btn">
                  More About Us
                </button>
              </div>
            </div>
            <div className="bottom">
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
              <div id="phone">
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
              <div className="icons">
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                >
                  <img src="../../icons/fb.png" alt="facebook" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  rel="noopener noreferrer"
                >
                  <img src="../../icons/insta.png" alt="instagram" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noopener noreferrer"
                >
                  <img src="../../icons/yt.png" alt="facebook" />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/explore"
                  rel="noopener noreferrer"
                >
                  <img src="../../icons/twitter.png" alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 right">
            <div className="nick guy" id="nick">
              <img
                className="img-fluid"
                id="front"
                src="../../images/nick.png"
                alt=""
              />
              <div className="side-image">
                <div className="side-nick">
                  <img
                    className="img-fluid"
                    src="../../images/nickSide.png"
                    alt=""
                  />
                  <div className="side-name">
                    <span> meet</span>
                    <h1>NICK</h1>
                  </div>
                </div>
                <button type="button" onClick={handleClick} className="btn">
                  More
                </button>
              </div>
            </div>
            <div className="fixed"></div>
            <div className="image">
              <img
                className="img-fluid"
                id="chair"
                src="../images/black_chair.png"
                alt="black_chair"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div id="address">
          <h5>229 Skokie Valley Road suite 24. Highland Park, IL 60035</h5>
        </div>
        <div id="phone">Phone: (847) 777-0274</div>
        <div className="icons">
          <a
            target="_blank"
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
          >
            <img src="../../icons/fb.png" alt="facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
          >
            <img src="../../icons/insta.png" alt="instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
          >
            <img src="../../icons/yt.png" alt="facebook" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/explore"
            rel="noopener noreferrer"
          >
            <img src="../../icons/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};
