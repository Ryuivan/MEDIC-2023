import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Info() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div className="container px-4" id="main-content">
      <div className="row">
        <div className="col">
          <h1 className="text-center">
            <Typewriter
              options={{
                strings: ["Informasi Terkait"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>

      <div className="row d-flex justify-content-center info-medic" data-aos='fade-down' data-aos-duration='1200' data-aos-once='true'>
        <div className="col-12 col-lg-5">
          <img
            src='https://cdn.discordapp.com/attachments/1079650552830513222/1123229937210499143/Medic532.webp'
            alt="No Font_Green.png"
            className="main-logo img-fluid"
            width={445}
            loading="lazy"
          />
        </div>
        <div className="col-12 col-lg-7">
          <h2 className="main-judul">UMN Medical Center</h2>
          <span className="main-underline"></span>
          <p className="main-desc">
            UMN Medical Center merupakan Lembaga Semi Otonom yang bertugas untuk
            memberikan berbagai pelayanan kesehatan, seperti memberikan
            pertolongan pertama, obat-obatan, dan edukasi kepada seluruh civitas
            akademika Universitas Multimedia Nusantara dengan menanamkan
            nilai-nilai 5C. <i>Tagline</i> UMN Medical Center Gen IX: Together
            We <b>GROW</b>.
          </p>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <button className="main-button d-flex align-items-center">
              Read More &nbsp;{" "}
              <FontAwesomeIcon icon={faArrowRight} beat size="xs" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
