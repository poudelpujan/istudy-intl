import React from "react";

const CoursesSat = ({ title }) => {
  return (
    <section className="is__coursesSection">
      <div className="is__coursesSection-wrapper container ">
        <div className="is__coursesSection-wrapper-content">
          <div className="is__courses-title">
            <h1 className="courses-heading">{title}</h1>
          </div>
          <div className="row single-page-content container">
            <p>
              SAT is a standardized test used for college admissions in the
              United States. It measures a student's readiness for college by
              assessing their knowledge of reading, writing, and math. The test
              consists of four sections: Reading, Writing and Language, Math
              (with calculator), and Math (without calculator). The test also
              includes an optional essay section.
            </p>
            <br />
            <br />
            <p>
              The Reading section includes 52 multiple-choice questions based on
              passages from literature, history/social studies, and science.
              Students are given 65 minutes to complete this section.
            </p>
            <br />
            <br />
            <p>
              The Writing and Language section includes 44 multiple-choice
              questions based on passages related to Careers, History/Social
              Studies, Humanities, and Science. Students are given 35 minutes to
              complete this section.
            </p>
            <br />
            <br />
            <p>
              The Math section includes two parts: one with a calculator and one
              without a calculator. The section includes 58 multiple-choice and
              grid-in questions based on algebra, problem-solving and data
              analysis, and advanced math concepts. Students are given 80
              minutes to complete both parts of the Math section.
            </p>
            <br />
            <br />
            <p>
              The optional Essay section requires students to read a passage and
              then write an essay that analyzes the author's argument. Students
              are given 50 minutes to complete this section.
              <br />
              <br />
              To prepare for the SAT, students can take practice tests and
              review study materials available on the College Board website.
              They can also enroll in test preparation courses or work with a
              tutor. It is important for students to develop strong reading and
              critical thinking skills to perform well on the exam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSat;
