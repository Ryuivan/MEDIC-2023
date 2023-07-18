import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPreview(props) {
  return (
    <div
      className="photo-card"
      key={props.id}
    >
      <Link to={`/gallery/${props.title}`}>
        <div className="photo">
          <img src={props.img} alt={props.title} className="photo-img" />
        </div>
        <div className="img-overlay img-overlay-blur">
          <div className="img-title">
            <h3>{props.title}</h3>
            <h6>{props.tanggal}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
