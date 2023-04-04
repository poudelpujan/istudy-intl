import React from "react";
import { AboutButton } from "../../Buttons/buttons";
import { CourseCards } from "../../Layouts/Cards/Cards";
import { StudyAbroadCards } from "../Cards/Cards";
import MdImage from "../../../assets/images/Shailesh-Poudyal.jpeg";

export const ColumnAbout = ({ title }) => {
  return (
    <section className="is__aboutColumn ">
      <div className="is__aboutColumn-wrapper container">
        <div className="is__aboutColumn-wrapper-content">
          <div className="is__aboutColumn-wrapper-content-title">
            <h1>{title}</h1>
          </div>

          <div className="is__aboutColumn-wrapper-content-desc">
            <p>
              IStudy International Education is committed to provide the optimal
              assistance for Nepalese students seeking education at
              international educational institutions
            </p>
          </div>
          <div className="is__aboutColumn-btn">
            <AboutButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ColumnCourses = ({ title }) => {
  return (
    <section className="is__courses">
      <div className="is__courses-wrapper container">
        <div className="is__courses-wrapper-title">
          <h1>{title}</h1>
        </div>
        <div className="is__courses-wrapper-content">
          <CourseCards />
          {/* <div className="is__courses-wrapper-content-cards"></div> */}
        </div>
      </div>
    </section>
  );
};

export const ColumnStudyAbroad = ({ title }) => {
  return (
    <section className=" is__studyAbroad">
      <div className="is__studyAbroad-wrapper container">
        <div className="is__studyAbroad-wrapper-title">
          <h1>{title}</h1>
        </div>
        <div className="is__StudyAbroad-wrapper-content">
          <StudyAbroadCards />
        </div>
      </div>
    </section>
  );
};

export const MessageColumn = () => {
  return (
    <div className="is__messageColumn">
      <div className="container">
        <div className="is__messageColumn-title">
          <h1>Word From MD</h1>
        </div>
        <div className="message-section">
          <div className="message-user-img">
            <div className="swiper-container gallery-thumbs">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    class="u3"
                    src={MdImage}
                    alt="Message from MD of IStudy International Educational Consultancy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="user-saying">
            <div className="swiper-container message">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper ">
                {/* <!-- Slides --> */}
                <div className="swiper-slide">
                  <div className="quote">
                    <p>
                      My name is Shailesh Poudyal, and I am proud to have
                      graduated from Anglia Ruskin University with a Master's
                      degree. Having lived in the United Kingdom for over 12
                      years, I have gained a deep understanding of the country's
                      education system, culture, and visa application
                      procedures. Using this knowledge and experience, I founded
                      an education consultancy based in Bagbazaar, where we
                      specialize in assisting clients with visa and
                      documentation processing for countries including the USA,
                      UK, Australia, Canada, and New Zealand.{" "}
                    </p>

                    <br />
                    <p>
                      At our consultancy, we strive to provide our clients with
                      personalized, high-quality services that cater to their
                      unique needs and circumstances. Our team of experts is
                      committed to offering expert guidance and support
                      throughout the application process, ensuring that our
                      clients have a smooth and hassle-free experience. We take
                      pride in our attention to detail, our thorough knowledge
                      of visa application procedures, and our commitment to
                      providing timely and efficient services. Our goal is to
                      help our clients achieve their dreams of studying abroad,
                      and we do everything we can to ensure their success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
