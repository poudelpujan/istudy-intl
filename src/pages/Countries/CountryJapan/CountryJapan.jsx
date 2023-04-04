import React from "react";
import { studyAbroadData } from "../../../components/Layouts/Cards/cardsContents/CardsContents";

const CountryJapan = () => {
  const countryData = studyAbroadData.find(
    (data) => data.title === "Study in Japan"
  );
  return (
    <section className="is__country japan">
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
            Japan's academic environment is particularly attractive due to the
            opportunity to learn about cutting-edge technology and gain
            knowledge that contributed to the country's remarkable post-war
            economic progress. Japanese universities and other higher education
            institutions provide programs of study or research in nearly any
            field, including electronics, Japanese literature, medicine, and
            international business administration.
          </p>
          <p>
            In Japan, a large proportion of students, specifically 56.2%, choose
            to pursue undergraduate degrees or regular courses at junior
            colleges, indicating a high level of education. The universities and
            junior colleges in Japan are equipped with modern research
            facilities, computer labs, and extensive libraries, which provide
            students with an excellent learning environment to carry out their
            research.
          </p>
          <br />
          <br />

          <h3>Nepalese students for choosing to study in Japan:</h3>
          <p>&nbsp;</p>
          <p>
            A typical path for students interested in studying in Japan involves
            enrolling in a 12 to 15-month Japanese Language course before
            pursuing academic study at Japanese colleges or universities. It is
            important for students to recognize that fluency in the language is
            a prerequisite for the main course of study.
          </p>
          <br />
          <p>
            To begin with, students who aspire to study in Japan usually start
            by enrolling in a Japanese language institution after arriving in
            the country. They typically spend one to two years studying Japanese
            and other related subjects before taking the university entrance
            exam. Therefore, the selection of the appropriate Japanese language
            institution is critical for prospective students. Similarly, in
            Nepal, studying in the USA has become the most sought-after choice
            for students who want to study abroad.
          </p>
          <p>
            Foreign students who desire to pursue undergraduate or postgraduate
            studies in Japan can enroll in two categories of Japanese language
            institutions.
          </p>
          <br />
          <h4>
            1. Private universities provide preparatory Japanese language
            courses for foreign students.
          </h4>
          <p>&nbsp;</p>
          <div>
            <ul>
              <li>
                Private universities offer preparatory Japanese language courses
                for foreign students as a part of the regular university
                curriculum according to the School Education Law. These courses
                aim to provide preparatory education on the Japanese language,
                culture, and society, as well as other essential subjects for
                students or researchers who plan to pursue undergraduate,
                postgraduate, or junior college programs at Japanese
                universities.
              </li>
              <li>
                The curriculum of preparatory Japanese language courses offered
                by private universities includes teachings on the Japanese
                language, Japanese society and culture, and other fundamental
                subjects, which are mostly taught in Japanese. Nonetheless, a
                few schools provide the courses in English. Students who take
                these special courses offered by private universities are
                granted the "College Student" status for their residence.
              </li>
              <li>
                Private universities and junior colleges in Japan offer
                preparatory Japanese language courses for foreign students, and
                there are a total of 66 schools offering such courses. It is
                crucial for each foreign student to choose the most suitable
                program, taking into account their reasons for studying in
                Japan, their field of study, and future plans after completing
                the preparatory course. Some universities may offer special
                benefits and procedures to students who stay at the same
                institution as the one providing the preparatory Japanese
                language courses, such as exemption from the admissions
                selection process.
              </li>
            </ul>
            <p>&nbsp;</p>
          </div>
          <h4>
            2. Institutions in Japan that offer Japanese language courses
            specifically for foreign students.
          </h4>
          <p>&nbsp;</p>
          <div>
            <ul>
              <li>
                Foreigners who are interested in studying at universities or
                other educational institutes in Japan might consider enrolling
                in a Japanese language institution that provides Japanese
                language courses before starting their undergraduate or graduate
                studies. There are several types of language institutions, such
                as specialized training schools or vocational colleges, that
                fall under the category of "kakushu gakko" (various schools), as
                well as other establishments similar to kakushu gakko. In such
                cases, prospective foreign students are advised to check the
                official website of the Ministry of Justice and verify that the
                language school they have chosen is an officially designated
                Japanese language institute listed in the Ministry's relevant
                announcement.
              </li>
              <li>
                Foreign students who are enrolled in a recognized Japanese
                language institute may be granted a "exchange student" residency
                status to enter Japan
              </li>
            </ul>
            <p>&nbsp;</p>
          </div>
          <h4>
            The top/most compelling/most convincing reason to acquire
            proficiency in the Japanese language.
          </h4>
          <p>&nbsp;</p>
          <div>
            <ul>
              <li>Japan possesses the second largest economy globally.</li>
              <li>
                Acquiring proficiency in Japanese can lead to profitable
                business prospects.
              </li>
              <li>
                Knowledge of the Japanese language can serve as a gateway to
                exploring other Asian languages and cultures.
              </li>
              <li>
                Japanese speakers are the third largest language group on the
                Internet.
              </li>
              <li>Japanese people are renowned for their innovation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryJapan;
