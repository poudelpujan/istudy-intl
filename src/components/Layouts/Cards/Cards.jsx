import React from "react";
import Ielts from "../../../assets/svg/ielts-logo.svg";
import Pte from "../../../assets/svg/pte-logo.svg";
import Ged from "../../../assets/svg/ged-logo.svg";
import Toefl from "../../../assets/svg/TOEFL-logo.svg";
import Sat from "../../../assets/svg/SAT-logo.svg";
import { Link } from "react-router-dom";

import { FaCogs, FaRegCompass, FaBullseye } from "react-icons/fa";

export const AboutCards = () => {
  return (
    <section className="container is__grid">
      <div className=" aboutCard is__card ">
        <div className="is__card__content">
          <span className="is__icon">
            <FaCogs />
          </span>
          <h4>Our Process</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
        </div>
      </div>
      <div className="aboutCard is__card ">
        <div className="is__card__content">
          <span className="is__icon">
            <FaRegCompass />
          </span>
          <h4>Our Mission</h4>
          <p>
            Our aim is to provide reasonably priced, excellent quality test
            preparation and precise advising services for students.
          </p>
        </div>
      </div>
      <div className="aboutCard is__card ">
        <div className="is__card__content">
          <span className="is__icon">
            <FaBullseye />
          </span>
          <h4>Our Goal</h4>
          <p>
            Our goal is to offer an excellent academic and social setting that
            caters to the unique needs of every student who wishes to pursue
            education overseas.
          </p>
        </div>
      </div>
    </section>
  );
};

export const CourseCards = () => {
  return (
    <section className="is__course-section">
      <div className="courseCard">
        <div className="is__course-content">
          <Link className="is__course-content-link" to="/courses/ielts/">
            <span className="is__icon">
              <img src={Ielts} alt="ielts" />
            </span>
            <h1 className="is__course-content-title">IELTS</h1>
          </Link>
        </div>
      </div>

      <div className="courseCard ">
        <div className="is__course-content">
          <Link className="is__course-content-link" to="/courses/pte/">
            <span className="is__icon">
              <img src={Pte} alt="pte" />
            </span>
            <h1 className="is__course-content-title">PTE</h1>
          </Link>
        </div>
      </div>

      <div className="courseCard">
        <div className="is__course-content">
          <Link className="is__course-content-link" to="/courses/sat/">
            <span className="is__icon">
              <img src={Sat} alt="sat" />
            </span>
            <h1 className="is__course-content-title">SAT</h1>
          </Link>
        </div>
      </div>

      <div className="courseCard">
        <div className="is__course-content">
          <Link className="is__course-content-link" to="/courses/ged/">
            <span className="is__icon">
              <img src={Ged} alt="ged" />
            </span>
            <h1 className="is__course-content-title">GED</h1>
          </Link>
        </div>
      </div>

      <div className="courseCard">
        <div className="is__course-content">
          <Link className="is__course-content-link" to="/courses/Toefl/">
            <span className="is__icon">
              <img src={Toefl} alt="toefl" />
            </span>
            <h1 className="is__course-content-title">TOEFL</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const StudyAbroadCards = () => {
  return (
    <section className="is__studyAbroad-section">
      {/* canada */}
      <Link
        to="/study-in/countries/canada/"
        className="is__studyAbroadCards-link"
      >
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://images.unsplash.com/photo-1605722822013-a30324eb0dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
              alt="canada"
              loading="lazy"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>Canada</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* australia */}
      <Link
        to="/study-in/countries/australia/"
        className="is__studyAbroadCards-link"
      >
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80"
              alt="study-in-australia"
              loading="lazy"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>Australia</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* usa */}
      <Link to="/study-in/countries/usa/" className="is__studyAbroadCards-link">
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80"
              alt="study-in-usa"
              loading="lazy"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>USA</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* uk */}
      <Link to="/study-in/countries/uk/" className="is__studyAbroadCards-link">
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="uk"
              loading="lazy"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>UK</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* new zealand */}
      <Link
        to="/study-in/countries/new-zealand/"
        className="is__studyAbroadCards-link"
      >
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://i.pinimg.com/564x/f0/67/1f/f0671fbc040ad131372ff600b9015494.jpg"
              alt="study-in-new-zealand"
              loading="lazy"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>New Zealand</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* japan */}
      <Link
        to="/study-in/countries/japan/"
        className="is__studyAbroadCards-link"
      >
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://images.unsplash.com/photo-1584958902498-0391eabc47e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="japan"
              loading="lazy"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>Japan</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* korea */}
      <Link
        to="/study-in/countries/korea/"
        className="is__studyAbroadCards-link"
      >
        <div className="is__studyAbroadCards">
          <div className="is__studyAbroadCards-background background-image">
            <img
              src="https://images.pexels.com/photos/2376713/pexels-photo-2376713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="study-in-korea"
            />
          </div>
          <div className="is__studyAbroadCards-content">
            <div className="is__studyAbroadCards-content-items">
              <span className="is__studyAbroadCards-title">
                <h3>Study In</h3>
              </span>
              <span className="is__studyAbroadCards-desc">
                <h1>Korea</h1>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};
