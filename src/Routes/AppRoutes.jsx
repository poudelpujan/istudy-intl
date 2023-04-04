import React, { useEffect, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import { About } from "../pages/About/About";
import Process from "../pages/Process/Process";
import Gallery from "../pages/Gallery/Gallery";
import ContactUs from "../pages/Contacts/ContactUs";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import CountryUsa from "../pages/Countries/CountryUsa/CountryUsa";
import CountryCanada from "../pages/Countries/CountryCanada/CountryCanada";
import CountryAustralia from "../pages/Countries/CountryAustralia/CountryAustralia";
import CountryNewZealand from "../pages/Countries/CountryNewZealand/CountryNewZealand";
import CountryJapan from "../pages/Countries/CountryJapan/CountryJapan";
import CountryKorea from "../pages/Countries/CountryKorea/CountryKorea";
import CountryUk from "../pages/Countries/CountryUk/CountryUk";
import CoursesGed from "../pages/Courses/CoursesGed/CoursesGed";
import CoursesToefl from "../pages/Courses/CoursesToefl/CoursesToefl";
import CoursesSat from "../pages/Courses/CoursesSat/CoursesSat";
import CoursesPte from "../pages/Courses/CoursesPte/CoursesPte";
import CoursesIelts from "../pages/Courses/CoursesIelts/CoursesIelts";
import { ScrollToTop } from "./ScrollToTop";

const AppRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    const segments = document.title.split(" | ");
    segments[segments.length - 1] = segments[segments.length - 1].replace(
      /\/$/,
      ""
    );
    document.title = segments.join(" | ");
  }, [location]);

  return (
    <div>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/" element={<About title="About Us" />} />
        <Route path="/process/" element={<Process title="Process" />} />
        <Route path="/gallery/" element={<Gallery title="Gallery" />} />

        {/* study in abroad routes */}
        <Route
          path="/study-in/countries/canada/"
          element={<CountryCanada title="Study in Canada" />}
        />
        <Route
          path="/study-in/countries/australia/"
          element={<CountryAustralia title="Study in Australia" />}
        />
        <Route
          path="/study-in/countries/usa/"
          element={<CountryUsa title="Study in USA" />}
        />
        <Route
          path="/study-in/countries/uk/"
          element={<CountryUk title="Study in UK" />}
        />
        <Route
          path="/study-in/countries/new-zealand/"
          element={<CountryNewZealand title="Study in New Zealand" />}
        />
        <Route
          path="/study-in/countries/japan/"
          element={<CountryJapan title="Study in Japan" />}
        />
        <Route
          path="/study-in/countries/korea/"
          element={<CountryKorea title="Study in Korea" />}
        />

        {/* course routes */}
        <Route
          path="/courses/ielts/"
          element={<CoursesIelts title="Ielts" />}
        />
        <Route path="/courses/pte-a/" element={<CoursesPte title="PTE-A" />} />
        <Route path="/courses/sat/" element={<CoursesSat title="SAT" />} />
        <Route path="/courses/ged/" element={<CoursesGed title="GED" />} />
        <Route
          path="/courses/toefl/"
          element={<CoursesToefl title="TOEFL" />}
        />

        <Route path="/contact-us/" element={<ContactUs title="Contact Us" />} />

        <Route path="/404" element={<PageNotFound />} title="Page Not Found" />
        <Route
          path="*"
          element={<Navigate replace to="/404" title="Page Not Found" />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
