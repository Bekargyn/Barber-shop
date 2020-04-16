import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Hours = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/form");
  }

  return (
    <div className="hours page">
      <Header />
      <div className="nameTag">
        <div className="lines"></div>
        <h1>Operating Hours</h1>
        <div className="lines"></div>
      </div>
      <div className="container">
        <div className="table">
          <div>
            <div>MONDAY</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>TUESDAY</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>WEDNESDAY</div>
            <div>8:30AM-8PM</div>
          </div>
          <div>
            <div>THURSDAY</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>FRIDAY</div>
            <div>8:30AM-6PM</div>
          </div>
          <div>
            <div>SATURDAY</div>
            <div>8:00AM-5PM</div>
          </div>
          <div>
            <div>SUNDAY</div>
            <div>CLOSED</div>
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={handleClick} id="btn">
            Send Us A Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
