import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Visi.css";

export default function Visi() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div className="container px-4" data-aos='fade-down' data-aos-duration='1200' data-aos-once='true'>
      <div className="row">
        <div className="col text-center">
          <h2 className="visi-judul">Visi</h2>
          <span className="visi-underline"></span>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <h3 className="grow"><b>GROW</b></h3>
        </div>
      </div>

      <div className="row">
        <ul className="visi-list d-flex justify-content-center">
          <div className="col col-visi">
            <li>
              <i>
                <b>G</b>
                ood Work
              </i>
            </li>
          </div>
          <div className="col col-visi">
            <li>
              <i>
                <b>R</b>
                espect to others
              </i>
            </li>
          </div>
          <div className="col col-visi">
            <li>
              <i>
                <b>O</b>
                ver the limit
              </i>
            </li>
          </div>
          <div className="col col-visi">
            <li>
              <i>
                <b>W</b>
                inning the team
              </i>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
