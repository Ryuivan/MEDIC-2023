import React, { useState } from "react";
import dataTofu1 from "./dataTofu1";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import BackBtn from '../BackButton';

export default function Tofu1() {
  const [popUp, setPopUp] = useState(null);

  return (
    <div id="tofu1-bg">
      <div className="container py-5">
        <div className="gallery-title">
          <h1 className="text-center mb-3">TOFU 1</h1>
          <div className="d-flex justify-content-center mb-4">
            <FontAwesomeIcon icon={ faCalendarCheck } className="gallery-calendar" />
            <p>16 Maret 2023</p>
          </div>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 425: 3 }}>
          <Masonry gutter="15px">
            {dataTofu1.map((photo, i) => (
              <div
                className="photo-frame"
                key={i}
                onClick={() => setPopUp(photo)}
              >
                <img src={photo} alt={i} className="photo-frame-img" />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <div className="pop-up" style={{ display: popUp ? "block" : "none" }}>
          <span onClick={() => setPopUp(null)}>&times;</span>
          <img src={popUp} alt={popUp} />
        </div>
        <BackBtn />
      </div>
    </div>
  );
}
