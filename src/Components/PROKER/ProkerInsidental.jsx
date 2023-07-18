import React, { useEffect } from "react";
import prokerInsidental from "./dataProkerInsidental";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProkerInsidental() {

  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div className="container">
      <div className="proker-title text-center p-5">
        <h1>Program Kerja Insidental</h1>
      </div>
      <div className="flash-container pb-5" id="proker-unggulan">
        <div className="card-container pb-5">
          {prokerInsidental.map((card) => (
            <div className="flip-card" key={card.id} data-aos='fade-down' data-aos-duration='1200' data-aos-once='true'>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={card.img}
                    alt={card.title}
                                        className="flash-img"

                  />
                </div>
                <div className="flip-card-back">
                  <h2>{card.title}</h2>
                  <h4>{card.alias}</h4>
                  <h5>{card.desc}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
