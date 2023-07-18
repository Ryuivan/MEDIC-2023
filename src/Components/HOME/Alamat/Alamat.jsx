import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Alamat.css";

export default function Alamat() {
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: "load",
    });
  }, []);

  return (
    <div className="container px-4" id="alamat" data-aos='fade-down' data-aos-duration='1200' data-aos-once='true'>
      <div className="row">
        <div className="col-12 col-lg-5">
          <h2 className="alamat-judul">Alamat</h2>
          <span className="alamat-underline"></span>
          <p className="alamat-desc">
            Gedung A, Universitas Multimedia Nusantara, Jalan Scientia Boulevard
            Gading, Curug Sangereng, Serpong, Kecamatan Kelapa Dua, Kabupaten
            Tangerang, Banten 15810.
          </p>
        </div>
        <div className="col-12 col-lg-7">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="alamat"
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0521817331814!2d106.61592027598088!3d-6.256856561260872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1682008053931!5m2!1sen!2sid"
              width="95%"
              height="300"
              style={{ border: "0", marginBottom: "100px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
