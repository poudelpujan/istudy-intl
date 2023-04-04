import React from "react";

import { studyAbroadData } from "../../../components/Layouts/Cards/cardsContents/CardsContents";

const CountryAustralia = () => {
  const countryData = studyAbroadData.find(
    (data) => data.title === "Study in Australia"
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
        <div className="row page-content">
          <p>
            Australia is famous for offering a great environment and high living
            standards. At the forefront of technological advancements and
            innovations, Australia offers student the top-class advantage of
            impressive resources. Along with that, Australia also has large
            number of impeccable institutions for Management, Commerce and
            Accounting, Arts and Humanities, Medical related, Engineering and
            Technology, Life Sciences, Social Sciences, Physical Sciences, and
            other courses with Scholarships on offer, makes Australia rather
            popular amongst students. With numerous top universities in the
            world located in Australia, the popularity of Australia as a top
            study destination has been increasing day by day.
          </p>

          <p>
            There is a total of 43 accredited universities in Australia
            comprising 40 Australian universities, 2 international universities
            and a smaller private specialty university. Higher education courses
            and qualifications are also offered by many non-university providers
            in the higher education sector. Likewise, there are 4279 vocational
            education and training providers.
          </p>

          {/* <figure class="wp-block-image"><img src="https://capitalstudynepal.com/wp-content/uploads/2018/10/unnamed-2.jpg" alt="" class="wp-image-4830"></figure> */}

          <p>
            Australia has helped science and research through incredible
            discoveries, excellent education programs and global collaborations.
            Australian Cities like Sydney, Melbourne and Adelaide are ranked as
            the overall best cities to live. They are safe, modern and friendly
            territory. With multiculturalism in their essence, it is difficult
            not to love this harmonious society.
          </p>

          <p>
            And with this increase in popularity, one needs the assistance of
            expert and knowledgeable Australian educational consultants to help
            navigate through the admission and visa application process. With
            our Own Head Office based in Sydney with immensely capable Team
            being lead by our Founder / Director Mr Kirtu KC, one of the best
            professional Registered Migration Agent, is ever ready to assist you
            in your coming days in Australia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryAustralia;
