import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Products = () => {
  return (
    <div>
      <Header />
      <div className="nameTag">Product Line</div>
      <div className="products">
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
          <button className="btn1">Location</button>
          <button className="btn2">Contact Us</button>
          <button className="btn3">Services</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
