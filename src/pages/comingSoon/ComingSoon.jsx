import React from "react";
import background from "../../assets/Background-map.svg";
import {
  MdOutlineAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
const ComingSoon = () => {
  return (
    <div>
      <img src={background} className="background-map" alt="background map" />
      <section className="coming_soon-section">
        <div className="container">
          <div className="coming-soon">
            <h2>
              Discover your path to a brighter future. Our educational
              consultancy iStudy international there for you and
              <span className=""> Our website is coming soon! </span> Stay tuned
              for personalized guidance from experienced professional, tailored
              to your academic and career goals. From university to visa
              application, we'll be with you in every step of the way.
            </h2>
          </div>
          <div className="contacts">
            <div className="contact">
              <span className="label">
                Email <MdOutlineAlternateEmail />
              </span>
              <a href="#">
                shaileshistudy2010@gmail.com | istudyintl2010@gmail.com
              </a>
            </div>
            <div className="contact">
              <span className="label">
                Phone <MdOutlineLocalPhone />
              </span>
              <a href="#">01-5918853 | +977-9801848237</a>
            </div>
            <div className="contact">
              <span className="label">
                Location <MdOutlineLocationOn />
              </span>
              <a href="">Bagbazar, Kathmandu, Opposite of Everest Bank</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
