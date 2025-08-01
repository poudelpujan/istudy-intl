import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.scss";

import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./components/Header/Header";

import Marquee from "./components/Marquee/Marquee";
import Modal from "./components/Modal/Modal";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="App">
      {/* <Modal /> */}
      <progress max="100" value="0"></progress>
      {/* <Marquee /> */}
      <Header />
      <div className="is__app__contents">
        <AppRoutes />
      </div>
      <Footer title="IStudy International Educational Consultancy" />
    </div>
  );
}

export default App;
