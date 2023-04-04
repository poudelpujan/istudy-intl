import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/svg/footer-image.svg";

const Footer = ({ title }) => {
  return (
    <div className="footer">
      {/* <div className="background">
        <img src={background} className="is__background-map" alt="" />
      </div> */}
      <div className="container">
        <div className="top-footer">
          <div className="col">
            <div className="short-info">
              <h5 className="widget-title">{title}</h5>
              <div className="text-widget">
                <p>
                  IStudy International Educational Consultancy that provides
                  students with test preparation and advising services for
                  studying in countries such as the USA, Australia, Canada,
                  Japan, New Zealand, and the UK with an aim to provide
                  high-quality services at an affordable cost.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="links">
              <h1>Quick Links</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Gallery</Link>
                </li>
                <li>
                  <Link to="/">Study Abroad</Link>
                </li>
                <li>
                  <Link to="/">Our Courses</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col">
            <div className="social">
              <h1>Social</h1>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div> */}
          <div className="clearfix"></div>
        </div>
        <div className="bottom-footer">
          <div className="pull-left">
            <span>
              &#169;IStudy International Education Consultancy. All rights
              reserved.
              {/* <Link to="/" target="/" _blank="">
                Pujan Poudel
              </Link> */}
            </span>
          </div>
          <div className="pull-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
