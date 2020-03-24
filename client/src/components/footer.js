import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-12">
          <h5>229 Skokie Valley Road suite 24. Highland Park, IL 60035 </h5>
          <br />
          <div className="phone">Phone: (847) 777-0274</div>
          <br />
        </div>
      </div>
      <div className="icons">
        <a
          target="_blank"
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
        >
          <img scr="../../icons/fb.png" alt="facebook" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
        >
          <img scr="../../icons/insta.png" alt="instagram" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
        >
          <img scr="../../icons/yt.png" alt="facebook" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/explore"
          rel="noopener noreferrer"
        >
          <img scr="../../icons/twitter.png" alt="twitter" />
        </a>
      </div>
    </div>
  );
};
