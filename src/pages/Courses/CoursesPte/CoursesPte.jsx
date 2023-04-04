import React from "react";

const CoursesPte = ({ title }) => {
  return (
    <section className="is__coursesSection">
      <div className="is__coursesSection-wrapper container ">
        <div className="is__coursesSection-wrapper-content">
          <div className="is__courses-title">
            <h1 className="courses-heading">{title}</h1>
          </div>
          <div className="row single-page-content container">
            <p>
              PTE-A, or Pearson Test of English Academic, is a computer-based
              English language proficiency test used for studying abroad,
              immigration, and visa purposes. The test assesses the candidate's
              proficiency in listening, reading, speaking, and writing skills.
              <br />
              <br />
              The test is conducted in a secure, computer-based testing
              environment, with test centers located in various cities across
              the world. Candidates can register for the test online and choose
              a test center and date that suits them.
              <br />
              <br />
              The PTE-A test consists of three main sections: Speaking and
              Writing, Reading, and Listening. Each of these sections consists
              of a range of task types that are designed to test different
              aspects of the candidate's language proficiency.
              <br />
              <br />
              In the Speaking and Writing section, there are six task types,
              including reading aloud, repeating sentences, describing images,
              and writing essays. Candidates are evaluated on their ability to
              express themselves clearly and coherently in spoken and written
              English.
              <br />
              <br />
              The Reading section consists of five task types, including
              multiple-choice, re-order paragraphs, and fill in the blanks. The
              tasks assess the candidate's ability to understand academic
              vocabulary, infer meaning from context, and comprehend written
              text.
              <br />
              <br />
              The Listening section has eight task types, including
              multiple-choice, highlight incorrect words, and fill in the
              blanks. The tasks evaluate the candidate's ability to understand
              spoken English in an academic context, including lectures,
              interviews, and conversations.
              <br />
              <br />
              To prepare for the PTE-A test, candidates should focus on
              developing their overall English language proficiency. They can
              practice their reading, writing, speaking, and listening skills
              using a range of materials, including textbooks, online courses,
              and practice tests. Additionally, familiarizing themselves with
              the test format and practicing with sample questions can help
              build their confidence and improve their performance on the test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPte;
