import background from "../../assets/images/hero.jpg";
import { AboutButton } from "../Buttons/buttons";

export const Hero = () => {
  return (
    <main className="main">
      <section className="container section banner banner-section">
        <div className=" banner-column">
          <img className="banner-image" src={background} alt="Illustration" />
          <div className="banner-inner">
            <h1 className="heading-xl">Your Pathway to Global Education.</h1>
            <p className="paragraph">
              Tailored guidance for Nepalese students pursuing higher education
              abroad. From program selection to ongoing support, we make your
              dreams a reality.
            </p>
            <AboutButton />
          </div>
        </div>
      </section>
    </main>
  );
};

// export default Header;
