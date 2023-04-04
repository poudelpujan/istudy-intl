import React from "react";
import { MessageColumn } from "../../components/Layouts/Columns/Columns";

export const About = ({ title }) => {
  return (
    <section className="is__aboutSection ">
      <div className="is__aboutSection-wrapper container">
        <div className="is__aboutSection-wrapper-content">
          <div className="is__about-title">
            <h1 className="about-heading">{title}</h1>
          </div>

          <div className="is__aboutSection-content-quote container">
            <div className="is__aboutSection-quote-underlineStyle">
              <q>
                You are capable of overcoming the challenges that come with
                studying abroad. Have faith in yourself
              </q>
            </div>
            <div className="is__aboutSection-content-descs">
              <p>
                IStudy International Educational Consultancy is an exclusive
                educational consulting agency that provides reasonably priced
                and top-notch test preparation and precise advisory services to
                students aspiring to study in UK, Canada, Australia, New
                Zealand, Japan, Korea, and the USA. Our main objective is to
                align our services with the expectations of Nepalese students,
                families, and our partner institutions
              </p>
            </div>
            <div className="is__aboutSection-content-objs">
              <h3>Objectives</h3>
              <p>
                Our objective at IStudy International Educational Consultancy is
                to provide affordable and high-quality test preparation and
                accurate advising services to Nepalese students seeking to study
                in the U.S.A, Australia, Canada, and some Asian as well as
                European countries. We aim to guide each student towards success
                in their career building journey by offering specialized
                educational and overseas placement services.
              </p>
            </div>
          </div>
          <MessageColumn />
        </div>
      </div>
    </section>
  );
};

// export default About;
