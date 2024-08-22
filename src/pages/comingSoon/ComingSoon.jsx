import React from "react";

import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ComingSoon = () => {
  return (
    // <div className="container">
    <div className="card">
      <div className="coming-soon_header">
        <div className="coming-soon_social">
          <a
            href="https://facebook.com"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="coming-soon_link"
          >
            <FaFacebookF className="icon" />
          </a>
          <a
            href="https://twitter.com"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="coming-soon_link"
          >
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
      <div className="coming-soon_content">
        <div className="title-holder">
          <h1>
            <strong>🎉 Exciting News!!!</strong>.
          </h1>
          <h5>
            🎉 Our new branch is opening on 7<sup>th</sup> of September , 2024
            (Bhadra 22<sup>nd</sup>, 2081) in Sallaghari, Bhaktapur! Stay
            <br />
            tuned for the special offers. Thank you for your continued support!
            🚀
          </h5>
        </div>
      </div>
      <div className="coming-soon_footer">
        <a href="mailto:user@example.com" className="coming-soon_link">
          <div className="cta">Send us an email</div>
        </a>
      </div>
    </div>
    // </div>
  );
};

export default ComingSoon;
