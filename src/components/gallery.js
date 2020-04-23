import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Gallery = () => {
  const history = useHistory();

  function handleClickLocation() {
    history.push("/contact");
  }

  function handleClickForm() {
    history.push("/form");
  }

  function handleClickServices() {
    history.push("/services");
  }

  return (
    <div className="gallery page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1> Gallery</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 box">
            <img
              className="image"
              src="https://via.placeholder.com/300"
              alt=""
            />
            <div className="name">ME AND MY FRIEND</div>
            <div className="description">
              <div className="title">TITLE</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 box">
            <img className="image" src="../images/Layer34.png" alt="shampoo" />
            <div className="name">PRODUCT TITLE</div>
            <div className="description">
              <div className="title">Product description</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 box">
            <img className="image" src="../images/Layer34.png" alt="shampoo" />
            <div className="name">PRODUCT TITLE</div>
            <div className="description">
              <div className="title">Product description</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 box">
            <img className="image" src="../images/Layer34.png" alt="shampoo" />
            <div className="name">PRODUCT TITLE</div>
            <div className="description">
              <div className="title">Product description</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 box">
            <img className="image" src="../images/Layer34.png" alt="shampoo" />
            <div className="name">PRODUCT TITLE</div>
            <div className="description">
              <div className="title">Product description</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 box">
            <img className="image" src="../images/Layer34.png" alt="shampoo" />
            <div className="name">PRODUCT TITLE</div>
            <div className="description">
              <div className="title">Product description</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </p>
            </div>
          </div>
        </div>
        <div className="justify-content center">
          <button type="button" onClick={handleClickLocation} className="btn1">
            Location
          </button>
          <button type="button" onClick={handleClickForm} className="btn2">
            Contact Us
          </button>
          <button type="button" onClick={handleClickServices} className="btn3">
            Services
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
