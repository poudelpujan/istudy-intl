import React from "react";

import { studyAbroadData } from "../../../components/Layouts/Cards/cardsContents/CardsContents";

const CountryUsa = () => {
  const countryData = studyAbroadData.find(
    (data) => data.title === "Study in USA"
  );

  return (
    <section className="is__country usa">
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
            The United States has one of the world’s finest university systems,
            with outstanding programs in virtually all fields. At the
            undergraduate level, excellent programs exist in traditional
            disciplines, as well as in professional fields. At the graduate
            level, students have the opportunity to work directly with some of
            the finest minds in their field of study, with the chance to become
            involved with exclusive research and educational opportunities. U.S.
            degrees are recognized throughout the world for their excellence.
            Around 80% of the research all over the world is being conducted.
          </p>

          {/* <figure className="wp-block-image"></figure> */}
          {/* <figure>
<img className="wp-image-4834" src="https://capitalstudynepal.com/wp-content/uploads/2018/10/maxresdefault.jpg" alt="country usa">
</figure> */}

          <br />
          <p>
            <strong>USA Cost/Aid Facts</strong>
          </p>

          <p>
            The cost of the study per year (Tuition and fees, does not include
            living expenses) in USA varies from $5000 to $50000 (might be much
            more too for MBA/Medical or other programs) per year. The cost of
            living depends on the location. For example States like Washington,
            California and area around New York is costly. In general cost of
            living for students from countries like India, Bangladesh, China,
            Taiwan may vary from $6000 to $14000 (per year).It is assumed that
            students will live in shared apartments, live out of campus and have
            less telephone bills and other expenses are at bay. Most of all
            expenses can be met while working on on-campus jobs. The hourly pay
            for on-campus job varies from $5.15 to $15 per (sometimes it may be
            $20) hour. Foreign students can work for 20 hrs per week and 40 hrs
            per week during summer. Students may be allowed to work out of
            campus (internship) after nine months(2 semesters) of their arrival
            at USA. Students receiving any type of aid like TA/RA/Fellowship or
            GA need not have to worry about costs. Students not receiving any
            kind of aid must be prepared for tuition fees and living cost for
            initial 2-3 months (also please note : getting on-campus job might
            take some time.. earlier you come the better). Also note that in
            some universities like University of Missouri-Rolla and University
            of Texas Arlington there is huge shortage of P/T jobs. So students
            planning to go to these universities must either have Scholarships
            or adequate Funds. It’s better to contact current students via email
            for latest information. For many universities students can pay the
            fees of their last semester even after graduation.
          </p>

          <p>
            Some Universities grant tuition waiver after first semester (if
            performance in 1st semester is good). It is also possible that some
            other department may offer scholarship (Like you might be doing MBA
            but you might find a software job in Medical college and they might
            offer you scholarships).
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryUsa;
