import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactUs = () => {
  return (
    <React.Fragment>
    

      <section className="contact-section">
        <div className="container">
          <div className="contact-heading">
            <h2>Get in touch</h2>
          </div>
          <div className="contacts">
            <div className="contact email">
              <span className="label">
                Email <MdOutlineAlternateEmail />
              </span>
              <Link href="#">shaileshistudy2010@gmail.com</Link>
              <Link href="#">istudyintl2010@gmail.com</Link>
            </div>
            <div className="contact phone">
              <span className="label">
                Phone <MdOutlineLocalPhone />
              </span>
              <Link href="#">01-5919361</Link>
              <Link href="#">+977-9801848237</Link>
            </div>
            <div className="contact location">
              <span className="label">
                Location <MdOutlineLocationOn />
              </span>
              <Link href="#">
                Bagbazar, Kathmandu, Opposite of Everest Bank
              </Link>
            </div>
          </div>
          <div className="contact-text">
            <p>
              Thank you for choosing us for your abroad studies. We'd love to
              hear from you! Please feel free to reach out to us via phone or
              email, or connect with us on social media.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
