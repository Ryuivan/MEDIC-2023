import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import AboutCarousel from "./Carousel/Carousel";
import Info from "./Info/Info";
import Tagline from "./Info/Tagline";
import Organigram from "./Info/Organigram";
import FilosofiLogo from "./Info/FilosofiLogo";
import Maskot from "./Info/Maskot";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <>
      <AboutCarousel />
      <div id="about-bg" className="m-0">
        <div className="container">
          <Info />
          <div className="mainLine"></div>
          <Tagline />
          <div className="mainLine"></div>
          <Organigram />
          <div className="mainLine"></div>
          <FilosofiLogo />
          <div className="mainLine"></div>
          <Maskot />
        </div>
      </div>
    </>
  );
}
