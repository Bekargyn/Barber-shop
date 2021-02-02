import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Form = () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const text = document.getElementById("text");
  const showText = document.getElementById("response");

  function sendMessage(e) {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      phone === "" ||
      email === "" ||
      text === ""
    ) {
      let response = "Please, fill all inputs!";
      showText.textContent = response;
    } else {
      let response =
        "Thank you for your message " +
        firstName.value +
        "! We will reach you as soon as possible!";
      showText.textContent = response;
    }
  }

  return (
    <div className="form page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Drop Us A Message</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <form action="" id="form">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 top">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 top">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 top">
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input type="text" id="phone" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <textarea name="" id="text" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="button">
            <button type="submit" id="btn" onClick={sendMessage}>
              Send
            </button>
          </div>
          <div id="response"></div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
