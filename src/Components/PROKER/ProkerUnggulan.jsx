import React, { useEffect } from "react";
import prokerUnggulan from "./dataProkerUnggulan";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProkerUnggulan() {
  
  useEffect(() => {
    AOS.init();
    
  }, []);

  return (
    <div className="container">
      <div className="proker-title text-center p-5">
        <h1>Program Kerja Unggulan</h1>
      </div>
      <div className="flash-container" id="proker-unggulan">
        <div className="card-container">
          {prokerUnggulan.map((card) => (
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
