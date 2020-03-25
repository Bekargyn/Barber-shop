import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Hours = () => {
  return (
    <div>
      <Header />
      <div className="hours">
        <div className="nameTag">Operating Hours</div>

        <table>
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
        </table>
        <div className="button">
          <button id="btn">Send Us A Message</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
