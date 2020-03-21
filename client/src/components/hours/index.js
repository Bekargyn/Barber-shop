import React from "react";
import "./style.css";

export const Hours = () => {
  return (
    <div id="hours">
      <div className="row">
        <div className="col-12">
          229 Skokie Valley road. Highland Park, Illinois 888-888-8888
        </div>
      </div>
      <div className="container" id="container">
        <div className="row">
          <div className="col-12">
            <h2>Operating Hours</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <table>
                <tr>
                  <td>MONDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <tr>
                  <td>TUESDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <tr>
                  <td>WEDNESDAY</td>
                  <td>8:30AM-8PM</td>
                </tr>
                <tr>
                  <td>THURSDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <tr>
                  <td>FRIDAY</td>
                  <td>8:30AM-6PM</td>
                </tr>
                <tr>
                  <td>SATURDAY</td>
                  <td>8:00AM-5PM</td>
                </tr>
                <tr>
                  <td>SUNDAY</td>
                  <td>CLOSED</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            229 Skokie Valley Road. Highland Park, IL 60035 / suite 24 <br />
            Phone: (847) 777-0274
            <br />
            <button id="btn">Send us a Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
