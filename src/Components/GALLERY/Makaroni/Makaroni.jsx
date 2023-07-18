import React, { useState } from "react";
import dataMakaroni from "./dataMakaroni";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import BackBtn from "../BackButton";

export default function Makaroni() {
  const [popUp, setPopUp] = useState(null);

  return (
    <div id="makaroni-bg">
      <div className="container py-5">
        <div className="gallery-title">
          <h1 className="text-center mb-3">Malam Keakraban Gen IX</h1>
          <div className="d-flex justify-content-center mb-4">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="gallery-calendar"
            />
            <p>10 Maret 2023</p>
          </div>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 425: 2, 767: 3 }}>
          <Masonry gutter="15px">
            {dataMakaroni.map((photo, i) => (
              <div
                className="photo-frame"
                key={i}
                onClick={() => setPopUp(photo)}
              >
                {photo.type === "img" ? (
                  <img src={photo.src} alt={i} className="photo-frame-img" />
                ) : (
                  <video
                    src={`${photo.src}#t=0.001`}
                    muted
                    preload="metadata"
                    className="photo-frame-img"
                    controls
                  />
                )}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <div className="pop-up" style={{ display: popUp ? "block" : "none" }}>
          <span onClick={() => setPopUp(null)}>&times;</span>
          {popUp?.type === "img" ? (
            <img src={popUp?.src} alt="img" />
          ) : (
            <video src={popUp?.src} muted autoPlay controls />
          )}
        </div>

        <BackBtn />
      </div>
    </div>
  );
}
