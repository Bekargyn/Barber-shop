import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="nameTag">Gallery</div>
      <div className="gallery">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img
              className="image"
              src="https://via.placeholder.com/200"
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
          <div className="col-lg-4 col-md-4 col-sm-12">
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
          <div className="col-lg-4 col-md-4 col-sm-12">
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
          <div className="col-lg-4 col-md-4 col-sm-12">
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
          <div className="col-lg-4 col-md-4 col-sm-12">
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
          <div className="col-lg-4 col-md-4 col-sm-12">
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
          <button className="btn1">Location</button>
          <button className="btn2">Contact Us</button>
          <button className="btn3">Services</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
