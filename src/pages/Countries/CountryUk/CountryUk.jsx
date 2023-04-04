import React from "react";
import { studyAbroadData } from "../../../components/Layouts/Cards/cardsContents/CardsContents";

const CountryUk = () => {
  const countryData = studyAbroadData.find(
    (data) => data.title === "Study in UK"
  );

  return (
    <section className="is__country uk">
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
            United Kingdom, also known as Great Britain, has a population of
            65.54 million (2018). UK being the worlds’ 3rd Largest Economy has
            many opportunities for people of all age groups, backgrounds and
            cultures. London, the capital of UK is also its largest city, also
            called the Worlds’ cultural capital. London has a diverse range of
            people and cultures and more than 300 languages are spoken within
            its boundaries.
          </p>

          <p>
            Universities in UK are more focused on developing skills &amp;
            attributes which are in high demand from employers worldwide –
            attributes such as creativity, innovation, teamwork and leadership
            and exposure of students to the multi-cultural environment, which is
            conducive for learning and self-development. Great academic
            atmosphere and the presence of some of the most prestigious
            educational institutions in the UK make it one of the most favored
            education destinations in all of Europe. The UK also boasts of a
            rich and old cultural heritage.
          </p>

          <p>
            British higher education and qualifications have an impressive
            international reputation, with students in the United Kingdom
            encouraged to develop their potential while enjoying a full social
            life. There are 109 universities and university colleges in England
            out of a total of around 130 in the United Kingdom. 38,000 courses
            from archaeology to zoology is all provided. Studying in the UK will
            help you develop excellent language skills. English language is of
            crucial importance in today’s global business arena. Most UK
            universities offer language support to international students, but
            institutions have their own criteria for the level of English that
            students need to master. UK universities are inspected regularly to
            ensure that they uphold the high standards of teaching, learning and
            research set by the Government. The Quality Assurance Agency for
            Higher Education (QAA) is the key body charged with maintaining
            these standards.
          </p>

          <p>
            The cultural diversity of life in British higher education is
            unrivalled. From cosmopolitan cities like London, Cardiff, Belfast
            and Glasgow, to historic counties like Warwickshire and Yorkshire,
            the UK is a place of contrasts and culture, where ancient buildings
            sit alongside contemporary architecture.
          </p>

          <p>
            Undergraduate and postgraduate courses in the UK tend to be shorter
            than in other countries which can help to keep the cost of tuition
            fees and living expenses down. Most undergraduate courses take three
            years to complete, although in Scotland it would be typically four
            years and postgraduate courses can be from one year upwards.
            Typically, international students are allowed to work for up to 20
            hours a week during term time and full-time during holidays. If you
            are from an EU country, there will be even more flexibility. Full
            details about the conditions for working are on the UK Border Agency
            website. One needs the assistance of expert and knowledgeable UK /
            British Council trained educational consultants to help navigate
            through the admission and visa application process. With our Own
            Office based in UK with immensely capable Team being led by our
            Director Mr Hari Karki who is also one of the best professional
            British Council Trained Agent, is ever ready to assist you in your
            coming days in UK. We are only 1 of the Nepalese Education
            Consultancy which is fully functional and operational in UK.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryUk;
