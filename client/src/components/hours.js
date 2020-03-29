import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Hours = () => {
  return (
    <div className="hours page">
      <Header />
      <div className="nameTag">Operating Hours</div>
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
          <button id="btn">Send Us A Message</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

{
  /* <table>
<tbody>
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
</tbody>
</table> */
}
