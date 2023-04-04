import React from "react";

import { studyAbroadData } from "../../../components/Layouts/Cards/cardsContents/CardsContents";

const CountryCanada = () => {
  const countryData = studyAbroadData.find(
    (data) => data.title === "Study in Canada"
  );

  return (
    <section className="is__country australia">
      <div
        className="is__section-top-header"
        style={{
          backgroundImage: `url(${countryData.image})`,
        }}
      >
        <div className="is__country-title">
          <h1>{countryData.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="row single-page-content">
          <p>
            Canada’s high academic standards and rigorous quality controls mean
            that you’ll be earning a high-quality education that will open doors
            for your future and benefit your career over the long term. A
            Canadian degree, diploma or certificate is globally recognized as
            being equivalent to those obtained from the United States, Australia
            and Europe. Even though there are only 96 universities in Canada
            which is less compared to universities of Australia and UK, their
            level of education is up to the par globally.
          </p>

          <p>
            In fact, in one study in 2016, three Canadian Universities were
            ranked in the top 50 universities in the world. There’s a wide array
            of Canadian institutions to choose from, but whether you attend a
            university, college or vocational school, there’s no doubt that a
            Canadian education is world-className.
          </p>

          <p>
            The Canadian Government and Universities plays an important role for
            the safety of students inside the university and across the country.
            Starting from health care to security, necessary measures will be
            taken to keep students safe. Students enjoy all sorts of freedom and
            government ensures protection with respect to human rights, equality
            that help the society to be peaceful. Medical insurance is very
            inexpensive in almost every hospital in Canada. Canada has been
            considered as one of the best places to live by the United Nations
            for highest ranking in education achievement. More than half of its
            residents graduate from college.
          </p>

          <p>
            During studies students are permitted to take up part time jobs both
            on campus and off campus. No work permit is needed to work on campus
            and students are allowed to work up to 20 hours per week. There are
            number of part time jobs available off campus like jobs in Hotels,
            hostels, Tutor etc. After graduation there are vast number of
            employment opportunities related to the technical domain. Students
            with knowledge and skills get placed easily in top companies with
            their dream job. Job prospects are strong for international
            students. Canadian work experience and education are highly valued
            everywhere in the world, so they could also increase your chances of
            receiving a job offer from employers all over the world.
          </p>

          <p>
            Your spouse is eligible for an open work permit and can be working
            full time in Canada while you are enrolled in classNamees. If you
            have children, they are welcome to attend Canada’s world-className
            public schools without the need of a student visa. Following your
            program of study, you, and your spouse, if you are married, will be
            eligible for a post-graduate work permit for two years and after the
            completion of one-year students can apply to become a permanent
            resident of Canada. What that means is that after you graduate you
            will be free to work and live in Canada while your application for
            Canadian Permanent Residence is processing to ensure you have
            continuous legal status in Canada.
          </p>

          <p>
            For more information on your Post Graduate Work Permit (PGWP)
            visit&nbsp;<a href="http://www.canada.ca/">www.canada.ca</a>
            &nbsp;for more details.
          </p>

          <p>
            But this will come later so for now let us first focus on obtaining
            the student permit, so you can get started on your new life as an
            international student in Canada. &nbsp;Bizz Education can help you
            get started studying in Canada. Our dedicated experts will help you
            find the right program based on your needs, and help you apply to
            the school. Once you’ve been accepted into a Canadian school, we’ll
            be able to help you apply for a study permit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryCanada;
