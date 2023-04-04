import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import { AboutCards } from "../../components/Layouts/Cards/Cards";
import {
  ColumnAbout,
  ColumnCourses,
  ColumnStudyAbroad,
} from "../../components/Layouts/Columns/Columns";

const Home = () => {
  return (
    <div className="main_home">
      <Hero />
      <AboutCards />
      <ColumnAbout title="Our Approach" />
      <ColumnCourses title="Courses Offered" />
      <ColumnStudyAbroad title="Study Abroad" />
    </div>
  );
};

export default Home;
