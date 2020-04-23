import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Products = () => {
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
    <div className="products page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Product Line</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="image">
              <img src="../../images/Layer34.png" alt="shampoo" />
            </div>
            <div className="text">
              <div className="name">KEUNE</div>
              <div className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis recusandae repellat dolore itaque velit
                mollitia deleniti explicabo. Laudantium, voluptatibus?
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="image">
              <img src="../images/Layer34.png" alt="shampoo" />
            </div>
            <div className="name">KEUNE</div>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur nobis recusandae repellat dolore itaque velit
              mollitia deleniti explicabo. Laudantium, voluptatibus?
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="image">
              <img src="../images/Layer34.png" alt="shampoo" />
            </div>
            <div className="name">KEUNE</div>
            <div className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur nobis recusandae repellat dolore itaque velit
              mollitia deleniti explicabo. Laudantium, voluptatibus?
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
